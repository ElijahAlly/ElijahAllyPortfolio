<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

const isShrunk = ref(false);

const onScroll = () => {
  isShrunk.value = window.scrollY > 0;
};

onMounted(() => window.addEventListener("scroll", onScroll));
onUnmounted(() => window.removeEventListener("scroll", onScroll));
</script>

<template>
  <nav
    :class="[
      'fixed top-0 w-full transition-all z-50',
      isShrunk ? 'bg-black shadow-lg py-2' : 'bg-transparent py-6',
    ]"
  >
    <div class="max-w-7xl mx-auto flex justify-between items-center px-6">
      <div class="flex items-center gap-3">
        <img
          src="@/assets/img/profile-pic.png"
          class="w-10 h-10 rounded-full"
        />
        <a href="#page-top" class="text-white font-semibold">
          Elijah Ally
        </a>
      </div>

      <div class="hidden md:flex gap-6 text-white">
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact-me">Contact</a>
      </div>
    </div>
  </nav>
</template>