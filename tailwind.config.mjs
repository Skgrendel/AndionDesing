/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#0ea5e9',
        secondary: '#1e293b',
        accent: '#06b6d4',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        sport: ['Bebas Neue', 'sans-serif'],
      },
      animation: {
        'slide-in': 'slide-in 0.5s ease-out',
        'fade-in': 'fade-in 0.6s ease-out',
        'pulse-glow': 'pulse-glow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 3s infinite',
      },
      keyframes: {
        'slide-in': {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        light: {
          'primary': '#0ea5e9',
          'secondary': '#1e293b',
          'accent': '#06b6d4',
          'base-100': '#ffffff',
          'base-content': '#1e293b',
        },
      },
    ],
  },
};
