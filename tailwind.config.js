/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'lg': '8px 8px 2px 1px rgb(0,0,255);',
      },
    },
  },
  plugins: [],
}

