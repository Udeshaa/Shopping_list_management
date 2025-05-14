// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      keyframes: {
        'bubble-size': {
          '0%, 75%': { width: 'var(--size)', height: 'var(--size)' },
          '100%': { width: '0rem', height: '0rem' },
        },
        'bubble-move': {
          '0%': { bottom: '-4rem' },
          '100%': { bottom: 'var(--distance)' },
        },
      },
      animation: {
        'bubble-size': 'bubble-size var(--time) ease-in infinite var(--delay)',
        'bubble-move': 'bubble-move var(--time) ease-in infinite var(--delay)',
      },
    },
  },
  plugins: [
    require('flowbite/plugin'),
    require('tailwind-scrollbar'),
  ],
}
