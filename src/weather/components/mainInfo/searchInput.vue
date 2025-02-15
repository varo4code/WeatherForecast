<template>
  <div @click="openSearch" class="flex items-center w-fit h-6 hover:cursor-pointer">
    <img src="/icons/location.svg" alt="Location" class="h-6" />
    <div
      v-if="!showInput"
      class="flex items-center ml-2 transition-all duration-1000 ease-in-out hover:scale-105"
    >
      <span v-if="city?.name != ''" class="text-lg">{{ city?.name }}, {{ city?.country }}</span>
      <img src="/icons/arrow.svg" class="h-4 ml-3" />
    </div>
    <transition name="fade">
      <input
        v-if="showInput"
        v-model="search"
        ref="searchRef"
        type="text"
        placeholder="Search City..."
        class="ml-3.5 h-9 w-sm p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2"
        :class="{ 'ring-red-500': isError, 'animate-bounce': isError }"
        @blur="hideInput"
        @keypress.enter="searchWeather"
      />
    </transition>
  </div>
</template>

<script setup lang="ts">
import { nextTick, onMounted, ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useWeatherStore } from '@/weather/stores/useWeatherStore'

onMounted(() => {
  getCityWeather('New York')
})

const weatherStore = useWeatherStore()
const { isError, city } = storeToRefs(weatherStore)
const { getCityWeather } = weatherStore

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
  search.value = ''
}
</script>
