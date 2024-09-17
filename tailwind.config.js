/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./views/**/*.hbs"],
  theme: {
    extend: {
      colors: {
        primary: "#00993a",
        secondary: "#f2f3f4",
      },
      keyframes: {
        borderAnimation: {
          "0%": { left: 0 },
          "100%": { left: "100%" },
        },
      },
      animation: {
        "border-animation": "borderAnimation 300ms ease-in-out",
      },
    },
  },
  plugins: [],
};
