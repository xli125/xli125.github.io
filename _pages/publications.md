---
layout: publications
permalink: /publications/
title: Publication
section: publication
description: Publications on genome instability, lineage plasticity, and therapeutic resistance by Xiaoling Li.
nav: true
nav_order: 2
---

<section class="pub-hero" aria-labelledby="page-title">
  <p class="eyebrow">Xiaoling Li / Scientific work</p>
  <div class="hero-heading"><h1 id="page-title">Publications<span>.</span></h1><a class="text-link" href="https://scholar.google.com/citations?user=y-T-GUMAAAAJ&amp;hl=en" target="_blank" rel="noopener noreferrer">Google Scholar <span aria-hidden="true">↗</span></a></div>
  <p class="hero-description">Exploring how cancer evolves, adapts, and resists therapy.</p>
</section>

<section id="featured" class="featured-section" aria-labelledby="featured-title">
  <div class="section-heading"><h2 id="featured-title">Featured publications</h2><a class="text-link small" href="#all-publications">Browse all papers <span aria-hidden="true">↓</span></a></div>
  <div class="featured-grid">
    {% bibliography --query @*[key=li2023_syncrip] --group_by none --template publication-feature %}
    {% bibliography --query @*[key=zhang2020_chd1] --group_by none --template publication-feature %}
    {% bibliography --query @*[key=li2025_lineage_plasticity] --group_by none --template publication-feature %}
  </div>
</section>

<section id="all-publications" class="all-section" aria-labelledby="all-title">
  <div class="section-heading"><h2 id="all-title">All publications <span id="publication-count" class="count"></span></h2><p class="section-note">Newest first</p></div>
  <div class="publication-controls" hidden>
    <label class="search-field"><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="10.5" cy="10.5" r="6.5"></circle><path d="m16 16 4 4"></path></svg><span class="sr-only">Search publications by title, author, or journal</span><input id="publication-search" type="search" placeholder="Search title, author, or journal…" autocomplete="off" aria-controls="publication-list"></label>
    <label class="year-field"><span class="sr-only">Filter publications by year</span><select id="year-filter" aria-controls="publication-list"><option value="all">All years</option></select></label>
  </div>
  <nav id="year-nav" class="year-nav" aria-label="Jump to publication year" hidden></nav>
  <p id="filter-status" class="filter-status" role="status" aria-live="polite" aria-atomic="true" hidden></p>
  <div id="publication-list" class="publication-list">
    {% bibliography --group_by year --group_order descending --template publication-entry %}
  </div>
  <div id="empty-state" class="empty-state" hidden><h3>No matching publications</h3><p>Try a different keyword or year.</p><button id="reset-filters" class="text-button" type="button">Clear filters <span aria-hidden="true">↗</span></button></div>
  <div class="list-bottom"><span>For citation updates, visit <a href="https://scholar.google.com/citations?user=y-T-GUMAAAAJ&amp;hl=en" target="_blank" rel="noopener noreferrer">Google Scholar <span aria-hidden="true">↗</span></a></span><a class="text-link" href="#top">Back to top <span aria-hidden="true">↑</span></a></div>
</section>
