# Tailwind CSS px-to-viewport

[![npm version](https://img.shields.io/npm/v/tailwindcss-px-to-viewport)](https://www.npmjs.com/package/tailwindcss-px-to-viewport) [![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

English | [中文](README_CN.md)

Tailwind CSS plugin that automatically converts **px** unit properties to viewport units **vw** or **vh**.

## Installation

Install via npm:

```bash
npm install tailwindcss-px-to-viewport --save-dev
```

## Configuration Guide

Basic configuration example:
Add the plugin to the Tailwind CSS configuration file (tailwind.config.js):

```javascript
// tailwind.config.js
import pxToViewport from 'tailwindcss-px-to-viewport'

export default {
  theme: {
    extend: {
      pxToViewPort: {
        // Base viewport configuration
        PresetScreen: {
          width: 1920, // Default design width (in px)
          height: 1080, // Default design height (in px)
        },
        // Custom extension rules (optional)
        utilities: {
          // Add custom conversion rules here
        }
      },
    },
  },
  plugins: [
    pxToViewport // Enable the plugin
  ],
}
```

## Configuration Parameters

| **Parameter** | **Type** | **Default Value** | **Description**      |
| ------------------- | -------------- | ----------------------- | -------------------------- |
| `viewportWidth`   | number         | 1920                    | Base design width (in px)  |
| `viewportHeight`  | number         | 1080                    | Base design height (in px) |

## Usage Syntax

Using `pw+utility` converts `px` units to `vw`, while using `ph+utility` converts `px` units to `vh`.

## Property Mapping

| **tailwindcss Property** | **Generated CSS Property** | **Conversion Rule**            | **Result**               |
| ------------------------------ | -------------------------------- | ------------------------------------ | ------------------------------ |
| `pw-w-[value]`               | width                            | px → (value/`viewportWidth`)*100  | `width: [*] vw`              |
| `pw-h-[value]`               | height                           | px → (value/`viewportHeight`)*100 | `height: [*] vh`             |
| `pw-min-w-[value]`           | min-width                        | px → (value/`viewportWidth`)*100  | `min-width: [*] vw`          |
| `pw-max-w-[value]`           | max-width                        | px → (value/`viewportWidth`)*100  | `max-width: [*] vw`          |
| `pw-min-h-[value]`           | min-height                       | px → (value/`viewportHeight`)*100 | `min-height: [*] vh`         |
| `pw-max-h-[value]`           | max-height                       | px → (value/`viewportHeight`)*100 | `max-height: [*] vh`         |
| `pw-text-[value]`            | font-size                        | px → (value/`viewportWidth`)*100  | `font-size: [*] vw`          |
| `pw-leading-[value]`         | line-height                      | px → (value/`viewportHeight`)*100 | `line-height: [*] vh`        |
| `pw-indent-[value]`          | text-indent                      | px → (value/`viewportWidth`)*100  | `text-indent: [*] vw`        |
| `pw-top-[value]`             | top                              | px → (value/`viewportHeight`)*100 | `top: [*] vh`                |
| `pw-right-[value]`           | right                            | px → (value/`viewportWidth`)*100  | `right: [*] vw`              |
| `pw-bottom-[value]`          | bottom                           | px → (value/`viewportHeight`)*100 | `bottom: [*] vh`             |
| `pw-left-[value]`            | left                             | px → (value/`viewportWidth`)*100  | `left: [*] vw`               |
| `pw-m-[value]`               | margin                           | px → (value/`viewportWidth`)*100  | `margin: [*] vw/vh`          |
| `pw-mt-[value]`              | margin-top                       | px → (value/`viewportHeight`)*100 | `margin-top: [*] vh`         |
| `pw-mr-[value]`              | margin-right                     | px → (value/`viewportWidth`)*100  | `margin-right: [*] vw`       |
| `pw-mb-[value]`              | margin-bottom                    | px → (value/`viewportHeight`)*100 | `margin-bottom: [*] vh`      |
| `pw-ml-[value]`              | margin-left                      | px → (value/`viewportWidth`)*100  | `margin-left: [*] vw`        |
| `pw-mx-[value]`              | margin-left/right                | px → (value/`viewportWidth`)*100  | `margin-left/right: [*] vw`  |
| `pw-my-[value]`              | margin-top/bottom                | px → (value/`viewportHeight`)*100 | `margin-top/bottom: [*] vh`  |
| `pw-p-[value]`               | padding                          | px → (value/`viewportWidth`)*100  | `padding: [*] vw/vh`         |
| `pw-pt-[value]`              | padding-top                      | px → (value/`viewportHeight`)*100 | `padding-top: [*] vh`        |
| `pw-pr-[value]`              | padding-right                    | px → (value/`viewportWidth`)*100  | `padding-right: [*] vw`      |
| `pw-pb-[value]`              | padding-bottom                   | px → (value/`viewportHeight`)*100 | `padding-bottom: [*] vh`     |
| `pw-pl-[value]`              | padding-left                     | px → (value/`viewportWidth`)*100  | `padding-left: [*] vw`       |
| `pw-px-[value]`              | padding-left/right               | px → (value/`viewportWidth`)*100  | `padding-left/right: [*] vw` |
| `pw-py-[value]`              | padding-top/bottom               | px → (value/`viewportHeight`)*100 | `padding-top/bottom: [*] vh` |

## License

This project is licensed under the MIT License.[MIT License](LICENSE).
