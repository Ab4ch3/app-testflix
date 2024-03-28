<template>
  <div class="md:hidden flex flex-row items-center justify-between px-5 py-5">
    <div>
      <button @click="openSideBar" class="">
        <img :src="Menu" alt="menu icon" srcset="" />
      </button>
    </div>
    <div>
      <a href="#">
        <img class="" :src="IconTestFlix" alt="testflix icon" />
      </a>
    </div>

    <div>
      <button>
        <img :src="ProfileAvatar" alt="profile image" srcset="" />
      </button>
    </div>
  </div>
  <SideBar :isOpen="isOpenMenu" @handleClose="closeSideBar" />
</template>

<script setup>
import IconTestFlix from '@/assets/LITEFLIX.svg'
import Menu from '@/assets/Menu.png'
import ProfileAvatar from '../../assets/Perfil.png'
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

<style></style>
