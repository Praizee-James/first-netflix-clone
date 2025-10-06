/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        netflix: {
          red: '#e50914',
          black: '#000000',
          gray: '#2d2d2d',
        }
      },
      backgroundImage: {
        'netflix-gradient': 'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.7) 100%)',
      }
    },
  },
  plugins: [],
}