<script setup lang="ts">
import { NuxtPage } from '#components'
</script>

<template>
  <div class="grid h-screen grid-cols-1 md:grid-cols-2">
    <div class="flex flex-col justify-center px-6 py-20">
      <div class="mx-auto w-full max-w-lg">
        <NuxtPage />
      </div>
    </div>

    <div class="bg-black" />
  </div>
</template>
