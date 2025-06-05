import type { Config } from 'tailwindcss'

export default {
    darkMode: ['class'],
    content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue'
  ],
  theme: {
  	extend: {
  		colors: {
        southpark: {
          // Main character colors
          kenny: '#FFCC80', // Kenny's orange (softer orange)
          stan: '#90CAF9', // Stan's blue (softer blue) // Main site text color
          stanButton: '#1D90FF', // Stan's blue (softer blue) // Site button color
          kyle: '#90CAF9', // Kyle's red (softer red)
          cartman: '#BCAAA4', // Cartman's brown (softer brown)
          // Secondary colors
          background: '#FAFAFA', // Softer background color
          snow: '#F38A41', // Softer snow color
          mountain: '#FEFEFE', // Softer mountain color // First background color
          tree: '#f3f4f6', // 更柔和的树木颜色 //第二块背景色
          // 强调色
          accent: '#F8BBD0', // 更柔和的粉色强调
          highlight: '#A5D6A7', // 更柔和的绿色高亮
          warning: '#FFCC80', // 更柔和的橙色警告
          error: '#EF9A9A', // 更柔和的红色错误
          // 文本颜色
          text: {
            primary: '#616161', // 主要文本（更柔和的深灰色）
            secondary: '#9E9E9E', // 次要文本（更柔和的灰色）
            light: '#F5F5F5', // 浅色文本（更柔和的白色）
          }
        },
  			theme: '#90CAF9', // 使用更柔和的斯坦蓝作为主题色
  			blue: {
  				dark: '#78909C', // 更柔和的深蓝色
  				medium: '#90CAF9', // 更柔和的斯坦蓝
  				light: '#E1F5FE', // 更柔和的浅蓝色
  				pale: '#E8F5E9', // 更柔和的雪地蓝
  				accent: '#81D4FA' // 更柔和的强调蓝
  			},
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		animation: {
  			'fade-in': 'fadeIn 0.5s ease-out forwards',
  			'slide-up': 'slideUp 0.5s ease-out forwards',
  			'slide-in-right': 'slideInRight 0.5s ease-out forwards',
  			'slide-in-left': 'slideInLeft 0.5s ease-out forwards',
  			'zoom-in': 'zoomIn 0.5s ease-out forwards',
        'float': 'float 3s ease-in-out infinite',
        'bounce-soft': 'bounceSoft 2s ease-in-out infinite'
  		},
  		keyframes: {
  			fadeIn: {
  				'0%': {
  					opacity: '0'
  				},
  				'100%': {
  					opacity: '1'
  				}
  			},
  			slideUp: {
  				'0%': {
  					opacity: '0',
  					transform: 'translate3d(0, 30px, 0)'
  				},
  				'100%': {
  					opacity: '1',
  					transform: 'translate3d(0, 0, 0)'
  				}
  			},
  			slideInRight: {
  				'0%': {
  					opacity: '0',
  					transform: 'translate3d(30px, 0, 0)'
  				},
  				'100%': {
  					opacity: '1',
  					transform: 'translate3d(0, 0, 0)'
  				}
  			},
  			slideInLeft: {
  				'0%': {
  					opacity: '0',
  					transform: 'translate3d(-30px, 0, 0)'
  				},
  				'100%': {
  					opacity: '1',
  					transform: 'translate3d(0, 0, 0)'
  				}
  			},
  			zoomIn: {
  				'0%': {
  					opacity: '0',
  					transform: 'scale3d(0.95, 0.95, 1)'
  				},
  				'100%': {
  					opacity: '1',
  					transform: 'scale3d(1, 1, 1)'
  				}
  			},
        float: {
          '0%, 100%': {
            transform: 'translateY(0)'
          },
          '50%': {
            transform: 'translateY(-10px)'
          }
        },
        bounceSoft: {
          '0%, 100%': {
            transform: 'translateY(0)'
          },
          '50%': {
            transform: 'translateY(-5px)'
          }
        }
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
} satisfies Config 