// ── Shared path utilities for i18n routing ──
// Eliminates duplicate getStaticPaths() across [lang] pages.

import { languages } from "../i18n/ui.ts";

/**
 * Reserved root segments owned by the portfolio and static asset directories.
 * Must stay synchronized with the negative lookahead in vercel.json catch-all rewrites.
 */
export const RESERVED_ROOT_SEGMENTS = [
  "es",
  "en",
  "de",
  "ru",
  "ja",
  "og",
  "404",
  "projects",
  "uses",
  "cv",
  "blog",
  "bookshelf",
  "library",
  "search",
  "series",
  "search-index",
  "news-sitemap",
  "rss",
  "about",
  "contact",
  "_astro",
  "_next",
  "assets",
  "images",
  "fonts",
  "icons",
  "brand",
] as const;

/**
 * Returns the static paths array for all supported locales.
 * Use in `getStaticPaths()` of any `[lang]/` page.
 */
export function getLocaleStaticPaths() {
  return Object.keys(languages).map((lang) => ({ params: { lang } }));
}
