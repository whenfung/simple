---
title: 快速开始
---

这是个针对移动端开发的 Jekyll 主题，如果你有以下需求

1. 使用 Markdown 写文章
2. 使用 LaTex 语法编辑公式
3. 使用流程图
4. 在文章中嵌入 B 站、Youtube 视频
5. 在线文章底部可评论
6. 自定义自己的网站风格

那么，你可以选择使用这款主题。效果看 [demo](https://professordeng.com/simple)。

## 快速搭建

你可以选择直接在 github 上操作，或者在本地上修改主题再发布到自己的仓库里。

### 线上操作

1. fork 本仓库
2. 修改仓库名为 `username.github.io`，创建 `master` 分支并设置为默认分支。
3. 修改 `_config.yml` 文件中的相应个人信息。

等 2 分钟生效，浏览器访问 `https://username.github.io` 即可。

## 本地运行

1. 安装 Jekyll 
2. clone 仓库到本地
3. 进入文件夹后运行 `jekyll serve`

浏览器中输入 `http://localhost:4000` 预览。

## 网站样式设置

通过修改 `_sass/_variables.scss` 文件，可以实现该主题的高度定制化，包括但不限于

1. 通过 `$html-font-family` 修改字体。
2. 通过 `$body-bg` 修改网页背景的颜色。
3. 通过 `$heading-color` 修改标题的颜色。
4. 通过 `$blockquote-border-left` 修改引用块左侧边框颜色。
5. 通过 `$link-color` 修改链接的颜色。 

## 待完善功能

1. 搜索功能
