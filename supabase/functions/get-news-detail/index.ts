import { serve } from "../_shared/deno_std/http/server.ts";

const SUPABASE_URL = Deno.env.get("SUPABASE_URL");
const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");

if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
  throw new Error("SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY are required.");
}

const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, OPTIONS",
  "Access-Control-Allow-Headers": "authorization,apikey,content-type",
};

function parseQuery(url: string) {
  const u = new URL(url);
  return Object.fromEntries(u.searchParams.entries());
}

serve(async (req) => {
  // Handle OPTIONS preflight request
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: CORS_HEADERS });
  }

  if (req.method !== "GET") {
    return new Response(
      JSON.stringify({ error: "Method not allowed" }),
      {
        status: 405,
        headers: { ...CORS_HEADERS, "Content-Type": "application/json" }
      }
    );
  }

  try {
    const { slug } = parseQuery(req.url);
    console.log(`Fetching news with slug: ${slug}`);
    
    if (!slug) {
      return new Response(
        JSON.stringify({ error: "Slug parameter is required" }),
        {
          status: 400,
          headers: { ...CORS_HEADERS, "Content-Type": "application/json" }
        }
      );
    }

    // Lấy chi tiết tin tức kèm thông tin danh mục
    const response = await fetch(`${SUPABASE_URL}/rest/v1/news?slug=eq.${encodeURIComponent(slug)}&select=id,created_at,updated_at,title,slug,content,summary,image_path,published_at,status,author_name,tags,category_id,categories(id,name,slug)`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "apikey": SUPABASE_SERVICE_ROLE_KEY,
        "Prefer": "return=representation"
      }
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Error fetching news:", response.status, errorText);
      return new Response(
        JSON.stringify({ error: `Failed to fetch news (Status: ${response.status})` }),
        {
          status: response.status,
          headers: { ...CORS_HEADERS, "Content-Type": "application/json" }
        }
      );
    }

    const news = await response.json();
    
    if (!news || news.length === 0) {
      console.log(`News with slug ${slug} not found`);
      return new Response(
        JSON.stringify({ error: "News not found" }),
        {
          status: 404,
          headers: { ...CORS_HEADERS, "Content-Type": "application/json" }
        }
      );
    }

    // Format lại dữ liệu để dễ sử dụng ở frontend
    const newsItem = news[0];
    const formattedData = {
      ...newsItem,
      category: newsItem.categories?.name || null,
      category_name: newsItem.categories?.name || null,
      categorySlug: newsItem.categories?.slug || null,
      category_slug: newsItem.categories?.slug || null,
    };

    console.log(`Found news item: ${formattedData.title}`);
    
    return new Response(
      JSON.stringify({ data: formattedData }),
      {
        headers: { ...CORS_HEADERS, "Content-Type": "application/json" }
      }
    );
  } catch (error) {
    console.error("Server error:", error);
    
    return new Response(
      JSON.stringify({ error: "Internal server error", details: String(error) }),
      {
        status: 500,
        headers: { ...CORS_HEADERS, "Content-Type": "application/json" }
      }
    );
  }
}); 