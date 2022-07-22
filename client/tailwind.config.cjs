module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "clr-primary": "#F1FAEE",
        "clr-secondary-one": "#457B9D",
        "clr-secondary-two": "#1D3557",
        "clr-thertiary-one": "#EC4450",
        "clr-thertiary-two": "#E63946",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
