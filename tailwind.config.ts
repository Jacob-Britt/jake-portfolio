import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        fadeInDown: {
          '0%': { opacity: 0, transform: 'translateY(-100%)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        glitch: {
          '0%': { transform: 'translate(0)', opacity: 1 },
          '20%': { transform: 'translate(-2px, 2px)', opacity: 0.8 },
          '40%': { transform: 'translate(2px, -2px)', opacity: 1 },
          '60%': { transform: 'translate(-2px, 2px)', opacity: 0.8 },
          '80%': { transform: 'translate(2px, -2px)', opacity: 1 },
          '100%': { transform: 'translate(0)', opacity: 1 },
        },
      },
      animation: {
        fadeInDown: 'fadeInDown 1s ease-out',
        glitch: 'glitch 1s infinite',
      },
    },
  },
  plugins: [],
};

export default config;
