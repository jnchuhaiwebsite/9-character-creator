<template>
  <div class="min-h-screen pt-20 pb-12">
    <div class="max-w-7xl mx-auto px-4">
      <h1 class="text-3xl font-bold text-gray-800 mb-8">My Works</h1>
      
      <!-- 作品列表 -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div v-for="work in works" :key="work.task_id" class="relative aspect-square bg-gray-100 rounded-lg overflow-hidden group">
          <!-- 操作按钮 -->
          <div class="absolute top-2 right-2 z-10 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
            <button 
              @click="previewImage(work.generate_image)"
              class="p-2 bg-black/50 hover:bg-black/70 rounded-full text-white transition-colors"
              title="Preview"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m4-3H6" />
              </svg>
            </button>
            <button 
              @click="downloadImage(work.generate_image)"
              class="p-2 bg-black/50 hover:bg-black/70 rounded-full text-white transition-colors"
              title="Download"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </button>
            <button 
              @click="copyPrompt(work.msg)"
              class="p-2 bg-black/50 hover:bg-black/70 rounded-full text-white transition-colors"
              title="Copy Prompt"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
              </svg>
            </button>
          </div>

          <img 
            :src="work.generate_image" 
            :alt="work.msg" 
            class="w-full h-full object-cover"
            loading="lazy"
            @error="handleImageError"
          />
          <div class="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center opacity-0 hover:opacity-100">
            <div class="text-white p-4 text-center">
              <p class="text-sm mb-2">{{ work.msg }}</p>
              <!-- <p class="text-xs bg-black/30 px-2 py-1 rounded">{{ formatDate(work.created_at) }}</p> -->
            </div>
          </div>
        </div>
      </div>

      <!-- 图片预览模态框 -->
      <div v-if="previewImageUrl" class="fixed inset-0 z-50 flex items-center justify-center bg-black/80" @click="previewImageUrl = null">
        <img :src="previewImageUrl" class="max-w-[90vw] max-h-[90vh] object-contain" @click.stop />
      </div>

      <!-- 加载状态 -->
      <div v-if="loading" class="flex flex-col items-center justify-center py-12">
        <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-southpark-stan"></div>
        <p class="mt-4 text-gray-600">Loading...</p>
      </div>

      <!-- 加载更多触发器 -->
      <div v-if="hasMore && !loading" ref="loadMoreTrigger" class="h-10"></div>

      <!-- 空状态 -->
      <div v-else-if="works.length === 0" class="text-center py-12">
        <div class="mb-6">
          <svg class="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </div>
        <h3 class="text-lg font-medium text-gray-900 mb-2">No Works Yet</h3>
        <p class="text-gray-500 mb-6">You haven't created any works yet. Start creating now!</p>
        <NuxtLink to="/" class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-southpark-stan hover:bg-southpark-stan/80">
          Start Creating
        </NuxtLink>
      </div>
    </div>

    <!-- Toast 组件 -->
    <Toast 
      :show="toast.show" 
      :title="toast.title" 
      :message="toast.message" 
      :type="toast.type"
      :duration="toast.duration"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, nextTick, watch } from 'vue'
import { useClerkAuth } from '~/utils/auth'
import { useRouter } from 'vue-router'
import { getOpusList } from '~/api/index'
import { useToast } from '~/composables/useToast'
import Toast from '~/components/Toast.vue'

const { toast, showToast } = useToast()

// 定义作品列表项接口
interface Work {
  task_id: string
  origin_image: string
  size_image: string
  other_image: string
  generate_image: string
  quality_image: string
  status: number
  status_msg: string
  generation_time: number
  msg: string
  created_at: number
  updated_at: number
}

// 定义API响应接口
interface ApiResponse<T> {
  code: number
  msg: string
  data: {
    count: number
    list: T[]
    total_page: number
  }
  success: boolean
}

const router = useRouter()
const { isSignedIn, isLoaded } = useClerkAuth()

// 状态管理
const works = ref<Work[]>([])
const loading = ref(false)
const currentPage = ref(1)
const hasMore = ref(true)
const loadMoreTrigger = ref<HTMLElement | null>(null)
const observer = ref<IntersectionObserver | null>(null)
const previewImageUrl = ref<string | null>(null)

// 格式化日期
const formatDate = (timestamp: number) => {
  const date = new Date(timestamp * 1000)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  })
}

// 处理图片加载错误
const handleImageError = (e: Event) => {
  const img = e.target as HTMLImageElement
  img.src = '/images/placeholder.png' // 设置一个默认的占位图
}

// 设置无限滚动观察器
const setupInfiniteScroll = () => {
  // 如果已经有观察器，先断开连接
  if (observer.value) {
    observer.value.disconnect()
  }

  observer.value = new IntersectionObserver(
    (entries) => {
      const target = entries[0]
      if (target.isIntersecting && !loading.value && hasMore.value) {
        console.log('Loading next page:', currentPage.value + 1)
        fetchWorks(currentPage.value + 1)
      }
    },
    {
      rootMargin: '200px', // 增加提前加载的距离
      threshold: 0.1 // 只要10%进入视口就触发
    }
  )

  // 确保DOM已经更新后再观察
  nextTick(() => {
    if (loadMoreTrigger.value) {
      observer.value?.observe(loadMoreTrigger.value)
    }
  })
}

// 获取作品列表
const fetchWorks = async (page: number = 1) => {
  try {
    loading.value = true
    // 检查是否已登录
    if (!isSignedIn.value) {
      console.error('User not logged in')
      router.push('/')
      return
    }

    const response = await getOpusList({
      page,
      page_size: 12,
      status: 1
    }) as ApiResponse<Work>

    if (response && response.code === 200) {
      if (page === 1) {
        works.value = response.data.list
      } else {
        works.value = [...works.value, ...response.data.list]
      }
      
      // 更新分页状态
      hasMore.value = page < response.data.total_page
      currentPage.value = page

      // 数据加载完成后，重新设置观察器
      if (hasMore.value) {
        setupInfiniteScroll()
      }
    } else {
      console.error('Failed to fetch works:', response?.msg || 'Unknown error')
    }
  } catch (error: any) {
    console.error('Failed to fetch works:', error?.message || error)
    if (error?.code === 401) {
      router.push('/')
    }
  } finally {
    loading.value = false
  }
}

// 预览图片
const previewImage = (url: string) => {
  previewImageUrl.value = url
}

// 下载图片
const downloadImage = async (url: string) => {
  try {
    const response = await fetch(url)
    const blob = await response.blob()
    const downloadUrl = window.URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = downloadUrl
    link.download = `image-${Date.now()}.png`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    window.URL.revokeObjectURL(downloadUrl)
  } catch (error) {
    console.error('Failed to download image:', error)
  }
}

// 复制提示词
const copyPrompt = async (prompt: string) => {
  try {
    await navigator.clipboard.writeText(prompt)
    showToast('Prompt copied to clipboard', 'info')
  } catch (error) {
    console.error('Failed to copy prompt:', error)
    showToast('Failed to copy prompt', 'error')
  }
}

onMounted(() => {
  const { isLoaded } = useClerkAuth()
  
  // 等待 Clerk 加载完成
  if (!isLoaded.value) {
    const unwatch = watch(isLoaded, (newValue) => {
      if (newValue) {
        unwatch() // 停止监听
        if (!isSignedIn.value) {
          router.push('/')
          return
        }
        fetchWorks()
        setupInfiniteScroll()
      }
    })
  } else {
    if (!isSignedIn.value) {
      router.push('/')
      return
    }
    fetchWorks()
    setupInfiniteScroll()
  }
})

onUnmounted(() => {
  if (observer.value) {
    observer.value.disconnect()
  }
})
</script>

<style>
/* 添加一些过渡效果 */
.group:hover .group-hover\:opacity-100 {
  transition: opacity 0.2s ease-in-out;
}
</style> 