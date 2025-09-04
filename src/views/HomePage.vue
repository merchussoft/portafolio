<script setup>
    import BaseAbout from '@/components/sections/BaseAbout.vue';
    import BaseAwards from '@/components/sections/BaseAwards.vue';
    import BaseEducation from '@/components/sections/BaseEducation.vue';
    import BaseExperience from '@/components/sections/BaseExperience.vue';
    import BaseInterests from '@/components/sections/BaseInterests.vue';
    import BaseSkills from '@/components/sections/BaseSkills.vue';
</script>

<template>
    <div id="page-top" class="md:ml-64 pt-10 bg-[#232122]">
        <BaseAbout />
            <hr class="m-0" />
        <BaseExperience />
            <hr class="m-0" />
        <BaseEducation />
            <hr class="m-0" />
        <BaseSkills />
            <hr class="m-0" />
        <BaseInterests />
            <hr class="m-0" />
        <BaseAwards />
    </div>
</template>