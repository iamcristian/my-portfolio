import { test } from "node:test";
import assert from "node:assert/strict";
import { JSDOM } from "jsdom";
import { readFileSync } from "node:fs";
import ts from "typescript";
import {
  defaults,
  preferences,
  readLocal,
  writeLocal,
  readingEntries,
  updateEntry,
} from "../src/utils/reader.ts";
test("reader preferences constrain corrupted or obsolete stored values", () => {
  assert.deepEqual(preferences(null), defaults);
  assert.equal(preferences({ size: 100 }).size, 28);
  assert.equal(preferences({ size: -8 }).size, 14);
  assert.equal(preferences({ size: 14 }).size, 14);
  assert.equal(preferences({ size: NaN }).size, 14);
  assert.equal(defaults.width, "wide");
  assert.equal(preferences({ width: "standard" }).width, "standard");
  assert.deepEqual(
    preferences({ spacing: "bad", font: "bad", width: "bad" }),
    defaults,
  );
});
test("storage validates article destinations and survives disabled storage", () => {
  const dom = new JSDOM("", { url: "https://portfolio.test" });
  Object.defineProperty(globalThis, "localStorage", {
    value: dom.window.localStorage,
    configurable: true,
  });
  localStorage.setItem(
    "portfolio-reading-v1",
    JSON.stringify([{ url: "javascript:alert(1)", title: "bad" }, null]),
  );
  assert.deepEqual(readingEntries(), []);
  localStorage.setItem("portfolio-reading-v1", "broken JSON");
  assert.deepEqual(readingEntries(), []);
  Object.defineProperty(globalThis, "localStorage", {
    get() {
      throw Error("disabled");
    },
    configurable: true,
  });
  assert.equal(writeLocal("x", {}), false);
  assert.deepEqual(readLocal("x", []), []);
  delete globalThis.localStorage;
  dom.window.close();
});
test("reader restores preferences, saves, resumes within a resized section and cleans up", async () => {
  const dom = new JSDOM(
    `<body>
    <section id="reader-tools" data-title="Article" data-lang="en" data-save="Save" data-saved="Saved" data-failed="Failed" data-copied="Copied" data-focus="Focus" data-exit="Exit"></section>
    <article class="reader-article"><h2 id="one">First</h2><p>Content</p><h2 id="two">Second</h2></article>
    <section id="reader-panel" hidden></section><div id="reader-dock"><button id="reader-toggle"></button><div id="reader-actions" hidden></div></div><button id="reader-close"></button><button id="reader-back"></button><div id="reader-message"></div><button id="reader-save"><span data-save-label></span></button>
    <input id="reader-size"><select id="reader-spacing"><option>standard</option><option>relaxed</option></select>
    <select id="reader-width"><option>standard</option><option>wide</option></select><select id="reader-font"><option>sans</option><option>serif</option></select>
    <output id="reader-size-value"></output><button id="reader-settings"></button><button id="reader-reset"></button>
    <button id="reader-focus"><span data-focus-label></span></button><button id="reader-exit"></button><div id="reader-resume" class="hidden"></div>
    <span id="reader-section"></span><button id="reader-continue"></button><button id="reader-dismiss"></button><button id="reader-share" hidden></button>
    </body>`,
    {
      url: "https://portfolio.test/en/blog/example/",
      runScripts: "outside-only",
      pretendToBeVisual: true,
    },
  );
  const w = dom.window;
  Object.defineProperty(globalThis, "localStorage", {
    value: w.localStorage,
    configurable: true,
  });
  writeLocal("portfolio-reader-v1", {
    size: 24,
    font: "serif",
    spacing: "relaxed",
    width: "wide",
  });
  updateEntry({
    url: "/en/blog/example/",
    title: "Article",
    lang: "en",
    saved: false,
    heading: "one",
    offset: 0.5,
    progress: 0.4,
    updated: 1,
  });
  const rect = (top, bottom) => ({
    top,
    bottom,
    height: bottom - top,
  });
  w.document.querySelector("article").getBoundingClientRect = () =>
    rect(200, 2200);
  w.document.getElementById("one").getBoundingClientRect = () => rect(300, 340);
  w.document.getElementById("two").getBoundingClientRect = () =>
    rect(1100, 1140);
  let scrollTop = 0;
  w.scrollTo = (options) => {
    scrollTop = options.top;
  };
  Object.assign(w, {
    defaults,
    preferences,
    readLocal,
    writeLocal,
    readingEntries,
    updateEntry,
    scrollBehavior: () => "instant",
    onPageLoad: (setup) => {
      w.cleanup = setup(new w.AbortController().signal);
    },
  });
  const source = ts
    .transpileModule(readFileSync("src/scripts/reader.ts", "utf8"), {
      compilerOptions: {
        module: ts.ModuleKind.ESNext,
        target: ts.ScriptTarget.ES2022,
      },
    })
    .outputText.replace(/^import[\s\S]*?from ["'][^"']+["'];\s*/gm, "");
  w.eval(source);
  assert.equal(
    w.document.querySelector("article").style.getPropertyValue("--reader-size"),
    "1.5rem",
  );
  assert.equal(
    w.document.getElementById("reader-resume").classList.contains("hidden"),
    false,
  );
  w.document.getElementById("reader-continue").click();
  assert.equal(
    scrollTop,
    600,
    "resume uses section span, not heading element height",
  );
  w.document.getElementById("reader-toggle").click();
  assert.equal(w.document.getElementById("reader-actions").hidden, false);
  w.document.getElementById("reader-settings").click();
  assert.equal(w.document.getElementById("reader-panel").hidden, false);
  assert.equal(
    w.document.body.classList.contains("reader-settings-open"),
    true,
  );
  assert.equal(
    w.document.querySelector("dialog"),
    null,
    "settings never block the page with a modal",
  );
  w.document.getElementById("reader-back").click();
  assert.equal(w.document.getElementById("reader-panel").hidden, true);
  assert.equal(
    w.document.getElementById("reader-actions").hidden,
    false,
    "Back returns to the expanded reading menu",
  );
  assert.equal(w.document.activeElement.id, "reader-settings");
  assert.equal(
    readLocal("portfolio-reader-v1", {}).size,
    24,
    "Back preserves reader settings",
  );
  w.document.getElementById("reader-settings").click();
  w.document.getElementById("reader-close").click();
  assert.equal(
    w.document.body.classList.contains("reader-settings-open"),
    false,
  );
  w.document.getElementById("reader-save").click();
  assert.equal(readingEntries()[0].saved, true);
  w.document.getElementById("reader-focus").click();
  assert.equal(w.document.body.classList.contains("reader-focus"), true);
  w.document.getElementById("reader-focus").click();
  assert.equal(w.document.body.classList.contains("reader-focus"), false);
  let copied = "";
  Object.defineProperty(w.navigator, "clipboard", {
    value: {
      writeText: async (text) => {
        copied = text;
      },
    },
  });
  w.Range.prototype.getBoundingClientRect = () => ({
    top: 200,
    bottom: 220,
    left: 100,
    width: 80,
  });
  const range = w.document.createRange();
  range.selectNodeContents(w.document.querySelector("article p"));
  w.getSelection().removeAllRanges();
  w.getSelection().addRange(range);
  w.document.dispatchEvent(new w.Event("selectionchange"));
  await new Promise((resolve) =>
    w.requestAnimationFrame(() => w.requestAnimationFrame(resolve)),
  );
  assert.equal(
    w.document.getElementById("reader-share").hidden,
    false,
    "selection exposes a nearby sharing action",
  );
  w.document.getElementById("reader-share").click();
  await Promise.resolve();
  assert.match(copied, /#one:~:text=Content$/);
  w.getSelection().removeAllRanges();
  w.document.dispatchEvent(new w.Event("selectionchange"));
  await new Promise((resolve) =>
    w.requestAnimationFrame(() => w.requestAnimationFrame(resolve)),
  );
  assert.equal(
    w.document.getElementById("reader-share").hidden,
    true,
    "sharing disappears without a passage",
  );
  w.document.querySelector("article").getBoundingClientRect = () =>
    rect(-1000, 500);
  w.cleanup();
  assert.equal(
    readingEntries()[0].completed,
    true,
    "reaching the end records completion",
  );
  delete globalThis.localStorage;
  w.close();
});
