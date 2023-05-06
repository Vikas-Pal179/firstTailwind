/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      xs: "300px",
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
    },
    extend: {},
  },
  plugins: [],
};
