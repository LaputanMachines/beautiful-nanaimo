---
layout: default
title: Strong Towns Nanaimo Letters
permalink: /letters
description: "Letters written by the Strong Towns Nanaimo community. If you want to have your letter published on this website, reach out to letters@beautifulnanaimo.ca to get started."
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
            {% if post.type contains 'letter' %}
            {% include article.html %}
            {% endif %}
            {% endfor %}
        </div>
    </div>
</section>  
<!-- End Letters -->
<hr>
