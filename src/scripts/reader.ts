import { onPageLoad, scrollBehavior } from "./page-lifecycle";
import {
  defaults,
  preferences,
  readLocal,
  writeLocal,
  readingEntries,
  updateEntry,
  type ReadingEntry,
} from "../utils/reader";

onPageLoad((signal) => {
  const tools = document.getElementById("reader-tools");
  const article = document.querySelector<HTMLElement>("article.reader-article");
  if (!tools || !article) return;
  const panel = document.getElementById("reader-panel")!;
  const dock = document.getElementById("reader-dock")!;
  const toggle = document.getElementById("reader-toggle")!;
  const actions = document.getElementById("reader-actions")!;
  const settings = document.getElementById("reader-settings")!;
  const message = document.getElementById("reader-message")!;
  const save = document.querySelector<HTMLButtonElement>("#reader-save")!;
  let messageTimer: ReturnType<typeof setTimeout> | undefined;
  const announce = (text: string) => {
    message.textContent = text;
    message.hidden = false;
    clearTimeout(messageTimer);
    messageTimer = setTimeout(() => {
      message.hidden = true;
    }, 5000);
  };
  const preservePassage = (change: () => void) => {
    const passages = Array.from(
      article.querySelectorAll<HTMLElement>("p, h2, h3, li"),
    );
    const passage =
      passages.find((el) => el.getBoundingClientRect().bottom > 100) || article;
    const before = passage.getBoundingClientRect().top;
    change();
    if (article.getBoundingClientRect().top < innerHeight)
      window.scrollTo({
        top: window.scrollY + passage.getBoundingClientRect().top - before,
        behavior: "instant",
      });
  };
  const menu = (open: boolean) => {
    actions.hidden = !open;
    toggle.setAttribute("aria-expanded", String(open));
  };
  const showSettings = (open: boolean) => {
    preservePassage(() => {
      panel.hidden = !open;
      document.body.classList.toggle("reader-settings-open", open);
    });
    settings.setAttribute("aria-expanded", String(open));
    if (open) document.getElementById("reader-share")!.hidden = true;
    menu(false);
    if (open) {
      if (article.getBoundingClientRect().top > innerHeight / 2)
        article.scrollIntoView({ block: "start", behavior: "instant" });
      document.getElementById("reader-size")?.focus({ preventScroll: true });
    }
  };
  toggle.addEventListener(
    "click",
    () => {
      if (!panel.hidden) {
        showSettings(false);
      } else menu(Boolean(actions.hidden));
    },
    { signal },
  );
  settings.addEventListener(
    "click",
    () => showSettings(Boolean(panel.hidden)),
    { signal },
  );
  document.getElementById("reader-back")!.addEventListener(
    "click",
    () => {
      showSettings(false);
      menu(true);
      settings.focus({ preventScroll: true });
    },
    { signal },
  );
  document.getElementById("reader-close")!.addEventListener(
    "click",
    () => {
      showSettings(false);
      toggle.focus({ preventScroll: true });
    },
    { signal },
  );
  document.addEventListener(
    "pointerdown",
    (e) => {
      if (!dock.contains(e.target as Node)) menu(false);
    },
    { signal },
  );
  const contents = document.getElementById("reader-contents");
  const toc = document.querySelector<HTMLDialogElement>("#toc_modal");
  if (contents) {
    contents.hidden = !toc;
    contents.addEventListener(
      "click",
      () => {
        menu(false);
        toc?.showModal();
      },
      { signal },
    );
  }
  let p = preferences(readLocal("portfolio-reader-v1", defaults));
  const inputs = Object.fromEntries(
    ["size", "spacing", "width", "font"].map((k) => [
      k,
      document.getElementById(`reader-${k}`) as
        | HTMLInputElement
        | HTMLSelectElement,
    ]),
  );
  const apply = () => {
    article.style.setProperty("--reader-size", `${p.size / 16}rem`);
    article.style.setProperty(
      "--reader-leading",
      p.spacing === "relaxed" ? "2.1" : "1.8",
    );
    article.style.setProperty(
      "--reader-width",
      { narrow: "55ch", standard: "68ch", wide: "85ch" }[p.width]!,
    );
    article.dataset.readerFont = p.font;
    for (const key of Object.keys(inputs))
      inputs[key].value = String(p[key as keyof typeof p]);
    document.getElementById("reader-size-value")!.textContent = `${p.size}px`;
  };
  apply();
  for (const input of Object.values(inputs))
    input.addEventListener(
      "input",
      () => {
        p = preferences({
          size: Number(inputs.size.value),
          spacing: inputs.spacing.value,
          width: inputs.width.value,
          font: inputs.font.value,
        });
        preservePassage(apply);
        writeLocal("portfolio-reader-v1", p);
      },
      { signal },
    );
  document.getElementById("reader-reset")!.addEventListener(
    "click",
    () => {
      p = { ...defaults };
      preservePassage(apply);
      writeLocal("portfolio-reader-v1", p);
    },
    { signal },
  );
  const focusButton = document.getElementById("reader-focus")!;
  const toggleFocus = (enabled: boolean) => {
    preservePassage(() =>
      document.body.classList.toggle("reader-focus", enabled),
    );
    focusButton.setAttribute("aria-pressed", String(enabled));
    const label = enabled ? tools.dataset.exit! : tools.dataset.focus!;
    focusButton.querySelector("[data-focus-label]")!.textContent = label;
    focusButton.title = label;
    menu(false);
    toggle.focus({ preventScroll: true });
  };
  focusButton.addEventListener(
    "click",
    () => toggleFocus(!document.body.classList.contains("reader-focus")),
    { signal },
  );
  document.addEventListener(
    "keydown",
    (e) => {
      if (e.key !== "Escape" || toc?.open) return;
      if (!panel.hidden) {
        showSettings(false);
        toggle.focus({ preventScroll: true });
      } else if (!actions.hidden) {
        menu(false);
        toggle.focus({ preventScroll: true });
      } else if (document.body.classList.contains("reader-focus"))
        toggleFocus(false);
    },
    { signal },
  );
  const old = readingEntries().find((e) => e.url === location.pathname);
  let entry: ReadingEntry = old || {
    url: location.pathname,
    title: tools.dataset.title!,
    lang: tools.dataset.lang!,
    saved: false,
    heading: "",
    offset: 0,
    progress: 0,
    updated: Date.now(),
  };
  const updateSave = () => {
    const label = entry.saved ? tools.dataset.saved! : tools.dataset.save!;
    save.querySelector("[data-save-label]")!.textContent = label;
    save.title = label;
    save.setAttribute("aria-pressed", String(entry.saved));
  };
  updateSave();
  save.addEventListener(
    "click",
    () => {
      entry = { ...entry, saved: !entry.saved, updated: Date.now() };
      if (!updateEntry(entry)) {
        entry.saved = !entry.saved;
        announce(tools.dataset.storageFailed || tools.dataset.failed!);
      }
      updateSave();
    },
    { signal },
  );
  const resume = document.getElementById("reader-resume")!;
  let pendingResume = Boolean(
    old &&
    !old.completed &&
    old.progress > 0.03 &&
    old.progress < 0.98 &&
    !location.hash,
  );
  if (pendingResume) {
    resume.classList.remove("hidden");
    document.getElementById("reader-section")!.textContent =
      document.getElementById(entry.heading)?.textContent || entry.title;
  }
  document.getElementById("reader-continue")!.addEventListener(
    "click",
    () => {
      const target = document.getElementById(entry.heading) || article;
      const headings = Array.from(
        article.querySelectorAll<HTMLElement>("h2[id],h3[id]"),
      );
      const next =
        target === article
          ? headings[0]
          : headings[headings.indexOf(target) + 1];
      const height = Math.max(
        1,
        (next?.getBoundingClientRect().top ??
          article.getBoundingClientRect().bottom) -
          target.getBoundingClientRect().top,
      );
      window.scrollTo({
        top:
          target.getBoundingClientRect().top +
          window.scrollY +
          height * entry.offset -
          100,
        behavior: scrollBehavior(),
      });
      pendingResume = false;
      resume.classList.add("hidden");
    },
    { signal },
  );
  document.getElementById("reader-dismiss")!.addEventListener(
    "click",
    () => {
      pendingResume = false;
      resume.classList.add("hidden");
    },
    { signal },
  );
  let timer: ReturnType<typeof setTimeout> | undefined;
  const persist = () => {
    if (pendingResume || window.scrollY < article.offsetTop - innerHeight)
      return;
    const headings = Array.from(
      article.querySelectorAll<HTMLElement>("h2[id],h3[id]"),
    );
    const target =
      headings.filter((h) => h.getBoundingClientRect().top <= 120).at(-1) ||
      article;
    const next =
      target === article ? headings[0] : headings[headings.indexOf(target) + 1];
    const span = Math.max(
      1,
      next
        ? next.getBoundingClientRect().top - target.getBoundingClientRect().top
        : article.getBoundingClientRect().bottom -
            target.getBoundingClientRect().top,
    );
    entry = {
      ...entry,
      heading: target === article ? "" : target.id,
      offset: Math.max(
        0,
        Math.min(1, (100 - target.getBoundingClientRect().top) / span),
      ),
      progress: Math.max(
        0,
        Math.min(
          1,
          (innerHeight - article.getBoundingClientRect().top) /
            article.getBoundingClientRect().height,
        ),
      ),
      completed:
        entry.completed ||
        article.getBoundingClientRect().bottom <= innerHeight + 8,
      saved:
        readingEntries().find((e) => e.url === entry.url)?.saved ?? entry.saved,
      updated: Date.now(),
    };
    updateEntry(entry);
  };
  window.addEventListener(
    "scroll",
    () => {
      clearTimeout(timer);
      timer = setTimeout(persist, 250);
    },
    { signal, passive: true },
  );
  window.addEventListener("pagehide", persist, { signal });
  document.addEventListener(
    "visibilitychange",
    () => {
      if (document.hidden) persist();
    },
    { signal },
  );
  const share = document.getElementById("reader-share")!;
  let passageUrl = "";
  let selectionFrame = 0;
  const updateSelection = () => {
    if (!panel.hidden) {
      share.hidden = true;
      return;
    }
    const selection = window.getSelection();
    const text = selection?.toString().trim();
    const anchor = selection?.anchorNode;
    if (
      !text ||
      !anchor ||
      !selection?.focusNode ||
      !article.contains(anchor) ||
      !article.contains(selection.focusNode) ||
      !selection.rangeCount
    ) {
      share.hidden = true;
      passageUrl = "";
      return;
    }
    const element =
      anchor.nodeType === Node.ELEMENT_NODE
        ? (anchor as Element)
        : anchor.parentElement;
    if (element?.closest(".not-prose, pre, button, input, select")) {
      share.hidden = true;
      return;
    }
    const range = selection.getRangeAt(0);
    const rect = range.getBoundingClientRect();
    if (rect.bottom < 80 || rect.top > innerHeight - 60) {
      share.hidden = true;
      return;
    }
    const heading =
      element?.closest("h2[id],h3[id]") ||
      Array.from(article.querySelectorAll("h2[id],h3[id]"))
        .filter((h) =>
          Boolean(
            h.compareDocumentPosition(element!) &
            Node.DOCUMENT_POSITION_FOLLOWING,
          ),
        )
        .at(-1);
    const url = new URL(location.href);
    url.hash =
      (heading?.id || "") + ":~:text=" + encodeURIComponent(text.slice(0, 500));
    passageUrl = url.href;
    share.hidden = false;
    const width = share.getBoundingClientRect().width;
    share.style.left =
      Math.max(
        12,
        Math.min(
          innerWidth - width - 12,
          rect.left + rect.width / 2 - width / 2,
        ),
      ) + "px";
    share.style.top =
      Math.max(
        12,
        Math.min(
          innerHeight - 60,
          rect.top > 130 ? rect.top - 46 : rect.bottom + 8,
        ),
      ) + "px";
  };
  const scheduleSelection = () => {
    cancelAnimationFrame(selectionFrame);
    selectionFrame = requestAnimationFrame(updateSelection);
  };
  document.addEventListener("selectionchange", scheduleSelection, { signal });
  document.addEventListener("pointerup", scheduleSelection, { signal });
  window.addEventListener("scroll", scheduleSelection, {
    signal,
    passive: true,
  });
  window.addEventListener("resize", scheduleSelection, { signal });
  share.addEventListener("pointerdown", (e) => e.preventDefault(), { signal });
  share.addEventListener(
    "click",
    async () => {
      if (!passageUrl) return;
      try {
        await navigator.clipboard.writeText(passageUrl);
        announce(tools.dataset.copied!);
      } catch {
        announce(tools.dataset.failed! + " " + passageUrl);
      }
    },
    { signal },
  );
  return () => {
    clearTimeout(timer);
    clearTimeout(messageTimer);
    cancelAnimationFrame(selectionFrame);
    persist();
    document.body.classList.remove("reader-focus", "reader-settings-open");
  };
});
