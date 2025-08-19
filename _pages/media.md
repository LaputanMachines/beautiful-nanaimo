---
layout: default
title: Strong Towns Nanaimo in the Media & Public Appearances
description: "We meet with the media to talk about housing reform, safe streets, and financial resiliency. If you want to inquire about a media appearance, email press@beautifulnanaimo.ca to get started."
permalink: /media
---

<!-- Begin Media Appearances -->
<section class="articles">
    <div class="container">
        <div class="page-head">
            <h1 class="page__title">{{ page.title | escape }}</h1> 
            <p class="page__description">{{ page.description | escape }}</p>
        </div>
        <div class="row grid">
            {% for appearance in site.data.media_appearances %}
            {% include media_card.html %}
            {% endfor %}
        </div>
    </div>
</section>  
<!-- End Media Appearances -->
<hr>
