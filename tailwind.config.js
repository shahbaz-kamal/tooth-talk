/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "color-primary": "rgb(223, 242, 235)",
        "color-secondary": "rgb(185, 229, 232)",
        "color-tertiary": "rgb(122, 178, 211)",
        "color-quaternary": "rgb(74, 98, 138)",
      },
    },
  },
  plugins: [require("daisyui")],
};
