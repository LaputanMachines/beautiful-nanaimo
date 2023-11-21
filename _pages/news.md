---
layout: default
title: Strong Towns Nanaimo News
permalink: /news
description: "Nanaimo's home for urbanist news. Our city is transforming into a vibrant urban node; there's a lot of cool stuff in store for the Harbour City. From bike lanes to transit expansions, and more!"
---

<!-- Begin Letters -->
<section class="articles">
    <div class="container">
        <div class="page-head">
            <h1 class="page__title">{{ page.title | escape }}</h1> 
            <p class="page__description">{{ page.description | escape }}</p>
        </div>
        <div class="row grid">
            {% for post in site.posts %}
            {% if post.type contains 'news' %}
            {% include article.html %}
            {% endif %}
            {% endfor %}
        </div>
    </div>
</section>  
<!-- End Letters -->
<hr>
