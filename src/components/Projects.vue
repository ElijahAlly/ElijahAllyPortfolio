<script setup lang="ts">
import { ref } from 'vue';
const projects = ref([
  {
    title: "Cenova Spark Gov Contracting",
    link: "https://cenovaspark.com/",
    description:
    "This is my government contracting company (registered Nov 2025). We focus on Cloud Solutions and Full-Stack Engineering. Minority-owned, soon to be SBA certified, and cleared for TS/CI work.",
    image: "cenova-spark-gov-contracting.png",
  },
  {
    title: "PGP Vault",
    link: "https://pgp-vault.vercel.app/",
    description:
    "Another chat app, but I used industrial-strength OpenPGP encryption. It has been a great learning experience about security on the web.",
    image: "pgp-vault.png",
  },
  {
    title: "Toogether.love",
    link: "https://toogether.love",
    description:
    "I created a safe space for couples to share their journey, memories, and love story on their own private corner of the internet. ",
    image: "toogether_love.png",
  },
  {
    title: "MyTrees.family",
    link: "https://mytrees.family/",
    description:
    "A Family Tree App, that I designed it to be modern and easy to share. I worked closely with my relatives to get the design and implementation correct.",
    image: "my-trees_family.png",
  },
]);

const getImageUrl = (imageName: string) => {
  return new URL(`../assets/img/projects/${imageName}`, import.meta.url).href;
};
</script>

<template>
  <section id="projects" class="bg-gray-900 py-20 px-6 text-white">
    <div class="max-w-6xl mx-auto">
      <h2 class="text-4xl font-bold text-center mb-16 text-teal-400 drop-shadow">
        My Creative Works
      </h2>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        <div
          v-for="project in projects"
          :key="project.title"
          class="bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 group overflow-hidden"
        >
          <a :href="project.link" target="_blank" rel="noopener noreferrer">
            <img
              :src="getImageUrl(project.image)"
              :alt="project.title"
              class="w-full h-48 rounded-t-xl bg-cover bg-center"
            />
            <div class="p-6">
                <h3 class="text-2xl font-semibold mb-3 text-indigo-300 group-hover:text-teal-400 transition-colors">
                    {{ project.title }}
                </h3>
                <p class="text-gray-400 text-base leading-relaxed">
                    {{ project.description }}
                </p>
            </div>
          </a>
        </div>
      </div>
    </div>
    <div class="text-center mt-16">
      <a
        class="inline-block px-8 py-3 bg-linear-to-r from-indigo-600 to-purple-700 text-white font-bold rounded-full shadow-lg hover:from-indigo-700 hover:to-purple-800 transform hover:scale-105 transition duration-300 ease-in-out"
        href="https://github.com/ElijahAlly"
        target="_blank"
      >
        View All Projects on GitHub
      </a>
    </div>
  </section>
</template>