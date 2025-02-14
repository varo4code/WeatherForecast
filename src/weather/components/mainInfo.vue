<template>
  <div class="px-5 relative flex justify-between items-center">
    <div class="w-fit">
      <SearchInput />
      <div v-if="weather" class="text-3xl mt-3.5">{{ weather.weather[0].main }}</div>
      <div v-if="weather" class="text-[90px] mt-[-15px]">{{ Math.round(weather.main.temp) }}ºC</div>
      <div v-if="weather" class="text-[15px] mt-[-22px]">{{ formatTimestamp(weather.dt, weather.timezone) }}</div>
    </div>
      <div>
        <img v-if="weather" :src="getIco(weather.weather[0].main)" alt="Location" class="h-56" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useWeatherStore } from '../stores/useWeatherStore'
import { storeToRefs } from 'pinia'
import SearchInput from './mainInfo/searchInput.vue'
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import { getIcons } from '../functions/getIcons'

dayjs.extend(utc)

const weatherStore = useWeatherStore()
const { weather } = storeToRefs(weatherStore)

const formatTimestamp = (timestamp: number, timezoneOffset:number) => {  
  return dayjs.unix(timestamp)
  .utcOffset(timezoneOffset / 60)
  .format('dddd | DD MMM YYYY - hh:mm A')
}

const getIco = (icoName:string) =>{
  return '/icons/' + getIcons(icoName)
}

</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition:
    opacity 0.3s ease-in-out,
    transform 0.4s ease-in-out;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
