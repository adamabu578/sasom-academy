/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        gradient: "linear-gradient(90deg, #009EC5 16.05%, #EC3F75 100%)",
      },
    },
    colors: {
      white: "#ffffff",
      black: "#000000",
      sasomBlue: "#009ec6",
      sasomRed: "#ec3f75",
      sasomGreen: "#00c57d",
      primary: "#009EC5",
    },
  },
  plugins: [],
};
