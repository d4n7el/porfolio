const { nextui } = require('@nextui-org/react');
const { addDynamicIconSelectors } = require('@iconify/tailwind');

export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    colors: {
      'dark-primary': '#0D1F23',
      'dark-secondary': '#132E35',
      'dark-tertiary': '#2D4A53',
      'light-primary': '#69818D',
      'light-secondary': '#AFB3B7',
      'light-tertiary': '#56636A',
      light: '#C1DADF',
    },
    extend: {},
  },
  plugins: [nextui(), addDynamicIconSelectors()],
};
