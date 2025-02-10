const plugin = require('tailwindcss/plugin')

const pxToViewport = plugin.withOptions(function ({ matchUtilities, theme }) {
    // 获取 pxToViewPort 的配置信息
    const presetScreen = theme("pxToViewPort.PresetScreen") || {};
    const utils = theme("pxToViewPort.utils") || {};
    matchUtilities(
        {
            ...Object.fromEntries(
                Object.entries(utils).map(([key, value]) => [
                    `pw-${key}`,
                    (val) => {
                        // pw-
                        // ph-
                        const unit = 'vw';
                        const screenWidth = presetScreen.width || 1080;
                        return {
                            [value]: `${((parseFloat(val) / screenWidth) * 100).toFixed(2)}${unit}`,
                        };
                    },
                ])
            ),
            ...Object.fromEntries(
                Object.entries(utils).map(([key, value]) => [
                    `ph-${key}`,
                    (val) => {
                        // pw-
                        // ph-
                        const unit = 'vh';
                        const screenWidth = presetScreen.width || 1080;
                        return {
                            [value]: `${((parseFloat(val) / screenWidth) * 100).toFixed(2)}${unit}`,
                        };
                    },
                ])
            )
        })

    module.exports = pxToViewport