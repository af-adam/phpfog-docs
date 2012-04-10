---
layout: default
title: Customize Your App
---

<ol>
{% for current in site.categories.customize %}
<li> <a href="{{ current.url }}">{{ current.title }}</a></li>
{% endfor %}
</ol>
