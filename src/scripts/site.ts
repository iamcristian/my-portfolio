import { onPageLoad } from "./page-lifecycle";

onPageLoad((signal) => {
  const timers = new Set<ReturnType<typeof setTimeout>>();
  const label = (key: string, fallback: string) =>
    document.body.dataset[key] || fallback;
  const announce = document.getElementById("site-status");
  const themeButtons =
    document.querySelectorAll<HTMLButtonElement>("[data-set-theme]");
  const updateThemeButtons = () =>
    themeButtons.forEach((button) => {
      const active =
        button.dataset.setTheme === document.documentElement.dataset.theme;
      button.setAttribute("aria-pressed", String(active));
      button.querySelector("svg")?.classList.toggle("visible", active);
    });
  updateThemeButtons();
  themeButtons.forEach((button) =>
    button.addEventListener(
      "click",
      () => {
        const theme = button.dataset.setTheme!;
        document.documentElement.dataset.theme = theme;
        try {
          localStorage.setItem("theme", theme);
        } catch {
          /* Theme still works without storage. */
        }
        updateThemeButtons();
      },
      { signal },
    ),
  );

  document
    .querySelectorAll<HTMLDetailsElement>("details.dropdown")
    .forEach((dropdown) => {
      const close = (focus: boolean) => {
        dropdown.open = false;
        if (focus) dropdown.querySelector("summary")?.focus();
      };
      dropdown.addEventListener(
        "keydown",
        (event) => {
          if (event.key === "Escape") {
            event.preventDefault();
            close(true);
          }
        },
        { signal },
      );
      dropdown
        .querySelectorAll("a, button")
        .forEach((item) =>
          item.addEventListener(
            "click",
            () => close(item.tagName === "BUTTON"),
            { signal },
          ),
        );
      document.addEventListener(
        "click",
        (event) => {
          if (!dropdown.contains(event.target as Node)) close(false);
        },
        { signal },
      );
    });

  document.querySelectorAll("pre").forEach((pre) => {
    const code = pre.querySelector("code");
    if (!code || pre.querySelector(".copy-code-btn")) return;
    pre.classList.add("relative", "group");
    const button = document.createElement("button");
    button.type = "button";
    button.className =
      "copy-code-btn absolute top-2 right-2 btn btn-xs btn-neutral opacity-0 group-hover:opacity-100 focus:opacity-100";
    button.textContent = label("copyCode", "Copy code");
    button.addEventListener(
      "click",
      async () => {
        try {
          await navigator.clipboard.writeText(code.textContent || "");
          if (signal.aborted) return;
          button.textContent = label("copied", "Copied!");
          if (announce) announce.textContent = button.textContent;
          const timer = setTimeout(() => {
            button.textContent = label("copyCode", "Copy code");
            timers.delete(timer);
          }, 1500);
          timers.add(timer);
        } catch {
          if (!signal.aborted && announce)
            announce.textContent = label(
              "copyFailed",
              "Copy failed. Select and copy the text manually.",
            );
        }
      },
      { signal },
    );
    pre.append(button);
  });

  const animations = new Set<Animation>();
  const counterFrames = new Set<number>();
  let observer: IntersectionObserver | undefined;
  let counterObserver: IntersectionObserver | undefined;

  if (
    !matchMedia("(prefers-reduced-motion: reduce)").matches &&
    "IntersectionObserver" in window
  ) {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          // Content is visible by default; failure to animate never hides it.
          const animation = entry.target.animate(
            [
              { opacity: 0.4, transform: "translateY(12px)" },
              { opacity: 1, transform: "translateY(0)" },
            ],
            { duration: 450, easing: "ease-out" },
          );
          animations.add(animation);
          animation.onfinish = () => animations.delete(animation);
          observer?.unobserve(entry.target);
        });
      },
      { threshold: 0.05 },
    );
    document
      .querySelectorAll(".scroll-reveal")
      .forEach((el) => observer?.observe(el));

    const counters = document.querySelectorAll<HTMLElement>(".stat-counter");
    if (counters.length > 0) {
      counterObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            const el = entry.target as HTMLElement;
            counterObserver?.unobserve(el);
            const target = parseFloat(el.dataset.target || "0");
            const suffix = el.dataset.suffix || "";
            if (isNaN(target) || target <= 0) return;
            const duration = 1200;
            const startTime = performance.now();
            const step = (now: number) => {
              if (signal.aborted) return;
              const elapsed = now - startTime;
              const progress = Math.min(1, elapsed / duration);
              const ease = 1 - Math.pow(1 - progress, 3);
              const current = Math.floor(ease * target);
              el.textContent = `${current}${suffix}`;
              if (progress < 1) {
                const frameId = requestAnimationFrame(step);
                counterFrames.add(frameId);
              } else {
                el.textContent = `${target}${suffix}`;
              }
            };
            const frameId = requestAnimationFrame(step);
            counterFrames.add(frameId);
          });
        },
        { threshold: 0.2 },
      );
      counters.forEach((el) => counterObserver?.observe(el));
    }
  }
  document.documentElement.classList.remove("preload");
  return () => {
    timers.forEach(clearTimeout);
    counterFrames.forEach(cancelAnimationFrame);
    observer?.disconnect();
    counterObserver?.disconnect();
    animations.forEach((animation) => animation.cancel());
  };
});

onPageLoad((signal) => {
  document.addEventListener(
    "keydown",
    (event) => {
      if (
        (event.ctrlKey || event.metaKey) &&
        event.key.toLowerCase() === "k" &&
        !event.altKey
      ) {
        const element = event.target as HTMLElement;
        if (
          element.closest('input, textarea, select, [contenteditable="true"]')
        )
          return;
        event.preventDefault();
        window.location.assign(
          "/" + document.documentElement.lang + "/search/",
        );
      }
    },
    { signal },
  );
});
