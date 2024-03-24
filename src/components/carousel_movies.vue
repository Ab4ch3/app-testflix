<template>
  <div class="flex flex-col w-full">
    <button class="pb-3 flex flex-row justify-center">
      <img :src="arrowup" alt="" />
    </button>
    <div class="flex flex-col items-center">
      <div class="bg-yellow-400 w-72 h-36 my-3"></div>
      <div class="bg-yellow-400 w-72 h-36 my-3"></div>
      <div class="bg-yellow-400 w-72 h-36 my-3"></div>
      <div class="bg-yellow-400 w-72 h-36 my-3"></div>
    </div>
    <button class="pt-3 pb-10 sm:pb-0 flex flex-row justify-center">
      <img :src="arrowdown" alt="" />
    </button>
  </div>
</template>

<script setup>
import arrowup from '../assets/arrowup.png'
import arrowdown from '../assets/arrowdown.png'
</script>

<style lang="scss" scoped></style>
