<template>
  <div class="relative w-64">
    <!-- Contenedor del Input -->
    <div @click="showInput = true" class="cursor-pointer flex items-center gap-2 p-2 border border-gray-300 rounded-lg bg-white transition-all duration-700 ease-in-out hover:shadow-md">
      <span v-if="!showInput" class="text-gray-500">🔍 Buscar...</span>
    </div>

    <!-- Input con Transición -->
    <transition name="fade">
      <input
        v-if="showInput"
        type="text"
        placeholder="Escribe aquí..."
        class="absolute top-0 left-0 w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        @blur="hideInput"
      />
    </transition>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const showInput = ref(false);

// Ocultar el input al perder el foco
const hideInput = () => {
  setTimeout(() => {
    showInput.value = false;
  }, 200);
};
</script>

<style scoped>
/* Animación de entrada y salida */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
