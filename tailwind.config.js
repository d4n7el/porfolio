const { nextui } = require('@nextui-org/react');
const { addDynamicIconSelectors } = require('@iconify/tailwind');
import animations from '@midudev/tailwind-animations';

export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        cyber: {
          950: '#07090e',
          900: '#0b0f17',
          850: '#0f1422',
          800: '#151c2e',
          750: '#1b243b',
          700: '#232e4a',
        },
        cyan: {
          300: '#67e8f9',
          400: '#22d3ee',
          500: '#06b6d4',
          600: '#0891b2',
        },
        emerald: {
          400: '#34d399',
          500: '#10b981',
        },
        background: '#0b0f17',
        surface: '#0f131c',
        surfaceHighlight: '#16161e',
        border: '#1e293b',
        primary: '#f8fafc',
        secondary: '#94a3b8',
        accent: '#06b6d4',
        accentGlow: 'rgba(6, 182, 212, 0.15)',
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      borderWidth: {
        'active-link': '1px',
      },
      borderColor: (theme) => ({
        'active-link': theme('colors.dark-tertiary'),
        'white-alpha-light': theme('colors.white-alpha-light'),
      }),
      animation: {
        'ping-slow': 'ping 2s cubic-bezier(0, 0, 0.2, 1) infinite',
      },
    },
  },
  plugins: [nextui(), addDynamicIconSelectors(), animations],
};
