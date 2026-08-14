<script setup lang="ts">
const products = [
  {
    name: "AddisDB",
    domain: "addisdb.com",
    href: "https://addisdb.com",
    tagline: "The database client that won't let you break prod.",
    body: "A GUI database client built around a single rule: make the dangerous thing hard and the safe thing fast. It reads plain English into editable SQL, draws the schema you actually have, and refuses to let a migration through without showing you the diff first.",
    /* The four verbs are the product's own information architecture. */
    verbs: [
      { verb: "Ask", body: "Plain English becomes readable, editable SQL." },
      { verb: "See", body: "Entity-relationship diagrams of the live schema." },
      { verb: "Ship", body: "Migrations with diffs and safety warnings." },
      { verb: "Fill", body: "Mock data, marked so it never passes for real." },
    ],
    also: "Live monitoring, alerts, query history, notebooks, charting, export",
  },
  {
    name: "Towback",
    domain: "towback.app",
    href: "https://towback.app",
    tagline: "Locate your impounded vehicle instantly.",
    body: "Getting a towed car back normally means a phone tree, a cash-only window, and a ride across town. Towback searches over 100 municipal and private impound databases to find the vehicle, shows the release fees in real time, and takes payment in the app.",
    verbs: [
      { verb: "Find", body: "One search across 100+ impound databases." },
      { verb: "Pay", body: "Real-time release fees, settled in the app." },
      { verb: "Return", body: "Book a ride, or a verified driver brings it to you." },
    ],
    also: "No lot visit, no paperwork counter, no cash-only surprise",
  },
];
</script>

<template>
  <section id="products" class="section">
    <div class="shell">
      <div class="sec-head reveal">
        <span class="spark" aria-hidden="true"></span>
        <h2 class="eyebrow">Products in production</h2>
      </div>

      <p
        class="display-sm text-[clamp(1.6rem,3.4vw,2.5rem)] max-w-[24ch] reveal"
      >
        Two shipped products, not two pitch decks.
      </p>

      <div class="mt-14 space-y-6">
        <article
          v-for="p in products"
          :key="p.name"
          class="reveal bg-surface border border-rule"
        >
          <div class="grid lg:grid-cols-[1.05fr_1fr]">
            <!-- Left: identity + pitch -->
            <div class="p-8 md:p-11 lg:border-r border-rule">
              <div class="flex items-center gap-3 mb-7">
                <span
                  class="inline-flex items-center gap-1.5 datum text-[0.6875rem] uppercase tracking-[0.14em] text-verify"
                >
                  <span
                    class="w-1.5 h-1.5 rounded-full bg-verify"
                    aria-hidden="true"
                  ></span>
                  Live
                </span>
                <span class="h-px flex-1 bg-rule"></span>
                <a
                  :href="p.href"
                  target="_blank"
                  rel="noopener"
                  class="datum text-[0.75rem] text-ink-3 hover:text-accent transition-colors"
                >
                  {{ p.domain }}
                </a>
              </div>

              <h3 class="display text-[clamp(2.1rem,5vw,3.5rem)]">
                {{ p.name }}
              </h3>
              <p class="mt-4 text-accent text-lg md:text-xl font-medium leading-snug">
                {{ p.tagline }}
              </p>
              <p class="mt-5 text-ink-2 leading-relaxed max-w-[48ch]">
                {{ p.body }}
              </p>

              <a
                :href="p.href"
                target="_blank"
                rel="noopener"
                class="inline-flex items-center gap-2.5 mt-8 h-11 px-5 bg-ink text-ground hover:bg-accent hover:text-accent-ink transition-colors datum text-[0.75rem] uppercase tracking-[0.12em]"
              >
                Open {{ p.name }}
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  aria-hidden="true"
                >
                  <path d="M7 17 17 7M9 7h8v8" />
                </svg>
              </a>
            </div>

            <!-- Right: what it does, in the product's own verbs.
                 Rows share the card's height so the panel never bottoms out
                 early against the taller column beside it. -->
            <div class="bg-surface-2/60 flex flex-col">
              <dl class="flex-1 flex flex-col">
                <div
                  v-for="v in p.verbs"
                  :key="v.verb"
                  class="flex-1 grid grid-cols-[5.5rem_1fr] md:grid-cols-[7rem_1fr] items-center gap-4 px-8 md:px-11 py-6 border-b border-rule"
                >
                  <dt class="display-sm text-base md:text-lg text-accent">
                    {{ v.verb }}
                  </dt>
                  <dd class="text-ink-2 text-[0.9375rem] leading-relaxed">
                    {{ v.body }}
                  </dd>
                </div>
              </dl>
              <p
                class="px-8 md:px-11 py-6 datum text-[0.75rem] text-ink-3 leading-relaxed"
              >
                {{ p.also }}
              </p>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
