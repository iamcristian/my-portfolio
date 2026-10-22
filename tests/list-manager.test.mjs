import { test } from "node:test";
import assert from "node:assert/strict";
import { JSDOM } from "jsdom";
import { initListManager } from "../src/scripts/list-manager.ts";

test("filters, views, pagination, DOM order and cleanup work together", async () => {
  const dom = new JSDOM(
    `<!doctype html><html lang="en"><body>
    <input id="search"><select id="sort"><option value="date-desc">Newest</option><option value="date-asc">Oldest</option></select>
    <button class="filter" data-tag="all">All</button><button class="filter" data-tag="penetration testing">Penetration testing</button>
    <button id="grid">Grid</button><button id="list">List</button>
    <div id="cards">
      <article class="card" data-name="oldest" data-date="2025-01-01" data-tags='["penetration testing"]'></article>
      <article class="card" data-name="middle" data-date="2025-02-01" data-tags='["web"]'></article>
      <article class="card" data-name="newest" data-date="2025-03-01" data-tags='["penetration testing"]'></article>
    </div><div id="empty" class="hidden">No results</div><nav id="pages"></nav><p id="list-status"></p>
  </body></html>`,
    { url: "https://example.test/en/blog/?q=oldest" },
  );
  const { window } = dom;
  const original = new Map();
  for (const key of [
    "window",
    "document",
    "location",
    "history",
    "matchMedia",
  ]) {
    original.set(key, Object.getOwnPropertyDescriptor(globalThis, key));
    Object.defineProperty(globalThis, key, {
      configurable: true,
      value: key === "matchMedia" ? () => ({ matches: true }) : window[key],
    });
  }
  window.HTMLElement.prototype.scrollIntoView = () => {};
  const controller = new window.AbortController();
  const config = {
    containerId: "cards",
    cardSelector: ".card",
    searchInputId: "search",
    sortSelectId: "sort",
    filterBtnSelector: ".filter",
    filterAttr: "data-tags",
    gridBtnId: "grid",
    listBtnId: "list",
    noResultsId: "empty",
    paginationId: "pages",
    itemsPerPage: 1,
    figureSelector: "figure",
    bodySelector: ".body",
    footerSelector: "footer",
  };
  for (const view of ["grid", "list"])
    for (const part of ["Container", "Card", "Figure", "Body", "Footer"])
      config[`${view}${part}Class`] = part === "Card" ? `card ${view}` : view;
  const $ = (selector) => window.document.querySelector(selector);
  const visible = () =>
    [...window.document.querySelectorAll(".card")]
      .filter((card) => !card.hidden)
      .map((card) => card.dataset.name);
  try {
    initListManager(config, controller.signal);
    assert.equal($("#search").value, "oldest", "URL query initializes search");
    assert.deepEqual(visible(), ["oldest"]);
    $("#list").click();
    assert.deepEqual(
      visible(),
      ["oldest"],
      "changing view preserves visibility",
    );
    $("#search").value = "";
    $("#search").dispatchEvent(new window.Event("input"));
    await new Promise((resolve) => setTimeout(resolve, 250));
    assert.equal(window.location.search, "");
    assert.deepEqual(visible(), ["newest"]);
    assert.ok($("#pages button").disabled);
    $("[data-tag='penetration testing']").click();
    assert.deepEqual(visible(), ["newest"]);
    assert.equal(
      $("[data-tag='penetration testing']").getAttribute("aria-pressed"),
      "true",
    );
    $("#pages [aria-label='Page 2']").focus();
    $("#pages [aria-label='Page 2']").click();
    assert.deepEqual(visible(), ["oldest"]);
    assert.equal(
      window.document.activeElement.getAttribute("aria-current"),
      "page",
    );
    $("#grid").click();
    assert.deepEqual(
      visible(),
      ["oldest"],
      "page selection survives layout changes",
    );
    $("#sort").value = "date-asc";
    $("#sort").dispatchEvent(new window.Event("change"));
    assert.deepEqual(visible(), ["oldest"]);
    assert.equal(
      $("#cards").querySelector(".card:not([hidden])").dataset.name,
      "oldest",
    );
    $("#search").value = "missing";
    $("#search").dispatchEvent(new window.Event("input"));
    controller.abort();
    await new Promise((resolve) => setTimeout(resolve, 250));
    assert.deepEqual(
      visible(),
      ["oldest"],
      "navigation cancels pending search",
    );
  } finally {
    controller.abort();
    dom.window.close();
    for (const [key, descriptor] of original) {
      if (descriptor) Object.defineProperty(globalThis, key, descriptor);
      else delete globalThis[key];
    }
  }
});
