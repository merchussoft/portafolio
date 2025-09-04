<template>
  <section id="skills" class="flex items-center px-4 py-20 h-screen max-w-[75rem] mx-auto">
    <div>
      <!-- Título -->
      <h2 class="text-3xl font-bold mb-8 text-[#b5b5b5]">Habilidades</h2>

      <!-- Programming Languages & Tools -->
      <div class="mb-6">
        <h3 class="text-lg font-semibold mb-3 text-white">
          Lenguajes y herramientas de programación
        </h3>
        <div class="flex flex-wrap gap-6 text-white text-4xl">
          <!-- Iteración de íconos -->
          <Icon v-for="icon in icons" :key="icon" :icon="icon" />
        </div>
      </div>

      <!-- Workflow -->
      <div>
        <h3 class="text-lg font-semibold mb-3 text-white">Workflow</h3>
        <ul class="space-y-2 text-white">
          <li v-for="(item, index) in workflow" :key="index" class="flex items-center">
            <Icon icon="mdi:check" class="text-green-600 mr-2" />
            <span>{{ item }}</span>
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
  "logos:docker-icon",   // Docker
  "logos:php",           // PHP
  "logos:mysql",         // MySQL
  "logos:linux-tux",      // Linux
  "logos:mongodb-icon",   // MongoDB
  "logos:postgresql"      // PostgreSQL
];

const workflow = [
  "Docker a nivel basico.",
  "Capacitacion en react-native, react, vue.js.",
  "Trabajo en equipo.",
  "Desarrollo ágil y Scrum",
];
</script>
