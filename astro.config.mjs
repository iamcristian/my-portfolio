// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import mdx from "@astrojs/mdx";
import sitemap, { ChangeFreqEnum } from "@astrojs/sitemap";
import { locales, SITEMAP_LOCALES } from "./src/i18n/ui";

// https://astro.build/config
export default defineConfig({
  site: "https://cristianarando.dev",
  integrations: [
    mdx(),
    sitemap({
      // Filter out feeds and news sitemaps from the main sitemap
      filter: (page) =>
        !page.includes("/rss.xml") && !page.includes("/news-sitemap"),

      // Customize priority and frequency for each page entry
      serialize: (item) => {
        // Individual blog posts get high priority
        if (
          item.url.includes("/blog/") &&
          !item.url.endsWith("/blog/") &&
          !item.url.endsWith("/blog")
        ) {
          return { ...item, changefreq: ChangeFreqEnum.MONTHLY, priority: 0.8 };
        }
        // Homepage variants get maximum priority
        if (item.url.match(/\/[a-z]{2}\/$/)) {
          return { ...item, changefreq: ChangeFreqEnum.WEEKLY, priority: 1.0 };
        }
        // Category indexes (blog lists, project lists)
        if (
          item.url.endsWith("/blog") ||
          item.url.endsWith("/blog/") ||
          item.url.endsWith("/projects") ||
          item.url.endsWith("/projects/")
        ) {
          return { ...item, changefreq: ChangeFreqEnum.WEEKLY, priority: 0.7 };
        }
        // Default priority for other pages
        return { ...item, priority: 0.5 };
      },

      // Automatically generate localized alternate hreflang link tags inside the XML
      i18n: {
        defaultLocale: "en",
        locales: SITEMAP_LOCALES,
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  i18n: {
    defaultLocale: "en",
    locales: locales,
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: true,
    },
  },
});
