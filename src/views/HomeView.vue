<template>
  <div class="w-full min-h-screen">
    <div id="hero" class="bg-black h-full sm:h-full">
      <header class="overflow-hidden md:container md:mx-auto">
        <NavMobile />
        <Navegation />
      </header>
      <div class="md:container md:mx-auto">
        <main class="flex flex-col md:flex-row items-center sm:items-start">
          <div class="w-4/5 sm:w-full flex flex-col mt-60 sm:mt-96">
            <p class="text-center sm:text-left text-white text-lg sm:text-2xl font-semibold">
              ORIGINAL DE TESTFLIX
            </p>
            <h1
              class="text-center sm:text-left text-brand-color-3 text-6xl sm:text-9xl font-semibold"
            >
              BREAKING BAD
            </h1>
            <div class="pt-10 pb-0 flex flex-row justify-center sm:justify-start gap-8 border-none">
              <button
                class="flex flex-row items-center gap-4 py-4 px-9 sm:px-24 text-gray-300 font-semibold rounded-md bg-brand-color-2 justify-center"
              >
                <img class="h-5" :src="play" alt="" />
                REPRODUCIR
              </button>

              <button
                class="flex flex-row items-center justify-center border border-solid py-3 px-1 sm:px-24 rounded-md border-gray-400"
              >
                <img class="" :src="plus" alt="" />
                <span class="text-white hidden sm:flex">MI LISTA</span>
              </button>

              <!-- <button
                class="flex flex-row px-2 sm:px-24 border border-solid border-gray-300 rounded-md items-center bg-brand-color-2 opacity-60"
              >
                <img class="sm:flex h-5" :src="plus" alt="" />
                <span class="text-white hidden sm:flex">MI LISTA</span>
              </button> -->
            </div>
          </div>
          <div class="w-full sm:h-full bg-brand-color-2 sm:bg-inherit pt-20 sm:p-0">
            <LateralMovies />

            <div class="flex flex-col w-full items-center pt-3 px-5">
              <CarouselMovies />
            </div>
          </div>
        </main>
      </div>
    </div>
  </div>
</template>

<script setup>
import NavMobile from '@/components/nav/nav_mobile.vue'
import Navegation from '@/components/nav/nav_all.vue'
import LateralMovies from '@/components/lateral_movies.vue'
import CarouselMovies from '@/components/carousel_movies.vue'
import plus from '@/assets/Plus.png'
import play from '@/assets/play.png'
</script>
<style scoped>
#hero {
  background-image: url('@/assets/Featured.png');
  /* background-position: center center; */
  background-repeat: no-repeat;
  /* background-position: center; */
  background-size: 100% 100%;
}
/* 
* {
  border: 2px solid red;
} */
</style>
