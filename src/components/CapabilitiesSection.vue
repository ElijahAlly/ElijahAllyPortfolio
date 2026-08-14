<script setup lang="ts">
const competencies = [
  {
    title: "Cloud architecture",
    body: "High-availability infrastructure on AWS — S3, Lambda, CloudFront, API Gateway, IAM — provisioned and deployed to production.",
  },
  {
    title: "Secure communications",
    body: "Encrypted transmission and federal-compliant protocols, including end-to-end PGP messaging built from the primitives up.",
  },
  {
    title: "DevSecOps",
    body: "Security and testing inside the pipeline, so accreditation is a checkpoint rather than a rewrite.",
  },
  {
    title: "Full-stack engineering",
    body: "Vue, React, and React Native on the front; Java/Spring Boot, Django, and Node on the back; PostgreSQL and MongoDB beneath.",
  },
];

const naics = [
  { code: "541511", label: "Custom computer programming", primary: true },
  { code: "541512", label: "Computer systems design" },
  { code: "541519", label: "Other computer related services" },
  { code: "513210", label: "Software publishers" },
  { code: "518210", label: "Computing infrastructure & hosting" },
];

/* Grouped the way they get asked for on a capability statement. */
const stack = [
  { group: "Languages", items: "Java, TypeScript, Python, Rust, Ruby" },
  { group: "Frontend", items: "Vue 3, Nuxt, React, React Native, Redux, TailwindCSS" },
  { group: "Backend", items: "Spring Boot, Django, Node.js, Express, Ruby on Rails" },
  { group: "Data", items: "PostgreSQL, MongoDB, Drizzle ORM, SQL" },
  { group: "Cloud & ops", items: "AWS (S3, Lambda, CloudFront, API Gateway, IAM), Docker, Maven" },
  { group: "Other", items: "Stripe, OpenPGP.js, Scandit, ElasticSearch" },
];
</script>

<template>
  <section id="capabilities" class="section">
    <div class="shell">
      <div class="sec-head reveal">
        <span class="spark" aria-hidden="true"></span>
        <h2 class="eyebrow">Core competencies</h2>
      </div>

      <!-- The four competencies read across, so neither column runs long -->
      <ul class="reveal grid sm:grid-cols-2 lg:grid-cols-4 gap-x-10 border-t border-rule">
        <li
          v-for="c in competencies"
          :key="c.title"
          class="py-7 border-b border-rule-2 lg:border-b-0"
        >
          <h3 class="display-sm text-lg">{{ c.title }}</h3>
          <p class="mt-2 text-ink-2 text-[0.9375rem] leading-relaxed">
            {{ c.body }}
          </p>
        </li>
      </ul>

      <div class="grid lg:grid-cols-2 gap-x-16 gap-y-14 mt-14 lg:mt-16">
          <!-- NAICS: the codes an agency searches on -->
          <div class="reveal" style="transition-delay: 0.08s">
            <p class="eyebrow mb-5">NAICS codes on file</p>
            <ul class="border-t border-rule">
              <li
                v-for="n in naics"
                :key="n.code"
                class="flex items-baseline gap-4 py-3.5 border-b border-rule-2"
              >
                <span
                  class="datum text-[0.9375rem] font-medium w-[4.5rem] shrink-0"
                  :class="n.primary ? 'text-accent' : 'text-ink'"
                  >{{ n.code }}</span
                >
                <span class="text-ink-2 text-[0.9375rem] leading-snug">
                  {{ n.label }}
                </span>
                <span
                  v-if="n.primary"
                  class="datum text-[0.625rem] uppercase tracking-[0.14em] text-accent border border-accent px-1.5 py-0.5 ml-auto shrink-0 self-center"
                >
                  Primary
                </span>
              </li>
            </ul>
          </div>

          <!-- Stack -->
          <div class="reveal" style="transition-delay: 0.14s">
            <p class="eyebrow mb-5">Technology</p>
            <dl class="border-t border-rule">
              <div
                v-for="s in stack"
                :key="s.group"
                class="grid sm:grid-cols-[8rem_1fr] gap-x-4 gap-y-1 py-3.5 border-b border-rule-2"
              >
                <dt class="datum text-[0.75rem] uppercase tracking-[0.1em] text-ink-3 pt-1">
                  {{ s.group }}
                </dt>
                <dd class="text-ink-2 text-[0.9375rem] leading-relaxed">
                  {{ s.items }}
                </dd>
              </div>
            </dl>
          </div>
      </div>
    </div>
  </section>
</template>
