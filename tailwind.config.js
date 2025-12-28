/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        moss: {
          DEFAULT: '#748561',
          core: '#748561',
          dark: '#546146',
        },
        sand: {
          light: '#F1EEE5',
          DEFAULT: '#F1EEE5',
          dark: '#E5E1D3',
        },
        sage: {
          muted: '#A1AD94',
        },
        leaf: {
          deep: '#546146',
        },
        obsidian: {
          DEFAULT: '#2A3022',
        },
        cream: {
          bg: '#FBF8F3',
        },
        navy: {
          bg: '#FDFBF7',
          primary: '#5C6B50',
          secondary: '#A4AC86',
          accent: '#E07A5F',
          dark: '#3D405B',
          light: '#F4F1EA',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
      }
    },
  },
  plugins: [],
}

