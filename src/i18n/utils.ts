// ── i18n utility functions ──
// Provides type-safe translation helpers and localized data accessors.

import { ui, defaultLang } from "./ui";

// ── Localized data imports ──

import { projects as enProjects } from "./locales/en/projects";
import { projects as esProjects } from "./locales/es/projects";
import { projects as deProjects } from "./locales/de/projects";
import { projects as ruProjects } from "./locales/ru/projects";
import { projects as jaProjects } from "./locales/ja/projects";

import { certifications as enCerts } from "./locales/en/certifications";
import { certifications as esCerts } from "./locales/es/certifications";
import { certifications as deCerts } from "./locales/de/certifications";
import { certifications as ruCerts } from "./locales/ru/certifications";
import { certifications as jaCerts } from "./locales/ja/certifications";

import { education as enEdu } from "./locales/en/education";
import { education as esEdu } from "./locales/es/education";
import { education as deEdu } from "./locales/de/education";
import { education as ruEdu } from "./locales/ru/education";
import { education as jaEdu } from "./locales/ja/education";

import { languages as enLang } from "./locales/en/languages";
import { languages as esLang } from "./locales/es/languages";
import { languages as deLang } from "./locales/de/languages";
import { languages as ruLang } from "./locales/ru/languages";
import { languages as jaLang } from "./locales/ja/languages";

import { skills as enSkills } from "./locales/en/skills";
import { skills as esSkills } from "./locales/es/skills";
import { skills as deSkills } from "./locales/de/skills";
import { skills as ruSkills } from "./locales/ru/skills";
import { skills as jaSkills } from "./locales/ja/skills";

import { experience as enExp } from "./locales/en/experience";
import { experience as esExp } from "./locales/es/experience";
import { experience as deExp } from "./locales/de/experience";
import { experience as ruExp } from "./locales/ru/experience";
import { experience as jaExp } from "./locales/ja/experience";

// ── Types ──

export type Lang = keyof typeof ui;

// ── Translation helper ──

/**
 * Returns a `t()` function scoped to the given locale.
 * Falls back to defaultLang when a key is missing.
 */
export function useTranslations(lang: Lang) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]): string {
    return ui[lang]?.[key] || ui[defaultLang][key];
  };
}

// ── Language helper ──

/**
 * Extracts and validates the current locale from `Astro.currentLocale`.
 * Returns a properly typed `Lang` — eliminates all `as any` casts.
 */
export function getLang(currentLocale: string | undefined): Lang {
  const lang = currentLocale || defaultLang;
  return lang as Lang;
}

// ── Generic localized data accessor ──

function createLocalizedAccessor<T>(map: Record<string, T>) {
  return (lang: Lang): T => map[lang] || map[defaultLang];
}

// ── Public data accessors ──

export const getProjectsForLang = createLocalizedAccessor({
  en: enProjects,
  es: esProjects,
  de: deProjects,
  ru: ruProjects,
  ja: jaProjects,
});

export const getCertificationsForLang = createLocalizedAccessor({
  en: enCerts,
  es: esCerts,
  de: deCerts,
  ru: ruCerts,
  ja: jaCerts,
});

export const getEducationForLang = createLocalizedAccessor({
  en: enEdu,
  es: esEdu,
  de: deEdu,
  ru: ruEdu,
  ja: jaEdu,
});

export const getLanguagesForLang = createLocalizedAccessor({
  en: enLang,
  es: esLang,
  de: deLang,
  ru: ruLang,
  ja: jaLang,
});

export const getSkillsForLang = createLocalizedAccessor({
  en: enSkills,
  es: esSkills,
  de: deSkills,
  ru: ruSkills,
  ja: jaSkills,
});

export const getExperienceForLang = createLocalizedAccessor({
  en: enExp,
  es: esExp,
  de: deExp,
  ru: ruExp,
  ja: jaExp,
});
