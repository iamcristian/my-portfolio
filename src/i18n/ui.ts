import { header as enHeader } from "./locales/en/header";
import { header as esHeader } from "./locales/es/header";
import { header as deHeader } from "./locales/de/header";
import { header as ruHeader } from "./locales/ru/header";
import { header as jaHeader } from "./locales/ja/header";

export const languages = {
  en: { name: "English", code: "EN" },
  es: { name: "Español", code: "ES" },
  de: { name: "Deutsch", code: "DE" },
  ru: { name: "Русский", code: "RU" },
  ja: { name: "日本語", code: "JA" }
};

export const defaultLang = "en";

export const ui = {
  en: {
    ...enHeader,
  },
  es: {
    ...esHeader,
  },
  de: {
    ...deHeader,
  },
  ru: {
    ...ruHeader,
  },
  ja: {
    ...jaHeader,
  }
} as const;
