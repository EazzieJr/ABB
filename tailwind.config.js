/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        interTight: ["Inter Tight", "sans-serif"],
      },

      colors: {
        primary: "#212121",
        secondary: "#B1FC03",
      },
    },
  },
  plugins: [],
}

