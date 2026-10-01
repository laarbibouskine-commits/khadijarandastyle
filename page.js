// Shared script for blog, shop and legal pages: mobile menu, and remember the page language.
try { if (document.body.hasAttribute("data-setlang")) localStorage.setItem("lang", document.documentElement.lang); } catch (e) {}
const burger = document.querySelector(".burger");
const menu = document.getElementById("menu");
burger.addEventListener("click", () => {
  const open = menu.classList.toggle("open");
  burger.setAttribute("aria-expanded", open);
});
menu.addEventListener("click", e => {
  if (e.target.tagName === "A") { menu.classList.remove("open"); burger.setAttribute("aria-expanded", false); }
});
