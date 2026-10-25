---
target: src/pages/[lang]/index.astro
total_score: 22
max_score: 32
na_heuristics: 7,10
p0_count: 0
p1_count: 2
target_identity: "file:C:\\Users\\crisa\\Workspace\\astro\\my-portfolio\\src\\pages\\[lang]\\index.astro"
target_fingerprint: "sha256:964050b96e6c9b4642ebfe02dc6d8a1c61fe6fcef4ad17ac1736472ee8ca2544"
target_path: "C:\\Users\\crisa\\Workspace\\astro\\my-portfolio\\src\\pages\\[lang]\\index.astro"
timestamp: 2026-10-24T21-51-10Z
slug: src-pages-lang-index-astro
---
# Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 3 | Filter/search lacks active result count or explicit empty state. |
| 2 | Match System / Real World | 3 | Clear technical language and icons; Lagrange physics metaphor matches domain. |
| 3 | User Control and Freedom | 3 | Excellent language/theme switches; minor gap in quick filter reset when search yields 0 results. |
| 4 | Consistency and Standards | 2 | Border radius drift (16px stats/filter vs 4px in DESIGN.md), scale-up hover animations ("nothing bounces"), and broken `rgba(var(--color-primary))` OKLCH syntax. |
| 5 | Error Prevention | 3 | Minimal input risks; robust locale fallbacks for assets and CV downloads. |
| 6 | Recognition Rather Than Recall | 3 | Sticky navigation with clear landmarks; tech stack tags visible on cards. |
| 7 | Flexibility and Efficiency | n/a | Persuade/Experience surface; portfolio showcase follows structured linear reading. |
| 8 | Aesthetic and Minimalist Design | 3 | Editorial typography and cosmic hero are striking; minor font-size ramp drift (`text-[10px]` / `text-[11px]` in 22 instances). |
| 9 | Error Recovery | 2 | Good 404 page, but in-page search produces empty container without constructive guidance when queries yield 0 matches. |
| 10 | Help and Documentation | n/a | Persuade/Experience surface; self-contained portfolio interface. |
| **Total** | | **22/32** | **Good (69%)** |

## Design Specificity Verdict

- **LLM Assessment**: High specificity in the Hero section through the Lagrange Point simulation and cosmic orbital mechanics. However, below-the-fold sections (About, Education, Experience, Projects) revert to familiar portfolio template tropes (3-metric stat blocks, standard timeline cards, generic project thumbnails) rather than extending the promised "Orbital Blueprint" aesthetic and reflecting Cristian's specific positioning in Software Architecture and Information Security.
- **Deterministic Scan**: `impeccable detect` reported 24 findings across `src/components`:
  - 2 warnings: `border-accent-on-rounded` in `src/components/sections/About.astro` (lines 84 & 85: thick accent corner borders on rounded photo frame).
  - 22 advisories: `design-system-font-size` across `About.astro`, `TimelineItem.astro`, `LagrangeSimulation.astro`, `AcademicCard.astro`, `BlogCard.astro`, `CertificationCard.astro`, and `ProjectCard.astro` using `text-[10px]` and `text-[11px]`, which sit outside the DESIGN.md typography scale.
- **Visual Overlays**: Dev server was not running during this static analysis session; automated CLI scan ran in fallback mode without in-browser script injection.

## Overall Impression

The site creates an exceptional first impression with the Lagrange simulation, cosmic lighting, and crisp Inter typography. However, the design system has visible implementation drift against `DESIGN.md` (non-functional OKLCH hover glows, 16px vs 4px radius collisions, bouncing buttons), and the content below the fold does not yet express the depth of Software Architecture & Information Security described in `PRODUCT.md`.

## What's Working

1. **The Hero Experience & Simulation:** The Lagrange Point interactive chart is uniquely authored, technically sophisticated, and memorable. It immediately signals engineering depth.
2. **Typographic Rhythm & Mono Telemetry:** The pairing of Inter Variable with uppercase tracking monospace labels (`SectionHeading`, tech chips) establishes an authoritative, clean editorial tone.
3. **Frictionless Internationalization & Dark Mode:** 5 fully supported locales with zero FOUC on load and smooth OKLCH theme switching provide global accessibility.

## Priority Issues

- **[P1] Broken OKLCH Hover Glows**
  - **Why it matters:** Multiple cards and headings (`ProjectCard`, `BlogCard`, `TimelineItem`, `SectionHeading`) attempt to render subtle ambient glows on hover using `rgba(var(--color-primary), α)`. In daisyUI 5, `--color-primary` evaluates to `oklch(...)`, making `rgba(oklch(...))` invalid CSS. The glow never renders, leaving hover states visually muted or defective.
  - **Fix:** Replace invalid `rgba(var(--color-primary), ...)` with CSS `color-mix(in oklch, var(--color-primary) 15%, transparent)` or Tailwind's `/15` alpha modifier.
  - **Suggested command:** `/impeccable polish`

- **[P1] Geometric & Elevation Drift ("The 4px Rule" & "Flat-at-Rest")**
  - **Why it matters:** `DESIGN.md` establishes a strict 4px corner rule and flat resting surfaces with 1px hairline borders. In the code, the About stats strip, Projects filter panel, and photo frames use `rounded-2xl` (16px), and cards carry resting `shadow-md` and `backdrop-blur`. This dilutes the crisp, measured "Orbital Blueprint" aesthetic.
  - **Fix:** Normalize card and panel corners to 4px (`rounded`), eliminate resting box-shadows on content cards, and let depth emerge cleanly on hover/focus.
  - **Suggested command:** `/impeccable polish`

- **[P2] Positioning Disconnect in Project Presentations**
  - **Why it matters:** `PRODUCT.md` positions Cristian as a specialist in Software Architecture, Full-Stack Systems, and Information Security. Yet the project cards display only generic frontend/fullstack tags (e.g. "React", "TypeScript", "Bootstrap") without architectural context, security considerations, or system design diagrams.
  - **Fix:** Enrich project cards and detail presentations with architecture badges, system trade-offs, and security highlights to substantiate the claims in `PRODUCT.md`.
  - **Suggested command:** `/impeccable shape projects`

- **[P2] Kinetic Inconsistency ("Nothing Bounces")**
  - **Why it matters:** Primary CTAs in the Hero (`hover:scale-105`) and the contact button in the footer use spring-like scale transforms on hover. This directly contradicts the "exact and understated: nothing bounces" principle of the blueprint.
  - **Fix:** Remove `hover:scale-105` and replace it with subtle border transitions and color shifts.
  - **Suggested command:** `/impeccable polish`

- **[P3] Off-Scale Micro-Typography (22 Detector Advisories)**
  - **Why it matters:** 22 instances of arbitrary `text-[10px]` and `text-[11px]` are scattered across badges and metadata in `TimelineItem`, `ProjectCard`, `BlogCard`, etc. This breaks typographic consistency and harms legibility.
  - **Fix:** Align all sub-labels to the standard `text-xs` (12px / 0.75rem) mono label token defined in `DESIGN.md`.
  - **Suggested command:** `/impeccable typeset`

## Persona Red Flags

- **Alex (Power User / Tech Recruiter scanning in 30s):** In a 30-second scan, Alex sees project cards that look like standard beginner/intermediate portfolio projects because backend architecture, database choices, and security considerations are omitted from the summary cards.
- **Jordan (First-Timer / Junior Dev):** The Lagrange simulation has interactive L1-L5 points, but there is no explicit visual affordance or hint indicating they can be clicked/tapped on touch or mobile devices.
- **Sam (Accessibility-Dependent / Keyboard-Only):** In `light` theme, `:focus-visible` uses `var(--color-primary)` (Graphite), but several interactive chips and card links lack distinctive focus rings, and dark glass badges rely on small color contrast differences.

## Minor Observations

- In `About.astro`, the photo frame has thick 2px L-shaped brackets (`border-b-2`, `border-t-2`) on rounded corners flagged as `border-accent-on-rounded` by the detector.
- Star shadows in `Hero.astro` generate 70+ random box-shadow strings on the server. While fast, it produces very verbose inline styles.
- Missing explicit "0 results found" recovery message in `ProjectsManager.astro` when a search filter yields no matching items.

## Questions to Consider

- What if project cards featured an expandable "Architecture & Security Notes" tab to directly prove the technical claims in `PRODUCT.md`?
- Should the earth-blue signal color be tuned and introduced now to give links and focus states a distinct, accessible presence across both themes?
- Would adopting the 4px blueprint geometry across the About stats and project filters make the whole page feel significantly more unified and intentional?
