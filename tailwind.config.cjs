/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'background-us': '#15161B',
      'white-us': '#EEEEEE',
      'green-us': '#52965D',
      'silver-us': '#BFBFBF',
    },
    extend: {
      gridTemplateColumns: {
        'us': '2fr, 1fr, 1fr, 1fr',
        'mid-2x': '1.5fr, 1.8fr, 1fr',
        'footer': '200px minmax(900px, 1fr) 100px',
      },
    },
  },
  plugins: [],
}
