<div align="center">

# 🌐 cristianarando.dev

**Personal portfolio, blog & digital identity — built with Astro, Tailwind CSS & daisyUI.**

[![Live Site](https://img.shields.io/badge/🌍_Live-cristianarando.dev-000?style=for-the-badge)](https://cristianarando.dev)
[![Astro](https://img.shields.io/badge/Astro-6.4-BC52EE?style=for-the-badge&logo=astro&logoColor=white)](https://astro.build)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.3-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![daisyUI](https://img.shields.io/badge/daisyUI-5.5-5A0EF8?style=for-the-badge&logo=daisyui&logoColor=white)](https://daisyui.com)
[![TypeScript](https://img.shields.io/badge/TypeScript-Strict-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![License](https://img.shields.io/badge/License-MIT-22c55e?style=for-the-badge)](/LICENSE)

[Features](#-features) · [Tech Stack](#-tech-stack) · [Getting Started](#-getting-started) · [Project Structure](#-project-structure) · [Deployment](#-deployment) · [Contributing](#-contributing)

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

### 📝 Blog Engine
- **MDX Content** — Full MDX support with syntax highlighting, rich media, and custom components
- **Table of Contents** — Desktop sidebar with scroll-aware active heading tracking + mobile FAB with modal dialog
- **Featured Posts** — Carousel with autoplay, manual arrows, and swipe support on the homepage
- **Blog Manager** — Full-page blog index with real-time search, tag filtering, date range filtering (including custom date picker), sort options, and pagination
- **Comments** — [Giscus](https://giscus.app/) integration (GitHub Discussions) with automatic theme synchronization
- **Reading Time** — Estimated reading time calculated from word count
- **Post Navigation** — Previous/Next sibling post navigation at the bottom of each article
- **RSS Feed** — Per-language RSS feeds with autodiscovery meta tags

### 🌐 Internationalization (i18n)
- **5 Languages** — English 🇺🇸 · Español 🇪🇸 · Deutsch 🇩🇪 · Русский 🇷🇺 · 日本語 🇯🇵
- **Localized routing** with prefix-based URLs (`/en/`, `/es/`, `/de/`, etc.)
- **Per-language content** — Blog posts exist independently per locale with smart hreflang alternate tags
- **Localized CV downloads** — PDF resumes available for each language
- **Language switcher** — Dropdown selector preserving the current page path across locales

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
- **Web App Manifest** — PWA-ready configuration

---

## 🛠 Tech Stack

| Layer | Technology |
|---|---|
| **Framework** | [Astro 6](https://astro.build) — Static Site Generator with Islands Architecture |
| **Language** | [TypeScript](https://www.typescriptlang.org) — Strict mode |
| **Styling** | [Tailwind CSS 4](https://tailwindcss.com) + [daisyUI 5](https://daisyui.com) |
| **Typography** | [@tailwindcss/typography](https://github.com/tailwindlabs/tailwindcss-typography) — Prose styling for MDX content |
| **Content** | [Astro Content Collections](https://docs.astro.build/en/guides/content-collections/) + [MDX](https://mdxjs.com/) |
| **Comments** | [Giscus](https://giscus.app/) — GitHub Discussions-based comments |
| **Analytics** | [Vercel Analytics](https://vercel.com/analytics) |
| **Images** | [sharp](https://sharp.pixelplumbing.com/) — High-performance image processing |
| **Hosting** | [Vercel](https://vercel.com) — Edge network, automatic HTTPS |
| **Package Manager** | [pnpm](https://pnpm.io) |
| **Formatting** | [Prettier](https://prettier.io) + [prettier-plugin-astro](https://github.com/withastro/prettier-plugin-astro) |

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

| Command | Action |
|---|---|
| `pnpm dev` | Start local dev server at `localhost:4321` |
| `pnpm build` | Build production site to `./dist/` |
| `pnpm preview` | Preview the production build locally |
| `pnpm astro ...` | Run Astro CLI commands (`add`, `check`, etc.) |

---

## 📁 Project Structure

```
my-portfolio/
├── public/
│   ├── cv/                    # Localized PDF resumes
│   ├── favicon.ico
│   ├── favicon.svg
│   ├── robots.txt
│   └── site.webmanifest
├── src/
│   ├── assets/
│   │   ├── app.css            # Global styles, Tailwind config, daisyUI themes
│   │   ├── icons/             # SVG icon library (31 icons)
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
│   │   │   ├── en/            # header, home, footer, projects, skills, education, etc.
│   │   │   ├── es/
│   │   │   ├── de/
│   │   │   ├── ru/
│   │   │   └── ja/
│   │   ├── ui.ts              # Translation registry (merges all locale modules)
│   │   └── utils.ts           # Type-safe t() helper, localized data accessors
│   ├── layouts/
│   │   └── Layout.astro       # Base HTML layout with SEO, themes, analytics
│   ├── pages/
│   │   ├── [lang]/            # Locale-prefixed routes
│   │   │   ├── index.astro    # Home page (all sections)
│   │   │   ├── blog/          # Blog index + [slug] detail
│   │   │   ├── projects/      # Projects gallery
│   │   │   ├── rss.xml.ts     # Per-language RSS feed
│   │   │   └── news-sitemap.xml.ts
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
├── vercel.json                # Security headers + asset caching
├── tsconfig.json
└── package.json
```

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
