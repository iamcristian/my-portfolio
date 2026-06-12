import { SITE } from "../config/site";
import { useTranslations, type Lang } from "../i18n/utils";
import { locales, OG_LOCALES } from "../i18n/ui";
import meImage from "../assets/images/me.webp";

interface SEOProps {
  title?: string;
  description?: string;
  image?: string | ImageMetadata;
  imageAlt?: string;
  type?: "website" | "article";
  publishDate?: Date;
  updatedDate?: Date;
  tags?: string[];
}

export function resolveSEOData(
  props: SEOProps,
  url: URL,
  lang: Lang,
  slug?: string,
) {
  const t = useTranslations(lang);
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
  let title = props.title;
  if (title) {
    if (props.type === "article") {
      title = `${title} | Blog | ${t("home.name") || SITE.name}`;
    } else {
      title = `${title} | ${t("home.name") || SITE.name}`;
    }
  } else {
    if (isHome) {
      title = `${t("home.name") || SITE.name} — ${t("home.subtitle")}`;
    } else if (isProjects) {
      title = `${t("projects.title")} | ${t("home.name") || SITE.name}`;
    } else if (isBlogIndex) {
      title = `${t("blog.title")} | ${t("home.name") || SITE.name}`;
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

  // Resolve default fallback language URL (x-default) pointing to English ('en')
  const defaultSegments = pathname.split("/");
  if (
    defaultSegments.length > 1 &&
    locales.includes(defaultSegments[1] as any)
  ) {
    defaultSegments[1] = "en";
  }
  const defaultUrl = new URL(defaultSegments.join("/"), cleanSiteUrl).href;

  // Resolve OpenGraph & Twitter Image
  const imageSource = props.image || meImage;
  const imageUrl =
    typeof imageSource === "string"
      ? imageSource.startsWith("http")
        ? imageSource
        : `${cleanSiteUrl}${imageSource}`
      : new URL(imageSource.src, cleanSiteUrl).href;
  const fullImageAlt = props.imageAlt || title || t("home.name") || SITE.name;

  const imageWidth =
    typeof imageSource === "object" ? imageSource.width.toString() : "1200";
  const imageHeight =
    typeof imageSource === "object" ? imageSource.height.toString() : "630";

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
    defaultUrl,
    imageUrl,
    fullImageAlt,
    imageWidth,
    imageHeight,
    pathname,
  };
}

export function getAlternateUrls(
  pathname: string,
  activeLocales: string[],
  cleanSiteUrl: string,
) {
  return activeLocales.map((locale) => {
    const segments = pathname.split("/");
    if (segments.length > 1 && locales.includes(segments[1] as any)) {
      segments[1] = locale;
    }
    const newPathname = segments.join("/");
    return {
      lang: locale,
      url: new URL(newPathname, cleanSiteUrl).href,
    };
  });
}
