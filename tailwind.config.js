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
      backgroundColor: {
        dark: "#151515",
        "general-tag": "rgb(187, 247, 208)",
        "entertainment-tag": "rgb(186, 230, 253)",
        "learning-tag": "rgb(254, 240, 138)",
        "shopping-tag": "rgb(233, 213, 255)",
        "travel-tag": "rgb(251, 207, 232)",
        "urgent-tag": "rgb(254, 202, 202)",
        "work-tag": " rgb(191, 219, 254)",
      },
      textColor: {
        "general-tag": "rgb(21, 128, 61)",
        "entertainment-tag": "rgb(3, 105, 161)",
        "learning-tag": "rgb(161, 98, 7)",
        "shopping-tag": "rgb(126, 34, 206)",
        "travel-tag": "rgb(190, 24, 93)",
        "urgent-tag": "rgb(185, 28, 28)",
        "work-tag": "rgb(29, 78, 216)",
      },
    },
  },
  plugins: [],
};
