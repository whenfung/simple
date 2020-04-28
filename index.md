---
layout: page
title: Home
wallpaper: home.jpeg
---

这是个针对移动端开发的 Jekyll 主题，纯 CSS 样式设计，不涉及 JS，支持个人高度定制化，包括但不限于自定义颜色、字号、背景图。主要功能包括如下

1. 支持 Markdown 语法
2. 支持数学公式渲染，支持 LaTex 语法
3. 支持自定义背景图
4. 支持各大平台 iframe 视频嵌入


{% assign posts_by_year = site.posts | group_by_exp:"post", "post.date | date: '%Y' " %}
{% for group in posts_by_year %}

<h3>{{ group.name }}</h3>
<ul>
  {% for post in group.items %}
    <li>
      <div class="archive-date">{{ post.date | date: "%b %d" }}</div>
      <a href="{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a>
    </li>
  {% endfor %}
</ul>
{% endfor %}
