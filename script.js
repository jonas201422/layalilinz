const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    const isExpanded = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-expanded", String(!isExpanded));
    navLinks.classList.toggle("nav-open");
  });

  /*
    Schließe das mobile Menü, wenn ein Navigationslink geklickt wird. Dies
    verbessert die Benutzerführung auf kleineren Geräten.
  */
  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("nav-open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}