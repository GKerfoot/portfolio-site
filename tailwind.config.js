
export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Sora', 'sans-serif'],
        hero: ['Inter', 'sans-serif'],
        sans: ['"DM Sans"', 'sans-serif'],
      },
      colors: {
        navy: '#0f1b3d',
        accent: '#3b5bdb',
      },
    },
  },
  plugins: [],
}
