/**
 * Interactive physical micro-interactions:
 * - Spotlight cursor illumination ([data-spotlight])
 * - Balanced 3D tilt ([data-tilt])
 * - Magnetic attraction for CTA elements ([data-magnetic])
 * - Dynamic Island header scrolling & reading progress
 * - Editorial blur-to-focus reveals ([data-reveal])
 */

export function initInteractions(signal: AbortSignal): () => void {
  if (typeof window === "undefined") return () => {};

  const prefersReduced = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;
  const isFinePointer = window.matchMedia("(pointer: fine)").matches;

  // ── 1. Spotlight border & surface glow ──
  const spotlightElements =
    document.querySelectorAll<HTMLElement>("[data-spotlight]");
  const cleanups: Array<() => void> = [];

  spotlightElements.forEach((el) => {
    const handleMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      el.style.setProperty("--mouse-x", `${x.toFixed(1)}px`);
      el.style.setProperty("--mouse-y", `${y.toFixed(1)}px`);
    };

    el.addEventListener("mousemove", handleMove, { passive: true, signal });
  });

  // ── 2. Subtle 3D Card Tilt (Balanced: ~2-3.5 deg) ──
  if (isFinePointer && !prefersReduced) {
    const tiltElements = document.querySelectorAll<HTMLElement>("[data-tilt]");

    tiltElements.forEach((el) => {
      let isHovered = false;

      const handleMove = (e: MouseEvent) => {
        if (!isHovered) {
          isHovered = true;
          el.style.transition = "transform 0.1s ease-out";
        }
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        // Relative coordinates from -1 to 1
        const normX = (x / rect.width - 0.5) * 2;
        const normY = (y / rect.height - 0.5) * 2;

        const maxAngle = 3.2; // degrees
        const rotX = -normY * maxAngle;
        const rotY = normX * maxAngle;

        el.style.transform = `perspective(1000px) rotateX(${rotX.toFixed(2)}deg) rotateY(${rotY.toFixed(2)}deg) scale3d(1.015, 1.015, 1.015)`;
      };

      const handleLeave = () => {
        isHovered = false;
        el.style.transition =
          "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.3s ease";
        el.style.transform =
          "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
      };

      el.addEventListener("mousemove", handleMove, { passive: true, signal });
      el.addEventListener("mouseleave", handleLeave, { signal });
    });
  }

  // ── 3. Magnetic CTA & Icon Elements ──
  if (isFinePointer && !prefersReduced) {
    const magneticElements =
      document.querySelectorAll<HTMLElement>("[data-magnetic]");

    magneticElements.forEach((el) => {
      const handleMove = (e: MouseEvent) => {
        const rect = el.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const maxDistance = 35;
        const dist = Math.hypot(e.clientX - centerX, e.clientY - centerY);
        if (dist > maxDistance) return;

        const strength = 0.2;
        const dx = (e.clientX - centerX) * strength;
        const dy = (e.clientY - centerY) * strength;

        el.style.transform = `translate3d(${dx.toFixed(1)}px, ${dy.toFixed(1)}px, 0)`;
      };

      const handleLeave = () => {
        el.style.transition = "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)";
        el.style.transform = "translate3d(0, 0, 0)";
        setTimeout(() => {
          if (!signal.aborted) el.style.transition = "";
        }, 400);
      };

      el.addEventListener("mousemove", handleMove, { passive: true, signal });
      el.addEventListener("mouseleave", handleLeave, { signal });
    });
  }

  // ── 4. Celestial Horizon Header & Parallax Starfield Scroll ──
  const header = document.getElementById("main-header");
  const progressBar = document.getElementById("header-progress-bar");
  const progressContainer = document.getElementById("header-progress");

  const updateScrollState = () => {
    const scrollY = window.scrollY;
    const isScrolled = scrollY > 24;

    if (!prefersReduced) {
      document.documentElement.style.setProperty(
        "--scroll-y",
        `${scrollY.toFixed(1)}px`,
      );
    }

    if (header) {
      header.classList.toggle("header-scrolled", isScrolled);
    }

    if (progressContainer) {
      progressContainer.classList.toggle("opacity-100", isScrolled);
      progressContainer.classList.toggle("opacity-0", !isScrolled);
    }

    if (progressBar) {
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const pct =
        docHeight > 0
          ? Math.min(100, Math.max(0, (scrollY / docHeight) * 100))
          : 0;
      progressBar.style.width = `${pct.toFixed(1)}%`;
    }
  };

  window.addEventListener("scroll", updateScrollState, {
    passive: true,
    signal,
  });
  updateScrollState();

  // ── 5. Editorial Blur-to-Focus Reveals ──
  if (!prefersReduced && "IntersectionObserver" in window) {
    const revealElements =
      document.querySelectorAll<HTMLElement>("[data-reveal]");
    if (revealElements.length > 0) {
      const revealObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            const target = entry.target as HTMLElement;
            target.classList.add("revealed");
            revealObserver.unobserve(target);
          });
        },
        { threshold: 0.15, rootMargin: "0px 0px -40px 0px" },
      );

      revealElements.forEach((el) => revealObserver.observe(el));
      cleanups.push(() => revealObserver.disconnect());
    }
  }

  return () => {
    cleanups.forEach((c) => c());
  };
}
