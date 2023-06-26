<script setup lang="ts">

useHead({
  titleTemplate: (title) => {
    return title ? `Alex Bates | ${title}` : 'Alex Bates | Web Dev'
  }
})

</script>

<template>
  <div class="bg-zinc-200 dark:bg-zinc-900 text-white dark:text-zinc-200 flex flex-col justify-between min-h-screen">
    <Header />
    <main class="min-h-[80vh] px-5 py-10 text-left sm:max-w-[780px] lg:max-w-[1080px] mx-auto w-full">
      <slot />
    </main>
    <Footer />
  </div>
</template>
