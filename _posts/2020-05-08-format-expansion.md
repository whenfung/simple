---
layout: post
title: 拓展功能
---

## HTML 支持

你可以在主题中随意地添加 HTML 语法，包括但不限于视频、音乐等多媒体 `HTML` 插入。

插入 `<video>` 后的效果如下：

<video src="https://cdn-video.xinpianchang.com/5b7fc02a84108.mp4" controls controlsList="nodownload"></video>

### B 站视频嵌入

你可以插入 B 站 的视频

<iframe src="//player.bilibili.com/player.html?bvid=BV1ki4y1b7ge&page=1&high_quality=1&danmaku=0" allowfullscreen> </iframe>

在 B 站视频的 URL 中，有几个参数的含义如下

1. `bvid` 是 B 站每个视频的标识符。
2. `page=1` 表示选集中的第 1 个视频。
3. `high_quality=1` 表示最高画质。
4. `danmaku=0` 表示关闭弹幕。 
5. `allowfullscreen` 表示允许全屏。

### TED 视频嵌入

我特别喜欢 [TED](https://www.ted.com/) 网站的视频分享，可以在国内访问，也可以自定义嵌入，视频的内容也很有深度。样例如下：

<iframe src="https://embed.ted.com/talks/amy_cuddy_your_body_language_may_shape_who_you_are" allowfullscreen>
</iframe>

`allowfullscreen` 表示允许全屏。

### YouTube 视频嵌入

附上 Youtube 视频的嵌入

<iframe src="https://www.youtube.com/embed/-wFsYY71wyk" allowfullscreen></iframe>

其中，`embed` 后面接的是视频的标识符。

## 数学公式支持

主题利用了 [MathJax](https://www.mathjax.org/) 库实现了对数学公式编辑的支持，你可以通过 `LaTex` 语法编辑数学公式。

$$
i\hbar\frac{\partial}{\partial t} \Psi(\mathbf{r},t) = \left [ \frac{-\hbar^2}{2\mu}\nabla^2 + V(\mathbf{r},t)\right ] \Psi(\mathbf{r},t)
$$

## 流程图支持

流程图由 mermaid 提供支持。

<div class="mermaid">
graph LR
    A --- B
    B-->C[fa:fa-ban forbidden]
    B-->D(fa:fa-spinner);
</div>

复杂的流程图

<div class = "mermaid">
gantt
    dateFormat  YYYY-MM-DD
    title Adding GANTT diagram functionality to mermaid

    section A section
    Completed task            :done,    des1, 2014-01-06,2014-01-08
    Active task               :active,  des2, 2014-01-09, 3d
    Future task               :         des3, after des2, 5d
    Future task2               :         des4, after des3, 5d

    section Critical tasks
    Completed task in the critical line :crit, done, 2014-01-06,24h
    Implement parser and jison          :crit, done, after des1, 2d
    Create tests for parser             :crit, active, 3d
    Future task in critical line        :crit, 5d
    Create tests for renderer           :2d
    Add to mermaid                      :1d

    section Documentation
    Describe gantt syntax               :active, a1, after des1, 3d
    Add gantt diagram to demo page      :after a1  , 20h
    Add another diagram to demo page    :doc1, after a1  , 48h

    section Last section
    Describe gantt syntax               :after doc1, 3d
    Add gantt diagram to demo page      : 20h
    Add another diagram to demo page    : 48h
</div>

