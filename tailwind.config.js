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
      'dark-primary': '#121919',
      'dark-secondary': '#132E35',
      'dark-tertiary': '#2D4A53',
      'light-primary': '#69818D',
      'light-secondary': '#AFB3B7',
      'light-tertiary': '#56636A',
      light: '#C1DADF',
      'light-neutral': '#E4E3EA',
      'white-alpha': 'rgba(255, 255, 255, 0.8)',
      'black-alpha': 'rgba(47, 47, 47, 0.9)',
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
      }),
      backgroundImage: {
        'light-home-bg-default':
          "url('/src/assets/images/light-home-bg-default.webp')",
        'dark-home-bg-default':
          "url('/src/assets/images/dark-home-bg-default.webp')",
      },
      dark: {
        borderColor: (theme) => ({
          'active-link': theme('colors.light-neutral'), // Usa el color 'dark-tertiary' en el modo oscuro
        }),
      },
    },
  },
  plugins: [nextui(), addDynamicIconSelectors()],
};
