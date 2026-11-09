/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#0B0507',
          surface: '#140A0E',
          card: '#1A0E13',
          border: '#2E151E',
          text: '#FFFFFF',
          muted: '#CBD5E1',
        },
        light: {
          bg: '#FFFFFF',
          surface: '#FAFAFA',
          card: '#F4F4F5',
          border: '#E4E4E7',
          text: '#09090B',
          muted: '#71717A',
        },
        primary: {
          DEFAULT: '#EF4444', // Crimson Red
          hover: '#DC2626',   // Deep Red
          light: '#F87171',   // Light Red
          dark: '#B91C1C',    // Dark Red
        },
        secondary: {
          DEFAULT: '#F43F5E', // Rose Red
          hover: '#E11D48',   // Deep Rose
          light: '#FB7185',   // Light Rose
          dark: '#BE123C',    // Dark Rose
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite reverse',
        'blob': 'blob 10s infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
        'waving-hand': 'wave 2s infinite',
        'glow-pulse': 'glow 3s ease-in-out infinite',
        'gradient-x': 'gradient-x 6s ease infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        blob: {
          '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -40px) scale(1.08)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.95)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        wave: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '20%, 60%': { transform: 'rotate(14deg)' },
          '40%, 80%': { transform: 'rotate(-10deg)' },
        },
        glow: {
          '0%, 100%': { opacity: '0.6', filter: 'drop-shadow(0 0 15px rgba(239, 68, 68, 0.4))' },
          '50%': { opacity: '1', filter: 'drop-shadow(0 0 30px rgba(239, 68, 68, 0.75))' },
        },
        'gradient-x': {
          '0%, 100%': { 'background-size': '200% 200%', 'background-position': 'left center' },
          '50%': { 'background-size': '200% 200%', 'background-position': 'right center' },
        },
      }
    },
  },
  plugins: [],
}
