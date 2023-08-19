/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        suit: ["SUIT Variable"],
      },
      colors: {
        gray1: "#EEEEEE",
        gray2: "#4f4f4f",
        babyBlue: "#B3D0EB",
        babyBlue2: "#8DADCA",
        babyBlue3: "#80B1DE",
      },
      screens: {
        xs: {min: "390px", max: "640px"}
      },
    },
  },
  plugins: [],
};
