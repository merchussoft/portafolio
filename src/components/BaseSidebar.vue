<script setup>
import { ref } from "vue";
import { RouterLink, useRoute } from "vue-router";
import { menuLinks } from "@/data/menuLinks";

const isOpen = ref(false);
const route = useRoute();
</script>

<template>
  <!-- Sidebar Desktop -->
  <nav
    class="bg-[#011627] text-white fixed top-0 h-full w-64 hidden lg:flex flex-col items-center justify-center z-50"
  >
    <!-- Contenedor centrado -->
    <div class="flex flex-col items-center space-y-10">
      <!-- Imagen perfil -->
      <img
        src="../assets/foto_perfil.jpg"
        alt="Foto de perfil"
        class="w-32 h-32 rounded-full border-4 border-orange-300 shadow"
      />

      <!-- Menú -->
      <ul class="flex flex-col items-center space-y-6 text-sm font-semibold uppercase tracking-wide">
        <li v-for="link in menuLinks" :key="link.name">
          <RouterLink
            :to="{ hash: link.href }"
            class="hover:text-white transition"
            :class="route.hash === link.href ? 'text-white font-bold' : 'text-orange-200'"
          >
            {{ link.name }}
          </RouterLink>
        </li>
      </ul>
    </div>
  </nav>

  <!-- Navbar Móvil -->
  <div
    class="lg:hidden fixed top-0 left-0 w-full bg-[#011627] text-white z-50 shadow-md"
  >
    <div class="flex justify-between items-center p-4">
      <span class="font-bold uppercase">Daniel Merchan</span>

      <button @click="isOpen = !isOpen" class="focus:outline-none">
        <!-- Icono Hamburguesa -->
        <svg
          v-if="!isOpen"
          class="w-6 h-6"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>

        <!-- Icono Cerrar -->
        <svg
          v-else
          class="w-6 h-6"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>

    <!-- Dropdown -->
    <transition name="fade">
      <ul v-if="isOpen" class="px-4 pb-4 space-y-2">
        <li v-for="link in menuLinks" :key="link.name">
          <RouterLink
            :to="{ hash: link.href }"
            @click="isOpen = false"
            class="block py-2 px-3 rounded hover:bg-orange-600 transition"
            :class="route.hash === link.href ? 'bg-orange-800 font-bold' : ''"
          >
            {{ link.name }}
          </RouterLink>
        </li>
      </ul>
    </transition>
  </div>
</template>
