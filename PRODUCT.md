
# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

- **Primary:** Technical recruiters, engineering hiring managers, and technology founders evaluating Cristian Arando for Full-Stack Software Engineering roles, technical collaborations, and potential consulting opportunities.
- **Secondary:** Software engineers, developers, and technical peers exploring technical articles, software architecture, system design, and open-source projects.

## Product Purpose

Serve as the central digital portfolio, technical writing platform, and professional identity for Cristian Arando (`cristianarando.dev`).

The product aims to demonstrate practical engineering expertise across frontend development, backend systems, software architecture, and security-conscious engineering through verifiable projects, technical writing, and thoughtfully designed user experiences.

Its purpose is to establish professional credibility, communicate technical capabilities clearly, and support meaningful career, collaboration, and potential consulting opportunities.

## Positioning

**Software Engineer — Full-Stack Development, Software Architecture & Information Security.**

Cristian approaches software engineering as an interconnected discipline, combining thoughtful user experiences, robust backend systems, sound architectural decisions, and security-conscious development practices.

As AI increasingly automates routine implementation tasks, the portfolio emphasizes engineering judgment, problem-solving, maintainability, architectural reasoning, and attention to user experience.

The positioning is multidisciplinary without claiming expertise beyond demonstrated experience. Technical credibility should emerge from real projects, documented decisions, and verifiable results rather than self-assigned titles or promotional language.

## Operating Context

- **High-Velocity Evaluation:** Design for visitors who may initially spend only 30–60 seconds evaluating the site, prioritizing immediate access to resume links, GitHub repositories, live project demonstrations, and technical articles. Treat this as a UX design assumption rather than a verified behavioral metric.
- **Multilingual Global Reach:** International technical audience across the US, LATAM, Europe, and Asia, supported across five locales (`en`, `es`, `de`, `ja`, `ru`).
- **Cross-Device Experience:** Support desktop development machines, laptops, tablets, and mobile devices through responsive layouts, readable typography, accessible interactions, and efficient resource loading.
- **Information Prioritization:** Allow visitors to quickly understand professional identity, technical capabilities, demonstrated projects, and available contact channels without navigating unnecessary visual complexity.

## Capabilities and Constraints

- **Stack & Architecture:** Astro 7 Static Site Generator with Islands architecture, Tailwind CSS 4, daisyUI 5, and strict TypeScript.
- **Internationalization:** Five-language routing (`en`, `es`, `de`, `ja`, `ru`) with automated translation-key alignment checks (`scripts/check-i18n.ts`).
- **Interactive Experiences:** Cosmic Lagrange Point particle simulation and theme persistence across four handcrafted OKLCH themes (`light`, `business`, `dracula`, `forest`), with an early theme initialization script designed to prevent Flash of Unstyled Content (FOUC).
- **Publishing & Content:** MDX content collections for technical articles, reading-time calculations, RSS feeds, and Giscus-backed GitHub discussions.
- **Client-Side Architecture:** Prefer static rendering and hydrate only components that require client-side interactivity. Avoid unnecessary JavaScript, redundant dependencies, and computationally expensive visual effects.
- **Performance Objectives:** Optimize for Core Web Vitals, targeting Largest Contentful Paint (LCP) ≤ 2.5 seconds, Interaction to Next Paint (INP) ≤ 200 milliseconds, and Cumulative Layout Shift (CLS) ≤ 0.1 at the 75th percentile of real-user measurements.
- **Lighthouse Quality:** Aim for Lighthouse Performance scores of 90 or higher under defined testing conditions, while also prioritizing accessibility, best practices, and SEO.
- **Verification:** Treat performance metrics as measurable objectives rather than achieved results until validated through appropriate testing and monitoring.

## Brand Commitments

- **Name & Identity:** Cristian Arando (`iamcristian` / `cristianarando.dev`).
- **Professional Identity:** A multidisciplinary software engineer focused on full-stack development, software architecture, and information security.
- **Tone & Voice:** Intellectually rigorous, detail-oriented, direct, transparent, and humble yet confident. Communicate technical concepts clearly, explain decisions through evidence, and avoid generic corporate buzzwords, exaggerated claims, or artificial hype.
- **Visual Direction:** Maintain a recognizable, engineering-inspired identity with restrained cosmic and aerospace references. Detailed visual rules, component specifications, color palettes, typography, and interaction patterns are defined in `DESIGN.md`.
- **Credibility:** Favor demonstrable work, transparent technical explanations, and verifiable achievements over unsupported statements of expertise.
- **Professional Communication:** Present complex technical subjects in an approachable manner without sacrificing accuracy or engineering depth.

## Evidence on Hand

- **Production Repositories & Demos:**
  - OneLink (`iamcristian/onelink-frontend`)
  - Explora Bolivia (`iamcristian/explora-bolivia-frontend`)
  - Maxi Basquet (`iamcristian/Torneo-Internacional-Maxi-Basquet`)
  - Long Old Live Plus (`borisumss/LongOldLivePlus`)
- **Localized Resumes:** PDF resumes for all five supported languages (`/cv/cv_*.pdf`).
- **Live Codebase:** Unit tests (`tests/*.test.ts`), custom asset pipelines (`scripts/generate-assets.ts`), and CI workflows (`.github/workflows/ci.yml`).
- **Technical Evidence:** Prefer links to functioning implementations, source repositories, architectural explanations, and documented technical decisions.
- **Constraints on Evidence:** Do not fabricate client testimonials, enterprise logos, project outcomes, performance metrics, professional experience, or unverified achievements.
- **Verification Principle:** Distinguish implemented capabilities and measured results from planned improvements, experimental features, and aspirational objectives.

## Product Principles

1. **Multidisciplinary Engineering Craft:** Treat frontend interaction design, backend development, software architecture, databases, and information security as interconnected disciplines. Favor thoughtful integration over artificial specialization boundaries.

2. **Signal Over Noise:** Prioritize verifiable engineering work, functioning projects, clear architectural decisions, maintainable code, and demonstrable impact over marketing language or unnecessary visual complexity.

3. **First-Class Multilingual Parity:** Treat all five supported languages and regional perspectives with equal technical care. Maintain translation completeness, consistent functionality, appropriate typography, and architectural consistency across locales.

4. **Speed & Structural Precision:** Deliver ambitious visual experiences, including cosmic simulations and rich themes, without sacrificing loading performance, responsive behavior, minimal JavaScript payloads, or accessibility-first implementation.

5. **Purposeful Interaction Design:** Every animation, transition, and interactive element should provide meaningful feedback, improve usability, or communicate information. Avoid purely decorative interactions that distract from professional content.

6. **Evidence-Driven Professional Identity:** Let technical work demonstrate engineering capabilities. Avoid inflated titles, unverifiable claims, fictitious achievements, and unsupported statements of expertise.

7. **Progressive Enhancement:** Ensure essential content and navigation remain accessible without unnecessary client-side JavaScript. Add interactive enhancements only when they provide clear user value.

## Accessibility & Inclusion

- **Accessibility Standard:** Target WCAG 2.2 Level AA across all supported themes. Do not claim verified compliance without adequate testing.
- **Color Contrast:** Ensure readable text and sufficiently distinguishable interactive elements across all four OKLCH themes, following applicable WCAG contrast requirements.
- **Keyboard Accessibility:** Support complete keyboard navigation, logical focus order, visible focus indicators, and accessible interactive controls.
- **Reduced Motion:** Respect `prefers-reduced-motion` for cosmic simulations, animations, transitions, and other motion-intensive experiences.
- **Assistive Technologies:** Use semantic HTML, accessible names, appropriate landmarks, and screen-reader-compatible components.
- **Responsive Accessibility:** Maintain readable and operable interfaces across mobile, tablet, and desktop viewports.
- **Multilingual Accessibility:** Ensure correct document language attributes, language-specific typography, readable text expansion, and appropriate semantic markup across all supported locales.
- **Validation:** Combine automated accessibility checks with manual keyboard testing, screen-reader verification, and theme-specific contrast reviews.
