module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        blue_gray: { 300: "#9da4b1", 900: "#263238", "900_01": "#091b3d" },
        blue: { A400: "#2772f0" },
        gray: { 900: "#1e1e1e", "900_60": "#1e1e1e60" },
        indigo: { A400: "#4861ef" },
        black: { "900_19": "#00000019" },
        white: { A700: "#ffffff" },
      },
      fontFamily: { platform: "Platform" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
