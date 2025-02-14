<template>
  <div class="relative p-4 grid grid-rows-3 gap-4 h-full">
    <!-- Superposition cover -->
    <div class="absolute inset-0 bg-[#0b6392] opacity-60 rounded-4xl"></div>
    <div class="relative">
      <InfoTitle title="Air Conditions" />

      <div v-if="weather" class="ml-1">


      </div>

      <!-- <div class="mt-5">
        <InfoTitle title="Concentration" />

        <ul v-if="pollution" class="ml-7 mt-3 list-disc">
          <li>Carbon monoxide: {{ pollution?.list[0].components['co'] }} μg/m3</li>
          <li>Nitrogen monoxide: {{ pollution?.list[0].components['no'] }} μg/m3</li>
          <li>Nitrogen dioxide: {{ pollution?.list[0].components['no2'] }} μg/m3</li>
          <li>Ozone: {{ pollution?.list[0].components['o3'] }} μg/m3</li>
          <li>Sulphur dioxide: {{ pollution?.list[0].components['so2'] }} μg/m3</li>
          <li>Fine particles matter: {{ pollution?.list[0].components['pm2_5'] }} μg/m3</li>
          <li>Coarse particulate matter: {{ pollution?.list[0].components['pm10'] }} μg/m3</li>
          <li>Ammonia: {{ pollution?.list[0].components['nh3'] }} μg/m3</li>
        </ul>
      </div> -->
    </div>
  </div>
</template>

<script setup lang="ts">
import { useWeatherStore } from '@/weather/stores/useWeatherStore'
import InfoTitle from '../grid/miniComponents/infoTitle.vue'
import { storeToRefs } from 'pinia'

const weatherStore = useWeatherStore()
const { weather } = storeToRefs(weatherStore)
</script>
