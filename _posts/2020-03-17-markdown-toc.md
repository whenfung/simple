---
title: 如何给长文章添加目录
---

Jekyll 默认用 kramdown 作为 markdown 渲染器[^1]，生成的列表可以通过谷歌浏览器中查看，用 `#markdown-toc` 标识。

我们只需要对相应的 ID 进行 CSS 的设置，就能将目录放置在正确的位置，例如文章左侧。

目录中的标题不易过长，不然会很难看，当然我也做了相应的截断修改。

[^1]: [kramdown 目录生成语法](https://kramdown.gettalong.org/converter/html.html)