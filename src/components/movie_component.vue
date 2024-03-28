<template>
  <div
    :class="['w-64', 'h-36', 'my-3', 'flex', 'justify-center', 'items-center', isLoading]"
    @pointerleave="closeMovie"
  >
    <div
      v-if="loading"
      class="w-12 h-12 rounded-full animate-spin border-x-4 border-solid border-brand-color-3 border-t-transparent absolute"
    ></div>
    <div v-else class="my-3 flex justify-center items-center">
      <img :class="opacity" :src="props.movie.backdrop_path" alt="" />
      <button v-show="!reproducir" class="absolute" @click="openMovie">
        <img class="" :src="playmovie" alt="" />
      </button>

      <div v-if="reproducir" class="absolute">
        <div class="flex flex-row justify-end w-60">
          <button>
            <img class="h-5" :src="plus" alt="" srcset="" />
          </button>
        </div>
        <div class="flex flex-row w-60 items-center justify-between mt-1 b">
          <button class="flex flex-row gap-3 items-center">
            <img class="h-6" :src="playmovie" alt="" srcset="" />
            <span class="text-lg font-semibold text-white">{{ movie.original_title }}</span>
          </button>
          <button class="">
            <img class="" :src="Like" alt="" srcset="" />
          </button>
        </div>
        <div class="w-60">
          <p class="text-white text-sm font-normal">{{ movie.overview.substr(0, 65) + '...' }}</p>
        </div>
        <div class="w-60 flex flex-row justify-between">
          <span class="text-white text-sm font-normal flex flex-row items-center gap-1">
            <img class="" :src="star1" alt="" />
            {{ Math.round(movie.vote_average) }}</span
          >
          <span class="text-white text-sm font-normal">{{
            movie.release_date.split('-', 1).join('')
          }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref, onBeforeUnmount } from 'vue'
import playmovie from '@/assets/playmovie.png'
import Like from '@/assets/Like.svg'
import plus from '@/assets/Plus.png'
import star1 from '@/assets/Star1.png'

const props = defineProps({
  movie: {
    type: Object,
    required: false
  }
})

let loading = ref(true)
let reproducir = ref(false)
setTimeout(() => {
  loading.value = !loading.value
}, 3000)

const isLoading = computed(() => {
  return {
    'bg-black': !loading.value,
    'bg-inherit': loading.value
  }
})

const openMovie = () => {
  // eslint-disable-next-line vue/no-side-effects-in-computed-properties
  return (reproducir.value = !reproducir.value)
}

const closeMovie = () => {
  // eslint-disable-next-line vue/no-side-effects-in-computed-properties
  return (reproducir.value = false)
}

// eslint-disable-next-line vue/return-in-computed-property
const opacity = computed(() => {
  return {
    'opacity-40': reproducir.value
  }
})

onBeforeUnmount(() => {
  clearInterval(setTimeout)
})
</script>

<style lang="scss" scoped></style>
