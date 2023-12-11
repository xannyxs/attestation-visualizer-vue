<script setup>
import { ActiveView } from '~/utils/types.d';
// import { curActiveView } from '~/composables/SidebarRef';
</script>

<template>
  <main class="flex">
    <div class="z-10">
      <SidebarLayout />
    </div>

    <div :class="`w-[35rem] relative ${activeView === ActiveView.None ? 'z-0' : 'z-10'
      }`">
      <template v-if="curActiveView === ActiveView.Grid">
        <GridView />
      </template>
      <!-- <template v-if="curActiveView === ActiveView.List">
        <ListView />
      </template>
      <template v-if="curActiveView === ActiveView.Credits">
        <CreditsView />
      </template> -->
    </div>


    <div class="absolute">
      <ForceGraph />
    </div>
  </main>
</template>
