import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/features/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#B2DFDB', // Bleu plus foncé pour un meilleur contraste
        grey: '#78909C', // Gris plus marqué
        primary: '#0288D1', // Bleu océan profond
        secondary: '#81D4FA', // Bleu plus clair pour des éléments secondaires
        accent: '#FFFFFF', // Blanc pour équilibrer avec le bleu
      },
      backgroundImage: {
        'ocean-wave': `
          radial-gradient(at 50% 20%, rgba(2, 136, 209, 0.4) 0px, transparent 50%),
          radial-gradient(at 80% 70%, rgba(129, 212, 250, 0.4) 0px, transparent 50%),
          radial-gradient(at 20% 80%, rgba(178, 223, 219, 0.4) 0px, transparent 50%)
        `,
      },
    },
  },
  plugins: [],
} satisfies Config;
