/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    darkMode: 'class',
    extend: {},
  },
  plugins: [require("daisyui")],
}
