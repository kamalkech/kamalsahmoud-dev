/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Courier"],
      },
      screens: {
        sm: "320px",
      },
      colors: {
        green: "#32cd32",
        yellow: "#FFE700",
        red: "#FF0000",
      },
    },
  },

  plugins: [],
};
