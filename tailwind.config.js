/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Space Grotesk", "sans-serif"],
    },
    spacing: {
      0: "0",
      4: "4px",
      8: "8px",
      16: "16px",
      32: "32px",
      36: "36px",
    },
    extend: {
      gridTemplateColumns: {
        "max-auto": "max-content auto",
        "max2-auto": "max-content max-content auto",
      },
    },
  },
  plugins: [],
};
