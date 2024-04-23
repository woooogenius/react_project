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
        'text-gradient-to' : '#4E81FF',
        'dark-gray' :'#222222',
        'dark-gray-3' :'#333333',
        'text-gray' : '#5C5C5C', 
        'box-light-violet' : '#F0F0FA',
        'text-gray-2' : '#6E7583',
        'box-gray-light' : '#F8F9FA',
        'box-violet-light' : '#E9EBFD',
        'box-blue-light' : '#DBE5FF',
        'box-yellow-light' : '#FBFBF0',
        'text-gray-medium' : '#727B88',
        'text-blue-deep' : '#7079CB',
        'text-gra-1' : '#6264F6',
        'text-gra-2' : '#7F3ADD',
        'text-blue-deep2' : '#375984',
        'text-blue-light2' : '#698AB1',
        'text-brown' : '#6C3111'

      }
    },
  },
  plugins: [],
}

