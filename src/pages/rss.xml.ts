import type { APIRoute } from "astro";

export const GET: APIRoute = (context) => {
  return context.redirect("/en/rss.xml", 308);
};
