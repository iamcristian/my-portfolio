// ── i18n UI translations registry ──
// Merges all locale modules into a single lookup map.

import { header as enHeader } from "./locales/en/header.ts";
import { header as esHeader } from "./locales/es/header.ts";
import { header as deHeader } from "./locales/de/header.ts";
import { header as ruHeader } from "./locales/ru/header.ts";
import { header as jaHeader } from "./locales/ja/header.ts";

import { home as enHome } from "./locales/en/home.ts";
import { home as esHome } from "./locales/es/home.ts";
import { home as deHome } from "./locales/de/home.ts";
import { home as ruHome } from "./locales/ru/home.ts";
import { home as jaHome } from "./locales/ja/home.ts";

import { footer as enFooter } from "./locales/en/footer.ts";
import { footer as esFooter } from "./locales/es/footer.ts";
import { footer as deFooter } from "./locales/de/footer.ts";
import { footer as ruFooter } from "./locales/ru/footer.ts";
import { footer as jaFooter } from "./locales/ja/footer.ts";

export const languages = {
  en: { name: "English", code: "EN" },
  es: { name: "Español", code: "ES" },
  de: { name: "Deutsch", code: "DE" },
  ru: { name: "Русский", code: "RU" },
  ja: { name: "日本語", code: "JA" },
};

export const defaultLang = "en";

/** All supported locale codes, derived from the languages map. */
export const locales = Object.keys(languages) as (keyof typeof languages)[];

export const SITEMAP_LOCALES = {
  en: "en",
  es: "es",
  de: "de",
  ru: "ru",
  ja: "ja",
} as const;

export const OG_LOCALES = {
  en: "en_US",
  es: "es_ES",
  de: "de_DE",
  ru: "ru_RU",
  ja: "ja_JP",
} as const;

export const ui = {
  en: { ...enHeader, ...enHome, ...enFooter },
  es: { ...esHeader, ...esHome, ...esFooter },
  de: { ...deHeader, ...deHome, ...deFooter },
  ru: { ...ruHeader, ...ruHome, ...ruFooter },
  ja: { ...jaHeader, ...jaHome, ...jaFooter },
} as const;
