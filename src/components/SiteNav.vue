<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import { useTheme } from "@/composables/useTheme";

const { theme, toggle } = useTheme();

const scrolled = ref(false);
const menuOpen = ref(false);

const links = [
  { href: "#company", label: "Company" },
  { href: "#products", label: "Products" },
  { href: "#capabilities", label: "Capabilities" },
  { href: "#record", label: "Record" },
  { href: "#work", label: "Work" },
  { href: "#contact", label: "Contact" },
];

const resumeUrl = new URL(
  "../assets/Elijah-Ally-Resume-Aug-14-2026.pdf",
  import.meta.url
).href;

const onScroll = () => (scrolled.value = window.scrollY > 8);
onMounted(() => {
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
});
onUnmounted(() => window.removeEventListener("scroll", onScroll));
</script>

<template>
  <a
    href="#main"
    class="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:bg-surface focus:text-ink focus:px-4 focus:py-2 focus:border focus:border-rule"
  >
    Skip to content
  </a>

  <nav
    :class="[
      'fixed top-0 inset-x-0 z-50 transition-all duration-300',
      scrolled
        ? 'bg-ground/85 backdrop-blur-md border-b border-rule'
        : 'bg-transparent border-b border-transparent',
    ]"
  >
    <div class="shell flex items-center justify-between h-[4.5rem] gap-4">
      <!-- Monogram + name -->
      <a href="#page-top" class="flex items-center gap-3 group shrink-0">
        <span
          class="grid place-items-center w-8 h-8 bg-ink text-ground font-display font-extrabold text-[0.8125rem] tracking-tight"
          style="font-variation-settings: 'wdth' 112"
          aria-hidden="true"
        >
          EA
        </span>
        <span class="flex flex-col leading-none">
          <span
            class="font-display font-bold text-[0.9375rem] tracking-tight text-ink group-hover:text-accent transition-colors"
          >
            Elijah Ally
          </span>
          <span class="datum text-[0.625rem] text-ink-3 mt-0.5 tracking-wide">
            CENOVA SPARK
          </span>
        </span>
      </a>

      <!-- Desktop links -->
      <div class="hidden lg:flex items-center gap-7">
        <a
          v-for="link in links"
          :key="link.href"
          :href="link.href"
          class="datum text-[0.75rem] uppercase tracking-[0.12em] text-ink-2 hover:text-ink transition-colors relative after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-full after:bg-accent after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100"
        >
          {{ link.label }}
        </a>
      </div>

      <div class="flex items-center gap-2">
        <a
          :href="resumeUrl"
          target="_blank"
          rel="noopener"
          class="hidden sm:inline-flex items-center gap-2 h-9 px-4 border border-rule text-ink hover:border-accent hover:text-accent transition-colors datum text-[0.75rem] uppercase tracking-[0.12em]"
        >
          Résumé
        </a>

        <!-- Theme toggle -->
        <button
          type="button"
          @click="toggle"
          class="grid place-items-center w-9 h-9 border border-rule text-ink-2 hover:text-accent hover:border-accent transition-colors"
          :aria-label="
            theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'
          "
        >
          <svg
            v-if="theme === 'dark'"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.75"
            stroke-linecap="round"
            aria-hidden="true"
          >
            <circle cx="12" cy="12" r="4.25" />
            <path
              d="M12 2.5v2M12 19.5v2M2.5 12h2M19.5 12h2M5.2 5.2l1.4 1.4M17.4 17.4l1.4 1.4M18.8 5.2l-1.4 1.4M6.6 17.4l-1.4 1.4"
            />
          </svg>
          <svg
            v-else
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.75"
            stroke-linecap="round"
            stroke-linejoin="round"
            aria-hidden="true"
          >
            <path d="M20 14.5A8.5 8.5 0 0 1 9.5 4a8.5 8.5 0 1 0 10.5 10.5Z" />
          </svg>
        </button>

        <!-- Mobile menu -->
        <button
          type="button"
          @click="menuOpen = !menuOpen"
          class="lg:hidden grid place-items-center w-9 h-9 border border-rule text-ink-2 hover:text-accent hover:border-accent transition-colors"
          :aria-expanded="menuOpen"
          aria-controls="mobile-menu"
          aria-label="Toggle navigation menu"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.75"
            stroke-linecap="round"
            aria-hidden="true"
          >
            <template v-if="menuOpen">
              <path d="M5 5l14 14M19 5L5 19" />
            </template>
            <template v-else>
              <path d="M3.5 7h17M3.5 12h17M3.5 17h17" />
            </template>
          </svg>
        </button>
      </div>
    </div>

    <div
      v-show="menuOpen"
      id="mobile-menu"
      class="lg:hidden bg-ground border-b border-rule"
    >
      <div class="shell py-4 flex flex-col">
        <a
          v-for="link in links"
          :key="link.href"
          :href="link.href"
          @click="menuOpen = false"
          class="datum text-[0.8125rem] uppercase tracking-[0.12em] text-ink-2 hover:text-accent py-3 border-b border-rule-2 last:border-0 transition-colors"
        >
          {{ link.label }}
        </a>
        <a
          :href="resumeUrl"
          target="_blank"
          rel="noopener"
          class="datum text-[0.8125rem] uppercase tracking-[0.12em] text-accent py-3 sm:hidden"
        >
          Résumé (PDF)
        </a>
      </div>
    </div>
  </nav>
</template>
