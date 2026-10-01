// Generates the multilingual blog, shop, legal pages, sitemap.xml, robots.txt
// and the post list used by the home page.
// Run from the project folder:  node tools/build.js
const fs = require("fs");
const path = require("path");
const posts = require("./posts");
const shop = require("./shop");

const ROOT = path.join(__dirname, "..");
const SITE = "https://khadijarandastyle.com"; // change here if the domain changes
const NAME = "Khadija Randa Style";
const CONTACT = shop.config.CONTACT;
const UPDATED = "October 1, 2026";
const TODAY = "2026-10-01";
const LANGS = ["en", "fr", "ar"];
const PREFIX = { en: "", fr: "/fr", ar: "/ar" };
const LOCALE = { en: "en_US", fr: "fr_FR", ar: "ar_AR" };
const DATELOC = { en: "en-US", fr: "fr-FR", ar: "ar-MA" };

const T = {
  en: {
    nav: ["What is Randa", "Collection", "The Guides", "Blog", "Shop", "Khadija", "FAQ", "Get the Guide"],
    tag: "Preserve tradition. Create beauty.", terms: "Terms of Use", privacy: "Privacy Policy", rights: "All rights reserved.",
    home: "Home", blog: "Blog", shop: "Shop", by: "By Khadija", read: "Read more", keep: "Keep reading",
    blogEyebrow: "The blog", blogH: "Randa, jellabas and Moroccan style", blogSub: "Practical guides to learn the craft and wear the tradition.",
    blogTitle: "Blog: Moroccan Randa Embroidery, Jellabas and Style", blogDesc: "Guides, tips and stories about Moroccan Randa hand embroidery, jellabas and kaftans, from Khadija Randa Style.",
    ctaH: "Ready to learn Randa?", ctaP: "Get the step-by-step ebook and the 30-day playbook, and stitch your first Moroccan trim at home.", ctaBtn: "See the guides",
    shopTitle: "Shop: Randa Guides, Jellabas and Embroidery Tools", shopDesc: "Our Randa ebook and playbook, made-to-order jellabas, and the embroidery tools we recommend.",
    shopEyebrow: "The shop", shopH: "Everything for Randa, in one place", shopSub: "Our guides, our handmade pieces and the tools we trust.",
    guidesH: "Learn with our guides", guidesSub: "Instant digital download (PDF). Prices in USD.", buy: "Buy now", best: "Best value",
    ownH: "Our handmade jellabas", ownSub: "Made to order by Khadija. Each piece is stitched by hand, so no two are exactly alike.", inquire: "Ask about this piece", ownNote: "Ask us about sizes, colours and delivery.",
    toolsH: "Tools we recommend", toolsSub: "Everything you need to start stitching. Prices and availability change, so check the store page.",
    disclosure: "Affiliate disclosure: some links below are affiliate links. If you buy through them we may earn a small commission, at no extra cost to you. We only recommend tools that suit Randa work.",
    assoc: "As an Amazon Associate we earn from qualifying purchases.", onAmazon: "View on Amazon", onTemu: "View on Temu"
  },
  fr: {
    nav: ["Qu'est-ce que la Randa", "Collection", "Les guides", "Blog", "Boutique", "Khadija", "FAQ", "Obtenir le guide"],
    tag: "Préserver la tradition. Créer la beauté.", terms: "Conditions d'utilisation", privacy: "Politique de confidentialité", rights: "Tous droits réservés.",
    home: "Accueil", blog: "Blog", shop: "Boutique", by: "Par Khadija", read: "Lire la suite", keep: "À lire aussi",
    blogEyebrow: "Le blog", blogH: "Randa, djellabas et style marocain", blogSub: "Des guides pratiques pour apprendre l'art de la Randa et porter la tradition.",
    blogTitle: "Blog : broderie marocaine Randa, djellabas et style", blogDesc: "Guides, conseils et histoires sur la broderie à la main Randa, les djellabas et les caftans, par Khadija Randa Style.",
    ctaH: "Prête à apprendre la Randa ?", ctaP: "Procurez-vous l'ebook pas à pas et le playbook de 30 jours, et cousez votre première garniture marocaine chez vous.", ctaBtn: "Voir les guides",
    shopTitle: "Boutique : guides Randa, djellabas et outils de broderie", shopDesc: "Notre ebook et playbook Randa, des djellabas sur mesure et les outils de broderie que nous recommandons.",
    shopEyebrow: "La boutique", shopH: "Tout pour la Randa, au même endroit", shopSub: "Nos guides, nos pièces faites main et les outils en lesquels nous avons confiance.",
    guidesH: "Apprenez avec nos guides", guidesSub: "Téléchargement numérique immédiat (PDF). Prix en USD.", buy: "Acheter", best: "Meilleure offre",
    ownH: "Nos djellabas faites main", ownSub: "Réalisées sur commande par Khadija. Chaque pièce est cousue à la main, aucune n'est identique.", inquire: "Se renseigner sur cette pièce", ownNote: "Demandez-nous les tailles, couleurs et la livraison.",
    toolsH: "Les outils que nous recommandons", toolsSub: "Tout ce qu'il faut pour commencer à coudre. Les prix et la disponibilité varient, vérifiez la page du magasin.",
    disclosure: "Divulgation d'affiliation : certains liens ci-dessous sont des liens d'affiliation. Si vous achetez via ces liens, nous pouvons percevoir une petite commission, sans frais supplémentaires pour vous. Nous ne recommandons que des outils adaptés à la Randa.",
    assoc: "En tant que Partenaire Amazon, nous réalisons un bénéfice sur les achats remplissant les conditions requises.", onAmazon: "Voir sur Amazon", onTemu: "Voir sur Temu"
  },
  ar: {
    nav: ["ما هي الرندة", "المجموعة", "الأدلّة", "المدوّنة", "المتجر", "خديجة", "الأسئلة", "احصلي على الدليل"],
    tag: "حفظ التقاليد. صناعة الجمال.", terms: "شروط الاستخدام", privacy: "سياسة الخصوصية", rights: "جميع الحقوق محفوظة.",
    home: "الرئيسية", blog: "المدوّنة", shop: "المتجر", by: "بقلم خديجة", read: "اقرئي المزيد", keep: "تابعي القراءة",
    blogEyebrow: "المدوّنة", blogH: "الرندة والجلابات والأناقة المغربية", blogSub: "أدلّة عملية لتعلّم الحرفة وارتداء التراث.",
    blogTitle: "المدوّنة: التطريز المغربي بالرندة والجلابات والأناقة", blogDesc: "أدلّة ونصائح وقصص عن التطريز اليدوي المغربي بالرندة والجلابات والقفاطين من خديجة رندا ستايل.",
    ctaH: "هل أنتِ جاهزة لتعلّم الرندة؟", ctaP: "احصلي على الكتاب الإلكتروني خطوة بخطوة والدليل التطبيقي لمدة ٣٠ يومًا، وخيطي أول زخرفة مغربية في بيتكِ.", ctaBtn: "شاهدي الأدلّة",
    shopTitle: "المتجر: أدلّة الرندة والجلابات وأدوات التطريز", shopDesc: "كتابنا الإلكتروني ودليلنا التطبيقي للرندة، وجلابات حسب الطلب، وأدوات التطريز التي ننصح بها.",
    shopEyebrow: "المتجر", shopH: "كل ما تحتاجينه للرندة في مكان واحد", shopSub: "أدلّتنا وقطعنا المصنوعة يدويًا والأدوات التي نثق بها.",
    guidesH: "تعلّمي مع أدلّتنا", guidesSub: "تحميل رقمي فوري (PDF). الأسعار بالدولار الأمريكي.", buy: "اشتري الآن", best: "الأفضل قيمة",
    ownH: "جلاباتنا المصنوعة يدويًا", ownSub: "تُصنع حسب الطلب على يد خديجة. كل قطعة مخيطة يدويًا، ولا تتشابه قطعتان.", inquire: "استفسري عن هذه القطعة", ownNote: "اسأليننا عن المقاسات والألوان والتوصيل.",
    toolsH: "أدوات ننصح بها", toolsSub: "كل ما تحتاجينه لتبدئي الخياطة. الأسعار والتوفر تتغير، لذا راجعي صفحة المتجر.",
    disclosure: "إفصاح عن الروابط التسويقية: بعض الروابط أدناه روابط تابعة. إذا اشتريتِ عبرها فقد نحصل على عمولة صغيرة دون أي تكلفة إضافية عليكِ. ننصح فقط بأدوات تناسب عمل الرندة.",
    assoc: "بصفتنا شريكًا في Amazon، نكسب من المشتريات المؤهلة.", onAmazon: "عرض على Amazon", onTemu: "عرض على Temu"
  }
};

const esc = s => s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");
const fmtDate = (d, lang) => new Date(d + "T00:00:00Z").toLocaleDateString(DATELOC[lang], { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" });
const write = (rel, content) => {
  const f = path.join(ROOT, rel);
  fs.mkdirSync(path.dirname(f), { recursive: true });
  fs.writeFileSync(f, content);
};
const fileFor = urlPath => urlPath.slice(1) + ".html";
const dirIndex = urlPath => urlPath.slice(1) + "/index.html";
const markLogo = `<img class="brand__mark" src="/assets/img/logo-mark.jpg" alt="" width="63" height="42">`;

function header(lang, alts) {
  const n = T[lang].nav;
  const sw = alts
    ? `<div class="lang" role="group" aria-label="Language">${LANGS.map(l =>
        `<a href="${alts[l]}" hreflang="${l}" lang="${l}" aria-current="${l === lang}">${l === "ar" ? "عربي" : l.toUpperCase()}</a>`).join("")}</div>`
    : "";
  return `
<header class="nav" id="top">
  <div class="wrap nav__in">
    <a href="/" class="brand" aria-label="${NAME}">
      ${markLogo}
      <span class="brand__name">Khadija Randa <small>Style</small></span>
    </a>
    <nav class="nav__links" id="menu">
      <a href="/#randa">${n[0]}</a>
      <a href="/#collection">${n[1]}</a>
      <a href="/#guides">${n[2]}</a>
      <a href="${PREFIX[lang]}/blog">${n[3]}</a>
      <a href="${PREFIX[lang]}/shop">${n[4]}</a>
      <a href="/#khadija">${n[5]}</a>
      <a href="/#faq">${n[6]}</a>
    </nav>
    ${sw}
    <a href="/#guides" class="btn btn--gold nav__cta">${n[7]}</a>
    <button class="burger" aria-label="Menu" aria-expanded="false" aria-controls="menu"><span></span><span></span></button>
  </div>
</header>`;
}

function footer(lang) {
  const t = T[lang];
  const n = t.nav;
  return `
<footer class="foot">
  <div class="wrap foot__in">
    <div>
      <a href="/" class="brand brand--light">${markLogo}<span class="brand__name">Khadija Randa <small>Style</small></span></a>
      <p>${t.tag}</p>
    </div>
    <div class="foot__links">
      <a href="/#randa">${n[0]}</a>
      <a href="/#guides">${n[2]}</a>
      <a href="${PREFIX[lang]}/blog">${n[3]}</a>
      <a href="${PREFIX[lang]}/shop">${n[4]}</a>
      <a href="/#faq">${n[6]}</a>
    </div>
    <div class="foot__legal">
      <a href="/terms-of-use">${t.terms}</a>
      <a href="/privacy-policy">${t.privacy}</a>
    </div>
    <p class="foot__copy">&copy; ${new Date().getFullYear()} ${NAME}. ${t.rights}</p>
  </div>
</footer>`;
}

// alts: {en,fr,ar} -> url paths of the same page in each language (null for English-only pages)
function page({ lang = "en", urlPath, alts = null, title, description, body, image = "assets/img/ebook-cover.jpg", type = "website", jsonld = [], localized = false }) {
  const url = SITE + urlPath;
  const img = SITE + "/" + image;
  const dir = lang === "ar" ? "rtl" : "ltr";
  const hreflang = alts
    ? LANGS.map(l => `  <link rel="alternate" hreflang="${l}" href="${SITE}${alts[l]}">`).join("\n") + `\n  <link rel="alternate" hreflang="x-default" href="${SITE}${alts.en}">`
    : "";
  const cairo = lang === "ar" ? "family=Cairo:wght@400;500;600;700&" : "";
  return `<!doctype html>
<html lang="${lang}" dir="${dir}">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${esc(title)}</title>
  <meta name="description" content="${esc(description)}">
  <link rel="canonical" href="${url}">
${hreflang}
  <meta name="robots" content="index,follow,max-image-preview:large">
  <meta property="og:type" content="${type}">
  <meta property="og:site_name" content="${NAME}">
  <meta property="og:locale" content="${LOCALE[lang]}">
  <meta property="og:title" content="${esc(title)}">
  <meta property="og:description" content="${esc(description)}">
  <meta property="og:url" content="${url}">
  <meta property="og:image" content="${img}">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="theme-color" content="#42251e">
  <link rel="icon" href="/favicon-64.png" type="image/png">
  <link rel="apple-touch-icon" href="/apple-touch-icon.png">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?${cairo}family=Montserrat:wght@400;500;600&family=Playfair+Display:ital,wght@0,500;0,600;0,700;1,500&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="/styles.css">
${jsonld.map(j => `  <script type="application/ld+json">${JSON.stringify(j)}</script>`).join("\n")}
</head>
<body${localized ? " data-setlang" : ""}>
${header(lang, alts)}
<main>
${body}
</main>
${footer(lang)}
<script src="/page.js"></script>
</body>
</html>
`;
}

const crumbs = items => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map(([name, p], i) => ({ "@type": "ListItem", position: i + 1, name, item: SITE + p }))
});
const altsFor = suffix => Object.fromEntries(LANGS.map(l => [l, PREFIX[l] + suffix]));
const fix = (html, lang) => html.replace(/\{\{p\}\}/g, PREFIX[lang]);

// ---------- blog ----------
let count = 0;
LANGS.forEach(lang => {
  const t = T[lang];
  const p0 = PREFIX[lang];

  posts.forEach(p => {
    const c = p[lang];
    const urlPath = `${p0}/blog/${p.slug}`;
    const related = posts.filter(o => o.slug !== p.slug).slice(0, 3).map(o => `
      <a class="pcard" href="${p0}/blog/${o.slug}">
        <img src="/assets/img/${o.image}" alt="${esc(o[lang].alt)}" loading="lazy">
        <h3>${esc(o[lang].title)}</h3>
      </a>`).join("");
    write(fileFor(urlPath), page({
      lang, urlPath, alts: altsFor("/blog/" + p.slug), localized: true,
      title: `${c.title} | ${NAME}`, description: c.description, image: "assets/img/" + p.image, type: "article",
      jsonld: [
        {
          "@context": "https://schema.org", "@type": "BlogPosting", headline: c.title, description: c.description,
          image: SITE + "/assets/img/" + p.image, datePublished: p.date, dateModified: p.date, inLanguage: lang,
          author: { "@type": "Person", name: "Khadija" }, publisher: { "@type": "Organization", name: NAME, url: SITE },
          mainEntityOfPage: SITE + urlPath
        },
        crumbs([[t.home, "/"], [t.blog, p0 + "/blog"], [c.title, urlPath]])
      ],
      body: `
<article class="article">
  <div class="wrap wrap--narrow">
    <nav class="crumbs" aria-label="Breadcrumb"><a href="/">${t.home}</a> / <a href="${p0}/blog">${t.blog}</a></nav>
    <h1>${esc(c.title)}</h1>
    <p class="meta">${t.by} &middot; <time datetime="${p.date}">${fmtDate(p.date, lang)}</time></p>
    <img class="article__img" src="/assets/img/${p.image}" alt="${esc(c.alt)}" width="1100" height="1467">
    <div class="prose">${fix(c.body, lang)}</div>
    <aside class="postcta">
      <h2>${t.ctaH}</h2>
      <p>${t.ctaP}</p>
      <a href="/#guides" class="btn btn--gold">${t.ctaBtn}</a>
    </aside>
  </div>
  <div class="wrap related">
    <h2>${t.keep}</h2>
    <div class="pgrid">${related}</div>
  </div>
</article>`
    }));
    count++;
  });

  const idx = `${p0}/blog`;
  write(dirIndex(idx), page({
    lang, urlPath: idx, alts: altsFor("/blog"), localized: true,
    title: `${t.blogTitle} | ${NAME}`, description: t.blogDesc,
    jsonld: [
      { "@context": "https://schema.org", "@type": "Blog", name: `${NAME} ${t.blog}`, url: SITE + idx, inLanguage: lang,
        blogPost: posts.map(p => ({ "@type": "BlogPosting", headline: p[lang].title, url: `${SITE}${p0}/blog/${p.slug}`, datePublished: p.date })) },
      crumbs([[t.home, "/"], [t.blog, idx]])
    ],
    body: `
<section class="sec">
  <div class="wrap">
    <div class="head">
      <p class="eyebrow">${t.blogEyebrow}</p>
      <h1 class="h2like">${t.blogH}</h1>
      <p class="sub">${t.blogSub}</p>
    </div>
    <div class="pgrid pgrid--big">
${posts.map(p => `      <a class="pcard" href="${p0}/blog/${p.slug}">
        <img src="/assets/img/${p.image}" alt="${esc(p[lang].alt)}" loading="lazy">
        <time datetime="${p.date}">${fmtDate(p.date, lang)}</time>
        <h2>${esc(p[lang].title)}</h2>
        <p>${esc(p[lang].description)}</p>
        <span class="more">${t.read} &rarr;</span>
      </a>`).join("\n")}
    </div>
  </div>
</section>`
  }));
});

// ---------- shop ----------
const { config } = shop;
const amazonUrl = tool => tool.amazon || `https://${config.AMAZON_DOMAIN}/s?k=${encodeURIComponent(tool.q)}${config.AMAZON_TAG ? "&tag=" + encodeURIComponent(config.AMAZON_TAG) : ""}`;
const REL = 'rel="sponsored nofollow noopener" target="_blank"';

LANGS.forEach(lang => {
  const t = T[lang];
  const urlPath = PREFIX[lang] + "/shop";
  const digitalHtml = shop.digital.map(d => `
        <article class="card${d.best ? " card--best" : ""}">
          ${d.best ? `<span class="badge">${t.best}</span>` : ""}
          <h3>${esc(d[lang][0])}</h3>
          <p class="price">${d.price}</p>
          <p class="card__desc">${esc(d[lang][1])}</p>
          <a href="/#guides" class="btn ${d.best ? "btn--gold" : "btn--ghost"}">${t.buy}</a>
        </article>`).join("");
  const ownHtml = shop.own.map(o => `
        <article class="pcard pcard--static">
          <img src="/assets/img/${o.image}" alt="${esc(o[lang][0])}" loading="lazy">
          <h3>${esc(o[lang][0])}</h3>
          <p>${esc(o[lang][1])}</p>
          <a class="btn btn--ghost btn--sm" href="mailto:${CONTACT}?subject=${encodeURIComponent(o.en[0])}">${t.inquire}</a>
        </article>`).join("");
  const toolsHtml = shop.tools.map(x => `
        <article class="tool">
          <div class="tool__icon" aria-hidden="true">${x.icon}</div>
          <h3>${esc(x[lang][0])}</h3>
          <p>${esc(x[lang][1])}</p>
          <div class="tool__btns">
            <a class="btn btn--ghost btn--sm" href="${esc(amazonUrl(x))}" ${REL}>${t.onAmazon}</a>
            ${x.temu ? `<a class="btn btn--ghost btn--sm" href="${esc(x.temu)}" ${REL}>${t.onTemu}</a>` : ""}
          </div>
        </article>`).join("");

  write(dirIndex(urlPath), page({
    lang, urlPath, alts: altsFor("/shop"), localized: true,
    title: `${t.shopTitle} | ${NAME}`, description: t.shopDesc,
    jsonld: [
      { "@context": "https://schema.org", "@type": "CollectionPage", name: t.shopTitle, url: SITE + urlPath, inLanguage: lang },
      crumbs([[t.home, "/"], [t.shop, urlPath]])
    ],
    body: `
<section class="sec">
  <div class="wrap">
    <div class="head">
      <p class="eyebrow">${t.shopEyebrow}</p>
      <h1 class="h2like">${t.shopH}</h1>
      <p class="sub">${t.shopSub}</p>
    </div>

    <h2 class="shop__h">${t.guidesH}</h2>
    <p class="shop__sub">${t.guidesSub}</p>
    <div class="cards">${digitalHtml}
    </div>

    <h2 class="shop__h">${t.ownH}</h2>
    <p class="shop__sub">${t.ownSub} ${t.ownNote}</p>
    <div class="pgrid pgrid--shop">${ownHtml}
    </div>

    <h2 class="shop__h">${t.toolsH}</h2>
    <p class="shop__sub">${t.toolsSub}</p>
    <p class="disclosure">${t.disclosure}${config.AMAZON_TAG ? " " + t.assoc : ""}</p>
    <div class="tools">${toolsHtml}
    </div>
  </div>
</section>`
  }));
});

// ---------- legal pages (English) ----------
const legal = (urlPath, title, description, html) => write(fileFor(urlPath), page({
  lang: "en", urlPath, title: `${title} | ${NAME}`, description,
  jsonld: [crumbs([["Home", "/"], [title, urlPath]])],
  body: `
<section class="sec">
  <div class="wrap wrap--narrow">
    <h1 class="h2like">${title}</h1>
    <p class="meta">Last updated: ${UPDATED}</p>
    <div class="prose legal">${html}</div>
  </div>
</section>`
}));

legal("/terms-of-use", "Terms of Use", "The terms that apply when you use the Khadija Randa Style website and buy our digital guides.", `
<p>Welcome to ${NAME} ("we", "us", "our"). By using this website or buying our products you agree to these Terms. If you do not agree, please do not use the site.</p>

<h2>1. Our products</h2>
<p>We sell digital educational products, such as the ebook and the playbook about Moroccan Randa embroidery. They are delivered as downloadable files (for example PDF) after payment. We also make jellabas to order. Details, sizes, colours, prices and delivery for made-to-order pieces are agreed with you by email before any payment.</p>

<h2>2. Licence for digital products</h2>
<p>When you buy a digital product, we grant you a personal, non-exclusive, non-transferable licence to read, print and use it for your own learning. You may not copy, resell, share, publish, upload or distribute the files or their content, in whole or in part, without our written permission. You may sell items you make yourself using the techniques you learn.</p>

<h2>3. Payment</h2>
<p>Prices are shown in US dollars unless stated otherwise. Payments are handled by a third-party payment provider. We do not see or store your full card details. Taxes such as VAT or sales tax may be added at checkout where required.</p>

<h2>4. Delivery</h2>
<p>You receive a download link by email right after payment for digital products. Please check your spam folder, and contact us if you have not received it within 24 hours.</p>

<h2>5. Refunds and right of withdrawal</h2>
<p>If a digital guide is not right for you, contact us within 14 days of purchase and we will refund you. If you live in the European Union or the United Kingdom, you agree that delivery of digital content starts immediately after purchase, and you acknowledge that you may lose your statutory right of withdrawal once the download begins. This does not affect our voluntary 14-day refund promise above or any rights you cannot waive by law. Return terms for made-to-order garments are agreed before purchase.</p>

<h2>6. Intellectual property</h2>
<p>All text, images, logos, designs and patterns on this site and in our products belong to ${NAME} or its licensors and are protected by copyright and trademark law. The name and logo may not be used without our permission.</p>

<h2>7. Acceptable use</h2>
<p>You agree not to misuse the site, attempt to gain unauthorised access, interfere with its operation, or use it for unlawful purposes.</p>

<h2>8. Educational content and results</h2>
<p>Our guides are for education and inspiration. Results depend on your effort, materials and practice. We do not guarantee any particular outcome. Craft work involves needles and sharp tools, so please use them carefully and keep them away from children.</p>

<h2>9. Affiliate links and third-party products</h2>
<p>Our shop and blog recommend tools sold by other companies, such as Amazon and Temu. Some of these links are affiliate links: if you buy through them we may earn a commission at no extra cost to you. We do not sell these products, we do not control the retailers' prices, stock, shipping or returns, and any purchase is a contract between you and that retailer under its own terms.</p>

<h2>10. Disclaimer and limitation of liability</h2>
<p>The site and products are provided "as is" without warranties of any kind, to the extent permitted by law. To the maximum extent permitted by law, we are not liable for indirect or consequential losses, and our total liability for any claim is limited to the amount you paid us for the product concerned.</p>

<h2>11. Third-party links</h2>
<p>Our site may link to other websites. We are not responsible for their content or practices.</p>

<h2>12. Languages</h2>
<p>The site is available in English, French and Arabic. These Terms are provided in English. If a translation is ever added and differs, the English version prevails.</p>

<h2>13. Changes</h2>
<p>We may update these Terms from time to time. The date at the top shows the latest version. Continuing to use the site after a change means you accept the new Terms.</p>

<h2>14. Governing law</h2>
<p>These Terms are governed by the laws of Morocco, without affecting any mandatory consumer protection rights you have in your country of residence.</p>

<h2>15. Contact</h2>
<p>Questions about these Terms? Write to us at <a href="mailto:${CONTACT}">${CONTACT}</a>.</p>
`);

legal("/privacy-policy", "Privacy Policy", "How Khadija Randa Style collects, uses and protects your personal data, and the rights you have over it.", `
<p>This Privacy Policy explains how ${NAME} ("we", "us") handles your personal data when you visit our website, join our email list or buy our products. We aim to collect as little data as possible.</p>

<h2>1. Who is responsible</h2>
<p>${NAME} is the data controller. You can reach us at <a href="mailto:${CONTACT}">${CONTACT}</a>.</p>

<h2>2. What we collect</h2>
<ul>
  <li><strong>Email address</strong> if you sign up for our list or request a free pattern.</li>
  <li><strong>Order information</strong> (name, email, billing country, products bought) when you purchase. Card details are processed by our payment provider and never stored by us.</li>
  <li><strong>Messages</strong> you send us by email, including questions about made-to-order pieces.</li>
  <li><strong>Technical data</strong> such as IP address, browser type and pages visited, collected by our hosting provider and by analytics tools if we enable them.</li>
  <li><strong>Language preference</strong> saved in your browser (local storage) so the site shows in the language you chose. It is not sent to us.</li>
</ul>

<h2>3. How we use your data</h2>
<ul>
  <li>To deliver the products you buy and provide support.</li>
  <li>To send you the free pattern and, if you agreed, news and offers. You can unsubscribe at any time.</li>
  <li>To keep the website secure and working, and to understand how it is used.</li>
  <li>To meet legal and tax obligations.</li>
</ul>

<h2>4. Legal bases (EU and UK visitors)</h2>
<p>We rely on your <strong>consent</strong> for marketing emails, <strong>contract</strong> for delivering what you buy, <strong>legitimate interests</strong> for security and basic site analytics, and <strong>legal obligation</strong> for accounting records.</p>

<h2>5. Who we share data with</h2>
<p>We share data only with service providers who help us run the business, under appropriate agreements. These may include the website host (Vercel), payment and checkout providers, an email service provider, and analytics tools. We do not sell your personal data.</p>

<h2>6. Affiliate links</h2>
<p>Some links in our shop and blog lead to retailers such as Amazon or Temu and may contain a tracking code that tells the retailer you came from our site, so that we can earn a commission. When you click such a link you leave our site, and the retailer's own privacy policy and cookies apply. We do not receive your purchase details or personal data from these retailers, only aggregated commission reports.</p>

<h2>7. Third-party content</h2>
<p>Our pages load fonts from Google Fonts. When your browser requests them, Google may receive your IP address. Payment providers may set their own cookies on their checkout pages.</p>

<h2>8. Cookies</h2>
<p>This site does not use advertising cookies. If we add analytics or marketing tools that need cookies, we will ask for your consent where the law requires it and update this policy.</p>

<h2>9. International transfers</h2>
<p>Our providers may process data in countries outside your own, including the United States. Where required, we use safeguards such as standard contractual clauses.</p>

<h2>10. How long we keep data</h2>
<p>We keep email list data until you unsubscribe, order records for as long as the law requires for accounting, and support emails for as long as needed to help you.</p>

<h2>11. Your rights</h2>
<p>Depending on where you live (for example under the GDPR, UK GDPR or California law), you may have the right to access, correct, delete or export your data, to object to or restrict certain processing, to withdraw consent at any time, and to complain to your local data protection authority. California residents may also ask us not to sell or share their data, and we do not sell it. To use your rights, email <a href="mailto:${CONTACT}">${CONTACT}</a>.</p>

<h2>12. Children</h2>
<p>Our website is not directed to children under 16, and we do not knowingly collect their data. If you believe a child has given us data, contact us and we will delete it.</p>

<h2>13. Security</h2>
<p>We use reasonable technical and organisational measures to protect your data, but no online service can be completely secure.</p>

<h2>14. Changes to this policy</h2>
<p>We may update this policy. The date at the top shows the latest version.</p>

<h2>15. Contact</h2>
<p>Questions? Email <a href="mailto:${CONTACT}">${CONTACT}</a>.</p>
`);

// ---------- sitemap + robots ----------
const entry = (suffix, pr, legalOnly) => {
  if (legalOnly) return `  <url><loc>${SITE}${suffix}</loc><lastmod>${TODAY}</lastmod><priority>${pr}</priority></url>`;
  const alt = LANGS.map(l => `<xhtml:link rel="alternate" hreflang="${l}" href="${SITE}${PREFIX[l]}${suffix}"/>`).join("") +
    `<xhtml:link rel="alternate" hreflang="x-default" href="${SITE}${suffix}"/>`;
  return LANGS.map(l => `  <url><loc>${SITE}${PREFIX[l]}${suffix}</loc><lastmod>${TODAY}</lastmod><priority>${pr}</priority>${alt}</url>`).join("\n");
};
write("sitemap.xml", `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
  <url><loc>${SITE}/</loc><lastmod>${TODAY}</lastmod><priority>1.0</priority></url>
${entry("/blog", "0.8")}
${entry("/shop", "0.8")}
${posts.map(p => entry("/blog/" + p.slug, "0.7")).join("\n")}
${entry("/terms-of-use", "0.2", true)}
${entry("/privacy-policy", "0.2", true)}
</urlset>
`);
write("robots.txt", `User-agent: *\nAllow: /\n\nSitemap: ${SITE}/sitemap.xml\n`);

// ---------- data for the home page ----------
const blogData = posts.map(p => ({
  slug: p.slug, image: p.image,
  title: Object.fromEntries(LANGS.map(l => [l, p[l].title])),
  alt: Object.fromEntries(LANGS.map(l => [l, p[l].alt]))
}));
write("blog-data.js", `// Generated by tools/build.js. Do not edit by hand.\nconst BLOG_POSTS = ${JSON.stringify(blogData, null, 2)};\n`);

// Refresh the static English cards inside index.html (between the markers).
const idxFile = path.join(ROOT, "index.html");
let home = fs.readFileSync(idxFile, "utf8");
const cards = posts.slice(0, 3).map(p => `        <a class="pcard" href="/blog/${p.slug}"><img src="assets/img/${p.image}" alt="${esc(p.en.alt)}" loading="lazy"><h3>${esc(p.en.title)}</h3></a>`).join("\n");
home = home.replace(/<!--POSTS-->[\s\S]*?<!--\/POSTS-->/, `<!--POSTS-->\n${cards}\n        <!--/POSTS-->`);
fs.writeFileSync(idxFile, home);

console.log(`Built ${count} blog posts (${LANGS.length} languages), blog indexes, shop pages, 2 legal pages, sitemap, robots, blog-data.js.`);
