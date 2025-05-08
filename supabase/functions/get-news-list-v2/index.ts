import { serve } from "https://deno.land/std@0.177.0/http/server.ts";
const SUPABASE_URL = Deno.env.get("SUPABASE_URL");
const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");
const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, OPTIONS",
  "Access-Control-Allow-Headers": "authorization,apikey,content-type"
};
function parseQuery(url) {
  const u = new URL(url);
  return Object.fromEntries(u.searchParams.entries());
}
serve(async (req)=>{
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: CORS_HEADERS });
  }
  if (req.method !== "GET") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: CORS_HEADERS
    });
  }
  const { page = "1", limit = "10", category, tag } = parseQuery(req.url);
  const offset = (parseInt(page) - 1) * parseInt(limit);

  let query = `?select=id,created_at,updated_at,title,slug,content,summary,image_path,published_at,status,author_name,tags,category_id,categories(name,slug)&order=published_at.desc&limit=${limit}&offset=${offset}`;
  if (category) query += `&categories.slug=eq.${encodeURIComponent(category)}`;
  if (tag) query += `&tags=cs.{${encodeURIComponent(tag)}}`;

  // Fetch total count
  const countRes = await fetch(`${SUPABASE_URL}/rest/v1/news?select=id`, {
    method: "GET",
    headers: {
      "apikey": SUPABASE_SERVICE_ROLE_KEY
    }
  });
  const countData = await countRes.json();
  const total = Array.isArray(countData) ? countData.length : 0;

  // Fetch news list
  const newsRes = await fetch(`${SUPABASE_URL}/rest/v1/news${query}`, {
    method: "GET",
    headers: {
      "apikey": SUPABASE_SERVICE_ROLE_KEY
    }
  });
  const news = await newsRes.json();

  // Nếu lỗi, trả về lỗi rõ ràng
  if (!Array.isArray(news)) {
    return new Response(JSON.stringify({ error: news?.message || "Fetch failed", detail: news }), {
      status: 500,
      headers: { ...CORS_HEADERS, "Content-Type": "application/json" }
    });
  }

  // Map lại để trả về category_name và category_slug nếu có
  const mapped = news.map((item)=>({
      ...item,
      category_name: item.categories?.name || null,
      category_slug: item.categories?.slug || null
    }));

  return new Response(JSON.stringify({
    data: mapped,
    count: total
  }), {
    headers: {
      ...CORS_HEADERS,
      "Content-Type": "application/json"
    }
  });
});
