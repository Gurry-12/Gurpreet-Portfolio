/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'portfolio-bg': '#000000',
        'portfolio-surface': '#111111',
        'portfolio-accent': '#3b82f6', // Linear blue accent
        'portfolio-border': '#333333',
        'portfolio-text': '#fafafa',
        'portfolio-muted': '#a1a1aa'
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', 'monospace'],
      },
      animation: {
        'aurora': 'aurora 20s linear infinite',
      },
      keyframes: {
        aurora: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '50%': { transform: 'translate(100px, 50px)' },
        }
      }
    },
  },
  plugins: [],
}
