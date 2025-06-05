<template>
  <div id="showcase" class="py-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Left Image Right Text -->
      <div class="flex flex-col md:flex-row items-center gap-12 mb-20">
        <div class="w-full md:w-1/2">
          <img 
            src="/img/01.webp" 
            alt="South Park Character Creator - Text to Image Generation" 
            class="w-full h-auto rounded-2xl shadow-xl transform hover:scale-105 transition-transform duration-300"
            @error="handleImageError"
            loading="lazy"
          />
        </div>
        <div class="w-full md:w-1/2 space-y-6">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900">Text to Image Generation</h2>
          <p class="text-lg text-gray-600">
            Transform your ideas into South Park style characters using our advanced AI-powered text-to-image generation. Simply describe your character
          </p>
          <ul class="space-y-3">
            <li class="flex items-start">
              <span class="text-southpark-kenny mr-2">✓</span>
              <span>Create characters by describing their appearance, clothing, and personality</span>
            </li>
            <li class="flex items-start">
              <span class="text-southpark-kenny mr-2">✓</span>
              <span>Generate multiple variations of your character with different styles</span>
            </li>
            <li class="flex items-start">
              <span class="text-southpark-kenny mr-2">✓</span>
              <span>Maintain authentic South Park art style in every generation</span>
            </li>
          </ul>
        </div>
      </div>

      <!-- Right Image Left Text -->
      <div class="flex flex-col md:flex-row-reverse items-center gap-12">
        <div class="w-full md:w-1/2">
          <img 
            src="/img/02.webp" 
            alt="South Park Character Creator - Image to Image Transformation" 
            class="w-full h-auto rounded-2xl shadow-xl transform hover:scale-105 transition-transform duration-300 cursor-pointer"
            @click="handleImageClick"
            @error="handleImageError"
            loading="lazy"
          />
        </div>
        <div class="w-full md:w-1/2 space-y-6">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900">Image to Image Transformation</h2>
          <p class="text-lg text-gray-600">
            Upload your own images and transform them into South Park style characters. Our AI-powered South Park Character Creator will maintain the essence of your original image while applying the distinctive South Park art style.
          </p>
          <ul class="space-y-3">
            <li class="flex items-start">
              <!-- <span class="text-southpark-kenny mr-2">✓</span> -->
              <span>Convert any image into South Park style while preserving key features</span>
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