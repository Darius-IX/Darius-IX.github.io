/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'primary': 'var(--color-primary)',
      'accent-light': 'var(--color-accent-light)',
      'accent-dark': 'var(--color-accent-dark)',
      'light': 'var(--color-light)',
      'contrast': 'var(--color-contrast)',
      'slate': 'var(--color-slate)',
      'white': 'var(--color-white)',
      'black': 'var(--color-black)',
    },
    screens: {
      'xs': '384px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {},
  },
  plugins: [
    function ({addUtilities}) {
      // scrollbars right here unused so far
      const newUtilities = {
        ".scrollbar-thin": {
          scrollbarWidth: "thin",
          scrollbarColor: "rgb(31 29 29) #9DD1F1"
        },
        ".scrollbar-webkit": {
          "&::-webkit-scrollbar": {
            width: "8px"
          },
          "&::-webkit-scrollbar-track": {
            background: "white"
          },
          "&::-webkit-scrollbar-thumb": {
            background: "rgb(31 41 55)",
            borderRadius: "20px",
            border: "1px solid white"
          }
        }
      }

      addUtilities(newUtilities, ["responsive", "hover"])
    }
  ],
}