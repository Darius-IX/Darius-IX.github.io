/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'primary': '#031927',
      'accent-light': '#9DD1F1',
      'accent-dark': '#508AA8',
      'light': '#C8E0F4',
      'contrast': '#F2D1C9',
      'slate': 'slate-100',
      'white': 'white',
      'black': 'black',
    },
    extend: {},
  },
  plugins: [],
}