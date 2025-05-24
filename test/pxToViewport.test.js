import { describe, expect, it, vi } from 'vitest'
import plugin from '../src/index.js'

function mockMatchUtilities(expectedUtilities) {
  const utilities = {}
  const mockFn = vi.fn().mockImplementation((obj) => {
    Object.entries(obj).forEach(([name, fn]) => {
      utilities[name] = fn(expectedUtilities[name] || '100')
    })
  })
  return { matchUtilities: mockFn, utilities }
};

describe('pxToViewport', () => {
  it('should generate correct vw values', () => {
    const options = {
      PresetScreen: { width: 1920 },
      utilities: {
        w: 'width',
        text: ['font-size', 'line-height'],
      },
    }

    const { matchUtilities, utilities } = mockMatchUtilities({
      'pw-w': '100',
      'pw-text': '24',
    })

    plugin.withOptions(() => options)({
      matchUtilities,
      theme: path => (path === 'pxToViewPort.PresetScreen' ? options.PresetScreen : null),
    })

    expect(utilities['pw-w']).toEqual({
      width: '5.208333vw',
    })

    expect(utilities['pw-text']).toEqual({
      'font-size': '1.250000vw',
      'line-height': '1.250000vw',
    })
  })

  it('should prioritize theme configuration', () => {
    const theme = vi.fn()
      .mockImplementationOnce(path =>
        path === 'pxToViewPort.PresetScreen' ? { width: 750 } : null,
      )
      .mockImplementationOnce(path =>
        path === 'pxToViewPort.utilities' ? { spacing: 'margin' } : null,
      )

    const { utilities } = mockMatchUtilities({
      'pw-spacing': '20',
    })

    plugin.withOptions(() => ({}))({
      matchUtilities: mockMatchUtilities().matchUtilities,
      theme,
    })

    expect(utilities['pw-spacing']).toEqual({
      margin: '2.666667vw',
    })
  })

  it('should handle zero values', () => {
    const { utilities } = mockMatchUtilities({
      'pw-w': '0',
    })

    plugin.withOptions(() => ({
      PresetScreen: { width: 1920 },
    }))({
      matchUtilities: mockMatchUtilities().matchUtilities,
      theme: vi.fn(),
    })

    expect(utilities['pw-w']).toEqual({
      width: '0.000000vw',
    })
  })
})
