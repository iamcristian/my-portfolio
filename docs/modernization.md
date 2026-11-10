# Modernization, Architecture & Maintenance Guide

This guide documents the architectural decisions, security posture, and content maintenance workflows for `cristianarando.dev`.

---

## 1. Security & Edge Routing (`vercel.json`)

### 1.1 Content Security Policy (CSP)

All responses served by Vercel include strict HTTP security headers:

- **`script-src` (Portfolio Baseline `/(.*)`):** `'self'` plus `https://va.vercel-scripts.com` and `https://inside-link.vercel.app` (no `'unsafe-inline'`). All Astro portfolio scripts are external modules or static assets (`src/scripts/theme.js`); JSON-LD structured data blocks use `<script type="application/ld+json">` and are escaped with `serializeJsonLd()` so `<` can never terminate a script tag.
- **`script-src` & `img-src` Scoped Overrides (`inside-link` Proxy Routes):** Next.js 16 SSR (`/admin`, `/admin/:path*`, `/login`, `/links`) emits inline RSC hydration scripts, while short-link/HUB/PIN pages (`/:slug`) execute inline telemetry/unlock scripts and `qr-modal.tsx` creates `blob:` URLs for client-side QR rasterization. Targeted header override rules in `vercel.json` allow `'unsafe-inline'` in `script-src` and `blob:` in `img-src` **strictly on those proxied `inside-link` routes** without weakening Astro portfolio pages.
- **`style-src`**: `'self' 'unsafe-inline'` to support Astro scoped styles, Next.js utilities, and dynamic CSS custom properties.
- **`img-src`**: `'self' data: https:` on portfolio pages (`'self' data: blob: https:` on proxied `inside-link` routes) to support external user/organization logos and client-side QR PNG exports.

### 1.2 Coexistence with `inside-link` Rewrites

The domain `cristianarando.dev` hosts both the static Astro portfolio and proxies short-link / bio-link routes to `https://inside-link.vercel.app`:

- Reserved root segments (`RESERVED_ROOT_SEGMENTS` in `src/config/paths.ts`) are excluded via a negative lookahead in `vercel.json` (`(?!en$|es$|de$|ja$|ru$|cv$|og$|404$|_astro$|api$|admin$|dashboard$|login$|register$|s$|u$)`).
- Both `tests/content.test.ts` and `scripts/check-build.mjs` verify at build time that no generated route in `dist/` can ever be shadowed by the catch-all slug rewrite.

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
