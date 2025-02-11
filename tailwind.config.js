/** @type {import('tailwindcss').Config} */
import plugin from './src/index.js'

module.exports = {
  content: ['./playground/**/*.{html,js}'],
  theme: {
    extend: {
      pxToViewPort: {
        PresetScreen: {
          height: 1920,
          width: 1080,
          toUnit: 'vh',
        },
        utils: {
          fontSize: 'fontSize',
          h: 'height',
          w: 'width',
          m: 'margin',
          p: 'padding',
          t: 'top',
          r: 'right',
          b: 'bottom',
          l: 'left',
          size: 'size',
        },
      },
    },
  },
  plugins: [plugin],
}
