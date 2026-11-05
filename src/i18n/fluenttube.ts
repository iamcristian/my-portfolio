import { fluenttube as en } from "./locales/en/fluenttube";
import { fluenttube as es } from "./locales/es/fluenttube";
import { fluenttube as de } from "./locales/de/fluenttube";
import { fluenttube as ru } from "./locales/ru/fluenttube";
import { fluenttube as ja } from "./locales/ja/fluenttube";
import type { Lang } from "./utils";
import type { CaseStudyData } from "../data/case-studies";

interface FluentTubeCopy {
  title: string;
  description: string;
  featuresTitle: string;
  screenshotsTitle: string;
  screenshotsNote: string;
  captions: string[];
  features: string[];
  study: CaseStudyData;
  requestFlow: string;
  validateNext: string;
}

export const fluenttubeByLang = { en, es, de, ru, ja } satisfies Record<
  Lang,
  FluentTubeCopy
>;
