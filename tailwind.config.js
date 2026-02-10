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
    colors: {
      background: '#0a0a0f',
      surface: '#111118',
      surfaceHighlight: '#16161e',
      border: '#1e1e2e',
      primary: '#f0f0f0',
      secondary: '#8888a0',
      accent: '#06b6d4',
      accentGlow: 'rgba(6, 182, 212, 0.15)',
    },
    extend: {
      fontFamily: {
        default: ['Roboto', 'sans'],
      },
      borderWidth: {
        'active-link': '1px',
      },
      borderColor: (theme) => ({
        'active-link': theme('colors.dark-tertiary'),
        'white-alpha-light': theme('colors.white-alpha-light'),
      }),
    },
  },
  plugins: [nextui(), addDynamicIconSelectors(), animations],
};
