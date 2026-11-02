// ── Site-wide constants ──
// Single source of truth for personal data, social links, and meta info.
// Eliminates hardcoded values scattered across Hero, Contact, Footer, etc.

export const SITE = {
  name: "Cristian Arando",
  title: "Cristian Arando — Software & Systems Engineer",
  description:
    "Software & Systems Engineer designing systems through structure, modularity, and careful decomposition of complexity. Exploring system design, architecture, security, and philosophy.",
  email: "crisarandosyse@gmail.com",
  url: "https://cristianarando.dev",
  social: {
    github: "https://github.com/iamcristian",
    linkedin: "https://linkedin.com/in/cristianarando",
    twitter: "@cristianarando",
  },
  cv: {
    en: "/cv/cv_en.pdf",
    es: "/cv/cv_es.pdf",
    de: "/cv/cv_de.pdf",
    ja: "/cv/cv_ja.pdf",
    ru: "/cv/cv_ru.pdf",
  } as Record<string, string>,
} as const;
