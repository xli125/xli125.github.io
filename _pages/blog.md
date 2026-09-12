---
layout: personal
title: Blog
section: blog
permalink: /blog/
description: Research notes, perspectives, and reflections from Xiaoling Li.
nav: true
nav_order: 3
---

<section class="pub-hero blog-hero" aria-labelledby="blog-title">
  <p class="eyebrow">Blog / Notes & perspectives</p>
  <h1 id="blog-title">Beyond the paper<span>.</span></h1>
  <p class="research-intro">A space for research notes, ideas, and reflections on the process of science.</p>
</section>

{% assign personal_posts = site.posts | where: 'layout', 'personal-post' %}
{% if personal_posts.size > 0 %}

<section aria-label="Blog posts"><ul class="blog-post-list">
  {% for post in personal_posts %}
  <li><article><time datetime="{{ post.date | date: '%Y-%m-%d' }}">{{ post.date | date: '%B %d, %Y' }}</time><h2><a href="{{ post.url | relative_url }}">{{ post.title | escape }}</a></h2>{% if post.description %}<p>{{ post.description | escape }}</p>{% endif %}<a class="text-link" href="{{ post.url | relative_url }}">Read post <span aria-hidden="true">↗</span></a></article></li>
  {% endfor %}
</ul></section>
{% else %}
<section class="blog-empty" aria-labelledby="blog-empty-title">
  <svg viewBox="0 0 80 80" aria-hidden="true"><path d="M20 10h33l9 9v48H20zM53 10v12h9M29 33h24M29 42h24M29 51h17"></path><path d="M12 21v50a4 4 0 0 0 4 4h38"></path></svg>
  <div><p class="eyebrow">No posts yet</p><h2 id="blog-empty-title">More to come.</h2><p>This page will grow with new notes and perspectives. In the meantime, explore the questions behind my research and the studies that have shaped it.</p><a class="text-link" href="{{ '/research/' | relative_url }}">Explore my research <span aria-hidden="true">↗</span></a></div>
</section>
{% endif %}
