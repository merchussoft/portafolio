<template>
  <section
    id="skills"
    class="flex flex-col justify-center px-6 py-24 h-screen max-w-[75rem] mx-auto bg-[#0a0a0a]"
  >
    <div>
      <!-- Título -->
      <h2 class="text-4xl font-extrabold mb-10 text-[#00BFA6] uppercase tracking-wide">
        Habilidades
      </h2>

      <!-- Lenguajes y Herramientas -->
      <div class="mb-12">
        <h3 class="text-xl font-semibold mb-4 text-[#E6E6E6]">
          Lenguajes y herramientas de programación
        </h3>

        <div
          class="flex flex-wrap gap-8 text-[#F4F5FF] text-4xl items-center bg-[#111] p-6 rounded-2xl shadow-md shadow-[#00bfa640]"
        >
          <Icon
            v-for="icon in icons"
            :key="icon"
            :icon="icon"
            class="hover:scale-125 transition-transform duration-300"
          />
        </div>
      </div>

      <!-- Workflow -->
      <div>
        <h3 class="text-xl font-semibold mb-4 text-[#E6E6E6]">Flujo de trabajo</h3>
        <ul
          class="space-y-3 bg-[#111] p-6 rounded-2xl shadow-md shadow-[#00bfa640] text-[#F4F5FF]"
        >
          <li
            v-for="(item, index) in workflow"
            :key="index"
            class="flex items-center"
          >
            <Icon icon="mdi:check-circle-outline" class="text-[#00BFA6] mr-3 text-2xl" />
            <span class="leading-relaxed">{{ item }}</span>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Icon } from "@iconify/vue";

const icons = [
  "vscode-icons:file-type-html",
  "vscode-icons:file-type-css",
  "logos:javascript",
  "logos:react",
  "logos:vue",
  "logos:nodejs-icon",
  "logos:npm-icon",
  "logos:docker-icon",
  "logos:php",
  "logos:mysql",
  "logos:linux-tux",
  "logos:mongodb-icon",
  "logos:postgresql"
];

const workflow = [
  "Docker a nivel básico.",
  "Capacitación en React Native, React y Vue.js.",
  "Trabajo colaborativo y comunicación efectiva.",
  "Desarrollo ágil bajo metodología Scrum."
];
</script>

<style scoped>
section {
  scroll-snap-align: start;
}
</style>
