<template>
  <div class="relative p-4">
    <!-- Superposition cover -->
    <div class="absolute inset-0 bg-[#0b6392] opacity-60 rounded-4xl"></div>

    <div class="relative">
        <infoTitle image="heart.svg" title="Real Feel" />
        <div class="flex items-center mt-2 ml-5">
            <div v-if="weather" class="text-5xl">
                {{ Math.round(weather?.main.feels_like) }} ºC
            </div>
        </div>
        
        <div class="flex items-center mt-4">
            <img src="/icons/humid.svg" alt="Humid" class="h-6" />
            <div class="flex flex-col ml-3">
              <span class="text-sm">Humid</span>
              <span v-if="weather" class="text-3xl">{{ Math.round(weather.main.humidity) }} %</span>
            </div>
        </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useWeatherStore } from '@/weather/stores/useWeatherStore';
import infoTitle from './miniComponents/infoTitle.vue';
import { storeToRefs } from 'pinia';

const weatherStore = useWeatherStore()

const { weather } = storeToRefs(weatherStore)

</script>
