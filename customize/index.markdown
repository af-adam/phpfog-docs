---
layout: default
title: Customize Your App
---

<ol>
<li> <a href="http://www.phpfog.com/addons">Add-ons</a></li>
{% for current in site.categories.customize %}
<li> <a href="{{ current.url }}">{{ current.title }}</a></li>
{% endfor %}
</ol>
