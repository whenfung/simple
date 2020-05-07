---
layout: page
title: Home
---

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
