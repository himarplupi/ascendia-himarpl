import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

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
      backgroundImage: {
        "white-paper":
          "url('https://cdn.jsdelivr.net/gh/himarplupi/assets-himarpl@v1.3.2/www/bg/bg-paper.png')",
        "dedication-1":
          "url('https://cdn.jsdelivr.net/gh/himarplupi/assets-himarpl@v1.3.2/www/bg/bg-dedication-1.jpg')",
        "dedication-2":
          "url('https://cdn.jsdelivr.net/gh/himarplupi/assets-himarpl@v1.3.2/www/bg/bg-dedication-2.png')",
        "dedication-advo":
          "url('https://cdn.jsdelivr.net/gh/himarplupi/assets-himarpl@v1.3.2/www/bg/bg-dedication-advo.png')",
        "dedication-burta":
          "url('https://cdn.jsdelivr.net/gh/himarplupi/assets-himarpl@v1.3.2/www/bg/bg-dedication-burta.png')",
        "about-1":
          "url('https://cdn.jsdelivr.net/gh/himarplupi/assets-himarpl@v1.3.2/www/bg/bg-about-1.png')",
        "about-2":
          "url('https://cdn.jsdelivr.net/gh/himarplupi/assets-himarpl@v1.3.2/www/bg/bg-about-2.png')",
        "about-3":
          "url('https://cdn.jsdelivr.net/gh/himarplupi/assets-himarpl@v1.3.2/www/bg/bg-about-3.png')",
        "home-1":
          "url('https://cdn.jsdelivr.net/gh/himarplupi/assets-himarpl@v1.3.2/www/bg/bg-home-1.png')",
        "dark-transparent-dark-gradient":
          "linear-gradient(180deg, rgba(9, 9, 11, 0.75) 0%, rgba(9, 9, 11, 0.1875) 50%, rgba(9, 9, 11, 0.75) 100%)",
        "white-transparent-white-gradient":
          "linear-gradient(180deg, rgba(250, 250, 250, 0.45) 0%, rgba(250, 250, 250, 0.65) 100%)",
        "profile-dark-gradient":
          "linear-gradient(180deg, rgba(9, 9, 11, 0.5) 0%, rgba(9, 9, 11, 0) 50.08%, rgba(9, 9, 11, 0.75) 100%)",
      },

      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
        serif: ["var(--font-serif)", ...fontFamily.sans],
      },
      colors: {
        "bright-sun": {
          "50": "#fffbeb",
          "100": "#fef4c7",
          "200": "#fde88a",
          "300": "#fbd23f",
          "400": "#fac225",
          "500": "#f4a20c",
          "600": "#d87a07",
          "700": "#b3560a",
          "800": "#91420f",
          "900": "#78370f",
        },
        "blue-ribbon": {
          "50": "#eef4ff",
          "100": "#d9e4ff",
          "200": "#bcd1ff",
          "300": "#8eb4ff",
          "400": "#598cff",
          "500": "#295bff",
          "600": "#1b3ff5",
          "700": "#142ce1",
          "800": "#1725b6",
          "900": "#19268f",
          "950": "#141957",
        },
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
        ripple: {
          "0%, 100%": {
            transform: "translate(-50%, -50%) scale(1)",
          },
          "50%": {
            transform: "translate(-50%, -50%) scale(0.9)",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        ripple: "ripple var(--duration,2s) ease calc(var(--i, 0)*.2s) infinite",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("tailwindcss-animate")],
} satisfies Config;

export default config;
