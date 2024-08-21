/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "black": "#1c1c1c",
        "red": "#FF474D",
        "pink": "#FFC8C8",
        "white": "#f5f5f5",
        "gray": "#f5f5f588",
        "darkRed": "#FF625033",
        "altRed": "#FF6250"
      }
    },
  },
  plugins: [],
}
