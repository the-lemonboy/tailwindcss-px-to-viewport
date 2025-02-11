import plugin from 'tailwindcss/plugin'
import options from './options'
import utilities from './utilities'

const pxToViewport = plugin.withOptions(() => {
  return function ({ matchUtilities, theme }) {
    const presetScreen = theme('pxToViewPort.PresetScreen') || options.PresetScreen
    const utils = Object.assign(utilities, theme('pxToViewPort.utils')) || {}
    matchUtilities(
      {
        ...Object.fromEntries(
          Object.entries(utils).map(([key, value]) => [
            `pw-${key}`,
            (val) => {
              const unit = 'vw'
              const screenWidth = presetScreen.width || options.PresetScreen.width
              return {
                [value]: `${((Number.parseFloat(val) / screenWidth) * 100).toFixed(2)}${unit}`,
              }
            },
          ]),
        ),
        ...Object.fromEntries(
          Object.entries(utils).map(([key, value]) => [
            `ph-${key}`,
            (val) => {
              const unit = 'vh'
              const screenHeight = presetScreen.height || options.PresetScreen.height
              return {
                [value]: `${((Number.parseFloat(val) / screenHeight) * 100).toFixed(2)}${unit}`,
              }
            },
          ]),
        ),
      },
    )
  }
})

export default pxToViewport
