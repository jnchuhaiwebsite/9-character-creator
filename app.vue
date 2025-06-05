<script setup lang="ts">

</script>

<template>
  <div class="app-container min-h-screen flex flex-col">
    <NuxtLayout> 
      <main class="main-content flex-1">
        <NuxtPage />
      </main>
    </NuxtLayout>
  </div>
</template>

<style>
/* 主题色 */
:root {
  /* 主题色 - South Park风格 */
  --theme-primary: #ff6b6b;
  --theme-primary-hover: #ff5252;
  --theme-primary-light: rgba(255, 107, 107, 0.1);
  --theme-primary-medium: rgba(255, 107, 107, 0.2);
  
  /* 文字颜色 */
  --text-primary: #1e293b;
  --text-secondary: #475569;
  
  /* 背景和边框 */
  --bg-primary: #f8fafc;
  --bg-secondary: #e2e8f0;
}

/* 主题色相关的通用类 */
.text-theme {
  color: var(--theme-primary);
}

.bg-theme {
  background-color: var(--theme-primary);
}

/* 修改hover-theme全局效果 */
.hover-theme:hover {
  background-color: var(--theme-primary-hover) !important;
}

/* 添加文本hover类 */
.hover-text-theme:hover {
  color: var(--theme-primary);
}

/* 博客相关样式 */
.blog-page-gradient {
  background-image: linear-gradient(to bottom, var(--bg-primary), var(--bg-secondary));
}

.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main-content {
  flex: 1 0 auto;
}
</style>
