<template>
  <div v-if="pollution" class="ozone-container">
    <div class="bar">
      <div class="fill" :style="{ height: barHeight, background: bg }"></div>
    </div>
    <div class="info">
      <p>
        {{ title }}
        <br />
        (µg/m³)
      </p>
      <span class="value">{{ Math.round(pollution.list[0].components[item]) }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useWeatherStore } from '@/weather/stores/useWeatherStore'
import { storeToRefs } from 'pinia'
import { computed, ref, watch } from 'vue'

const bg = ref('')

interface Props {
  item: 'o3' | 'pm10' | 'no' | 'no2' | 'so2' | 'pm2_5'
}
const props = defineProps<Props>()
const weatherStore = useWeatherStore()
const { pollution } = storeToRefs(weatherStore)

const limits = {
  o3: [60, 100, 140, 180],
  so2: [20, 80, 250, 350],
  pm10: [20, 50, 100, 200],
  no: [10, 30, 60, 80],
  no2: [40, 70, 150, 200],
  pm2_5: [10, 25, 50, 75],
}

const title = computed(() => {
  const titles = {
    o3: 'O₃',
    so2: 'SO₂',
    pm10: 'PM10',
    no: 'NO',
    no2: 'NO₂',
    pm2_5: 'PM2.5',
  }
  return titles[props.item] || ''
})

watch(
  () => pollution.value?.list[0].components[props.item],
  (newValue) => {
    if (newValue !== undefined) {
      bg.value = getColor(newValue)
    }
  },
  { immediate: true },
)

const getColor = (val: number) => {
  const lim = limits[props.item]
  if (!lim) return '#FEB156'

  if (val < lim[0]) return '#02FA83'
  if (val < lim[1]) return '#02DB5C'
  if (val < lim[2]) return '#30B502'
  if (val < lim[3]) return '#FFDE30'
  return '#FEB156'
}

const barHeight = computed(() => {
  const maxIndex = limits[props.item].length - 1
  const maxVal = (limits[props.item][maxIndex] || 100) + 50
  const value = pollution.value?.list[0].components[props.item] || 0
  return `${Math.min(100, (100 * value) / maxVal)}%`
})
</script>

<style scoped>
.ozone-container {
  display: flex;
  align-items: center;
  gap: 12px;
}

.bar {
  width: 12px;
  height: 70px;
  background: #dff0f0;
  border-radius: 6px;
  overflow: hidden;
  position: relative;
}

.fill {
  width: 100%;
  position: absolute;
  bottom: 0;
  transition: height 0.3s ease-in-out;
}

.info {
  display: flex;
  flex-direction: column;
  text-align: left;
}

p {
  font-size: 16px;
  margin: 0;
}

.value {
  font-size: 24px;
  font-weight: bold;
}
</style>
