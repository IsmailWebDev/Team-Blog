import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/images/hero-img.jpg')",
        'hero-pattern-m': "url('/images/hero-img-m.jpg')",
      },
      width: {
        input: 'calc(100% + 16px)',
      },

      colors: {
        softBlue: '#5468E7',
        softViolet: '#C897E4',
        darkBlue: '#232340',
        desaturatedBlue: '#7676B2',
        offWhite: '#F5F5F5',
        lightOrange: '#FFBA79',
      },
    },
  },
  plugins: [require('daisyui')],
};
export default config;
