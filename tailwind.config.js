/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: {
            DEFAULT: '#2563EB',
            dark: '#1D4ED8',
            deep: '#0F172A',
            hero: '#1E3A8A',
          },
          lime: {
            DEFAULT: '#A3E635',
            bright: '#CCFF00',
            dark: '#65A30D',
          },
          yellow: {
            DEFAULT: '#FACC15',
          },
          slate: {
            50: '#F8FAFC',
            100: '#F1F5F9',
            200: '#E2E8F0',
            600: '#475569',
            900: '#0F172A',
          },
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
