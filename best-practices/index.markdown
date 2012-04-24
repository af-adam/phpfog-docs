---
layout: default
title: Best Practices
---

<ol>
{% for current in site.categories.best-practices %}
<li><a href="{{ current.url }}">{{ current.title }}</a><br /><p>{{ current.description }}</p></li>
{% endfor %}
</ol>
