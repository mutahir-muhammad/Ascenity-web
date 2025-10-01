/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        snow: '#fcf7f8',
        oxford: '#0a2239',
        honolulu: '#027bce',
        robin: '#1ccad8',
        emerald: '#00d37d',
        phthalo: '#0f4c81',
      },
      fontFamily: {
        sans: ['Manrope', 'ui-sans-serif', 'system-ui', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'Apple Color Emoji', 'Segoe UI Emoji'],
      },
      boxShadow: {
        soft: '0 10px 30px rgba(2, 123, 206, 0.15)',
        float: '0 12px 40px rgba(10, 34, 57, 0.18)',
        'glow': '0 0 15px rgba(28, 202, 216, 0.6)',
      },
      animation: {
        'spin-slow': 'spin 60s linear infinite',
        'spin-reverse-slow': 'spin 45s linear infinite reverse',
      },
      backgroundImage: {
        'hero-gradient': 'radial-gradient(1200px 600px at 20% 10%, rgba(2,123,206,0.12), transparent 60%), radial-gradient(1000px 500px at 80% 20%, rgba(28,202,216,0.10), transparent 60%), radial-gradient(900px 450px at 50% 100%, rgba(15,76,129,0.08), transparent 60%)',
      }
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
