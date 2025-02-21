// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#6366f1",
        secondary: "#22d3ee",
        accent: "#f43f5e",
        muted: "#64748b",
        success: "#10b981",
        warning: "#f59e0b",
        error: "#ef4444",
        dark: {
          bg: "#0f172a",
          card: "#1e293b",
          text: "#e2e8f0",
          primary: "#818cf8",
        },
      },
      borderRadius: {
        sm: "4px",
        md: "8px",
        lg: "16px",
        xl: "24px",
        full: "9999px",
      },
      spacing: {
        xs: "4px",
        sm: "8px",
        md: "16px",
        lg: "24px",
        xl: "32px",
        "2xl": "48px",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        serif: ["Merriweather", "serif"],
        mono: ["Fira Code", "monospace"],
      },
      boxShadow: {
        sm: "0px 1px 3px rgba(0, 0, 0, 0.1)",
        md: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        lg: "0px 10px 15px rgba(0, 0, 0, 0.2)",
      },
      transitionTimingFunction: {
        fast: "all 0.2s ease-in-out",
        medium: "all 0.4s ease-in-out",
        slow: "all 0.6s ease-in-out",
      },
      screens: {
        xs: "480px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1600px",
        "3xl": "1920px",
      },
    },
  },
  plugins: [],
  darkMode: 'class',
};
