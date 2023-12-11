<template>
  <aside class="h-screen">
    <nav class="h-full flex flex-col bg-white border-r">
      <div class="p-4 pb-2 flex justify-between items-center">
        <NuxtImg
          :src="logoSrc"
          :class="`overflow-hidden transition-all ${g_useExpanded ? 'w-32' : 'w-0'}`"
          alt="logo"
          :width="dimension"
          :height="dimension" />
        <button
          class="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100"
          @click="toggleExpanded">
          <ChevronFirst v-if="g_useExpanded" />
          <ChevronLast v-else />
        </button>
      </div>

      <ul class="flex-1 px-3">
        <slot></slot>
      </ul>
    </nav>
  </aside>
</template>

<script setup lang="ts">
import { ChevronFirst, ChevronLast } from 'lucide-vue-next'

const logoSrc = 'https://img.logoipsum.com/243.svg'
const dimension = 150

const toggleExpanded = () => {
  g_useExpanded.value = !g_useExpanded.value
}
</script>
