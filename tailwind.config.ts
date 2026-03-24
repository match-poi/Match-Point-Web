import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"]
      },
      colors: {
        graphite: {
          DEFAULT: "#0B0F14"
        },
        accent: {
          DEFAULT: "#FF6B00"
        },
        "pure-white": "#FFFFFF"
      }
    }
  },
  plugins: []
} satisfies Config;

