/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'text': '#e5ebf3',
      'background': '#0b1017',
      'primary': '#a6b5d5',
      'secondary': '#5e3169',
      'accent': '#b8699f',
     },
    extend: {},
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.hide-scrollbar': {
          scrollbarWidth: 'none', /* Firefox */
          '-ms-overflow-style': 'none', /* Internet Explorer 10+ */
          '&::-webkit-scrollbar': {
            display: 'none', /* Chrome, Safari, Opera */
          },
        },
      };
      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
}

