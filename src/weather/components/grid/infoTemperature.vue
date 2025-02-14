<template>
  <div class="relative p-4">
    <!-- Superposition cover -->
    <div class="absolute inset-0 bg-[#0b6392] opacity-60 rounded-4xl"></div>

    <div class="relative">
        <infoTitle image="heart.svg" title="Indoor" />
        <div class="flex items-center mt-2 ml-5">
            <div class="text-6xl">
                22ºC
            </div>
        </div>
        
        <div class="flex items-center mt-4">
            <img src="/icons/humid.svg" alt="Humid" class="h-6" />
            <div class="flex flex-col ml-3">
              <span class="text-sm">Humid</span>
              <span class="text-3xl">66%</span>
            </div>
        </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import infoTitle from './miniComponents/infoTitle.vue';

</script>
