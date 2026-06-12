import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { languages } from "../../i18n/ui";
import { useTranslations, type Lang } from "../../i18n/utils";
import type { APIRoute } from "astro";
import { getLocaleStaticPaths } from "../../config/paths";
import { SITE } from "../../config/site";

export async function getStaticPaths() {
  return getLocaleStaticPaths();
}

export const GET: APIRoute = async (context) => {
  const { lang } = context.params;

  if (!lang || !(lang in languages)) {
    return new Response("Not Found", { status: 404 });
  }

  const t = useTranslations(lang as Lang);

  // Fetch blog posts for this language, excluding drafts
  const posts = await getCollection("blog", (entry) => {
    return entry.data.lang === lang && !entry.data.draft;
  });

  // Sort by date (newest first)
  posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());

  return rss({
    title: t("site.title") || SITE.name,
    description: t("site.description") || "Portfolio and blog",
    site: context.site ? context.site.toString() : SITE.url,
    trailingSlash: true,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.date,
      link: `/${lang}/blog/${post.data.slug}/`,
    })),
    customData: `<language>${lang}</language>`,
  });
};
