/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Poppins", "sans-serif"],
      },
      gridTemplateColumns: {
        layout: "0.35fr 1fr",
      },
      gridTemplateRows: {
        layout: "auto 1fr",
      },
      screens: {
        md: "860px",
      },
    },
  },
  plugins: [],
};
