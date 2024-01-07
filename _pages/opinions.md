---
layout: default
title: Strong Towns Nanaimo Op-Eds
permalink: /opinions
description: "Opinion letters written by the Strong Towns Nanaimo community. If you want to have your letter published on this website, reach out to opinions@beautifulnanaimo.ca to get started. Note that the opinions expressed in letters are not completely representative of Strong Towns Nanaimo as a whole."
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
            {% if post.type contains 'opinion' %}
            {% include article.html %}
            {% endif %}
            {% endfor %}
        </div>
    </div>
</section>  
<!-- End Letters -->
<hr>
