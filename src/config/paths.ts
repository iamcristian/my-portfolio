// ── Shared path utilities for i18n routing ──
// Eliminates duplicate getStaticPaths() across [lang] pages.

import { languages } from "../i18n/ui";

/**
 * Returns the static paths array for all supported locales.
 * Use in `getStaticPaths()` of any `[lang]/` page.
 */
export function getLocaleStaticPaths() {
  return Object.keys(languages).map((lang) => ({ params: { lang } }));
}
