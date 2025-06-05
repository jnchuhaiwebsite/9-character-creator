<template>
  <div class="home-hero-container w-full pb-16 bg-gradient-to-b from-southpark-snow/20 to-southpark-background/20 min-h-screen">
    <!-- 顶部标题区域 -->
    <div class="text-center px-4 py-12 pt-32">
      <h1 class="text-4xl md:text-5xl font-bold text-southpark-kenny mb-4 text-center animate-float">
        South Park Character Creator - Create Your Unique Character
      </h1>
      <h2 class="text-gray-600 text-base md:text-lg mb-8 text-center max-w-2xl mx-auto">
        Use our AI character creator to easily create unique South Park style characters. Get personalized character generation suggestions based on your preferences.
      </h2>
    </div>

    <!-- 参数选择区域 -->
    <div class="max-w-4xl mx-auto px-4">
      <h3 class="sr-only">Name Generation Options</h3>
      <div class="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-6 md:p-8 animate-zoom-in">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <!-- Gender Selection -->
          <div class="space-y-2 relative">
            <label class="block text-sm font-medium text-gray-700 py-1.5">Gender</label>
            <select v-model="gender" class="w-full h-12 px-4 rounded-xl border-2 border-southpark-kenny/30 bg-white/90 shadow-sm hover:border-southpark-kenny/50 focus:border-southpark-kenny/60 transition-all duration-300 cursor-pointer appearance-none pr-10">
              <option value="Boy">Boy</option>
              <option value="Girl">Girl</option>
              <option value="Unisex">Unisex</option>
            </select>
            <ChevronDownIcon class="w-5 h-5 text-gray-400 absolute right-3 top-9 pointer-events-none" />
          </div>

          <!-- Style Selection -->
          <div class="space-y-2 relative">
            <div class="flex justify-between items-center">
              <label class="block text-sm font-medium text-gray-700">Attribute Characteristics</label>
              <button 
                @click="setRandomExample"
                class="bg-southpark-kenny/10 hover:bg-southpark-kenny/20 text-southpark-kenny px-3 py-1.5 rounded-lg text-sm font-medium flex items-center gap-1 transition-all duration-300"
              >
                <ArrowPathIcon class="w-4 h-4" />
                Examples
              </button>
            </div>
            <input 
              type="text" 
              v-model="style"
              placeholder="Describe your hopes for the name(Meaning/Blessing, Style/Feeling, Rhymed etc.)"
              class="w-full h-12 px-4 rounded-xl border-2 border-southpark-kenny/30 bg-white/90 shadow-sm hover:border-southpark-kenny/50 focus:border-southpark-kenny/60 transition-all duration-300"
            />
          </div>

          <!-- Country Selection -->
          <div class="space-y-2 relative">
            <label class="block text-sm font-medium text-gray-700">Origin</label>
            <select v-model="country" class="w-full h-12 px-4 rounded-xl border-2 border-southpark-kenny/30 bg-white/90 shadow-sm hover:border-southpark-kenny/50 focus:border-southpark-kenny/60 transition-all duration-300 cursor-pointer appearance-none pr-10">
              <option value="Any">Any</option>
              <option value="AfricanArabic">African Arabic</option>
              <option value="Arabic">Arabic</option>
              <option value="Chinese">Chinese</option>
              <option value="English">English</option>
              <option value="French">French</option>
              <option value="German">German</option>
              <option value="Greek">Greek</option>
              <option value="Hebrew">Hebrew</option>
              <option value="Hindi">Hindi</option>
              <option value="Indian">Indian</option>
              <option value="Irish">Irish</option>
              <option value="Italian">Italian</option>
              <option value="Japanese">Japanese</option>
              <option value="Korean">Korean</option>
              <option value="Latin">Latin</option>
              <option value="Nordic">Nordic</option>
              <option value="Persian">Persian</option>
              <option value="Russian">Russian</option>
              <option value="Scottish">Scottish</option>
              <option value="Slavic">Slavic</option>
              <option value="Spanish">Spanish</option>
              <option value="Turkish">Turkish</option>
            </select>
            <ChevronDownIcon class="w-5 h-5 text-gray-400 absolute right-3 top-9 pointer-events-none" />
          </div>

          <!-- Length Selection -->
          <div class="space-y-2 relative">
            <label class="block text-sm font-medium text-gray-700">Name Length</label>
            <select v-model="length" class="w-full h-12 px-4 rounded-xl border-2 border-southpark-kenny/30 bg-white/90 shadow-sm hover:border-southpark-kenny/50 focus:border-southpark-kenny/60 transition-all duration-300 cursor-pointer appearance-none pr-10">
              <option value="Any">Any</option>
              <option value="short">Short</option>
              <option value="medium">Medium</option>
              <option value="long">Long</option>
            </select>
            <ChevronDownIcon class="w-5 h-5 text-gray-400 absolute right-3 top-9 pointer-events-none" />
          </div>

          <!-- Exclude Names -->
          <div class="space-y-2 md:col-span-2">
            <label class="block text-sm font-medium text-gray-700">Exclude Names (comma separated)</label>
            <input 
              type="text" 
              v-model="excludeNamesInput"
              placeholder="e.g., Emma, Noah, Sophia"
              class="w-full h-12 px-4 rounded-xl border-2 border-southpark-kenny/30 bg-white/90 shadow-sm hover:border-southpark-kenny/50 focus:border-southpark-kenny/60 transition-all duration-300"
            />
          </div>
        </div>

        <!-- Generate Button -->
        <div class="mt-8 text-center">
          <button 
            @click="generateNames"
            :disabled="isProcessing"
            class="bg-gradient-to-r from-southpark-kenny to-southpark-stan text-white px-8 py-3 rounded-full text-lg font-semibold hover:from-southpark-kenny/90 hover:to-southpark-stan/90 transition-all duration-300 shadow-lg hover:shadow-xl animate-bounce-soft disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center mx-auto"
          >
            <ArrowPathIcon v-if="isProcessing" class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" />
            {{ isProcessing ? 'Generating...' : 'Generate Names' }}
          </button>
          <p class="text-sm text-gray-500 mt-2">Estimated generation time: 5-15 seconds</p>
        </div>
      </div>

    </div>
    <!-- Results Section -->
    <div v-if="generatedNames.length" ref="resultsRef" class="max-w-7xl mx-auto mt-8 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-6 md:p-8">
      <div class="flex justify-between items-center mb-6">
        <h2 class="text-2xl font-bold text-gray-800">Your Generated Baby Names</h2>
        <button 
          @click="generateNames"
          :disabled="isProcessing"
          class="bg-gradient-to-r from-southpark-kenny to-southpark-stan text-white px-6 py-2 rounded-full text-sm font-semibold hover:from-southpark-kenny/90 hover:to-southpark-stan/90 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
        >
          <ArrowPathIcon v-if="isProcessing" class="animate-spin -ml-1 mr-2 h-4 w-4 text-white" />
          {{ isProcessing ? 'Generating...' : 'Generate Again' }}
        </button>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
        <div 
          v-for="name in generatedNames" 
          :key="name.index"
          class="bg-gradient-to-b from-southpark-snow/20 to-southpark-background/20 p-4 rounded-xl hover:shadow-md transition-all duration-300 group h-full"
        >
          <div class="flex justify-between items-start mb-2">
            <span class="text-xl font-semibold text-gray-800 group-hover:text-southpark-kenny transition-colors">{{ name.name }}</span>
            <div class="flex items-center gap-2">
              <span class="text-xs text-gray-600 bg-white/50 px-2 py-0.5 rounded-full">{{ name.origin_language_culture }}</span>
              <button 
                @click="copyToClipboard(name.name)"
                class="p-1 rounded-lg hover:bg-white/50 transition-colors"
                title="Copy Name"
              >
                <ClipboardDocumentIcon class="h-4 w-4 text-gray-500" />
              </button>
            </div>
          </div>
          <p class="text-sm text-gray-700 mb-2">{{ name.meaning }}</p>
          <p class="text-xs text-gray-600 italic">{{ name.style_notes }}</p>
        </div>
      </div>
    </div>
    
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
import { ref, computed, watch, nextTick } from 'vue'
import { useToast } from '~/composables/useToast'
import { ChevronDownIcon, ArrowPathIcon, ClipboardDocumentIcon } from '@heroicons/vue/24/solid'
import { createTask } from '~/api'
import { useUserStore } from '~/stores/user'

////////////////////////////////////////
// 使用用户信息 store
const userStore = useUserStore()
const userInfo = computed(() => userStore.userInfo)
const remainingTimes = ref(userStore.userInfo?.free_limit+userStore.userInfo?.remaining_limit|| 0)

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
  if (remainingTimes.value <= 0) {
    showToast('Usage limit reached. Please upgrade to premium for more credits', 'error')
    return false
  }
  return true
}

// 监听用户信息变化
watch(
  userInfo,
  (newUserInfo: any) => {
    remainingTimes.value = newUserInfo?.free_limit+newUserInfo?.remaining_limit || 0
  },
  { immediate: true }
)
////////////////////////////////

const { toast, showToast } = useToast()

interface NameParams {
  GENDER: string // 性别
  PRIMARY_LANGUAGE_CULTURE: string // 国家
  LENGTH_PREFERENCE: string // 长度
  CUSTOM_KEYWORDS?: string // 属性特点
  EXCLUSION_LIST?: string // 排除
}

interface NameInfo {
  index: number;
  name: string;
  origin_language_culture: string;
  meaning: string;
  style_notes: string; // 属性特点说明
}

defineOptions({
  name: 'HomeHero'
})

// 属性特点示例数据
const styleExamples = [
  'wise, sunny, classic, ocean-inspired',
  'forest, stars, strong, gentle, poetic',
  'Hope the name is hopeful like \'dawn\'',
  'modern, unique, earthy/nature feel, easy to say.',
  'inspired by classic literature or mythology',
  'Cheerful, energetic, upbeat sound, playful feel'
]

// 参数状态
const gender = ref('Boy') // 性别
const style = ref(styleExamples[0]) // 属性特点，默认展示示例列表中的一个
const country = ref('English') // 产地
const length = ref('Any') // 长度
const excludeNamesInput = ref('Mallory,Cameron,Deirdre') // 排除
const generatedNames = ref<NameInfo[]>([]) // 生成名字
const resultsRef = ref<HTMLElement | null>(null) // 结果区域引用

// 计算排除的名字数组
const excludeNames = computed(() => {
  return excludeNamesInput.value
    .split(',')
    .map(name => name.trim())
    .filter(name => name.length > 0)
})

// 生成名字的方法
const isProcessing = ref(false)
const generateNames = async () => {
  if (!await checkLoginStatus() || !checkUsageLimit() || isProcessing.value) {
    return
  }
  
  // 清空生成结果
  generatedNames.value = []

  try {
    // 构建参数对象
    const params: NameParams = {
      GENDER: gender.value, // 性别
      PRIMARY_LANGUAGE_CULTURE: country.value, // 产地
      LENGTH_PREFERENCE: length.value, // 长度
    }
    // 添加可选参数
    if (style.value !== 'Any') {
      params.CUSTOM_KEYWORDS = style.value
    }
    // 排除
    if (excludeNames.value.length > 0) {
      params.EXCLUSION_LIST = excludeNames.value.join(',')
    }

    // 将参数转换为字符串
    const paramString = Object.entries(params)
      .filter(([_, value]) => value) // 过滤掉空值
      .map(([key, value]) => `${key}:${value}`)
      .join('，')

    console.log('Generated params:', paramString)

    // TODO: 调用后端 API 生成名字
    isProcessing.value = true;// 处理中
    const res = await createTask({prompt:paramString}) as any;
    isProcessing.value = false;// 处理结束
    if (res.code === 200) {
      let content = res.data.message;
      try {
        // 提取 JSON 数组部分
        const match = content.match(/\[[\s\S]*\]/);
        const jsonStr = match ? match[0].replace(/\n/g, '') : '';
        const names = JSON.parse(jsonStr) as NameInfo[];
        console.log('names', names);
        generatedNames.value = names;
        // 等待 DOM 更新后滚动
        nextTick(() => {
          if (resultsRef.value) {
            const yOffset = -window.innerHeight / 3; // 向上偏移屏幕高度的1/3
            const y = resultsRef.value.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
          }
        });
      } catch (e) {
        console.error('Failed to parse names:', e);
        showToast('Failed to parse names data', 'error');
      }
    }else{
      showToast(res.msg, 'error');
      console.error('Failed to generate names:', res)
    }
  } catch (error) {
    isProcessing.value = false;// 处理结束
    console.error('Failed to generate names:', error)
    showToast('Failed to generate names, please try again later', 'error')
  }
}

const copyToClipboard = async (text: string) => {
  try {
    await navigator.clipboard.writeText(text)
    showToast('Name copied to clipboard', 'success')
  } catch (err) {
    showToast('Failed to copy name', 'error')
  }
}



const setRandomExample = () => {
  const randomIndex = Math.floor(Math.random() * styleExamples.length)
  style.value = styleExamples[randomIndex]
}
</script>

<style scoped>
.home-hero-container {
  background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23FFB6C1' fill-opacity='0.2' fill-rule='evenodd'/%3E%3C/svg%3E");
}

select:focus, input:focus {
  outline: none;
}

/* 自定义下拉框样式 */
select {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  padding-right: 2.5rem;
}

select option {
  background-color: white;
  color: #4B5563;
  padding: 1rem;
  font-size: 1rem;
}

select option:hover {
  background-color: #FFF5F5;
}

select option:checked {
  background-color: #FFF5F5;
  color: #FF6B6B;
  font-weight: 500;
}

/* 自定义下拉菜单样式 */
select option {
  border-radius: 20px;
}
</style> 