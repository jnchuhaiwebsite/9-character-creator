<template>
  <div id="showcase" class="py-20 bg-gradient-to-b from-baby-pink/10 to-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Left Image Right Text -->
      <div class="flex flex-col md:flex-row items-center gap-12 mb-20">
        <div class="w-full md:w-1/2">
          <img 
            src="/img/01.webp" 
            alt="AI Baby Name Generator Interface - Smart Name Suggestions" 
            class="w-full h-auto rounded-2xl shadow-xl transform hover:scale-105 transition-transform duration-300"
            @error="handleImageError"
            loading="lazy"
          />
        </div>
        <div class="w-full md:w-1/2 space-y-6">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900">Smart Name Generation</h2>
          <p class="text-lg text-gray-600">
            Our AI name generator uses advanced algorithms to provide personalized name suggestions. Whether you prefer traditional or modern styles, we'll help you find the perfect name.
          </p>
          <ul class="space-y-4">
            <li class="flex items-center gap-3">
              <div class="w-8 h-8 bg-gradient-to-r from-baby-coral to-baby-purple rounded-full flex items-center justify-center">
                <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span class="text-gray-700">Multi-dimensional Filtering System</span>
            </li>
            <li class="flex items-center gap-3">
              <div class="w-8 h-8 bg-gradient-to-r from-baby-coral to-baby-purple rounded-full flex items-center justify-center">
                <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span class="text-gray-700">Intelligent Recommendation Algorithm</span>
            </li>
            <li class="flex items-center gap-3">
              <div class="w-8 h-8 bg-gradient-to-r from-baby-coral to-baby-purple rounded-full flex items-center justify-center">
                <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span class="text-gray-700">Cross-cultural Name Database</span>
            </li>
          </ul>
        </div>
      </div>

      <!-- Right Image Left Text -->
      <div class="flex flex-col md:flex-row-reverse items-center gap-12">
        <div class="w-full md:w-1/2">
          <img 
            src="/img/02.webp" 
            alt="Baby Name Meaning Analysis - AI Name Generator Features" 
            class="w-full h-auto rounded-2xl shadow-xl transform hover:scale-105 transition-transform duration-300 cursor-pointer"
            @click="handleImageClick"
            @error="handleImageError"
            loading="lazy"
          />
        </div>
        <div class="w-full md:w-1/2 space-y-6">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900">In-depth Name Analysis</h2>
          <p class="text-lg text-gray-600">
            Each name is carefully analyzed to provide detailed cultural background, meaning interpretation, and style characteristics to help you make the best choice.
          </p>
          <ul class="space-y-4">
            <li class="flex items-center gap-3">
              <div class="w-8 h-8 bg-gradient-to-r from-baby-coral to-baby-purple rounded-full flex items-center justify-center">
                <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span class="text-gray-700">Name Meaning Analysis</span>
            </li>
            <li class="flex items-center gap-3">
              <div class="w-8 h-8 bg-gradient-to-r from-baby-coral to-baby-purple rounded-full flex items-center justify-center">
                <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span class="text-gray-700">Cultural Background Introduction</span>
            </li>
            <li class="flex items-center gap-3">
              <div class="w-8 h-8 bg-gradient-to-r from-baby-coral to-baby-purple rounded-full flex items-center justify-center">
                <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span class="text-gray-700">Pronunciation and Writing Guide</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'ShowcaseSection'
})

const handleImageError = (e: Event) => {
  const img = e.target as HTMLImageElement;
  // img.src = '/img/placeholder.png'; // Set a default placeholder image
  console.error('Image loading failed:', img.src);
}

const handleImageClick = () => {
  // 上滑到首屏表单区域
  const heroSection = document.getElementById('hero');
  if (heroSection) {
    heroSection.scrollIntoView({ behavior: 'smooth' });
  }
}
</script>

<style scoped>
.transform {
  transition: transform 0.3s ease-in-out;
}

.transform:hover {
  transform: scale(1.05);
}
</style> 