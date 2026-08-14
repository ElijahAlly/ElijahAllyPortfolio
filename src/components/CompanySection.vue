<script setup lang="ts">
const differentiators = [
  {
    title: "Rapid prototyping and deployment",
    body: "A working prototype in front of the customer early, then a straight line from there to an accredited production release.",
  },
  {
    title: "Zero-trust security architecture",
    body: "Encrypted transmission and federal-compliant protocols designed in from the first commit, not bolted on before an audit.",
  },
  {
    title: "Agile and scalable methodology",
    body: "Small teams, short cycles, and infrastructure that holds up when the program grows past its original scope.",
  },
];
</script>

<template>
  <section id="company" class="section">
    <div class="shell">
      <div class="sec-head reveal">
        <span class="spark" aria-hidden="true"></span>
        <h2 class="eyebrow">The company</h2>
      </div>

      <div class="grid lg:grid-cols-[1.15fr_1fr] gap-x-16 gap-y-12">
        <div class="reveal">
          <p class="display-sm text-[clamp(1.6rem,3.4vw,2.5rem)] max-w-[22ch]">
            Cenova Spark — Igniting Innovation in Government Technology
          </p>
          <p class="mt-7 text-ink-2 leading-relaxed max-w-[52ch]">
            I founded the company in November 2025 and registered it on SAM.gov
            as a minority-owned small business. It is set up to take contracts
            today: registration active through July 2027, CAGE code issued, five
            NAICS codes on file, and a principal who holds an active TS/CI
            clearance.
          </p>
          <p class="mt-5 text-ink-2 leading-relaxed max-w-[52ch]">
            The proof is shipped software. Two products are live and in
            production, both engineered under the same standards we bring to
            client work.
          </p>

          <a
            href="https://cenovaspark.com"
            target="_blank"
            rel="noopener"
            class="inline-flex items-center gap-2.5 mt-9 h-12 px-6 border border-rule text-ink hover:border-accent hover:text-accent transition-colors datum text-[0.8125rem] uppercase tracking-[0.12em]"
          >
            cenovaspark.com
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

        <ul
          class="reveal flex flex-col justify-between"
          style="transition-delay: 0.1s"
        >
          <li
            v-for="d in differentiators"
            :key="d.title"
            class="flex-1 flex flex-col justify-center py-6 border-t border-rule last:border-b"
          >
            <h3 class="display-sm text-lg">{{ d.title }}</h3>
            <p class="mt-2 text-ink-2 text-[0.9375rem] leading-relaxed">
              {{ d.body }}
            </p>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
