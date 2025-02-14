<template>
  <div class="relative col-span-3 p-4 h-full">
    <!-- Superposition cover -->
    <div class="absolute inset-0 bg-[#0b6392] opacity-60 rounded-4xl"></div>

    <div class="relative">
      <!-- <infoTitle image="clock.svg" title="21-hour forecast" /> -->

      <vue-apex-charts :options="chartOptions" :series="series" :height="170"></vue-apex-charts>
    </div>
  </div>
</template>

<script setup lang="ts">
// import infoTitle from './miniComponents/infoTitle.vue'
import { ref } from 'vue'
import VueApexCharts from 'vue3-apexcharts'
const series = ref([
  {
    name: '',
    data: [
      { x: '2024-02-10', y: 28, min: 18 },
      { x: '2024-02-11', y: 26, min: 17 },
      { x: '2024-02-12', y: 27, min: 16 },
      { x: '2024-02-13', y: 24, min: 14 },
      { x: '2024-02-14', y: 22, min: 12 },
      { x: '2024-02-15', y: 23, min: 13 },
    ],
  },
])

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
      format: 'dd MMM',
      style: { 
        colors: '#FFFFFF',
        fontSize: '12px'
      },
    },
    
  },
  yaxis: {
    show: false,
  },
  tooltip: {
    theme: "dark",
    x: { format: 'dddd, dd MMM' },
    y: {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      formatter: function (value: any, { dataPointIndex, seriesIndex, w }: any) {
        const minTemp = w.globals.series[seriesIndex][dataPointIndex + 1];
        return `Max: ${value}°C | Min: ${minTemp ?? 'N/A'}°C`;
      }
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
</script>
