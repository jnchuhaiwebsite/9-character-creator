<template>
  <div class="min-h-screen pt-20 pb-12">
    <div class="max-w-7xl mx-auto px-4">
      <h1 class="text-3xl font-bold text-gray-800 mb-8">My Works</h1>
      
      <!-- 作品列表 -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <!-- 1:1 图片容器 -->
        <div v-for="work in works" :key="work.task_id" class="relative aspect-square bg-gray-100 rounded-lg overflow-hidden">
          <img :src="work.generate_image" :alt="work.msg" class="w-full h-full object-cover" />
          <div class="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center opacity-0 hover:opacity-100">
            <div class="text-white p-4 text-center">
              <p class="text-sm mb-2">{{ work.msg }}</p>
              <p class="text-xs bg-black/30 px-2 py-1 rounded">{{ formatDate(work.created_at) }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- 加载状态 -->
      <div v-if="loading" class="flex flex-col items-center justify-center py-12">
        <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-southpark-stan"></div>
        <p class="mt-4 text-gray-600">Loading...</p>
      </div>

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
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useClerkAuth } from '~/utils/auth'
import { useRouter } from 'vue-router'
import { getOpusList } from '~/api/index'

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
const { isSignedIn } = useClerkAuth()

// 状态管理
const works = ref<Work[]>([])
const loading = ref(true)

// 格式化日期
const formatDate = (timestamp: number) => {
  const date = new Date(timestamp * 1000)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  })
}

// 获取状态样式
const getStatusStyle = (status: number) => {
  switch (status) {
    case 1:
      return 'bg-green-100 text-green-800'
    case 0:
      return 'bg-yellow-100 text-yellow-800'
    case -1:
      return 'bg-red-100 text-red-800'
    default:
      return 'bg-gray-100 text-gray-800'
  }
}

// 获取作品列表
const fetchWorks = async () => {
  try {
    loading.value = true
    // 检查是否已登录
    if (!isSignedIn.value) {
      console.error('User not logged in')
      router.push('/')
      return
    }

    const response = await getOpusList({
      page: 1,
      page_size: 20,
      status: 1
    })

    if (response && response.code === 200) {
      works.value = response.data.list
    } else {
      console.error('Failed to fetch works:', response?.msg || 'Unknown error')
    }
  } catch (error: any) {
    console.error('Failed to fetch works:', error?.message || error)
    // 如果是未授权错误，重定向到首页
    if (error?.code === 401) {
      router.push('/')
    }
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  // 如果用户未登录，重定向到首页
  if (!isSignedIn.value) {
    router.push('/')
    return
  }
  
  // 获取作品列表
  fetchWorks()
})
</script> 