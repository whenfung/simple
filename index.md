---
layout: page
title: Home
---

这是个针对移动端开发的 Jekyll 主题，支持个人高度定制化，包括但不限于自定义颜色、字号、背景图。主要功能包括如下：

1. 支持 Markdown 语法
2. 支持数学公式渲染，支持 LaTex 语法
3. 支持每天更新的必应高清壁纸或自定义背景图
4. 支持各大平台 iframe 视频嵌入，包括 B 站、YouTube


{% assign posts_by_year = site.posts | group_by_exp:"post", "post.date | date: '%Y' " %}
{% for group in posts_by_year %}

<h3>{{ group.name }}</h3>
<ul>
  {% for post in group.items %}
    <li>
      <div class="archive-date">{{ post.date | date: "%m-%d" }}</div>
      <a href="{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a>
    </li>
  {% endfor %}
</ul>
{% endfor %}
