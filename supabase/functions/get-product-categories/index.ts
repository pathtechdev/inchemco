import { serve } from "https://deno.land/std@0.177.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import { corsHeaders } from "../_shared/cors.ts";

console.log("get-product-categories function initiated");

serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const supabaseClient = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      // Use ANON_KEY for read-only operations unless RLS requires authenticated user
      Deno.env.get("SUPABASE_ANON_KEY") ?? "", 
      { global: { headers: { Authorization: req.headers.get("Authorization")! } } }
    );

    // Optional: Add pagination or filtering if needed later
    // const url = new URL(req.url);
    // const page = parseInt(url.searchParams.get("page") || "1");
    // const limit = parseInt(url.searchParams.get("limit") || "20"); 
    // const offset = (page - 1) * limit;

    let query = supabaseClient
      .from('product_categories')
      .select('*, parent:parent_id(*)') // Select all fields and parent category details
      .order('name', { ascending: true });
      // .range(offset, offset + limit - 1); // Add range for pagination if needed

    const { data, error, count } = await query;

    if (error) {
      console.error("Error fetching product categories:", JSON.stringify(error, null, 2));
      throw error;
    }

    return new Response(JSON.stringify({ data, count }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 200,
    });

  } catch (err) {
    console.error("Error details in get-product-categories:", JSON.stringify(err, null, 2));
    return new Response(JSON.stringify({ error: err.message || 'Internal Server Error' }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 500,
    });
  }
}); 