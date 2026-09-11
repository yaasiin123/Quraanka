/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Dark + Gold Theme (Islaami)
        gold: {
          50: '#fdf9ed',
          100: '#faf0cc',
          200: '#f4df99',
          300: '#ecc85c',
          400: '#e5b432',
          500: '#d99a1c',  // Primary gold
          600: '#bc7714',
          700: '#965714',
          800: '#7b4517',
          900: '#683a18',
        },
        dark: {
          50: '#f6f6f7',
          100: '#e1e2e5',
          200: '#c3c5ca',
          300: '#9fa2ab',
          400: '#7b7e8a',
          500: '#61646f',
          600: '#4d4f58',
          700: '#3f4149',
          800: '#2a2b30',  // Card background
          900: '#1a1b1f',  // Main background
          950: '#0f1013',  // Deepest
        },
      },
      fontFamily: {
        arabic: ['Amiri', 'Noto Naskh Arabic', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
            }
