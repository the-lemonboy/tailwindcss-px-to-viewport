/** @type {import('tailwindcss').Config} */
import pxToViewport from './src/index.js'

module.exports = {
  content: ['./playground/**/*.{html,js}'],
  theme: {
    extend: {
      pxToViewPort: {
        PresetScreen: {
          height: 1080,
          width: 1920,
        },
      },
    },
  },
  plugins: [pxToViewport()],
}
