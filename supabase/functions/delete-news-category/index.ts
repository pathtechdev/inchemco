import { serve } from "../_shared/deno_std/http/server.ts";

const SUPABASE_URL = Deno.env.get("SUPABASE_URL");
const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");

if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
  console.error("SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY are required.");
  throw new Error("SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY are required.");
}

const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "authorization,apikey,content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: CORS_HEADERS });
  }

  if (req.method !== "DELETE") {
    return new Response(
      JSON.stringify({ error: "Method not allowed" }),
      { status: 405, headers: { ...CORS_HEADERS, "Content-Type": "application/json" } }
    );
  }

  try {
    const url = new URL(req.url);
    const id = url.searchParams.get("id");

    if (!id) {
      return new Response(
        JSON.stringify({ error: "Category ID is required as a query parameter" }),
        { status: 400, headers: { ...CORS_HEADERS, "Content-Type": "application/json" } }
      );
    }

    // Optional: Check if category is in use by any news items
    // const newsCheckResponse = await fetch(`${SUPABASE_URL}/rest/v1/news?category_id=eq.${encodeURIComponent(id)}&select=id&limit=1`, {
    //   headers: {
    //     "apikey": SUPABASE_SERVICE_ROLE_KEY,
    //     "Authorization": `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`,
    //   },
    // });
    // if (newsCheckResponse.ok) {
    //   const newsItems = await newsCheckResponse.json();
    //   if (newsItems.length > 0) {
    //     return new Response(
    //       JSON.stringify({ error: "Category is in use and cannot be deleted" }),
    //       { status: 409, headers: { ...CORS_HEADERS, "Content-Type": "application/json" } }
    //     );
    //   }
    // }

    const response = await fetch(`${SUPABASE_URL}/rest/v1/categories?id=eq.${encodeURIComponent(id)}`, {
      method: "DELETE",
      headers: {
        "apikey": SUPABASE_SERVICE_ROLE_KEY,
        "Authorization": `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`,
        "Prefer": "return=representation", // To get back the deleted row or check if it existed
      },
    });

    if (!response.ok) {
      const errorBody = await response.text();
      console.error("Failed to delete category:", response.status, errorBody);
       // If Prefer: return=representation is used, a 404 might mean it was already deleted or never existed.
      // Supabase DELETE with Prefer: return=representation and no matching rows returns 200 OK with an empty array.
      // A 404 from PostgREST usually means the table or function doesn't exist or RLS prevents access, which shouldn't be the case here.
      // However, if `id` is malformed, it might result in a different error.
      return new Response(
        JSON.stringify({ error: "Failed to delete category", details: errorBody }),
        { status: response.status, headers: { ...CORS_HEADERS, "Content-Type": "application/json" } }
      );
    }
    
    // Check if any row was actually deleted, if Prefer=representation was effective.
    // If DELETE is successful and returns 200 OK with an empty array, it means no row matched the ID.
    const deletedResult = await response.json();
    if (deletedResult.length === 0 && response.status === 200) {
         return new Response(
            JSON.stringify({ error: "Category not found or already deleted"}),
            { status: 404, headers: { ...CORS_HEADERS, "Content-Type": "application/json" } }
        );
    }

    return new Response(
      JSON.stringify({ message: "Category deleted successfully", success: true }),
      { headers: { ...CORS_HEADERS, "Content-Type": "application/json" } }
    );

  } catch (error) {
    console.error("Server error in delete-news-category:", error);
    return new Response(
      JSON.stringify({ error: "Internal server error", details: String(error) }),
      { status: 500, headers: { ...CORS_HEADERS, "Content-Type": "application/json" } }
    );
  }
}); 