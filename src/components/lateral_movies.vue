import { ref } from 'vue';
<template>
  <div class="flex flex-col items-center">
    <div class="flex flex-row justify-center gap-3">
      <span class="text-white text-lg font-normal">VER:</span>
      <select class="w-40 sm:w-full bg-inherit border-none text-lg font-medium text-brand-color-3"
        v-model="optionSelected">
        <option v-for="opt in options" :key="opt" :value="opt"
          class="bg-brand-color-2 font-light text-white border-none">
          {{ opt }}
        </option>
      </select>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
let options = ['TENDENCIA', 'MIS PELICULAS', 'AGREGADAS RECIENTEM.']
let optionSelected = ref('TENDENCIA')
</script>

<style lang="scss" scoped></style>
