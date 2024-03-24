<template>
  <div
    v-show="props.isOpen"
    class="bg-brand-color-1 absolute top-0 sm:right-0 w-full sm:w-1/3 h-screen p-5 duration-700 ease-in overflow-hidden"
  >
    <div class="flex flex-row justify-between items-center">
      <button @click="closeSideBar">
        <img :src="Cerrar" alt="" srcset="" />
      </button>
      <div class="flex flex-row gap-10">
        <button>
          <img class="hidden sm:inline-block" :src="Notification" alt="" srcset="" />
          <img class="sm:hidden pr-4" :src="TestflixIcon" alt="" srcset="" />
        </button>
        <button class="h-full">
          <img :src="ProfileAvatar" alt="" srcset="" />
        </button>
      </div>
    </div>
    <div class="mt-14">
      <ul>
        <li class="py-2 sm:py-3 hover:underline">
          <a href="" class="text-white text-md sm:text-lg flex flex-row gap-8 items-center">
            <img class="h-6" :src="Home" alt="" srcset="" />
            Inicio
          </a>
        </li>
        <li class="py-2 sm:py-3">
          <a href="" class="text-white text-md sm:text-lg flex flex-row gap-8 items-center">
            <img class="h-6" :src="Star" alt="" srcset="" />
            Series
          </a>
        </li>
        <li class="py-2 sm:py-3">
          <a href="" class="text-white text-md sm:text-lg flex flex-row gap-8 items-center">
            <img class="h-6" :src="Film" alt="" srcset="" />
            Peliculas
          </a>
        </li>
        <li class="py-2 sm:py-3">
          <a href="" class="text-white text-md sm:text-lg flex flex-row gap-8 items-center">
            <img class="h-6" :src="Ticket" alt="" srcset="" />
            Agregados Recientemente
          </a>
        </li>
        <li class="py-2 sm:py-3">
          <a href="" class="text-white text-md sm:text-lg flex flex-row gap-8 items-center">
            <img class="h-6" :src="Trending" alt="" srcset="" />
            Tendencias
          </a>
        </li>
        <li class="py-2 sm:py-3">
          <a href="" class="text-white text-md sm:text-lg flex flex-row gap-8 items-center">
            <img class="h-6" :src="Heart" alt="" srcset="" />
            Mis Peliculas
          </a>
        </li>
        <li class="py-2 sm:py-3">
          <a href="" class="text-white text-md sm:text-lg flex flex-row gap-8 items-center">
            <img class="h-6" :src="Plus" alt="" srcset="" />
            Mi Lista
          </a>
        </li>
      </ul>
    </div>

    <Add_movie class="mt-10 pl-1" />
    <div class="flex flex-row justify-center sm:justify-start mt-16">
      <button class="w-52 sm:mt-20 py-3 border bottom-2 bg-brand-color-3 font-normal">
        CERRAR SESION
      </button>
    </div>
  </div>
</template>

<script setup>
import Notification from '@/assets/Notificación.png'
import TestflixIcon from '@/assets/LITEFLIX.svg'
import ProfileAvatar from '@/assets/Perfil.png'
import Cerrar from '@/assets/Cerrar.png'
import Home from '@/assets/Home.png'
import Star from '@/assets/Star.png'
import Film from '@/assets/Film.png'
import Ticket from '@/assets/Ticket.png'
import Trending from '@/assets/Trending up.png'
import Heart from '@/assets/Heart.png'
import Plus from '@/assets/Plus.png'
import Add_movie from '@/components/nav/add_movie.vue'

const props = defineProps({
  isOpen: {
    type: Boolean
  }
})
const emit = defineEmits('handleClose')

const closeSideBar = () => {
  emit('handleClose', false)
}
</script>

<style></style>
