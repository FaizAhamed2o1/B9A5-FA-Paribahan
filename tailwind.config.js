/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      "primary-green": "#1dd100",
      "custom-black-text": "#030712",
    },
    extend: {},
  },
  plugins: [],
};
