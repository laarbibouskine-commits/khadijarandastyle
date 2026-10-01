// Checkout links: paste the payment-page URL for each product here.
// While a link is "#", the buy button shows a "coming soon" message.
const CHECKOUT = {
  ebook: "#",
  playbook: "#",
  bundle: "#"
};

document.getElementById("year").textContent = new Date().getFullYear();

// ---------- language ----------
// English text is read from the page itself, so it only lives in index.html.
document.querySelectorAll("[data-i18n]").forEach(el => { I18N.en[el.dataset.i18n] = el.textContent; });
document.querySelectorAll("[data-i18n-html]").forEach(el => { I18N.en[el.dataset.i18nHtml] = el.innerHTML; });
document.querySelectorAll("[data-i18n-ph]").forEach(el => { I18N.en[el.dataset.i18nPh] = el.placeholder; });

function renderPosts(prefix) {
  const box = document.getElementById("homePosts");
  if (!box || typeof BLOG_POSTS === "undefined") return;
  box.innerHTML = BLOG_POSTS.slice(0, 3).map(p =>
    `<a class="pcard" href="${prefix}/blog/${p.slug}"><img src="assets/img/${p.image}" alt="${p.alt[lang] || p.alt.en}" loading="lazy"><h3>${p.title[lang] || p.title.en}</h3></a>`
  ).join("");
}

let lang = "en";
const t = key => (I18N[lang] && I18N[lang][key]) || I18N.en[key] || "";

function setLang(l) {
  if (!I18N[l]) l = "en";
  lang = l;
  const root = document.documentElement;
  root.lang = l;
  root.dir = l === "ar" ? "rtl" : "ltr";
  document.querySelectorAll("[data-i18n]").forEach(el => { el.textContent = t(el.dataset.i18n); });
  document.querySelectorAll("[data-i18n-html]").forEach(el => { el.innerHTML = t(el.dataset.i18nHtml); });
  document.querySelectorAll("[data-i18n-ph]").forEach(el => { el.placeholder = t(el.dataset.i18nPh); });
  document.title = t("title");
  // blog and shop live at /blog, /fr/blog, /ar/blog ...
  const prefix = l === "en" ? "" : "/" + l;
  document.querySelectorAll("[data-path]").forEach(a => { a.href = prefix + a.dataset.path; });
  renderPosts(prefix);
  document.querySelectorAll("[data-lang]").forEach(b => b.setAttribute("aria-pressed", b.dataset.lang === l));
  document.getElementById("signupMsg").textContent = "";
  try { localStorage.setItem("lang", l); } catch (e) {}
}

document.querySelectorAll("[data-lang]").forEach(b => b.addEventListener("click", () => setLang(b.dataset.lang)));

let saved = null;
try { saved = localStorage.getItem("lang"); } catch (e) {}
const browser = (navigator.language || "en").slice(0, 2);
setLang(saved || (I18N[browser] ? browser : "en"));

// ---------- mobile menu ----------
const burger = document.querySelector(".burger");
const menu = document.getElementById("menu");
burger.addEventListener("click", () => {
  const open = menu.classList.toggle("open");
  burger.setAttribute("aria-expanded", open);
});
menu.addEventListener("click", e => {
  if (e.target.tagName === "A") { menu.classList.remove("open"); burger.setAttribute("aria-expanded", false); }
});

// ---------- slideshow ----------
(function () {
  const root = document.getElementById("slider");
  const slides = [...root.querySelectorAll(".slide")];
  const dots = root.querySelector(".slider__dots");
  let i = 0, timer;
  slides.forEach((_, n) => {
    const d = document.createElement("button");
    d.setAttribute("aria-label", "Slide " + (n + 1));
    d.addEventListener("click", () => { go(n); restart(); });
    dots.appendChild(d);
  });
  function go(n) {
    i = (n + slides.length) % slides.length;
    slides.forEach((s, k) => s.classList.toggle("is-on", k === i));
    [...dots.children].forEach((d, k) => d.classList.toggle("is-on", k === i));
  }
  function restart() {
    clearInterval(timer);
    if (!matchMedia("(prefers-reduced-motion: reduce)").matches) timer = setInterval(() => go(i + 1), 4000);
  }
  root.querySelector(".slider__prev").addEventListener("click", () => { go(i - 1); restart(); });
  root.querySelector(".slider__next").addEventListener("click", () => { go(i + 1); restart(); });
  root.addEventListener("mouseenter", () => clearInterval(timer));
  root.addEventListener("mouseleave", restart);
  let x0 = null;
  root.addEventListener("touchstart", e => { x0 = e.touches[0].clientX; }, { passive: true });
  root.addEventListener("touchend", e => {
    if (x0 === null) return;
    const dx = e.changedTouches[0].clientX - x0;
    if (Math.abs(dx) > 40) { go(i + (dx < 0 ? 1 : -1)); restart(); }
    x0 = null;
  });
  go(0); restart();
})();

// ---------- buy buttons ----------
document.querySelectorAll("[data-buy]").forEach(btn => {
  const url = CHECKOUT[btn.dataset.buy];
  if (url && url !== "#") { btn.href = url; return; }
  btn.addEventListener("click", e => {
    e.preventDefault();
    document.getElementById("signupMsg").textContent = t("msg_soon");
    document.getElementById("signup").scrollIntoView({ behavior: "smooth", block: "center" });
  });
});

// ---------- lightbox ----------
const lb = document.getElementById("lb");
const lbImg = lb.querySelector("img");
document.getElementById("gallery").addEventListener("click", e => {
  const img = e.target.closest(".g")?.querySelector("img");
  if (!img) return;
  lbImg.src = img.src; lbImg.alt = img.alt; lb.hidden = false;
});
lb.addEventListener("click", () => { lb.hidden = true; });
document.addEventListener("keydown", e => { if (e.key === "Escape") lb.hidden = true; });

// ---------- signup (not connected to an email service yet) ----------
document.getElementById("signup").addEventListener("submit", e => {
  e.preventDefault();
  const msg = document.getElementById("signupMsg");
  const email = e.target.email.value.trim();
  if (!/^\S+@\S+\.\S+$/.test(email)) { msg.textContent = t("msg_bad"); return; }
  msg.textContent = t("msg_ok");
  e.target.reset();
});
