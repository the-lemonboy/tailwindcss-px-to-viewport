import plugin from 'tailwindcss/plugin'
import options from './options'
import utilities from './utilities'

const pxToViewport = plugin.withOptions(() => {
  return function ({ matchUtilities, theme }) {
    const presetScreen = theme('pxToViewPort.PresetScreen') || options.PresetScreen
    const combinedUtilities = Object.assign(utilities, theme('pxToViewPort.utilities')) || {}
    matchUtilities(
      {
        ...Object.fromEntries(
          Object.entries(combinedUtilities).map(([key, value]) => [
            `pw-${key}`,
            (val) => {
              const unit = 'vw'
              const screenWidth = presetScreen.width || options.PresetScreen.width
              if (Array.isArray(value)) {
                const values = Object.fromEntries(value.map(v => [v, `${((Number.parseFloat(val) / screenWidth) * 100).toFixed(2)}${unit}`]))
                return values
              }
              return {
                [value]: `${((Number.parseFloat(val) / screenWidth) * 100).toFixed(6)}${unit}`,
              }
            },
          ]),
        ),
        ...Object.fromEntries(
          Object.entries(combinedUtilities).map(([key, value]) => [
            `ph-${key}`,
            (val) => {
              const unit = 'vh'
              const screenHeight = presetScreen.height || options.PresetScreen.height
              if (Array.isArray(value)) {
                const values = Object.fromEntries(value.map(v => [v, `${((Number.parseFloat(val) / screenHeight) * 100).toFixed(2)}${unit}`]))
                return values
              }
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
