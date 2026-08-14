<script setup lang="ts">
const year = new Date().getFullYear();

/* Repeated in the footer because this is where a contracting officer
   copies them from. */
const identifiers = [
  { label: "CAGE", value: "23H95" },
  { label: "UEI", value: "CXCHD33K33G4" },
  { label: "SAM.gov", value: "Active thru 07/2027" },
];
</script>

<template>
  <footer class="border-t border-rule bg-surface">
    <div class="shell py-12">
      <div class="flex flex-wrap items-start justify-between gap-x-12 gap-y-8">
        <div>
          <div class="flex items-center gap-3">
            <span class="spark" aria-hidden="true"></span>
            <p class="display-sm text-base">Cenova Spark</p>
          </div>
          <p class="text-ink-3 text-[0.875rem] mt-2 max-w-[34ch] leading-relaxed">
            Minority-owned federal software contractor. Riverdale, Maryland.
          </p>
        </div>

        <dl class="flex flex-wrap gap-x-10 gap-y-4">
          <div v-for="id in identifiers" :key="id.label">
            <dt class="eyebrow mb-1.5">{{ id.label }}</dt>
            <dd class="datum text-[0.8125rem] text-ink-2">{{ id.value }}</dd>
          </div>
        </dl>
      </div>

      <div
        class="mt-10 pt-6 border-t border-rule-2 flex flex-wrap items-center justify-between gap-4"
      >
        <p class="datum text-[0.75rem] text-ink-3">
          © {{ year }} Elijah Ally
        </p>
        <a
          href="#page-top"
          class="datum text-[0.75rem] uppercase tracking-[0.12em] text-ink-3 hover:text-accent transition-colors inline-flex items-center gap-2"
        >
          Back to top
          <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            aria-hidden="true"
          >
            <path d="M12 19V5M6 11l6-6 6 6" />
          </svg>
        </a>
      </div>
    </div>
  </footer>
</template>
