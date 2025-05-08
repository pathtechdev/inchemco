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
    console.log("Fetching categories...");
    
    // Lấy danh sách danh mục và số lượng tin tức trong mỗi danh mục
    const categoriesResponse = await fetch(`${SUPABASE_URL}/rest/v1/categories?select=id,name,slug,description&order=name.asc`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "apikey": SUPABASE_SERVICE_ROLE_KEY,
        "Authorization": `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`,
      }
    });

    if (!categoriesResponse.ok) {
      const errorText = await categoriesResponse.text();
      console.error("Error fetching categories:", categoriesResponse.status, errorText);
      return new Response(
        JSON.stringify({ error: `Failed to fetch categories (Status: ${categoriesResponse.status})` }),
        {
          status: categoriesResponse.status,
          headers: { ...CORS_HEADERS, "Content-Type": "application/json" }
        }
      );
    }

    const categories = await categoriesResponse.json();
    console.log(`Found ${categories.length} categories`);
    
    // Lấy số lượng tin tức trong mỗi danh mục
    const categoryCounts = await Promise.all(
      categories.map(async (category: any) => {
        try {
          const countResponse = await fetch(`${SUPABASE_URL}/rest/v1/news?category_id=eq.${encodeURIComponent(category.id)}&select=id`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              "apikey": SUPABASE_SERVICE_ROLE_KEY,
              "Authorization": `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`,
            }
          });

          if (countResponse.ok) {
            const items = await countResponse.json();
            return { ...category, count: items.length };
          }
          
          return { ...category, count: 0 };
        } catch (e) {
          console.error(`Error counting news for category ${category.id}:`, e);
          return { ...category, count: 0 };
        }
      })
    );

    // Thêm danh mục "Tất cả" vào đầu danh sách
    let totalNewsCount = 0;
    try {
      const allNewsCountResponse = await fetch(`${SUPABASE_URL}/rest/v1/news?select=id`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "apikey": SUPABASE_SERVICE_ROLE_KEY,
          "Authorization": `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`,
        }
      });

      if (allNewsCountResponse.ok) {
        const items = await allNewsCountResponse.json();
        totalNewsCount = items.length;
      }
    } catch (e) {
      console.error("Error counting all news:", e);
    }

    const allCategory = {
      id: "all",
      name: "Tất cả",
      slug: "all",
      count: totalNewsCount
    };

    // Bổ sung danh mục "Tất cả" vào đầu danh sách
    const finalCategories = [allCategory, ...categoryCounts];

    console.log(`Returning ${finalCategories.length} categories (including "All")`);
    
    return new Response(
      JSON.stringify({ 
        data: finalCategories,
        count: finalCategories.length 
      }),
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