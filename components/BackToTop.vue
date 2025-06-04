<template>
  <button
    @click="scrollToTop"
    class="fixed bottom-20 right-8 w-12 h-12 rounded-full bg-gradient-to-r from-baby-coral to-baby-purple text-white shadow-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110 z-50 hover:shadow-xl"
    :class="{ 'opacity-0 translate-y-10 pointer-events-none': !isVisible, 'opacity-100 translate-y-0': isVisible }"
    aria-label="Back to top"
  >
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M18 15l-6-6-6 6"/>
    </svg>
  </button>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, defineComponent } from 'vue'

defineComponent({
  name: 'BackToTop'
})

// 控制按钮可见性
const isVisible = ref(false)
const visibilityThreshold = 300 // 滚动超过300px时显示按钮

// 滚动到顶部
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

// 监听滚动事件
const handleScroll = () => {
  isVisible.value = window.scrollY > visibilityThreshold
}

// 组件挂载和卸载时添加/移除滚动监听
onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  // 初始检查
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
