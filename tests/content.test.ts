import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync, existsSync, readdirSync } from "node:fs";
import path from "node:path";
import {
  matchesDateRange,
  parseFilterValues,
  normalizeText,
  scoreItem,
  filterItems,
  sortItems,
  paginateItems,
  isInvertedDateRange,
  getListViewClasses,
  validateSearchEntries,
} from "../src/utils/list.ts";
import { serializeJsonLd } from "../src/utils/serialize.ts";
import { RESERVED_ROOT_SEGMENTS } from "../src/config/paths.ts";
import {
  resolveSEOData,
  resolveArticleSection,
  getAlternateUrls,
} from "../src/utils/seo.ts";
import { SITE } from "../src/config/site.ts";
import { ui, locales } from "../src/i18n/ui.ts";

test("vercel.json CSP enforces script-src without unsafe-inline and preserves reserved routes", () => {
  const vercel = JSON.parse(readFileSync("vercel.json", "utf8"));
  const cspHeader = vercel.headers[0].headers.find(
    (h: { key: string; value: string }) => h.key === "Content-Security-Policy",
  );
  assert.ok(cspHeader, "CSP header must exist");
  const scriptSrc = cspHeader.value
    .split(";")
    .map((s: string) => s.trim())
    .find((s: string) => s.startsWith("script-src "));
  assert.ok(scriptSrc, "script-src directive must exist");
  assert.ok(
    !scriptSrc.includes("'unsafe-inline'"),
    "script-src must not allow unsafe-inline",
  );

  const catchAllRewrites = vercel.rewrites.filter((r: { source: string }) =>
    r.source.startsWith("/:slug("),
  );
  assert.equal(
    catchAllRewrites.length,
    2,
    "must have two catch-all slug rules",
  );

  const expectedLookahead = `(?!${RESERVED_ROOT_SEGMENTS.map((s) => `${s}$`).join("|")})`;
  for (const rule of catchAllRewrites) {
    assert.ok(
      rule.source.includes(expectedLookahead),
      `Rewrite rule ${rule.source} must match RESERVED_ROOT_SEGMENTS`,
    );
  }

  const pattern = new RegExp(`^${expectedLookahead}[a-z0-9][a-z0-9-_]{2,99}$`);
  for (const reserved of RESERVED_ROOT_SEGMENTS) {
    assert.ok(
      !pattern.test(reserved),
      `Reserved segment "${reserved}" must not be matched by catch-all slug rewrite`,
    );
  }
  assert.ok(pattern.test("my-short-link"), "Valid custom slug should match");
  assert.ok(
    pattern.test("blog-post-link"),
    "Prefix of reserved word should match",
  );
});

test("multiword tags survive serialization without partial matches", () => {
  const tags = parseFilterValues(
    JSON.stringify(["Penetration Testing", "Web"]),
  );
  assert.ok(tags.includes("penetration testing"));
  assert.ok(!tags.includes("testing"));
  assert.deepEqual(parseFilterValues("frontend"), ["frontend"]);
});

test("yesterday excludes today and uses calendar boundaries", () => {
  const now = new Date("2026-10-21T15:30:00Z");
  assert.ok(matchesDateRange("2026-10-20", "yesterday", "", "", now));
  assert.ok(!matchesDateRange("2026-10-21", "yesterday", "", "", now));
  assert.ok(!matchesDateRange("2026-10-19", "yesterday", "", "", now));
  assert.ok(!matchesDateRange("2026-10-22", "week", "", "", now));
});

test("custom dates include the whole end day and reject reversed ranges", () => {
  assert.ok(
    matchesDateRange(
      "2026-10-21T23:59:59.999Z",
      "custom",
      "2026-10-20",
      "2026-10-21",
    ),
  );
  assert.ok(
    !matchesDateRange("2026-10-22", "custom", "2026-10-20", "2026-10-21"),
  );
  assert.ok(
    !matchesDateRange("2026-10-21", "custom", "2026-10-22", "2026-10-20"),
  );
});

test("JSON-LD cannot terminate its script element", () => {
  const value = { title: "</script><script>alert(1)</script>" };
  const encoded = serializeJsonLd(value);
  assert.ok(!encoded.includes("<"));
  assert.deepEqual(JSON.parse(encoded), value);
});

test("isPublished excludes drafts and respects calendar day boundaries", async () => {
  const { isPublished } = await import("../src/utils/blog.ts");
  const now = new Date("2026-10-22T14:00:00Z");

  // Drafts are always excluded
  assert.ok(!isPublished({ draft: true, date: new Date("2026-10-20") }, now));

  // Past dates are published
  assert.ok(isPublished({ draft: false, date: new Date("2026-10-21") }, now));

  // Later today (timezone differences within same day) is published
  assert.ok(
    isPublished({ draft: false, date: new Date("2026-10-22T22:00:00Z") }, now),
  );

  // Future dates (tomorrow or beyond) are withheld
  assert.ok(
    !isPublished({ draft: false, date: new Date("2026-10-24T00:00:00Z") }, now),
  );
});

test("resolveSEOData deduplicates redundant author suffix and resolves localized articleSection", () => {
  assert.equal(SITE.jobTitle, "Software & Systems Engineer");
  for (const locale of locales) {
    assert.equal(
      SITE.cv[locale],
      `/cv/cv_${locale}.pdf`,
      `CV URL must exist for locale ${locale}`,
    );
    assert.ok(
      !ui[locale]["home.subtitle"].includes("Full Stack"),
      `Locale ${locale} subtitle must not use legacy Full Stack title`,
    );
  }

  const seoArticle = resolveSEOData(
    {
      title:
        "My Final Project: Penetration Testing with OWASP - Cristian Arando",
      type: "article",
      tags: ["Cybersecurity", "OWASP"],
    },
    new URL("https://cristianarando.dev/en/blog/my-final-project/"),
    "en",
    "my-final-project",
  );
  assert.equal(
    seoArticle.title,
    "My Final Project: Penetration Testing with OWASP | Blog | Cristian Arando",
  );
  assert.equal(seoArticle.articleSection, "Cybersecurity");
  assert.equal(
    seoArticle.imageUrl,
    "https://cristianarando.dev/og/en/blog/my-final-project.png",
  );

  assert.equal(
    resolveArticleSection(undefined, ["Literature", "Dostoevsky"], "es"),
    "Literatura",
  );
  assert.equal(
    resolveArticleSection(undefined, ["Philosophy", "Logic"], "de"),
    "Philosophie",
  );
  assert.equal(
    resolveArticleSection(undefined, ["Web Development"], "ja"),
    "テクノロジー",
  );

  const alts = getAlternateUrls(
    "/en/blog/strategic-pessimism/",
    ["en", "es"],
    "https://cristianarando.dev",
  );
  assert.deepEqual(alts, [
    {
      lang: "en",
      url: "https://cristianarando.dev/en/blog/strategic-pessimism/",
    },
    {
      lang: "es",
      url: "https://cristianarando.dev/es/blog/strategic-pessimism/",
    },
  ]);
});

test("normalizeText and scoreItem support diacritic-insensitive multi-token search and relevance ranking", () => {
  assert.equal(
    normalizeText("Pruebas de Penetración y Lógica"),
    "pruebas de penetracion y logica",
  );

  const titleMatch = scoreItem(
    {
      name: "Pruebas de Penetración con OWASP",
      description: "Evaluación de seguridad",
      tags: "ciberseguridad owasp",
    },
    "penetracion owasp",
  );
  const descMatch = scoreItem(
    {
      name: "Otro artículo general",
      description: "Menciona pruebas de penetracion y owasp en el texto",
      tags: "general",
    },
    "penetracion owasp",
  );
  const nonMatch = scoreItem(
    {
      name: "Pruebas de Penetración",
      description: "Sin el segundo token",
      tags: "ciberseguridad",
    },
    "penetracion kubernetes",
  );

  assert.ok(
    titleMatch > descMatch,
    "Title/tag match must outrank description match",
  );
  assert.ok(descMatch > 0, "Description match must have positive score");
  assert.equal(nonMatch, 0, "Missing token must score 0");
});

test("validateSearchEntries filters malformed entries and enforces same-origin relative paths", () => {
  assert.throws(() => validateSearchEntries({ not: "an array" }));
  const validated = validateSearchEntries([
    {
      title: "Valid Entry",
      text: "Some body text",
      url: "/en/blog/my-final-project/",
      lang: "en",
      kind: "articles",
    },
    {
      title: "Protocol-relative attack",
      text: "Bad url",
      url: "//evil.example/xss",
      lang: "en",
      kind: "articles",
    },
    {
      title: "Missing fields",
      url: "/en/",
    },
  ]);
  assert.equal(validated.length, 1);
  assert.equal(validated[0].title, "Valid Entry");
});

test("getReadTime calibrates reading speed for Japanese vs alphabetic scripts", async () => {
  const { getReadTime } = await import("../src/utils/blog.ts");
  const jaText = "これは日本語のテスト文章です。".repeat(45);
  const enText = "word ".repeat(300);
  assert.equal(getReadTime(jaText, "ja"), 1);
  assert.equal(getReadTime(enText, "en"), 2);
});

test("README.md and CONTRIBUTING.md local links and documented pnpm scripts exist", () => {
  const pkg = JSON.parse(readFileSync("package.json", "utf8"));
  const scripts = new Set(Object.keys(pkg.scripts || {}));
  for (const docFile of ["README.md", "CONTRIBUTING.md"]) {
    const content = readFileSync(docFile, "utf8");
    const linkRegex = /\[[^\]]+\]\(([^)]+)\)/g;
    for (const match of content.matchAll(linkRegex)) {
      const target = match[1].split("#")[0].trim();
      if (
        !target ||
        target.startsWith("http://") ||
        target.startsWith("https://") ||
        target.startsWith("mailto:")
      ) {
        continue;
      }
      assert.ok(
        existsSync(target),
        `${docFile}: linked path "${target}" must exist on disk`,
      );
    }
    const cmdRegex = /`pnpm ([a-z0-9:-]+)`/g;
    for (const match of content.matchAll(cmdRegex)) {
      const cmd = match[1];
      if (["install", "astro", "run", "audit"].includes(cmd)) continue;
      assert.ok(
        scripts.has(cmd),
        `${docFile}: documented command "pnpm ${cmd}" must exist in package.json scripts`,
      );
    }
  }
});

test("skills keep HTML/CSS out of Programming Languages across all locales and categorize under Frontend", async () => {
  for (const locale of locales) {
    const mod = (await import(`../src/i18n/locales/${locale}/skills.ts`)) as {
      skills: Array<{ id: string; items: string[] }>;
    };
    const languages = mod.skills.find((c) => c.id === "languages");
    const frontend = mod.skills.find((c) => c.id === "frontend");
    assert.ok(languages, `${locale}: languages category exists`);
    assert.ok(frontend, `${locale}: frontend category exists`);
    assert.ok(
      !languages.items.includes("HTML") && !languages.items.includes("CSS"),
      `${locale}: HTML/CSS must not be listed under languages`,
    );
    assert.ok(
      frontend.items.includes("HTML") && frontend.items.includes("CSS"),
      `${locale}: HTML/CSS must be listed under frontend`,
    );
  }
});

test("all blog posts declare valid editorial category frontmatter across all locales", () => {
  const validCategories = new Set([
    "technology",
    "security",
    "philosophy",
    "literature",
  ]);
  for (const locale of locales) {
    const dir = path.join("src/content/blog", locale);
    const files = readdirSync(dir).filter((f) => f.endsWith(".mdx"));
    assert.equal(files.length, 8, `${locale}: expected 8 blog posts`);
    for (const file of files) {
      const content = readFileSync(path.join(dir, file), "utf8");
      const match = content.match(/^category:\s*([a-z]+)/m);
      assert.ok(match, `${locale}/${file}: missing category frontmatter`);
      assert.ok(
        validCategories.has(match[1]),
        `${locale}/${file}: invalid category "${match[1]}"`,
      );
    }
  }
});

test("pure list helpers filter, sort, paginate, and flag inverted custom date ranges", () => {
  assert.ok(isInvertedDateRange("custom", "2026-10-25", "2026-10-20"));
  assert.ok(!isInvertedDateRange("custom", "2026-10-20", "2026-10-25"));
  assert.ok(!isInvertedDateRange("all", "2026-10-25", "2026-10-20"));

  const records = [
    {
      item: "desc-only",
      name: "general essay",
      description: "discusses owasp security controls",
      tech: "",
      tags: "[]",
      filterValues: ["systems"],
      featured: false,
      date: "2025-01-01",
    },
    {
      item: "title-match",
      name: "owasp penetration testing",
      description: "guide",
      tech: "",
      tags: '["owasp"]',
      filterValues: ["owasp"],
      featured: false,
      date: "2024-09-20",
    },
  ];

  const filtered = filterItems(records, {
    query: "owasp",
    filter: "all",
    dateRange: "all",
    startDate: "",
    endDate: "",
    hasFeatured: true,
  });
  const sorted = sortItems(filtered, "relevance", true, "en");
  assert.equal(sorted[0].item, "title-match");

  const page1 = paginateItems(sorted, 1, 1);
  assert.equal(page1.totalPages, 2);
  assert.equal(page1.currentPage, 1);
  assert.equal(page1.pageItems.length, 1);

  const overflow = paginateItems(sorted, 99, 1);
  assert.equal(overflow.currentPage, 2);

  const blogClasses = getListViewClasses("blog");
  assert.ok(blogClasses.gridCardClass.includes("blog-card"));
  const projectClasses = getListViewClasses("project");
  assert.ok(projectClasses.gridCardClass.includes("project-card"));
});
