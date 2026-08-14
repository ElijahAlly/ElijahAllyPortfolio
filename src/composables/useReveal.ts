import { onMounted, onUnmounted } from "vue";

/**
 * Adds `.is-in` to every `.reveal` element once it scrolls into view.
 * Elements are unobserved after the first reveal so nothing re-animates.
 */
export function useReveal() {
  let observer: IntersectionObserver | null = null;

  onMounted(() => {
    const targets = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));

    if (
      !("IntersectionObserver" in window) ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      targets.forEach((el) => el.classList.add("is-in"));
      return;
    }

    observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("is-in");
          observer?.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.08 }
    );

    targets.forEach((el) => observer!.observe(el));
  });

  onUnmounted(() => observer?.disconnect());
}
