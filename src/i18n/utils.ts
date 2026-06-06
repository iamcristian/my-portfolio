import { ui, defaultLang } from "./ui";

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof typeof ui[typeof defaultLang]) {
    // Falls back to the default language string if the key does not exist in the requested language
    return ui[lang][key] || ui[defaultLang][key];
  };
}
