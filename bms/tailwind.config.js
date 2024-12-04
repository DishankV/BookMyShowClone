/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/*.{html,css,js,jsx,ts,tsx}", // Include your JS, JSX, TS, and TSX files
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
};

