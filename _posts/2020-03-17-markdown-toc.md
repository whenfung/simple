---
title: 如何给长文章添加目录
---

Jekyll 默认用 kramdown 作为 markdown 渲染器，生成用 `#markdown-toc` 标识的 HTML 目录块。

1. 目录
{:toc}

想要在文章有目录，在文章任意地方插入下方语句即可。

```
1. 目录
{:toc}
```

我们只需要对相应的 ID 进行 CSS 的设置，就能将目录放置在正确的位置，例如文章左侧。

目录中的标题不易过长，不然会很难看，当然我也做了相应的截断修改。接下来是目录展示

## 标题一

这是标题一

## 标题二

这是标题二

## 标题三

这是标题三

[^1]: [kramdown 目录生成语法](https://kramdown.gettalong.org/converter/html.html)