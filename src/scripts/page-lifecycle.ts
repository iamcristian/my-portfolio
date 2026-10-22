/** Install page-local behavior once and release listeners/observers before a swap. */
export function onPageLoad(
  setup: (signal: AbortSignal) => void | (() => void),
) {
  let controller: AbortController | undefined;
  let cleanup: void | (() => void);
  const dispose = () => {
    controller?.abort();
    cleanup?.();
    cleanup = undefined;
  };
  document.addEventListener("astro:page-load", () => {
    dispose();
    controller = new AbortController();
    cleanup = setup(controller.signal);
  });
  document.addEventListener("astro:before-swap", dispose);
}

export function scrollBehavior(): ScrollBehavior {
  return matchMedia("(prefers-reduced-motion: reduce)").matches
    ? "instant"
    : "smooth";
}
