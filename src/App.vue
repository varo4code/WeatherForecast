
<template>
  <main>
    <div class="w-screen h-screen grid grid-cols-4 p-8 bg-[url(./assets/backgrounds/thunderstorm.svg)] bg-cover">
      <div class="absolute inset-0 bg-teal-900 opacity-50"></div>
      <div class="col-span-3 grid grid-rows-3 relative z-10">
        <mainInfo />

        <!-- <div class="grid grid-cols-3 gap-4 row-span-2">
          <div class="border">Indoor</div>
          <div class="border">Barometer</div>
          <div class="border">Moon Phase</div>
          <div class="border col-span-3">Forecast 12h</div>
        </div> -->
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
</script>