<script setup lang="ts"></script>

<template>
  <section id="about" class="bg-linear-to-b from-black to-gray-800 text-white py-20 px-6 border-t border-gray-500">
    <div class="max-w-4xl mx-auto text-center">
      <h2 class="text-4xl font-bold mb-12 text-teal-600 drop-shadow">About Me</h2>

      <!-- Introduction / Software Engineer -->
      <div class="mb-14">
        <h3 class="text-3xl font-semibold mb-5 text-indigo-500">Software Engineer</h3>
        <p class="text-gray-300 leading-relaxed text-lg mb-4">
          Hi, I'm a full-stack software engineer with a strong background in both
          frontend and backend development. My passion lies in building robust
          and scalable applications. I'm proficient in:
          <span class="font-semibold text-teal-400">
            Java, Vue, Rust, React, TypeScript, TailwindCSS, Redux, Nuxt.js,
            Ruby on Rails, MongoDB, Docker, AWS (S3, CloudFront, Lambda, IAM),
            Python, Django, PostgreSQL, Node.js, Express.js, and more.
          </span>
          I thrive on constantly learning new technologies and solving complex
          problems through collaborative efforts.
        </p>
        <p class="text-gray-300 leading-relaxed text-lg">
          I'm skilled in leading projects, deploying to production, and
          optimizing performance. My experience ranges from developing dynamic
          user interfaces and robust APIs to implementing advanced privacy
          features and handling cloud infrastructure.
        </p>
      </div>

      <!-- Experience Summary (New Section) -->
      <div class="mb-14 text-left">
        <h3 class="text-3xl font-semibold mb-6 text-indigo-500 text-center">My Journey</h3>
        <ul class="space-y-6 text-gray-300 text-lg">
          <li>
            <strong class="text-teal-600">Vibrint (Aug 2025 - Present):</strong>
            Joined as a software developer, maintaining and deploying apps to
            production. Gained hands-on experience with AWS services like S3,
            Lambda, and CloudFront. I led a project to build a dashboard,
            collaborating closely with customers and my team on UI design and
            tech stack.
          </li>
          <li>
            <strong class="text-teal-600">Bowhead UICGS (Apr 2024 - Aug 2025):</strong>
            Was the lead frontend developer, I also worked as a
            full-stack engineer. Developed Java services for PDF charting and
            built an in-house Vue/Java tool for org chart management, leveraging
            recursion and performing data queries efficiently.
          </li>
          <li>
            <strong class="text-teal-600">Treez Inc (Jan 2022 - Oct 2023):</strong>
            Led React Native development for our iOS intake app and became
            proficient with Scandit API for scanning IDs. I contributed to our
            web application using React/TypeScript and Java, shared on-call
            responsibilities, and debugged production issues using
            ElasticSearch, FullStory, and SSH. Achieved AWS Cloud Practitioner
            Certification.
          </li>
          <li>
            <strong class="text-teal-600">App Academy (Sep 2021 - Jan 2022):</strong>
            As a Technical Instructor, I tested applicants on Data Structures
            & Algorithms, evaluated their soft skills and technical expertise,
            and assessed their capability for a rigorous coding course.
          </li>
        </ul>
      </div>

      <!-- Music Producer -->
      <div class="mb-14">
        <h3 class="text-3xl font-semibold mb-5 text-indigo-500">Music Producer</h3>
        <p class="text-gray-300 leading-relaxed text-lg">
          Music production is a significant and entertaining passion. Starting
          with an Akai MPC One alongside my brother, we progressed to Logic Pro X.
          I now produce music in my free time - listen on my YT channel
          <a
            href="https://www.youtube.com/@musabytemusic"
            target="_blank"
            class="text-teal-600 hover:text-teal-400 underline underline-offset-4 hover:decoration-wavy transition-all duration-200"
            >MusaByte Music</a
          >
        </p>
      </div>

      <!-- Surfer -->
      <div>
        <h3 class="text-3xl font-semibold mb-5 text-indigo-500">Surfer</h3>
        <p class="text-gray-300 leading-relaxed text-lg">
          The ocean is my escape. I've been surfing since I was 14, embracing
          every moment in the water. It's a great way to stay grounded and
          energized!
        </p>
      </div>
    </div>
  </section>
</template>