<script setup lang="ts">
/**
 * The hero borrows the structure of a federal capability statement — the
 * one-page document a contractor hands a contracting officer. The record
 * band beneath the headline is the part that audience reads first.
 */
const record = [
  { label: "CAGE", value: "23H95" },
  { label: "UEI", value: "CXCHD33K33G4" },
  { label: "SAM.gov", value: "Active", note: "thru 07/2027", live: true },
  { label: "Clearance", value: "TS/CI", note: "active", live: true },
  { label: "Set-aside", value: "Minority-owned", note: "small business" },
];

const resumeUrl = new URL(
  "../assets/Elijah-Ally-Resume-Aug-14-2026.pdf",
  import.meta.url
).href;
</script>

<template>
  <header id="page-top" class="relative pt-36 md:pt-44 pb-0 overflow-hidden">
    <!-- Faint structural grid: the ruled paper a statement is typed onto -->
    <div
      class="pointer-events-none absolute inset-0 opacity-[0.55] dark:opacity-40"
      aria-hidden="true"
      style="
        background-image: linear-gradient(
          to right,
          var(--rule-2) 1px,
          transparent 1px
        );
        background-size: 6.5rem 100%;
        mask-image: linear-gradient(to bottom, black, transparent 78%);
        -webkit-mask-image: linear-gradient(to bottom, black, transparent 78%);
      "
    ></div>

    <div class="shell relative">
      <div class="flex items-center gap-3 rise" style="animation-delay: 0.05s">
        <span class="spark" aria-hidden="true"></span>
        <p class="eyebrow">Capability statement</p>
        <span class="h-px flex-1 bg-rule wipe" style="animation-delay: 0.15s"></span>
        <p class="eyebrow hidden sm:block">Riverdale, MD</p>
      </div>

      <h1 class="display text-[clamp(2.35rem,7.1vw,5.5rem)] mt-9">
        <span class="block rise" style="animation-delay: 0.12s">
          I run a federal
        </span>
        <span class="block rise" style="animation-delay: 0.2s">
          software company.
        </span>
        <span
          class="block text-ink-2 rise"
          style="animation-delay: 0.3s"
        >
          I also write the code.
        </span>
      </h1>

      <div
        class="mt-10 grid md:grid-cols-[minmax(0,34rem)_auto] gap-x-12 gap-y-8 items-end rise"
        style="animation-delay: 0.42s"
      >
        <p class="text-ink-2 text-[1.0625rem] md:text-lg leading-relaxed">
          I'm Elijah Ally, founder and CEO of
          <a
            href="https://cenovaspark.com"
            target="_blank"
            rel="noopener"
            class="link text-ink"
            >Cenova Spark</a
          >, a minority-owned federal software contractor. We build cloud-native
          infrastructure and secure communications systems for mission-critical
          work — and I still ship production code every week, most recently on
          federal programs at AFS and Vibrint.
        </p>

        <div class="flex flex-wrap gap-3">
          <a
            href="#products"
            class="inline-flex items-center gap-2.5 h-12 px-6 bg-ink text-ground hover:bg-accent hover:text-accent-ink transition-colors datum text-[0.8125rem] uppercase tracking-[0.12em]"
          >
            See the products
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              aria-hidden="true"
            >
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </a>
          <a
            :href="resumeUrl"
            target="_blank"
            rel="noopener"
            class="inline-flex items-center gap-2.5 h-12 px-6 border border-rule text-ink hover:border-accent hover:text-accent transition-colors datum text-[0.8125rem] uppercase tracking-[0.12em]"
          >
            Résumé
            <span class="text-ink-3 normal-case tracking-normal">PDF</span>
          </a>
        </div>
      </div>
    </div>

    <!-- The record band: identifiers, as they appear on the real document -->
    <div class="mt-16 md:mt-24 border-y border-rule bg-surface">
      <div class="shell">
        <dl
          class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 lg:divide-x divide-rule"
        >
          <div
            v-for="(item, i) in record"
            :key="item.label"
            class="py-6 lg:px-7 lg:first:pl-0 lg:last:pr-0 border-b lg:border-b-0 border-rule-2 [&:nth-child(odd)]:pr-4 md:[&:nth-child(odd)]:pr-0 rise"
            :style="{ animationDelay: `${0.5 + i * 0.07}s` }"
          >
            <dt class="eyebrow mb-2.5">{{ item.label }}</dt>
            <dd class="flex items-baseline gap-2 flex-wrap">
              <span
                v-if="item.live"
                class="inline-block w-1.5 h-1.5 rounded-full bg-verify self-center shrink-0 pulse"
                aria-hidden="true"
              ></span>
              <span
                class="datum text-[0.9375rem] md:text-base font-medium"
                :class="item.live ? 'text-verify' : 'text-ink'"
              >
                {{ item.value }}
              </span>
              <span v-if="item.note" class="text-[0.8125rem] text-ink-3">
                {{ item.note }}
              </span>
            </dd>
          </div>
        </dl>
      </div>
    </div>
  </header>
</template>

<style scoped>
@keyframes pulse-dot {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.35;
  }
}

.pulse {
  animation: pulse-dot 2.4s ease-in-out infinite;
}

@media (prefers-reduced-motion: reduce) {
  .pulse {
    animation: none;
  }
}
</style>
