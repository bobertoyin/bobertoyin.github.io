---
layout: default
title: Cooking
---

# Cooking 🥘

<ul>
  {% for post in site.posts %}
    {% if post.path contains "cooking" %}
      <li class="no-bullet">
        <h2><a href="{{ post.url }}">{{ post.title }}</a></h2>
        <p><i>{{ post.excerpt | strip_html }}</i></p>
      </li>
    {% endif %}
  {% endfor %}
</ul>