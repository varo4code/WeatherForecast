<template>
  <div class="relative p-4">
    <!-- Capa de superposición -->
    <div class="absolute inset-0 bg-gray-500 opacity-30 rounded-4xl"></div>

    <div class="relative">
      <infoTitle image="moon.svg" title="Moon Phase" />

      <div class="flex items-center mt-4"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import infoTitle from './miniComponents/infoTitle.vue';
</script>