# tailwindcss-px-to-viewport

`tailwindcss-px-to-viewport` 可以通过 Tailwind CSS 的写法将 px 单位的属性转换为 vw 或 vh。

## 安装

使用 npm 安装：

```bash
npm install tailwindcss-px-to-viewport
```

使用示例
在你的 Tailwind CSS 配置文件中添加以下内容:

```javascript
import pxToViewport from 'tailwindcss-px-to-viewport'

module.exports = {
  theme: {
    extend: {
      pxToViewPort: {
        PresetScreen: {
          width: 1920,
          height: 1080,
        },
      },
    },
  },
  plugins: [pxToViewport],
}
```

配置选项
viewportWidth: 设置视口宽度，默认为 1920px。
viewportHeight: 设置视口高度，默认为 1080px。

使用语法


贡献
欢迎贡献代码！请提交 Pull Request 或报告问题。

许可证
该项目采用 MIT 许可证。
