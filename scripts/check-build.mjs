import { readdir, readFile, access } from "node:fs/promises";
import path from "node:path";
import assert from "node:assert/strict";
import { JSDOM } from "jsdom";

const root = path.resolve("dist");
const origin = "https://cristianarando.dev";
async function files(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  return (
    await Promise.all(
      entries.map((entry) =>
        entry.isDirectory()
          ? files(path.join(directory, entry.name))
          : path.join(directory, entry.name),
      ),
    )
  ).flat();
}
const allFiles = await files(root);
const pages = new Map();
for (const file of allFiles.filter((file) => file.endsWith(".html"))) {
  const relative = path.relative(root, file).replaceAll("\\", "/");
  const route = "/" + relative.replace(/index\.html$/, "");
  const document = new JSDOM(await readFile(file, "utf8"), {
    url: origin + route,
  }).window.document;
  pages.set(route, document);
  for (const script of document.querySelectorAll("script:not([src])")) {
    assert.equal(
      script.type,
      "application/ld+json",
      `${route}: executable inline script violates CSP`,
    );
  }
  for (const element of document.querySelectorAll("*")) {
    assert.ok(
      !element.getAttributeNames().some((name) => name.startsWith("on")),
      `${route}: inline event handler violates CSP`,
    );
  }
}
for (const [route, document] of pages) {
  if (route === "/") continue; // Intentional static-host redirect fallback.
  assert.equal(document.querySelectorAll("h1").length, 1, `${route}: one h1`);
  assert.ok(
    document.querySelector("main#main-content"),
    `${route}: skip-link target`,
  );
  assert.ok(
    document.querySelector('meta[name="description"]')?.content,
    `${route}: description`,
  );
  assert.equal(
    document.querySelectorAll('link[rel="canonical"]').length,
    route === "/404.html" ? 0 : 1,
    `${route}: canonical`,
  );
  if (route !== "/404.html")
    assert.equal(
      document.querySelector('link[rel="canonical"]').href,
      origin + route,
      `${route}: self canonical`,
    );
  const ids = [...document.querySelectorAll("[id]")].map(
    (element) => element.id,
  );
  assert.equal(new Set(ids).size, ids.length, `${route}: duplicate IDs`);
  for (const script of document.querySelectorAll(
    'script[type="application/ld+json"]',
  ))
    JSON.parse(script.textContent);
  for (const image of document.querySelectorAll("img")) {
    assert.ok(image.hasAttribute("alt"), `${route}: image alt`);
    assert.ok(image.width && image.height, `${route}: image dimensions`);
  }
  if (route === "/404.html") {
    assert.match(
      document.querySelector('meta[name="robots"]').content,
      /noindex/,
    );
    assert.equal(document.querySelectorAll("[hreflang]").length, 0);
  } else {
    assert.equal(document.documentElement.lang, route.split("/")[1]);
    assert.ok(document.querySelector('meta[property="og:image"]')?.content);
    const alternates = [...document.querySelectorAll("link[hreflang]")];
    for (const alternate of alternates) {
      const target = pages.get(new URL(alternate.href).pathname);
      assert.ok(target, `${route}: nonexistent alternate ${alternate.href}`);
      if (alternate.hreflang !== "x-default")
        assert.equal(target.documentElement.lang, alternate.hreflang);
    }
  }
  for (const element of document.querySelectorAll(
    "a[href], img[src], script[src], link[href]",
  )) {
    const value = element.getAttribute("href") || element.getAttribute("src");
    if (!value || value.startsWith("data:")) continue;
    const url = new URL(value, origin + route);
    if (url.origin !== origin) continue;
    const target = pages.get(url.pathname);
    if (target) {
      if (url.hash)
        assert.ok(
          target.getElementById(decodeURIComponent(url.hash.slice(1))),
          `${route}: missing anchor ${value}`,
        );
    } else {
      await access(path.join(root, decodeURIComponent(url.pathname))).catch(
        () => assert.fail(`${route}: missing asset/link ${value}`),
      );
    }
  }
}
let xmlCount = 0;
for (const file of allFiles.filter((file) => file.endsWith(".xml"))) {
  const xml = await readFile(file, "utf8");
  const document = new JSDOM(xml, { contentType: "application/xml" }).window
    .document;
  xmlCount++;
  if (file.endsWith("rss.xml")) {
    assert.equal(
      document.documentElement.localName,
      "rss",
      `${file}: RSS, not an HTML redirect`,
    );
    for (const item of document.querySelectorAll("item"))
      assert.ok(
        pages.has(new URL(item.querySelector("link").textContent).pathname),
      );
    assert.ok(
      !xml.includes("&amp;lt;a "),
      `${file}: raw HTML must render as a link`,
    );
  }
  if (
    document.documentElement.localName === "urlset" &&
    !file.includes("news-sitemap")
  ) {
    for (const loc of document.querySelectorAll("url > loc")) {
      const route = new URL(loc.textContent).pathname;
      assert.ok(
        route !== "/" && route !== "/404.html",
        "sitemap excludes redirect/error pages",
      );
      assert.ok(pages.has(route), `sitemap route exists: ${route}`);
    }
  }
}
console.log(
  `Verified ${pages.size} HTML pages and ${xmlCount} XML files: headings, skip links, metadata, JSON-LD, alternates, internal links, image dimensions and feeds.`,
);
