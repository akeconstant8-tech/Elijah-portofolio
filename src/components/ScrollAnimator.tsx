import { useEffect } from "react";
import { useRouterState } from "@tanstack/react-router";

/**
 * Anime au scroll toutes les sections / cartes du site.
 * Ajoute les classes uniquement côté client (aucun mismatch d'hydratation).
 */
export function ScrollAnimator() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const root = document.querySelector("main");
    if (!root) return;

    const targets = Array.from(
      root.querySelectorAll<HTMLElement>("section, article, [data-anim]"),
    ).filter((el) => !el.dataset.animBound);

    targets.forEach((el, i) => {
      el.dataset.animBound = "1";
      el.classList.add("anim-init");
      el.style.setProperty("--anim-delay", `${Math.min(i % 6, 5) * 90}ms`);
    });

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("anim-in");
            io.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.06 },
    );

    targets.forEach((el) => io.observe(el));

    // Sécurité : révèle ce qui est déjà visible au chargement
    const raf = requestAnimationFrame(() => {
      targets.forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.top < window.innerHeight * 0.95) el.classList.add("anim-in");
      });
    });

    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
    };
  }, [pathname]);

  return null;
}
