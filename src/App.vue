
<template>
  <main>
    <div class="h-screen w-screen grid grid-rows-3 gap-4 p-8 bg-[url(./assets/backgrounds/thunderstorm.svg)] bg-cover">
      <!-- Cover -->
      <div class="absolute inset-0 bg-linear-to-t bg-[#0a5b87] opacity-50"></div>
      <div class="absolute inset-0 bg-linear-to-t from-[#072230] to-transparent to-70% opacity-70"></div>

      <mainInfo />
      <div class="row-span-2 grid grid-cols-4 grid-rows-2 gap-4 mt-5">
          <infoTemperature />
          <infoBarometer />
          <infoMoonPhase />
          <div class="row-span-2">
            <!-- Sidebar -->
            <infoConditions />
          </div>
          <div class="col-span-3">
            <!-- Bottom component -->
            <infoForecast24 />
          </div>
      </div>

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
import infoConditions from './weather/components/sidebar/infoConditions.vue';
</script>