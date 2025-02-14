<template>
  <div class="flex items-center">
    <img v-if="image" :src="getImagePath(image)" :alt="image" class="h-6" />
    <span class="text-lg ml-1">{{ title }}</span>
  </div>
</template>

<script setup lang="ts">
interface Props {
  image?: string
  title: string
}
defineProps<Props>()

// Get the image path
const getImagePath = (image: string) => {
  return new URL('/icons/' + image, import.meta.url).href
}
</script>
