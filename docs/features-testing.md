# Reader and portfolio features

Branch: `codex/reader-and-portfolio-features`.

## Start the site

Run `pnpm install` if dependencies are missing, then `pnpm dev`. Open the URL printed by Astro (normally http://localhost:4321). Keep using the same host and port when testing persistence: localhost and 127.0.0.1 have separate browser storage.

The new controls are translated for English, Spanish, German, Russian and Japanese. Case study explanations, reading-path descriptions, and the playground's detailed explanatory text are authored in English and marked accordingly. They are editorial content, not translations of previously existing material.

## Manual walkthrough

| Feature              | Where                                                                                                        | Test and expected result                                                                                                                                                                                                                                                                                                                                                                        |
| -------------------- | ------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Reading preferences  | `/en/blog/astro-vs-nextjs/` → floating reading-tools button → **Aa**                                         | Change size (14–28px, including the original 14px article size), line spacing, width and typeface. Close, reload, and open another article: settings persist. Reset returns to 14px, standard spacing, wide width and sans serif. Width differences are limited by the available screen space.                                                                                                  |
| Focus mode           | Floating reading menu                                                                                        | Enter focus mode. Navigation, comments, related articles and the contents sidebar disappear. Open the floating menu again to exit focus, or use Escape with the menu and settings closed. Follow an article link: the next page should open normally.                                                                                                                                           |
| Saved articles       | Floating menu → **Add to reading list**, then **Reading list**                                               | The article appears at `/en/library/`. Remove its bookmark; it may remain as reading history if already started. Clear reading history resets progress while preserving bookmarks.                                                                                                                                                                                                              |
| Continue reading     | Scroll midway through a long article, wait a moment, then follow another page link and return without a hash | A continue prompt appears without jumping automatically. Change text size and press Continue: it returns to approximately the same position in the section. Dismiss closes the prompt. Links with a heading hash take priority over restoration.                                                                                                                                                |
| Project case studies | `/en/projects/` → **Case study**                                                                             | All four projects have dedicated pages, screenshots, stack links, architecture explanations and tradeoffs. Source links open the corresponding repository. The editorial notice distinguishes documented stack information from design considerations; there are no invented metrics.                                                                                                           |
| Interactive article  | Bottom of `/en/blog/astro-vs-nextjs/`                                                                        | Expand the inline experiment, then step through Browser → API → Database → Response. Increase payload: the final transfer time increases. Restart returns to the first stage. This is a teaching model with stated assumptions, not a benchmark.                                                                                                                                                |
| Global search        | Header search icon or Ctrl/Cmd+K outside an input                                                            | Search `PostgreSQL`, `OWASP`, or a phrase from an article body. Experience results target the specific timeline entry and use native fragment navigation. Back returns to the search query. Results include excerpts and links to projects, article bodies, skills and experience. Toggle all languages; refresh preserves the query and language choice. Try nonsense: an empty state appears. |
| Skill evidence       | Homepage → Skills → a skill badge                                                                            | Opens search with that skill and excludes skill-only matches, showing the supporting content available. Project technology badges do the same. Some skills have no supporting content yet and correctly show an empty result.                                                                                                                                                                   |
| Reading paths        | `/en/series/` or the navigation below an article                                                             | Follow the ordered articles and previous/next links. Scroll to the end of one article, then return to the path: it is marked complete on this browser. Unpublished articles are excluded.                                                                                                                                                                                                       |
| Bookshelf            | `/en/bookshelf/`                                                                                             | Search a title, author or theme, then filter Completed/Planned. Counts update and nonmatching cards disappear. Status comes from the checkboxes in the existing localized bookshelf article. Links open the original article or search for related discussion.                                                                                                                                  |
| Passage links        | Select prose inside an article, then **Copy passage link**                                                   | Paste the copied URL into another tab. A nearby action appears only when article prose is selected. Supporting browsers highlight the text; other browsers can use the heading fragment. There is no passage button at the top of the page. Clipboard failure shows a manual-copy address.                                                                                                      |
| Freshness            | Framework comparison article → **Revision notes**                                                            | The updated date and revision explain that the interactive demonstration was added while the framework discussion remains historical.                                                                                                                                                                                                                                                           |

Repeat the main reader, search and navigation checks under `/es/`, `/de/`, `/ru/`, and `/ja/`. Test a narrow mobile viewport, browser zoom at 200%, all themes, keyboard-only navigation, and the largest reader size. Code blocks should scroll inside the article. The settings panel is non-modal: desktop layout reserves a side column, while mobile shows compact controls near the bottom corner with the passage still visible above. No backdrop blocks reading.

## Content maintenance

- Case study copy: `src/data/case-studies.ts`. Review editorial assumptions against each repository before turning them into factual implementation claims.
- Reading paths: `src/data/series.ts`; slugs resolve only to published articles in the current locale.
- Bookshelf: edit the existing `src/content/blog/<lang>/my-bookshelf.mdx` checkboxes. The new shelf is derived at build time. Existing notes from the localized notable-reads article are matched to book titles and shown on their cards; this change does not invent reading experiences.
- Interactive explanations: import `RequestLab.astro` in MDX. Its JavaScript initializes only where the component is present.
- Optional article fields: `updatedDate`, `revisions` (array of strings), `versions` (string), and `examplesChecked` (YYYY-MM-DD). Only claim a checking date after actually checking the examples.
- Search index: generated at build time from published article prose, localized project descriptions/stacks, skills and experience. It is fetched when the search page opens, not on every page.

## Storage and limitations

`portfolio-reader-v1` contains preferences; `portfolio-reading-v1` contains up to 200 article records. Data stays on this browser and does not sync between devices. Clearing browser data removes it. Invalid storage is ignored and unavailable storage should not crash the page. Reading completion means reaching the article's end, not proof someone read it. Completion remains recorded when revisiting the article and is reset by Clear reading history.

Passage highlighting depends on browser text-fragment support and the passage remaining in the article. An available heading is included as a fallback. The bookshelf derives metadata from the existing Markdown conventions; keep `##` theme headings, bold author labels and `- [x]` / `- [ ]` entries when editing it.

## Automated verification

Run these sequentially (concurrent Astro processes can contend for generated caches on Windows):

```sh
pnpm exec prettier --check .
pnpm check:i18n
pnpm check
pnpm test
pnpm build
pnpm check:build
```

The reader regression tests cover invalid preferences, corrupt/unavailable storage, unsafe stored destinations, saved articles, focus mode, and restoration within a section after layout changes. Generated-output validation checks routes, local links, language alternates, accessibility landmarks and CSP-compatible markup across the built site.

The contents picker uses a numbered editorial side panel. Select a section to close it and focus that section; Escape and the close button also dismiss it. Article headings keep their IDs for navigation and passage links, with no extra permalink icon or hover action. The saved-article action explicitly says Add to reading list or Remove from reading list.

In reading preferences, the back arrow returns to the expanded reading menu and preserves typography settings. The close button closes both levels. The discovery navigation uses direct page loads without Astro transitions, and marks the current page as non-interactive to avoid unnecessary reloads.
