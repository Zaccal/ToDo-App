/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'bgColor': '#f3f3f3',
        'main': '#848484',
        'mute': '#eeeeee',
        'muteDark': '#e1e1e1', 
        'modalContainer': '#000000c4'
      },
      zIndex: {
        '1': '1',
        '2': '2',
        '3': '3'
      },
    },
  },
  plugins: [],
}

