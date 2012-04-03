---
layout: default
title: PHP Fog Documentation
---

# Welcome to the PHP Fog Documentation

### Getting Started
<ol class="pages">
	{% for weight in (1..4) %}
	{% for page in site.pages %}
	{% if page.weight == weight %}
	<li><a href="{{ page.url }}">{{ page.title }}</a></li>
	{% endif %}
	{% endfor %}
	{% endfor %}
</ol>

### Customize Your App
<ol class="pages">
	{% for weight in (5..10) %}
	{% for page in site.pages %}
	{% if page.weight == weight %}
	<li><a href="{{ page.url }}">{{ page.title }}</a></li>
	{% endif %}
	{% endfor %}
	{% endfor %}
</ol>

### Best Practices
<ol class="pages">
	{% for weight in (11..13) %}
	{% for page in site.pages %}
	{% if page.weight == weight %}
	<li><a href="{{ page.url }}">{{ page.title }}</a></li>
	{% endif %}
	{% endfor %}
	{% endfor %}
</ol>

### Other
<ol class="pages">
	{% for weight in (14..16) %}
	{% for page in site.pages %}
	{% if page.weight == weight %}
	<li><a href="{{ page.url }}">{{ page.title }}</a></li>
	{% endif %}
	{% endfor %}
	{% endfor %}
</ol>
