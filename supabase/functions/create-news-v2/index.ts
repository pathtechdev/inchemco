// Follow this setup guide to integrate the Deno language server with your editor:
// https://deno.land/manual/getting_started/setup_your_environment
// This enables autocomplete, go to definition, etc.

import { serve } from "https://deno.land/std@0.177.0/http/server.ts";

const SUPABASE_URL = Deno.env.get("SUPABASE_URL");
const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");

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
    return new Response(JSON.stringify({ error: "Method not allowed" }), { status: 405, headers: CORS_HEADERS });
  }

  let body;
  try {
    body = await req.json();
  } catch {
    return new Response(JSON.stringify({ error: "Invalid JSON" }), { status: 400, headers: CORS_HEADERS });
  }

  // Debug: trả về payload nhận được để kiểm tra image_path
  if (body && body.debug === true) {
    return new Response(JSON.stringify({ debug: body }), { headers: CORS_HEADERS });
  }

  // Validate required fields
  const required = ["title", "slug"];
  for (const field of required) {
    if (!body[field]) {
      return new Response(JSON.stringify({ error: `Missing field: ${field}` }), { status: 400, headers: CORS_HEADERS });
    }
  }

  // Insert into news table
  const insertRes = await fetch(`${SUPABASE_URL}/rest/v1/news`, {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`,
      "apikey": SUPABASE_SERVICE_ROLE_KEY,
      "Content-Type": "application/json",
      "Prefer": "return=representation"
    },
    body: JSON.stringify({
      title: body.title,
      slug: body.slug,
      content: body.content ?? null,
      summary: body.summary ?? null,
      image_path: body.image_path ?? null,
      published_at: body.published_at ?? null,
      status: body.status ?? "draft",
      author_name: body.author_name ?? null,
      tags: Array.isArray(body.tags) ? body.tags : (typeof body.tags === 'string' ? body.tags.split(',').map(t => t.trim()).filter(Boolean) : []),
      category_id: body.category_id ?? null,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    }),
  });

  if (!insertRes.ok) {
    const err = await insertRes.text();
    return new Response(JSON.stringify({ error: "Insert failed", detail: err }), { status: 500, headers: CORS_HEADERS });
  }

  const data = await insertRes.json();
  return new Response(JSON.stringify({ success: true, data }), {
    headers: { ...CORS_HEADERS, "Content-Type": "application/json" },
  });
});

/* To invoke locally:

  1. Run `supabase start` (see: https://supabase.com/docs/reference/cli/supabase-start)
  2. Make an HTTP request:

  curl -i --location --request POST 'http://127.0.0.1:54321/functions/v1/create-news-v2' \
    --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24iLCJleHAiOjE5ODM4MTI5OTZ9.CRXP1A7WOeoJeXxjNni43kdQwgnWNReilDMblYTn_I0' \
    --header 'Content-Type: application/json' \
    --data '{"name":"Functions"}'

*/
