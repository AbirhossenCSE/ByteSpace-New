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
            DEFAULT: '#0B5CFF',
            dark: '#0848CC',
            deep: '#0B132B',
            hero: '#0B52E8',
          },
          lime: {
            DEFAULT: '#C4F800',
            bright: '#D2FF00',
            dark: '#A6DB00',
          },
          dark: '#0F172A',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
