import { reactive, nextTick } from 'vue'

export type ToastType = 'success' | 'error' | 'info'

interface ToastState {
  show: boolean
  title: string
  message: string
  type: ToastType
  duration: number
}

export function useToast() {
  const toast = reactive<ToastState>({
    show: false,
    title: '',
    message: '',
    type: 'info',
    duration: 3000,
  })

  const showToast = (
    message: string,
    type: ToastType = 'info',
    title?: string
  ) => {
    // 先关闭当前提示
    toast.show = false
    // 使用 nextTick 确保在下一个 DOM 更新周期显示新的提示
    nextTick(() => {
      toast.message = message
      toast.type = type
      toast.title = title || ''
      toast.show = true
    })
  }

  return {
    toast,
    showToast,
  }
} 