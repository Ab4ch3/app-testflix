<template>
  <div class="flex flex-col w-full">
    <button class="pb-3 flex flex-row justify-center">
      <img :src="arrowup" alt="" />
    </button>
    <div class="flex flex-col items-center">
      <!-- <div
        v-for="movie in getListMovies"
        :key="movie.id"
        class="bg-slate-50 w-72 h-36 my-3 flex justify-center items-center"
      >
        <img class="w-full h-full" :src="movie.backdrop_path" alt="" srcset="" />
        <img class="absolute" :src="playmovie" alt="" />
        <div
          v-if="loading"
          class="w-12 h-12 rounded-full animate-spin border-x-4 border-solid border-brand-color-3 border-t-transparent absolute"
        ></div>
      </div> -->
      <!-- <div :class="['w-72', 'h-36', 'my-3', 'flex', 'justify-center', 'items-center', isLoading]">
        <div
          v-if="loading"
          class="w-12 h-12 rounded-full animate-spin border-x-4 border-solid border-brand-color-3 border-t-transparent absolute"
        ></div>
        <div v-else class="w-72 h-36 my-3 flex justify-center items-center">
          <img src="../assets/Featured.png" alt="" />
          <button class="absolute" @click="openMovie">
            <img class="" :src="playmovie" alt="" />
          </button>
          <div class="absolute">show info</div>
        </div>
      </div> -->
      <Movie v-for="movie in getListMovies" :key="movie" :movie="movie" />
    </div>
    <button class="pt-3 pb-10 sm:pb-0 flex flex-row justify-center">
      <img :src="arrowdown" alt="" />
    </button>
  </div>
</template>

<script setup>
import arrowup from '../assets/arrowup.png'
import arrowdown from '../assets/arrowdown.png'
import Movie from '../components/movie_component.vue'
import { useMovieStore } from '../stores/movies.js'
import { computed } from 'vue'

let store = useMovieStore()
store.getFeaturedMovie()

// let loading = ref(true)

const getListMovies = computed(() => {
  return store.ShowMovies
})
// console.log(getListMovies.value)
</script>

<style scoped></style>
