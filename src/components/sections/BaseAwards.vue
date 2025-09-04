<script setup>
import { Trophy } from "lucide-vue-next";

const awards = [
  "Google Analytics Certified Developer",
  "Mobile Web Specialist - Google Certification",
  "1st Place - University of Colorado Boulder - Emerging Tech Competition 2009",
  "1st Place - University of Colorado Boulder - Adobe Creative Jam 2008 (UI Design Category)",
  "2nd Place - University of Colorado Boulder - Emerging Tech Competition 2008",
  "1st Place - James Buchanan High School - Hackathon 2006",
  "3rd Place - James Buchanan High School - Hackathon 2005"
];
</script>

<template>
  <section id="awards" class="flex items-center px-4 py-20 h-screen max-w-[75rem] mx-auto">
    <div>
      <!-- Título -->
      <h2 class="text-3xl font-bold mb-6 text-[#b5b5b5]">Awards & Certifications</h2>

      <!-- Lista -->
      <ul class="space-y-3">
        <li
          v-for="(award, index) in awards"
          :key="index"
          class="flex items-start gap-2 text-[#f4f5ff]"
        >
          <!-- Icono -->
          <Trophy class="w-5 h-5 text-yellow-500 mt-1" />

          <!-- Texto -->
          <span v-html="award"></span>
        </li>
      </ul>
    </div>
  </section>
</template>
