<!-- EducationSection.vue -->
<template>
  <section id="education" class="flex items-center px-4 py-20 h-screen max-w-[75rem] mx-auto">
    <div>
      <h2 class="text-3xl font-bold mb-8 text-[#b5b5b5]">Education</h2>

      <!-- Item 1 -->
      <div class="flex flex-col md:flex-row justify-between mb-8">
        <div class="flex-1">
          <h3 class="text-xl font-semibold mb-1 text-semititle">University of Colorado Boulder</h3>
          <div class="text-lg text-gray-600 mb-1 text-gray-props">Bachelor of Science</div>
          <div class="text-white ">Computer Science - Web Development Track</div>
          <p class="mt-1 text-white">GPA: 3.23</p>
        </div>
        <div class="mt-2 md:mt-0 md:ml-6 text-dates font-medium">
          August 2006 - May 2010
        </div>
      </div>

      <!-- Item 2 -->
      <div class="flex flex-col md:flex-row justify-between">
        <div class="flex-1">
          <h3 class="text-xl font-semibold mb-1 text-semititle">James Buchanan High School</h3>
          <div class="text-lg text-gray-600 mb-1 text-gray-props">Technology Magnet Program</div>
          <p class="text-white">GPA: 3.56</p>
        </div>
        <div class="mt-2 md:mt-0 md:ml-6 text-dates font-medium">
          August 2002 - May 2006
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// no necesitas lógica aquí, es estático
</script>
