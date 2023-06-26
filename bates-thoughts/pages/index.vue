<script setup lang="ts">

useHead({
  title: 'Home',
  meta: [
    { name: 'description', content: 'Alex Bates is a full-stack web developer from the North of England.'}
  ]
})
</script>

<template>
  <div class="text-xl">
      <p class="my-2">Hello there 👋 I'm <span class="text-green-500 font-semibold">Alex Bates</span> - I'm a senior full-stack developer based in the UK.</p>
      <p class="my-2">I've been in my current role for over 8 years. At the moment <span class="text-orange-500">I lead a growing team</span> on various projects.</p>
      <p class="my-2">Working in a web development agency that has been in the industry for over 30 years means that I have been exposed to a <span class="text-blue-500">varying tech stack</span>.</p>
      <p class="my-2">I've written everything from small SPAs to enterprise-scale applications using a <span class="text-yellow-500">variety of languages and frameworks</span>, including but not limited to Typescript, Vue, C#, Nuxt, .NET Framework & Core.</p>
      <p class="my-2">Front-end, back-end, client-facing roles, <span class="text-red-500">making coffee</span>, leading projects, building CI/CD pipelines, managing staff.</p>
      <p class="my-2">I occasionally take on side projects so if you've got a cool idea then <a class="text-green-500 font-semibold underline decoration-wavy tracking-wider" href="/">hit me up</a>.</p>
      <div class="h-[2px] w-full bg-zinc-600 my-10"></div>
      <p class="my-2">Oh, I also have a <NuxtLink class="text-green-500" to="/blog">blog</NuxtLink> that I post to every once in a while 📝 It's written in Nuxt & Strapi for the CMS. If you're interested I wrote a <NuxtLink class="text-orange-500" to="/blog/1">blog post</NuxtLink> exactly about how I built it.</p>
  </div>
</template>