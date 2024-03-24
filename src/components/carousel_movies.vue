<template>
  <div class="flex flex-col w-full">
    <button class="pb-3 flex flex-row justify-center">
      <img :src="arrowup" alt="" />
    </button>
    <div class="flex flex-col">
      <div class="bg-yellow-400 h-36 my-4"></div>
      <div class="bg-yellow-400 h-36 my-4"></div>
      <div class="bg-yellow-400 h-36 my-4"></div>
      <div class="bg-yellow-400 h-36 my-4"></div>
    </div>
    <button class="pt-3 pb-10 flex flex-row justify-center">
      <img :src="arrowdown" alt="" />
    </button>
  </div>
</template>

<script setup>
import arrowup from '../assets/arrowup.png'
import arrowdown from '../assets/arrowdown.png'
</script>

<style lang="scss" scoped></style>
