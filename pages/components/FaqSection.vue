<template>
  <div id="faq" class="relative w-full py-16 bg-gradient-to-b from-white via-[#f3efff] to-white" aria-labelledby="faq-heading">
    <!-- 标题 -->
    <div class="max-w-7xl mx-auto px-4">
      <h2 id="faq-heading" class="text-3xl font-bold text-center mb-12 text-baby-coral">Frequently Asked Questions</h2>
      
      <!-- 问题列表 -->
      <div class="max-w-4xl mx-auto">
        <div 
          v-for="(item, index) in faqItems" 
          :key="index"
          class="border-b border-gray-200 py-6"
        >
          <!-- 问题标题（可点击切换展开/折叠） -->
          <div 
            class="w-full text-left flex justify-between items-center cursor-pointer" 
            @click="toggleItem(index)"
            :aria-expanded="openItems[index]"
            :aria-controls="`faq-answer-${index}`"
          >
            <h3 class="text-lg text-gray-800 font-medium flex items-center">
              <svg class="w-5 h-5 mr-2 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
              </svg>
              {{ item.question }}
            </h3>
            <!-- 箭头图标（根据展开状态旋转） -->
            <svg 
              class="w-5 h-5 text-gray-500 transform transition-transform duration-200" 
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
            class="mt-3 text-gray-600 overflow-hidden transition-all duration-300"
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
          class="bg-gradient-to-r from-baby-coral to-baby-purple hover:shadow-xl text-white font-medium py-2 px-6 rounded-full transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer inline-block"
        >
          Show More
        </div>
        <div 
          @click="showLess"
          v-else-if="visibleCount > initialVisibleCount"
          class="bg-gradient-to-r from-baby-coral to-baby-purple hover:shadow-xl text-white font-medium py-2 px-6 rounded-full transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer inline-block"
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

// FAQ数据
const allFaqItems = [
  {
    question: 'What is GenBabyName AI Baby Name Generator?',
    answer: 'GenBabyName is an innovative AI-powered tool that suggests unique and meaningful baby names based on your preferences and criteria. Our advanced algorithm analyzes cultural, historical, and linguistic patterns to provide personalized name recommendations.'
  },
  {
    question: 'How does GenBabyName work?',
    answer: 'Finding the perfect name is simple with GenBabyName. We take your inputs for gender, desired attributes, and any exclusions you specify. Our tailored AI prompt then analyzes these preferences along with cultural significance, pronunciation, and family traditions to generate personalized name suggestions that match your criteria perfectly.'
  },
  {
    question: 'How easy is it to use GenBabyName?',
    answer: 'Our AI baby name generator is designed to be user-friendly and intuitive. Just enter some details about your preferences and family background, and you\'ll effortlessly discover suitable baby names that match your criteria.'
  },
  {
    question: 'Why choose GenBabyName AI Generator?',
    answer: 'Our AI goes beyond generic name lists by analyzing cultural, historical, and linguistic patterns to suggest meaningful and unique names. With GenBabyName, you get an intuitive interface, extensive customization options, and privacy assurance.'
  },
  {
    question: 'What customization options are available?',
    answer: 'GenBabyName offers various customization options including cultural preferences, name meanings, length preferences. You can also specify gender and origin preferences.'
  },
  {
    question: 'How does the AI generate personalized name suggestions?',
    answer: 'Our AI analyzes your preferences, cultural background, and specified criteria to generate personalized name suggestions. It considers factors like name meanings, popularity trends, cultural significance, and linguistic patterns to provide relevant recommendations.'
  },
  {
    question: 'Does GenBabyName consider name popularity trends?',
    answer: 'Yes, our AI takes into account current name popularity trends while also suggesting unique alternatives. You can specify whether you prefer trending names or more distinctive options, helping you make an informed decision.'
  },
  {
    question: 'Can I get name meanings and origins for the suggestions?',
    answer: 'Absolutely! Each name suggestion comes with detailed information about its meaning, origin, cultural significance, and historical context. This helps you understand the deeper significance of each name option.'
  }
];

// 初始显示的FAQ数量
const initialVisibleCount = 4;
const visibleCount = ref(initialVisibleCount);

// 跟踪每个FAQ项的展开状态
const openItems = ref(Array(allFaqItems.length).fill(false));

// 当前显示的FAQ项目
const faqItems = computed(() => {
  return allFaqItems.slice(0, visibleCount.value);
});

// 是否还有更多FAQ可显示
const hasMoreItems = computed(() => {
  return visibleCount.value < allFaqItems.length;
});

// 切换FAQ项的展开/折叠状态
const toggleItem = (index: number) => {
  openItems.value[index] = !openItems.value[index];
};

// 显示更多FAQ
const showMore = () => {
  visibleCount.value = allFaqItems.length;
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