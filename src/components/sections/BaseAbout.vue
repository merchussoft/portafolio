<script setup>
//import Twitter from "lucide-vue-next/dist/esm/icons/twitter";
import Github from "lucide-vue-next/dist/esm/icons/github";
import Linkedin from "lucide-vue-next/dist/esm/icons/linkedin";
import Facebook from "lucide-vue-next/dist/esm/icons/facebook";

const socialLinks = [
  { icon: Linkedin, url: "https://www.linkedin.com/in/daniel-merchan-565a56158" },
  { icon: Github, url: "https://github.com/merchussoft" },
  //{ icon: Twitter, url: "https://twitter.com" },
  { icon: Facebook, url: "https://www.facebook.com/fpsoymerchux/" },
];
</script>

<template>
  <section
    id="about"
    class="flex items-center px-6 py-24 h-screen max-w-[75rem] mx-auto bg-[#0a0a0a]"
  >
    <div class="w-full">
      <!-- Nombre -->
      <h1 class="mb-4 text-6xl font-extrabold tracking-tight text-[#F4F5FF] uppercase">
        Daniel <span class="text-[#00BFA6]">Merchan</span>
      </h1>

      <!-- Contacto -->
      <div class="uppercase font-medium mb-8 text-[#b5b5b5] text-sm tracking-wide">
        +57 (317) 363 4779 —
        <a
          href="mailto:merchandaniel1985@outlook.com"
          class="text-[#00BFA6] hover:underline transition-colors duration-300"
        >
          merchandaniel1985@outlook.com
        </a>
      </div>

      <!-- Descripción -->
      <p
        class="text-lg font-light mb-12 text-[#E6E6E6] max-w-3xl text-justify leading-relaxed"
      >
        Desarrollador <strong class="text-[#00BFA6]">fullstack</strong> orientado a la optimización,
        escalabilidad y buenas prácticas. Experiencia trabajando bajo metodologías
        <strong>ágiles (Scrum)</strong>, fomentando la colaboración en equipos multidisciplinarios.
        Apasionado por el <strong>backend development</strong> y la integración de tecnologías
        <strong>fullstack</strong> que aporten valor real a cada proyecto.
      </p>

      <!-- Íconos sociales -->
      <div class="flex space-x-5">
        <a
          v-for="link in socialLinks"
          :key="link.url"
          :href="link.url"
          target="_blank"
          class="w-12 h-12 flex items-center justify-center rounded-full bg-[#111] text-white border border-[#00BFA6]/40 hover:bg-[#00BFA6] hover:text-black transition-all duration-300 shadow-md shadow-[#00bfa620]"
        >
          <component :is="link.icon" class="w-5 h-5" />
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
section {
  scroll-snap-align: start;
}
</style>
