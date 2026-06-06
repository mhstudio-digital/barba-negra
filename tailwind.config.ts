import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy:       "#0B1D2E",
        "navy-mid": "#0F2337",
        "navy-light": "#162F45",
        gold:       "#C9A84C",
        "gold-dim": "#9A7A35",
        cream:      "#F5F0E8",
        muted:      "#7A8FA0",
        teal:       "#2A9D8F",
      },
      fontFamily: {
        cormorant: ["Cormorant Garamond", "serif"],
        dm:        ["DM Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
