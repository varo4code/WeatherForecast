<template>
  <div class="px-5 relative flex justify-between items-center">
    <div class="w-fit">
      <div @click="openSearch" class="flex items-center w-fit h-6 hover:cursor-pointer">
        <img src="../../assets/icons/location.svg" alt="Location" class="h-6" />
        <div
          v-if="!showInput"
          class="flex items-center ml-2 transition-all duration-1000 ease-in-out hover:scale-105"
        >
          <span v-if="city?.name != ''" class="text-lg">{{ city?.name }}</span>
          <img src="../../assets/icons/arrow.svg" class="h-4 ml-3" />
        </div>
        <transition name="fade">
          <input
            v-if="showInput"
            v-model="search"
            ref="searchRef"
            type="text"
            placeholder="Search City..."
            class="absolute top-0 left-14 h-9 w-sm p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2"
            :class="{ 'ring-red-500': isError, 'animate-bounce': isError }"
            @blur="hideInput"
            @keypress.enter="searchWeather"
          />
        </transition>
      </div>
      <div class="text-3xl mt-3.5">Thunderstorm</div>
      <div class="text-[90px] mt-[-15px]">26ºC</div>
      <div class="text-[15px] mt-[-22px]">Sunday | 12 Dec 2024 - 11:43 PM</div>
    </div>
    <div>
      <img src="../../assets/icons/thunder.svg" alt="Location" class="h-46" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { nextTick, onMounted, ref } from 'vue'
import { useWeatherStore } from '../stores/useWeatherStore'
import { storeToRefs } from 'pinia'

const weatherStore = useWeatherStore()
const { getCityWeather } = weatherStore
const { isError, city } = storeToRefs(weatherStore)

const showInput = ref(false)
const search = ref('')
const searchRef = ref<HTMLInputElement>()
// Hide Search input if not used
const hideInput = () => {
  setTimeout(() => {
    showInput.value = false
  }, 700)
}
// Open Search input
const openSearch = async () => {
  showInput.value = true
  await nextTick()
  searchRef.value?.focus()
}
// Send search
const searchWeather = () => {
  getCityWeather(search.value).then((res) => {
    if (res) showInput.value = false
  })
}
onMounted(() => {
  getCityWeather('New York')
})
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
