import type { Config } from "tailwindcss";
import { COLORS } from "./lib/constants";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: COLORS.forest,
        bronze: COLORS.bronze,
        cream: COLORS.cream,
        charcoal: COLORS.charcoal,
        "grey-light": COLORS.greyLight,
      },
      fontFamily: {
        montserrat: ["var(--font-montserrat)", "Montserrat", "sans-serif"],
      },
      borderRadius: {
        xl: "12px",
        "2xl": "16px",
      },
      minHeight: {
        touch: "48px",
      },
    },
  },
  plugins: [],
};

export default config;
