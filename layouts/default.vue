<script setup lang="ts">
import { createPublicClient, http } from 'viem'
import { mainnet, createConfig } from 'use-wagmi'

const configWagmi = createConfig({
  autoConnect: true,
  publicClient: createPublicClient({
    chain: mainnet,
    transport: http(),
  }),
})
</script>

<template>
    <slot></slot>
</template>
