// Shop data. Edit this file, then run `node tools/build.js`.

const config = {
  // Amazon Associates tracking ID, e.g. "khadijarandastyle-20". Leave "" until you have one.
  // Amazon IDs are per country: use the store where your Associates account is approved.
  AMAZON_TAG: "",
  AMAZON_DOMAIN: "www.amazon.com",
  // Contact email used by the "Ask about this piece" buttons.
  CONTACT: "hello@khadijarandastyle.com"
};

// Our own digital products (checkout links are set on the home page in script.js).
const digital = [
  { id: "ebook", price: "$19", en: ["The Ebook", "Moroccan Randa Tutorial: tools, stitches and your first full pattern."], fr: ["L'Ebook", "Moroccan Randa Tutorial : outils, points et votre premier motif complet."], ar: ["الكتاب الإلكتروني", "Moroccan Randa Tutorial: الأدوات والغرز وأول نموذج كامل لكِ."] },
  { id: "bundle", price: "$39", best: true, en: ["Ebook + Playbook", "The complete method with the 30-day practice plan."], fr: ["Ebook + Playbook", "La méthode complète avec le plan d'entraînement de 30 jours."], ar: ["الكتاب + الدليل التطبيقي", "الطريقة الكاملة مع خطة التمرين لمدة ٣٠ يومًا."] },
  { id: "playbook", price: "$29", en: ["The Playbook", "30 days of short exercises, printable patterns and a progress checklist."], fr: ["Le Playbook", "30 jours de courts exercices, motifs imprimables et liste de suivi."], ar: ["الدليل التطبيقي", "٣٠ يومًا من التمارين القصيرة ونماذج قابلة للطباعة وقائمة متابعة."] }
];

// Our own made-to-order pieces. No prices shown: customers ask by email.
const own = [
  { image: "jellaba-01.jpg", en: ["Beige jellaba with embroidered panel", "Soft beige with a tone-on-tone Randa panel and a green tassel."], fr: ["Djellaba beige à plastron brodé", "Beige doux avec plastron Randa ton sur ton et pompon vert."], ar: ["جلابة بيج بصدر مطرّز", "بيج هادئ مع صدر رندة بنفس اللون وشرّابة خضراء."] },
  { image: "jellaba-04.jpg", en: ["Mustard hooded jellaba", "Warm mustard with a rich gold Randa front panel."], fr: ["Djellaba moutarde à capuche", "Moutarde chaleureux avec plastron Randa doré."], ar: ["جلابة خردلية بقبّعة", "خردلي دافئ مع صدر رندة ذهبي فاخر."] },
  { image: "jellaba-06.jpg", en: ["Golden striped jellaba", "Fine golden stripes finished with hand-stitched trim."], fr: ["Djellaba dorée à rayures", "Fines rayures dorées finies par une garniture cousue main."], ar: ["جلابة ذهبية مخطّطة", "خطوط ذهبية رفيعة بزخرفة مخيطة يدويًا."] },
  { image: "jellaba-13.jpg", en: ["Burgundy jellaba with white Randa", "Deep burgundy with a delicate white zigzag along the hood."], fr: ["Djellaba bordeaux à Randa blanche", "Bordeaux profond avec un fin zigzag blanc sur la capuche."], ar: ["جلابة بورديو برندة بيضاء", "بورديو غامق مع خط متعرّج أبيض رقيق على القبّعة."] },
  { image: "jellaba-12.jpg", en: ["Camel jellaba with mustard panel", "Classic camel tone with a mustard Randa front."], fr: ["Djellaba camel à plastron moutarde", "Teinte camel classique avec devant Randa moutarde."], ar: ["جلابة كاميل بصدر خردلي", "لون كاميل كلاسيكي مع مقدّمة رندة خردلية."] },
  { image: "jellaba-10.jpg", en: ["Hooded beige jellaba, fine Randa", "Light beige with fine Randa edging on hood and front."], fr: ["Djellaba beige à capuche, Randa fine", "Beige clair avec fine bordure Randa sur la capuche et le devant."], ar: ["جلابة بيج بقبّعة ورندة رقيقة", "بيج فاتح مع حاشية رندة رقيقة على القبّعة والمقدّمة."] }
];

// Tools we recommend. Each has an Amazon search (tagged with AMAZON_TAG when set).
// Add a direct link in `amazon` or `temu` to override. Temu buttons only show when `temu` is filled in.
const tools = [
  { icon: "🧷", q: "embroidery needles assorted", amazon: "", temu: "", en: ["Embroidery needles, assorted", "A mixed pack so you can find the size that suits your thread."], fr: ["Aiguilles à broder assorties", "Un assortiment pour trouver la taille adaptée à votre fil."], ar: ["إبر تطريز متنوعة", "علبة بمقاسات مختلفة لتجدي المقاس المناسب لخيطكِ."] },
  { icon: "🧵", q: "embroidery thread floss set", amazon: "", temu: "", en: ["Embroidery thread set", "Smooth, strong thread in a small range of colours."], fr: ["Assortiment de fils à broder", "Fil lisse et solide dans une petite gamme de couleurs."], ar: ["مجموعة خيوط تطريز", "خيط ناعم وقوي بمجموعة ألوان صغيرة."] },
  { icon: "⭕", q: "bamboo embroidery hoop", amazon: "", temu: "", en: ["Embroidery hoop", "Keeps practice fabric steady and flat while you stitch."], fr: ["Tambour à broder", "Maintient le tissu d'entraînement stable et tendu."], ar: ["إطار تطريز", "يثبّت قماش التمرين مسطّحًا أثناء الخياطة."] },
  { icon: "✂️", q: "embroidery scissors small sharp", amazon: "", temu: "", en: ["Small sharp scissors", "For clean thread ends and neat finishing."], fr: ["Petits ciseaux affûtés", "Pour des fins de fil nettes et une belle finition."], ar: ["مقصّ صغير حاد", "لقطع الخيوط بنظافة وتشطيب مرتب."] },
  { icon: "🖊️", q: "water soluble fabric marker", amazon: "", temu: "", en: ["Washable fabric markers", "Draw guide lines that wipe or rinse away."], fr: ["Marqueurs pour tissu lavables", "Tracez des repères qui s'effacent ou se rincent."], ar: ["أقلام قماش قابلة للغسل", "ارسمي خطوط إرشاد تُمحى أو تُشطف."] },
  { icon: "💡", q: "daylight lamp magnifier craft", amazon: "", temu: "", en: ["Daylight craft lamp", "Good light makes fine stitching easier on your eyes."], fr: ["Lampe lumière du jour", "Une bonne lumière facilite la couture fine pour vos yeux."], ar: ["مصباح ضوء نهار للحرف", "الإضاءة الجيدة تجعل الخياطة الدقيقة أسهل على عينيكِ."] },
  { icon: "🧶", q: "cotton fabric squares quilting", amazon: "", temu: "", en: ["Cotton practice fabric", "Medium-weight cotton squares for your first samples."], fr: ["Tissu coton d'entraînement", "Carrés de coton de poids moyen pour vos premiers essais."], ar: ["قماش قطني للتمرين", "مربعات قطن متوسطة الوزن لعيّناتكِ الأولى."] },
  { icon: "🧰", q: "beginner sewing kit", amazon: "", temu: "", en: ["Beginner sewing kit", "Needles, thimble, tape measure and more in one box."], fr: ["Kit de couture débutante", "Aiguilles, dé, mètre ruban et plus dans une seule boîte."], ar: ["طقم خياطة للمبتدئات", "إبر وكشتبان وشريط قياس وأكثر في علبة واحدة."] }
];

module.exports = { config, digital, own, tools };
