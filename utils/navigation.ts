import { ref, nextTick } from 'vue'
import { useRouter } from 'vue-router'

// 路由项接口定义
export interface RouteItem {
  id?: string
  name: string
  icon?: string
  href?: string
}

// 主路由配置
export const mainRoutes: RouteItem[] = [
  { id: "hero", name: "Home", icon: "home" },
  { id: "showcase", name: "Character Creator", icon: "presentation" },
  { id: "features", name: "Features", icon: "star" },
  { id: "pricing", name: "Pricing", icon: "tag" },
  { id: "faq", name: "FAQ", icon: "help" },
  { id: "blog", name: "Blog", href: "/blog", icon: "book" },
  { name: "My Works", href: "/my-works", icon: "collection" }
]

export const useNavigation = () => {
  const router = useRouter()
  const activeSection = ref('hero')
  const sections = mainRoutes

  // 执行滚动到指定section
  const executeScroll = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offset = 80 // 导航栏高度
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
      
      // 更新活动section
      activeSection.value = sectionId
    }
  }

  // 处理页面跳转和滚动
  const handlePageNavigation = (sectionId: string) => {
    // 保存目标锚点到sessionStorage
    sessionStorage.setItem('targetSection', sectionId)

    // 使用 router.push 进行导航
    router.push('/').then(() => {
      // 等待页面完全加载
      nextTick(() => {
        executeScroll(sectionId)
        // 清空锚点信息
        sessionStorage.removeItem('targetSection')
      })
    })
  }

  // 处理导航点击
  const handleNavClick = (sectionId?: string) => {
    if (!sectionId) return
    // 如果当前不在首页，先跳转到首页
    if (window.location.pathname !== '/') {
      handlePageNavigation(sectionId)
      return
    }
    
    // 如果已经在首页，执行滚动
    executeScroll(sectionId)
    // 清空锚点信息
    sessionStorage.removeItem('targetSection')
  }

  // 处理滚动监听
  const handleScroll = () => {
    for (const section of sections) {
      if (!section.id) continue
      const element = document.getElementById(section.id)
      if (element) {
        const rect = element.getBoundingClientRect()
        if (rect.top <= 100 && rect.bottom >= 100) {
          activeSection.value = section.id
          break
        }
      }
    }
  }

  return {
    activeSection,
    sections,
    executeScroll,
    handlePageNavigation,
    handleNavClick,
    handleScroll
  }
} 