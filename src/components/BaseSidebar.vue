<script setup>
import { ref } from "vue";
import { RouterLink, useRoute } from "vue-router";
import { menuLinks } from "@/data/menuLinks";

const isOpen = ref(false);
const route = useRoute();
</script>

<template>
  <!-- 🌙 Sidebar (Versión Desktop) -->
  <nav
    class="fixed top-0 left-0 h-full w-64 hidden lg:flex flex-col items-center justify-center
           bg-gradient-to-b from-[#0a0a0a] via-[#06161a] to-[#001d1a]
           border-r border-[#00bfa61a] shadow-[4px_0_25px_#00bfa620] z-50"
  >
    <div class="flex flex-col items-center space-y-10">
      <!-- 🧑 Imagen de perfil -->
      <div class="relative group">
        <img
          src="../assets/foto_perfil.jpg"
          alt="Foto de perfil"
          class="w-32 h-32 rounded-full border-2 border-[#00BFA6] shadow-lg shadow-[#00bfa640]
                 transition-transform duration-500 group-hover:scale-105"
        />
        <div
          class="absolute inset-0 rounded-full border-2 border-[#00BFA6]/40 blur-md opacity-0
                 group-hover:opacity-100 transition duration-500"
        ></div>
      </div>

      <!-- 🔗 Enlaces de navegación -->
      <ul
        class="flex flex-col items-center space-y-6 text-sm font-medium uppercase tracking-wider"
      >
        <li v-for="link in menuLinks" :key="link.name" class="relative group">
          <RouterLink
            :to="{ hash: link.href }"
            class="transition-all duration-300"
            :class="
              route.hash === link.href
                ? 'text-[#00BFA6] font-semibold'
                : 'text-[#b5b5b5] hover:text-[#00BFA6]'
            "
          >
            {{ link.name }}
          </RouterLink>

          <!-- Línea animada debajo -->
          <span
            class="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-[#00BFA6] transition-all duration-300 group-hover:w-full"
          ></span>
        </li>
      </ul>
    </div>
  </nav>

  <!-- 📱 Navbar (Versión Móvil) -->
  <div
    class="lg:hidden fixed top-0 left-0 w-full bg-[#0a0a0a]/90 backdrop-blur-md text-white
           z-50 border-b border-[#00bfa620] shadow-md"
  >
    <div class="flex justify-between items-center p-4">
      <span class="font-semibold tracking-wide text-[#00BFA6] uppercase">
        Daniel Merchan
      </span>

      <button @click="isOpen = !isOpen" class="focus:outline-none">
        <!-- Icono Hamburguesa -->
        <svg
          v-if="!isOpen"
          class="w-7 h-7 text-[#00BFA6]"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          viewBox="0 0 24 24"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>

        <!-- Icono Cerrar -->
        <svg
          v-else
          class="w-7 h-7 text-[#00BFA6]"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          viewBox="0 0 24 24"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>

    <!-- 🔽 Menú desplegable -->
    <transition name="fade">
      <ul
        v-if="isOpen"
        class="px-5 pb-5 space-y-2 bg-gradient-to-b from-[#0a0a0a] to-[#001d1a] border-t border-[#00bfa620]"
      >
        <li v-for="link in menuLinks" :key="link.name">
          <RouterLink
            :to="{ hash: link.href }"
            @click="isOpen = false"
            class="block py-2 px-3 rounded-md transition-all duration-300"
            :class="
              route.hash === link.href
                ? 'bg-[#00BFA6] text-black font-semibold'
                : 'text-[#f4f5ff] hover:bg-[#00bfa630]'
            "
          >
            {{ link.name }}
          </RouterLink>
        </li>
      </ul>
    </transition>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
