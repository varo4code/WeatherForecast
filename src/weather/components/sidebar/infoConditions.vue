<template>
  <div
    class="p-4 grid grid-rows-3 gap-4 h-full bg-gradient-to-tr from-[#47446ed0] to-[#396EE1] rounded-4xl"
  >
    <div>
      <InfoTitle title="Air Quality" />

      <div v-if="weather" class="ml-1">
        <ChartAQI />
      </div>

      <div class="mt-5 grid grid-cols-2 gap-4">
        <PollutionItem item="o3" />
        <PollutionItem item="so2" />
        <PollutionItem item="no" />
        <PollutionItem item="no2" />
        <PollutionItem item="pm10" />
        <PollutionItem item="pm2_5" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useWeatherStore } from '@/weather/stores/useWeatherStore'
import InfoTitle from '../grid/miniComponents/infoTitle.vue'
import { storeToRefs } from 'pinia'
import ChartAQI from './chartAQI.vue'
import PollutionItem from './pollutionItem.vue'

const weatherStore = useWeatherStore()
const { weather } = storeToRefs(weatherStore)
</script>
