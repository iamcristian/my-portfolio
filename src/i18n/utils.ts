import { ui, defaultLang } from "./ui";

// Localized Projects data imports
import { projects as enProjects } from "./locales/en/projects";
import { projects as esProjects } from "./locales/es/projects";
import { projects as deProjects } from "./locales/de/projects";
import { projects as ruProjects } from "./locales/ru/projects";
import { projects as jaProjects } from "./locales/ja/projects";

// Localized Certifications data imports
import { certifications as enCerts } from "./locales/en/certifications";
import { certifications as esCerts } from "./locales/es/certifications";
import { certifications as deCerts } from "./locales/de/certifications";
import { certifications as ruCerts } from "./locales/ru/certifications";
import { certifications as jaCerts } from "./locales/ja/certifications";

// Localized Academic Education data imports
import { education as enEdu } from "./locales/en/education";
import { education as esEdu } from "./locales/es/education";
import { education as deEdu } from "./locales/de/education";
import { education as ruEdu } from "./locales/ru/education";
import { education as jaEdu } from "./locales/ja/education";

// Localized Languages list data imports
import { languages as enLang } from "./locales/en/languages";
import { languages as esLang } from "./locales/es/languages";
import { languages as deLang } from "./locales/de/languages";
import { languages as ruLang } from "./locales/ru/languages";
import { languages as jaLang } from "./locales/ja/languages";

export type Lang = keyof typeof ui;

export function useTranslations(lang: Lang) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]) {
    // Falls back to the default language string if the key does not exist in the requested language
    return ui[lang][key] || ui[defaultLang][key];
  };
}

const projectsMap = {
  en: enProjects,
  es: esProjects,
  de: deProjects,
  ru: ruProjects,
  ja: jaProjects,
};

export function getProjectsForLang(lang: Lang) {
  return projectsMap[lang] || projectsMap.en;
}

const certsMap = {
  en: enCerts,
  es: esCerts,
  de: deCerts,
  ru: ruCerts,
  ja: jaCerts,
};

export function getCertificationsForLang(lang: Lang) {
  return certsMap[lang] || certsMap.en;
}

const eduMap = {
  en: enEdu,
  es: esEdu,
  de: deEdu,
  ru: ruEdu,
  ja: jaEdu,
};

export function getEducationForLang(lang: Lang) {
  return eduMap[lang] || eduMap.en;
}

const languagesMap = {
  en: enLang,
  es: esLang,
  de: deLang,
  ru: ruLang,
  ja: jaLang,
};

export function getLanguagesForLang(lang: Lang) {
  return languagesMap[lang] || languagesMap.en;
}
