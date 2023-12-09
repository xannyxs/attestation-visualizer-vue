<script lang="ts">
import { createPublicClient, http } from "viem";
import { mainnet } from "use-wagmi";

const configWagmi = createConfig({
  autoConnect: true,
  publicClient: createPublicClient({
    chain: mainnet,
    transport: http(),
  }),
});
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
