/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}"
  ],
  
  theme: {
    extend: {
      keyframes: {
        grow: {
          '0%': { transform: 'scale(0)' },
          '100%': { transform: 'scale(1)' },
        },
      },
      animation: {
        grow: 'grow 0.7s ease-in-out forwards',
      },
    },
  },
  plugins: [],
}

