module.exports = {
  content: ["./*.html", "node_modules/preline/dist/*.js"],
  theme: {
    extend: {
      fontFamily: {
        intro: ["Bebas Neue"],
        logo: ["Lato"],
      },
      colors: {
        white: "#e9ebec",
        grayLight: "#d2d8d9",
        gray: "#bcc4c7",
        accent: "#a7abba",
        primary: "#0f2027",
      },
      animation: {
        "fade-in-bottom":
          "fade-in-bottom 1.5s cubic-bezier(0.390, 0.575, 0.565, 1.000)   both",
      },
      keyframes: {
        "fade-in-bottom": {
          "0%": {
            transform: "translateY(10px)",
            opacity: "0",
          },
          to: {
            transform: "translateY(0)",
            opacity: "1",
          },
        },
      },
    },
  },
  plugins: [require("preline/plugin")],
  safelist: [
    "animate-[fade-in_1s_ease-in-out]",
    "animate-[fade-in-down_1s_ease-in-out]",
  ],
};
