---
layout: default
title: Customize Your App
---

{% for current in site.categories.customize %}
<h3><a href="{{ current.url }}">{{ forloop.index }}. {{ current.title }}</a></h3>
<p>{{ current.description }}</p>
{% endfor %}
