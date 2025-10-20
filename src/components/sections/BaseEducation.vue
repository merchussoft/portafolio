<template>
  <section id="education" class="flex flex-col justify-center px-6 py-20 min-h-screen max-w-[75rem] mx-auto">
    <div>
      <h2 class="text-4xl font-bold mb-12 text-[#e6e6e6] tracking-wide">Educación</h2>

      <div
        v-for="(item, index) in education"
        :key="index"
        class="flex flex-col md:flex-row justify-between mb-10 border-b border-gray-700/20 pb-5 group transition-all duration-200"
      >
        <div class="flex-1">
          <h3 class="text-xl font-semibold text-white group-hover:text-[#00df9a] transition-colors">
            {{ item.institution }}
          </h3>
          <p class="text-lg text-gray-400 mt-1">{{ item.title }}</p>
        </div>
        <div class="mt-3 md:mt-0 text-gray-500 flex items-center gap-2 text-sm">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-[#00df9a]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2
              2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          {{ item.date }}
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
  import { education } from '@/data/dataEducation';

</script>
