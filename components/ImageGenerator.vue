<template>
  <div class="text-center px-4 py-12 pt-32">
      <h1 class="text-4xl md:text-5xl font-bold text-southpark-stan mb-4 text-center animate-float flex justify-center">
        South Park Character Creator - AI Character Generator
      </h1>
      <h2 class="text-gray-600 text-base md:text-lg mb-8 text-center max-w-2xl mx-auto">
        Create unique South Park style characters with our AI character generator. Generate your own custom South Park character using text prompts or image references.
      </h2>
    </div>
  <div class="flex flex-col md:flex-row bg-white rounded-lg shadow-lg p-6 max-w-4xl mx-auto mt-12">
    <!-- 左侧表单区域 -->
    <div class="md:w-1/2 w-full md:pr-8 flex flex-col justify-between min-h-[420px]">
      <!-- Mode Toggle -->
      <div class="flex items-center mb-4">
        <button
          @click="mode = 't2i'"
          :class="[
            'px-4 py-2 rounded-l-lg transition-colors',
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
            'px-4 py-2 rounded-r-lg transition-colors',
            mode === 'i2i'
              ? 'bg-southpark-stan text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          ]"
        >
          Image to Image
        </button>
      </div>
      <!-- Text to Image Form -->
      <div v-if="mode === 't2i'" class="mb-4">
        <div class="relative">
          <label class="block text-sm font-medium text-gray-700 mb-2">Prompt</label>
          <button
            @click="() => selectPresetPrompt()"
            class="absolute top-0 right-0 w-8 h-8 flex items-center justify-center"
          >
            <img src="/img/msb.png" alt="Preset Prompts" class="w-6 h-6 hover:opacity-80 transition-opacity" />
          </button>
          <textarea
            v-model="prompt"
            rows="8"
            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-southpark-stan min-h-[160px]"
            placeholder="Enter your image description..."
          ></textarea>
        </div>
      </div>
      <!-- Image to Image Form -->
      <div v-else class="mb-4">
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">Upload Reference Image</label>
          <div
            class="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center min-h-[160px] flex items-center justify-center"
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
              <div class="text-gray-500">
                Drag and drop image here or
                <button
                  @click="handleFileInputClick"
                  class="text-southpark-stan hover:text-southpark-stan/80"
                >
                  click to upload
                </button>
              </div>
            </div>
            <div v-else class="relative">
              <img
                :src="previewUrl"
                class="max-h-64 mx-auto rounded-lg"
                alt="Reference image"
              />
              <button
                @click="removeImage"
                class="absolute top-2 right-2 bg-southpark-stan text-white rounded-full p-1 hover:bg-southpark-stan/80"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
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
      <div class="mt-2 flex flex-col items-center">
        <button
          @click="generateImage"
          class="w-40 bg-southpark-stan text-white py-3 px-4 rounded-md hover:bg-southpark-stan/80 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
          :disabled="isGenerating || !canGenerate"
        >
          <span v-if="isGenerating" class="animate-spin mr-2 h-5 w-5 border-2 border-white border-t-transparent rounded-full"></span>
          {{ isGenerating ? 'Loading' : 'Generate' }}
        </button>
        <div v-if="isGenerating" class="w-full mt-4">
          <div class="w-full bg-gray-200 rounded-full h-2.5">
            <div class="bg-southpark-stan h-2.5 rounded-full transition-all duration-300" :style="{ width: `${progress}%` }"></div>
          </div>
          <p class="text-gray-600 text-sm mt-1">{{ progress }}%</p>
        </div>
      </div>
    </div>
    <!-- 右侧预览区域 -->
    <div class="md:w-1/2 w-full flex flex-col items-center justify-center mt-8 md:mt-0">
      <div class="w-full aspect-square bg-gray-50 rounded-xl flex items-center justify-center relative overflow-hidden min-h-[320px]">
        <img
          v-if="generatedImageUrl"
          :src="generatedImageUrl"
          class="object-contain w-full h-full transition-opacity duration-300 rounded-xl"
          alt="Generated image"
          @load="isImageLoaded = true"
          @error="isImageLoaded = false"
        />
        <img
          v-else
          src="/img/demo.webp"
          class="object-contain w-full h-full rounded-xl"
          alt="Demo image"
        />
        <div v-if="generatedImageUrl && !isImageLoaded" class="absolute inset-0 flex items-center justify-center bg-gray-100 rounded-xl">
          <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-southpark-stan"></div>
        </div>
      </div>
      <div class="flex w-full justify-center gap-4 mt-4">
        <button
          v-if="generatedImageUrl && isImageLoaded"
          @click="downloadImage"
          class="flex items-center gap-2 px-6 py-2 rounded-full bg-black text-white hover:bg-gray-800 transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4" /></svg>
          Download
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onBeforeUnmount } from 'vue'
import { createTask } from '~/api/index'

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
let progressInterval: NodeJS.Timeout | null = null

// 图生图模式的固定关键词
// 这些关键词用于控制生成图片的风格和特征：
// - South Park style character: 确保生成的角色符合南方公园的风格
// - cartoon style: 保持卡通风格
// - simple design: 保持设计简洁
// - clean lines: 使用清晰的线条
// - bold colors: 使用鲜明的颜色
// - iconic South Park aesthetic: 保持南方公园标志性的美学特征
const i2iPrompt = "Transform the uploaded image into a South Park-style character. The character should have {hair_type} hair in {hair_color} color, wearing a {clothing_type} of {clothing_color}. The eyes should be large and circular, with a {mouth_expression} smile. The face should be {face_shape}, with simple features and bold outlines. The background should be minimal, using a solid color or a simple gradient. Ensure the style is flat, cartoonish, and true to South Park's iconic design."

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
  'Design a South Park character with a blue hoodie, jeans, and spiky blonde hair. The character should have an exaggerated, cheeky grin, large eyes, and be in a standing pose with their hands in their pockets',
  'Create a South Park character with a green earmuff hat, yellow winter jacket, brown pants, and simple black shoes. The character should have a cheeky smile and stand with their hands on their hips. Keep the overall style blocky and cartoonish with minimal detail.',
  'Create a South Park character with a round head, large circular eyes, simple flat hair, and wearing a bright red winter coat. The character should have a mischievous expression and be holding a snowball. The overall style should reflect the signature blocky, cartoonish look of South Park.',
  'boy  South Park cartoon style'
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

const generateImage = async () => {
  if (!canGenerate.value || isGenerating.value) return

  isGenerating.value = true
  isImageLoaded.value = false
  startProgressAnimation()
  
  try {
    const formData = new FormData()
    formData.append('type', mode.value)
    formData.append('prompt', mode.value === 't2i' ? prompt.value : i2iPrompt)
    
    if (mode.value === 'i2i' && referenceImage.value) {
      formData.append('file', referenceImage.value)
    }

    const response: any = await createTask(formData)

    if (response.code === 200 && response.success) {
      generatedImageUrl.value = response.data.image_url
      taskId.value = response.data.task_id

      emit('taskCreated', {
        taskId: response.data.task_id,
        mode: mode.value
      })
    } else {
      throw new Error(response.msg || 'Failed to create task')
    }

  } catch (error) {
    console.error('Error generating image:', error)
    // Here you can add error handling
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