<template>
  <div class="flex flex-col min-h-screen justify-between">
    <Navbar :activeSection="activeSection" />
    <slot />
    <Footer />
    <BackToTop />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import Navbar from '~/components/Navbar.vue'
import Footer from '~/components/Footer.vue'
import BackToTop from '~/components/BackToTop.vue'

const activeSection = ref('hero')

// 监听滚动事件来更新当前活动部分
const handleScroll = () => {
  const sections = ['hero', 'introduce', 'showcase', 'pricing', 'comments', 'faq']
  const scrollPosition = window.scrollY + 100 // 添加一些偏移量

  for (const section of sections) {
    const element = document.getElementById(section)
    if (element) {
      const { offsetTop, offsetHeight } = element
      if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
        activeSection.value = section
        break
      }
    }
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  // 检查是否有目标锚点
  const targetSection = sessionStorage.getItem('targetSection')
  if (targetSection) {
    activeSection.value = targetSection
  }
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>