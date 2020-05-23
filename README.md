# simple

这是针对移动端开发的响应式 Jekyll 主题，觉得不错点个 star。

主题特性包括但不限于：

1. 在线编辑、新建、发布文章
2. GitHub 官方语法写作
3. MathJax 支持属性公式渲染
4. mermaid 提供流程图渲染
5. 支持 B 站、YouTube 视频嵌入
6. Gitalk 提供评论支持
8. 原生 JS 实现站内搜索

## 快速搭建

你可以选择直接在 GitHub 上操作，或者在本地上修改主题再发布到自己的仓库里。

### 线上操作

1. fork 本仓库
2. 修改仓库名为 `username.github.io`，创建 `master` 分支并设置为默认分支。
3. 修改 `_config.yml` 文件中的相应个人信息。

浏览器访问 `https://username.github.io` 查看新网站。

### 本地运行

1. 本地安装 Jekyll 
2. clone 主题到本地
3. 进入主题根目录后运行 `jekyll serve`

浏览器中输入 `http://localhost:4000` 预览。

## 网站样式设置

可通过修改 `_sass/_variables.scss` 文件中的 CSS 变量改变主题样式，包括但不限于

1. 通过 `--font` 修改字体
2. 通过 `--body-bg` 修改网页背景的颜色
3. 通过 `--heading-color` 修改标题的颜色
5. 通过 `--link-color` 修改链接的颜色
