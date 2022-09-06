/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#fcfcfc",
        light: "#bfc7cf",
        primary: "#8f969e",
        dark: "#626870",
      },
    },
  },
  plugins: [],
};
