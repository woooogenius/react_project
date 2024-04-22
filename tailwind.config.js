/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        'button_color' : '#6250FF',
        'text-gradient-from' : '#9FBAFD',
        'text-gradient-to' : '#4E81FF'
      }
    },
  },
  plugins: [],
}

