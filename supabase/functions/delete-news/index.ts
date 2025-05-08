import { serve } from "../_shared/deno_std/http/server.ts";

const SUPABASE_URL = Deno.env.get("SUPABASE_URL");
const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");

if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
  throw new Error("SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY are required.");
}

const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "DELETE, OPTIONS",
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

  if (req.method !== "DELETE") {
    return new Response(
      JSON.stringify({ error: "Method not allowed" }),
      {
        status: 405,
        headers: { ...CORS_HEADERS, "Content-Type": "application/json" }
      }
    );
  }

  try {
    const { id } = parseQuery(req.url);
    console.log(`Deleting news with ID: ${id}`);
    
    if (!id) {
      return new Response(
        JSON.stringify({ error: "News ID is required" }),
        {
          status: 400,
          headers: { ...CORS_HEADERS, "Content-Type": "application/json" }
        }
      );
    }

    // Check if the news item exists
    const checkNewsResponse = await fetch(`${SUPABASE_URL}/rest/v1/news?id=eq.${encodeURIComponent(id)}&select=id`, {
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

    // Delete the news item
    const deleteResponse = await fetch(`${SUPABASE_URL}/rest/v1/news?id=eq.${encodeURIComponent(id)}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "apikey": SUPABASE_SERVICE_ROLE_KEY,
        "Authorization": `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`,
      }
    });

    if (!deleteResponse.ok) {
      const errorText = await deleteResponse.text();
      console.error("Error deleting news:", deleteResponse.status, errorText);
      return new Response(
        JSON.stringify({ error: `Failed to delete news (Status: ${deleteResponse.status})` }),
        {
          status: deleteResponse.status,
          headers: { ...CORS_HEADERS, "Content-Type": "application/json" }
        }
      );
    }

    console.log("News deleted successfully");
    
    // Return success response
    return new Response(
      JSON.stringify({ 
        success: true,
        message: "News deleted successfully" 
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