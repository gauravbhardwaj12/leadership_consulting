/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: '#FBFBF9',
        panel: '#FFFFFF',
        subtle: '#F4F4F1',
        obsidian: {
          900: '#0F172A',
          800: '#1E293B',
          700: '#334155',
          600: '#475569',
          500: '#64748B',
        },
        cognac: {
          50: '#FDF8F5',
          100: '#FAF0E8',
          200: '#F3DEC9',
          500: '#B87333',
          600: '#9A5B2D',
          700: '#7E4721',
          800: '#633516',
        },
        hairline: '#E2E8F0',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      maxWidth: {
        '8xl': '88rem',
      },
      letterSpacing: {
        'widest-plus': '0.2em',
      },
    },
  },
  plugins: [],
}
