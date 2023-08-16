/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'suit': ['SUIT Variable'],
        'sans': ['GmarketSans'],
        'pretendard': ['Pretendard Variable']
      },
      colors: {
        'gray1': '#ECECEC',
        'gray2': '#4f4f4f',
        'babyBlue': '#B3D0EB',
        'babyBlue2': '#8DADCA'
      }
    },
  },
  plugins: [],
}