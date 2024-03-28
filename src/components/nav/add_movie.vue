<template>
  <div>
    <button @click="openModal" class="flex flex-row font-semibold text-lg text-white items-center">
      <img class="pr-4" :src="ArrowRight" alt="arrow right" />
      <p>AGREGAR PELICULA</p>
    </button>
  </div>
</template>

<script setup>
import ArrowRight from '@/assets/ArrowRight.png'

const emit = defineEmits('handleModal')

const openModal = () => {
  emit('handleModal', true)
}
</script>

<style></style>
