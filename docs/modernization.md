# Modernization and maintenance

## Implemented

- Astro 7, MDX 8, Node 24 recommendation and pinned pnpm; remove unused markdown and theme runtimes. Inter is served locally.
- Abortable page lifecycles for listeners, observers and timers; content remains visible without scroll animation JavaScript.
- Shared filtering preserves filters when switching views, sorts actual DOM order, handles multiword tags and UTC calendar dates, and maintains pagination focus and result announcements.
- Native keyboard-accessible dropdowns, labelled table-of-contents dialog with focus restoration, pausable carousel, keyboard-operable Lagrange points, reduced-motion handling and translated clipboard failure feedback.
- Only published, existing article translations become routes. Canonicals and language alternates match those routes; 404 is noindex. Structured data is safely serialized. RSS uses rendered and sanitized MDX, including the root XML feed.
- Project metadata lives in one typed catalog; locales contain translated copy. Certification entries render only once. Images declare sizes and dimensions; only initial cards load eagerly.
- CI checks formatting, locale alignment, types, production builds, regression tests, generated output and high/critical dependency advisories.

## Content workflows

### Projects

Add technical metadata to `src/data/projects.ts`, then add the matching ID's title and description to `src/i18n/locales/{en,es,de,ru,ja}/projects.ts`. The type checker and locale check detect missing copy. Do not edit the gallery layout to add a project.

### Articles

Add MDX under `src/content/blog/<lang>/<slug>.mdx` using the schema in `src/content.config.ts`. Keep frontmatter language and slug aligned with the path. Use the same slug for translations. A translation is optional: the language menu goes to that language's blog index when the article is unavailable. Drafts and future-dated articles are excluded from routes, feeds and lists. Scheduled publication needs a new build after its publication date; static hosting cannot publish automatically by the clock alone.

Use one page title (provided by the article layout), then start article sections at H2. Supply meaningful image alternative text and real update dates. Run the gates below after editing MDX, especially embedded components.

## Verification

```sh
pnpm install --frozen-lockfile
pnpm lint
pnpm check:i18n
pnpm check
pnpm test
pnpm build
pnpm check:build
pnpm audit
pnpm preview:secure
```

The generated-output check validates one H1, skip targets, metadata, canonical URLs, actual hreflang destinations, unique IDs, parseable JSON-LD, local links/anchors/assets, image dimensions, feeds and sitemap exclusions. It also rejects executable inline scripts and inline event handlers. The interaction test covers filters, search, view changes, pagination focus, DOM sorting and aborted timers in jsdom.

`preview:secure` serves only loopback port 4354 and applies the global security headers from `vercel.json`. It is a QA helper, not a production server or a complete Vercel emulator. Ordinary `astro preview` does not apply Vercel headers. Check browser navigation, themes and comments using this secure preview after changing scripts or providers.

## Security and upgrade decisions

Scripts are external files, including the early theme initializer. `assetsInlineLimit: 0` prevents Astro from inlining small modules. Keep this setting while the CSP disallows inline JavaScript. Astro's built-in CSP is not enabled because it is incompatible with ClientRouter; deployment headers enforce the policy instead. Inline styles remain allowed for existing dynamic positioning and component styling. Fonts are same-origin; frames are restricted to Giscus. Review provider-specific origins when adding integrations rather than broadening script access.

Two scoped pnpm overrides patch transitive advisories: typography's `postcss-selector-parser` to 7.1.7+ and Vite's `esbuild` to 0.28.1+. The latter affects esbuild's Windows development file server. Build and browser checks cover the current combination; remove overrides when upstream constraints include patched versions and rerun all gates. The completed dependency audit on 2026-10-22 reported zero known advisories; this is a point-in-time registry result, not a guarantee against unknown vulnerabilities.

RSS rendering uses Astro's experimental container API with the MDX renderer. Keep feed validation when upgrading Astro; this API can change before a stable API. Sanitization is deliberately applied after rendering, and interactive components do not execute in feeds.

## Follow-up work

- Measure Lighthouse and real-user Core Web Vitals on the deployed site before choosing additional performance work. Local compilation is not evidence of field performance.
- Validate final Vercel headers, analytics ingestion, Giscus authentication and external integrations after deployment. No deployment or account interaction is part of this change.
- Add case-study content (problem, decisions, architecture, results) to the existing project catalog; avoid invented project metrics.
- Consider a static search index when article volume warrants it, and feed subscriptions before introducing a newsletter backend.
- Add browser regression automation and automated accessibility scanning as the site grows. Current keyboard checks and structural tests do not establish full WCAG conformance.
