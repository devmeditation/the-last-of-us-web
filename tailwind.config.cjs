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
        // Simple 16 column grid
        'us': '2fr, 1fr, 1fr, 1fr',

        // Complex site-specific column configuration
        'footer': '200px minmax(900px, 1fr) 100px',
      },
    },
  },
  plugins: [],
}
