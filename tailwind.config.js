/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Primary Brand Colors
        oxford: '#0A2239',
        honolulu: '#027BCE',
        robin: '#1CCAD8',
        snow: '#FFFAFA',
        // Extended Palette
        cloud: '#F0FDFA',
        emerald: '#00D37D',
        phthalo: '#0F4C81',
        teal: '#14B8A6',
        'teal-shimmer': '#2DD4BF',
        'teal-depth': '#0F766E',
        'navy-teal': '#0C3B4A',
        'deep-cyan': '#0891B2',
        amber: '#F59E0B',
        ruby: '#EF4444',
      },
      fontFamily: {
        sans: ['Inter', 'Manrope', 'ui-sans-serif', 'system-ui', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'Apple Color Emoji', 'Segoe UI Emoji'],
      },
      boxShadow: {
        soft: '0 10px 30px rgba(2, 123, 206, 0.15)',
        float: '0 12px 40px rgba(10, 34, 57, 0.18)',
        'glow': '0 0 15px rgba(28, 202, 216, 0.6)',
        'glow-lg': '0 0 30px rgba(28, 202, 216, 0.4)',
      },
      animation: {
        'spin-slow': 'spin 60s linear infinite',
        'spin-reverse-slow': 'spin 45s linear infinite reverse',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      backgroundImage: {
        'hero-gradient': 'radial-gradient(1200px 600px at 20% 10%, rgba(2,123,206,0.12), transparent 60%), radial-gradient(1000px 500px at 80% 20%, rgba(28,202,216,0.10), transparent 60%), radial-gradient(900px 450px at 50% 100%, rgba(15,76,129,0.08), transparent 60%)',
        'dark-gradient': 'radial-gradient(ellipse 800px 600px at 85% 15%, rgba(28, 202, 216, 0.15), transparent 60%), radial-gradient(ellipse 600px 400px at 10% 80%, rgba(2, 123, 206, 0.1), transparent 50%)',
      },
      screens: {
        'xs': '375px',
        '3xl': '1920px',
        '4xl': '2560px',
      },
      fontSize: {
        'fluid-xs': 'clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem)',
        'fluid-sm': 'clamp(0.875rem, 0.8rem + 0.35vw, 1rem)',
        'fluid-base': 'clamp(1rem, 0.9rem + 0.5vw, 1.125rem)',
        'fluid-lg': 'clamp(1.125rem, 1rem + 0.625vw, 1.25rem)',
        'fluid-xl': 'clamp(1.25rem, 1.1rem + 0.75vw, 1.5rem)',
        'fluid-2xl': 'clamp(1.5rem, 1.25rem + 1.25vw, 2rem)',
        'fluid-3xl': 'clamp(1.875rem, 1.5rem + 1.875vw, 2.5rem)',
        'fluid-4xl': 'clamp(2.25rem, 1.75rem + 2.5vw, 3.5rem)',
        'fluid-5xl': 'clamp(3rem, 2rem + 5vw, 5rem)',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        'safe': 'env(safe-area-inset-bottom)',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
