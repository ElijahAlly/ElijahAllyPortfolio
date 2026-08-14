<script setup lang="ts">
/* Reverse-chronological. The dates are the structure — they carry the
   information a reader is actually scanning for. */
const roles = [
  {
    org: "Cenova Spark",
    role: "Founder & CEO",
    from: "Nov 2025",
    to: "Present",
    current: true,
    stack: "Company operations, product, engineering",
    points: [
      "Founded and registered the company on SAM.gov as a minority-owned small business, with a CAGE code and five NAICS codes on file.",
      "Set product direction and wrote production code for both shipped products, AddisDB and Towback.",
    ],
  },
  {
    org: "AFS",
    sub: "subcontractor with Gridiron",
    role: "Software Engineer",
    from: "Mar 2026",
    to: "Present",
    current: true,
    stack: "React · Django · Python · AWS S3, CloudFront, API Gateway",
    points: [
      "Full-stack development on a federal program, using Claude Code to strengthen the application's test coverage and deployment lifecycle.",
      "Manage the in-house AI chatbot used by teams across the whole program.",
      "Maintain a read-only application fed by many upstream data sources, which needs constant attention to stay accurate.",
    ],
  },
  {
    org: "Vibrint",
    role: "Software Engineer",
    from: "Aug 2025",
    to: "Mar 2026",
    stack: "React · Django · Python · AWS · Fullstack",
    points: [
      "Maintained and deployed an application to production onsite, working alongside other developers and DevOps engineers.",
      "Hands-on with the awscli and AWS services including S3, Lambda and CloudFront.",
      "Led a project to build a dashboard from the ground up — ran the customer conversations and planned the UI design and tech stack with the team.",
    ],
  },
  {
    org: "Bowhead UICGS",
    role: "Software Engineer",
    from: "Apr 2024",
    to: "Aug 2025",
    stack: "Java · Spring Boot · Maven · Vue · Docker · SQL",
    points: [
      "Generally considered the lead frontend developer, while working full-stack across multiple applications.",
      "Built a Java service that draws a chart and adds it to an existing PDF.",
      "Built an in-house Vue and Java tool for managing organization charts in both tree-hierarchy and table views — recursive rendering with a deep dependence on Vue 3 and performant data queries.",
    ],
  },
  {
    org: "Treez Inc",
    role: "Software Engineer",
    from: "Jan 2022",
    to: "Oct 2023",
    stack: "React Native · iOS · Java · React · PostgreSQL",
    points: [
      "Led React Native development and maintenance of the iOS intake app, including the Scandit API for scanning IDs and licenses.",
      "Worked on the web application with React/TypeScript on the frontend and Java on the backend.",
      "Shared on-call duty, unblocking customers by debugging production issues with ElasticSearch, FullStory and SSH.",
    ],
  },
  {
    org: "App Academy",
    role: "Technical Instructor",
    from: "Sep 2021",
    to: "Jan 2022",
    stack: "React · JavaScript · Ruby · Python",
    points: [
      "Assessed applicants on data structures and algorithms, and on whether they could complete a rigorous coding course.",
    ],
  },
];

const education = [
  {
    org: "App Academy",
    detail: "Software engineering program, 3% acceptance rate",
    when: "2021",
  },
  {
    org: "Rose-Hulman Institute of Technology",
    detail:
      "Mechanical engineering coursework; accepted into ESCALATE, the institute's entrepreneurship program",
    when: "2019 – 2020",
  },
];
</script>

<template>
  <section id="record" class="section">
    <div class="shell">
      <div class="sec-head reveal">
        <span class="spark" aria-hidden="true"></span>
        <h2 class="eyebrow">Past performance</h2>
      </div>

      <p class="display-sm text-[clamp(1.6rem,3.4vw,2.5rem)] max-w-[24ch] reveal">
        Five years of shipping, most of it on federal programs.
      </p>

      <ol class="mt-14">
        <li
          v-for="r in roles"
          :key="r.org"
          class="reveal grid md:grid-cols-[10.5rem_1fr] gap-x-10 gap-y-4 py-9 border-t border-rule last:border-b"
        >
          <!-- Dates: the spine of the section -->
          <div class="md:pt-1">
            <p class="datum text-[0.8125rem] text-ink-2 leading-relaxed">
              {{ r.from }}
              <span class="text-ink-3">→</span>
              <span :class="r.current ? 'text-verify font-medium' : ''">{{
                r.to
              }}</span>
            </p>
            <p
              v-if="r.current"
              class="datum text-[0.625rem] uppercase tracking-[0.14em] text-verify mt-1.5"
            >
              Current
            </p>
          </div>

          <div>
            <h3 class="display-sm text-[1.375rem] md:text-2xl">
              {{ r.role }}
              <span class="text-ink-3 font-normal">/</span>
              {{ r.org }}
            </h3>
            <p v-if="r.sub" class="text-ink-3 text-[0.875rem] mt-1 italic">
              {{ r.sub }}
            </p>
            <p class="datum text-[0.75rem] text-accent mt-2.5 leading-relaxed">
              {{ r.stack }}
            </p>
            <ul class="mt-4 space-y-2.5 max-w-[62ch]">
              <li
                v-for="(pt, i) in r.points"
                :key="i"
                class="text-ink-2 text-[0.9375rem] leading-relaxed pl-5 relative before:absolute before:left-0 before:top-[0.7em] before:w-2 before:h-px before:bg-rule"
              >
                {{ pt }}
              </li>
            </ul>
          </div>
        </li>
      </ol>

      <!-- Education -->
      <div class="mt-16 reveal">
        <p class="eyebrow mb-5">Education</p>
        <dl class="border-t border-rule">
          <div
            v-for="e in education"
            :key="e.org"
            class="grid md:grid-cols-[10.5rem_1fr] gap-x-10 gap-y-1 py-5 border-b border-rule-2"
          >
            <dt class="datum text-[0.8125rem] text-ink-3 md:pt-0.5">
              {{ e.when }}
            </dt>
            <dd>
              <p class="font-semibold text-ink">{{ e.org }}</p>
              <p class="text-ink-2 text-[0.9375rem] leading-relaxed mt-0.5">
                {{ e.detail }}
              </p>
            </dd>
          </div>
        </dl>
      </div>
    </div>
  </section>
</template>
