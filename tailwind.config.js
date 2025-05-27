module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./styles/globals.css",
  ],
  theme: {
    extend: {
      backgroundImage: {
        gradient:
          "linear-gradient(60deg, #f79533, #f37055, #ef4e7b, #a166ab, #5073b8, #1098ad, #07b39b, #6fba82)",
      },
      animation: {
        opacity: "opacity 0.25s ease-in-out",
        appearFromRight: "appearFromRight 300ms ease-in-out",
        wiggle: "wiggle 1.5s ease-in-out infinite",
        popup: "popup 0.25s ease-in-out",
        shimmer: "shimmer 3s ease-out infinite alternate",
      },
      keyframes: {
        opacity: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        appearFromRight: {
          "0%": { opacity: 0.3, transform: "translate(15%, 0px);" },
          "100%": { opacity: 1, transform: "translate(0);" },
        },
        wiggle: {
          "0%, 20%, 80%, 100%": {
            transform: "rotate(0deg)",
          },
          "30%, 60%": {
            transform: "rotate(-2deg)",
          },
          "40%, 70%": {
            transform: "rotate(2deg)",
          },
          "45%": {
            transform: "rotate(-4deg)",
          },
          "55%": {
            transform: "rotate(4deg)",
          },
        },
        popup: {
          "0%": { transform: "scale(0.8)", opacity: 0.8 },
          "50%": { transform: "scale(1.1)", opacity: 1 },
          "100%": { transform: "scale(1)", opacity: 1 },
        },
        shimmer: {
          "0%": { backgroundPosition: "0 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
      },
      fontFamily: {
        sans: ['Montserrat', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        cmyk: {
          "color-scheme": "light",
          "primary": "oklch(90% 0.076 70.697)",
          "primary-content": "oklch(14.354% 0.026 239.443)",
          "secondary": "oklch(64.476% 0.202 359.339)",
          "secondary-content": "oklch(12.895% 0.04 359.339)",
          "accent": "oklch(75% 0.183 55.934)",
          "accent-content": "oklch(98% 0.003 247.858)",
          "neutral": "oklch(21.778% 0 0)",
          "neutral-content": "oklch(84.355% 0 0)",
          "base-100": "oklch(100% 0 0)",
          "base-200": "oklch(95% 0 0)",
          "base-300": "oklch(90% 0 0)",
          "base-content": "oklch(20% 0 0)",
          "info": "oklch(68.475% 0.094 217.284)",
          "info-content": "oklch(13.695% 0.018 217.284)",
          "success": "oklch(98% 0.003 247.858)",
          "success-content": "oklch(0% 0 0)",
          "warning": "oklch(71.236% 0.159 52.023)",
          "warning-content": "oklch(14.247% 0.031 52.023)",
          "error": "oklch(62.013% 0.208 28.717)",
          "error-content": "oklch(12.402% 0.041 28.717)"
        },
        "cmyk-plus": {
          "color-scheme": "light",
          "primary": "#ff9800",
          "primary-content": "#000",
          "rounded-btn": "9999px",
          "secondary": "oklch(64.476% 0.202 359.339)",
          "secondary-content": "oklch(12.895% 0.04 359.339)",
          "accent": "oklch(75% 0.183 55.934)",
          "accent-content": "oklch(98% 0.003 247.858)",
          "neutral": "oklch(21.778% 0 0)",
          "neutral-content": "oklch(84.355% 0 0)",
          "base-100": "oklch(100% 0 0)",
          "base-200": "oklch(95% 0 0)",
          "base-300": "oklch(90% 0 0)",
          "base-content": "oklch(20% 0 0)",
          "info": "oklch(68.475% 0.094 217.284)",
          "info-content": "oklch(13.695% 0.018 217.284)",
          "success": "oklch(98% 0.003 247.858)",
          "success-content": "oklch(0% 0 0)",
          "warning": "oklch(71.236% 0.159 52.023)",
          "warning-content": "oklch(14.247% 0.031 52.023)",
          "error": "oklch(62.013% 0.208 28.717)",
          "error-content": "oklch(12.402% 0.041 28.717)"
        }
      },
      "light",
      "dark"
    ],
  },
};
