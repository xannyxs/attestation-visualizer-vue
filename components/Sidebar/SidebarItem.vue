<template>
  <li
    :class="`relative flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors group ${
      active
        ? 'bg-gradient-to-tr from-red-200 to-red-100 text-red-800'
        : 'hover:bg-red-50 text-gray-600'
    }`">
    <icon />
    <span
      :class="`overflow-hidden transition-all ${
        expanded ? 'w-52 ml-3' : 'w-0'
      }`"
      >{{ text }}</span
    >
    <div
      v-if="!expanded"
      class="absolute left-full rounded-md px-2 py-1 ml-6 bg-red-100 text-red-800 text-sm invisible opacity-20 -translate-x-3 transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0">
      {{ text }}
    </div>
  </li>
</template>

<script setup lang="ts">
import type { Icon } from 'lucide-vue-next'
import { expanded } from '~/composables/SidebarRef'

withDefaults(
  defineProps<{
    icon: Icon
    text: String
    active?: boolean
  }>(),
  {
    active: false,
  }
)
</script>
