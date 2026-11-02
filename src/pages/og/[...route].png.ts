import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import path from "node:path";
import {
  renderOGPng,
  type OGCardData,
  type Lang,
  I18N_OG,
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
        title: "Cristian Arando",
        subtitle:
          defaultT("home.tagline") ||
          "Designing software systems through structure, modularity, and careful decomposition of complexity",
        tags: ["Systems Architecture", "Security", "Philosophy"],
      },
    },
  });

  // 2. Localized Pages for each language
  for (const lang of langList) {
    const t = useTranslations(lang);
    const fc = featureCopy(lang);
    const loc = I18N_OG[lang] || I18N_OG.en;

    const tagsByLang: Record<Lang, string[]> = {
      en: ["Systems Architecture", "Security", "Philosophy"],
      es: ["Arquitectura de Sistemas", "Seguridad", "Filosofía"],
      de: ["Systemarchitektur", "Sicherheit", "Philosophie"],
      ja: ["システム設計", "セキュリティ", "哲学"],
      ru: ["Архитектура систем", "Безопасность", "Философия"],
    };

    // Home (/og/[lang]/home.png)
    paths.push({
      params: { route: `${lang}/home` },
      props: {
        cardData: {
          type: "home",
          lang,
          title: t("home.name") || "Cristian Arando",
          subtitle:
            t("home.tagline") ||
            "Designing software systems through structure, modularity, and careful decomposition of complexity",
          tags: tagsByLang[lang],
        },
      },
    });

    // Blog Index (/og/[lang]/blog.png)
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
          kickerTopic: loc.tags["philosophy"] || "ESSAYS",
          tags: tagsByLang[lang],
          imagePath: path.resolve("src/assets/images/blog/hello-world.webp"),
        },
      },
    });

    // Projects Index (/og/[lang]/projects.png)
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
          kickerTopic: loc.showcaseWork,
          tags: ["Architecture", "Performance", "Security"],
          imagePath: path.resolve(
            "src/assets/images/projects/kerr-spacetime-workstation.webp",
          ),
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
          kickerTopic: loc.setupTooling,
          tags: ["Hardware", "Workstation", "Tooling"],
          imagePath: path.resolve("src/assets/images/website.webp"),
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
          kickerTopic: loc.tags["classics"] || "CLASSICS",
          tags: ["literature", "philosophy", "classics"],
          imagePath: path.resolve("src/assets/images/blog/my-bookshelf.webp"),
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
          kickerTopic: loc.tags["reading list"] || "QUEUE",
          tags: ["reading list", "systems", "philosophy"],
          imagePath: path.resolve(
            "src/assets/images/blog/my-most-notable-reads.webp",
          ),
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
          kickerTopic: loc.curatedRoadmap,
          tags: ["architecture", "systems", "security"],
          imagePath: path.resolve(
            "src/assets/images/blog/seven-levels-of-logical-thinking.webp",
          ),
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
          kickerTopic: loc.discoveryIndex,
          tags: ["Full-Text", "Index", "Search"],
          imagePath: path.resolve("src/assets/images/website.webp"),
        },
      },
    });

    // Projects Detail (/og/[lang]/projects/[id].png)
    const localizedProjects = getProjectsForLang(lang);
    for (const project of localizedProjects) {
      const projImgPath = path.resolve("." + project.image);
      paths.push({
        params: { route: `${lang}/projects/${project.id}` },
        props: {
          cardData: {
            type: "project",
            lang,
            title: project.title,
            subtitle: project.description,
            kickerTopic: project.tech[0]?.toUpperCase() || "SYSTEM",
            tags: project.tech.slice(0, 3),
            imagePath: projImgPath,
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
    const postImgPath = path.resolve(
      `src/assets/images/blog/${post.data.slug}.webp`,
    );

    const primaryTag = post.data.tags?.[0]?.toLowerCase() || "philosophy";
    const loc = I18N_OG[postLang] || I18N_OG.en;
    const localizedTopic = loc.tags[primaryTag] || primaryTag;

    paths.push({
      params: { route: `${post.data.lang}/blog/${post.data.slug}` },
      props: {
        cardData: {
          type: "blog",
          lang: postLang,
          title: post.data.title,
          subtitle: post.data.description,
          kickerTopic: localizedTopic,
          tags: (post.data.tags || []).slice(0, 3),
          date: dateStr,
          readTime: readTimeStr,
          imagePath: postImgPath,
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
