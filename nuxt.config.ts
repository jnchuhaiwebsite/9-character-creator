// nuxt.config.ts
import { defineNuxtConfig } from 'nuxt/config'
export default defineNuxtConfig({
  ssr: true, // 启用服务端渲染
  compatibilityDate: '2025-05-28', // 兼容性日期
  devtools: { enabled: true }, // 启用 Nuxt DevTools
  css: [
    '~/assets/css/tailwind.css', // Tailwind CSS 样式
    '@/assets/css/main.css', // 主样式文件
  ],
  plugins: [
    '~/plugins/google-analytics.client.ts', // Google Analytics 插件（仅客户端）
  ],
  runtimeConfig: {
    public: {
      appid: process.env.APPID, // 应用 ID
    },
  },
  modules: [
    '@clerk/nuxt', // Clerk 集成
    '@pinia/nuxt', // Pinia 状态管理
    '@nuxtjs/tailwindcss', // Tailwind CSS 集成
  ],
  app: {
    head: {
      htmlAttrs: {
        lang: 'en' // 设置 HTML 语言
      },
      title: 'South Park Character Creator - Create Your Own South Park Character', // 网站标题
      meta: [
        { charset: 'utf-8' }, // 字符集
        { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no' }, // 移动端视口设置
        { name: 'description', content: 'Create your own South Park character with our AI-powered character creator. Design unique South Park style characters with custom features, outfits, and accessories.' }, // 网站描述
        { name: 'keywords', content: 'south park character creator, south park maker, create south park character, south park avatar maker, south park style generator' }
      ],
      link: [
        { rel: 'canonical', href: 'https://www.southparkcreator.com' }, // 规范链接
        // { rel: 'alternate', href: 'https://www.genparkmaker.com', hreflang: 'x-default' }, // 默认语言版本
        // { rel: 'alternate', href: 'https://www.genparkmaker.com', hreflang: 'en' }, // 英文版本
      ],
      script: [
        { src: '/js/c6h.js', async: true } 
      ] // 外部脚本
    }
  },
  nitro: {
    preset: 'cloudflare_pages',
    cloudflare: {
      deployConfig: true,
      nodeCompat: true
    },
    devProxy: {
      '/nuxtRequest': {
        target: process.env.NUXT_PUBLIC_API_BASE, // 从环境变量获取代理目标
        changeOrigin: true, // 允许跨域
        prependPath: false // 不添加代理路径前缀
      }
    },
    // 预渲染
    prerender: {
      // 预渲染路由
      routes: [
        '/', 
        '/blog',
        '/blog/black-cross-background-removal', 
        '/blog/feature-update', 
        '/blog/background-removal-tutorial', 
        '/subsidiary/privacy-policy',
        '/subsidiary/terms-of-service'
      ], // 手动指定所有文章路径
      crawlLinks: true, // 保持链接爬取
      autoSubfolderIndex: false,
      failOnError: false, // 预渲染失败时不中断构建
      ignore: [
        '/api/**', // 忽略 API 路由
        '/admin/**' // 忽略管理后台路由
      ]
    },
  },
  // Nuxt3正确的Tailwind配置
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config.ts',
    exposeConfig: false,
    viewer: false,
  },
  // 使用vite的正确配置方式
  vite: {
    build: {
      cssCodeSplit: true,
      // 强制提取CSS到单独文件
      rollupOptions: {
        output: {
          assetFileNames: (assetInfo) => {
            if (assetInfo.name.endsWith('.css')) {
              return '_nuxt/css/[name]-[hash][extname]';
            }
            return '_nuxt/assets/[name]-[hash][extname]';
          }
        }
      }
    },
    // 确保CSS的sourcemap
    css: {
      devSourcemap: true
    }
  },
  build: {
    analyze: true, // 启用打包分析
    // 代码压缩配置
    terser: {
      compress: {
        drop_console: true, // 移除 console 语句
        drop_debugger: true, // 移除 debugger 语句
        pure_funcs: ['console.log', 'console.info'], // 移除特定的函数调用
        passes: 3, // 增加压缩次数
        dead_code: true, // 移除未使用的代码
        global_defs: {
          'process.env.NODE_ENV': 'production' // 定义全局变量
        }
      },
      mangle: true, // 混淆变量名
      output: {
        comments: false // 移除注释
      }
    }
  },
  // 强制CSS提取的配置
  experimental: {
    // 强制禁用内联样式，将样式提取到外部文件
    inlineSSRStyles: false,
    // 启用vite特性兼容
    viteNode: true
  }
})