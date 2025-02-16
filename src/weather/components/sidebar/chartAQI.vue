<template>
  <div class="flex justify-around">
    <vue-apex-charts
      v-if="pollution"
      :options="chartOptions"
      :series="[(pollution.list[0].main.aqi / 5) * 100]"
      :width="200"
    ></vue-apex-charts>
  </div>
</template>

<script setup lang="ts">
import { useWeatherStore } from '@/weather/stores/useWeatherStore'
import { storeToRefs } from 'pinia'
import { computed } from 'vue'
import VueApexCharts from 'vue3-apexcharts'

const weatherStore = useWeatherStore()
const { pollution } = storeToRefs(weatherStore)

const getColor = computed(() => {
  const aqi = pollution.value?.list[0].main.aqi
  if (!aqi) return '#FEB156'
  if (aqi <= 1) return '#02FA83'
  if (aqi === 2) return '#02DB5C'
  if (aqi === 3) return '#30B502'
  if (aqi === 4) return '#FFDE30'
  return '#FEB156'
})

const getAQIQuality = (val: number) =>
  ({
    1: 'Good',
    2: 'Fair',
    3: 'Moderate',
    4: 'Poor',
    5: 'Very Poor',
  })[val] || ''

const chartOptions = computed(() => ({
  chart: {
    type: 'radialBar',
    sparkline: { enabled: true },
  },
  plotOptions: {
    bar: {
      isFunnel: false,
      isFunnel3d: true,
    },
    radialBar: {
      startAngle: -90,
      endAngle: 90,
      hollow: { size: '65%' },
      track: {
        background: '#84abcc',
        strokeWidth: '97%',
      },
      dataLabels: {
        show: true,
        name: { show: false },
        value: {
          fontSize: '16px',
          fontWeight: 'bold',
          color: '#fff',
          offsetY: -5,
          formatter: () => `${pollution.value?.list[0].main.aqi} ${getAQIQuality(pollution.value?.list[0].main.aqi ?? 1)}`,
        },
      },
      roundedCorners: true, // 🔹 Borde redondeado
    },
  },
  labels: ['AQI'],
  colors: [getColor.value], 
}))
</script>
