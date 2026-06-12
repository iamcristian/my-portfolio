// ── i18n utility functions ──
// Provides type-safe translation helpers and localized data accessors.

import { ui, defaultLang } from "./ui";
import type {
  Project,
  CertificationCategory,
  AcademicItem,
  LanguageItem,
  SkillCategory,
  ExperienceItem,
  UsesCategory,
} from "@types";

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

// ── Dynamic localized data loaders using import.meta.glob ──

const localeModules = import.meta.glob("./locales/**/*.ts", {
  eager: true,
}) as Record<string, any>;

function getLocaleData<T>(lang: Lang, filename: string, key: string): T {
  const path = `./locales/${lang}/${filename}.ts`;
  const defaultPath = `./locales/${defaultLang}/${filename}.ts`;
  const mod = localeModules[path] || localeModules[defaultPath];
  return mod[key] as T;
}

// ── Public data accessors ──

export const getProjectsForLang = (lang: Lang): Project[] =>
  getLocaleData<Project[]>(lang, "projects", "projects");

export const getCertificationsForLang = (lang: Lang): CertificationCategory[] =>
  getLocaleData<CertificationCategory[]>(
    lang,
    "certifications",
    "certifications",
  );

export const getEducationForLang = (lang: Lang): AcademicItem[] =>
  getLocaleData<AcademicItem[]>(lang, "education", "education");

export const getLanguagesForLang = (lang: Lang): LanguageItem[] =>
  getLocaleData<LanguageItem[]>(lang, "languages", "languages");

export const getSkillsForLang = (lang: Lang): SkillCategory[] =>
  getLocaleData<SkillCategory[]>(lang, "skills", "skills");

export const getExperienceForLang = (lang: Lang): ExperienceItem[] =>
  getLocaleData<ExperienceItem[]>(lang, "experience", "experience");

export const getUsesForLang = (lang: Lang): UsesCategory[] =>
  getLocaleData<UsesCategory[]>(lang, "uses", "uses");
