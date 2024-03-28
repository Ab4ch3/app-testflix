<template>
  <div class="flex flex-col w-full">
    <button class="pb-1 flex flex-row justify-center">
      <img :src="arrowup" alt="" />
    </button>
    <div class="flex flex-col items-center">
      <Movie v-for="movie in getListMovies" :key="movie" :movie="movie" />
    </div>
    <button class="pt-1 pb-10 sm:pb-0 flex flex-row justify-center">
      <img :src="arrowdown" alt="" />
    </button>
  </div>
</template>

<script setup>
import arrowup from '@/assets/arrowup.png'
import arrowdown from '@/assets/arrowdown.png'
import Movie from '@/components/movie_component.vue'
import { useMovieStore } from '@/stores/movies.js'
import { computed } from 'vue'

let store = useMovieStore()
store.getFeaturedMovie()

const getListMovies = computed(() => {
  return store.displaymovie
})
</script>

<style scoped></style>
