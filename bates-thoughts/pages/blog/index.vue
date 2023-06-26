<script setup lang="ts">

useHead({
  title: 'Blog'
})

interface Data<T> {
  data: {
    id: number;
    attributes: T;
  };
  meta: Record<string, unknown>;
}

type BlogRow = {
  Title: string,
  Summary: string,
  Cover: any,
  publishedAt: Date,
  tags: {
    data: [{
      attributes: {
        name: string
      }
    }]
  },
}

const { find } = useStrapi()

// const { data: blogs } = await find<BlogRow>('blogs?populate=*')
const { data: blogs, pending, refresh, error } = await useAsyncData('blog', () => find<BlogRow>('blogs', { populate: '*' }))

</script>

<template>
  <div>
    <div class="text-5xl mb-5 font-semibold">
      Blog
    </div>
    <div class="italic text-zinc-600 mb-10 text-lg">somewhere for me to brain-dump once in a while</div>
    <div v-if="pending">Fetching blogs...</div>
    <div v-else-if="blogs?.data">
      <div v-for="blog in blogs.data" class="mb-7">
        <div class="flex">
          <picture class="mr-7 rounded border-zinc-600 border overflow-hidden max-w-[350px]">
            <template v-if="blog.attributes.Cover">
              <nuxt-img 
                :src="`${blog.attributes.Cover.data.attributes.formats.small.url}`" 
                provider="strapi"
                class="w-full"
                format="webp" 
                :modifiers="{ roundCorner: '0:100' }"
              />
            </template>
            <template v-else>
              <nuxt-img 
                src="/dog2.jpg" 
                class="w-full"
                format="webp" 
                :modifiers="{ roundCorner: '0:100' }"
              />
            </template>
          </picture>
          <div class="flex flex-col">
            <div class="my-2 text-sm text-zinc-600">{{ new Date(blog.attributes.publishedAt).toLocaleDateString('en-UK') }}</div>
              <router-link :to="`/blog/${blog.id}`" class="text-3xl font-bold mb-2 block text-green-400">{{ blog.attributes.Title }}</router-link>
              <div class="text-lg">{{ blog.attributes.Summary }}</div>
              <div class="flex items-center my-2" v-if="blog.attributes.tags"><span class="mr-1">Tags:</span><span class="mx-1 px-2 py-0.5 rounded inline-block bg-zinc-800 hover:bg-zinc-700 cursor-pointer transition-all" v-for="tag in blog.attributes.tags.data">{{ tag.attributes.name }}</span></div>
              <div class="mt-auto">
                <router-link :to="`/blog/${blog.id}`" class="bg-zinc-800 inline-block rounded-sm border border-zinc-700 py-1 px-3 w-auto transition-all hover:border-green-400">Read ></router-link>
              </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
