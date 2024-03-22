/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'DM-Sans': ['DM Sans'],
        'Quicksand': ['Quicksand'],
      }
    },
  },
  plugins: [],
}
