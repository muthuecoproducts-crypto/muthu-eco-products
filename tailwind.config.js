/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#16a093',
        secondary: '#117964',
        accent: '#f59e0b',
      },
    },
  },
  plugins: [],
}