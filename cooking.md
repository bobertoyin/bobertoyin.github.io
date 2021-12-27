---
layout: default
---

# Cooking 🥘

> ***THIS SECTION IS INCOMPLETE***  🚧

<ul>
  {% for post in site.posts %}
    {% if post.path contains "cooking" %}
      <li>
        <h2><a href="{{ post.url }}">{{ post.title }}</a></h2>
        {{ post.excerpt }}
      </li>
    {% endif %}
  {% endfor %}
</ul>