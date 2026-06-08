// ── i18n UI translations registry ──
// Merges all locale modules into a single lookup map.

import { header as enHeader } from "./locales/en/header";
import { header as esHeader } from "./locales/es/header";
import { header as deHeader } from "./locales/de/header";
import { header as ruHeader } from "./locales/ru/header";
import { header as jaHeader } from "./locales/ja/header";

import { home as enHome } from "./locales/en/home";
import { home as esHome } from "./locales/es/home";
import { home as deHome } from "./locales/de/home";
import { home as ruHome } from "./locales/ru/home";
import { home as jaHome } from "./locales/ja/home";

import { footer as enFooter } from "./locales/en/footer";
import { footer as esFooter } from "./locales/es/footer";
import { footer as deFooter } from "./locales/de/footer";
import { footer as ruFooter } from "./locales/ru/footer";
import { footer as jaFooter } from "./locales/ja/footer";

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

export const ui = {
  en: { ...enHeader, ...enHome, ...enFooter },
  es: { ...esHeader, ...esHome, ...esFooter },
  de: { ...deHeader, ...deHome, ...deFooter },
  ru: { ...ruHeader, ...ruHome, ...ruFooter },
  ja: { ...jaHeader, ...jaHome, ...jaFooter },
} as const;
