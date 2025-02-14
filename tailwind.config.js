/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Raleway", "ui-sans-serif", "system-ui"],
    },
    extend: {
      keyframes: {
        "gradient-x": {
          "0%, 100%": { "background-position": "0% 50%" },
          "50%": { "background-position": "100% 50%" },
        },
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slide-in-left": {
          "0%": {
            opacity: "0",
            transform: "translateX(-50px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
        fadeInSequence: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        glitch: {
          "0%, 100%": {
            textShadow: "0 0 5px rgba(0,255,255,0)",
          },
          "50%": {
            textShadow: "0 0 10px rgba(0,255,255,0.6)",
          },
        },
        pulse: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.05)" },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.6s ease-out forwards",
        "slide-in-left": "slide-in-left 0.7s ease-out",
        fadeInSequence1: "fadeInSequence 0.6s ease-out forwards 100ms",
        fadeInSequence2: "fadeInSequence 0.6s ease-out forwards 200ms",
        fadeInSequence3: "fadeInSequence 0.6s ease-out forwards 300ms",
        fadeInSequence4: "fadeInSequence 0.6s ease-out forwards 400ms",
        fadeInSequence5: "fadeInSequence 0.6s ease-out forwards 500ms",
        fadeInSequence6: "fadeInSequence 0.6s ease-out forwards 600ms",
        glitch: "glitch 2s ease-in-out infinite",
        pulse: "pulse 2s ease-in-out infinite",
        "gradient-x": "gradient-x 3s ease infinite",
      },
      boxShadow: {
        neon: "0 0 15px rgba(45, 212, 191, 0.7)",
        "neon-teal": "0 0 15px rgba(0,255,255,0.5)",
        "glow-teal": "0 0 20px rgba(0,255,255,0.3)",
      },
      colors: {
        navy: {
          900: "#0A1128",
        },
        "services-bg": "#F9F9F9",
        "services-teal": "#009688",
        "services-teal-dark": "#00796B",
        "digital-dark": {
          DEFAULT: "#111827",
          50: "#f9fafb",
          100: "#f3f4f6",
          200: "#e5e7eb",
          300: "#d1d5db",
          400: "#9ca3af",
          500: "#6b7280",
          600: "#4b5563",
          700: "#374151",
          800: "#1f2937",
          900: "#111827",
        },
        "digital-teal": {
          DEFAULT: "#0d9488",
          50: "#f0fdfa",
          100: "#ccfbf1",
          200: "#99f6e4",
          300: "#5eead4",
          400: "#2dd4bf",
          500: "#14b8a6",
          600: "#0d9488",
          700: "#0f766e",
          800: "#115e59",
          900: "#134e4a",
        },
      },
      backgroundImage: {
        "circuit-pattern":
          "linear-gradient(135deg, rgba(13,148,136,0.1) 0%, rgba(13,148,136,0.05) 100%), radial-gradient(circle at top right, rgba(13,148,136,0.2) 0%, transparent 20%)",
      },
    },
  },
  plugins: [],
}
