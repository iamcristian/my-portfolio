import type { Lang } from "./utils";
import { features as en } from "./locales/en/features";
import { features as es } from "./locales/es/features";
import { features as de } from "./locales/de/features";
import { features as ru } from "./locales/ru/features";
import { features as ja } from "./locales/ja/features";

export type FeatureCopy = typeof en;

const localeMap: Record<Lang, FeatureCopy> = {
  en,
  es,
  de,
  ru,
  ja,
};

export function featureCopy(lang: Lang): FeatureCopy {
  return localeMap[lang] || en;
}
