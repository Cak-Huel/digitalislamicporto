/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        "secondary-fixed": "#eae2da",
        "on-tertiary-container": "#3a2020",
        "background": "#faf5ee",
        "inverse-on-surface": "#faf5ee",
        "inverse-surface": "#3a302a",
        "tertiary-fixed-dim": "#e8a0a0",
        "tertiary-fixed": "#fce0e0",
        "on-secondary-container": "#605850",
        "tertiary-container": "#d47070",
        "surface-container-lowest": "#ffffff",
        "on-surface": "#3a302a",
        "on-primary": "#ffffff",
        "surface-dim": "#dcd6cc",
        "outline": "#9a9088",
        "on-primary-fixed-variant": "#8a4518",
        "outline-variant": "#d8d0c8",
        "on-secondary-fixed-variant": "#504840",
        "on-error": "#ffffff",
        "surface-tint": "#c2652a",
        "on-tertiary-fixed-variant": "#6e3030",
        "on-tertiary-fixed": "#2e1515",
        "surface-container-high": "#ece6dc",
        "secondary-fixed-dim": "#cec6be",
        "on-primary-fixed": "#401a08",
        "primary-container": "#e08850",
        "on-surface-variant": "#605850",
        "secondary": "#78706a",
        "on-secondary-fixed": "#2a2420",
        "on-background": "#3a302a",
        "surface-variant": "#ece6dc",
        "secondary-container": "#eae2da",
        "tertiary": "#8c3c3c",
        "surface-container-low": "#f6f0e8",
        "error": "#c0392b",
        "surface-container": "#f2ece4",
        "primary-fixed": "#fbe8d8",
        "on-secondary": "#ffffff",
        "surface-bright": "#faf5ee",
        "on-error-container": "#7a1a10",
        "surface": "#faf5ee",
        "surface-container-highest": "#e6e0d6",
        "error-container": "#fce4e0",
        "primary": "#c2652a",
        "on-primary-container": "#fbe8d8",
        "inverse-primary": "#f0a878",
        "primary-fixed-dim": "#f0a878",
        "on-tertiary": "#ffffff"
      },
      fontFamily: {
        "headline": ["EB Garamond", "serif"],
        "display": ["EB Garamond", "serif"],
        "body": ["Manrope", "sans-serif"],
        "label": ["Manrope", "sans-serif"]
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' }
        },
        'roll-in-top': {
          '0%': { transform: 'translateY(-800px) rotate(-540deg)', opacity: '0' },
          '100%': { transform: 'translateY(0) rotate(0deg)', opacity: '1' }
        },
        'shadow-drop-2-center': {
          '0%': { transform: 'translateZ(0)', boxShadow: '0 0 0 0 transparent' },
          '100%': { transform: 'translateZ(50px)', boxShadow: '0 0 20px 0 rgba(0,0,0,.35)' }
        },
        'roll-in-left': {
          '0%': { transform: 'translateX(-800px) rotate(-540deg)', opacity: '0' },
          '100%': { transform: 'translateX(0) rotate(0deg)', opacity: '1' }
        },
        'text-focus-in': {
          '0%': { filter: 'blur(12px)', opacity: '0' },
          '100%': { filter: 'blur(0)', opacity: '1' }
        },
        'tracking-in-expand': {
          '0%': { letterSpacing: '-.5em', opacity: '0' },
          '40%': { opacity: '.6' },
          '100%': { opacity: '1' }
        },
        'slide-right': {
          '0%': { transform: 'translateX(-100px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' }
        }
      },
      animation: {
        'scroll-slow': 'scroll 40s linear infinite',
        'scroll-medium': 'scroll 25s linear infinite',
        'roll-in-top': 'roll-in-top 1.5s ease-out both',
        'shadow-drop-2-center': 'shadow-drop-2-center .4s cubic-bezier(.25,.46,.45,.94) both',
        'roll-in-left': 'roll-in-left .6s ease-out both',
        'text-focus-in': 'text-focus-in 1s cubic-bezier(.55,.085,.68,.53) both',
        'tracking-in-expand': 'tracking-in-expand 1s cubic-bezier(.215,.61,.355,1.000) both',
        'slide-right': 'slide-right .5s cubic-bezier(.25,.46,.45,.94) both'
      }
    },
  },
  plugins: [],
}
