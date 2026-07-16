
const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");

menuToggle?.addEventListener("click", () => {
  const open = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!open));
  mainNav?.classList.toggle("open");
  document.body.classList.toggle("menu-open");
});

mainNav?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    menuToggle?.setAttribute("aria-expanded", "false");
    mainNav.classList.remove("open");
    document.body.classList.remove("menu-open");
  });
});

document.querySelectorAll("[data-current-year]").forEach((element) => {
  element.textContent = new Date().getFullYear();
});

document.querySelector("[data-print-page]")?.addEventListener("click", () => {
  window.print();
});
