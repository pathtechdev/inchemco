import { serve } from "../_shared/deno_std/http/server.ts";

const SUPABASE_URL = Deno.env.get("SUPABASE_URL");
const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");

if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
  throw new Error("SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY are required.");
}

const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "authorization,apikey,content-type",
};

serve(async (req) => {
  // Handle OPTIONS preflight request
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: CORS_HEADERS });
  }

  if (req.method !== "POST") {
    return new Response(
      JSON.stringify({ error: "Method not allowed" }),
      {
        status: 405,
        headers: { ...CORS_HEADERS, "Content-Type": "application/json" }
      }
    );
  }

  try {
    const newsData = await req.json();
    console.log("Creating news with data:", JSON.stringify(newsData, null, 2));
    
    // Validate required fields
    if (!newsData.title || !newsData.slug) {
      return new Response(
        JSON.stringify({ error: "Title and slug are required" }),
        {
          status: 400,
          headers: { ...CORS_HEADERS, "Content-Type": "application/json" }
        }
      );
    }

    // Check if the slug is already used
    const checkSlugResponse = await fetch(`${SUPABASE_URL}/rest/v1/news?slug=eq.${encodeURIComponent(newsData.slug)}&select=id`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "apikey": SUPABASE_SERVICE_ROLE_KEY,
        "Authorization": `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`,
      }
    });

    if (checkSlugResponse.ok) {
      const existingNews = await checkSlugResponse.json();
      if (existingNews.length > 0) {
        return new Response(
          JSON.stringify({ error: "Slug already exists" }),
          {
            status: 409,
            headers: { ...CORS_HEADERS, "Content-Type": "application/json" }
          }
        );
      }
    }

    // Process category information if provided by slug
    let categoryId = null;
    if (newsData.category_slug) {
      console.log(`Looking up category with slug: ${newsData.category_slug}`);
      const categoryResponse = await fetch(`${SUPABASE_URL}/rest/v1/categories?slug=eq.${encodeURIComponent(newsData.category_slug)}&select=id`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "apikey": SUPABASE_SERVICE_ROLE_KEY,
          "Authorization": `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`,
        }
      });

      if (categoryResponse.ok) {
        const categories = await categoryResponse.json();
        if (categories.length > 0) {
          categoryId = categories[0].id;
          console.log(`Found category ID: ${categoryId}`);
        }
      }
    }

    // Prepare data for insertion
    const newsRecord = {
      title: newsData.title,
      slug: newsData.slug,
      summary: newsData.summary || null,
      content: newsData.content || null,
      image_path: newsData.image_path || null,
      published_at: newsData.published_at || new Date().toISOString(),
      status: newsData.status || 'published',
      tags: newsData.tags || [],
      author_name: newsData.author_name || null,
      category_id: newsData.category_id || categoryId
    };

    console.log("Inserting news record:", JSON.stringify(newsRecord, null, 2));
    
    // Insert news record
    const createResponse = await fetch(`${SUPABASE_URL}/rest/v1/news`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "apikey": SUPABASE_SERVICE_ROLE_KEY,
        "Authorization": `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`,
        "Prefer": "return=representation"
      },
      body: JSON.stringify(newsRecord)
    });

    if (!createResponse.ok) {
      const errorText = await createResponse.text();
      console.error("Error creating news:", createResponse.status, errorText);
      return new Response(
        JSON.stringify({ error: `Failed to create news (Status: ${createResponse.status})` }),
        {
          status: createResponse.status,
          headers: { ...CORS_HEADERS, "Content-Type": "application/json" }
        }
      );
    }

    const createdNews = await createResponse.json();
    console.log("News created successfully with ID:", createdNews[0]?.id);
    
    // Return the created news item with category info
    return new Response(
      JSON.stringify({ 
        success: true,
        data: createdNews[0]  
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