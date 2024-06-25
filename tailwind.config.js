/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'Haverford-red': 'rgba(165, 22, 22, 0.87)'
      }
    },
  },
  plugins: [],
}

