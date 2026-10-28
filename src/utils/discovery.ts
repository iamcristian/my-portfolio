import { getCollection } from "astro:content";
import {
  getProjectsForLang,
  getExperienceForLang,
  getSkillsForLang,
  type Lang,
} from "../i18n/utils";
import { languages } from "../i18n/ui";
import { isPublished } from "./blog";
export interface SearchEntry {
  title: string;
  text: string;
  url: string;
  lang: string;
  kind: string;
}
export function plainText(body: string) {
  return body
    .replace(/^\s*(import|export) .*$/gm, "")
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/<[^>]*>/g, " ")
    .replace(/!?\[([^\]]+)\]\([^)]*\)/g, "$1")
    .replace(/[#*_`>|]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}
export async function discoveryEntries(): Promise<SearchEntry[]> {
  const posts = await getCollection("blog", ({ data }) => isPublished(data));
  const entries: SearchEntry[] = posts.map((p) => ({
    title: p.data.title,
    text: `${p.data.description} ${p.data.tags.join(" ")} ${plainText(p.body || "")}`,
    url: `/${p.data.lang}/blog/${p.data.slug}/`,
    lang: p.data.lang,
    kind: "articles",
  }));
  for (const lang of Object.keys(languages) as Lang[]) {
    entries.push(
      ...getProjectsForLang(lang).map((p) => ({
        title: p.title,
        text: `${p.description} ${p.tech.join(" ")}`,
        url: `/${lang}/projects/${p.id}/`,
        lang,
        kind: "projects",
      })),
    );
    entries.push(
      ...getExperienceForLang(lang).map((e) => ({
        title: e.title,
        text: `${e.company} ${e.description} ${e.responsibilities.join(" ")} ${e.tags.join(" ")}`,
        url: `/${lang}/#experience-${e.id}`,
        lang,
        kind: "experience",
      })),
    );
    entries.push(
      ...getSkillsForLang(lang).flatMap((c) =>
        c.items.map((title) => ({
          title,
          text: `${c.name} ${c.description || ""}`,
          url: `/${lang}/search/?q=${encodeURIComponent(title)}&evidence=1`,
          lang,
          kind: "skills",
        })),
      ),
    );
  }
  return entries;
}
