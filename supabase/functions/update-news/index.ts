import { serve } from "../_shared/deno_std/http/server.ts";

const SUPABASE_URL = Deno.env.get("SUPABASE_URL");
const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");

if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
  throw new Error("SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY are required.");
}

const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "PUT, OPTIONS",
  "Access-Control-Allow-Headers": "authorization,apikey,content-type",
};

serve(async (req) => {
  // Handle OPTIONS preflight request
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: CORS_HEADERS });
  }

  if (req.method !== "PUT") {
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
    console.log("Updating news with data:", JSON.stringify(newsData, null, 2));
    
    // Validate required fields
    if (!newsData.id) {
      return new Response(
        JSON.stringify({ error: "News ID is required" }),
        {
          status: 400,
          headers: { ...CORS_HEADERS, "Content-Type": "application/json" }
        }
      );
    }

    // Check if the news item exists
    const checkNewsResponse = await fetch(`${SUPABASE_URL}/rest/v1/news?id=eq.${encodeURIComponent(newsData.id)}&select=id`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "apikey": SUPABASE_SERVICE_ROLE_KEY,
        "Authorization": `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`,
      }
    });

    if (checkNewsResponse.ok) {
      const existingNews = await checkNewsResponse.json();
      if (existingNews.length === 0) {
        return new Response(
          JSON.stringify({ error: "News not found" }),
          {
            status: 404,
            headers: { ...CORS_HEADERS, "Content-Type": "application/json" }
          }
        );
      }
    }

    // Check if the slug is already used by another news item (if slug is being updated)
    if (newsData.slug) {
      const checkSlugResponse = await fetch(`${SUPABASE_URL}/rest/v1/news?slug=eq.${encodeURIComponent(newsData.slug)}&id=neq.${encodeURIComponent(newsData.id)}&select=id`, {
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
            JSON.stringify({ error: "Slug already exists for another news item" }),
            {
              status: 409,
              headers: { ...CORS_HEADERS, "Content-Type": "application/json" }
            }
          );
        }
      }
    }

    // Process category information if provided by slug
    let categoryId = newsData.category_id;
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

    // Prepare data for update
    const newsRecord: any = {};
    
    // Only include fields that are defined
    if (newsData.title !== undefined) newsRecord.title = newsData.title;
    if (newsData.slug !== undefined) newsRecord.slug = newsData.slug;
    if (newsData.summary !== undefined) newsRecord.summary = newsData.summary;
    if (newsData.content !== undefined) newsRecord.content = newsData.content;
    if (newsData.image_path !== undefined) newsRecord.image_path = newsData.image_path;
    if (newsData.published_at !== undefined) newsRecord.published_at = newsData.published_at;
    if (newsData.status !== undefined) newsRecord.status = newsData.status;
    if (newsData.tags !== undefined) newsRecord.tags = newsData.tags;
    if (newsData.author_name !== undefined) newsRecord.author_name = newsData.author_name;
    if (categoryId !== undefined) newsRecord.category_id = categoryId;

    console.log("Updating news record:", JSON.stringify(newsRecord, null, 2));
    
    // Update news record
    const updateResponse = await fetch(`${SUPABASE_URL}/rest/v1/news?id=eq.${encodeURIComponent(newsData.id)}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "apikey": SUPABASE_SERVICE_ROLE_KEY,
        "Authorization": `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`,
        "Prefer": "return=representation"
      },
      body: JSON.stringify(newsRecord)
    });

    if (!updateResponse.ok) {
      const errorText = await updateResponse.text();
      console.error("Error updating news:", updateResponse.status, errorText);
      return new Response(
        JSON.stringify({ error: `Failed to update news (Status: ${updateResponse.status})` }),
        {
          status: updateResponse.status,
          headers: { ...CORS_HEADERS, "Content-Type": "application/json" }
        }
      );
    }

    const updatedNews = await updateResponse.json();
    console.log("News updated successfully");
    
    // Return the updated news item
    return new Response(
      JSON.stringify({ 
        success: true,
        data: updatedNews[0]  
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