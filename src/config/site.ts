// ── Site-wide constants ──
// Single source of truth for personal data, social links, and meta info.
// Eliminates hardcoded values scattered across Hero, Contact, Footer, etc.

export const SITE = {
  name: "Cristian Arando",
  title: "Cristian Arando — Full Stack Developer",
  description:
    "Strategy-driven developer passionate about solving complex problems with technology. Portfolio showcasing full-stack projects, blog articles, and professional experience.",
  email: "crisarandosyse@gmail.com",
  social: {
    github: "https://github.com/iamcristian",
    linkedin: "https://linkedin.com/in/cristianarando",
  },
  cv: {
    en: "/cv/cv_en.pdf",
    es: "/cv/cv_es.pdf",
  } as Record<string, string>,
} as const;
