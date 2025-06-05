<template>
  <div id="showcase" class="py-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Left Image Right Text -->
      <div class="flex flex-col md:flex-row items-center gap-12 mb-20">
        <div class="w-full md:w-1/2">
          <img 
            src="/img/01.webp" 
            alt="South Park Character Creator Interface - Smart Character Generation" 
            class="w-full h-auto rounded-2xl shadow-xl transform hover:scale-105 transition-transform duration-300"
            @error="handleImageError"
            loading="lazy"
          />
        </div>
        <div class="w-full md:w-1/2 space-y-6">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900">Smart Character Generation</h2>
          <p class="text-lg text-gray-600">
            Our AI character generator uses advanced algorithms to provide personalized character creation suggestions. Whether you prefer traditional or modern styles, we can help you create the perfect South Park style character.
          </p>
          <ul class="space-y-3">
            <li class="flex items-start">
              <span class="text-southpark-kenny mr-2">✓</span>
              <span>Multi-dimensional character customization system to meet your personalized needs</span>
            </li>
            <li class="flex items-start">
              <span class="text-southpark-kenny mr-2">✓</span>
              <span>Smart prompt recommendation algorithm for optimal creation suggestions</span>
            </li>
            <li class="flex items-start">
              <span class="text-southpark-kenny mr-2">✓</span>
              <span>Rich character style library for creating unique character images</span>
            </li>
          </ul>
        </div>
      </div>

      <!-- Right Image Left Text -->
      <div class="flex flex-col md:flex-row-reverse items-center gap-12">
        <div class="w-full md:w-1/2">
          <img 
            src="/img/02.webp" 
            alt="South Park Character Analysis - AI Character Generator Features" 
            class="w-full h-auto rounded-2xl shadow-xl transform hover:scale-105 transition-transform duration-300 cursor-pointer"
            @click="handleImageClick"
            @error="handleImageError"
            loading="lazy"
          />
        </div>
        <div class="w-full md:w-1/2 space-y-6">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900">In-depth Character Analysis</h2>
          <p class="text-lg text-gray-600">
            Each character undergoes careful analysis, providing detailed style features, scene adaptation, and personalized suggestions to help you create the perfect South Park style character that meets your expectations.
          </p>
          <ul class="space-y-3">
            <li class="flex items-start">
              <span class="text-southpark-kenny mr-2">✓</span>
              <span>Character style analysis to ensure South Park authenticity</span>
            </li>
            <li class="flex items-start">
              <span class="text-southpark-kenny mr-2">✓</span>
              <span>Scene adaptation suggestions to better integrate characters into stories</span>
            </li>
            <li class="flex items-start">
              <span class="text-southpark-kenny mr-2">✓</span>
              <span>Personalized customization guidance for unique character creation</span>
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
  // Scroll to the hero form section
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