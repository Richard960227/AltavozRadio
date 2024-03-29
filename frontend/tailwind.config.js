/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        'Sedgwick': ['Sedgwick Ave Display', 'cursive'],
      }
    },
  },
  plugins: [require("daisyui")],
}