<template>
  <main>
    <div
      class="h-screen w-screen p-8 flex justify-around bg-gradient-to-tr from-[#3a91e2] to-[#3dcbe0]"
    >
      <div class="container grid grid-rows-3 max-w-8xl">
        <!-- Cover -->
        <div class="absolute inset-0 bg-linear-to-t bg-[#0a5b87] opacity-50"></div>
        <div
          class="absolute inset-0 bg-linear-to-t from-[#072230] to-transparent to-70% opacity-70"
        ></div>

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

        <div
          v-if="isLoading"
          class="absolute inset-0 bg-linear-to-t bg-gray-900 opacity-70 grid place-items-center"
        >
          <span class="loader"></span>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
@import 'tailwindcss';

.loader {
  width: 48px;
  height: 48px;
  border: 5px solid #fff;
  border-bottom-color: transparent;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>

<script setup lang="ts">
import mainInfo from './weather/components/mainInfo.vue'
import infoTemperature from './weather/components/grid/infoTemperature.vue'
import infoBarometer from './weather/components/grid/infoBarometer.vue'
import infoMoonPhase from './weather/components/grid/infoRange.vue'
import infoForecast24 from './weather/components/grid/infoForecast24.vue'
import infoConditions from './weather/components/sidebar/infoConditions.vue'
import { useWeatherStore } from './weather/stores/useWeatherStore'
import { storeToRefs } from 'pinia'

const weatherStore = useWeatherStore()

const { isLoading } = storeToRefs(weatherStore)
</script>
