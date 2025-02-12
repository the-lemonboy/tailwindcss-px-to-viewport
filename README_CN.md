# Tailwind CSS px-to-viewport

[![npm version](https://img.shields.io/npm/v/tailwindcss-px-to-viewport)](https://www.npmjs.com/package/tailwindcss-px-to-viewport) [![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

[English](README.md) | 中文

Tailwind CSS 插件，支持将 **px** 单位属性自动转换为视口单位 **vw** 或 **vh。**

## Installation

通过npm安装

```bash
npm install tailwindcss-px-to-viewport --save-dev
```

## 配置指南

基础配置示例
在 Tailwind CSS 配置文件（tailwind.config.js）中添加插件：

```javascript
// tailwind.config.js
import pxToViewport from 'tailwindcss-px-to-viewport'

export default {
  theme: {
    extend: {
      pxToViewPort: {
        // 基准视口配置
        PresetScreen: {
          width: 1920, // 默认设计稿宽度（单位：px）
          height: 1080, // 默认设计稿高度（单位：px）
        },
        // 自定义扩展规则（可选）
        utilities: {
          // 在此添加自定义转换规则
        }
      },
    },
  },
  plugins: [
    pxToViewport // 启用插件
  ],
}
```

## 配置参数说明

| **参数**     | **类型** | **默认值** | **描述**            |
| ------------------ | -------------- | ---------------- | ------------------------- |
| `viewportWidth`  | number         | 1920             | 设计稿基准宽度（px 单位） |
| `viewportHeight` | number         | 1080             | 设计稿基准高度（px 单位） |

## 使用语法

使用 `pw+utility` 可以将 `px` 单位转换为 `vw`，而使用 `ph+utility` 则可以将 `px` 单位转换为 `vh`。

## 属性映射

| **tailwindcss 属性** | **生成的 CSS 属性** | **转换规则**                   | **结果**                 |
| -------------------------- | ------------------------- | ------------------------------------ | ------------------------------ |
| `pw-w-[value]`           | width                     | px → (value/`viewportWidth`)*100  | `width: [*] vw`              |
| `pw-h-[value]`           | height                    | px → (value/`viewportHeight`)*100 | `height: [*] vh`             |
| `pw-min-w-[value]`       | min-width                 | px → (value/`viewportWidth`)*100  | `min-width: [*] vw`          |
| `pw-max-w-[value]`       | max-width                 | px → (value/`viewportWidth`)*100  | `max-width: [*] vw`          |
| `pw-min-h-[value]`       | min-height                | px → (value/`viewportHeight`)*100 | `min-height: [*] vh`         |
| `pw-max-h-[value]`       | max-height                | px → (value/`viewportHeight`)*100 | `max-height: [*] vh`         |
| `pw-text-[value]`        | font-size                 | px → (value/`viewportWidth`)*100  | `font-size: [*] vw`          |
| `pw-leading-[value]`     | line-height               | px → (value/`viewportHeight`)*100 | `line-height: [*] vh`        |
| `pw-indent-[value]`      | text-indent               | px → (value/`viewportWidth`)*100  | `text-indent: [*] vw`        |
| `pw-top-[value]`         | top                       | px → (value/`viewportHeight`)*100 | `top: [*] vh`                |
| `pw-right-[value]`       | right                     | px → (value/`viewportWidth`)*100  | `right: [*] vw`              |
| `pw-bottom-[value]`      | bottom                    | px → (value/`viewportHeight`)*100 | `bottom: [*] vh`             |
| `pw-left-[value]`        | left                      | px → (value/`viewportWidth`)*100  | `left: [*] vw`               |
| `pw-m-[value]`           | margin                    | px → (value/`viewportWidth`)*100  | `margin: [*] vw/vh`          |
| `pw-mt-[value]`          | margin-top                | px → (value/`viewportHeight`)*100 | `margin-top: [*] vh`         |
| `pw-mr-[value]`          | margin-right              | px → (value/`viewportWidth`)*100  | `margin-right: [*] vw`       |
| `pw-mb-[value]`          | margin-bottom             | px → (value/`viewportHeight`)*100 | `margin-bottom: [*] vh`      |
| `pw-ml-[value]`          | margin-left               | px → (value/`viewportWidth`)*100  | `margin-left: [*] vw`        |
| `pw-mx-[value]`          | margin-left/right         | px → (value/`viewportWidth`)*100  | `margin-left/right: [*] vw`  |
| `pw-my-[value]`          | margin-top/bottom         | px → (value/`viewportHeight`)*100 | `margin-top/bottom: [*] vh`  |
| `pw-p-[value]`           | padding                   | px → (value/`viewportWidth`)*100  | `padding: [*] vw/vh`         |
| `pw-pt-[value]`          | padding-top               | px → (value/`viewportHeight`)*100 | `padding-top: [*] vh`        |
| `pw-pr-[value]`          | padding-right             | px → (value/`viewportWidth`)*100  | `padding-right: [*] vw`      |
| `pw-pb-[value]`          | padding-bottom            | px → (value/`viewportHeight`)*100 | `padding-bottom: [*] vh`     |
| `pw-pl-[value]`          | padding-left              | px → (value/`viewportWidth`)*100  | `padding-left: [*] vw`       |
| `pw-px-[value]`          | padding-left/right        | px → (value/`viewportWidth`)*100  | `padding-left/right: [*] vw` |
| `pw-py-[value]`          | padding-top/bottom        | px → (value/`viewportHeight`)*100 | `padding-top/bottom: [*] vh` |

## 许可

本项目使用 [MIT License](LICENSE).
