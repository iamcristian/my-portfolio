import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import { languages } from "../../i18n/ui";

export async function getStaticPaths() {
  return Object.keys(languages).map((lang) => ({ params: { lang } }));
}

export const GET: APIRoute = async (context) => {
  const { lang } = context.params;
  if (!lang || !(lang in languages)) {
    return new Response("Not Found", { status: 404 });
  }

  const siteUrl =
    context.site?.toString() || "https://cristianarando.vercel.app";
  const twoDaysAgo = new Date(Date.now() - 2 * 24 * 60 * 60 * 1000);

  const posts = await getCollection("blog", (entry) => {
    return (
      entry.data.lang === lang &&
      !entry.data.draft &&
      entry.data.date >= twoDaysAgo
    );
  });

  posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());

  const newsItems = posts
    .map(
      (post) => `
    <url>
      <loc>${siteUrl}/${lang}/blog/${post.data.slug}/</loc>
      <news:news>
        <news:publication>
          <news:name>Cristian Arando</news:name>
          <news:language>${lang}</news:language>
        </news:publication>
        <news:publication_date>${post.data.date.toISOString()}</news:publication_date>
        <news:title>${escapeXml(post.data.title)}</news:title>
        <news:keywords>${post.data.tags.join(", ")}</news:keywords>
      </news:news>
    </url>
  `,
    )
    .join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">
  ${newsItems}
</urlset>`;

  return new Response(xml.trim(), {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
};

function escapeXml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}
