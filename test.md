---
title: 测试
---

{% assign pages_by_tag = site.pages | group_by_exp: "page", "page.dir" %}

{% for group in pages_by_tag %}

{% unless group.name == '/' or group.name == '/assets/css/' %}
<h3>{{ group.name }}</h3>
<ul>
  {% for page in group.items %}
    <li> <a href="{{ page.url | relative_url }}">{{ page.title }}</a></li>
  {% endfor %}
</ul>
{% endunless %}
{% endfor %}

