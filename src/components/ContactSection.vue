<script setup lang="ts">
const profileUrl = new URL("../assets/img/profile-pic.png", import.meta.url).href;

const channels = [
  {
    label: "Email",
    value: "elijah.ally@cenovaspark.com",
    href: "mailto:elijah.ally@cenovaspark.com",
  },
  {
    label: "LinkedIn",
    value: "elijah-ally-123ea",
    href: "https://www.linkedin.com/in/elijah-ally-123ea/",
  },
  { label: "GitHub", value: "ElijahAlly", href: "https://github.com/ElijahAlly" },
  { label: "Company", value: "cenovaspark.com", href: "https://cenovaspark.com" },
];
</script>

<template>
  <section id="contact" class="section">
    <div class="shell">
      <div class="sec-head reveal">
        <span class="spark" aria-hidden="true"></span>
        <h2 class="eyebrow">Point of contact</h2>
      </div>

      <div class="grid lg:grid-cols-[1.15fr_1fr] gap-x-16 gap-y-12 items-start">
        <div class="reveal">
          <p class="display text-[clamp(2rem,5vw,3.75rem)] max-w-[15ch]">
            Have a contract, a role, or a problem worth solving?
          </p>
          <p class="mt-7 text-ink-2 leading-relaxed max-w-[46ch]">
            Cenova Spark is registered and available for federal work as a prime
            or a subcontractor. I'm also open to senior engineering
            conversations. Either way, email is the fastest route.
          </p>

          <a
            href="mailto:elijah.ally@cenovaspark.com"
            class="inline-flex items-center gap-2.5 mt-9 h-12 px-6 bg-ink text-ground hover:bg-accent hover:text-accent-ink transition-colors datum text-[0.8125rem] uppercase tracking-[0.12em]"
          >
            Start an email
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
        </div>

        <div class="reveal" style="transition-delay: 0.1s">
          <div class="bg-surface border border-rule">
            <div class="flex items-center gap-4 p-7 border-b border-rule">
              <img
                :src="profileUrl"
                alt="Elijah Ally"
                width="56"
                height="56"
                class="w-14 h-14 rounded-full object-cover border border-rule"
              />
              <div>
                <p class="display-sm text-lg">Elijah Ally</p>
                <p class="datum text-[0.75rem] text-ink-3 mt-0.5">
                  Founder &amp; CEO · Riverdale, MD
                </p>
              </div>
            </div>

            <dl>
              <a
                v-for="c in channels"
                :key="c.label"
                :href="c.href"
                :target="c.href.startsWith('mailto') ? undefined : '_blank'"
                rel="noopener"
                class="grid grid-cols-[6rem_1fr_auto] items-center gap-3 px-7 py-4 border-b border-rule-2 last:border-b-0 group hover:bg-surface-2 transition-colors"
              >
                <dt class="eyebrow">{{ c.label }}</dt>
                <dd
                  class="datum text-[0.875rem] text-ink group-hover:text-accent transition-colors truncate"
                >
                  {{ c.value }}
                </dd>
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="text-ink-3 group-hover:text-accent transition-colors"
                  aria-hidden="true"
                >
                  <path d="M7 17 17 7M9 7h8v8" />
                </svg>
              </a>
            </dl>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
