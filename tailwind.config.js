/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-blue': '#1C215E',
        'secondary-golden':'#FD705F',
        'hover-secondary-golden':'#b34b3f',
      },
    },
    fontFamily:{
      Nunito: ['Nunito', 'sans-serif']
    }
  },
  plugins: [],
}

