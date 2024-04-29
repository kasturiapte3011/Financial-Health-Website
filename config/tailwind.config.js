/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

module.exports = {
    content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
    theme: {
      extend: {
        colors: {
            white: "white",
            none: "none",
          },
          fontFamily: {
            quicksand: ["Quicksand", "sans-serif"],
          },
          borderWidth: {
            1: "1px",
          },
          
          // because tailwind css template rows go upto only 6
          gridTemplateRows: {
            7: "repeat(7, minmax(0, 1fr))",
            8: "repeat(8, minmax(0, 1fr))",
          },
      },
    },
    plugins: [],
  }