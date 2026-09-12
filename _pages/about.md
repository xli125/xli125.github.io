---
layout: personal
title: Home
section: home
permalink: /
description: Xiaoling Li is a cancer biologist at Yale School of Medicine studying genome instability, cell-state plasticity, and therapeutic resistance.
---

<section class="home-hero" aria-labelledby="home-title">
  <div class="home-intro">
    <p class="eyebrow">Cancer biology · Cancer evolution</p>
    <h1 id="home-title">Understanding how<br class="desktop-break"> cancer acquires the<br class="desktop-break"> capacity to evolve<span>.</span></h1>
    <p class="home-lead">I study how <strong>genome instability</strong> and <strong>dynamic genome architecture</strong> shape cell identity and therapeutic resistance, with the goal of finding new ways to constrain cancer evolution.</p>
    <p class="home-role"><strong>Associate Research Scientist</strong><br>Department of Urology · Yale School of Medicine</p>
    <div class="hero-actions"><a class="primary-action" href="{{ '/research/' | relative_url }}">Explore my research <span aria-hidden="true">↗</span></a><a class="text-link" href="mailto:xiaoling.li@yale.edu">Get in touch <span aria-hidden="true">↗</span></a></div>
  </div>
  <figure class="home-portrait"><img src="{{ '/assets/img/prof_pic.jpg' | relative_url }}" width="1258" height="1586" alt="Portrait of Xiaoling Li" fetchpriority="high"><figcaption><strong>Xiaoling Li, Ph.D.</strong><span>New Haven, Connecticut</span></figcaption></figure>
</section>

<section class="site-section home-about" aria-labelledby="about-title">
  <div><p class="eyebrow">About my work</p><h2 id="about-title">An evolutionary perspective on cancer.</h2></div>
  <div class="about-columns"><div><p>My research asks how changes in genome sequence, structure, and chromatin organization alter the cellular states that tumors can access under therapeutic pressure. Using advanced prostate cancer as a primary experimental system, I connect mechanisms of genomic diversification to lineage plasticity and treatment resistance.</p><a class="text-link" href="{{ '/research/' | relative_url }}">Research questions <span aria-hidden="true">↗</span></a></div><div><p>I received my Ph.D. in Cell Biology from Zhejiang University and completed postdoctoral training at UT Southwestern Medical Center. I am now an Associate Research Scientist at Yale School of Medicine, working toward an independent research program in cancer evolution.</p><a class="text-link" href="{{ '/assets/pdf/cv2.pdf' | relative_url }}" target="_blank" rel="noopener noreferrer">Curriculum vitae <span aria-hidden="true">↗</span></a></div></div>
</section>

<section class="site-section home-featured" aria-labelledby="home-publications-title">
  <div class="section-heading"><h2 id="home-publications-title">Selected publications</h2><a class="text-link small" href="{{ '/publications/' | relative_url }}">All publications <span aria-hidden="true">↗</span></a></div>
  <div class="featured-grid">
    {% bibliography --query @*[key=li2023_syncrip] --group_by none --template publication-feature %}
    {% bibliography --query @*[key=zhang2020_chd1] --group_by none --template publication-feature %}
    {% bibliography --query @*[key=li2025_lineage_plasticity] --group_by none --template publication-feature %}
  </div>
</section>
