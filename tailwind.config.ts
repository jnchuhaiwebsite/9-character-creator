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
        baby: {
          pink: '#FFB6C1',
          blue: '#87CEEB',
          purple: '#D8BFD8',
          mint: '#98FF98',
          yellow: '#FFFACD',
          peach: '#FFDAB9',
          lavender: '#E6E6FA',
          coral: '#FF7F50',
          sky: '#87CEEB',
          rose: '#FFE4E1'
        },
  			ghibli: {
  				green: '#3a6c2c',
  				light: 'rgba(219, 223, 192, 0.85)'
  			},
  			theme: '#2563eb',
  			blue: {
  				dark: '#1d4ed8',
  				medium: '#2563eb',
  				light: '#3b82f6',
  				pale: '#f8fafc',
  				accent: '#60a5fa'
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