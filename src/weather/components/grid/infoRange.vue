<template>
  <div class="relative p-4 bg-gradient-to-tr from-[#47446ed0] to-[#396EE1] rounded-4xl">
    <div v-if="weather" class="relative">
      <infoTitle image="min-temp.svg" title="Temperatures" />
      <div class="flex gap-3">
        <div class="flex gap-4 items-center mt-5">
          <div class="flex flex-col ml-3">
            <span class="text-lg">Max</span>
            {{ Math.round(weather?.main.temp_max) }} ºC
          </div>

          <div class="flex flex-col ml-3">
            <span class="text-lg">Min</span>
            {{ Math.round(weather?.main.temp_min) }} ºC
          </div>
        </div>
      </div>

      <div class="flex items-center mt-5 ml-3">
        <img src="/icons/wind.svg" class="h-7" />
        <div class="flex flex-col ml-3">
          <span class="text-lg">Wind</span>
          {{ weather?.wind.speed }} m/s
        </div>
      </div>

      <div class="flex items-center mt-4"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useWeatherStore } from '@/weather/stores/useWeatherStore'
import infoTitle from './miniComponents/infoTitle.vue'
import { storeToRefs } from 'pinia'

const weatherStore = useWeatherStore()
const { weather } = storeToRefs(weatherStore)
</script>
