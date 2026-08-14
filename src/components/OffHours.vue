<script setup lang="ts">
const items = [
  {
    label: "Surfing",
    body: "Learned in Puerto Rico. I still get out whenever the waves are worth the drive.",
  },
  {
    label: "Track & field",
    body: "Short sprints, in high school and at Rose-Hulman.",
  },
];
</script>

<template>
  <section class="section">
    <div class="shell">
      <div class="grid md:grid-cols-[10.5rem_1fr] gap-x-10 gap-y-6 reveal">
        <p class="eyebrow md:pt-1.5">Off hours</p>
        <dl class="grid sm:grid-cols-2 gap-x-12 gap-y-6 max-w-[52rem]">
          <div v-for="i in items" :key="i.label">
            <dt class="display-sm text-lg">{{ i.label }}</dt>
            <dd class="mt-1.5 text-ink-2 text-[0.9375rem] leading-relaxed">
              {{ i.body }}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  </section>
</template>
