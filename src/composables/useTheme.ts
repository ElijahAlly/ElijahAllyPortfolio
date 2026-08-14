import { ref, watchEffect } from "vue";

export type Theme = "light" | "dark";

const stored = (() => {
  try {
    const v = localStorage.getItem("theme");
    return v === "light" || v === "dark" ? v : null;
  } catch {
    return null;
  }
})();

const systemPrefersDark = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-color-scheme: dark)").matches;

const theme = ref<Theme>(stored ?? (systemPrefersDark() ? "dark" : "light"));

watchEffect(() => {
  document.documentElement.setAttribute("data-theme", theme.value);
  try {
    localStorage.setItem("theme", theme.value);
  } catch {
    /* private mode — the in-memory value still drives the page */
  }
});

export function useTheme() {
  const toggle = () => {
    theme.value = theme.value === "dark" ? "light" : "dark";
  };
  return { theme, toggle };
}
