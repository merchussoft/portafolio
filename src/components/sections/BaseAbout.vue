<script setup>
import Twitter from "lucide-vue-next/dist/esm/icons/twitter";
import Github from "lucide-vue-next/dist/esm/icons/github";
import Linkedin from "lucide-vue-next/dist/esm/icons/linkedin";
import Facebook from "lucide-vue-next/dist/esm/icons/facebook";

const socialLinks = [
  { icon: Linkedin, url: "https://www.linkedin.com/in/daniel-merchan-565a56158" },
  { icon: Github, url: "https://github.com/merchussoft" },
  { icon: Twitter, url: "https://twitter.com" },
  { icon: Facebook, url: "https://facebook.com" },
];
</script>

<template>
  <section
    id="about"
    class="flex items-center px-4 py-20 h-screen max-w-6xl mx-auto"
  >
    <div class="w-full">
      <!-- Nombre -->
      <h1 class="mb-2 text-5xl font-extrabold tracking-tight text-white">
        DANIEL <span class="text-[#c6c6c6]">MERCHAN</span>
      </h1>

      <!-- Dirección y contacto -->
      <div class="uppercase font-medium mb-6 text-[#fff] text-sm">
        +57 (317) 363 4779 -
        <a
          href="mailto:merchandaniel1985@outlook.com"
          class="text-[#c6c6c6] hover:underline"
        >
          merchandaniel1985@outlook.com
        </a>
      </div>

      <!-- Descripción -->
      <p class="text-lg font-light mb-8 text-[#f4f5ff] max-w-3xl text-justify leading-relaxed">
        Enfocado en la optimización de código, escalabilidad y buenas prácticas, con experiencia trabajando bajo metodologías ágiles (Scrum) y fomentando la colaboración en equipos multidisciplinarios. Apasionado por el backend development, sin dejar de lado la exploración de tecnologías fullstack que potencien el valor de los proyectos.
      </p>

      <!-- Íconos sociales -->
      <div class="flex space-x-4">
        <a
          v-for="link in socialLinks"
          :key="link.url"
          :href="link.url"
          target="_blank"
          class="w-12 h-12 flex items-center justify-center rounded-full bg-gray-700 text-white hover:bg-orange-600 transition"
        >
          <component :is="link.icon" class="w-5 h-5 text-white" />
        </a>
      </div>
    </div>
  </section>
</template>
