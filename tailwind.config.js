/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
        colors: {
            primary: '#79D35E',
            secondary: '#3E3737',
        },
    },
  },
  plugins: [],
}

