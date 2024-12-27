<template>
  <div>
    <div class="flex min-h-screen flex-col">
      <TheHeader />
      <div class="flex w-full flex-1 flex-col items-center justify-center">
        <slot />
      </div>
    </div>
  </div>
</template>
