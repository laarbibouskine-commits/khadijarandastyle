// Motion (the engine behind Framer Motion): scroll reveals, staggered entrances, spring hovers.
// Loaded after script.js. If Motion fails to load or the visitor prefers reduced motion, the page stays as is.
(() => {
  const M = window.Motion;
  if (!M || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const { animate, inView, hover } = M;
  const ease = [0.22, 1, 0.36, 1];
  document.documentElement.classList.add("fx");

  // hero: text column then slider, on load
  const hero = [...document.querySelectorAll(".hero__in > *")];
  hero.forEach((el, i) => {
    el.style.opacity = 0;
    animate(el, { opacity: [0, 1], y: [32, 0] }, { duration: 0.9, delay: 0.15 + i * 0.18, ease });
  });
  const nav = document.querySelector(".nav");
  if (nav) animate(nav, { opacity: [0, 1], y: [-16, 0] }, { duration: 0.6, ease });

  // everything below the hero: fade + rise when scrolled into view, siblings staggered
  const targets = document.querySelectorAll(
    ".sec .head, .split__img, .split__text, .g, .checks > *, .steps > *, .price, .card, .pcard, .shopband, .cta .wrap > *, #faq details"
  );
  const seen = new Map();
  targets.forEach(el => {
    const i = seen.get(el.parentElement) || 0;
    seen.set(el.parentElement, i + 1);
    el.style.opacity = 0;
    inView(el, () => {
      animate(el, { opacity: [0, 1], y: [28, 0] }, { duration: 0.8, delay: Math.min(i, 4) * 0.09, ease });
    }, { amount: 0.15 });
  });

  // spring hover on buttons and cards
  const spring = { type: "spring", stiffness: 320, damping: 22 };
  hover(".btn", el => {
    animate(el, { y: -2, scale: 1.03 }, spring);
    return () => animate(el, { y: 0, scale: 1 }, spring);
  });
  hover(".pcard, .card", el => {
    animate(el, { y: -5 }, spring);
    return () => animate(el, { y: 0 }, spring);
  });
})();
