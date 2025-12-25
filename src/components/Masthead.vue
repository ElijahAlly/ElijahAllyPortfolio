<script setup lang="ts"></script>

<template>
  <header
    id="page-top"
    class="relative h-screen flex items-center justify-center bg-[url('@/assets/img/backgrounds/simple-code-icon.png')] bg-position-[center_top_96%] md:bg-position-[center_top_78%]"
  >
    <div
      class="absolute inset-0 bg-linear-to-t from-black to-transparent opacity-70"
    ></div>

    <div class="relative z-10 text-center p-6">
      <h1
        class="text-5xl md:text-7xl font-extrabold text-white uppercase mb-4 tracking-tight drop-shadow-lg"
      >
        Elijah Ally
      </h1>
      <h2
        class="text-white/80 text-xl md:text-2xl mb-8 font-light italic drop-shadow"
      >
        Software Engineer | Music Producer | Surfer
      </h2>
      <a
        href="#about"
        class="inline-block px-8 py-3 bg-linear-to-r from-teal-500 to-indigo-600 text-white font-bold rounded-full shadow-lg hover:from-teal-600 hover:to-indigo-700 transform hover:scale-105 transition duration-300 ease-in-out"
      >
        Explore More
      </a>
    </div>
  </header>
</template>