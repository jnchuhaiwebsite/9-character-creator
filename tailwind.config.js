/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue"
  ],
  theme: {
    extend: {
      colors: {
        'southpark-kenny': '#FF6B00',    // Kenny的橙色
        'southpark-stan': '#1E90FF',     // Stan的蓝色
        'southpark-kyle': '#32CD32',     // Kyle的绿色
        'southpark-cartman': '#FF0000',  // Cartman的红色
        'southpark-snow': '#F5F5F5',     // 雪地背景
        'southpark-sky': '#E6F3FF',      // 天空背景
        'southpark-text': '#333333',     // 主要文本颜色
        'southpark-text-light': '#666666' // 次要文本颜色
      },
      fontFamily: {
        'southpark': ['Comic Sans MS', 'cursive'], // 南方公园风格的字体
      },
      backgroundImage: {
        'southpark-gradient': 'linear-gradient(to bottom, #E6F3FF, #F5F5F5)',
      },
      boxShadow: {
        'southpark': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      },
    },
  },
  plugins: [],
} 