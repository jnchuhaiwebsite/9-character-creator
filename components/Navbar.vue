<template>
  <header>
    <nav
      class="fixed top-0 left-0 w-full z-50 backdrop-blur-md shadow-md"
      style="background: rgba(255, 182, 193, 0.15)"
    >
      <div class="max-w-5xl mx-auto px-4">
        <div class="flex items-center justify-between h-16">
          <!-- Logo -->
          <div class="flex items-center gap-2">
            <NuxtLink to="/">
              <img src="/logo.png" alt="Baby Name Generator AI Logo - Find Perfect Baby Names" class="h-16" loading="lazy" />
            </NuxtLink>
          </div>

          <!-- PC端导航 -->
          <div class="hidden lg:flex items-center space-x-8">
            <template v-for="(section, index) in sections" :key="index">
              <NuxtLink
                v-if="section.href"
                :to="section.href"
                class="text-gray-600 hover:text-baby-coral transition-colors"
                @click.prevent="handleSkipClick(section.href)"
              >
                {{ section.name }}
              </NuxtLink>
              <div
                v-else-if="section.id"
                @click="handleNavClick(section.id)"
                class="text-gray-600 hover:text-baby-coral transition-colors cursor-pointer"
              >
                {{ section.name }}
              </div>
            </template>
          </div>

          <!-- 用户信息区域 - PC端 -->
          <UserMenu />

          <!-- 移动端菜单按钮 -->
          <button
            @click="isOpen = !isOpen"
            class="lg:hidden text-baby-coral p-2 rounded-md hover:bg-baby-pink/20 transition-colors"
          >
            <svg
              v-if="!isOpen"
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            <svg
              v-else
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>

      <!-- 移动端菜单，使用懒加载 -->
      <Transition name="slide-fade">
        <div
          v-if="isOpen"
          class="lg:hidden fixed top-0 left-0 w-full h-screen overflow-y-auto bg-white/95 backdrop-blur-sm z-[100]"
        >
          <!-- 关闭按钮 -->
          <button
            @click="isOpen = false"
            class="fixed top-4 right-4 text-baby-coral p-2 rounded-full hover:bg-baby-pink/20 transition-colors z-[101]"
          >
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <!-- 滚动内容区域 -->
          <div class="pt-16 px-4 pb-8">
            <!-- 导航链接 -->
            <div class="space-y-2 mb-6">
              <template v-for="(section, index) in sections" :key="index">
                <NuxtLink
                  v-if="section.href"
                  :to="section.href"
                  class="block text-gray-600 hover:text-baby-coral text-base py-2 transition-colors"
                  @click.prevent="handleSkipClick(section.href)"
                >
                  {{ section.name }}
                </NuxtLink>
                <div
                  v-else-if="section.id"
                  @click="handleNavClick(section.id)"
                  class="block text-gray-600 hover:text-baby-coral text-base py-2 transition-colors"
                >
                  {{ section.name }}
                </div>
              </template>
            </div>

            <!-- 移动端用户菜单 -->
            <UserMenu :isMobile="true" />
          </div>
        </div>
      </Transition>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { ref, watch, onUnmounted, onMounted } from "vue";
import { useNavigation } from "~/utils/navigation";

// 状态管理
const isOpen = ref(false);

// 使用导航工具
const { activeSection, sections, handleNavClick, handleScroll, executeScroll } =
  useNavigation();

// 处理点击跳转
const handleSkipClick = (href: string) => {
  isOpen.value = false;
};

onMounted(() => {
  // 只重置overflow，不改变滚动位置
  document.body.style.overflow = "";

  // 初始检查 sessionStorage 中是否有目标锚点
  const targetSection = sessionStorage.getItem("targetSection");
  if (targetSection) {
    // 清除目标锚点
    sessionStorage.removeItem("targetSection");
    // 延迟执行滚动操作，确保DOM已加载完成
    setTimeout(() => {
      executeScroll(targetSection);
    }, 100);
  }
});

// 监听菜单打开状态，控制body滚动
watch(isOpen, (newValue: any) => {
  if (newValue) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }
});

// 组件卸载时恢复body滚动
onUnmounted(() => {
  document.body.style.overflow = "";
});
</script>

<style scoped>
/* 导航栏动画 */
.nav-enter-active,
.nav-leave-active {
  transition: all 0.3s ease;
}

.nav-enter-from,
.nav-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}

/* 覆盖hover效果 */
.hover-text-theme:hover {
  color: var(--baby-coral) !important;
}
</style> 