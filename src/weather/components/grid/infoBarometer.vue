<template>
  <div class="relative p-4">
    <!-- Superposition cover -->
    <div class="absolute inset-0 bg-[#0b6392] opacity-60 rounded-4xl"></div>

    <div class="relative">
      <infoTitle image="pressure.svg" title="Barometer" />
      <div class="flex items-center mt-2 ml-5">
        <div v-if="weather" class="text-5xl">
          {{ hPaToInHg(weather?.main.pressure) }} <span class="text-lg align-top">Hg</span>
        </div>
      </div>
      <div class="flex items-center mt-5">
        <img src="/icons/clouds.svg" class="h-7" />
        <div class="flex flex-col ml-3">
          <span class="text-lg">Clouds</span>
          {{ weather?.clouds.all }} %
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useWeatherStore } from '@/weather/stores/useWeatherStore'
import infoTitle from './miniComponents/infoTitle.vue'
import { storeToRefs } from 'pinia'

const weatherStore = useWeatherStore()
const { weather } = storeToRefs(weatherStore)

const hPaToInHg = (hPa: number) => (hPa * 0.02953).toFixed(2)
</script>
