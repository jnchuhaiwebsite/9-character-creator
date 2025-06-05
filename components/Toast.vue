<template>
  <div
    v-if="show"
    class="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 max-w-sm w-full bg-white/95 backdrop-blur-sm shadow-lg rounded-lg pointer-events-auto overflow-hidden border border-southpark-snow/20"
  >
    <div class="p-4">
      <div class="flex items-center">
        <div class="flex-shrink-0">
          <svg
            v-if="type === 'success'"
            class="h-6 w-6 text-southpark-kenny"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <svg
            v-else-if="type === 'error'"
            class="h-6 w-6 text-southpark-kenny"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <svg
            v-else
            class="h-6 w-6 text-southpark-stan"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <div class="ml-3 w-0 flex-1 pt-0.5">
          <p class="text-sm font-medium text-gray-800">{{ title }}</p>
          <p class="mt-1 text-sm text-gray-600">{{ message }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch, defineComponent } from 'vue'

defineComponent({
  name: 'Toast'
})

const props = defineProps<{
  show: boolean
  title: string
  message: string
  type: 'success' | 'error' | 'info'
  duration?: number
}>()

const show = ref(false)

const close = () => {
  show.value = false
}

// 监听 show prop 变化
watch(() => props.show, (newValue) => {
  show.value = newValue
  if (newValue && props.duration) {
    setTimeout(() => {
      close()
    }, props.duration)
  }
}, { immediate: true })

// 监听 duration 变化
watch(() => props.duration, (newDuration) => {
  if (newDuration) {
    setTimeout(() => {
      close()
    }, newDuration)
  }
})
</script> 