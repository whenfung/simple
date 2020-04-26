---
layout: page
title: Home
wallpaper: wallpaper.jpeg
---

这是个针对移动端开发的 Jekyll 主题，纯 CSS 优化，不涉及 JS，支持个人搞定定制化，可以自定义颜色、字号、背景图。

1. Markdown 语法
2. LaTex 数学公式
3. 自定义背景图
4. iframe 视频


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
