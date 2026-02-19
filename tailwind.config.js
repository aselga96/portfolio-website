/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        sage: {
          50: '#f6f7f2',
          100: '#e8ede3',
          200: '#d3ddd4',
          300: '#b8c9b8',
          400: '#9ab09a',
          500: '#7d967c',
          600: '#657d64',
          700: '#516651',
          800: '#425342',
          900: '#364436',
        },
        emerald: {
          50: '#ecfdf5',
          100: '#d1fae5',
          200: '#a7f3d0',
          300: '#6ee7b7',
          400: '#34d399',
          500: '#2ecc71',
          600: '#22b8aa',
          700: '#1a936f',
          800: '#148f69',
          900: '#0e7c5b',
        }
      }
    },
  },
  plugins: [],
};