/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'brand-color-1': '#372846',
        'brand-color-2': '#242424',
        'brand-color-3': '#d1a2ff'
      }
    }
  },
  plugins: []
}
