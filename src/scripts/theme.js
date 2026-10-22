(function () {
  function applyTheme() {
    let stored;
    try {
      stored = localStorage.getItem("theme");
    } catch {}
    if (!["light", "business", "dracula", "forest"].includes(stored))
      stored = null;
    const theme =
      stored ||
      (window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "business"
        : "light");
    document.documentElement.setAttribute("data-theme", theme);
  }
  applyTheme();
  if (!window.__themeListenerAttached) {
    document.addEventListener("astro:after-swap", applyTheme);
    window.__themeListenerAttached = true;
  }
})();
