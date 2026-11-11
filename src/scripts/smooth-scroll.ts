import Lenis from "lenis";

/**
 * Initializes smooth scrolling with Lenis.
 * Respects prefers-reduced-motion and cleans up on navigation or abort.
 */
export function initSmoothScroll(signal: AbortSignal): () => void {
  if (typeof window === "undefined") return () => {};

  const prefersReduced = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;
  if (prefersReduced) return () => {};

  const lenis = new Lenis({
    duration: 1.15,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
    touchMultiplier: 1.5,
  });

  (window as unknown as { __lenis?: Lenis }).__lenis = lenis;

  let rafId: number;
  function raf(time: number) {
    if (signal.aborted) return;
    lenis.raf(time);
    rafId = requestAnimationFrame(raf);
  }
  rafId = requestAnimationFrame(raf);

  // Smooth scroll for hash anchor links (e.g., href="#about", href="/es/#projects")
  const handleAnchorClick = (event: MouseEvent) => {
    const target = (event.target as HTMLElement).closest("a");
    if (!target) return;
    const href = target.getAttribute("href");
    if (!href) return;

    try {
      const url = new URL(target.href, window.location.href);
      if (
        url.origin === window.location.origin &&
        url.pathname === window.location.pathname &&
        url.hash
      ) {
        const targetElement = document.querySelector(url.hash);
        if (targetElement) {
          event.preventDefault();
          lenis.scrollTo(targetElement as HTMLElement, {
            offset: -80,
            duration: 1.2,
          });
          history.pushState(null, "", url.hash);
        }
      }
    } catch {
      // Ignore invalid URLs
    }
  };

  document.addEventListener("click", handleAnchorClick, { signal });

  return () => {
    cancelAnimationFrame(rafId);
    lenis.destroy();
    delete (window as unknown as { __lenis?: Lenis }).__lenis;
  };
}
