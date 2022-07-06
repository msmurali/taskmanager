/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Poppins", "sans-serif"],
      },
      gridTemplateColumns: {
        header: "0.25fr 1fr",
      },
      screens: {
        md: "860px",
      },
    },
  },
  plugins: [],
};
