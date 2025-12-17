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
      'fixed top-0 w-full transition-all duration-300 z-50',
      isShrunk
        ? 'bg-gray-900 bg-opacity-95 shadow-xl py-3'
        : 'bg-transparent py-6',
    ]"
  >
    <div class="max-w-7xl mx-auto flex justify-between items-center px-6">
      <div class="flex items-center gap-3">
        <img
          src="@/assets/img/profile-pic.png"
          class="w-10 h-10 rounded-full border-2 border-teal-400 shadow-md"
          alt="Profile picture"
        />
        <a
          href="#page-top"
          class="text-white font-extrabold text-lg tracking-wide hover:text-teal-300 transition-colors"
        >
          Elijah Ally
        </a>
      </div>

      <!-- Navigation links for larger screens -->
      <div class="hidden md:flex gap-8 text-white text-lg font-medium">
        <a
          href="#about"
          class="hover:text-teal-400 transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-teal-400 after:scale-x-0 after:origin-left hover:after:scale-x-100 after:transition-transform after:duration-300"
          >About</a
        >
        <a
          href="#projects"
          class="hover:text-teal-400 transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-teal-400 after:scale-x-0 after:origin-left hover:after:scale-x-100 after:transition-transform after:duration-300"
          >Projects</a
        >
        <a
          href="#contact-me"
          class="hover:text-teal-400 transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-teal-400 after:scale-x-0 after:origin-left hover:after:scale-x-100 after:transition-transform after:duration-300"
          >Contact</a
        >
      </div>

      <!-- Mobile menu button (optional - needs implementation) -->
      <!-- <button class="md:hidden text-white text-2xl">
        <i class="fas fa-bars"></i>
      </button> -->
    </div>
  </nav>
</template>