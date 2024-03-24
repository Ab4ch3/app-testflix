<template>
  <div class="w-full h-screen">
    <div id="hero" class="bg-black h-3/4 sm:h-full">
      <div class="container mx-auto">
        <header class="">
          <NavMobile />
          <Navegation />
        </header>
        <main class="flex flex-col sm:flex-row items-center sm:items-start">
          <div class="w-4/5 sm:w-full flex flex-col sm:h-96 mt-60 sm:mt-96">
            <P class="text-center sm:text-left text-white text-lg sm:text-2xl font-semibold"
              >ORIGINAL DE TESTFLIX</P
            >
            <h1
              class="text-center sm:text-left text-brand-color-3 text-6xl sm:text-9xl font-semibold"
            >
              BREAKING BAD
            </h1>
            <div class="pt-10 pb-0 flex flex-row justify-center sm:justify-start gap-8 border-none">
              <button
                class="flex flex-row items-center gap-4 py-4 px-9 sm:px-24 text-gray-300 font-semibold rounded-md bg-brand-color-2 justify-between"
              >
                <img class="h-5" :src="play" alt="" />
                REPRODUCIR
              </button>

              <button
                class="flex flex-row px-2 sm:px-24 border border-gray-400 rounded-md items-center"
              >
                <img class="h-5" :src="Plus" alt="" />
                <span class="text-white hidden sm:flex">MI LISTA</span>
              </button>
            </div>
          </div>
          <div
            class="w-full h-full sm:h-full sm:w-2/6 bg-brand-color-2 sm:bg-inherit pt-20 sm:pt-6"
          >
            <LateralMovies />

            <div class="flex flex-col w-full items-center pt-6 px-5">
              <CarouselMovies />
            </div>
          </div>
        </main>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useMovieStore } from '@/stores/movies.js'
import NavMobile from '@/components/nav/nav_mobile.vue'
import Navegation from '@/components/nav/nav_all.vue'
import LateralMovies from '@/components/lateral_movies.vue'
import CarouselMovies from '@/components/carousel_movies.vue'
import Plus from '@/assets/Plus.png'
import play from '@/assets/play.png'

const store = useMovieStore()
store.getFeaturedMovie()
</script>
<style scoped>
#hero {
  background-image: url('../assets/Featured.png');
  /* background-position: center center; */
  background-repeat: no-repeat;
  /* background-position: center; */
  background-size: 100% 100%;
}
</style>
