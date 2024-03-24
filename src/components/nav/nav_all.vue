<template>
  <div class="hidden sm:flex flex-row justify-between py-6 items-center">
    <div class="">
      <a href="">
        <img class="" :src="IconTestFlix" alt="testflix icon" />
      </a>
    </div>
    <div class="flex flex-row items-center">
      <AddMovie class="pr-14" />
      <div class="flex flex-row gap-9">
        <button @click="openSideBar">
          <img :src="Menu" alt="menu icon" srcset="" />
        </button>
        <button class="">
          <img :src="Notification" alt="menu icon" srcset="" />
        </button>
        <button class="">
          <img :src="ProfileAvatar" alt="profile image" srcset="" />
        </button>
      </div>
    </div>
  </div>
  <SideBar :isOpen="isOpenMenu" @handleClose="closeSideBar" />
</template>

<script setup>
import IconTestFlix from '@/assets/LITEFLIX.svg'
import Notification from '@/assets/Notificación.png'
import Menu from '@/assets/Menu.png'
import ProfileAvatar from '../../assets/Perfil.png'
import AddMovie from '../../components/nav/add_movie.vue'
import SideBar from '@/components/sidebar/sidebar_nav.vue'
import { ref } from 'vue'

let isOpenMenu = ref(false)

const openSideBar = () => {
  isOpenMenu.value = true
}

const closeSideBar = (payload) => {
  isOpenMenu.value = payload
}
</script>

<style scoped></style>
