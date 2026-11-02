import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import {
  renderOGPng,
  type OGCardData,
  type Lang,
} from "../../utils/og-template";
import { languages } from "../../i18n/ui";
import { useTranslations, getProjectsForLang } from "../../i18n/utils";
import { featureCopy } from "../../i18n/features";
import { isPublished, getReadTime } from "../../utils/blog";

export async function getStaticPaths() {
  const paths: Array<{
    params: { route: string };
    props: { cardData: OGCardData };
  }> = [];
  const langList = Object.keys(languages) as Lang[];

  // 1. Root / Default home fallback (/og/home.png)
  const defaultT = useTranslations("en");
  paths.push({
    params: { route: "home" },
    props: {
      cardData: {
        type: "home",
        lang: "en",
        title: "Cristian Arando — Software & Systems Engineer",
        subtitle:
          defaultT("home.tagline") ||
          "Designing software systems through structure, modularity, and careful decomposition of complexity",
        category: "SOFTWARE & SYSTEMS",
        tags: ["Systems Architecture", "Security", "Philosophy", "Modularity"],
      },
    },
  });

  // 2. Localized Pages for each language
  for (const lang of langList) {
    const t = useTranslations(lang);
    const fc = featureCopy(lang);

    const tagsByLang: Record<Lang, string[]> = {
      en: ["Systems Architecture", "Security", "Philosophy", "Modularity"],
      es: ["Arquitectura de Sistemas", "Seguridad", "Filosofía", "Modularidad"],
      de: ["Systemarchitektur", "Sicherheit", "Philosophie", "Modularität"],
      ja: ["システムアーキテクチャ", "セキュリティ", "哲学", "モジュール性"],
      ru: ["Архитектура систем", "Безопасность", "Философия", "Модульность"],
    };
    const categoryByLang: Record<Lang, string> = {
      en: "SOFTWARE & SYSTEMS",
      es: "SOFTWARE Y SISTEMAS",
      de: "SOFTWARE & SYSTEME",
      ja: "ソフトウェア＆システム",
      ru: "ПРОГРАММНЫЕ СИСТЕМЫ",
    };

    // Home (/og/[lang]/home.png)
    paths.push({
      params: { route: `${lang}/home` },
      props: {
        cardData: {
          type: "home",
          lang,
          title: t("home.name") || "Cristian Arando",
          subtitle: t("home.tagline") || "Software & Systems Engineer",
          category: categoryByLang[lang] || "SOFTWARE & SYSTEMS",
          tags: tagsByLang[lang],
        },
      },
    });

    // Blog Index (/og/[lang]/blog.png)
    const blogCatByLang: Record<Lang, string> = {
      en: "BLOG ARCHIVE",
      es: "ARCHIVO DE BLOG",
      de: "BLOG ARCHIV",
      ja: "ブログアーカイブ",
      ru: "АРХИВ БЛОГА",
    };
    paths.push({
      params: { route: `${lang}/blog` },
      props: {
        cardData: {
          type: "hub",
          lang,
          title: t("blog.title") || "Blog",
          subtitle:
            t("blog.subtitlePage") ||
            "Reflections on systems, architecture, and philosophy",
          category: blogCatByLang[lang],
          tags: tagsByLang[lang],
        },
      },
    });

    // Projects Index (/og/[lang]/projects.png)
    const projectCatByLang: Record<Lang, string> = {
      en: "FEATURED WORK",
      es: "PROYECTOS DESTACADOS",
      de: "AUSGEWÄHLTE PROJEKTE",
      ja: "主な開発実績",
      ru: "ИЗБРАННЫЕ ПРОЕКТЫ",
    };
    paths.push({
      params: { route: `${lang}/projects` },
      props: {
        cardData: {
          type: "hub",
          lang,
          title: t("projects.title") || "Projects",
          subtitle:
            t("projects.subtitlePage") ||
            "Production systems, simulations, and engineering case studies",
          category: projectCatByLang[lang],
          tags: ["Architecture", "Performance", "Security", "Reliability"],
        },
      },
    });

    // Uses Page (/og/[lang]/uses.png)
    paths.push({
      params: { route: `${lang}/uses` },
      props: {
        cardData: {
          type: "hub",
          lang,
          title: "Hardware, Software & Workstation",
          subtitle:
            t("uses.subtitlePage") || "Engineering environment and daily setup",
          category: "DEV ENVIRONMENT",
          tags: ["Hardware", "Workstation", "Tooling", "Setup"],
        },
      },
    });

    // Bookshelf (/og/[lang]/bookshelf.png)
    paths.push({
      params: { route: `${lang}/bookshelf` },
      props: {
        cardData: {
          type: "hub",
          lang,
          title: fc.bookshelf || "Bookshelf",
          subtitle:
            "Classical literature, philosophy, and software engineering reading archive",
          category: "BOOKSHELF",
          tags: ["Literature", "Philosophy", "Classics", "Dostoevsky"],
        },
      },
    });

    // Library (/og/[lang]/library.png)
    paths.push({
      params: { route: `${lang}/library` },
      props: {
        cardData: {
          type: "hub",
          lang,
          title: fc.library || "Reading List",
          subtitle:
            "Personal reading queue, bookmarks, and offline reading archive",
          category: "READING LIST",
          tags: ["Bookmarks", "Offline Reading", "Queue", "Archive"],
        },
      },
    });

    // Series (/og/[lang]/series.png)
    paths.push({
      params: { route: `${lang}/series` },
      props: {
        cardData: {
          type: "hub",
          lang,
          title: fc.series || "Reading Paths",
          subtitle:
            "Curated learning paths across systems architecture and philosophy",
          category: "READING PATHS",
          tags: ["Learning Paths", "Systems", "Security", "Philosophy"],
        },
      },
    });

    // Search (/og/[lang]/search.png)
    paths.push({
      params: { route: `${lang}/search` },
      props: {
        cardData: {
          type: "hub",
          lang,
          title: fc.search || "Search",
          subtitle:
            "Full-text index search across all articles, essays, and project case studies",
          category: "SEARCH INDEX",
          tags: ["Full-Text", "Index", "Search", "Discovery"],
        },
      },
    });

    // Projects Detail (/og/[lang]/projects/[id].png)
    const localizedProjects = getProjectsForLang(lang);
    for (const project of localizedProjects) {
      paths.push({
        params: { route: `${lang}/projects/${project.id}` },
        props: {
          cardData: {
            type: "project",
            lang,
            title: project.title,
            subtitle: project.description,
            category: "CASE STUDY",
            tags: project.tech.slice(0, 4),
          },
        },
      });
    }
  }

  // Blog Posts Detail (/og/[lang]/blog/[slug].png)
  const allPosts = await getCollection("blog");
  const readUnitByLang: Record<Lang, string> = {
    en: "min read",
    es: "min de lectura",
    de: "Min. Lesezeit",
    ja: "分で読める",
    ru: "мин чтения",
  };

  for (const post of allPosts) {
    if (!isPublished(post.data)) continue;
    const postLang = post.data.lang as Lang;
    const minutes = getReadTime(post.body, postLang);
    const readTimeStr = `${minutes} ${readUnitByLang[postLang] || "min read"}`;
    const dateStr = post.data.date.toISOString().split("T")[0];

    paths.push({
      params: { route: `${post.data.lang}/blog/${post.data.slug}` },
      props: {
        cardData: {
          type: "blog",
          lang: postLang,
          title: post.data.title,
          subtitle: post.data.description,
          category: "ESSAY & ANALYSIS",
          tags: post.data.tags || [],
          date: dateStr,
          readTime: readTimeStr,
        },
      },
    });
  }

  return paths;
}

export const GET: APIRoute = async ({ props }) => {
  const cardData = (props as { cardData: OGCardData }).cardData;
  const buffer = await renderOGPng(cardData);

  return new Response(new Uint8Array(buffer), {
    status: 200,
    headers: {
      "Content-Type": "image/png",
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
};
