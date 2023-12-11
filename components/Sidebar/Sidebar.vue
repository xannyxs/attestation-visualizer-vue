<template>
  <aside class="h-screen">
    <nav class="h-full flex flex-col bg-white border-r">
      <div class="p-4 pb-2 flex justify-between items-center">
        <img
          :src="logoSrc"
          :class="`overflow-hidden transition-all ${expanded ? 'w-32' : 'w-0'}`"
          alt="logo"
          :width="dimension"
          :height="dimension" />
        <button
          @click="toggleExpanded"
          class="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100">
          <ChevronFirst v-if="expanded" />
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
import { expanded } from '~/composables/SidebarRef'

const logoSrc = 'https://img.logoipsum.com/243.svg'
const dimension = 150

const toggleExpanded = () => {
  expanded.value = !expanded.value
}
</script>
