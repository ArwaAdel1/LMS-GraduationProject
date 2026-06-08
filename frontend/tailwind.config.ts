import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1A103D",
        secondary: "#37306B",
        accent: "#00C9DB",
        success: "#7C3AED",
        danger: "#EF4444",
        warning: "#F59E0B",
        background: "#F4F3FB",
        surface: "#FFFFFF",
        "text-primary": "#1A103D",
        "text-secondary": "#6B7280",
        "text-on-primary": "#FFFFFF",
        "text-on-accent": "#1A103D",
        hairline: "#E5E7EB",
      },
      fontFamily: {
        cairo: ["Cairo", "sans-serif"],
      },
      fontSize: {
        h1: ["28px", { lineHeight: "1.3" }],
        h2: ["22px", { lineHeight: "1.3" }],
        h3: ["18px", { lineHeight: "1.3" }],
        body: ["14px", { lineHeight: "1.6" }],
        small: ["12px", { lineHeight: "1.5" }],
        caption: ["11px", { lineHeight: "1.4" }],
      },
      fontWeight: {
        regular: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
        extrabold: "800",
      },
      spacing: {
        xs: "4px",
        sm: "8px",
        md: "16px",
        lg: "24px",
        xl: "32px",
        "2xl": "48px",
        "3xl": "64px",
      },
      borderRadius: {
        sm: "6px",
        md: "10px",
        lg: "14px",
        xl: "20px",
        full: "9999px",
        button: "12px",
        card: "14px",
        input: "10px",
        badge: "20px",
      },
      boxShadow: {
        card: "0 1px 3px rgba(0,0,0,0.06)",
        elevated: "0 4px 12px rgba(0,0,0,0.08)",
        modal: "0 8px 24px rgba(0,0,0,0.12)",
      },
      maxWidth: {
        mobile: "480px",
        tablet: "720px",
        desktop: "1200px",
      },
      keyframes: {
        "fade-up": {
          from: { opacity: "0", transform: "translateY(16px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease both",
        float: "float 5s ease-in-out infinite",
      },
    },
    screens: {
      sm: "481px",
      md: "769px",
    },
  },
  plugins: [
    // Logical RTL/LTR variants so directional styles flip with document `dir`.
    plugin(({ addVariant }) => {
      addVariant("rtl", '&:where([dir="rtl"] *, [dir="rtl"])');
      addVariant("ltr", '&:where([dir="ltr"] *, [dir="ltr"])');
    }),
  ],
};

export default config;
