<template>
  <div class="w-[1/4] relative">
    <Sidebar>
      <SidebarItem :icon="LayoutGrid" text="Grid view" :active="curActiveView === ActiveView.Grid"
        @click="() => handleItemClick(ActiveView.Grid)" />
      <SidebarItem :icon="Rows" text="List view" :active="curActiveView === ActiveView.List"
        @click="() => handleItemClick(ActiveView.List)" />
      <SidebarItem :icon="Gem" text="Credits" :active="curActiveView === ActiveView.Credits"
        @click="() => handleItemClick(ActiveView.Credits)" />
      <SidebarItem :icon="Bug" text="Report bug" :active="curActiveView === ActiveView.Bug"
        @click="navigateTo('https://github.com/xvoorvaa/attestation-visualizer/issues/new?assignees=&labels=&projects=&template=bug_report.md', { external: true })" />
      <SidebarItem :icon="Rocket" text="Feature request" :active="curActiveView === ActiveView.Feature"
        @click="navigateTo('https://github.com/xvoorvaa/attestation-visualizer/issues/new?assignees=&labels=&projects=&template=feature_request.md', { external: true })" />
    </Sidebar>
  </div>
</template>

<script setup lang="ts">
import { Gem, LayoutGrid, Rows, Bug, Rocket } from "lucide-vue-next";
import { ActiveView } from "~/utils/types.d";
import SidebarItem from '~/components/Sidebar/SidebarItem.vue'
import { curActiveView } from "~/composables/SidebarRef";

const handleItemClick = (view: ActiveView) => {
  console.log('Changing view to:', view)
  curActiveView.value = curActiveView.value === view ? ActiveView.None : view;
};
</script>
