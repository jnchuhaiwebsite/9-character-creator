<template>
  <!-- 标题 -->
  <div class="text-center px-4 py-8 pt-24">
      <h1 class="text-4xl md:text-5xl font-bold text-southpark-stan mb-4 text-center animate-float flex justify-center">
        South Park Character Creator - AI Character Generator
      </h1>
      <h2 class="text-gray-600 text-base md:text-lg mb-8 text-center max-w-2xl mx-auto">
        Create unique South Park style characters with our AI character generator. Generate your own custom South Park character using text prompts or image references.
      </h2>
    </div>
    <!-- 生成图片 -->
  <div class="flex flex-col lg:flex-row bg-white rounded-lg shadow-lg p-4 sm:p-6 max-w-[1200px] mx-auto mt-2 mb-16 w-full">
    <!-- 左侧表单区域 -->
    <div class="lg:w-1/2 w-full lg:pr-8 flex flex-col h-[450px] min-h-[450px]">
      <!-- Mode Toggle -->
      <div class="flex items-center mb-4">
        <button
          @click="mode = 't2i'"
          :class="[
            'px-3 sm:px-4 py-2 rounded-l-lg transition-colors text-sm sm:text-base',
            mode === 't2i'
              ? 'bg-southpark-stan text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          ]"
        >
          Text to Image
        </button>
        <button
          @click="mode = 'i2i'"
          :class="[
            'px-3 sm:px-4 py-2 rounded-r-lg transition-colors text-sm sm:text-base',
            mode === 'i2i'
              ? 'bg-southpark-stan text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          ]"
        >
          Image to Image
        </button>
      </div>
      <!-- Text to Image Form -->
      <div v-if="mode === 't2i'" class="flex-1 h-[350px]">
        <div class="relative h-full">
          <div class="flex flex-col gap-2 h-full">
            <div class="flex justify-between items-center mb-2">
              <label class="block text-sm font-medium text-gray-700">Prompt</label>
              <button
                class="px-2 py-1 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 transition-all flex items-center gap-1 text-xs sm:text-sm font-medium shadow-sm"
                @click="() => selectPresetPrompt()"
                type="button"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" class="w-3 h-3 sm:w-4 sm:h-4">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"></path>
                </svg>
                Examples
              </button>
            </div>
            <textarea
              v-model="prompt"
              rows="8"
              class="w-full h-[200px] px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-southpark-stan text-sm sm:text-base"
              placeholder="Enter your image description..."
            ></textarea>
            <!-- 添加尺寸选择器 -->
            <div class="mt-4">
              <label class="block text-sm font-medium text-gray-700 mb-2">Image Size</label>
              <div class="flex gap-2">
                <button
                  v-for="size in imageSizes"
                  :key="size.value"
                  @click="selectedSize = size.value"
                  :class="[
                    'px-3 py-2 rounded-md text-sm transition-colors',
                    selectedSize === size.value
                      ? 'bg-southpark-stan text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  ]"
                >
                  {{ size.label }}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Image to Image Form -->
      <div v-else class="flex-1 h-[350px]">
        <div class="h-full">
          <label class="block text-sm font-medium text-gray-700 mb-2">Upload Reference Image</label>
          <div
            class="border-2 border-dashed border-gray-300 rounded-lg p-4 sm:p-6 text-center h-[200px] flex items-center justify-center"
            @dragover.prevent
            @drop.prevent="handleImageDrop"
          >
            <input
              type="file"
              ref="fileInput"
              class="hidden"
              accept="image/*"
              @change="handleFileSelect"
            />
            <div v-if="!referenceImage" class="space-y-2">
              <div class="text-gray-500 text-sm sm:text-base">
                Drag and drop image here or
                <button
                  @click="handleFileInputClick"
                  class="text-southpark-stan hover:text-southpark-stan/80"
                >
                  click to upload
                </button>
              </div>
            </div>
            <div v-else class="relative w-full h-full">
              <img
                :src="previewUrl"
                class="max-w-full max-h-full object-contain mx-auto rounded-lg"
                alt="Reference image"
              />
              <button
                @click="removeImage"
                class="absolute top-2 right-2 bg-southpark-stan text-white rounded-full p-1 hover:bg-southpark-stan/80"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4 sm:h-5 sm:w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      <!-- Generate button -->
      <div class="mt-8 flex flex-col items-center justify-center">
        <button
          @click="generateImage"
          class="w-32 sm:w-40 bg-southpark-stan text-white py-2 sm:py-3 px-3 sm:px-4 rounded-md hover:bg-southpark-stan/80 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center text-sm sm:text-base"
          :disabled="isGenerating || !canGenerate"
        >
          <span v-if="isGenerating" class="animate-spin mr-2 h-4 w-4 sm:h-5 sm:w-5 border-2 border-white border-t-transparent rounded-full"></span>
          {{ isGenerating ? 'Loading' : 'Generate' }}
        </button>
      </div>
    </div>
    <!-- 右侧预览区域 -->
    <div class="lg:w-1/2 w-full flex flex-col items-center justify-center mt-8 lg:mt-0 min-h-[450px]">
      <div class="w-full aspect-[1/1] max-h-[400px] bg-southpark-tree rounded-xl flex items-center justify-center relative overflow-hidden p-2">
        <div class="w-full h-full flex items-center justify-center">
          <img
            v-if="generatedImageUrl"
            :src="generatedImageUrl"
            class="max-w-full max-h-full object-contain transition-opacity duration-300 p-1"
            alt="Generated image"
            @load="isImageLoaded = true"
            @error="isImageLoaded = false"
          />
          <img
            v-else
            src="/img/demo.webp"
            class="max-w-full max-h-full object-contain p-1"
            alt="Demo image"
          />
        </div>
        <div v-if="isGenerating" class="absolute inset-0 flex flex-col items-center justify-center bg-southpark-tree/80">
          <div class="flex flex-col items-center">
            <div class="animate-spin rounded-full h-14 w-14 border-4 border-southpark-stan border-t-transparent"></div>
            <span class="text-southpark-stan font-medium text-2xl mt-2">{{ progress }}%</span>
          </div>
          <p class="text-southpark-stan text-lg font-bold mt-4">Generating...</p>
          <p class="text-southpark-stan text-sm mt-2 font-semibold">Please wait while we create your unique character</p>
        </div>
      </div>
      <div class="flex w-full justify-center gap-4 mt-4 h-[40px] items-center">
        <button
          v-if="generatedImageUrl && isImageLoaded"
          @click="downloadImage"
          class="flex items-center gap-2 px-4 sm:px-6 py-2 rounded-md bg-southpark-stan text-white hover:bg-southpark-stan/80 transition-colors text-sm sm:text-base"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 sm:h-5 sm:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4" /></svg>
          Download
        </button>
      </div>
    </div>
  </div>
  
  <!-- 添加 Toast 组件 -->
  <Toast 
    :show="toast.show" 
    :title="toast.title" 
    :message="toast.message" 
    :type="toast.type"
    :duration="toast.duration"
  />
</template>

<script setup lang="ts">
import { ref, computed, onBeforeUnmount, watch } from 'vue'
import { createTask } from '~/api/index'
import { useUserStore } from '~/stores/user'
import { useRouter } from 'vue-router'
import { useToast } from '~/composables/useToast'
import Toast from '~/components/Toast.vue'

// 添加用户状态管理
const userStore = useUserStore()
const userInfo = computed(() => userStore.userInfo)
const remainingTimes = ref(userStore.userInfo?.free_limit+userStore.userInfo?.remaining_limit|| 0)
const { toast, showToast } = useToast()
const router = useRouter()

// 监听用户信息变化
watch(
  userInfo,
  (newUserInfo: any) => {
    remainingTimes.value = newUserInfo?.free_limit+newUserInfo?.remaining_limit || 0
  },
  { immediate: true }
)

// 添加 API 相关的类型定义
interface CreateTaskResponse {
  taskId: string
  status: string
}

// 添加 API 响应类型
interface ApiResponse<T> {
  code: number
  data: T
  message?: string
}

const mode = ref<'t2i' | 'i2i'>('t2i')
const prompt = ref('')
const referenceImage = ref<File | null>(null)
const isGenerating = ref(false)
const fileInput = ref<HTMLInputElement | null>(null)
const showPresetPrompts = ref(false)
const taskId = ref<string | null>(null)
const progress = ref(0)
const generatedImageUrl = ref<string>('')
const isImageLoaded = ref(false)
const selectedSize = ref('1:1') // 默认选择1:1
let progressInterval: NodeJS.Timeout | null = null

// 添加尺寸选项
const imageSizes = [
  { label: '1:1', value: '1:1' },
  { label: '2:3', value: '2:3' },
  { label: '3:2', value: '3:2' }
]

// 图生图模式的固定关键词
// 这些关键词用于控制生成图片的风格和特征：
// - South Park style character: 确保生成的角色符合南方公园的风格
// - cartoon style: 保持卡通风格
// - simple design: 保持设计简洁
// - clean lines: 使用清晰的线条
// - bold colors: 使用鲜明的颜色
// - iconic South Park aesthetic: 保持南方公园标志性的美学特征
// const i2iPrompt = "Transform the uploaded image into a South Park-style character. The character should have {hair_type} hair in {hair_color} color, wearing a {clothing_type} of {clothing_color}. The eyes should be large and circular, with a {mouth_expression} smile. The face should be {face_shape}, with simple features and bold outlines. The background should be minimal, using a solid color or a simple gradient. Ensure the style is flat, cartoonish, and true to South Park's iconic design."
const i2iPrompt = "Convert to South Park cartoon style,flat color style,thick black outlines,simple shapes,big round eyes, exaggerated expressions,paper-cutout look,bright, vibrant colors"

// 添加图片预览 URL 的计算属性
const previewUrl = computed(() => {
  if (!referenceImage.value) return ''
  return URL.createObjectURL(referenceImage.value)
})

// 组件卸载时清理 URL
onBeforeUnmount(() => {
  if (previewUrl.value) {
    URL.revokeObjectURL(previewUrl.value)
  }
})

const presetPrompts = [
  'Similar to A South Park style Stan Marsh: blue parka with red lining, brown hair, oval eyes, small nose. Simplified blocky body, stick arms. Flat colors (blue, red, brown), high contrast, minimal detail. Hand-drawn, cutout paper aesthetic.',
  'Similar to South Park Eric Cartman: round head, red sweater, blonde bowl cut. Large body, short legs, stick arms. Facial features: small eyes, wide mouth, no nose. Flat red, white, and blonde colors, bold outlines, high contrast. Crude, comedic style.',
  'Similar to Kyle Broflovski in South Park art style: green earflap hat, blue jacket, red shirt. Curly brown hair, oval eyes, prominent front teeth. Simplified proportions, stick limbs. Flat green, blue, red colors, thick black outlines, no shading.',
  'Similar to South Park Kenny: orange parka with hood covering face, only muffled mouth visible. Stick figure limbs, small body, large head. Flat orange, yellow, and brown colors, high-contrast outlines, cutout animation style.'
]

const selectPresetPrompt = (preset?: string) => {

  if (preset) {
    prompt.value = preset
  } else {
    const randomIndex = Math.floor(Math.random() * presetPrompts.length)
    const selectedPrompt = presetPrompts[randomIndex]
    prompt.value = selectedPrompt
  }
  
  const textarea = document.querySelector('textarea')
  if (textarea) {
    textarea.focus()
    textarea.classList.add('bg-southpark-snow/10')
    setTimeout(() => {
      textarea.classList.remove('bg-southpark-snow/10')
    }, 500)
  }
}

const canGenerate = computed(() => {
  if (mode.value === 't2i') {
    return prompt.value.trim().length > 0
  } else {
    return referenceImage.value !== null
  }
})

const handleFileSelect = (event: Event) => {
  const input = event.target as HTMLInputElement
  if (input.files && input.files[0]) {
    referenceImage.value = input.files[0]
  }
}

const handleImageDrop = (event: DragEvent) => {
  const file = event.dataTransfer?.files[0]
  if (file && file.type.startsWith('image/')) {
    referenceImage.value = file
  }
}

const removeImage = () => {
  if (referenceImage.value) {
    URL.revokeObjectURL(previewUrl.value)
    referenceImage.value = null
  }
  if (fileInput.value) {
    fileInput.value.value = ''
  }
}

// Add method for handling file input click
const handleFileInputClick = () => {
  if (fileInput.value) {
    fileInput.value.click()
  }
}

const startProgressAnimation = () => {
  progress.value = 0
  progressInterval = setInterval(() => {
    if (progress.value < 99) {
      progress.value += 1
    }
  }, 150) // 15 seconds from 0 to 99
}

const stopProgressAnimation = () => {
  if (progressInterval) {
    clearInterval(progressInterval)
    progressInterval = null
  }
  progress.value = 0
}

const downloadImage = async () => {
  if (generatedImageUrl.value) {
    try {
      const response = await fetch(generatedImageUrl.value)
      const blob = await response.blob()
      const url = window.URL.createObjectURL(blob)
      const link = document.createElement('a')
      link.href = url
      link.download = `south-park-character-${Date.now()}.png`
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      window.URL.revokeObjectURL(url)
    } catch (error) {
      console.error('Download image failed:', error)
    }
  }
}
// 登录状态检查方法
const checkLoginStatus = async () => {
  if (!userInfo.value) {
    showToast('Please login first to use this feature', 'error')
    // 使用 id 选择器获取登录按钮
    const loginButton = document.getElementById('bindLogin')
    if (loginButton) {
      loginButton.click()
    }
    return false
  }
  return true
}

// 次数检查方法
const checkUsageLimit = () => {
  console.log('remainingTimes.value',remainingTimes.value)
  if (remainingTimes.value <= 0) {
    showToast('Usage limit reached. Please upgrade to premium for more credits', 'error')
    // 平滑滚动到套餐部分
    const pricingSection = document.getElementById('pricing')
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth' })
    }
    return false
  }
  return true
}

const generateImage = async () => {
  // 检查用户是否登录和使用次数
  if (!await checkLoginStatus() || !checkUsageLimit()) {
    return
  }

  if (!canGenerate.value || isGenerating.value) return

  isGenerating.value = true
  isImageLoaded.value = false
  startProgressAnimation()
  
  try {
    const formData = new FormData()
    formData.append('type', mode.value)
    formData.append('prompt', mode.value === 't2i' ? prompt.value : i2iPrompt)
    
    // 添加尺寸参数，只在文生图模式下传递
    if (mode.value === 't2i') {
      formData.append('size', selectedSize.value)
    }
    
    if (mode.value === 'i2i' && referenceImage.value) {
      formData.append('file', referenceImage.value)
    }

    const response: any = await createTask(formData)

    if (response.code === 200 && response.success) {
      if (!response.data?.task_id || !response.data?.image_url) {
        throw new Error('Invalid response data: missing taskId or imageUrl')
      }
      
      generatedImageUrl.value = response.data.image_url
      taskId.value = response.data.task_id

      // 更新用户信息
      await userStore.fetchUserInfo(true)
      remainingTimes.value = userStore.userInfo?.free_limit + userStore.userInfo?.remaining_limit || 0

      emit('taskCreated', {
        taskId: response.data.task_id,
        mode: mode.value
      })
    } else {
      throw new Error(response.msg || 'Failed to create task')
    }

  } catch (error: any) {
    console.error('Error generating image:', error)
    
    // 根据错误类型显示不同的错误消息
    let errorMessage = 'Failed to generate image, please try again later'
    
    if (error.message.includes('taskId and generateimage is empty')) {
      errorMessage = 'Failed to generate image: Invalid task data'
    } else if (error.message.includes('Invalid response data')) {
      errorMessage = 'Failed to generate image: Invalid server response'
    } else if (error.message.includes('network')) {
      errorMessage = 'Network error, please check your connection'
    }
    
    showToast(errorMessage, 'error')
  } finally {
    isGenerating.value = false
    stopProgressAnimation()
  }
}

// Define component events
const emit = defineEmits<{
  (e: 'taskCreated', payload: { taskId: string, mode: 't2i' | 'i2i' }): void
}>()
</script> 