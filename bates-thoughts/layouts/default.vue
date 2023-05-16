<script setup lang="ts">

</script>

<template>
  <div class="bg-zinc-200 dark:bg-zinc-900 text-white dark:text-zinc-200">
    <Header />
    <main class="min-h-[80vh] px-5 py-10 text-left sm:max-w-[780px] lg:max-w-[1080px] mx-auto">
      <slot />
    </main>
    <Footer />
  </div>
</template>
