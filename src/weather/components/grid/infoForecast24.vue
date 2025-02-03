<template>
  <div class="relative col-span-3 p-4 h-full">
    <!-- Superposition cover -->
    <div class="absolute inset-0 bg-gray-500 opacity-30 rounded-4xl"></div>

    <div class="relative">
      <infoTitle image="clock.svg" title="21-hour forecast" />

    </div>
  </div>
</template>

<script setup lang="ts">
import infoTitle from './miniComponents/infoTitle.vue';
</script>