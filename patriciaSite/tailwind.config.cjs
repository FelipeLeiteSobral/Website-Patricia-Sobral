/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'invisalign': "url('https://ibb.co/y4vCvfw')",
        'tablet': "url('https://ibb.co/kDY9P9t')",
      }
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
    fontFamily:{
      "Russo":["Russo One", "Arial","Times New Roman"],
      "Raleway":["Raleway", "Arial","Times New Roman"],
      "Bebas-Neue":["Bebas Neue", "Arial","Times New Roman"],
      "Roboto":["Roboto", "Arial","Times New Roman"],
      "Poiret":["Poiret One", "Arial","Times New Roman"]
    }
  },
  plugins: [],
}
