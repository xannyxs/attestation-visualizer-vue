<template>
  <div
    class="relative bg-white h-full w-full overflow-y-auto max-h-[calc(100vh)]">
    <SearchBar view="Grid view" @change="handleSearchChange" />

    <div class="grid grid-cols-2 gap-2 m-2">
      <GridCardSkeleton v-for="index in 16" :key="index" />
    </div>
  </div>
</template>

<script setup lang="ts">
import SearchBar from '~/components/Shared/SearchBar.vue';
import GridCardSkeleton from './GridCardSkeleton.vue';

const useSearchQuery = useState<string>('seachQuery', () => '')

const handleSearchChange = (event: any) => {
  useSearchQuery.value = event.target.value
}
</script>
