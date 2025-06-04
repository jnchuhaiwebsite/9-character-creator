import { defineNuxtPlugin } from 'nuxt/app'

export default defineNuxtPlugin(() => {
  // 确保只在客户端环境中运行
  if (typeof window === 'undefined' || typeof document === 'undefined') return
  
  // 创建脚本容器div
  const gaContainer = document.createElement('div')
  gaContainer.id = 'google-analytics-scripts'
  gaContainer.style.display = 'none'
  


  // 创建并添加第二个脚本元素
  const script2 = document.createElement('script')
  script2.innerHTML = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-5FMYHSSEP2');
  `
  gaContainer.appendChild(script2)
  
  // 确保DOM加载完成后添加脚本
  const addGaScripts = () => {
    // 将容器添加到body底部
    document.body.appendChild(gaContainer)
  }
  
  // 如果DOM已经加载完成，立即添加
  if (document.readyState === 'complete' || document.readyState === 'interactive') {
    addGaScripts()
  } else {
    // 否则等待DOM加载完成
    document.addEventListener('DOMContentLoaded', addGaScripts)
  }
}) 