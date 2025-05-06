import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './index.html',
    './src/**/*.{ts,tsx}', // Verifique se todos os arquivos estão sendo monitorados corretamente
  ],
  theme: {
    extend: {
      fontFamily: {
        robotoCondensed: ['"Roboto Condensed"', 'sans-serif'],
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        fadeOut: {
          '0%': { opacity: '1', transform: 'scale(1)' },
          '100%': { opacity: '0', transform: 'scale(0.95)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 300ms ease-out forwards',
        fadeOut: 'fadeOut 300ms ease-in forwards', // Ajuste para o fadeOut ser mais suave
      },
    },
  },
  plugins: [],
};

export default config;
