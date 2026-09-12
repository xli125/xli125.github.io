/* Progressive enhancement: the complete bibliography and paper links work without JS. */
(() => {
  "use strict";
  const root = document.documentElement;
  const themeButton = document.querySelector(".theme-toggle");
  const systemTheme = window.matchMedia("(prefers-color-scheme: dark)");
  let preference;
  try {
    preference = localStorage.getItem("theme");
  } catch (_) {
    /* Storage may be unavailable. */
  }
  const applyTheme = (dark) => {
    root.dataset.theme = dark ? "dark" : "light";
    themeButton?.setAttribute("aria-label", `Switch to ${dark ? "light" : "dark"} theme`);
  };
  applyTheme(preference === "dark" || (preference !== "light" && systemTheme.matches));
  if (themeButton) {
    themeButton.hidden = false;
    themeButton.addEventListener("click", () => {
      preference = root.dataset.theme === "dark" ? "light" : "dark";
      applyTheme(preference === "dark");
      try {
        localStorage.setItem("theme", preference);
      } catch (_) {
        /* Keep the in-memory preference. */
      }
    });
  }
  systemTheme.addEventListener("change", () => {
    if (preference !== "dark" && preference !== "light") applyTheme(systemTheme.matches);
  });

  const list = document.getElementById("publication-list");
  if (!list) return;
  const search = document.getElementById("publication-search");
  const yearFilter = document.getElementById("year-filter");
  const yearNav = document.getElementById("year-nav");
  const status = document.getElementById("filter-status");
  const empty = document.getElementById("empty-state");
  const normalize = (value) =>
    value
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();
  const papers = [...list.querySelectorAll(".publication-entry")].map((element) => ({
    element,
    row: element.closest("li"),
    year: element.dataset.year,
    text: normalize(element.querySelector(".entry-main").textContent + " " + element.dataset.year),
  }));
  const groups = [...list.querySelectorAll("h2.bibliography")].map((heading) => {
    const year = heading.textContent.trim();
    heading.id = `year-${year}`;
    heading.tabIndex = -1;
    const link = document.createElement("a");
    link.href = `#year-${year}`;
    link.textContent = year;
    yearNav.append(link);
    const option = document.createElement("option");
    option.value = year;
    option.textContent = year;
    yearFilter.append(option);
    return { heading, year, list: heading.nextElementSibling, link };
  });
  document.getElementById("publication-count").textContent = papers.length;
  document.querySelector(".publication-controls").hidden = false;
  yearNav.hidden = false;
  const applyFilters = () => {
    const terms = normalize(search.value.trim()).split(/\s+/).filter(Boolean);
    const selectedYear = yearFilter.value;
    let visible = 0;
    const visibleYears = new Set();
    for (const paper of papers) {
      const show = (selectedYear === "all" || paper.year === selectedYear) && terms.every((term) => paper.text.includes(term));
      paper.row.hidden = !show;
      if (show) {
        visible++;
        visibleYears.add(paper.year);
      }
    }
    for (const group of groups) {
      const show = visibleYears.has(group.year);
      group.heading.hidden = !show;
      group.list.hidden = !show;
      group.link.hidden = !show;
    }
    empty.hidden = visible !== 0;
    yearNav.hidden = visible === 0;
    status.hidden = !terms.length && selectedYear === "all";
    status.textContent = `Showing ${visible} of ${papers.length} publications${selectedYear !== "all" ? ` from ${selectedYear}` : ""}.`;
  };
  search.addEventListener("input", applyFilters);
  yearFilter.addEventListener("change", applyFilters);
  search.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      search.value = "";
      applyFilters();
    }
  });
  document.getElementById("reset-filters").addEventListener("click", () => {
    search.value = "";
    yearFilter.value = "all";
    applyFilters();
    search.focus();
  });
  // Deep links also work when the year IDs are added after initial navigation.
  const target = location.hash && document.getElementById(location.hash.slice(1));
  if (target) requestAnimationFrame(() => target.scrollIntoView());
})();
