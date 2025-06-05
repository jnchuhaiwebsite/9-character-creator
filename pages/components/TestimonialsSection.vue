<template>
  <div class="py-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-southpark-stan">User Reviews</h2>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto">Join thousands of happy users who are creating their own South Park style characters</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Testimonial 1 -->
        <div class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
          <div class="flex items-center mb-6">
            <div class="w-12 h-12 rounded-full bg-southpark-stanButton flex items-center justify-center text-white font-bold text-xl">
              J
            </div>
            <div class="ml-4">
              <h4 class="text-lg font-semibold text-gray-900">James Wilson</h4>
              <p class="text-gray-600">Los Angeles, USA</p>
            </div>
          </div>
          <p class="text-gray-600 italic">
            "This character creator is amazing! I was able to create a perfect South Park style character easily. The AI's prompt suggestions were accurate, allowing me to quickly get the desired effect."
          </p>
          <div class="mt-4 flex text-southpark-kenny">
            <svg v-for="i in 5" :key="i" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </div>
        </div>

        <!-- Testimonial 2 -->
        <div class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
          <div class="flex items-center mb-6">
            <div class="w-12 h-12 rounded-full bg-southpark-stanButton flex items-center justify-center text-white font-bold text-xl">
              E
            </div>
            <div class="ml-4">
              <h4 class="text-lg font-semibold text-gray-900">Emily Thompson</h4>
              <p class="text-gray-600">New York, USA</p>
            </div>
          </div>
          <p class="text-gray-600 italic">
            "As a South Park fan, this tool allowed me to create a perfect character. The image-to-image feature was especially great, allowing me to create new variations based on existing characters."
          </p>
          <div class="mt-4 flex text-southpark-kenny">
            <svg v-for="i in 5" :key="i" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </div>
        </div>

        <!-- Testimonial 3 -->
        <div class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
          <div class="flex items-center mb-6">
            <div class="w-12 h-12 rounded-full bg-southpark-stanButton flex items-center justify-center text-white font-bold text-xl">
              M
            </div>
            <div class="ml-4">
              <h4 class="text-lg font-semibold text-gray-900">Michael Anderson</h4>
              <p class="text-gray-600">Chicago, USA</p>
            </div>
          </div>
          <p class="text-gray-600 italic">
            "The preset prompt feature is so useful! It allowed me to quickly create various style characters. The interface is simple and intuitive, and the generation speed is fast, with great results. I highly recommend it to all South Park fans!"
          </p>
          <div class="mt-4 flex text-southpark-kenny">
            <svg v-for="i in 5" :key="i" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'TestimonialsSection'
})
</script> 