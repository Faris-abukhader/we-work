/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors:{
        customGray:'#A1C7D9',
        customGreen:'#55bca7',
        customDarkBlue:'#0d1442',
        customLightBlue:'#4aa5c3',
        customLightPink:'#FEF8FF'
      },
      fontFamily:{
        almarai:'Almarai',
        tajawal:'Tajawal',
        monadi:'monadi'
      },
      ringWidth: {
        '0.5': '0.5px',
        '0.7': '0.7px',
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
  ],
}
