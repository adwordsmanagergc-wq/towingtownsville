import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0B1B2B',
          900: '#07111c',
          800: '#0B1B2B',
          700: '#13283d',
        },
        hivis: {
          DEFAULT: '#F26B1F',
          600: '#d65a13',
          500: '#F26B1F',
          400: '#ff8a47',
        },
        slate: {
          50: '#F4F7FA',
          100: '#E7ECF1',
          200: '#CFD8E0',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-manrope)', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        prose: '70ch',
      },
      boxShadow: {
        card: '0 1px 2px rgba(11,27,43,0.06), 0 8px 24px rgba(11,27,43,0.08)',
      },
    },
  },
  plugins: [],
};

export default config;
