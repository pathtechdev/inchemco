import { serve } from "https://deno.land/std@0.177.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import { corsHeaders } from "../_shared/cors.ts";

console.log("upload-product-image function initiated");

// Helper function to generate a unique filename
function generateUniqueFilename(originalFilename: string): string {
  const timestamp = Date.now();
  const randomString = Math.random().toString(36).substring(2, 10);
  const extension = originalFilename.split('.').pop();
  return `${timestamp}-${randomString}.${extension}`;
}

serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    // Create a Supabase client with the Auth context of the user creating the PostgREST record.
    const supabaseClient = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "", // Use service role for storage actions
      // { global: { headers: { Authorization: req.headers.get("Authorization")! } } } // Not needed for service_role client on storage
    );

    const formData = await req.formData();
    const file = formData.get("file") as File;

    if (!file) {
      return new Response(JSON.stringify({ error: "File is required" }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 400,
      });
    }

    // We'll use a generic products bucket for product images too.
    // Consider subfolders if needed, e.g., `products/items/${productId}/${filename}`
    const bucketName = "products"; 
    const uniqueFilename = generateUniqueFilename(file.name);
    const filePath = `${uniqueFilename}`; // Keep it simple for now, store in root of 'products' bucket

    const { data: uploadData, error: uploadError } = await supabaseClient.storage
      .from(bucketName)
      .upload(filePath, file, {
        cacheControl: "3600",
        upsert: false, // true to overwrite, false to error if file exists (safer for unique names)
      });

    if (uploadError) {
      console.error("Error uploading product image:", uploadError);
      throw uploadError;
    }

    // The path returned by Supabase storage is just the 'filePath' we defined.
    // The full URL will be constructed on the client-side or by other functions.
    return new Response(JSON.stringify({ success: true, data: { path: uploadData.path } }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 200,
    });

  } catch (err) {
    console.error("Error in upload-product-image:", err);
    return new Response(JSON.stringify({ error: err.message || "Failed to upload image" }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 400,
    });
  }
}); 