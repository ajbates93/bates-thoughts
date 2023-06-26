<script setup lang="ts">
import { parseMarkdown } from '~/utils/parseMarkdown'

type Blog = {
  Title: string,
  Summary: string,
  Cover: any,
  Main_Post: string,
  createdAt: Date,
  tags: {
    data: [{
      attributes: {
        name: string
      }
    }]
  },
}

const { findOne } = useStrapi()
const route = useRoute()

console.log(route)

const { data: blog, pending, refresh, error } = await useAsyncData('blog', 
  () => findOne<Blog>('blogs', route.params.id.toString(), { populate: '*' }))

const parsed = await parseMarkdown(blog.value?.data.attributes.Main_Post ?? '')

</script>

<template>
  <div>
      <div v-if="pending">
        loading
      </div>
      <div v-else-if="blog">
        <nuxt-img 
          :src="`${blog.data.attributes.Cover.data.attributes.formats.large.url}`" 
          provider="strapi"
          format="webp" 
          :modifiers="{ roundCorner: '0:100' }"
        />
        <h1 class="text-5xl font-semibold mt-10 mb-5">{{ blog.data.attributes.Title }}</h1>
        <h3 class="text-2xl font-semibold text-green-500 my-2">{{ blog.data.attributes.Summary }}</h3>
        <div class="my-2 flex justify-between items-center">
          <div class="text-zinc-500">
            Date: {{ new Date(blog.data.attributes.createdAt).toLocaleDateString('en-UK') }}</div>
          </div>
          <div>
            Tags: <span class="mx-1 px-2 py-0.5 rounded inline-block bg-zinc-800 hover:bg-zinc-700 cursor-pointer transition-all" v-for="tag in blog.data.attributes.tags.data">{{ tag.attributes.name }}</span>
          </div>
        <div class="border-t-2 py-5 my-5 border-zinc-700">
          <ContentRendererMarkdown :value="parsed" v-if="parsed" />
        </div>
      </div>
  </div>
</template>

<style scoped>
  
</style>