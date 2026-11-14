// Sets the theme before anything is drawn: the visitor's choice (saved by
// ThemeToggle), else their system's, followed live until they choose. Rendered
// in the <head> of every root layout, which therefore suppress the hydration
// warning about the data-theme it adds to <html>. The colours are in
// src/app/theme.css.
const script = `(function () {
  var root = document.documentElement;
  var media = matchMedia("(prefers-color-scheme: dark)");
  function stored() {
    try {
      return localStorage.getItem("theme");
    } catch (e) {
      return null;
    }
  }
  function apply() {
    var theme = stored();
    root.dataset.theme = theme === "light" || theme === "dark" ? theme : media.matches ? "dark" : "light";
  }
  apply();
  media.addEventListener("change", function () {
    if (!stored()) apply();
  });
})();`;

export function ThemeScript() {
  return <script dangerouslySetInnerHTML={{ __html: script }} />;
}
