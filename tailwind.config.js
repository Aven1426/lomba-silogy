/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js,php}"],
  theme: {
    extend: {
      fontFamily: {
        oswald: ["Oswald", "sans-serif"],
        playfair: ['"Playfair Display"', "serif"],
        neue: ['"Bebas Neue"', "sans-serif"],
      },

      colors: {
        placeholder: "#666666",
      },
    },
  },
  plugins: [],
};
