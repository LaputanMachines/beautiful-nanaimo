---
layout: default
title: Our Contributors
permalink: /authors
---

<!-- begin authors -->
<section class="authors">

  <div class="authors__head">
    <h1 class="authors__title">{{ page.title }}</h1>
  </div>

  <div class="authors__inner animate">
    <div class="container">
      <div class="row">
        {% for author in site.authors %}
        {% assign post_count = site.posts | where:"author", author.username %}
        <div class="col col-4 col-d-6 col-t-12">
          <div class="authors__info">
            <a class="authors__image" href="{{ author.url }}"><img class="lazy" data-src="{{ author.image }}" alt="{{ author.name }}"></a>
            <h2 class="authors__name"><a class="authors__link" href="{{ author.url }}">{{ author.name }}</a></h2>
            {% if post_count.size >= 1 %}
              <div class="authors__posts__count">Written {{ post_count.size }} {% if post_count.size < 2 %}Post{% else %}Posts{% endif %}</div>
            {% endif %}
            <p class="authors__description">{{ author.raw_description }}</p>
          </div>
        </div>
        {% endfor %}
      </div>
    </div>
  </div>

</section>
<!-- end authors -->