import { serve } from "../_shared/deno_std/http/server.ts";

const SUPABASE_URL = Deno.env.get("SUPABASE_URL");
const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");

if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
  console.error("SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY are required.");
  throw new Error("SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY are required.");
}

const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "authorization,apikey,content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: CORS_HEADERS });
  }

  if (req.method !== "POST") {
    return new Response(
      JSON.stringify({ error: "Method not allowed" }),
      { status: 405, headers: { ...CORS_HEADERS, "Content-Type": "application/json" } }
    );
  }

  try {
    const { name, slug, description } = await req.json();

    if (!name || !slug) {
      return new Response(
        JSON.stringify({ error: "Name and slug are required" }),
        { status: 400, headers: { ...CORS_HEADERS, "Content-Type": "application/json" } }
      );
    }

    // Check if slug exists
    const slugCheckResponse = await fetch(`${SUPABASE_URL}/rest/v1/categories?slug=eq.${encodeURIComponent(slug)}&select=id`, {
      headers: {
        "apikey": SUPABASE_SERVICE_ROLE_KEY,
        "Authorization": `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`,
      },
    });
    if (slugCheckResponse.ok) {
      const existing = await slugCheckResponse.json();
      if (existing.length > 0) {
        return new Response(
          JSON.stringify({ error: "Slug already exists" }),
          { status: 409, headers: { ...CORS_HEADERS, "Content-Type": "application/json" } }
        );
      }
    } else {
        console.error("Error checking slug:", slugCheckResponse.status, await slugCheckResponse.text());
        // Potentially proceed if slug check fails, or return error
    }
    
    const categoryData = {
      name,
      slug,
      description: description || null,
    };

    const response = await fetch(`${SUPABASE_URL}/rest/v1/categories`, {
      method: "POST",
      headers: {
        "apikey": SUPABASE_SERVICE_ROLE_KEY,
        "Authorization": `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`,
        "Content-Type": "application/json",
        "Prefer": "return=representation",
      },
      body: JSON.stringify(categoryData),
    });

    if (!response.ok) {
      const errorBody = await response.text();
      console.error("Failed to create category:", response.status, errorBody);
      return new Response(
        JSON.stringify({ error: "Failed to create category", details: errorBody }),
        { status: response.status, headers: { ...CORS_HEADERS, "Content-Type": "application/json" } }
      );
    }

    const createdCategory = await response.json();
    return new Response(
      JSON.stringify({ data: createdCategory[0], success: true }),
      { headers: { ...CORS_HEADERS, "Content-Type": "application/json" } }
    );

  } catch (error) {
    console.error("Server error in create-news-category:", error);
    return new Response(
      JSON.stringify({ error: "Internal server error", details: String(error) }),
      { status: 500, headers: { ...CORS_HEADERS, "Content-Type": "application/json" } }
    );
  }
}); 