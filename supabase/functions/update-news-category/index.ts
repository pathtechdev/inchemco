import { serve } from "../_shared/deno_std/http/server.ts";

const SUPABASE_URL = Deno.env.get("SUPABASE_URL");
const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");

if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
  console.error("SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY are required.");
  throw new Error("SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY are required.");
}

const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "PUT, OPTIONS", // Changed to PUT
  "Access-Control-Allow-Headers": "authorization,apikey,content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: CORS_HEADERS });
  }

  if (req.method !== "PUT") { // Changed to PUT
    return new Response(
      JSON.stringify({ error: "Method not allowed" }),
      { status: 405, headers: { ...CORS_HEADERS, "Content-Type": "application/json" } }
    );
  }

  try {
    const { id, name, slug, description } = await req.json();

    if (!id) {
      return new Response(
        JSON.stringify({ error: "Category ID is required" }),
        { status: 400, headers: { ...CORS_HEADERS, "Content-Type": "application/json" } }
      );
    }

    // Check if slug is being updated and if it conflicts with another category
    if (slug) {
      const slugCheckResponse = await fetch(
        `${SUPABASE_URL}/rest/v1/categories?slug=eq.${encodeURIComponent(slug)}&id=neq.${encodeURIComponent(id)}&select=id`,
        {
          headers: {
            "apikey": SUPABASE_SERVICE_ROLE_KEY,
            "Authorization": `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`,
          },
        }
      );
      if (slugCheckResponse.ok) {
        const existing = await slugCheckResponse.json();
        if (existing.length > 0) {
          return new Response(
            JSON.stringify({ error: "Slug already exists for another category" }),
            { status: 409, headers: { ...CORS_HEADERS, "Content-Type": "application/json" } }
          );
        }
      } else {
        console.error("Error checking slug for update:", slugCheckResponse.status, await slugCheckResponse.text());
      }
    }

    const categoryUpdateData: any = {};
    if (name !== undefined) categoryUpdateData.name = name;
    if (slug !== undefined) categoryUpdateData.slug = slug;
    if (description !== undefined) categoryUpdateData.description = description;
    // Add updated_at timestamp if your table has it
    // categoryUpdateData.updated_at = new Date().toISOString(); 

    if (Object.keys(categoryUpdateData).length === 0) {
        return new Response(
            JSON.stringify({ error: "No fields to update" }),
            { status: 400, headers: { ...CORS_HEADERS, "Content-Type": "application/json" } }
        );
    }

    const response = await fetch(`${SUPABASE_URL}/rest/v1/categories?id=eq.${encodeURIComponent(id)}`, {
      method: "PATCH", // Use PATCH for partial updates
      headers: {
        "apikey": SUPABASE_SERVICE_ROLE_KEY,
        "Authorization": `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`,
        "Content-Type": "application/json",
        "Prefer": "return=representation",
      },
      body: JSON.stringify(categoryUpdateData),
    });

    if (!response.ok) {
      const errorBody = await response.text();
      console.error("Failed to update category:", response.status, errorBody);
       // Check if the error is because the category was not found (e.g., 404 or 406 if Prefer: return=representation and no rows matched)
      if (response.status === 404 || response.status === 406) {
        return new Response(
            JSON.stringify({ error: "Category not found or no changes made", details: errorBody }),
            { status: 404, headers: { ...CORS_HEADERS, "Content-Type": "application/json" } }
        );
      }
      return new Response(
        JSON.stringify({ error: "Failed to update category", details: errorBody }),
        { status: response.status, headers: { ...CORS_HEADERS, "Content-Type": "application/json" } }
      );
    }

    const updatedCategory = await response.json();
    if (updatedCategory.length === 0) {
        return new Response(
            JSON.stringify({ error: "Category not found or no effective changes made to update" }),
            { status: 404, headers: { ...CORS_HEADERS, "Content-Type": "application/json" } }
        );
    }

    return new Response(
      JSON.stringify({ data: updatedCategory[0], success: true }),
      { headers: { ...CORS_HEADERS, "Content-Type": "application/json" } }
    );

  } catch (error) {
    console.error("Server error in update-news-category:", error);
    return new Response(
      JSON.stringify({ error: "Internal server error", details: String(error) }),
      { status: 500, headers: { ...CORS_HEADERS, "Content-Type": "application/json" } }
    );
  }
}); 