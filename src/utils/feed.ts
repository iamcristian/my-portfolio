import rss from "@astrojs/rss";
import { getCollection, render } from "astro:content";
import { experimental_AstroContainer } from "astro/container";
import mdxRenderer from "@astrojs/mdx/server.js";
import sanitizeHtml from "sanitize-html";
import { SITE } from "../config/site";
import { useTranslations, type Lang } from "../i18n/utils";
import { isPublished } from "./blog";

export async function createFeed(lang: Lang) {
  const t = useTranslations(lang);
  const posts = (
    await getCollection(
      "blog",
      (post) => post.data.lang === lang && isPublished(post.data),
    )
  ).sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
  const container = await experimental_AstroContainer.create();
  container.addServerRenderer({ renderer: mdxRenderer });
  return rss({
    title: t("site.title"),
    description: t("site.description"),
    site: SITE.url,
    trailingSlash: true,
    items: await Promise.all(
      posts.map(async (post) => {
        const link = `/${lang}/blog/${post.data.slug}/`;
        const { Content } = await render(post);
        const html = await container.renderToString(Content);
        return {
          title: post.data.title,
          description: post.data.description,
          pubDate: post.data.date,
          link,
          content: sanitizeHtml(html, {
            allowedTags: sanitizeHtml.defaults.allowedTags.concat(["img"]),
            transformTags: {
              a: (tagName, attributes) => ({
                tagName,
                attribs: {
                  ...attributes,
                  ...(attributes.href
                    ? {
                        href: new URL(attributes.href, new URL(link, SITE.url))
                          .href,
                      }
                    : {}),
                },
              }),
              img: (tagName, attributes) => ({
                tagName,
                attribs: {
                  ...attributes,
                  ...(attributes.src
                    ? {
                        src: new URL(attributes.src, new URL(link, SITE.url))
                          .href,
                      }
                    : {}),
                },
              }),
            },
          }),
        };
      }),
    ),
    customData: `<language>${lang}</language>`,
  });
}
