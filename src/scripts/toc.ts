import { onPageLoad, scrollBehavior } from "./page-lifecycle";

/**
 * Initializes table of contents interactions:
 * - Smooth scroll & modal close on mobile dialog links
 * - IntersectionObserver to track and highlight the currently active heading in desktop & mobile TOCs
 */
export function initTableOfContents() {
  onPageLoad((signal) => {
    const dialog = document.querySelector<HTMLDialogElement>("#toc_modal");
    if (dialog) {
      const dialogLinks = dialog.querySelectorAll<HTMLAnchorElement>("nav a");
      dialogLinks.forEach((link) => {
        link.addEventListener(
          "click",
          (event) => {
            const target = document.getElementById(
              decodeURIComponent(link.hash.slice(1)),
            );
            if (!target) return;
            event.preventDefault();
            dialog.close();
            history.replaceState(history.state, "", link.hash);
            target.setAttribute("tabindex", "-1");
            target.focus({ preventScroll: true });
            target.scrollIntoView({ behavior: scrollBehavior() });
          },
          { signal },
        );
      });
    }

    const article = document.querySelector("article.prose");
    if (!article) return;
    const headings = Array.from(
      article.querySelectorAll<HTMLElement>("h2[id], h3[id]"),
    );
    const allTocLinks = document.querySelectorAll<HTMLAnchorElement>(
      "#desktop-toc a, #toc_modal nav a",
    );

    if (headings.length === 0 || allTocLinks.length === 0) return;

    // Track intersection state of each heading by its ID
    const headingStates = new Map<string, boolean>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          headingStates.set(entry.target.id, entry.isIntersecting);
        });

        // Determine which heading is active
        // 1. Get all currently intersecting headings
        const intersectingHeadings = headings.filter((h) =>
          headingStates.get(h.id),
        );

        let activeId: string | null = null;

        if (intersectingHeadings.length > 0) {
          // If there are intersecting headings, the first one in document order is active
          activeId = intersectingHeadings[0].id;
        } else {
          // If none are intersecting, find the last one that is above the viewport
          const scrolledPast = headings.filter((h) => {
            const rect = h.getBoundingClientRect();
            return rect.top < 100; // Matches the top margin offset
          });
          if (scrolledPast.length > 0) {
            activeId = scrolledPast[scrolledPast.length - 1].id;
          }
        }

        // Update the active classes
        if (activeId) {
          allTocLinks.forEach((link) => {
            const href = link.getAttribute("href");
            if (href === `#${activeId}`) {
              link.classList.add("toc-active");
              link.setAttribute("aria-current", "location");
            } else {
              link.classList.remove("toc-active");
              link.removeAttribute("aria-current");
            }
          });
        }
      },
      { rootMargin: "-95px 0px -70% 0px", threshold: 0 },
    );

    headings.forEach((heading) => observer.observe(heading));
    return () => observer.disconnect();
  });
}

