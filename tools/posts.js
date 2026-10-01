// Blog posts in English, French and Arabic.
// To add a post: add an object here, then run `node tools/build.js`.
// Use {{p}} inside links to blog pages so they stay in the reader's language:
//   <a href="{{p}}/blog/some-slug">...</a>
// The same slug is used for all three languages.
module.exports = [
  {
    slug: "what-is-randa-moroccan-hand-embroidery",
    date: "2026-10-01",
    image: "jellaba-02.jpg",
    en: {
      title: "What Is Randa? The Moroccan Hand-Stitched Trim on Jellabas Explained",
      description: "Randa is the hand-stitched decorative edging found on Moroccan jellabas and kaftans. Learn what it is, how it looks and why it is still made by hand.",
      alt: "Randa trim and tassel on a beige Moroccan jellaba",
      body: `
<p>If you have ever admired a Moroccan jellaba with a delicate line of stitching running down the front, around the hood and along the sleeves, you have seen <strong>Randa</strong>. It is one of the quiet details that turns a simple garment into something special.</p>

<h2>Randa in simple words</h2>
<p>Randa is a decorative edging made by hand-stitching thread along the seams and borders of a garment. It is usually worked in zigzags, waves, small arrows or repeating knots. On a jellaba you will find it on the front opening, the hood, the cuffs and the pockets.</p>
<p>Unlike a printed pattern or a machine border, Randa is built stitch by stitch. That is why two pieces are never exactly alike, and why a well-stitched Randa is such a mark of quality.</p>

<h2>Where you can see it</h2>
<ul>
  <li><strong>Jellabas</strong> for women, men and children, mostly along the front and hood.</li>
  <li><strong>Kaftans</strong>, where it often outlines the neckline and sleeves.</li>
  <li><strong>Home items</strong> such as cushions, table runners and scarves.</li>
</ul>

<h2>The materials</h2>
<p>Randa is stitched with a fine needle and a strong, smooth thread. Many makers choose a thread colour that contrasts with the fabric, such as cream or gold on a deep burgundy, or a tone-on-tone shade for a subtle look. The fabric matters too. Medium-weight cloth holds the stitches well and keeps the line crisp.</p>

<h2>Why it is still done by hand</h2>
<p>Hand stitching gives the line a softness and a slight irregularity that machines do not copy. It also lets the maker adapt the pattern to the curve of a hood or the angle of a sleeve. For many families the skill is passed down at home, which is part of what makes it a living tradition.</p>

<h2>Can a beginner learn it?</h2>
<p>Yes. Randa is built from a handful of basic movements repeated with care. Most beginners can stitch a clean practice sample within a week of short sessions. The key is to start with simple patterns, use the right tools and focus on even tension.</p>
<p>That is exactly what the <a href="/#guides">Khadija Randa Style ebook and playbook</a> are designed to teach, step by step.</p>
`
    },
    fr: {
      title: "Qu'est-ce que la Randa ? La passementerie marocaine cousue main sur les djellabas",
      description: "La Randa est la garniture décorative cousue à la main sur les djellabas et caftans marocains. Découvrez ce que c'est, son aspect et pourquoi elle reste faite à la main.",
      alt: "Garniture Randa et pompon sur une djellaba marocaine beige",
      body: `
<p>Si vous avez déjà admiré une djellaba marocaine avec une fine ligne de couture qui descend le long du devant, autour de la capuche et des manches, vous avez vu de la <strong>Randa</strong>. C'est l'un de ces détails discrets qui transforment un vêtement simple en pièce d'exception.</p>

<h2>La Randa en quelques mots</h2>
<p>La Randa est une bordure décorative réalisée en cousant du fil à la main le long des coutures et des bords d'un vêtement. On la voit souvent en zigzags, en vagues, en petites flèches ou en nœuds répétés. Sur une djellaba, elle orne l'ouverture du devant, la capuche, les poignets et les poches.</p>
<p>Contrairement à un motif imprimé ou à une bordure faite à la machine, la Randa se construit point après point. C'est pourquoi deux pièces ne sont jamais identiques, et pourquoi une Randa bien cousue est un signe de qualité.</p>

<h2>Où la voir</h2>
<ul>
  <li><strong>Les djellabas</strong> pour femmes, hommes et enfants, surtout sur le devant et la capuche.</li>
  <li><strong>Les caftans</strong>, où elle souligne souvent l'encolure et les manches.</li>
  <li><strong>La maison</strong> : coussins, chemins de table et foulards.</li>
</ul>

<h2>Les matériaux</h2>
<p>La Randa se coud avec une aiguille fine et un fil solide et lisse. Beaucoup d'artisanes choisissent un fil qui contraste avec le tissu, comme le crème ou l'or sur un bordeaux profond, ou une teinte ton sur ton pour un effet subtil. Le tissu compte aussi : une étoffe de poids moyen retient bien les points et garde la ligne nette.</p>

<h2>Pourquoi elle reste faite à la main</h2>
<p>La couture à la main donne à la ligne une douceur et une légère irrégularité que la machine ne copie pas. Elle permet aussi d'adapter le motif à la courbe d'une capuche ou à l'angle d'une manche. Dans beaucoup de familles, ce savoir-faire se transmet à la maison, ce qui en fait une tradition vivante.</p>

<h2>Une débutante peut-elle l'apprendre ?</h2>
<p>Oui. La Randa repose sur quelques gestes de base répétés avec soin. La plupart des débutantes réalisent un échantillon propre en une semaine de courtes séances. L'essentiel est de commencer par des motifs simples, d'utiliser les bons outils et de soigner la régularité de la tension.</p>
<p>C'est exactement ce que l'<a href="/#guides">ebook et le playbook Khadija Randa Style</a> vous apprennent, pas à pas.</p>
`
    },
    ar: {
      title: "ما هي الرندة؟ الزخرفة المغربية المخيطة يدويًا على الجلابات",
      description: "الرندة هي الحاشية الزخرفية المخيطة يدويًا على الجلابات والقفاطين المغربية. تعرّفي على معناها وشكلها ولماذا ما زالت تُصنع باليد.",
      alt: "زخرفة الرندة وشرّابة على جلابة مغربية بيج",
      body: `
<p>إذا سبق أن أعجبتِ بجلابة مغربية يمتد على مقدّمتها وحول قبّعتها وعلى أكمامها خطّ رقيق من الخياطة، فقد رأيتِ <strong>الرندة</strong>. هي من التفاصيل الهادئة التي تحوّل قطعة بسيطة إلى قطعة مميزة.</p>

<h2>الرندة ببساطة</h2>
<p>الرندة حاشية زخرفية تُصنع بخياطة الخيط يدويًا على طول الدرزات وحواف الثوب. وغالبًا ما تُنفَّذ على شكل خطوط متعرّجة أو أمواج أو أسهم صغيرة أو عقد متكررة. وعلى الجلابة تجدينها على فتحة المقدّمة والقبّعة والأساور والجيوب.</p>
<p>وعلى خلاف النقش المطبوع أو الحاشية المصنوعة بالآلة، تُبنى الرندة غرزة بعد غرزة. ولهذا لا تتشابه قطعتان أبدًا، ولهذا تُعدّ الرندة المتقنة علامة جودة.</p>

<h2>أين تجدينها</h2>
<ul>
  <li><strong>الجلابات</strong> للنساء والرجال والأطفال، خصوصًا على المقدّمة والقبّعة.</li>
  <li><strong>القفاطين</strong>، حيث ترسم غالبًا خط الرقبة والأكمام.</li>
  <li><strong>مستلزمات البيت</strong> مثل الوسائد وأغطية الطاولات والأوشحة.</li>
</ul>

<h2>الخامات</h2>
<p>تُخاط الرندة بإبرة دقيقة وخيط قوي وناعم. تختار كثيرات خيطًا يتباين مع القماش، مثل الكريمي أو الذهبي على البورديو الغامق، أو لونًا متدرجًا من لون القماش لمظهر هادئ. والقماش مهم أيضًا، فالقماش متوسط الوزن يثبّت الغرز ويحافظ على نظافة الخط.</p>

<h2>لماذا ما زالت تُصنع باليد</h2>
<p>الخياطة اليدوية تمنح الخط ليونة وعدم انتظام طفيفًا لا تحاكيه الآلة. وتسمح أيضًا بتكييف النموذج مع انحناء القبّعة وزاوية الكم. وفي كثير من العائلات تنتقل هذه المهارة داخل البيت، وهذا ما يجعلها تقليدًا حيًّا.</p>

<h2>هل تستطيع المبتدئة تعلّمها؟</h2>
<p>نعم. تقوم الرندة على حركات أساسية قليلة تتكرر بعناية. تستطيع معظم المبتدئات إنجاز عيّنة نظيفة خلال أسبوع من الجلسات القصيرة. المفتاح هو البدء بنماذج بسيطة واستعمال الأدوات المناسبة والاهتمام بانتظام الشدّ.</p>
<p>وهذا بالضبط ما صُمّم <a href="/#guides">الكتاب الإلكتروني والدليل التطبيقي لخديجة رندا ستايل</a> لتعليمه، خطوة بخطوة.</p>
`
    }
  },
  {
    slug: "randa-embroidery-for-beginners-tools-and-materials",
    date: "2026-10-01",
    image: "jellaba-09.jpg",
    en: {
      title: "Moroccan Randa Embroidery for Beginners: Tools and Materials You Need",
      description: "A simple shopping list for learning Randa at home: needles, thread, fabric, hoops and small extras. Start without spending too much.",
      alt: "Burgundy jellaba hood with white zigzag Randa stitching",
      body: `
<p>One of the best things about Randa is how little you need to get started. You do not need a sewing machine or a workshop. A small kit and a quiet corner are enough. Here is what to buy and what to skip.</p>

<h2>1. Needles</h2>
<p>Choose a fine, sharp needle with an eye large enough for your thread. A small pack of mixed sizes is a smart first purchase, because the right size depends on your fabric and thread. If the needle leaves holes you can see, it is too thick.</p>

<h2>2. Thread</h2>
<p>Pick a smooth, strong thread that does not fray easily. For your first samples, choose a colour that contrasts clearly with your fabric so you can see every stitch and correct mistakes. Buy two or three colours rather than a huge set.</p>

<h2>3. Practice fabric</h2>
<p>Use a medium-weight, plain-weave cotton or similar cloth. Avoid very stretchy or very slippery fabrics at the start. Cut several squares of about 20 cm so you can practise a different pattern on each one.</p>

<h2>4. Small tools</h2>
<ul>
  <li><strong>Sharp small scissors</strong> for clean thread ends.</li>
  <li><strong>Fabric marker or chalk</strong> to draw guide lines you can wipe away.</li>
  <li><strong>Ruler</strong> to keep your lines straight.</li>
  <li><strong>Thimble</strong> (optional) if you stitch for long sessions.</li>
</ul>

<h2>5. Good light</h2>
<p>Fine stitching is easier and kinder to your eyes in daylight or under a bright lamp. This is the cheapest upgrade you can make.</p>

<h2>What you can skip for now</h2>
<p>Skip expensive specialty threads, large frames and complicated organisers. Once you know which stitches you enjoy, you can invest in better materials with confidence.</p>

<h2>Next step</h2>
<p>With your kit ready, begin with a short daily practice. The <a href="/#guides">playbook</a> gives you a 30-day plan with one small exercise per day, so you build skill without feeling overwhelmed. You can find our favourite tools in the <a href="{{p}}/shop">shop</a>.</p>
`
    },
    fr: {
      title: "Broderie marocaine Randa pour débutantes : les outils et matériaux nécessaires",
      description: "Une liste d'achats simple pour apprendre la Randa chez vous : aiguilles, fil, tissu, tambour et petits accessoires. Commencez sans trop dépenser.",
      alt: "Capuche de djellaba bordeaux avec Randa blanche en zigzag",
      body: `
<p>L'un des grands avantages de la Randa, c'est le peu de matériel nécessaire pour commencer. Pas besoin de machine à coudre ni d'atelier. Un petit kit et un coin tranquille suffisent. Voici ce qu'il faut acheter et ce qu'on peut laisser de côté.</p>

<h2>1. Les aiguilles</h2>
<p>Choisissez une aiguille fine et pointue, dont le chas est assez large pour votre fil. Un petit paquet de tailles variées est un bon premier achat, car la bonne taille dépend du tissu et du fil. Si l'aiguille laisse des trous visibles, elle est trop épaisse.</p>

<h2>2. Le fil</h2>
<p>Prenez un fil lisse et solide qui ne s'effiloche pas facilement. Pour vos premiers essais, choisissez une couleur qui contraste nettement avec le tissu afin de voir chaque point et de corriger vos erreurs. Deux ou trois couleurs suffisent, inutile d'acheter un grand assortiment.</p>

<h2>3. Le tissu d'entraînement</h2>
<p>Utilisez un coton de poids moyen, à armure toile, ou un tissu similaire. Évitez au début les tissus très extensibles ou très glissants. Découpez plusieurs carrés d'environ 20 cm pour essayer un motif différent sur chacun.</p>

<h2>4. Les petits outils</h2>
<ul>
  <li><strong>De petits ciseaux bien affûtés</strong> pour des fins de fil nettes.</li>
  <li><strong>Un marqueur ou une craie pour tissu</strong> pour tracer des repères effaçables.</li>
  <li><strong>Une règle</strong> pour garder des lignes droites.</li>
  <li><strong>Un dé à coudre</strong> (facultatif) pour les longues séances.</li>
</ul>

<h2>5. Une bonne lumière</h2>
<p>La couture fine est plus facile, et plus douce pour les yeux, à la lumière du jour ou sous une lampe puissante. C'est l'amélioration la moins chère que vous puissiez faire.</p>

<h2>Ce que vous pouvez éviter pour l'instant</h2>
<p>Évitez les fils spéciaux coûteux, les grands cadres et les organiseurs compliqués. Quand vous saurez quels points vous plaisent, vous pourrez investir dans du matériel de meilleure qualité en toute confiance.</p>

<h2>La suite</h2>
<p>Votre kit est prêt : commencez par une courte pratique quotidienne. Le <a href="/#guides">playbook</a> vous propose un plan de 30 jours avec un petit exercice par jour, pour progresser sans vous sentir dépassée. Retrouvez nos outils préférés dans la <a href="{{p}}/shop">boutique</a>.</p>
`
    },
    ar: {
      title: "التطريز المغربي بالرندة للمبتدئات: الأدوات والمواد التي تحتاجينها",
      description: "قائمة مشتريات بسيطة لتعلّم الرندة في البيت: إبر وخيوط وقماش وإطار تطريز وأدوات صغيرة. ابدئي دون إنفاق كثير.",
      alt: "قبّعة جلابة بورديو بزخرفة رندة بيضاء متعرّجة",
      body: `
<p>من أجمل ما في الرندة أنكِ تحتاجين القليل جدًا لتبدئي. لا تحتاجين آلة خياطة ولا ورشة. يكفي طقم صغير وركن هادئ. إليكِ ما يجب شراؤه وما يمكن تأجيله.</p>

<h2>١. الإبر</h2>
<p>اختاري إبرة رفيعة حادّة ذات ثقب يتسع لخيطكِ. علبة صغيرة بمقاسات مختلفة هي أفضل شراء أول، لأن المقاس المناسب يتوقف على القماش والخيط. وإذا تركت الإبرة ثقوبًا ظاهرة فهي سميكة جدًا.</p>

<h2>٢. الخيط</h2>
<p>اختاري خيطًا ناعمًا وقويًا لا يتهرّأ بسهولة. في عيّناتكِ الأولى اختاري لونًا يتباين بوضوح مع القماش لتري كل غرزة وتصحّحي أخطاءكِ. لونان أو ثلاثة ألوان تكفي، دون حاجة إلى مجموعة ضخمة.</p>

<h2>٣. قماش التمرين</h2>
<p>استعملي قطنًا متوسط الوزن بنسيج عادي أو قماشًا مشابهًا. تجنّبي في البداية الأقمشة المطاطية جدًا أو الزلقة جدًا. قصّي عدة مربعات بطول ٢٠ سم تقريبًا لتجرّبي نموذجًا مختلفًا على كل واحد.</p>

<h2>٤. الأدوات الصغيرة</h2>
<ul>
  <li><strong>مقصّ صغير حاد</strong> لقطع الخيوط بنظافة.</li>
  <li><strong>قلم أو طباشير للقماش</strong> لرسم خطوط إرشاد قابلة للمسح.</li>
  <li><strong>مسطرة</strong> للحفاظ على استقامة الخطوط.</li>
  <li><strong>كشتبان</strong> (اختياري) للجلسات الطويلة.</li>
</ul>

<h2>٥. إضاءة جيدة</h2>
<p>الخياطة الدقيقة أسهل وألطف على العينين في ضوء النهار أو تحت مصباح ساطع. وهذه أرخص ترقية يمكنكِ القيام بها.</p>

<h2>ما يمكنكِ تأجيله الآن</h2>
<p>أجّلي الخيوط الخاصة الباهظة والإطارات الكبيرة والمنظّمات المعقدة. وعندما تعرفين الغرز التي تحبينها، يمكنكِ الاستثمار في مواد أفضل بثقة.</p>

<h2>الخطوة التالية</h2>
<p>بعد تجهيز طقمكِ، ابدئي بتمرين يومي قصير. يمنحكِ <a href="/#guides">الدليل التطبيقي</a> خطة لمدة ٣٠ يومًا بتمرين صغير كل يوم، لتبني مهارتكِ دون إرهاق. ستجدين أدواتنا المفضلة في <a href="{{p}}/shop">المتجر</a>.</p>
`
    }
  },
  {
    slug: "jellaba-vs-kaftan-vs-djellaba",
    date: "2026-10-01",
    image: "jellaba-04.jpg",
    en: {
      title: "Jellaba vs Djellaba vs Kaftan: What Is the Difference?",
      description: "Jellaba, djellaba and kaftan are often confused. Here is a clear guide to the spelling, the hood, the fit and when to wear each.",
      alt: "Mustard hooded jellaba with a gold Randa panel",
      body: `
<p>Moroccan clothing words can be confusing, especially when the same garment is spelled in several ways. Here is a straightforward explanation.</p>

<h2>Jellaba and djellaba: same garment</h2>
<p>These are two spellings of the same word. <strong>Jellaba</strong> is common in English, while <strong>djellaba</strong> comes from French spelling. You may also see <em>jelaba</em> or <em>gallabiya</em>, which is a related word used in other countries. In Morocco it describes a loose, long outer garment with sleeves and, most often, a pointed hood.</p>

<h2>What makes a jellaba a jellaba</h2>
<ul>
  <li>A <strong>hood</strong> (called a qob), usually pointed.</li>
  <li>A <strong>loose, straight cut</strong> that falls to the ankle or shin.</li>
  <li>A <strong>front opening</strong>, often finished with buttons and decorative trim such as Randa.</li>
  <li>Worn <strong>over everyday clothes</strong> as an outer layer.</li>
</ul>

<h2>The kaftan</h2>
<p>A kaftan (or caftan) is usually <strong>lighter and has no hood</strong>. In Morocco it is a formal, elegant dress, often richly embroidered and worn for weddings and celebrations, sometimes with a belt. In English-speaking countries the word can also mean a casual loose dress.</p>

<h2>Quick comparison</h2>
<ul>
  <li><strong>Hood:</strong> jellaba yes, kaftan no.</li>
  <li><strong>Role:</strong> jellaba is an everyday or festive outer layer, kaftan is mainly a dress for occasions.</li>
  <li><strong>Fabric:</strong> jellabas are often wool or heavier crepe for cooler weather, kaftans lean towards flowing, lighter fabrics.</li>
</ul>

<h2>Where Randa fits in</h2>
<p>Both garments can carry hand-stitched Randa, but it is most visible on the jellaba, where it follows the hood and front line. Learn more in <a href="{{p}}/blog/what-is-randa-moroccan-hand-embroidery">What Is Randa?</a>.</p>
`
    },
    fr: {
      title: "Jellaba, djellaba ou caftan : quelle différence ?",
      description: "Jellaba, djellaba et caftan se confondent souvent. Voici un guide clair sur l'orthographe, la capuche, la coupe et le moment de porter chacun.",
      alt: "Djellaba moutarde à capuche avec un plastron Randa doré",
      body: `
<p>Les mots du vêtement marocain prêtent à confusion, surtout quand le même vêtement s'écrit de plusieurs façons. Voici une explication simple.</p>

<h2>Jellaba et djellaba : le même vêtement</h2>
<p>Ce sont deux orthographes du même mot. <strong>Jellaba</strong> est courant en anglais, tandis que <strong>djellaba</strong> vient de l'orthographe française. Vous pouvez aussi voir <em>jelaba</em> ou <em>gallabiya</em>, un mot proche utilisé dans d'autres pays. Au Maroc, il désigne un long vêtement d'extérieur ample, avec manches et, le plus souvent, une capuche pointue.</p>

<h2>Ce qui fait une djellaba</h2>
<ul>
  <li>Une <strong>capuche</strong> (appelée « qob »), généralement pointue.</li>
  <li>Une <strong>coupe droite et ample</strong> qui tombe à la cheville ou au mollet.</li>
  <li>Une <strong>ouverture devant</strong>, souvent finie par des boutons et une garniture décorative comme la Randa.</li>
  <li>Elle se porte <strong>par-dessus les vêtements du quotidien</strong>, comme une couche extérieure.</li>
</ul>

<h2>Le caftan</h2>
<p>Le caftan est généralement <strong>plus léger et sans capuche</strong>. Au Maroc, c'est une robe élégante et formelle, souvent richement brodée, portée pour les mariages et les fêtes, parfois avec une ceinture. Dans les pays anglophones, le mot peut aussi désigner une robe ample décontractée.</p>

<h2>Comparaison rapide</h2>
<ul>
  <li><strong>Capuche :</strong> djellaba oui, caftan non.</li>
  <li><strong>Rôle :</strong> la djellaba est une couche extérieure du quotidien ou de fête, le caftan est surtout une robe de cérémonie.</li>
  <li><strong>Tissu :</strong> les djellabas sont souvent en laine ou en crêpe épais pour le froid, les caftans préfèrent les tissus fluides et légers.</li>
</ul>

<h2>La place de la Randa</h2>
<p>Les deux vêtements peuvent porter de la Randa cousue main, mais elle est surtout visible sur la djellaba, où elle suit la capuche et la ligne du devant. En savoir plus : <a href="{{p}}/blog/what-is-randa-moroccan-hand-embroidery">Qu'est-ce que la Randa ?</a>.</p>
`
    },
    ar: {
      title: "الجلابة والدجلابة والقفطان: ما الفرق؟",
      description: "كثيرًا ما يُخلط بين الجلابة والدجلابة والقفطان. إليكِ دليلًا واضحًا عن الكتابة والقبّعة والقصّة ومتى ترتدين كل واحد.",
      alt: "جلابة بلون الخردل بقبّعة وزخرفة رندة ذهبية",
      body: `
<p>قد تبدو أسماء الألبسة المغربية مربكة، خصوصًا حين يُكتب الثوب نفسه بأشكال مختلفة. إليكِ شرحًا مباشرًا.</p>

<h2>الجلابة والدجلابة: ثوب واحد</h2>
<p>هما كتابتان لكلمة واحدة. تشيع كلمة <strong>jellaba</strong> في الإنجليزية، بينما جاءت <strong>djellaba</strong> من الكتابة الفرنسية. وقد ترين أيضًا <em>jelaba</em> أو <em>gallabiya</em> وهي كلمة قريبة تُستعمل في بلدان أخرى. وفي المغرب تدل على ثوب خارجي طويل فضفاض بأكمام وغالبًا بقبّعة مدبّبة.</p>

<h2>ما الذي يجعل الجلابة جلابة</h2>
<ul>
  <li><strong>قبّعة</strong> (تسمى «القب») وهي غالبًا مدبّبة.</li>
  <li><strong>قصّة مستقيمة فضفاضة</strong> تصل إلى الكاحل أو الساق.</li>
  <li><strong>فتحة أمامية</strong> غالبًا تُزيَّن بأزرار وزخرفة مثل الرندة.</li>
  <li>تُرتدى <strong>فوق ملابس اليوم</strong> كطبقة خارجية.</li>
</ul>

<h2>القفطان</h2>
<p>القفطان عادة <strong>أخف وبلا قبّعة</strong>. وفي المغرب هو لباس رسمي أنيق، كثيرًا ما يكون مطرّزًا بغنى ويُرتدى في الأعراس والمناسبات، وأحيانًا مع حزام. وفي البلدان الناطقة بالإنجليزية قد تعني الكلمة أيضًا فستانًا فضفاضًا عاديًا.</p>

<h2>مقارنة سريعة</h2>
<ul>
  <li><strong>القبّعة:</strong> الجلابة نعم، القفطان لا.</li>
  <li><strong>الدور:</strong> الجلابة طبقة خارجية يومية أو احتفالية، والقفطان فستان للمناسبات أساسًا.</li>
  <li><strong>القماش:</strong> الجلابات غالبًا من الصوف أو الكريب الثقيل للطقس البارد، والقفاطين تميل إلى الأقمشة الخفيفة المنسابة.</li>
</ul>

<h2>أين تقع الرندة</h2>
<p>يمكن أن يحمل الثوبان رندة مخيطة يدويًا، لكنها تظهر أكثر على الجلابة حيث تتبع القبّعة وخط المقدّمة. اعرفي المزيد في <a href="{{p}}/blog/what-is-randa-moroccan-hand-embroidery">ما هي الرندة؟</a>.</p>
`
    }
  },
  {
    slug: "how-to-wear-a-moroccan-jellaba",
    date: "2026-10-01",
    image: "jellaba-13.jpg",
    en: {
      title: "How to Wear a Moroccan Jellaba with Confidence: A Style Guide",
      description: "Practical styling tips for wearing a Moroccan jellaba outside Morocco: layering, colours, shoes and accessories for everyday and special occasions.",
      alt: "Burgundy jellaba with Randa detail on the hood",
      body: `
<p>A jellaba is comfortable, elegant and surprisingly easy to style. If you live in the United States or Europe, here is how to wear one so it looks natural in your daily life.</p>

<h2>Start with the right size</h2>
<p>A jellaba is meant to be loose, but it should still sit well on the shoulders. Check that the sleeves reach your wrist or just below, and that the hem falls between mid-calf and ankle. If it is too long, you can ask a tailor to adjust the hem without touching the trim.</p>

<h2>Layer it like a coat</h2>
<p>Think of the jellaba as an outer layer. Wear it over a plain top and straight trousers, or over a simple dress. In colder weather, add a thin knit underneath. Keep your layers slim so the garment keeps its clean line.</p>

<h2>Choose colours that work for you</h2>
<ul>
  <li><strong>Neutrals</strong> such as beige, camel and cream go with everything and show Randa detail beautifully.</li>
  <li><strong>Deep colours</strong> like burgundy, emerald and navy look rich and formal.</li>
  <li><strong>Gold and mustard</strong> make a statement for celebrations.</li>
</ul>

<h2>Shoes and accessories</h2>
<p>Flat leather sandals, ankle boots or simple sneakers all work. Keep jewellery light so the embroidery stays the star. A small bag and a soft scarf are enough.</p>

<h2>Day versus occasion</h2>
<p>For everyday wear, choose a simple cut with subtle trim. For a dinner or a celebration, pick a richer fabric, a statement colour and more detailed Randa. The same garment can be dressed up with heels and a clutch.</p>

<h2>Wearing it with respect and joy</h2>
<p>The jellaba is part of Moroccan heritage. Wearing it with care for the craft, and understanding how the trim is made, adds meaning. If you want to understand that craft, start with <a href="{{p}}/blog/what-is-randa-moroccan-hand-embroidery">our Randa explainer</a> or explore the <a href="/#collection">collection</a>.</p>
`
    },
    fr: {
      title: "Comment porter une djellaba marocaine avec assurance : guide de style",
      description: "Conseils de style pratiques pour porter une djellaba marocaine hors du Maroc : superpositions, couleurs, chaussures et accessoires, du quotidien aux grandes occasions.",
      alt: "Djellaba bordeaux avec détail de Randa sur la capuche",
      body: `
<p>La djellaba est confortable, élégante et étonnamment facile à associer. Si vous vivez en Europe ou aux États-Unis, voici comment la porter pour qu'elle paraisse naturelle dans votre quotidien.</p>

<h2>Commencez par la bonne taille</h2>
<p>Une djellaba est faite pour être ample, mais elle doit bien tomber sur les épaules. Vérifiez que les manches arrivent au poignet ou juste en dessous, et que l'ourlet tombe entre le mi-mollet et la cheville. Si elle est trop longue, une couturière peut ajuster l'ourlet sans toucher à la garniture.</p>

<h2>Superposez-la comme un manteau</h2>
<p>Pensez à la djellaba comme à une couche extérieure. Portez-la sur un haut uni et un pantalon droit, ou sur une robe simple. Par temps froid, ajoutez une maille fine dessous. Gardez des couches minces pour que le vêtement conserve sa ligne nette.</p>

<h2>Choisissez des couleurs qui vous vont</h2>
<ul>
  <li><strong>Les neutres</strong> comme le beige, le camel et le crème vont avec tout et mettent la Randa en valeur.</li>
  <li><strong>Les couleurs profondes</strong> comme le bordeaux, l'émeraude et le marine font riche et formel.</li>
  <li><strong>L'or et la moutarde</strong> font un effet pour les fêtes.</li>
</ul>

<h2>Chaussures et accessoires</h2>
<p>Sandales plates en cuir, bottines ou baskets simples fonctionnent toutes. Gardez des bijoux légers pour que la broderie reste la vedette. Un petit sac et un foulard doux suffisent.</p>

<h2>Jour ou grande occasion</h2>
<p>Au quotidien, choisissez une coupe simple avec une garniture discrète. Pour un dîner ou une fête, prenez un tissu plus riche, une couleur marquée et une Randa plus travaillée. La même pièce peut se porter avec des talons et une pochette.</p>

<h2>La porter avec respect et plaisir</h2>
<p>La djellaba fait partie du patrimoine marocain. La porter en respectant le savoir-faire, et en comprenant comment la garniture est réalisée, lui donne du sens. Pour comprendre cet artisanat, commencez par <a href="{{p}}/blog/what-is-randa-moroccan-hand-embroidery">notre article sur la Randa</a> ou découvrez la <a href="/#collection">collection</a>.</p>
`
    },
    ar: {
      title: "كيف ترتدين الجلابة المغربية بثقة: دليل أناقة",
      description: "نصائح عملية لارتداء الجلابة المغربية خارج المغرب: طبقات وألوان وأحذية وإكسسوارات لليوم العادي والمناسبات.",
      alt: "جلابة بورديو بتفصيل رندة على القبّعة",
      body: `
<p>الجلابة مريحة وأنيقة وسهلة التنسيق أكثر مما تتوقعين. إذا كنتِ تعيشين في أوروبا أو الولايات المتحدة، فإليكِ كيف ترتدينها لتبدو طبيعية في حياتكِ اليومية.</p>

<h2>ابدئي بالمقاس المناسب</h2>
<p>الجلابة مصمّمة لتكون فضفاضة، لكن يجب أن تستقر جيدًا على الكتفين. تأكدي أن الأكمام تصل إلى الرسغ أو أسفله قليلًا، وأن الحافة تقع بين منتصف الساق والكاحل. وإذا كانت طويلة جدًا فيمكن لخيّاطة تعديل الحافة دون المساس بالزخرفة.</p>

<h2>ألبسيها كالمعطف</h2>
<p>فكّري في الجلابة كطبقة خارجية. ارتديها فوق قميص بسيط وسروال مستقيم، أو فوق فستان عادي. وفي الطقس البارد أضيفي حياكة رقيقة تحتها. حافظي على طبقات رفيعة لتحتفظ الجلابة بخطها النظيف.</p>

<h2>اختاري الألوان التي تناسبكِ</h2>
<ul>
  <li><strong>الألوان المحايدة</strong> كالبيج والكاميل والكريمي تناسب كل شيء وتُبرز تفاصيل الرندة بجمال.</li>
  <li><strong>الألوان الغامقة</strong> كالبورديو والزمردي والكحلي تبدو فاخرة ورسمية.</li>
  <li><strong>الذهبي والخردلي</strong> يمنحان حضورًا في الاحتفالات.</li>
</ul>

<h2>الأحذية والإكسسوارات</h2>
<p>الصنادل الجلدية المسطحة أو الأحذية القصيرة أو الحذاء الرياضي البسيط، كلها تناسب. اجعلي المجوهرات خفيفة ليبقى التطريز هو النجم. حقيبة صغيرة ووشاح ناعم يكفيان.</p>

<h2>يوم عادي أم مناسبة</h2>
<p>لليوم العادي اختاري قصّة بسيطة بزخرفة هادئة. وللعشاء أو الاحتفال اختاري قماشًا أغنى ولونًا لافتًا ورندة أكثر تفصيلًا. ويمكن تنسيق الثوب نفسه مع كعب عالٍ وحقيبة يد صغيرة.</p>

<h2>ارتديها باحترام وفرح</h2>
<p>الجلابة جزء من التراث المغربي. وارتداؤها باحترام للحرفة وفهم كيفية صنع الزخرفة يمنحها معنى أعمق. وإذا أردتِ فهم هذه الحرفة فابدئي بـ<a href="{{p}}/blog/what-is-randa-moroccan-hand-embroidery">شرحنا عن الرندة</a> أو تصفّحي <a href="/#collection">المجموعة</a>.</p>
`
    }
  },
  {
    slug: "common-randa-stitching-mistakes",
    date: "2026-10-01",
    image: "jellaba-06.jpg",
    en: {
      title: "5 Common Randa Stitching Mistakes (and How to Fix Them)",
      description: "Uneven tension, tangled thread, puckered fabric and more. Five mistakes beginners make in hand embroidery and simple ways to fix each one.",
      alt: "Golden striped jellaba with neat Randa trim",
      body: `
<p>Everyone makes mistakes when learning hand embroidery. The good news is that most of them have simple fixes. Here are the five we see most often.</p>

<h2>1. Pulling the thread too tight</h2>
<p><strong>Sign:</strong> the fabric puckers and the line looks wavy.<br>
<strong>Fix:</strong> let each stitch rest on the fabric instead of pulling it. Think of laying the thread down, not tightening it. Practise on a square sample until the cloth stays flat.</p>

<h2>2. Uneven stitch length</h2>
<p><strong>Sign:</strong> the pattern looks messy even if each stitch is correct.<br>
<strong>Fix:</strong> draw guide lines with chalk or a removable marker, or mark equal steps with a ruler. After a week, your eye will do the job without help.</p>

<h2>3. Thread that is too long</h2>
<p><strong>Sign:</strong> constant tangles, knots and frayed thread.<br>
<strong>Fix:</strong> cut a length of about the distance from your fingertips to your elbow. Shorter thread means less tangling and stronger stitches.</p>

<h2>4. Starting and ending carelessly</h2>
<p><strong>Sign:</strong> stitches loosen after washing.<br>
<strong>Fix:</strong> secure the thread at the start and finish with a small, tidy knot or a few tiny stitches hidden on the back. Always check the back of your work as well as the front.</p>

<h2>5. Rushing the corners</h2>
<p><strong>Sign:</strong> the line is neat on the straight parts but sloppy at turns.<br>
<strong>Fix:</strong> slow down at corners, shorten your stitches slightly and keep the angle consistent. Practise corners on their own before attempting a full pattern.</p>

<h2>Build the habit</h2>
<p>Ten to twenty minutes a day beats one long weekend session. The <a href="/#guides">playbook</a> includes a troubleshooting section and a 30-day plan that targets each of these problems.</p>
`
    },
    fr: {
      title: "5 erreurs courantes en couture Randa (et comment les corriger)",
      description: "Tension irrégulière, fil emmêlé, tissu qui plisse et plus encore. Cinq erreurs de débutantes en broderie à la main et des solutions simples pour chacune.",
      alt: "Djellaba dorée à rayures avec garniture Randa soignée",
      body: `
<p>Tout le monde fait des erreurs en apprenant la broderie à la main. La bonne nouvelle, c'est que la plupart ont des solutions simples. Voici les cinq que nous voyons le plus souvent.</p>

<h2>1. Tirer trop fort sur le fil</h2>
<p><strong>Signe :</strong> le tissu fronce et la ligne ondule.<br>
<strong>Solution :</strong> laissez chaque point reposer sur le tissu au lieu de le tirer. Pensez à poser le fil, pas à le serrer. Entraînez-vous sur un échantillon carré jusqu'à ce que le tissu reste plat.</p>

<h2>2. Une longueur de point irrégulière</h2>
<p><strong>Signe :</strong> le motif paraît brouillon même si chaque point est correct.<br>
<strong>Solution :</strong> tracez des repères avec une craie ou un marqueur effaçable, ou marquez des intervalles égaux avec une règle. Au bout d'une semaine, votre œil fera le travail seul.</p>

<h2>3. Un fil trop long</h2>
<p><strong>Signe :</strong> enchevêtrements, nœuds et fil effiloché en permanence.<br>
<strong>Solution :</strong> coupez une longueur égale à la distance entre le bout des doigts et le coude. Un fil plus court, c'est moins d'emmêlement et des points plus solides.</p>

<h2>4. Commencer et finir sans soin</h2>
<p><strong>Signe :</strong> les points se desserrent après le lavage.<br>
<strong>Solution :</strong> fixez le fil au début et terminez par un petit nœud net ou quelques points minuscules cachés à l'envers. Vérifiez toujours l'envers de votre ouvrage autant que l'endroit.</p>

<h2>5. Se précipiter dans les angles</h2>
<p><strong>Signe :</strong> la ligne est nette sur les parties droites mais approximative dans les virages.<br>
<strong>Solution :</strong> ralentissez dans les angles, raccourcissez légèrement les points et gardez un angle constant. Exercez-vous aux angles séparément avant de tenter un motif complet.</p>

<h2>Prenez l'habitude</h2>
<p>Dix à vingt minutes par jour valent mieux qu'une longue séance le week-end. Le <a href="/#guides">playbook</a> contient une section de dépannage et un plan de 30 jours qui cible chacun de ces problèmes.</p>
`
    },
    ar: {
      title: "٥ أخطاء شائعة في خياطة الرندة وكيف تصحّحينها",
      description: "شدّ غير منتظم وخيط متشابك وقماش متجعّد وغير ذلك. خمسة أخطاء تقع فيها المبتدئات في التطريز اليدوي وحلول بسيطة لكل منها.",
      alt: "جلابة ذهبية مخطّطة بزخرفة رندة أنيقة",
      body: `
<p>الجميع يخطئ أثناء تعلّم التطريز اليدوي. والخبر الجيد أن لمعظم الأخطاء حلولًا بسيطة. إليكِ الخمسة الأكثر شيوعًا.</p>

<h2>١. شدّ الخيط بقوة</h2>
<p><strong>العلامة:</strong> يتجعّد القماش ويبدو الخط متموّجًا.<br>
<strong>الحل:</strong> دعي كل غرزة تستريح على القماش بدل شدّها. فكّري في وضع الخيط لا في إحكامه. تمرّني على عيّنة مربعة حتى يبقى القماش مسطّحًا.</p>

<h2>٢. طول الغرز غير منتظم</h2>
<p><strong>العلامة:</strong> يبدو النموذج فوضويًا حتى لو كانت كل غرزة صحيحة.<br>
<strong>الحل:</strong> ارسمي خطوط إرشاد بالطباشير أو بقلم قابل للمسح، أو علّمي مسافات متساوية بمسطرة. وبعد أسبوع ستؤدي عيناكِ المهمة دون مساعدة.</p>

<h2>٣. خيط طويل جدًا</h2>
<p><strong>العلامة:</strong> تشابك وعقد وخيط متهرّئ باستمرار.<br>
<strong>الحل:</strong> اقطعي طولًا يعادل المسافة بين أطراف أصابعكِ والمرفق تقريبًا. الخيط الأقصر يعني تشابكًا أقل وغرزًا أقوى.</p>

<h2>٤. بداية ونهاية دون عناية</h2>
<p><strong>العلامة:</strong> تنفكّ الغرز بعد الغسيل.<br>
<strong>الحل:</strong> ثبّتي الخيط في البداية وأنهي بعقدة صغيرة مرتبة أو بضع غرز دقيقة مخفية في الخلف. افحصي ظهر عملكِ دائمًا كما تفحصين وجهه.</p>

<h2>٥. الاستعجال عند الزوايا</h2>
<p><strong>العلامة:</strong> الخط نظيف في الأجزاء المستقيمة لكنه مهمل عند المنعطفات.<br>
<strong>الحل:</strong> أبطئي عند الزوايا وقصّري الغرز قليلًا وحافظي على زاوية ثابتة. تمرّني على الزوايا وحدها قبل تنفيذ نموذج كامل.</p>

<h2>كوّني العادة</h2>
<p>عشر إلى عشرين دقيقة يوميًا أفضل من جلسة طويلة في عطلة الأسبوع. يتضمن <a href="/#guides">الدليل التطبيقي</a> قسمًا لحل المشكلات وخطة لمدة ٣٠ يومًا تعالج كل واحدة من هذه المشكلات.</p>
`
    }
  }
];
