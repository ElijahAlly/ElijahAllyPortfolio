<script setup lang="ts">
const img = (name: string) =>
  new URL(`../assets/img/projects/${name}`, import.meta.url).href;

const featured = {
  title: "PGPVault",
  href: "https://pgp-vault.vercel.app/",
  when: "Nov 2025 – Present",
  image: "pgp-vault.png",
  summary:
    "An end-to-end encrypted messaging platform built on OpenPGP — message signing, per-user keyrings, and private keys held only for the session.",
  detail: [
    "Secure backend API on Drizzle ORM and PostgreSQL for encrypted message storage.",
    "Privacy work beyond the encryption itself: message padding and traffic obfuscation with generated dummy packets, so metadata leaks less than the plaintext would.",
    "Encrypted image pipeline on S3 with presigned URLs and custom PNG steganography — payloads encoded into pixel channels.",
  ],
  stack: "OpenPGP.js · Nuxt · TypeScript · TailwindCSS · Drizzle ORM · S3 · IAM",
};

const others = [
  {
    title: "Toogether.love",
    href: "https://toogether.love",
    image: "toogether_love.png",
    summary:
      "A private corner of the internet where a couple keeps their timeline, photos and story in one place.",
  },
  {
    title: "MyTrees.family",
    href: "https://mytrees.family/",
    image: "my-trees_family.png",
    summary:
      "A family tree app designed to be modern and genuinely easy to share. Built with relatives in the room, correcting the model as we went.",
  },
];
</script>

<template>
  <section id="work" class="section">
    <div class="shell">
      <div class="sec-head reveal">
        <span class="spark" aria-hidden="true"></span>
        <h2 class="eyebrow">Selected work</h2>
      </div>

      <!-- Featured. The screenshot runs full width so the capture keeps its
           own proportions instead of being cropped into a narrow column. -->
      <article class="reveal bg-surface border border-rule">
        <a
          :href="featured.href"
          target="_blank"
          rel="noopener"
          class="block overflow-hidden border-b border-rule group"
        >
          <img
            :src="img(featured.image)"
            :alt="`Screenshot of ${featured.title}`"
            loading="lazy"
            class="w-full aspect-[21/9] object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
          />
        </a>

        <div class="grid lg:grid-cols-[0.9fr_1.1fr]">
          <div class="p-8 md:p-11 lg:border-r border-rule">
            <div class="flex items-center gap-3 mb-6">
              <p class="eyebrow">Personal project</p>
              <span class="h-px flex-1 bg-rule"></span>
              <p class="datum text-[0.75rem] text-ink-3">{{ featured.when }}</p>
            </div>

            <h3 class="display text-[clamp(1.9rem,4vw,2.75rem)]">
              {{ featured.title }}
            </h3>
            <p class="mt-4 text-ink-2 leading-relaxed max-w-[42ch]">
              {{ featured.summary }}
            </p>

            <a
              :href="featured.href"
              target="_blank"
              rel="noopener"
              class="inline-flex items-center gap-2.5 mt-8 h-11 px-5 border border-rule text-ink hover:border-accent hover:text-accent transition-colors datum text-[0.75rem] uppercase tracking-[0.12em]"
            >
              Live site
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

          <div class="p-8 md:p-11 lg:pt-11 border-t lg:border-t-0 border-rule">
            <ul class="space-y-3 max-w-[56ch]">
              <li
                v-for="(d, i) in featured.detail"
                :key="i"
                class="text-ink-2 text-[0.9375rem] leading-relaxed pl-5 relative before:absolute before:left-0 before:top-[0.7em] before:w-2 before:h-px before:bg-rule"
              >
                {{ d }}
              </li>
            </ul>
            <p
              class="datum text-[0.75rem] text-accent mt-7 pt-5 border-t border-rule-2 leading-relaxed"
            >
              {{ featured.stack }}
            </p>
          </div>
        </div>
      </article>

      <!-- Others -->
      <div class="grid md:grid-cols-2 gap-6 mt-6">
        <a
          v-for="(o, i) in others"
          :key="o.title"
          :href="o.href"
          target="_blank"
          rel="noopener"
          class="reveal group bg-surface border border-rule hover:border-accent transition-colors flex flex-col"
          :style="{ transitionDelay: `${i * 0.08}s` }"
        >
          <div class="overflow-hidden border-b border-rule">
            <img
              :src="img(o.image)"
              :alt="`Screenshot of ${o.title}`"
              loading="lazy"
              class="w-full h-52 object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
            />
          </div>
          <div class="p-7 flex-1 flex flex-col">
            <h3
              class="display-sm text-xl group-hover:text-accent transition-colors"
            >
              {{ o.title }}
            </h3>
            <p class="mt-2.5 text-ink-2 text-[0.9375rem] leading-relaxed">
              {{ o.summary }}
            </p>
            <span
              class="datum text-[0.6875rem] uppercase tracking-[0.14em] text-ink-3 group-hover:text-accent transition-colors mt-5 pt-4 border-t border-rule-2 flex items-center gap-2"
            >
              Visit site
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
                <path d="M7 17 17 7M9 7h8v8" />
              </svg>
            </span>
          </div>
        </a>
      </div>

      <div class="mt-10 reveal">
        <a
          href="https://github.com/ElijahAlly"
          target="_blank"
          rel="noopener"
          class="inline-flex items-center gap-2.5 h-12 px-6 border border-rule text-ink hover:border-accent hover:text-accent transition-colors datum text-[0.8125rem] uppercase tracking-[0.12em]"
        >
          Everything else on GitHub
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
    </div>
  </section>
</template>
