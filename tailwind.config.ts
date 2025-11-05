import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
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
          light: "hsl(var(--primary-light))",
          dark: "hsl(var(--primary-dark))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
          light: "hsl(var(--secondary-light))",
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
          light: "hsl(var(--accent-light))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        "fade-in": {
          from: {
            opacity: "0",
            transform: "translateY(20px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "fade-in-delay": {
          "0%": {
            opacity: "0",
            transform: "translateY(20px)",
          },
          "50%": {
            opacity: "0",
            transform: "translateY(20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "slide-in": {
          from: {
            transform: "translateX(-100%)",
          },
          to: {
            transform: "translateX(0)",
          },
        },
        float: {
          "0%, 100%": {
            transform: "translateY(0) translateX(0)",
          },
          "50%": {
            transform: "translateY(-20px) translateX(10px)",
          },
        },
        "float-slow": {
          "0%, 100%": {
            transform: "translateY(0) translateX(0)",
          },
          "50%": {
            transform: "translateY(-30px) translateX(-15px)",
          },
        },
        "float-slower": {
          "0%, 100%": {
            transform: "translateY(0) translateX(0)",
          },
          "50%": {
            transform: "translateY(-40px) translateX(20px)",
          },
        },
        "ken-burns": {
          "0%": {
            transform: "scale(1)",
          },
          "100%": {
            transform: "scale(1.1)",
          },
        },
        blob: {
          "0%, 100%": {
            transform: "translate(0, 0) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
        },
        "pulse-slow": {
          "0%, 100%": {
            opacity: "0.3",
          },
          "50%": {
            opacity: "0.5",
          },
        },
        "pulse-slower": {
          "0%, 100%": {
            opacity: "0.2",
          },
          "50%": {
            opacity: "0.4",
          },
        },
        "grid-flow": {
          "0%": {
            transform: "translateY(0)",
          },
          "100%": {
            transform: "translateY(4rem)",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.6s ease-out",
        "fade-in-delay": "fade-in-delay 1s ease-out",
        "slide-in": "slide-in 0.5s ease-out",
        float: "float 6s ease-in-out infinite",
        "float-slow": "float-slow 8s ease-in-out infinite",
        "float-slower": "float-slower 10s ease-in-out infinite",
        "ken-burns": "ken-burns 20s ease-out infinite alternate",
        blob: "blob 7s ease-in-out infinite",
        "pulse-slow": "pulse-slow 4s ease-in-out infinite",
        "pulse-slower": "pulse-slower 6s ease-in-out infinite",
        "grid-flow": "grid-flow 20s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
