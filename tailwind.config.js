/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        md: "105px",
      },
    },
    fontFamily: {
      "dana-regular": "dana-regular",
      "dana-medium": "dana-medium",
      "dana-bold": "dana-bold",
    },
    extend: {
      colors: {
        "primary-purple": "#6A49F2",
        "dark-purple": "#32236F",
      },
      boxShadow: {
        primary: "0px 4px 10px #EDE9FE",
        section: "0px 4px 30px #EDE9FE",
      },
      borderRadius: {
        primary: "10px",
        section: "30px",
      },
    },
  },
  plugins: [],
};
