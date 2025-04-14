/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
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
          DEFAULT: "#FF9EC3",
          light: "#FFB9D4",
          dark: "#FF83B2",
          muted: "#FFD6E8",
          soft: "#FFC9DE",
          accent: "#FF74A9",
        },
        secondary: {
          DEFAULT: "#B4E4FF",
          light: "#D6F2FF",
          dark: "#92D5FF",
          muted: "#E5F6FF",
          soft: "#CCF0FF",
          accent: "#7DCCFF",
        },
        accent: {
          DEFAULT: "#FFF0F6",
          soft: "#FFF5F9",
          dark: "#FFE5F0",
          rose: "#FFE0ED",
        },
        "dark-primary": {
          DEFAULT: "#FFE878",
          light: "#FFF4B8",
          dark: "#FFD700",
          muted: "#FFFAE0",
          sheen: "#FFF3B0",
          metallic: "#FFE027",
          soft: "#FFEBA8",
          glitter: "#FFDF40",
          text: "#FFFFFF"
        },
        "dark-secondary": {
          DEFAULT: "#F5F8FF",
          light: "#FFFFFF",
          dark: "#E0E8FF",
          muted: "#EDF2FF",
          sheen: "#F0F4FF",
          metallic: "#D1DEFF",
          soft: "#EBF1FF",
        },
        "dark-accent": {
          DEFAULT: "#1A1438",
          soft: "#231C47",
          dark: "#100B29",
          rich: "#2A2152",
          deep: "#0C081D",
          glow: "#342866",
          muted: "#1E1640",
          text: "#F5F8FF"
        },
        floral: {
          pink: "#FFB7D1",
          lavender: "#E6E6FA",
          rose: "#FFD4E5",
          peach: "#FFDAB9",
          mint: "#D4F0E8",
          sage: "#E0EEE4",
        },
      },
      borderRadius: {
        lg: "0.75rem",
        md: "0.5rem",
        sm: "0.25rem",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        shimmer: {
          "100%": {
            transform: "translateX(100%)",
          },
        },
        glow: {
          "0%": {
            opacity: 0.8,
            filter: "saturate(100%) brightness(100%)",
          },
          "50%": {
            opacity: 1,
            filter: "saturate(150%) brightness(120%)",
          },
          "100%": {
            opacity: 0.8,
            filter: "saturate(100%) brightness(100%)",
          },
        },
        metallic: {
          "0%": {
            filter: "brightness(100%) contrast(100%)",
          },
          "50%": {
            filter: "brightness(120%) contrast(110%)",
          },
          "100%": {
            filter: "brightness(100%) contrast(100%)",
          },
        },
        sheen: {
          "0%": {
            backgroundPosition: "200% 0",
          },
          "100%": {
            backgroundPosition: "-200% 0",
          },
        },
        float: {
          "0%, 100%": {
            transform: "translateY(0)",
          },
          "50%": {
            transform: "translateY(-10px)",
          },
        },
        sparkle: {
          "0%": {
            opacity: 0,
            transform: "scale(0.4) rotate(0deg)",
          },
          "50%": {
            opacity: 1,
            transform: "scale(1) rotate(180deg)",
          },
          "100%": {
            opacity: 0,
            transform: "scale(0.4) rotate(360deg)",
          },
        },
        glitter: {
          "0%, 100%": {
            opacity: 0.4,
            transform: "scale(0.8) rotate(0deg)",
            filter: "brightness(100%)",
          },
          "25%": {
            opacity: 1,
            transform: "scale(1.2) rotate(90deg)",
            filter: "brightness(150%)",
          },
          "50%": {
            opacity: 0.6,
            transform: "scale(0.9) rotate(180deg)",
            filter: "brightness(120%)",
          },
          "75%": {
            opacity: 1,
            transform: "scale(1.1) rotate(270deg)",
            filter: "brightness(140%)",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        shimmer: "shimmer 1.5s infinite",
        glow: "glow 3s ease-in-out infinite",
        metallic: "metallic 4s ease-in-out infinite",
        sheen: "sheen 3s linear infinite",
        float: "float 6s ease-in-out infinite",
        sparkle: "sparkle 2s ease-in-out infinite",
        glitter: "glitter 4s ease-in-out infinite",
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(45deg, #FFD700, #FFF3B0, #FFE027, #FFD700)",
        "silver-gradient": "linear-gradient(45deg, #E0E8FF, #F5F8FF, #D1DEFF, #E0E8FF)",
        "rose-gradient": "linear-gradient(45deg, #FFB7D1, #FFD4E5, #FFE0ED, #FFB7D1)",
        "glitter-overlay": "radial-gradient(circle at center, rgba(255,215,0,0.2) 0%, transparent 50%)",
      },
      backgroundSize: {
        "200": "200% 100%",
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'serif'],
        sans: ['var(--font-montserrat)', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(255, 182, 193, 0.25)',
        'glow': '0 0 15px rgba(255, 182, 193, 0.3)',
        'gold': '0 0 20px rgba(255, 215, 0, 0.3)',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
