<script setup>
import { g_useActiveView } from '~/composables/SidebarRef';
import GridView from '~/components/View/Grid/GridView.vue';
import { ActiveView } from '~/utils/types.d'
</script>

<template>
  <main class="flex">
    <div class="z-10">
        <SidebarLayout />
    </div>

    <div
      :class="`w-[35rem] relative ${
        activeView === ActiveView.None ? 'z-0' : 'z-10'
      }`">
      <template v-if="g_useActiveView === ActiveView.Grid">
        <GridView />
      </template>
    <!-- <template v-if="g_useActiveView === ActiveView.List">
        <ListView />
      </template>
      <template v-if="g_useActiveView === ActiveView.Credits">
        <CreditsView />
      </template> -->
    </div>

    <div class="absolute">
      <ForceGraph />
    </div>
  </main>
</template>
