/** @type {import('tailwindcss').Config} */


module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}", // Adjust paths to your components
  ],
  theme: {
    extend: {
      colors: {
        yellowGold: "#E6CA97",
        whiteGold: "#D9D9D9",
        roseGold: "#E1A4A9",
      },
      fontFamily: {
        avenir: ["Avenir-Book", "sans-serif"],
        montserrat_med: ["Montserrat-Medium", "sans-serif"],
        montserrat_reg: ["Montserrat-Regular", "sans-serif"],
      },
    },
  },
  plugins: [],
};

