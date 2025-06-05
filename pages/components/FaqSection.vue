<template>
  <div class="relative w-full py-16 bg-southpark-mountain" aria-labelledby="faq-heading">
    <!-- 标题 -->
    <div class="max-w-7xl mx-auto px-4">
      <h2 id="faq-heading" class="text-3xl font-bold text-center mb-12 text-southpark-stan">Frequently Asked Questions</h2>
      
      <!-- 问题列表 -->
      <div class="max-w-4xl mx-auto bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
        <div 
          v-for="(item, index) in faqItems" 
          :key="index"
          class="border-b border-gray-200 py-6 last:border-b-0"
        >
          <!-- 问题标题（可点击切换展开/折叠） -->
          <div 
            class="w-full text-left flex justify-between items-center cursor-pointer hover:bg-southpark-snow rounded-lg px-4 py-2 transition-colors duration-200" 
            @click="toggleItem(index)"
            :aria-expanded="openItems[index]"
            :aria-controls="`faq-answer-${index}`"
          >
            <h3 class="text-lg text-southpark-text-primary font-medium flex items-center">
              <svg class="w-5 h-5 mr-2 text-southpark-stan" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
              </svg>
              {{ item.question }}
            </h3>
            <!-- 箭头图标（根据展开状态旋转） -->
            <svg 
              class="w-5 h-5 text-southpark-stan transform transition-transform duration-200" 
              :class="{'rotate-180': openItems[index]}"
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 20 20" 
              fill="currentColor"
              aria-hidden="true"
            >
              <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
          </div>
          
          <!-- 问题答案（展开时显示） -->
          <div 
            v-show="openItems[index]"
            class="mt-3 overflow-hidden transition-all duration-300 px-4"
            :id="`faq-answer-${index}`"
          >
            <p>{{ item.answer }}</p>
          </div>
        </div>
      </div>
      
      <!-- 查看更多按钮 -->
      <div class="text-center mt-10">
        <div 
          @click="showMore"
          v-if="hasMoreItems"
          class="bg-southpark-stanButton text-white hover:shadow-xl text-southpark-text-light font-medium py-2 px-6 rounded-full transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer inline-block"
        >
          Show More
        </div>
        <div 
          @click="showLess"
          v-else-if="visibleCount > initialVisibleCount"
          class="bg-southpark-stanButton text-white hover:shadow-xl text-southpark-text-light font-medium py-2 px-6 rounded-full transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer inline-block"
        >
          Show Less
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

defineOptions({
  name: 'FaqSection'
})

// FAQ data
const faqs = [
  {
    question: 'What is South Park Character Creator?',
    answer: 'South Park Character Creator is an innovative AI-driven tool that allows you to create unique South Park style characters. Our advanced algorithm generates characters that match the distinctive art style of South Park, including custom features, clothing, and accessories.'
  },
  {
    question: 'How does the character generation work?',
    answer: 'Our AI uses advanced machine learning models trained on South Park\'s unique art style. You can create characters using text prompts or by uploading reference images. The system will generate characters that maintain the iconic South Park look while incorporating your custom elements.'
  },
  {
    question: 'Can I use the generated characters commercially?',
    answer: 'Please refer to our Terms of Service for detailed information about usage rights. Generally, personal use is free, while commercial usage may require additional authorization or subscription to the appropriate commercial plan.'
  },
  {
    question: 'What file formats are supported for image uploads?',
    answer: 'We support common image formats including JPG, PNG, and WebP. For best results, we recommend using high-quality images with clear details.'
  },
  {
    question: 'How long does it take to generate a character?',
    answer: 'Character generation typically takes 10-30 seconds, depending on the complexity of your request and server load. You\'ll see a progress indicator during generation.'
  }
]

// 初始显示的FAQ数量
const initialVisibleCount = 4;
const visibleCount = ref(initialVisibleCount);

// 跟踪每个FAQ项的展开状态
const openItems = ref(Array(faqs.length).fill(false));

// 当前显示的FAQ项目
const faqItems = computed(() => {
  return faqs.slice(0, visibleCount.value);
});

// 是否还有更多FAQ可显示
const hasMoreItems = computed(() => {
  return visibleCount.value < faqs.length;
});

// 切换FAQ项的展开/折叠状态
const toggleItem = (index: number) => {
  openItems.value[index] = !openItems.value[index];
};

// 显示更多FAQ
const showMore = () => {
  visibleCount.value = faqs.length;
};

// 显示较少FAQ
const showLess = () => {
  visibleCount.value = initialVisibleCount;
};
</script>

<style scoped>
/* 旋转动画 */
.rotate-180 {
  transform: rotate(180deg);
}

/* 滑动过渡效果 */
.transition-all {
  transition-property: all;
}

.duration-200 {
  transition-duration: 200ms;
}

.duration-300 {
  transition-duration: 300ms;
}

/* 按钮悬浮效果 */
.hover\:shadow-lg:hover {
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}
</style> 