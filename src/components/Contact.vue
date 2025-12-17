<script setup lang="ts"></script>

<template>
    <section id="contact-me" class="bg-linear-to-b from-slate-800 to-slate-950 text-white py-20 px-6 overflow-hidden">
        <div class="max-w-6xl mx-auto overflow-hidden">
            <h2 class="text-4xl font-bold text-center mb-16 text-teal-400 drop-shadow">
                Get In Touch
            </h2>

            <div class="grid md:grid-cols-3 gap-12 text-center overflow-hidden py-2 px-9">
                <!-- Location Card -->
                <div class="bg-gray-800 p-8 rounded-xl shadow-lg flex flex-col items-center transform hover:scale-105 transition-transform duration-300">
                    <i class="fas fa-map-marked-alt text-indigo-500 text-4xl mb-6 animate-bounce"></i>
                    <h4 class="font-semibold text-2xl mb-3 text-indigo-300">Location</h4>
                    <p class="text-gray-400 text-lg">Maryland (DMV Area), USA</p>
                </div>

                <!-- Email Card -->
                <div class="bg-gray-800 p-8 rounded-xl shadow-lg flex flex-col items-center transform hover:scale-105 transition-transform duration-300">
                    <i class="fas fa-envelope text-indigo-500 text-4xl mb-6 animate-pulse"></i>
                    <h4 class="font-semibold text-2xl mb-3 text-indigo-300">Email</h4>
                    <a
                        href="mailto:elijahally18@gmail.com"
                        class="text-teal-400 hover:text-teal-300 underline underline-offset-4 hover:decoration-wavy transition-all duration-200 text-lg"
                        >elijahally18@gmail.com</a
                    >
                </div>

                <!-- Profile Picture Card -->
                <div class="bg-gray-800 p-8 rounded-xl shadow-lg flex flex-col items-center transform hover:scale-105 transition-transform duration-300">
                    <img
                        src="@/assets/img/profile-pic.png"
                        class="w-32 h-32 mx-auto rounded-full ring-4 ring-indigo-500 shadow-md mb-6"
                        alt="Elijah's profile"
                    />
                    <h4 class="font-semibold text-2xl mb-3 text-indigo-300">Elijah Ally</h4>
                </div>
            </div>

            <div class="flex justify-center gap-8 mt-16 text-3xl">
                <a
                    href="https://github.com/ElijahAlly"
                    class="text-gray-400 hover:text-teal-400 transform hover:scale-125 transition-transform duration-300"
                    target="_blank"
                    aria-label="GitHub"
                >
                <i class="fab fa-github"></i>
                </a>
                <a
                    href="https://www.linkedin.com/in/elijah-ally-123ea/"
                    class="text-gray-400 hover:text-teal-400 transform hover:scale-125 transition-transform duration-300"
                    target="_blank"
                    aria-label="LinkedIn"
                >
                <i class="fab fa-linkedin"></i>
                </a>
            </div>
        </div>
    </section>
</template>