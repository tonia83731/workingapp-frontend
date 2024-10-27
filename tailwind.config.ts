import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#FDFDFB",
        "white-60": "rgb(253, 253, 251, .6)",
        black: "#292929",
        "black-80": "rgb(41, 41, 41, .8)",
        "black-30": "rgb(41, 41, 41, .3)",
        blue: {
          light: "#B6B8D1",
          "light-60": "rgb(182, 184, 209, .6)",
          "light-40": "rgb(182, 184, 209, .4)",
          dark: "#596097",
        },
        warning: "#FCC045",
        error: "#EF6B6E",
      },
    },
  },
  plugins: [],
};
export default config;
