<template>
  <div :class="['w-72', 'h-36', 'my-3', 'flex', 'justify-center', 'items-center', isLoading]">
    <div
      v-if="loading"
      class="w-12 h-12 rounded-full animate-spin border-x-4 border-solid border-brand-color-3 border-t-transparent absolute"
    ></div>
    <div v-else class="w-72 h-36 my-3 flex justify-center items-center">
      <img :src="props.movie.backdrop_path" alt="" />
      <!-- <button class="absolute" @click="openMovie">
        <img class="" :src="playmovie" alt="" />
      </button> -->
      <!-- <div class="absolute">{{ props.movie }}</div> -->
    </div>
  </div>
</template>

<script setup>
import { computed, ref, onBeforeUnmount } from 'vue'

const props = defineProps({
  movie: {
    type: Object,
    required: false
  }
})
let loading = ref(true)

setTimeout(() => {
  loading.value = !loading.value
}, 3000)

const isLoading = computed(() => {
  return {
    'bg-red-500': !loading.value,
    'bg-inherit': loading.value
  }
})

onBeforeUnmount(() => {
  clearInterval(setTimeout)
})
</script>

<style lang="scss" scoped></style>
