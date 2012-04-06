---
layout: default
title: PHP Fog Documentation
---

## Welcome to the PHP Fog Documentation

<h6>Getting Started</h6>
<ol class="pages">
	{% for weight in (1..4) %}
	{% for page in site.pages %}
	{% if page.weight == weight %}
	<li><a href="{{ page.url }}">{{ page.title }}</a></li>
	{% endif %}
	{% endfor %}
	{% endfor %}
</ol>

 <h6>Customize Your App</h6>
<ol class="pages">
	{% for weight in (5..10) %}
	{% for page in site.pages %}
	{% if page.weight == weight %}
	<li><a href="{{ page.url }}">{{ page.title }}</a></li>
	{% endif %}
	{% endfor %}
	{% endfor %}
</ol>

 <h6>Best Practices</h6>
<ol class="pages">
	{% for weight in (11..13) %}
	{% for page in site.pages %}
	{% if page.weight == weight %}
	<li><a href="{{ page.url }}">{{ page.title }}</a></li>
	{% endif %}
	{% endfor %}
	{% endfor %}
</ol>

 <h6>Other</h6>
<ol class="pages">
	{% for weight in (14..16) %}
	{% for page in site.pages %}
	{% if page.weight == weight %}
	<li><a href="{{ page.url }}">{{ page.title }}</a></li>
	{% endif %}
	{% endfor %}
	{% endfor %}
</ol>
