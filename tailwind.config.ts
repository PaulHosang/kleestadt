import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        foregroundDimmed: "var(--foreground-dimmed)",
        backgroundSecondary: "var(--background-secondary)",
      },
      animation: {
        'border': 'border 4s linear infinite',
      },
      keyframes: {
          'border': {
              to: { '--border-angle': '360deg' },
          }
      }      
    },
  },
  plugins: [],
} satisfies Config;
