// tailwind.config.js
import { type Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        background: '#0e0e0e',
        textPrimary: '#f5f5f5',
        card: '#1a1a1a',
        accent: '#a78bfa', 
        accentHover: '#c084fc', 
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
    },
  },
  plugins: [],
}
export default config
