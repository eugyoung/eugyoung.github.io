---
layout: page
permalink: /publications/
title: Publications
description: Journal publications and conference proceedings in reversed chronological order.
years: [2024,2023,2022,2020]
nav: true
nav_order: 0
---
<!-- _pages/publications.md -->
<div class="publications">

{%- for y in page.years %}
  <h2 class="year">{{y}}</h2>
  {% bibliography -f papers -q @*[year={{y}}]* %}
{% endfor %}

</div>