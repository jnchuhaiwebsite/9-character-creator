<template>
  <div class="min-h-screen blog-page-gradient pb-10">

    <!-- Page title -->
    <div class="pt-32 pb-12 text-center">
      <h1 class="text-3xl md:text-4xl font-bold mb-2 text-baby-coral">South Park AI Image Generator Blog</h1>
      <p class="text-gray-600">Create unique South Park style images using AI text-to-image and image-to-image generation</p>
    </div>
    
    <div class="flex flex-col md:flex-row gap-4 md:gap-8 mb-16 mx-auto w-11/12 max-w-7xl">
      <!-- Categories on the left -->
      <div class="w-full md:w-64">
        <div class="flex flex-row md:flex-col space-x-2 md:space-x-0 md:space-y-2 overflow-x-auto md:overflow-x-visible pb-2 md:pb-0">
          <div 
            class="px-3 md:px-4 py-2 rounded-lg transition-colors cursor-pointer whitespace-nowrap text-sm md:text-base"
            :class="currentCategory === 'all' ? 'bg-baby-coral text-white' : 'bg-white/70 text-gray-700 hover:bg-white'"
            @click="currentCategory = 'all'"
          >
            All
          </div>
          <div 
            v-for="category in allCategories" 
            :key="category"
            class="px-3 md:px-4 py-2 rounded-lg transition-colors whitespace-nowrap cursor-pointer text-sm md:text-base"
            :class="currentCategory === category ? 'bg-baby-coral text-white' : 'bg-white/70 text-gray-700 hover:bg-white'"
            @click="currentCategory = category"
          >
            {{ category }}
          </div>
        </div>
      </div>

      <!-- Blog list on the right -->
      <div class="flex-1">
        <div class="space-y-4 md:space-y-6">
          <NuxtLink 
            v-for="post in filteredPosts" 
            :key="post.id"
            :to="`/blog/${post.id}`"
            class="block bg-white rounded-xl p-4 md:p-6 shadow-sm hover:shadow-md transition-all border border-gray-100 hover:border-gray-200 hover:translate-y-[-2px]"
          >
            <div class="flex flex-col md:flex-row md:justify-between md:items-start gap-2 md:gap-4 mb-3 md:mb-4">
              <div class="flex-1 min-w-0">
                <h2 class="text-lg md:text-xl font-bold mb-1 md:mb-2 text-gray-700 truncate">{{ post.title }}</h2>
                <p class="text-sm md:text-base text-gray-600 line-clamp-2">{{ post.description }}</p>
              </div>
              <span class="px-2 md:px-3 py-1 category-badge text-xs md:text-sm rounded-full whitespace-nowrap inline-block w-fit bg-southpark-stanButton">
                {{ getCategoryLabel(post.category) }}
              </span>
            </div>
            <div class="text-gray-500 text-xs md:text-sm">
              {{ post.date }}
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useBlogPosts } from '~/composables/useBlogPosts'
import { useSeo } from '~/composables/useSeo'

useSeo({
  title: "South Park Character Creator Blog - Tips and Tutorials",
  description: "Explore our South Park Character Creator blog for tips, tutorials, and inspiration on creating unique South Park style characters. Learn how to use our AI-powered character creator effectively.",
  ogTitle: "South Park Character Creator Blog - Tips and Tutorials",
  ogDescription: "Explore our South Park Character Creator blog for tips, tutorials, and inspiration on creating unique South Park style characters. Learn how to use our AI-powered character creator effectively.",
  twitterTitle: "South Park Character Creator Blog - Tips and Tutorials",
  twitterDescription: "Explore our South Park Character Creator blog for tips, tutorials, and inspiration on creating unique South Park style characters. Learn how to use our AI-powered character creator effectively."
});

// Use blog posts data
const { 
  currentCategory, 
  filteredPosts, 
  getCategoryLabel,
  allCategories
} = useBlogPosts()

// Set canonical URL when mounted
onMounted(() => {
  
})
</script>

<style>
.category-badge {
  background-color: #1D90FF;
  color: white;
}
</style> 