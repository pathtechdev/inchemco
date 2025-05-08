import { serve } from "https://deno.land/std@0.177.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import { corsHeaders } from "../_shared/cors.ts";

console.log("create-product function initiated");

serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const supabaseClient = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "", // Use service role for inserts
      { global: { headers: { Authorization: req.headers.get("Authorization")! } } }
    );

    const productData = await req.json();

    // Basic validation (more can be added)
    if (!productData.name || !productData.slug) {
      return new Response(JSON.stringify({ error: "Product name and slug are required" }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 400,
      });
    }
    
    // Convert empty strings for foreign keys to null
    if (productData.product_category_id === '') productData.product_category_id = null;
    if (productData.brand_id === '') productData.brand_id = null;

    const { data, error } = await supabaseClient
      .from("products")
      .insert(productData)
      .select()
      .single();

    if (error) {
      console.error("Error creating product:", error);
      // Check for unique constraint violation for slug
      if (error.code === '23505' && error.details?.includes('slug')) {
         return new Response(JSON.stringify({ error: "Slug already exists. Please choose a unique slug." }), {
          headers: { ...corsHeaders, "Content-Type": "application/json" },
          status: 409, // Conflict
        });
      }
      throw error;
    }

    return new Response(JSON.stringify({ data, success: true }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 201, // Created
    });
  } catch (err) {
    console.error("Error in create-product:", err);
    return new Response(JSON.stringify({ error: err.message }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 400,
    });
  }
}); 