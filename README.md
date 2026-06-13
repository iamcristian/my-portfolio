<div align="center">

# 🌐 cristianarando.dev

**Personal portfolio, blog & digital identity — built with Astro, Tailwind CSS & daisyUI.**

[![Live Site](https://img.shields.io/badge/🌍_Live-cristianarando.dev-000?style=for-the-badge)](https://cristianarando.dev)
[![Astro](https://img.shields.io/badge/Astro-6.4-BC52EE?style=for-the-badge&logo=astro&logoColor=white)](https://astro.build)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.3-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![daisyUI](https://img.shields.io/badge/daisyUI-5.5-5A0EF8?style=for-the-badge&logo=daisyui&logoColor=white)](https://daisyui.com)
[![TypeScript](https://img.shields.io/badge/TypeScript-Strict-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![CI](https://img.shields.io/github/actions/workflow/status/iamcristian/my-portfolio/ci.yml?branch=main&style=for-the-badge&label=CI&logo=githubactions&logoColor=white)](https://github.com/iamcristian/my-portfolio/actions)
[![License](https://img.shields.io/badge/License-MIT-22c55e?style=for-the-badge)](/LICENSE)

<br>

<a href="https://cristianarando.dev">
  <img src="public/screenshot.webp" alt="cristianarando.dev — Portfolio Preview" width="100%" style="border-radius: 12px; box-shadow: 0 20px 60px rgba(0,0,0,0.3);" />
</a>

<br>

<img width="50%" alt="{616BAD99-7C2A-48C9-B496-6E6868D035DA}" src="https://github.com/user-attachments/assets/86cc83fe-570c-4992-a0b4-6d657fd84c32" />

<br>

[Features](#-features) · [Tech Stack](#-tech-stack) · [Getting Started](#-getting-started) · [Project Structure](#-project-structure) · [CI/CD](#-cicd) · [Deployment](#-deployment) · [Contributing](#-contributing)

</div>

---

## ✨ Features

### 🏠 Portfolio & Personal Brand

- **Hero Section** — Cosmic-themed landing with interactive Lagrange Point simulation, particle star field, shooting stars, and mouse-tracking nebula spotlight
- **About Section** — Professional bio with metrics dashboard (years of experience, areas of passion, strategic thinking)
- **Experience Timeline** — Interactive DaisyUI timeline with responsibilities, tech stacks, and company links
- **Projects Gallery** — Filterable project cards with category filtering (Frontend/Backend/Fullstack), search, sorting, pagination, and grid/list toggle
- **Skills Matrix** — Categorized tech skills displayed in an icon-driven card grid with descriptions
- **Education Hub** — Tabbed interface with Academic Background, Certifications (nested sub-tabs), and Language Proficiency sections
- **Uses Page** — Dedicated `/uses` page documenting hardware, software tools, and office setup across all 5 languages

### 📝 Blog Engine

- **MDX Content** — Full MDX support with syntax highlighting, rich media, and custom components
- **Table of Contents** — Desktop sidebar with scroll-aware active heading tracking + mobile FAB with modal dialog
- **Featured Posts** — Carousel with autoplay, manual arrows, and swipe support on the homepage
- **Blog Manager** — Full-page blog index with real-time search, tag filtering, date range filtering (including custom date picker), sort options, and pagination
- **Comments** — [Giscus](https://giscus.app/) integration (GitHub Discussions) with automatic theme synchronization and View Transitions support
- **Reading Time** — Estimated reading time calculated from word count
- **Post Navigation** — Previous/Next sibling post navigation at the bottom of each article
- **RSS Feed** — Per-language RSS feeds with autodiscovery meta tags

### 🌐 Internationalization (i18n)

- **5 Languages** — English 🇺🇸 · Español 🇪🇸 · Deutsch 🇩🇪 · Русский 🇷🇺 · 日本語 🇯🇵
- **Localized routing** with prefix-based URLs (`/en/`, `/es/`, `/de/`, etc.)
- **Per-language content** — Blog posts exist independently per locale with smart hreflang alternate tags
- **Localized CV downloads** — PDF resumes available for each language
- **Language switcher** — Dropdown selector preserving the current page path across locales
- **i18n Key Alignment CI check** — Automated script validates all translation files stay in sync with English source of truth

### 🎨 Design System

- **4 Themes** — Light, Business (dark), Dracula, Forest — with system preference detection and localStorage persistence
- **Custom daisyUI Themes** — Handcrafted monochromatic color palettes using oklch color space for both light and dark modes
- **Flash-free theme loading** — Inline script prevents FOUC by applying the theme before first paint
- **Preload animation suppression** — CSS `.preload` class disables transitions during page load to eliminate non-composited animation warnings

### 🔍 SEO & Performance

- **Comprehensive SEO Component** — Dynamic `<title>`, `<meta>`, OpenGraph, Twitter Cards, canonical URLs, and hreflang alternate tags
- **Structured Data (JSON-LD)** — BreadcrumbList, WebSite, ProfilePage + Person, CollectionPage, and BlogPosting schemas
- **News Sitemap** — Per-language Google News sitemaps for recent articles
- **XML Sitemap** — Auto-generated with localized alternates and custom priority/changefreq per page type
- **Security Headers** — X-Content-Type-Options, X-Frame-Options, X-XSS-Protection, Referrer-Policy, Permissions-Policy
- **Immutable Asset Caching** — `/_astro/` assets cached for 1 year with `immutable` directive
- **Image Optimization** — Astro's `<Image>` component with `sharp` for automatic WebP/AVIF conversion, responsive sizing, and lazy loading
- **robots.txt** — With all sitemap references
- **Web App Manifest** — PWA-ready configuration with generated 192×192 and 512×512 icons

### 🛡️ Developer Experience

- **Middleware** — `src/middleware.ts` computes `lang` once per request via `Astro.locals`, eliminating repetition across all components
- **Custom 404 Page** — Localized, on-brand error page
- **Shared List Engine** — `src/scripts/list-manager.ts` powers filter/sort/paginate/view-toggle for both Blog and Projects in one reusable module
- **Strict TypeScript** — End-to-end type safety with shared interfaces in `src/types/`

---

## 🛠 Tech Stack

| Layer               | Technology                                                                                                        |
| ------------------- | ----------------------------------------------------------------------------------------------------------------- |
| **Framework**       | [Astro 6](https://astro.build) — Static Site Generator with Islands Architecture                                  |
| **Language**        | [TypeScript](https://www.typescriptlang.org) — Strict mode                                                        |
| **Styling**         | [Tailwind CSS 4](https://tailwindcss.com) + [daisyUI 5](https://daisyui.com)                                      |
| **Typography**      | [@tailwindcss/typography](https://github.com/tailwindlabs/tailwindcss-typography) — Prose styling for MDX content |
| **Content**         | [Astro Content Collections](https://docs.astro.build/en/guides/content-collections/) + [MDX](https://mdxjs.com/)  |
| **Comments**        | [Giscus](https://giscus.app/) — GitHub Discussions-based comments                                                 |
| **Analytics**       | [Vercel Analytics](https://vercel.com/analytics)                                                                  |
| **Images**          | [sharp](https://sharp.pixelplumbing.com/) — High-performance image processing                                     |
| **Hosting**         | [Vercel](https://vercel.com) — Edge network, automatic HTTPS                                                      |
| **Package Manager** | [pnpm](https://pnpm.io)                                                                                           |
| **Formatting**      | [Prettier](https://prettier.io) + [prettier-plugin-astro](https://github.com/withastro/prettier-plugin-astro)     |
| **CI**              | [GitHub Actions](https://github.com/features/actions) — Lint, i18n check, type check, build on every push/PR      |

---

## 🏗️ Architecture

```mermaid
graph TD
    A["🌐 cristianarando.dev"] --> B["☁️ Vercel Edge CDN"]
    B --> C["⚡ Astro 6 SSG"]
    C --> D["🔀 Middleware"]
    D --> E["🌍 i18n Router"]

    E --> F["🏠 Home"]
    E --> G["📝 Blog"]
    E --> H["💼 Projects"]
    E --> I["🛠 Uses"]

    F --> J["🧩 Section Components"]
    G --> K["📄 MDX Collections"]

    J --> L["🎨 Tailwind CSS 4 + daisyUI 5"]
    K --> L
    H --> L
    I --> L

    L --> M["🌓 4 Themes"]
    M --> N["📦 Static Output"]
    N --> B
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** ≥ 22.12.0
- **pnpm** (recommended) or npm

### Installation

```bash
# Clone the repository
git clone https://github.com/iamcristian/my-portfolio.git
cd my-portfolio

# Install dependencies
pnpm install

# Start the development server
pnpm dev
```

The site will be available at `http://localhost:4321`.

### Available Commands

| Command                | Action                                                                       |
| ---------------------- | ---------------------------------------------------------------------------- |
| `pnpm dev`             | Start local dev server at `localhost:4321`                                   |
| `pnpm build`           | Build production site to `./dist/`                                           |
| `pnpm preview`         | Preview the production build locally                                         |
| `pnpm check`           | Run Astro type-check and diagnostics                                         |
| `pnpm check:i18n`      | Validate all locale files are in sync with the English source of truth       |
| `pnpm generate-assets` | Generate PWA icons (192×192, 512×512) and copy screenshot from `favicon.svg` |
| `pnpm lint`            | Check formatting with Prettier                                               |
| `pnpm lint:fix`        | Auto-fix formatting with Prettier                                            |
| `pnpm astro ...`       | Run Astro CLI commands (`add`, `check`, etc.)                                |

---

## 📁 Project Structure

```
my-portfolio/
├── .github/
│   └── workflows/
│       └── ci.yml             # GitHub Actions CI pipeline
├── public/
│   ├── cv/                    # Localized PDF resumes
│   ├── favicon.ico
│   ├── favicon.svg
│   ├── icon-192.png           # PWA icon (generated)
│   ├── icon-512.png           # PWA icon (generated)
│   ├── screenshot.webp        # PWA screenshot (generated)
│   ├── robots.txt
│   └── site.webmanifest
├── scripts/
│   ├── check-i18n.ts          # Validates locale key alignment across all 5 languages
│   └── generate-assets.ts     # Generates PWA icons and screenshots from favicon.svg
├── src/
│   ├── assets/
│   │   ├── app.css            # Global styles, Tailwind config, daisyUI themes
│   │   ├── icons/             # SVG icon library
│   │   └── images/            # Optimized images (blog, projects, certs, etc.)
│   ├── components/
│   │   ├── blog/              # BlogManager, BlogPostDetail, Giscus
│   │   ├── projects/          # ProjectsManager
│   │   ├── sections/          # Hero, About, Education, Experience, Projects, Skills, Blog
│   │   ├── ui/                # Reusable UI: cards/, Divider, SectionHeading, etc.
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── SEO.astro
│   │   ├── StructuredData.astro
│   │   ├── ThemeController.astro
│   │   └── LanguageController.astro
│   ├── config/
│   │   ├── site.ts            # Site-wide constants (name, email, socials, CV paths)
│   │   └── paths.ts           # Shared i18n static paths utility
│   ├── content/
│   │   └── blog/              # MDX blog posts organized by locale (en/, es/, de/, ru/, ja/)
│   ├── i18n/
│   │   ├── locales/           # Translation files per language
│   │   │   ├── en/            # header, home, footer, projects, skills, education, uses, etc.
│   │   │   ├── es/
│   │   │   ├── de/
│   │   │   ├── ru/
│   │   │   └── ja/
│   │   ├── ui.ts              # Translation registry (merges all locale modules)
│   │   └── utils.ts           # Type-safe t() helper, localized data accessors
│   ├── layouts/
│   │   └── Layout.astro       # Base HTML layout with SEO, themes, analytics
│   ├── middleware.ts           # Sets Astro.locals.lang once per request (DRY lang resolution)
│   ├── pages/
│   │   ├── [lang]/            # Locale-prefixed routes
│   │   │   ├── index.astro    # Home page (all sections)
│   │   │   ├── uses.astro     # /uses page (hardware, software, office)
│   │   │   ├── blog/          # Blog index + [slug] detail
│   │   │   ├── projects/      # Projects gallery
│   │   │   ├── rss.xml.ts     # Per-language RSS feed
│   │   │   └── news-sitemap.xml.ts
│   │   ├── 404.astro          # Custom localized 404 page
│   │   ├── index.astro        # Root redirect → /en/
│   │   └── rss.xml.ts         # Root RSS redirect → /en/rss.xml
│   ├── scripts/
│   │   └── list-manager.ts    # Shared client-side filter/sort/paginate/view-toggle engine
│   ├── types/
│   │   └── index.ts           # Shared TypeScript interfaces
│   ├── utils/
│   │   └── blog.ts            # Reading time calculator
│   └── content.config.ts      # Content collection schema (Zod validation)
├── astro.config.mjs           # Astro config (sitemap, MDX, i18n, Tailwind)
├── vercel.json                # Security headers + asset caching rules
├── tsconfig.json
└── package.json
```

---

## ⚙️ CI/CD

The project uses **GitHub Actions** for continuous integration on every push and pull request to `main`.

### Pipeline (`.github/workflows/ci.yml`)

```mermaid
graph LR
    A["📥 Push / PR"] --> B["📋 Lint"]
    B --> C["🌍 i18n Check"]
    C --> D["✅ Type Check"]
    D --> E["🏗️ Build"]
    E --> F["🚀 Deploy"]

    style A fill:#1a1a2e,stroke:#e94560,color:#fff
    style B fill:#16213e,stroke:#0f3460,color:#fff
    style C fill:#16213e,stroke:#0f3460,color:#fff
    style D fill:#16213e,stroke:#0f3460,color:#fff
    style E fill:#16213e,stroke:#0f3460,color:#fff
    style F fill:#0f3460,stroke:#53a653,color:#fff
```

| Step                    | Command           | Purpose                                                |
| ----------------------- | ----------------- | ------------------------------------------------------ |
| **Lint & Format Check** | `pnpm lint`       | Ensures consistent code style via Prettier             |
| **i18n Key Alignment**  | `pnpm check:i18n` | Validates all 4 non-English locales match English keys |
| **Type & Astro Check**  | `pnpm check`      | TypeScript and Astro diagnostics                       |
| **Production Build**    | `pnpm build`      | Full build to catch any runtime/build errors           |

The pipeline runs on **Node.js 22** with **pnpm 9** and uses `--frozen-lockfile` to guarantee reproducible installs.

> [!TIP]
> **Antes de hacer push o crear un PR**, es buena práctica ejecutar estas validaciones de forma local para asegurarse de que el build de GitHub Actions pasará con éxito:
>
> 1. **Formatear y corregir estilo:** `pnpm lint:fix` (o `pnpm run lint:fix`)
> 2. **Verificar alineación de idiomas (i18n):** `pnpm check:i18n` (o `pnpm run check:i18n`)
> 3. **Verificar tipos de TypeScript y Astro:** `pnpm check` (o `pnpm run check`)

---

## 🌍 Deployment

The site is deployed on **Vercel** with automatic deployments on push to `main`.

### Environment

- **Production:** [https://cristianarando.dev](https://cristianarando.dev)
- **Framework Preset:** Astro (auto-detected by Vercel)
- **Build Command:** `pnpm build`
- **Output Directory:** `dist`

### Security Headers (via `vercel.json`)

All responses include:

- `X-Content-Type-Options: nosniff`
- `X-Frame-Options: DENY`
- `X-XSS-Protection: 1; mode=block`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Permissions-Policy: camera=(), microphone=(), geolocation=()`

Static assets under `/_astro/` are cached with `public, max-age=31536000, immutable`.

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

---

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

---

## 👤 Author

**Cristian Arando**

- 🌐 Website: [cristianarando.dev](https://cristianarando.dev)
- 💼 LinkedIn: [linkedin.com/in/cristianarando](https://linkedin.com/in/cristianarando)
- 🐙 GitHub: [github.com/iamcristian](https://github.com/iamcristian)
- 📧 Email: crisarandosyse@gmail.com

---

<div align="center">

Built with ❤️ and [Astro](https://astro.build)

</div>
