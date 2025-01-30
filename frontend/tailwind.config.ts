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
        background: '#83ccc6',
        primary: '#0288D1',
      },
      backgroundImage: {
        'circle-glow': "url('/backgrounds/bg-circle.png')",
        'blue-gradient': `
          radial-gradient(at 99% 99%, hsla(204, 85%, 50%, 0.13) 0px, transparent 50%),
          radial-gradient(at 4% 7%, hsla(204, 85%, 50%, 0.13) 0px, transparent 50%),
          radial-gradient(at 4% 28%, hsla(204, 85%, 20%, 0.4) 0px, transparent 50%),
          radial-gradient(at 4% 73%, hsla(204, 85%, 20%, 0.4) 0px, transparent 50%),
          radial-gradient(at 4% 49%, hsla(204, 85%, 20%, 0.4) 0px, transparent 50%),
          radial-gradient(at 4% 93%, hsla(204, 85%, 20%, 0.4) 0px, transparent 50%),
          radial-gradient(at 94% 9%, hsla(204, 85%, 20%, 0.4) 0px, transparent 50%),
          radial-gradient(at 4% 8%, hsla(204, 85%, 20%, 0.4) 0px, transparent 50%)
        `,
      },
    },
  },
  plugins: [],
} satisfies Config;
