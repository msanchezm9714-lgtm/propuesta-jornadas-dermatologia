import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        background: "#FFFFFF",
        brand: {
          DEFAULT: "#2DD4BF",
          soft: "#99F6E4",
          hover: "#14B8A6",
        },
        ink: {
          DEFAULT: "#111827",
          muted: "#6B7280",
        },
        card: "#F8FAFC",
        "brand-border": "rgba(45, 212, 191, 0.20)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "-apple-system", "sans-serif"],
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
        "4xl": "2rem",
      },
      boxShadow: {
        soft: "0 1px 2px rgba(17, 24, 39, 0.04), 0 8px 24px -6px rgba(17, 24, 39, 0.08)",
        "soft-lg": "0 2px 4px rgba(17, 24, 39, 0.04), 0 24px 48px -12px rgba(17, 24, 39, 0.12)",
        glow: "0 0 0 1px rgba(45, 212, 191, 0.16), 0 24px 48px -16px rgba(45, 212, 191, 0.35)",
        float: "0 12px 40px -8px rgba(17, 24, 39, 0.16)",
      },
      keyframes: {
        blob: {
          "0%, 100%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(24px, -32px) scale(1.06)" },
          "66%": { transform: "translate(-16px, 20px) scale(0.96)" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        blob: "blob 16s ease-in-out infinite",
        "blob-slow": "blob 24s ease-in-out infinite",
        "fade-up": "fade-up 0.6s ease-out forwards",
      },
      maxWidth: {
        "8xl": "90rem",
      },
    },
  },
  plugins: [],
};

export default config;
