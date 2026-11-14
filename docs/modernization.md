# Modernization, Architecture & Maintenance Guide

This guide documents the architectural decisions, security posture, and content maintenance workflows for `cristianarando.dev`.

---

## 1. Security & Edge Routing (`vercel.json`)

### 1.1 Content Security Policy (CSP)

All responses served by Vercel include strict HTTP security headers:

- **`script-src` (Portfolio Baseline `/(.*)`):** `'self'` plus `https://va.vercel-scripts.com` (no `'unsafe-inline'`). All Astro portfolio scripts are external modules or static assets (`src/scripts/theme.js`); JSON-LD structured data blocks use `<script type="application/ld+json">` and are escaped with `serializeJsonLd()` so `<` can never terminate a script tag.
- **`style-src`**: `'self' 'unsafe-inline'` to support Astro scoped styles and dynamic CSS custom properties.
- **`img-src`**: `'self' data: https:` to support external images and static assets.

### 1.2 Independent Subdomain for `inside-link`

`cristianarando.dev` serves only the static Astro portfolio. The `inside-link` link manager runs independently on its own subdomain (`https://links.cristianarando.dev`) without reverse-proxy rewrites or CSP overrides in this repository.

---

## 2. SEO & Structured Data Architecture

- **Single source of truth:** `src/config/site.ts` defines `SITE.name`, `SITE.jobTitle` (`"Software & Systems Engineer"`), social profiles, and localized CV paths (`satisfies Record<Lang, string>`).
- **Dynamic article sections:** `resolveArticleSection()` in `src/utils/seo.ts` maps each blog post's `category` or `tags` to localized section labels (`Technology`, `Cybersecurity`, `Philosophy`, `Literature`) in both Open Graph `<meta property="article:section">` and Schema.org `BlogPosting.articleSection`.
- **Complete `BreadcrumbList`:** `src/components/StructuredData.astro` emits 1-, 2-, or 3-level `BreadcrumbList` JSON-LD matching the exact route depth across all localized pages.
- **Build-time OG image verification:** `scripts/check-build.mjs` parses every page's `meta[property="og:image"]`, verifies the target file exists in `dist/`, and checks that generated PNGs measure `1200×630`.

---

## 3. Content, PWA Manifest & i18n Maintenance Workflow

1. **Adding or updating UI translations:** Edit `src/i18n/locales/en/*.ts` first, then update `es`, `de`, `ru`, and `ja`. Run `pnpm check:i18n` to verify key parity, value types, placeholder tokens (`{lang}`), and non-empty strings.
2. **Adding a blog post:** Create the MDX file in `src/content/blog/{lang}/{slug}.mdx` following the Zod schema in `src/content.config.ts` (including explicit `category: "technology" | "security" | "philosophy" | "literature"`).
3. **PWA manifest entry (`UX-10`):** `public/site.webmanifest` intentionally sets `start_url: "/en/"` (matching the root `/` redirect in `vercel.json`) with an in-app language switcher across all 5 locales, avoiding implicit client-side redirects on install.
4. **Updating the manifest preview screenshot:** Run `pnpm generate-assets` (`scripts/generate-assets.ts`) whenever hero branding or CTA labels change.
