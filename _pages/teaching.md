---
layout: page
permalink: /teaching/
title: Teaching
description: My past teaching experiences as the primary instructor and teaching assistant. 
nav: true
nav_order: 1
years: [2022, 2021, 2019]

---

<div class="publications">

{%- for y in page.years %}
  <h2 class="year">{{y}}</h2>
  {% bibliography -f teaching -q @*[year={{y}}]* %}
{% endfor %}

</div>


