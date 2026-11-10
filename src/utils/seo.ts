import { SITE } from "../config/site.ts";
import { ui, defaultLang, locales, OG_LOCALES } from "../i18n/ui.ts";

export type Lang = keyof typeof ui;

function createTranslator(lang: Lang) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]): string {
    return ui[lang]?.[key] || ui[defaultLang][key];
  };
}

interface SEOProps {
  title?: string;
  description?: string;
  image?: string | ImageMetadata;
  imageAlt?: string;
  type?: "website" | "article";
  publishDate?: Date;
  updatedDate?: Date;
  tags?: string[];
  category?: string;
}

const ARTICLE_SECTIONS: Record<Lang, Record<string, string>> = {
  en: {
    technology: "Technology",
    security: "Cybersecurity",
    philosophy: "Philosophy",
    literature: "Literature",
  },
  es: {
    technology: "Tecnología",
    security: "Ciberseguridad",
    philosophy: "Filosofía",
    literature: "Literatura",
  },
  de: {
    technology: "Technologie",
    security: "Cybersicherheit",
    philosophy: "Philosophie",
    literature: "Literatur",
  },
  ru: {
    technology: "Технологии",
    security: "Кибербезопасность",
    philosophy: "Философия",
    literature: "Литература",
  },
  ja: {
    technology: "テクノロジー",
    security: "サイバーセキュリティ",
    philosophy: "哲学",
    literature: "文学",
  },
};

export function resolveArticleSection(
  category?: string,
  tags?: string[],
  lang: Lang = "en",
): string {
  const dict = ARTICLE_SECTIONS[lang] || ARTICLE_SECTIONS.en;
  if (category && dict[category]) return dict[category];
  const lowerTags = (tags || []).map((t) => t.toLowerCase());
  if (
    lowerTags.some((t) =>
      [
        "cybersecurity",
        "ciberseguridad",
        "cybersicherheit",
        "кибербезопасность",
        "サイバーセキュリティ",
        "owasp",
        "penetration testing",
        "security",
      ].includes(t),
    )
  ) {
    return dict.security;
  }
  if (
    lowerTags.some((t) =>
      [
        "literature",
        "literatura",
        "literatur",
        "литература",
        "文学",
        "dostoevsky",
        "classics",
        "books",
        "bookshelf",
      ].includes(t),
    )
  ) {
    return dict.literature;
  }
  if (
    lowerTags.some((t) =>
      [
        "philosophy",
        "filosofía",
        "philosophie",
        "философия",
        "哲学",
        "logic",
        "epistemology",
        "cognition",
      ].includes(t),
    )
  ) {
    return dict.philosophy;
  }
  return dict.technology;
}

export function resolveSEOData(
  props: SEOProps,
  url: URL,
  lang: Lang,
  slug?: string,
) {
  const t = createTranslator(lang);
  const pathname = url.pathname;

  const siteUrl = SITE.url;
  const cleanSiteUrl = siteUrl.replace(/\/$/, "");
  const canonicalUrl = new URL(pathname, cleanSiteUrl).href;

  const isHome =
    pathname === `/${lang}/` || pathname === `/${lang}` || pathname === "/";
  const isProjects = pathname.includes("/projects");
  const isBlogIndex =
    (pathname.endsWith("/blog") || pathname.endsWith("/blog/")) && !slug;

  // Determine localized title
  const authorName = t("home.name") || SITE.name;
  let title = props.title;
  if (title) {
    // Strip trailing redundant author attribution (e.g. " - Cristian Arando") before appending suffix
    const redundantDash = new RegExp(
      `\\s*[-—|]\\s*(?:${SITE.name}|${authorName})$`,
      "i",
    );
    const cleanedTitle = title.replace(redundantDash, "").trim();
    if (props.type === "article" && !isProjects) {
      title =
        cleanedTitle.includes(authorName) || cleanedTitle.includes(SITE.name)
          ? `${cleanedTitle} | ${t("blog.title")}`
          : `${cleanedTitle} | ${t("blog.title")} | ${authorName}`;
    } else if (
      isProjects &&
      !pathname.endsWith("/projects") &&
      !pathname.endsWith("/projects/")
    ) {
      title = `${cleanedTitle} | ${t("projects.title")} | ${authorName}`;
    } else {
      title = `${cleanedTitle} | ${authorName}`;
    }
  } else {
    if (isHome) {
      title = `${authorName} — ${t("home.subtitle")}`;
    } else if (isProjects) {
      title = `${t("projects.title")} | ${authorName}`;
    } else if (isBlogIndex) {
      title = `${t("blog.title")} | ${authorName}`;
    } else {
      title = t("site.title") || SITE.title;
    }
  }

  // Determine localized description
  let description = props.description;
  if (!description) {
    if (isHome) {
      description =
        t("home.tagline") || t("site.description") || SITE.description;
    } else if (isProjects) {
      description =
        t("projects.subtitlePage") || t("site.description") || SITE.description;
    } else if (isBlogIndex) {
      description =
        t("blog.subtitlePage") || t("site.description") || SITE.description;
    } else {
      description = t("site.description") || SITE.description;
    }
  }

  const ogLocale = OG_LOCALES[lang] || "en_US";

  // Resolve dynamic Open Graph Image path matching the current route
  let dynamicOgPath: string | null = null;
  const blogPostMatch = pathname.match(
    /^\/(en|es|de|ja|ru)\/blog\/([a-z0-9-]+)\/?$/,
  );
  const projectPostMatch = pathname.match(
    /^\/(en|es|de|ja|ru)\/projects\/([a-z0-9-]+)\/?$/,
  );
  const hubMatch = pathname.match(
    /^\/(en|es|de|ja|ru)\/(blog|projects|uses|bookshelf|library|series|search)\/?$/,
  );

  if (isHome) {
    dynamicOgPath = `/og/${lang || "en"}/home.png`;
  } else if (blogPostMatch) {
    dynamicOgPath = `/og/${blogPostMatch[1]}/blog/${blogPostMatch[2]}.png`;
  } else if (projectPostMatch) {
    dynamicOgPath = `/og/${projectPostMatch[1]}/projects/${projectPostMatch[2]}.png`;
  } else if (hubMatch) {
    dynamicOgPath = `/og/${hubMatch[1]}/${hubMatch[2]}.png`;
  }

  // Resolve OpenGraph & Twitter Image URL and Dimensions
  let imageUrl: string;
  let imageWidth = "1200";
  let imageHeight = "630";

  if (dynamicOgPath) {
    imageUrl = `${cleanSiteUrl}${dynamicOgPath}`;
  } else if (props.image) {
    const imageSource = props.image;
    imageUrl =
      typeof imageSource === "string"
        ? imageSource.startsWith("http")
          ? imageSource
          : `${cleanSiteUrl}${imageSource}`
        : new URL(imageSource.src, cleanSiteUrl).href;
    imageWidth =
      typeof imageSource === "object" ? imageSource.width.toString() : "1200";
    imageHeight =
      typeof imageSource === "object" ? imageSource.height.toString() : "630";
  } else {
    imageUrl = `${cleanSiteUrl}/og/home.png`;
  }
  const fullImageAlt = props.imageAlt || title || t("home.name") || SITE.name;
  const articleSection = resolveArticleSection(
    props.category,
    props.tags,
    lang,
  );

  return {
    lang,
    t,
    title,
    description,
    canonicalUrl,
    cleanSiteUrl,
    isHome,
    isProjects,
    isBlogIndex,
    ogLocale,
    imageUrl,
    fullImageAlt,
    imageWidth,
    imageHeight,
    pathname,
    articleSection,
  };
}

export function getAlternateUrls(
  pathname: string,
  activeLocales: string[],
  cleanSiteUrl: string,
) {
  return activeLocales.map((locale) => {
    const segments = pathname.split("/");
    if (segments.length > 1 && locales.includes(segments[1] as Lang)) {
      segments[1] = locale;
    }
    const newPathname = segments.join("/");
    return {
      lang: locale,
      url: new URL(newPathname, cleanSiteUrl).href,
    };
  });
}
