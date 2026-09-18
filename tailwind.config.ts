import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"]
      },
      colors: {
        primary: {
          DEFAULT: "#738765",
          dark: "#5c6d51",
          light: "#8a9b7c"
        },
        accent: {
          DEFAULT: "#ff6501"
        },
        "brand-blue": {
          DEFAULT: "#143559",
          dark: "#0d2847"
        },
        cream: "#f5f7e8",
        lime: "#f1fe9f",
        yellow: "#ffde59",
        "pure-white": "#FFFFFF"
      }
    }
  },
  plugins: []
} satisfies Config;
