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
        lime: {
          DEFAULT: "#B7FF3C"
        },
        "pure-white": "#FFFFFF"
      }
    }
  },
  plugins: []
} satisfies Config;

