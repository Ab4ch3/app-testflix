<template>
  <div class="hidden md:flex flex-row justify-between py-6 items-center">
    <div class="">
      <a href="">
        <img class="" :src="IconTestFlix" alt="testflix icon" />
      </a>
    </div>
    <div class="flex flex-row items-center">
      <!-- ADD MOVIE COMPONENT -->
      <AddMovie class="pr-14" @handleModal="openModal" />
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
  <Modal :open="isOpenModal" />
</template>

<script setup>
import IconTestFlix from '@/assets/LITEFLIX.svg'
import Notification from '@/assets/Notificación.png'
import Menu from '@/assets/Menu.png'
import ProfileAvatar from '../../assets/Perfil.png'
import AddMovie from '../../components/nav/add_movie.vue'
import SideBar from '@/components/sidebar/sidebar_nav.vue'
import Modal from '@/components/modal_add.vue'
import { ref } from 'vue'

let isOpenMenu = ref(false)
let isOpenModal = ref(false)

const openSideBar = () => {
  isOpenMenu.value = true
}

const openModal = (payload) => {
  isOpenModal.value = payload
}

const closeSideBar = (payload) => {
  isOpenMenu.value = payload
}
</script>

<style scoped></style>
