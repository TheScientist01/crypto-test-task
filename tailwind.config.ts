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
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      boxShadow: {
        "card-100": "0 0 10px 0 rgba(0,0,0,0.1)",
        "card-200": "0 0 10px 0 rgba(0,0,0,0.2)",
        "card-300": "0 0 10px 0 rgba(0,0,0,0.3)",
        "card-400": "0 0 10px 0 rgba(0,0,0,0.4)",
      },
    },
  },
  plugins: [],
};
export default config;
