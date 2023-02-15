/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      "5xl": "44px",
      "4xl": "32px",
      "3xl": "24px",
      "2xl": "22px",
      xl: "18px",
    },
    lineHeight: {},
    extend: {
      lineHeight: {
        "5xl": "53px",
      },
      colors: {
        filter: "#BBB9B9",
        status: "#FF9F00",
        blue: "#004DFF",
      },
    },
  },
  plugins: [],
};
