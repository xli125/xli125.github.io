module.exports = {
  content: ["_site/**/*.html", "_site/**/*.js"],
  // These small stylesheets include browser/JS state selectors (dark theme,
  // open details, hidden filters) that static content scanning cannot infer.
  css: ["_site/assets/css/!(publications|personal).css"],
  output: "_site/assets/css/",
  skippedContentGlobs: ["_site/assets/**/*.html"],
};
