---
name: cristianarando.dev
description: Personal portfolio and technical blog of Cristian Arando, a monochrome engineering blueprint with a contained cosmic hero.
colors:
  graphite: "oklch(24.353% 0 0)"
  paper: "oklch(98% 0 0)"
  paper-dim: "oklch(95% 0 0)"
  paper-shade: "oklch(90% 0 0)"
  lunar-silver: "oklch(93% 0.005 250)"
  charcoal-dim: "oklch(22.648% 0 0)"
  charcoal-deep: "oklch(20.944% 0 0)"
  ash: "oklch(84.87% 0 0)"
  steel: "oklch(50% 0.01 250)"
  gunmetal: "oklch(35% 0.01 250)"
  slate-haze: "oklch(65% 0.01 250)"
  pale-slate: "oklch(85% 0.01 250)"
  neutral-light: "oklch(92% 0 0)"
  neutral-dark: "oklch(32% 0 0)"
  info-light: "oklch(92% 0.02 210)"
  success-light: "oklch(92% 0.02 145)"
  warning-light: "oklch(94% 0.02 85)"
  error-light: "oklch(90% 0.02 25)"
  info-dark: "oklch(76% 0.02 210)"
  success-dark: "oklch(78% 0.03 145)"
  warning-dark: "oklch(82% 0.03 85)"
  error-dark: "oklch(70% 0.03 25)"
  earth-blue: "#3b82f6"
  sun-amber: "#fbbf24"
typography:
  display:
    fontFamily: "Inter Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(3rem, 6vw, 4.5rem)"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "Inter Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.875rem, 3vw, 2.25rem)"
    fontWeight: 700
    lineHeight: 1.15
  lead:
    fontFamily: "Inter Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.25rem, 2vw, 1.5rem)"
    fontWeight: 600
    lineHeight: 1.35
  title:
    fontFamily: "Inter Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(0.875rem, 1.2vw, 1.125rem)"
    fontWeight: 700
    lineHeight: 1.375
  body:
    fontFamily: "Inter Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(0.75rem, 1vw, 0.875rem)"
    fontWeight: 400
    lineHeight: 1.625
  label:
    fontFamily: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace"
    fontSize: "0.75rem"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "0.1em"
rounded:
  selector: "0px"
  field: "4px"
  box: "4px"
  full: "9999px"
spacing:
  hairline: "1px"
  xs: "4px"
  sm: "8px"
  md: "16px"
  card: "20px"
  lg: "24px"
  gutter: "32px"
  section-sm: "40px"
  section-md: "80px"
  section-lg: "96px"
  container: "1152px"
components:
  button-primary:
    backgroundColor: "{colors.graphite}"
    textColor: "{colors.paper}"
    rounded: "{rounded.field}"
    height: "2.5rem"
    padding: "0 1rem"
  button-primary-dark:
    backgroundColor: "{colors.lunar-silver}"
    textColor: "{colors.graphite}"
    rounded: "{rounded.field}"
    height: "2.5rem"
    padding: "0 1rem"
  button-outline:
    textColor: "{colors.graphite}"
    rounded: "{rounded.field}"
    height: "2.5rem"
    padding: "0 1rem"
  button-ghost-sm:
    textColor: "{colors.graphite}"
    rounded: "{rounded.field}"
    height: "2rem"
    padding: "0 0.75rem"
  card:
    backgroundColor: "{colors.paper-dim}"
    rounded: "{rounded.box}"
    padding: "{spacing.card}"
  input-search:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.graphite}"
    rounded: "{rounded.field}"
    height: "2.5rem"
    padding: "0 1rem 0 2.5rem"
  chip-tech:
    textColor: "{colors.graphite}"
    typography: "{typography.label}"
    rounded: "{rounded.selector}"
    padding: "0.5rem"
  badge-featured:
    textColor: "{colors.paper}"
    rounded: "{rounded.full}"
    padding: "0.75rem 0.875rem"
  eyebrow:
    textColor: "{colors.graphite}"
    typography: "{typography.label}"
---

# Design System: cristianarando.dev

## Overview

**Creative North Star: "The Orbital Blueprint"**

The site reads like an engineering drawing of a well-behaved system. Everything has a coordinate: one centered 1152px column, consistent gutters, hairline rules, and small mono labels that annotate the content like callouts on a schematic. The palette is almost colorless on purpose: graphite on paper in light mode, lunar silver on charcoal in dark mode, with chroma never above 0.01 in UI chrome. Precision replaces decoration.

Typography and whitespace lead. Pages are editorial and minimal: a strong Inter headline, a mono eyebrow above it, generous section padding, and content that sits on flat tonal surfaces. The cosmic layer (star field, nebula spotlight, shooting stars, and the Lagrange star-chart card) is the system's single moment of spectacle and belongs to the hero alone. It is the blueprint's illustration, not its texture.

Depth is earned. Surfaces are flat at rest and separated by tone and 1px borders; lift and glow appear only as a response to hover or focus. Components are exact and understated: crisp 4px corners, square tech chips, mono metadata, and nothing that springs, bounces, or pops.

**Key Characteristics:**
- Monochrome OKLCH palette in two inverse custom themes (`light`, `business`)
- Inter Variable for all prose and headings; uppercase mono with wide tracking for labels and telemetry
- 4px corners on boxes and fields, 0px on selectors and chips, pill only for status badges
- Flat at rest; hairline borders and tonal steps carry hierarchy
- Cosmic imagery and saturated color confined to the hero
- One confirmed accent (earth blue) reserved for links and focus, pending implementation

## Colors

A cool, nearly achromatic graphite-and-silver palette with a hue of 250 at chroma ≤ 0.01. Color is information, not ornament.

### Primary
- **Graphite** (`graphite`): The light theme's primary and its body text, and also the dark theme's page background. Solid primary buttons, the section-heading bar, timeline numerals, and the focus outline in light mode.
- **Lunar Silver** (`lunar-silver`): The dark theme's primary. A barely cool silver used for primary buttons (with graphite text), eyebrows, and the focus outline in dark mode.

### Secondary
- **Steel** (`steel`, light) / **Slate Haze** (`slate-haze`, dark): Company names in the experience timeline, the featured-badge shield icon, and the trailing stop of the hero name gradient.

### Tertiary
- **Gunmetal** (`gunmetal`, light) / **Pale Slate** (`pale-slate`, dark): The third About metric and other low-frequency emphasis.
- **Earth Blue** (`earth-blue`, source hue ≈ 260): Today it appears only on the Earth body in the Lagrange chart. You confirmed it as the one accent allowed site-wide, for **links and focus rings only**. Not implemented yet; see The One Signal Rule.
- **Sun Amber** (`sun-amber`): The star core and corona in the Lagrange chart. Simulation-only.

### Neutral
- **Paper** (`paper`) / **Paper Dim** (`paper-dim`) / **Paper Shade** (`paper-shade`): Light theme base-100 / 200 / 300: page, raised surface (cards, footer, filter panel), and borders and image wells.
- **Graphite** / **Charcoal Dim** (`charcoal-dim`) / **Charcoal Deep** (`charcoal-deep`): Dark theme base-100 / 200 / 300, the same roles inverted.
- **Ash** (`ash`): Dark theme body text. Softer than white to keep glare down on charcoal.
- **Neutral Light** (`neutral-light`) / **Neutral Dark** (`neutral-dark`): daisyUI `neutral`, used for the active category filter and the footer contact button.
- **Feedback** (`info-*`, `success-*`, `warning-*`, `error-*`): Muted to chroma 0.02–0.03 so status never shouts. `success-dark` is used for the Lagrange "active" indicator.

`dracula` and `forest` are stock daisyUI themes offered in the theme switcher. They sit outside this system, and the color rules below govern `light` and `business` only.

### Named Rules
**The Monochrome Instrument Rule.** UI chrome stays at chroma ≤ 0.01 (feedback ≤ 0.03). If a component needs color to be understood, the hierarchy is wrong.

**The Contained Cosmos Rule.** Sun amber, the nebula glows, the star field, and shooting stars live inside the hero (`#home`) only. They never become section backgrounds, card accents, or icons elsewhere.

**The One Signal Rule.** Earth blue is the only saturated hue allowed outside the hero, used for inline links and `:focus-visible` rings and nothing else (no buttons, fills, or badges). The source `#3b82f6` reaches only about 3.6:1 on Paper, so each theme needs its own tuned value that passes 4.5:1 for text and 3:1 for focus rings before it ships.

## Typography

**Display Font:** Inter Variable (with ui-sans-serif, system-ui)
**Body Font:** Inter Variable
**Label/Mono Font:** System monospace stack (ui-monospace, SFMono-Regular, Menlo, Consolas)

**Character:** One neutral, highly legible grotesque does all the speaking. The mono stack is the blueprint's annotation layer: small, uppercase, widely tracked, and never used for sentences.

### Hierarchy
- **Display** (800, 3rem → 4.5rem, line-height 1, -0.025em): The hero name only. A primary→neutral→secondary gradient fill is used once.
- **Headline** (700, 1.875rem → 2.25rem): Section and page titles (`SectionHeading`, `PageHeading`), always preceded by an eyebrow and followed by a 48×4px primary bar.
- **Lead** (600, 1.25rem → 1.5rem): The hero role line and the footer subtitle.
- **Title** (700, 0.875rem → 1.125rem, leading-snug): Card and timeline titles.
- **Body** (400, 0.75rem → 0.875rem, line-height 1.625): Paragraphs, card descriptions, and timeline copy at 80–90% opacity. Long-form blog prose uses `@tailwindcss/typography`.
- **Label** (mono, 600, 0.75rem, 0.1em, uppercase): Eyebrows, tech chips, dates, and live-status telemetry. Smaller uppercase sans labels (10–11px, bold, `tracking-wider`) mark sub-headings inside timeline cards.

### Named Rules
**The Telemetry Label Rule.** Mono uppercase marks metadata: eyebrows, tags, dates, and status. Never set a sentence, a button, or a heading in it.

**The One Family Rule.** Inter carries every heading and paragraph. Don't introduce a display serif or a second sans.

## Layout

The page is one centered column: `max-width: 1152px` with 16px gutters on mobile and 32px from `md` (768px). Home sections stack vertically with 40 / 80 / 96px of vertical padding at mobile / `md` / `lg` (1024px), separated by a 1px horizontal rule that fades to transparent at both ends. Grids collapse to one column on mobile. About becomes 2:1 text-to-portrait at `md`, the hero becomes two columns at `lg`, and the Lagrange card is hidden below `md`. The sticky header shares the same column and shrinks its vertical padding after 20px of scroll. `scroll-padding-top: 5rem` keeps anchor targets clear of the header.

### Named Rules
**The Single Column Rule.** Every section, header, and footer aligns to the same 1152px column and gutters. Nothing breaks out except the hero's full-bleed cosmic backdrop.

## Elevation & Depth

Surfaces are flat at rest. Hierarchy comes from tonal steps (base-100 → base-200 → base-300) and 1px hairline borders (`base-300`, or `base-content` at 5–10%). On hover or focus a surface may rise 2–4px, shift its border toward primary at 30%, and take a soft primary glow. The only always-on depth is the hero's Lagrange card, the system's illustrated artifact.

**Incumbent drift:** Cards, timeline items, and the About stats strip currently carry a resting `shadow-md`/`shadow-xl` and translucent `backdrop-blur`. The hover glows are written as `rgba(var(--color-primary), α)`, which is invalid with daisyUI 5's OKLCH variables, so the glow never renders. New work should follow the rule below, and existing components should converge on it.

### Shadow Vocabulary
- **Hover glow** (`box-shadow: 0 0 15px color-mix(in oklch, var(--color-primary) 15%, transparent)`): Interactive cards on hover and focus-within only.
- **Focus outline** (`outline: 2px solid var(--color-primary); outline-offset: 4px`): Every `:focus-visible` element. This moves to the earth-blue signal once it is implemented.
- **Artifact shadow** (`0 25px 50px -12px rgba(0,0,0,0.4), inset 0 1px 1px rgba(255,255,255,0.05)`): The Lagrange card only.

### Named Rules
**The Flat-At-Rest Rule.** No resting shadows on content surfaces. Depth appears only as a response to state.

**The Hairline Rule.** Borders are 1px, never thicker, never colored except the 30% primary shift on hover.

## Shapes

Boxes and fields use 4px corners. Selectors, tech chips, and the theme toggle are square (0px), which reads as cut, measured, and schematic. Pills (`9999px`) are reserved for status: the featured badge, the timeline numerals, and the pulsing live dot. Recurring blueprint geometry includes corner brackets (2px L-shaped strokes on opposite corners of the portrait), concentric offset frames, the 24px schematic grid inside the Lagrange card, and dashed orbit lines.

**Incumbent drift:** The About stats strip, the projects filter panel, the portrait frames, and the Lagrange card use 16px (`rounded-2xl`). These pre-date the 4px rule and should converge on it unless one is deliberately kept as the hero artifact.

### Named Rules
**The 4px Rule.** Corners are 4px, 0px, or a full pill. No other radius.

## Components

Exact and understated: crisp corners, hairline borders, mono annotations. Nothing bounces.

### Buttons
- **Shape:** Gently squared (4px), 40px tall at the default size, with 32px and 24px compact sizes (`btn-sm`, `btn-xs`).
- **Primary:** Solid Graphite with Paper text in light mode, and Lunar Silver with Graphite text in dark. Used for the main CTA (Download CV) and live demo links.
- **Outline:** 1px base-content border, transparent fill, with a base-content 10% wash on hover. Used for secondary CTAs (Contact, Code).
- **Ghost with arrow:** The "Read more" pattern: a ghost button with a 10% base-content hairline and a trailing → that slides 4px right on hover while the border shifts to primary at 30%.
- **Hover / Focus:** Color and border transitions over 300ms. **Incumbent drift:** the hero CTAs and the footer contact button scale to 105% on hover, which conflicts with "nothing bounces."

### Chips
- **Tech chip:** Square (0px), mono label at `badge-xs`, base-300 at 50% fill with a 10% base-content hairline and 80% text. On hover, the text shifts to primary.
- **Featured badge:** A pill of dark glass (`neutral-900` at 60% with backdrop blur and white text) and a shield icon in secondary, overlaid top-left on card images.
- **Category filter:** `btn-sm` with outline at rest and solid neutral when active (`aria-pressed="true"`).

### Cards / Containers
- **Corner Style:** 4px (daisyUI `--radius-box`).
- **Background:** base-200 at 50% over the page, with a 1px base-300 border and a base-300 divider above the action row.
- **Shadow Strategy:** Flat at rest. On hover, a 4px lift, the border shifts to primary at 30%, a hover glow appears, and the image zooms to 105% over 500ms.
- **Internal Padding:** 20px (compact) or 24px (featured, timeline).
- **Media:** A fixed-height image well (176–192px) on base-300, `object-cover`.

### Inputs / Fields
- **Style:** `input-bordered` on base-100 inside the base-200 panel, 4px radius, 40px tall, with a leading search icon at 60% opacity.
- **Selects:** `select-sm`, mono-free, with an uppercase tracked label beside them.
- **Focus:** A 2px primary ring. This moves to the earth-blue signal once it is implemented.

### Navigation
A sticky top bar of base-100 at 20% with `backdrop-blur-md` and a 5% base-content hairline below. The name sits left (bold, `text-xl` at `lg`), daisyUI horizontal menu links sit centered (medium weight), and the language and theme controllers sit right. Below `lg`, a ghost circle burger opens a `details` dropdown on base-200. On scroll past 20px the bar tightens (8px to 2px vertical padding) and gains `shadow-sm`.

### Section Heading (signature)
A mono uppercase eyebrow in primary, a bold Inter headline, and a 48×4px primary bar beneath, centered on home sections and left-aligned in About. It's the most repeated expression of the blueprint and should open every new top-level section.

### Lagrange Star Chart (signature)
The hero's illustrated artifact: a 400×470px panel of base-200 at 30% with a 24px schematic grid, a slow radar sweep, a mono header with a live "active" telemetry dot, and an SVG of the Sun–Earth system with interactive L1–L5 points. It's the only component allowed full color, an always-on shadow, and continuous motion. It's hidden below `md` and goes static under `prefers-reduced-motion`.

## Do's and Don'ts

### Do:
- **Do** take every color from the daisyUI semantic variables (`--color-primary`, `--color-base-200`, …) so all four themes keep working.
- **Do** write translucent colors as `color-mix(in oklch, var(--color-primary) 15%, transparent)` or Tailwind's `/15` modifier, never `rgba(var(--color-*), α)`.
- **Do** open new sections with the Section Heading (mono eyebrow, Inter headline, 48×4px bar) inside the 1152px column.
- **Do** keep surfaces flat at rest and reserve lift (≤ 4px), the primary border shift, and the glow for hover and focus.
- **Do** use mono uppercase labels for tags, dates, and status, and Inter for everything people read.
- **Do** gate every continuous animation behind `prefers-reduced-motion` and the `.preload` suppression class.
- **Do** tune earth blue per theme to pass 4.5:1 before using it for links or focus.

### Don't:
- **Don't** bring star fields, nebula glows, sun amber, or cosmic imagery outside the hero.
- **Don't** use earth blue (or any saturated hue) for buttons, fills, badges, or decoration.
- **Don't** use corner radii other than 0px, 4px, or a full pill on new components.
- **Don't** add resting drop shadows or glassmorphism to content cards.
- **Don't** scale, spring, or overshoot controls on hover. Use color, border, and small translations instead.
- **Don't** set sentences, buttons, or headings in the mono label style.
- **Don't** design new surfaces against `dracula` or `forest`. They are stock themes outside this system.
