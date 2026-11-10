# Feature Walkthrough & Testing Guide

This document describes the interactive reader, discovery, and portfolio features in `cristianarando.dev`, along with the automated verification suites that guard them.

---

## 1. Localized Route Architecture

Every user-facing page is generated at build time across all five supported locales (`en`, `es`, `de`, `ru`, `ja`):

| Route Pattern                  | Purpose                                                                          |
| ------------------------------ | -------------------------------------------------------------------------------- |
| `/{lang}/`                     | Portfolio home page (Hero, About, Education, Experience, Projects, Skills, Blog) |
| `/{lang}/projects/`            | Filterable, searchable, sortable project catalog with Grid/List view toggle      |
| `/{lang}/projects/{id}/`       | Architectural case study page for each project in `src/data/projects.ts`         |
| `/{lang}/blog/`                | Filterable, searchable, sortable blog index with date-range and tag filters      |
| `/{lang}/blog/{slug}/`         | Individual MDX article with Reader Tools, Table of Contents, and Giscus comments |
| `/{lang}/uses/`                | Hardware, software, and development environment catalog                          |
| `/{lang}/search/`              | Site-wide full-text discovery across articles, projects, experience, and skills  |
| `/{lang}/library/`             | Browser-local saved reading list and completion tracker                          |
| `/{lang}/series/`              | Ordered reading paths across technical and philosophical essays                  |
| `/{lang}/bookshelf/`           | Searchable, filterable bookshelf parsed from localized `my-bookshelf.mdx`        |
| `/og/{lang}/{...route}.png`    | Build-time 1200×630 Open Graph PNG cards generated via Satori and Resvg          |
| `/{lang}/rss.xml` & `/rss.xml` | Sanitized RSS 2.0 feeds per language                                             |
| `/{lang}/news-sitemap.xml`     | Google News XML sitemaps per language                                            |

---

## 2. Interactive Features & Expected Behavior

### 2.1 Shared List Manager (`src/scripts/list-manager.ts` & `src/utils/list.ts`)

Both `/{lang}/blog/` and `/{lang}/projects/` use the shared list manager:

- **Diacritic-insensitive multi-token search:** Searching `penetracion owasp` matches `"Pruebas de Penetración con OWASP"` regardless of accents or token order.
- **Weighted relevance ranking:** When sorted by `Relevance`, title matches outrank tag/technology matches, which outrank description matches, with featured items breaking ties.
- **Non-destructive view switching:** Toggling between Grid and List view swaps only the layout-specific CSS tokens via `swapViewClasses()`, preserving custom classes on containers and cards.
- **URL state synchronization:** Active search queries (`?q=`), tag/category filters (`?filter=`), and sort modes (`?sort=`) sync with `history.replaceState` and initialize cleanly on page load.

### 2.2 Site-Wide Discovery (`/{lang}/search/`)

- Fetches `/search-index.json` once and validates every entry at runtime using `validateSearchEntries()`.
- Indexes blog posts, full project descriptions + architectural case studies (`problem`, `architecture`, `tradeoff`, `lesson`), work experience, and skill categories.
- Clicking a skill pill on the home page navigates to `/{lang}/search/?q=<skill>&evidence=1`, surfacing matching articles, projects, experience, or skill category context.

### 2.3 Reader Tools (`src/scripts/reader.ts` & `src/utils/reader.ts`)

- Allows customizing text size (`14px`–`22px`), line spacing (`standard`/`relaxed`), reading width (`narrow`/`wide`), typeface (`sans`/`serif`), and Focus Mode.
- Persists preferences and reading progress in `localStorage` with defensive validation against corrupted or out-of-range values.

---

## 3. Automated Testing & Verification Pipeline

Run the full verification suite before opening a pull request:

```bash
pnpm lint          # Prettier formatting check
pnpm check:i18n    # Strict 5-locale key, type, and non-empty string alignment
pnpm check         # Astro + TypeScript strict diagnostics
pnpm build         # Full static production build
pnpm test          # Unit and JSDOM integration tests (node --test)
pnpm check:build   # Post-build HTML/XML, CSP, JSON-LD, OG image, and link audit
```
