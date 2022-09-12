/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}", "./src/**/*.{html,js}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        "mm-charcoal": "rgba(64, 76, 83, 1)",
        "mm-alice-blue": "rgba(227, 235, 238, 1)",
        "mm-cool-grey": "rgba(135, 146, 166, 1)",
        "mm-jet": "rgba(53, 54, 51, 1)",
        "mm-medium-carmine": "rgba(177, 65, 46, 1)",
        "mm-medium-carmine-opacity": "rgba(177, 65, 46, 0.75)",
      },
    },
  },
  plugins: [],
};
