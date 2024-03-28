<template>
  <div
    v-if="props.open"
    class="fixed left-0 top-0 flex h-full w-full items-center justify-center bg-black bg-opacity-50 py-10"
  >
    <div class="max-h-full w-full max-w-xl overflow-y-auto sm:rounded-2xl bg-brand-color-2">
      <div class="w-full">
        <div class="m-8 my-20 max-w-[500px] mx-auto">
          <div class="mb-8">
            <p class="mb-4 text-lg text-brand-color-3 font-semibold text-center">
              AGREGAR PELICULA
            </p>
            <div
              class="bg-brand-color-2 p-8 text-center rounded-lg border-dashed border-2 border-gray-300 hover:border-gray-500-500 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-md"
              id="dropzone"
            >
              <label
                for="fileInput"
                class="cursor-pointer flex flex-row gap-3 justify-cente=] items-center space-y-2"
              >
                <img :src="Clip" alt="" srcset="" />
                <span class="text-gray-600">Agrega un archivo o arrastralo y sueltalo aqui </span>
              </label>
              <input name="fileInput" type="file" class="hidden" @change="selectFile" />
            </div>
          </div>
          <div class="space-y-4 flex flex-col items-center">
            <input
              type="text"
              placeholder="Ingresa el titulo"
              class="bg-inherit border-gray-400 border-b text-center text-white focus:border-none"
            />
            <span>{{ imageUpload }}</span>
            <button class="py-3 px-6 bg-gray-400 border rounded-md font-normal text-xl">
              SUBIR PELICULA
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Clip from '@/assets/clip.png'
import { ref } from 'vue'
let imageUpload = ref('')

const props = defineProps({
  open: {
    type: Boolean,
    required: false
  }
})

const selectFile = () => {
  this.$refs.fileInput.click()
}
</script>

<style lang="scss" scoped></style>
