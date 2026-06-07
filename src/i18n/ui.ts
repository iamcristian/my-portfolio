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

export const languages = {
  en: { name: "English", code: "EN" },
  es: { name: "Español", code: "ES" },
  de: { name: "Deutsch", code: "DE" },
  ru: { name: "Русский", code: "RU" },
  ja: { name: "日本語", code: "JA" },
};

export const defaultLang = "en";

export const ui = {
  en: {
    ...enHeader,
    ...enHome,
  },
  es: {
    ...esHeader,
    ...esHome,
  },
  de: {
    ...deHeader,
    ...deHome,
  },
  ru: {
    ...ruHeader,
    ...ruHome,
  },
  ja: {
    ...jaHeader,
    ...jaHome,
  },
} as const;
