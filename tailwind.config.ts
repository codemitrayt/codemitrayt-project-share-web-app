import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        brand: {
          100: "hsl(222,20%,95%)",
          200: "hsl(222,36%,93%)",
          300: "hsl(222,57%,92%)",
          400: "hsl(222,73%,81%)",
          500: "hsl(222,75%,75%)",
          600: "hsl(222,81%,73%)",
          700: "hsl(222,94%,58%)",
          800: "hsl(222,96%,36%)",
          900: "hsl(222,95%,20%)",
        },
        warning: {
          100: "hsl(41,20%,95%)",
          200: "hsl(41,36%,93%)",
          300: "hsl(41,57%,92%)",
          400: "hsl(41,73%,81%)",
          500: "hsl(41,75%,75%)",
          600: "hsl(41,81%,73%)",
          700: "hsl(41,94%,58%)",
          800: "hsl(41,96%,36%)",
          900: "hsl(41,95%,20%)",
        },
        success: {
          100: "hsl(137,20%,95%)",
          200: "hsl(137,36%,93%)",
          300: "hsl(137,57%,92%)",
          400: "hsl(137,73%,81%)",
          500: "hsl(137,75%,75%)",
          600: "hsl(137,81%,73%)",
          700: "hsl(137,94%,58%)",
          800: "hsl(137,96%,36%)",
          900: "hsl(137,95%,20%)",
        },
        danger: {
          100: "hsl(358,20%,95%)",
          200: "hsl(358,36%,93%)",
          300: "hsl(358,57%,92%)",
          400: "hsl(358,73%,81%)",
          500: "hsl(358,75%,75%)",
          600: "hsl(358,81%,73%)",
          700: "hsl(358,94%,58%)",
          800: "hsl(358,96%,36%)",
          900: "hsl(358,95%,20%)",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
