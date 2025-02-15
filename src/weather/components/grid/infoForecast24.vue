<template>
  <div class="relative col-span-3 p-4 h-full">
    <!-- Superposition cover -->
    <div class="absolute inset-0 bg-[#0b6392] opacity-60 rounded-4xl"></div>

    <div class="relative">
      <infoTitle image="clock.svg" title="48-hour forecast" />

      <vue-apex-charts
        v-if="weatherStore.forecast"
        :options="chartOptions"
        :series="series"
        :height="170"
      ></vue-apex-charts>
    </div>
  </div>
</template>

<script setup lang="ts">
import infoTitle from './miniComponents/infoTitle.vue'
import { useWeatherStore } from '@/weather/stores/useWeatherStore'
import { ref, watch } from 'vue'
import VueApexCharts from 'vue3-apexcharts'
const series = ref([{}])
const weatherStore = useWeatherStore()

const chartOptions = ref({
  chart: {
    toolbar: { show: false },
    zoom: { enabled: false },
    background: 'transparent',
    padding: {
      right: 50,
      left: 50,
    },
  },
  stroke: {
    curve: 'smooth',
    width: 4,
  },
  grid: { show: false },
  xaxis: {
    axisBorder: { show: false },
    axisTicks: { show: false },
    type: 'datetime',
    labels: {
      formatter: (value: string | number | Date) => {
        const date = new Date(value);
        return date.toLocaleDateString('en-US', {
          day: '2-digit',
          month: 'short',
        }) + ' - ' + date.toLocaleTimeString('en-US', {
          hour: '2-digit',
          minute: '2-digit',
          hour12: false, // Cambia a true si quieres AM/PM
        });
      },
      style: {
        colors: '#FFFFFF',
        fontSize: '12px',
      },
    }
  },
  yaxis: {
    show: false,
  },
  tooltip: {
    theme: 'dark',
    x: { format: 'dddd, dd MMM' },
    y: {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      formatter: function (value: any) {
        return ` ${value ?? 'N/A'}°C`
      },
    },
  },
  dataLabels: {
    enabled: true,
    style: {
      fontSize: '12px',
      fontWeight: 'bold',
    },
    background: {
      enabled: false,
      foreColor: '#fff',
      padding: 4,
    },
    offsetY: -8,
  },
  colors: ['#B9EFFF'],
})

watch(
  () => weatherStore.forecast,
  (newData) => {
    series.value = [
      {
        name: '',
        data: newData?.list.map((day) => ({
          x: day.dt_txt,
          y: Math.round(day.main.feels_like),
        })),
      },
    ]
  },
  { immediate: true }
)
</script>
