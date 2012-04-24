---
layout: default
title: Customize Your App
---

<ol>
<li> <a href="http://www.phpfog.com/addons">Add-ons</a><br /><p>Make your apps even more powerful with add-ons. Add features, functionality, and services instantly with one click.</p></li>
{% for current in site.categories.customize %}
<li> <a href="{{ current.url }}">{{ current.title }}</a><br /><p>{{ current.description }}</p></li>
{% endfor %}
</ol>
