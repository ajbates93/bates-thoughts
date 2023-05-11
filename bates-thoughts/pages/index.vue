<script setup lang="ts">

// type Blog = {
//   Title: string,
//   Summary: string,
//   MainPost: string,
//   Cover: string
// }

const { find } = useStrapi()

const { data: blogs } = await find('blogs')

</script>

<template>
  <div>
    <header class="p-5 bg-gray-100">Header</header>
    <main class="min-h-[400px] p-5 text-left max-w-[1280px] mx-auto">
      <div class="underline text-3xl">
        What's up?
      </div>
      <div class="underline text-3xl">
        Blogs
      </div>
      <div v-for="blog in blogs">
        {{ blog }}
      </div>
    </main>
    <footer class="p-5 bg-gray-100">Footer</footer>
  </div>
</template>
