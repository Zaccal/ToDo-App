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
        'element': '#ffd43b',
        'main': '#848484',
        'mute': '#ebebeb',
        'muteDark': '#e1e1e1', 
        'modalContainer': '#000000c4',

        // dark theme colors
        'bgColorDark': '#252525',
        'main': '#717171',
        'elementDark': '#0351fa'
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

