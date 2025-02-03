<template>
    <div class="flex items-center">
          <img :src="getImagePath(image)" :alt="image" class="h-6" />
          <span class="text-lg ml-1">{{ title }}</span>
        </div>
</template>

<script setup lang="ts">

defineProps<{
  image: string,
  title: string
}>();


// Resuelve la imagen correctamente
const getImagePath = (image:string) => {
  return new URL('../../../../assets/icons/'+image, import.meta.url).href;
};
</script>