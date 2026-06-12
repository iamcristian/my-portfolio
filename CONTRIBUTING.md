# Contributing to cristianarando.dev

Thank you for considering contributing to this project! Whether it's a bug report, feature suggestion, translation fix, or code improvement — every contribution is valued.

---

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [How Can I Contribute?](#how-can-i-contribute)
- [Development Setup](#development-setup)
- [Project Architecture](#project-architecture)
- [Coding Guidelines](#coding-guidelines)
- [Commit Convention](#commit-convention)
- [Pull Request Process](#pull-request-process)
- [Translation Contributions](#translation-contributions)

---

## Code of Conduct

This project adheres to the [Contributor Covenant Code of Conduct](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code. Please report unacceptable behavior to **crisarandosyse@gmail.com**.

---

## How Can I Contribute?

### 🐛 Reporting Bugs

1. **Search existing issues** first to avoid duplicates.
2. Open a new issue using the bug report template.
3. Include:
   - Steps to reproduce the bug
   - Expected behavior vs. actual behavior
   - Browser, OS, and device information
   - Screenshots or screen recordings if applicable

### 💡 Suggesting Features

1. Open an issue with the `enhancement` label.
2. Clearly describe the feature, its purpose, and potential implementation ideas.
3. Reference similar implementations in other projects if possible.

### 🌐 Fixing Translations

Translation improvements are always welcome! See the [Translation Contributions](#translation-contributions) section below.

### 🔧 Code Contributions

1. Fork the repository.
2. Create a feature branch from `main`.
3. Make your changes following the [Coding Guidelines](#coding-guidelines).
4. Submit a pull request.

---

## Development Setup

### Prerequisites

- **Node.js** ≥ 22.12.0
- **pnpm** (recommended)

### Quick Start

```bash
# Clone your fork
git clone https://github.com/<your-username>/my-portfolio.git
cd my-portfolio

# Install dependencies
pnpm install

# Start dev server
pnpm dev
```

The site runs at `http://localhost:4321`.

### Useful Commands

| Command | Description |
|---|---|
| `pnpm dev` | Start development server with hot reload |
| `pnpm build` | Build production bundle to `./dist/` |
| `pnpm preview` | Preview the production build locally |
| `pnpm astro check` | Run TypeScript and Astro diagnostics |

---

## Project Architecture

```
src/
├── assets/          → Global CSS, SVG icons, images
├── components/      → Astro components (sections, UI, blog, projects)
├── config/          → Site-wide constants and path utilities
├── content/         → MDX blog posts organized by locale
├── i18n/            → Translation files and i18n utilities
├── layouts/         → Base HTML layout
├── pages/           → File-based routing with [lang] dynamic segments
├── scripts/         → Client-side shared logic (list-manager)
├── types/           → Shared TypeScript interfaces
└── utils/           → Utility functions (blog helpers)
```

### Key Patterns

- **i18n:** All user-facing text goes through `useTranslations(lang)`. Translation files live in `src/i18n/locales/{lang}/`.
- **Content:** Blog posts use Astro Content Collections with Zod schemas. Posts are organized by locale directory.
- **Components:** Sections are in `components/sections/`, reusable primitives in `components/ui/`, and feature-specific components in `components/blog/` and `components/projects/`.
- **Styling:** Tailwind CSS 4 + daisyUI 5 with custom themes defined in `src/assets/app.css`.

---

## Coding Guidelines

### General

- Write **TypeScript** — avoid `any` where possible.
- Use **Astro components** (`.astro`) for all UI that doesn't need client-side interactivity.
- Keep components **focused and small** — one concern per file.
- Preserve existing **comments and documentation** unless directly related to your change.

### Astro Components

- Use the frontmatter (`---`) section for all server-side logic.
- Define `Props` interfaces for all components that accept props.
- Use `Astro.props` destructuring with defaults when applicable.

### Styling

- Use **Tailwind CSS utility classes** and **daisyUI component classes**.
- Avoid inline styles unless dynamically computed (e.g., CSS custom properties).
- Place component-scoped styles in `<style>` blocks within the `.astro` file.
- For global styles, use `src/assets/app.css`.

### TypeScript

- Shared interfaces belong in `src/types/index.ts`.
- Import types with `import type { ... }` when possible.
- Use strict mode (enforced by `tsconfig.json`).

### i18n

- Never hardcode user-facing strings — use the `t()` translation function.
- When adding a new translation key, add it to **all 5 locale files** (en, es, de, ru, ja).
- Locale data modules (projects, skills, etc.) go in `src/i18n/locales/{lang}/`.

---

## Commit Convention

This project follows [Conventional Commits](https://www.conventionalcommits.org/):

```
<type>(<scope>): <description>

[optional body]
[optional footer(s)]
```

### Types

| Type | Description |
|---|---|
| `feat` | A new feature |
| `fix` | A bug fix |
| `docs` | Documentation changes |
| `style` | Formatting, missing semicolons, etc. (no code change) |
| `refactor` | Code change that neither fixes a bug nor adds a feature |
| `perf` | Performance improvement |
| `test` | Adding or updating tests |
| `chore` | Build process, dependencies, or tooling changes |
| `i18n` | Translation additions or updates |
| `content` | Blog post or content changes |

### Examples

```
feat(blog): add reading progress bar to blog posts
fix(seo): resolve duplicate canonical URLs on blog index
i18n(de): complete German translation for education section
content(blog): add "Astro vs Next.js" article in Spanish
refactor(i18n): extract shared getLang logic into middleware
```

---

## Pull Request Process

1. **Branch naming:** Use descriptive branch names like `feat/reading-progress-bar` or `fix/seo-canonical-url`.
2. **Single concern:** Each PR should address one feature, fix, or improvement.
3. **Self-review:** Review your own diff before requesting review.
4. **Description:** Write a clear PR description explaining _what_ changed, _why_, and _how_ to test it.
5. **Build check:** Ensure `pnpm build` completes without errors before submitting.
6. **Screenshots:** Include before/after screenshots for any visual changes.

---

## Translation Contributions

The site supports 5 languages. Translations are organized per-locale in `src/i18n/locales/`.

### Structure

```
src/i18n/locales/
├── en/
│   ├── header.ts        # Navigation labels, theme/language titles
│   ├── home.ts          # Hero, About, site meta, SEO strings
│   ├── footer.ts        # Footer labels
│   ├── projects.ts      # Projects data + UI labels
│   ├── skills.ts        # Skills categories and items
│   ├── education.ts     # Academic degrees
│   ├── certifications.ts # Professional certifications
│   ├── languages.ts     # Spoken languages
│   └── experience.ts    # Work experience
├── es/
├── de/
├── ru/
└── ja/
```

### How to Add/Fix a Translation

1. Find the relevant file in `src/i18n/locales/{lang}/`.
2. Locate the key you want to translate (reference `en/` as the source of truth).
3. Update the value in the target language file.
4. Verify that the key exists in **all** locale directories.

### Adding a New Language

1. Create a new directory under `src/i18n/locales/` (e.g., `fr/`).
2. Copy all files from `en/` as templates.
3. Translate all strings.
4. Register the language in `src/i18n/ui.ts` (`languages` map and `ui` map).
5. Add the locale to `astro.config.mjs` (`i18n.locales` and `sitemap.i18n`).
6. Add a CV PDF to `public/cv/` and register it in `src/config/site.ts`.

---

## 🙏 Thank You

Every contribution — no matter how small — helps make this project better. Thank you for taking the time to contribute!

---

<div align="center">

**Questions?** Open an issue or reach out at **crisarandosyse@gmail.com**

</div>
