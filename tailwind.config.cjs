/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        urbanist: ["Urbanist", "sans-serif"],
        garamond: ["EB Garamond", "serif"],
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: true,
  },
};
