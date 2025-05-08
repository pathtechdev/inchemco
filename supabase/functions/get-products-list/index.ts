import { serve } from "https://deno.land/std@0.177.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import { corsHeaders } from "../_shared/cors.ts";

console.log("get-products-list function initiated");

serve(async (req: Request) => {
  // This is needed if you're planning to invoke your function from a browser.
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const supabaseClient = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_ANON_KEY") ?? "",
      { global: { headers: { Authorization: req.headers.get("Authorization")! } } }
    );

    // Extract query parameters for pagination, filtering, sorting
    const url = new URL(req.url);
    const page = parseInt(url.searchParams.get("page") || "1");
    const limit = parseInt(url.searchParams.get("limit") || "10");
    const offset = (page - 1) * limit;
    // TODO: Add more filters: category, brand, search_term, status

    let query = supabaseClient
      .from("products")
      // Temporarily removing brands join to isolate potential error
      .select('id,name,slug,sku,short_description,price,sale_price,stock_quantity,is_featured,status,main_image_path,created_at,updated_at,product_category_id,product_categories(name)', { count: "exact" })
      .order("created_at", { ascending: false })
      .range(offset, offset + limit -1);

    const { data, error, count } = await query;

    if (error) {
      console.error("Error fetching products:", error);
      throw error;
    }

    return new Response(JSON.stringify({ data, count }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 200,
    });
  } catch (err) {
    console.error("Error details in get-products-list:", JSON.stringify(err, null, 2));
    return new Response(JSON.stringify({ error: err.message || 'Internal Server Error' }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 500,
    });
  }
}); 