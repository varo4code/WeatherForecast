
<template>
  <main>
    <div class="w-screen h-screen grid grid-cols-4 gap-4 p-8 bg-[url(./assets/backgrounds/thunderstorm.svg)] bg-cover">
      <div class="absolute inset-0 bg-teal-900 opacity-50"></div>
      <div class="col-span-3 grid grid-rows-3 relative z-10">
        <mainInfo />

        <div class="grid grid-cols-3 gap-4 row-span-2 mt-5">
          <infoTemperature />
          <infoBarometer />
          <infoMoonPhase />
          <infoForecast24 />
        </div>
      </div>
      <div class="border relative z-10">Air conditions Sidebar</div>
    </div>
  </main>
</template>

<style scoped>
@import "tailwindcss";
</style>

<script setup lang="ts">
import mainInfo from './weather/components/mainInfo.vue';
import infoTemperature from './weather/components/grid/infoTemperature.vue';
import infoBarometer from './weather/components/grid/infoBarometer.vue';
import infoMoonPhase from './weather/components/grid/infoMoonPhase.vue';
import infoForecast24 from './weather/components/grid/infoForecast24.vue';
</script>