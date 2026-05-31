const contactConfig = {
  // Fill these when the public contact channels are ready.
  whatsappNumber: "",
  instagramUrl: "",
};

const products = [
  {
    id: "kurutoga-dive",
    category: "mechanical",
    brand: "uni",
    nameEs: "KURUTOGA DIVE",
    nameJa: "クルトガ ダイブ",
    descriptionEs: "Lápiz mecánico premium con mecanismo automático para escritura continua.",
    descriptionJa: "自動芯繰り出し機構を備えたプレミアムシャープペン。",
    priceClp: "100.000 CLP",
    badge: { es: "Aurora Purple", ja: "オーロラパープル" },
    image: "https://baseec-img-mng.akamaized.net/images/item/origin/021379cc1be855e3056c57e17d7d3b00.jpg?im=Resize%2Cwidth%3D1280%2Ctype%3Dnormal&imformat=generic&q=90",
  },
  {
    id: "kurutoga-metal",
    category: "mechanical",
    brand: "uni",
    nameEs: "KURUTOGA Metal",
    nameJa: "クルトガ メタル",
    descriptionEs: "Cuerpo metalico, giro de mina estable y colores normales o limitados.",
    descriptionJa: "金属軸と安定した芯回転。通常色・限定色を展開。",
    priceClp: "40.000-45.000 CLP",
    badge: { es: "Edicion limitada", ja: "限定色あり" },
    image: "https://www.mpuni.co.jp/news/images/news/ed954fa14215beabe02a0d83af8c1e3b97353e94.jpg",
  },
  {
    id: "zento-signature",
    category: "ballpoint",
    brand: "uni",
    nameEs: "uniball ZENTO Signature",
    nameJa: "ユニボール ZENTO シグニチャー",
    descriptionEs: "Línea de escritura premium para quienes buscan una pieza especial.",
    descriptionJa: "特別な一本を探す人向けの上位ライン。",
    priceClp: "70.000-80.000 CLP",
    badge: { es: "Destacado", ja: "注目商品" },
    image: "https://shopping.jreast.co.jp/html/upload/save_image/shop/17456/product/4778690/image_l.jpg",
  },
  {
    id: "zento-flow",
    category: "ballpoint",
    brand: "uni",
    nameEs: "uniball ZENTO Flow",
    nameJa: "ユニボール ZENTO Flow",
    descriptionEs: "Rollerball de trazo suave para notas largas y escritura diaria cuidada.",
    descriptionJa: "長い筆記にも向く、なめらかなローラーボール。",
    priceClp: "13.000 CLP",
    badge: { es: "Suave", ja: "なめらか" },
    image: "https://www.mpuni.co.jp/products/images/products/thm_uniballzento_zf.png",
  },
  {
    id: "jetstream-lite",
    category: "ballpoint",
    brand: "uni",
    nameEs: "JETSTREAM Lite touch ink",
    nameJa: "ジェットストリーム Lite touch ink",
    descriptionEs: "Bolígrafo de escritura diaria con trazo ligero y tinta negra o azul.",
    descriptionJa: "軽い書き心地の普段使いボールペン。黒・青を展開。",
    priceClp: "3.500 CLP",
    badge: { es: "Uso diario", ja: "日常使い" },
    image: "https://www.mpuni.co.jp/products/images/products/313882000.jpg",
  },
  {
    id: "uniball-one",
    category: "ballpoint",
    brand: "uni",
    nameEs: "uni-ball one",
    nameJa: "ユニボール ワン",
    descriptionEs: "Gel japonés y recambios para líneas nítidas en negro, azul o rojo.",
    descriptionJa: "黒・青・赤のくっきりした線を楽しめるゲルペンと替え芯。",
    priceClp: "2.000-6.900 CLP",
    badge: { es: "Compacto", ja: "コンパクト" },
    image: "https://www.mpuni.co.jp/products/feature_images/main/ballpoint_pens/thm_uniballone.png",
  },
  {
    id: "juice-up",
    category: "ballpoint",
    brand: "PILOT",
    nameEs: "Juice up 0.5 mm",
    nameJa: "ジュースアップ 0.5mm",
    descriptionEs: "Gel japonés de línea nítida, disponible en tinta negra o roja.",
    descriptionJa: "くっきり書ける日本のゲルインキペン。黒・赤を展開。",
    priceClp: "3.500 CLP",
    badge: { es: "Gel", ja: "ゲルインキ" },
    image: "https://fujinote.com/cdn/shop/files/IMG_E8257_0.5x.png?v=1759128936&width=416",
  },
  {
    id: "daily-pens",
    category: "ballpoint",
    brand: "uni / Zebra",
    nameEs: "Bolígrafos diarios",
    nameJa: "日常使いボールペン",
    descriptionEs: "Modelos confiables para apuntes, estudio, oficina y agenda.",
    descriptionJa: "ノート、勉強、仕事、手帳に使いやすい定番モデル。",
    priceClp: "2.000-3.500 CLP",
    badge: { es: "Diario", ja: "定番" },
    image: "https://www.mpuni.co.jp/products/images/products/313882000.jpg",
    isGroup: true,
  },
  {
    id: "zento-refill",
    category: "refills",
    brand: "uni",
    nameEs: "Recambios ZENTO",
    nameJa: "ZENTO 替え芯",
    descriptionEs: "Refills para mantener tus ZENTO en uso por mas tiempo.",
    descriptionJa: "ZENTOを長く使うための交換用リフィル。",
    priceClp: "2.000 CLP",
    badge: { es: "Recambio", ja: "替え芯" },
    image: "https://www.mpuni.co.jp/products/images/products/SXR-L-7.jpg",
  },
  {
    id: "jetstream-refill",
    category: "refills",
    brand: "uni",
    nameEs: "Recambio JETSTREAM 0.7 mm",
    nameJa: "ジェットストリーム 替え芯 0.7mm",
    descriptionEs: "Recambio para JETSTREAM multicolor, disponible por color segun disponibilidad.",
    descriptionJa: "ジェットストリーム多色用の替え芯。色は在庫に合わせて確認できます。",
    priceClp: "2.000 CLP",
    badge: { es: "Compatible", ja: "対応芯" },
    image: "https://www.mpuni.co.jp/products/images/products/SXR-L-7.jpg",
  },
  {
    id: "pentel-ain-leads",
    category: "leads",
    brand: "Pentel",
    nameEs: "Ain minas para lápiz mecánico",
    nameJa: "Pentel Ain シャー芯",
    descriptionEs: "Minas japonesas en varios grosores para escritura técnica o diaria.",
    descriptionJa: "日常筆記から製図まで使える各サイズの日本製シャー芯。",
    priceClp: "2.500 CLP",
    badge: { es: "Minas", ja: "シャー芯" },
    image: "https://www.pentel.co.jp/images/products/lead_pentel_ain_mainvisual_pc_1.png",
  },
  {
    id: "accessories",
    category: "accessories",
    brand: "PLUS / KOKUYO / OLFA",
    nameEs: "Accesorios japoneses",
    nameJa: "日本文具アクセサリー",
    descriptionEs: "Gomas, pegamento, estuche y cortador para completar tu escritorio.",
    descriptionJa: "消しゴム、のり、ペンケース、カッターなどの小物。",
    priceClp: "2.000-19.900 CLP",
    badge: { es: "Complementos", ja: "小物" },
    image: "https://www.olfa.co.jp/wordpress/wp-content/uploads/1501648948PRC-3.jpg",
    isGroup: true,
  },
  {
    id: "zento-standard",
    category: "ballpoint",
    brand: "uni",
    nameEs: "uniball ZENTO Standard",
    nameJa: "ユニボール ZENTO Standard",
    descriptionEs: "Rollerball ZENTO de entrada, cómodo para uso diario con colores normales o limitados.",
    descriptionJa: "通常色・限定色を選べる、日常使い向けのZENTOスタンダード。",
    priceClp: "3.800-4.000 CLP",
    badge: { es: "Nuevo", ja: "追加" },
    image: "https://www.mpuni.co.jp/products/images/products/thm_uniballzento_zsc.png",
  },
  {
    id: "jetstream-4and1",
    category: "ballpoint",
    brand: "uni",
    nameEs: "JETSTREAM 4&1 Lite touch ink",
    nameJa: "ジェットストリーム 4&1 Lite touch ink",
    descriptionEs: "Multifunción con cuatro colores y lápiz mecánico 0.5 mm en un solo cuerpo.",
    descriptionJa: "4色ボールペンと0.5mmシャープを1本にまとめた多機能モデル。",
    priceClp: "16.000 CLP",
    badge: { es: "Multifunción", ja: "多機能" },
    image: "https://www.mpuni.co.jp/products/images/products/313882000.jpg",
  },
  {
    id: "jetstream-slim-compact",
    category: "ballpoint",
    brand: "uni",
    nameEs: "JETSTREAM 3 colores Slim Compact",
    nameJa: "ジェットストリーム 3色 Slim Compact",
    descriptionEs: "Tres colores en cuerpo delgado para agenda, oficina y escritura rápida.",
    descriptionJa: "手帳や仕事用に使いやすい、細身の3色ジェットストリーム。",
    priceClp: "8.000 CLP",
    badge: { es: "Compacto", ja: "細身" },
    image: "https://www.mpuni.co.jp/products/images/products/313882000.jpg",
  },
  {
    id: "jetstream-edge",
    category: "ballpoint",
    brand: "uni",
    nameEs: "JETSTREAM EDGE 0.28 mm",
    nameJa: "ジェットストリーム エッジ 0.28mm",
    descriptionEs: "Bolígrafo ultrafino para escritura pequeña, agenda y notas precisas.",
    descriptionJa: "小さな文字や手帳に向く、0.28mmの超極細ボールペン。",
    priceClp: "14.900 CLP",
    badge: { es: "Ultrafino", ja: "超極細" },
    image: "https://www.mpuni.co.jp/news/pressrelease/detail/news_file/file/JETSTREAMEDGE.jpg",
  },
  {
    id: "uniball-one-p",
    category: "ballpoint",
    brand: "uni",
    nameEs: "uni-ball one P",
    nameJa: "ユニボール ワン P",
    descriptionEs: "Gel compacto con cuerpo corto y colores coleccionables, normal o limitado.",
    descriptionJa: "短く持ち運びやすい、集めたくなるユニボール ワンのコンパクトモデル。",
    priceClp: "6.900-13.000 CLP",
    badge: { es: "Compacto", ja: "コンパクト" },
    image: "https://www.mpuni.co.jp/products/images/products/7bd507720d7e9e9e14f24792291f164d1957b642.jpg",
    isGroup: true,
  },
  {
    id: "uniball-one-p-standard",
    category: "ballpoint",
    brand: "uni",
    nameEs: "uni-ball one P standard",
    nameJa: "ユニボール ワン P 通常",
    descriptionEs: "Modelo compacto uni-ball one P de uso diario, fácil de llevar en estuche pequeño.",
    descriptionJa: "小さな筆箱にも入れやすい、通常モデルのユニボール ワン P。",
    priceClp: "6.900 CLP",
    badge: { es: "Compacto", ja: "コンパクト" },
    image: "https://www.mpuni.co.jp/products/images/products/7bd507720d7e9e9e14f24792291f164d1957b642.jpg",
  },
  {
    id: "uniball-one-p-limited",
    category: "ballpoint",
    brand: "uni",
    nameEs: "uni-ball one P limitado",
    nameJa: "ユニボール ワン P 限定",
    descriptionEs: "Versión limitada de uni-ball one P para quienes buscan colores especiales.",
    descriptionJa: "特別な色を楽しみたい人向けのユニボール ワン P 限定モデル。",
    priceClp: "13.000 CLP",
    badge: { es: "Limitado", ja: "限定" },
    image: "https://www.mpuni.co.jp/products/images/products/7bd507720d7e9e9e14f24792291f164d1957b642.jpg",
  },
  {
    id: "uniball-one-3",
    category: "ballpoint",
    brand: "uni",
    nameEs: "uni-ball one 3",
    nameJa: "ユニボール ワン 3",
    descriptionEs: "Multicolor gel uni-ball one para alternar colores en notas y estudio.",
    descriptionJa: "ノートや勉強で色を切り替えやすい、uni-ball oneの多色モデル。",
    priceClp: "17.000 CLP",
    badge: { es: "3 colores", ja: "3色" },
    image: "https://www.mpuni.co.jp/products/feature_images/main/ballpoint_pens/thm_uniballone.png",
  },
  {
    id: "sarasa-clip",
    category: "ballpoint",
    brand: "Zebra",
    nameEs: "SARASA CLIP",
    nameJa: "サラサクリップ",
    descriptionEs: "Gel clásico con clip práctico y colores vivos para notas diarias.",
    descriptionJa: "使いやすいクリップと鮮やかな色が特徴の定番ゲルペン。",
    priceClp: "2.000 CLP",
    badge: { es: "Gel clásico", ja: "定番ゲル" },
    image: "https://www.zebra.co.jp/global/images/sarasa.png",
  },
  {
    id: "sarasa-dry",
    category: "ballpoint",
    brand: "Zebra",
    nameEs: "SARASA dry",
    nameJa: "サラサドライ",
    descriptionEs: "Gel de secado rápido para apuntes, estudio y escritura continua.",
    descriptionJa: "ノートや連続筆記に使いやすい速乾タイプのサラサ。",
    priceClp: "2.900 CLP",
    badge: { es: "Secado rápido", ja: "速乾" },
    image: "https://www.zebra.co.jp/global/images/sarasa.png",
  },
  {
    id: "dr-grip-gspec",
    category: "ballpoint",
    brand: "PILOT",
    nameEs: "Dr.Grip G-Spec",
    nameJa: "ドクターグリップ G-SPEC",
    descriptionEs: "Bolígrafo ergonómico con agarre cómodo para sesiones largas de escritura.",
    descriptionJa: "長時間筆記に向く、握りやすさを重視したPILOTの定番モデル。",
    priceClp: "10.000 CLP",
    badge: { es: "Ergonómico", ja: "握りやすい" },
    image: "https://www.pilot.co.jp/press_release/d02899159a77371e1ce39cbdb1cbbe68cc20a235.jpg",
  },
  {
    id: "kuru-toga-ks",
    category: "mechanical",
    brand: "uni",
    nameEs: "KURUTOGA KS",
    nameJa: "クルトガ KS",
    descriptionEs: "Lápiz mecánico KURUTOGA accesible para estudio y uso diario.",
    descriptionJa: "勉強や普段使いに導入しやすいクルトガのスタンダードライン。",
    priceClp: "8.900 CLP",
    badge: { es: "Estudio", ja: "学習用" },
    image: "https://www.mpuni.co.jp/products/images/products/3eb0c5b8e64e7c7f42cee11e63c979eb51257b43.png",
  },
  {
    id: "orenznero",
    category: "mechanical",
    brand: "Pentel",
    nameEs: "Pentel ORENZNERO",
    nameJa: "ぺんてる オレンズネロ",
    descriptionEs: "Lápiz mecánico premium con sistema Orenz y avance automático de mina.",
    descriptionJa: "オレンズシステムと自動芯出し機構を備えた、ぺんてる上位シャープ。",
    priceClp: "40.000 CLP",
    badge: { es: "Premium", ja: "上位モデル" },
    image: "https://www.pentel.co.jp/images/products/ORENZNERO_mainvisual_pc-1.jpg",
  },
  {
    id: "pentel-art-multi-8",
    category: "mechanical",
    brand: "Pentel",
    nameEs: "Pentel Art Multi 8",
    nameJa: "ぺんてる アートマルチ8",
    descriptionEs: "Portaminas artístico con ocho colores para bocetos, agenda e ilustración.",
    descriptionJa: "8色の色芯を1本で使える、スケッチや手帳向けのホルダー式色鉛筆。",
    priceClp: "37.000 CLP",
    badge: { es: "Arte", ja: "アート" },
    image: "https://www.pentel.co.jp/images/products/artmulti8_lineup_2.png",
  },
  {
    id: "energel-multicolor",
    category: "ballpoint",
    brand: "Pentel",
    nameEs: "Pentel EnerGel multicolor",
    nameJa: "ぺんてる エナージェル多色",
    descriptionEs: "Gel multicolor de secado rápido para notas limpias, estudio y oficina.",
    descriptionJa: "速乾ゲルを多色で使える、ノート・勉強・仕事向けモデル。",
    priceClp: "8.000 CLP",
    badge: { es: "Multicolor", ja: "多色" },
    image: "https://www.pentel.co.jp/images/products/energel_3c_lineup_1.png",
  },
  {
    id: "zebra-lightwrite-alpha",
    category: "ballpoint",
    brand: "Zebra",
    nameEs: "Zebra Lightwrite Alpha",
    nameJa: "ゼブラ ライトライトα",
    descriptionEs: "Bolígrafo con luz para escribir en lugares con poca iluminación.",
    descriptionJa: "暗い場所でも書きやすいライト付きボールペン。",
    priceClp: "10.000 CLP",
    badge: { es: "Con luz", ja: "ライト付き" },
    image: "https://www.zebra.co.jp/images/product/kv/lightwrite-a/main.jpg",
  },
  {
    id: "pilot-airstep",
    category: "mechanical",
    brand: "PILOT",
    nameEs: "PILOT AirStep",
    nameJa: "PILOT エアステップ",
    descriptionEs: "Lápiz mecánico ligero para estudio, notas diarias y escritura prolongada.",
    descriptionJa: "勉強や日常筆記に使いやすい、軽い書き心地のシャープペン。",
    priceClp: "6.900-7.500 CLP",
    badge: { es: "Ligero", ja: "軽い" },
    image: "https://www.pilot.co.jp/press_release/ea7d236ca746fe85e9416a65e41d921b88369ab6.jpg",
  },
  {
    id: "pentel-smash",
    category: "mechanical",
    brand: "Pentel",
    nameEs: "Pentel SMASH",
    nameJa: "ぺんてる スマッシュ",
    descriptionEs: "Lápiz mecánico técnico y firme, popular para estudio y dibujo.",
    descriptionJa: "勉強や製図に人気の、しっかりした書き味のシャープペン。",
    priceClp: "14.000 CLP",
    badge: { es: "Clásico", ja: "定番" },
    image: "https://www.pentel.co.jp/images/products/smash_mainvisual_pc_1.jpg",
  },
  {
    id: "alpha-gel-switch",
    category: "mechanical",
    brand: "uni",
    nameEs: "uni Alpha-gel switch",
    nameJa: "ユニ アルファゲル スイッチ",
    descriptionEs: "Lápiz mecánico con agarre cómodo y modo KURUTOGA activable.",
    descriptionJa: "やわらかいグリップとクルトガモードを切り替えられるシャープペン。",
    priceClp: "12.000 CLP",
    badge: { es: "Grip cómodo", ja: "握りやすい" },
    image: "https://www.mpuni.co.jp/products/images/products/thm_agel_switch.png",
  },
  {
    id: "graphgear-1000",
    category: "mechanical",
    brand: "Pentel",
    nameEs: "Pentel GraphGear 1000",
    nameJa: "ぺんてる グラフギア1000",
    descriptionEs: "Lápiz mecánico profesional para dibujo técnico, estudio y escritura precisa.",
    descriptionJa: "製図、勉強、精密な筆記に向くプロ仕様シャープペン。",
    priceClp: "14.900 CLP",
    badge: { es: "Técnico", ja: "製図向け" },
    image: "https://www.pentel.co.jp/images/products/MV_graphgear1000_pc.png",
  },
  {
    id: "kurutoga-advance",
    category: "mechanical",
    brand: "uni",
    nameEs: "KURUTOGA Advance",
    nameJa: "クルトガ アドバンス",
    descriptionEs: "KURUTOGA de giro rápido para mantener líneas finas y uniformes.",
    descriptionJa: "細くきれいな線を保ちやすい、回転性能を高めたクルトガ。",
    priceClp: "9.000 CLP",
    badge: { es: "Línea fina", ja: "細字向け" },
    image: "https://www.sozodori.com/cdn/shop/files/Copy-of-DSC03611_45e2359c-d1ce-4db8-af83-da1d12f0fb69.jpg?v=1724766667&width=1000",
  },
  {
    id: "mono-graph-clear",
    category: "mechanical",
    brand: "Tombow",
    nameEs: "MONO graph Clear Color",
    nameJa: "MONO graph クリアカラー",
    descriptionEs: "Lápiz mecánico transparente con goma MONO y estilo ligero.",
    descriptionJa: "MONO消しゴム搭載の、透明感ある軽いデザインのシャープペン。",
    priceClp: "9.000 CLP",
    badge: { es: "Clear", ja: "クリア" },
    image: "https://www.tombow.com/files/2021/03/20210304_1-1-1024x675.jpg",
  },
  {
    id: "mono-graph-fine",
    category: "mechanical",
    brand: "Tombow",
    nameEs: "MONO graph fine",
    nameJa: "MONO graph fine",
    descriptionEs: "Lápiz mecánico MONO de escritura fina para notas cuidadas.",
    descriptionJa: "細かい筆記やきれいなノート作りに向くMONO graphの上位感あるモデル。",
    priceClp: "20.000 CLP",
    badge: { es: "Fine", ja: "細字" },
    image: "https://www.tombow.com/files/2021/03/20210304_1-1-1024x675.jpg",
  },
  {
    id: "kokuyo-campus-pencil-sharp",
    category: "mechanical",
    brand: "KOKUYO",
    nameEs: "KOKUYO Campus pencil sharp",
    nameJa: "KOKUYO Campus 鉛筆シャープ",
    descriptionEs: "Lápiz mecánico con sensación de lápiz para estudio y apuntes.",
    descriptionJa: "鉛筆のように使える、勉強やノート向けのシャープペン。",
    priceClp: "3.000-13.000 CLP",
    badge: { es: "Estudio", ja: "学習用" },
    image: "https://www.kokuyo.com/system/files/SET44292.jpg",
  },
  {
    id: "pilot-kirena-set",
    category: "accessories",
    brand: "PILOT",
    nameEs: "PILOT Kire-na 5-color set",
    nameJa: "PILOT キレーナ 5色セット",
    descriptionEs: "Set de cinco colores para subrayar, organizar notas y decorar agenda.",
    descriptionJa: "ノート整理、手帳、マーキングに使える5色セット。",
    priceClp: "9.900 CLP",
    badge: { es: "Set color", ja: "色セット" },
    image: "https://www.pilot.co.jp/press_release/d02899159a77371e1ce39cbdb1cbbe68cc20a235.jpg",
  },
  {
    id: "plus-mt-fuji-eraser",
    category: "accessories",
    brand: "PLUS",
    nameEs: "PLUS Mt. Fuji eraser",
    nameJa: "PLUS 富士山消しゴム",
    descriptionEs: "Goma japonesa divertida que revela el Monte Fuji con el uso.",
    descriptionJa: "使うほど富士山の形が出てくる、ギフトにも楽しい消しゴム。",
    priceClp: "2.500 CLP",
    badge: { es: "Regalo", ja: "ギフト" },
    image: "https://www.kokuyo.com/system/files/SET44292.jpg",
  },
  {
    id: "kokuyo-gloo-glue",
    category: "accessories",
    brand: "KOKUYO",
    nameEs: "KOKUYO GLOO glue",
    nameJa: "KOKUYO GLOO のり",
    descriptionEs: "Pegamento japonés práctico para cuadernos, manualidades y oficina.",
    descriptionJa: "ノート、工作、仕事に使いやすいKOKUYOのスティックのり。",
    priceClp: "2.000 CLP",
    badge: { es: "Útil", ja: "便利" },
    image: "https://www.kokuyo.com/system/files/SET44292.jpg",
  },
  {
    id: "nylon-mesh-pen-case",
    category: "accessories",
    brand: "KOKUYO / Japan",
    nameEs: "Nylon mesh pen case",
    nameJa: "ナイロンメッシュペンケース",
    descriptionEs: "Estuche liviano y visible para llevar bolígrafos, refills y accesorios.",
    descriptionJa: "ペンや替え芯、小物を見やすく持ち運べる軽いメッシュペンケース。",
    priceClp: "10.000 CLP",
    badge: { es: "Organización", ja: "整理" },
    image: "https://www.kokuyo.com/system/files/SET44292.jpg",
  },
  {
    id: "olfa-perforation-cutter",
    category: "accessories",
    brand: "OLFA",
    nameEs: "OLFA perforation cutter",
    nameJa: "OLFA ミシン目カッター",
    descriptionEs: "Cortador de perforación para tickets, cupones, papel y proyectos creativos.",
    descriptionJa: "チケット、クーポン、紙工作に使えるミシン目カッター。",
    priceClp: "19.900 CLP",
    badge: { es: "Herramienta", ja: "道具" },
    image: "https://www.olfa.co.jp/wordpress/wp-content/uploads/1501648948PRC-3.jpg",
  },
  {
    id: "gel-compatible-refills",
    category: "refills",
    brand: "Zebra / PILOT / uni",
    nameEs: "Recambios gel compatibles",
    nameJa: "ゲルペン対応替え芯",
    descriptionEs: "Recambios para SARASA, Juice up y uni-ball one según compatibilidad.",
    descriptionJa: "SARASA、Juice up、uni-ball one向けの対応替え芯。",
    priceClp: "1.500-2.500 CLP",
    badge: { es: "Recambios", ja: "替え芯" },
    image: "https://www.mpuni.co.jp/products/images/products/SXR-L-7.jpg",
    isGroup: true,
  },
  {
    id: "zento-limited-colors",
    category: "ballpoint",
    brand: "uni",
    nameEs: "uniball ZENTO Standard limited colors",
    nameJa: "ユニボール ZENTO Standard 限定色",
    descriptionEs: "ZENTO Standard en colores limitados para quienes buscan un tono especial.",
    descriptionJa: "ワインレッド、緑、クリームなどの限定色を選べるZENTO Standard。",
    priceClp: "4.000 CLP",
    badge: { es: "Limitado", ja: "限定色" },
    image: "https://www.mpuni.co.jp/products/images/products/thm_uniballzento_zsc.png",
  },
  {
    id: "sarasa-dry-refill",
    category: "refills",
    brand: "Zebra",
    nameEs: "SARASA dry refills",
    nameJa: "サラサドライ 替え芯",
    descriptionEs: "Recambios para SARASA dry en grosores y colores de uso diario.",
    descriptionJa: "サラサドライ用の替え芯。黒・青、0.4mm/0.5mmを確認可能。",
    priceClp: "1.800 CLP",
    badge: { es: "Refill", ja: "替え芯" },
    image: "https://www.zebra.co.jp/global/images/sarasa.png",
  },
  {
    id: "sarasa-clip-refill",
    category: "refills",
    brand: "Zebra",
    nameEs: "SARASA CLIP refills",
    nameJa: "サラサクリップ 替え芯",
    descriptionEs: "Recambio económico para seguir usando cuerpos SARASA CLIP.",
    descriptionJa: "サラサクリップ本体を長く使える低価格替え芯。",
    priceClp: "1.500 CLP",
    badge: { es: "Bajo precio", ja: "低価格" },
    image: "https://www.zebra.co.jp/global/images/sarasa.png",
  },
  {
    id: "jetstream-edge-refill",
    category: "refills",
    brand: "uni",
    nameEs: "JETSTREAM EDGE 0.28 mm refill",
    nameJa: "ジェットストリーム エッジ 0.28mm 替え芯",
    descriptionEs: "Recambio ultrafino para JETSTREAM EDGE, ideal para agenda y letra pequeña.",
    descriptionJa: "手帳や小さい文字に向くJETSTREAM EDGE 0.28mm用替え芯。",
    priceClp: "2.900 CLP",
    badge: { es: "Ultrafino", ja: "超極細" },
    image: "https://www.mpuni.co.jp/news/pressrelease/detail/news_file/file/JETSTREAMEDGE.jpg",
  },
  {
    id: "energel-refill",
    category: "refills",
    brand: "Pentel",
    nameEs: "EnerGel multicolor refills",
    nameJa: "エナージェル多色 替え芯",
    descriptionEs: "Recambios de gel para EnerGel multicolor en colores básicos.",
    descriptionJa: "エナージェル多色用のゲル替え芯。赤・青・黒を確認可能。",
    priceClp: "1.900 CLP",
    badge: { es: "Gel refill", ja: "ゲル替え芯" },
    image: "https://www.pentel.co.jp/images/products/energel_3c_lineup_1.png",
  },
  {
    id: "drgrip-refill",
    category: "refills",
    brand: "PILOT",
    nameEs: "Dr.Grip ballpoint refill",
    nameJa: "ドクターグリップ ボールペン替え芯",
    descriptionEs: "Recambio PILOT para mantener en uso bolígrafos Dr.Grip compatibles.",
    descriptionJa: "対応するドクターグリップを長く使うためのPILOT替え芯。",
    priceClp: "1.800 CLP",
    badge: { es: "Compatible", ja: "対応芯" },
    image: "https://www.pilot.co.jp/press_release/d02899159a77371e1ce39cbdb1cbbe68cc20a235.jpg",
  },
  {
    id: "drgrip-play-balance",
    category: "mechanical",
    brand: "PILOT",
    nameEs: "Dr.Grip Play Balance 0.5 mm",
    nameJa: "ドクターグリップ Play Balance 0.5mm",
    descriptionEs: "Lápiz mecánico ergonómico con balance ajustable para escribir por más tiempo.",
    descriptionJa: "重心バランスを楽しめる、長時間筆記向けのドクターグリップ。",
    priceClp: "11.000 CLP",
    badge: { es: "Ergonómico", ja: "握りやすい" },
    image: "https://www.pilot.co.jp/press_release/d02899159a77371e1ce39cbdb1cbbe68cc20a235.jpg",
  },
  {
    id: "kurutoga-dive-aurora-purple",
    category: "mechanical",
    brand: "uni",
    nameEs: "KURUTOGA DIVE Aurora Purple",
    nameJa: "クルトガ ダイブ Aurora Purple",
    descriptionEs: "KURUTOGA DIVE en color Aurora Purple para colección o regalo premium.",
    descriptionJa: "Aurora PurpleカラーのKURUTOGA DIVE。ギフトやコレクション向け。",
    priceClp: "100.000 CLP",
    badge: { es: "Color especial", ja: "特別色" },
    image: "https://baseec-img-mng.akamaized.net/images/item/origin/021379cc1be855e3056c57e17d7d3b00.jpg?im=Resize%2Cwidth%3D1280%2Ctype%3Dnormal&imformat=generic&q=90",
    isGroup: true,
  },
  {
    id: "kurutoga-metal-sunrise-orange",
    category: "mechanical",
    brand: "uni",
    nameEs: "KURUTOGA Metal Sunrise Orange",
    nameJa: "クルトガ メタル Sunrise Orange",
    descriptionEs: "KURUTOGA Metal de edición limitada con color naranja cálido.",
    descriptionJa: "温かみのあるオレンジ系限定色のクルトガ メタル。",
    priceClp: "45.000 CLP",
    badge: { es: "Limitado", ja: "限定" },
    image: "https://www.mpuni.co.jp/news/images/news/ed954fa14215beabe02a0d83af8c1e3b97353e94.jpg",
  },
  {
    id: "kurutoga-metal-nocturne-black",
    category: "mechanical",
    brand: "uni",
    nameEs: "KURUTOGA Metal Nocturne Black",
    nameJa: "クルトガ メタル Nocturne Black",
    descriptionEs: "KURUTOGA Metal de edición limitada en negro sobrio.",
    descriptionJa: "落ち着いた黒系限定色のクルトガ メタル。",
    priceClp: "45.000 CLP",
    badge: { es: "Limitado", ja: "限定" },
    image: "https://www.mpuni.co.jp/news/images/news/ed954fa14215beabe02a0d83af8c1e3b97353e94.jpg",
  },
  {
    id: "campus-pencil-sharp-set-black",
    category: "mechanical",
    brand: "KOKUYO",
    nameEs: "Campus pencil sharp comparison set black",
    nameJa: "Campus 鉛筆シャープ 書き比べセット 黒",
    descriptionEs: "Set de comparación Campus para probar varias sensaciones de mina.",
    descriptionJa: "複数の芯径や書き味を試せるCampus鉛筆シャープの黒系セット。",
    priceClp: "13.000 CLP",
    badge: { es: "Set", ja: "セット" },
    image: "https://www.kokuyo.com/system/files/SET44292.jpg",
  },
  {
    id: "campus-pencil-sharp-set-white",
    category: "mechanical",
    brand: "KOKUYO",
    nameEs: "Campus pencil sharp comparison set white",
    nameJa: "Campus 鉛筆シャープ 書き比べセット 白",
    descriptionEs: "Set blanco de Campus pencil sharp para estudio y práctica de escritura.",
    descriptionJa: "勉強や書き比べに使いやすいCampus鉛筆シャープの白系セット。",
    priceClp: "13.000 CLP",
    badge: { es: "Set", ja: "セット" },
    image: "https://www.kokuyo.com/system/files/SET44292.jpg",
  },
  {
    id: "uni-leads-07",
    category: "leads",
    brand: "uni",
    nameEs: "uni leads 0.7 mm",
    nameJa: "uni シャー芯 0.7mm",
    descriptionEs: "Minas uni 0.7 mm en HB o B para trazo más firme.",
    descriptionJa: "太めでしっかり書けるuni 0.7mmシャー芯。HB/Bを確認可能。",
    priceClp: "2.500 CLP",
    badge: { es: "0.7 mm", ja: "0.7mm" },
    image: "https://www.mpuni.co.jp/products/images/products/SXR-L-7.jpg",
  },
  {
    id: "sea-design-eraser",
    category: "accessories",
    brand: "Japan",
    nameEs: "Sea design eraser",
    nameJa: "海デザイン消しゴム",
    descriptionEs: "Goma de diseño marino para agregar un detalle simple al pedido.",
    descriptionJa: "海モチーフのデザイン消しゴム。小さなギフトやついで買いに。",
    priceClp: "2.000 CLP",
    badge: { es: "Pequeño regalo", ja: "小物" },
    image: "https://www.kokuyo.com/system/files/SET44292.jpg",
  },
  {
    id: "sushi-keyholder",
    category: "accessories",
    brand: "Japan",
    nameEs: "Sushi keyholder",
    nameJa: "寿司キーホルダー",
    descriptionEs: "Llavero con motivo de sushi para regalo pequeño y compra adicional.",
    descriptionJa: "寿司モチーフのキーホルダー。日本らしい小さなギフトに。",
    priceClp: "4.000 CLP",
    badge: { es: "Regalo", ja: "ギフト" },
    image: "https://www.kokuyo.com/system/files/SET44292.jpg",
  },
  {
    id: "neko-shiba-eraser",
    category: "accessories",
    brand: "Sun-Star",
    nameEs: "Neko / Shiba goma eraser",
    nameJa: "ネコゴム / シバゴム 消しゴム",
    descriptionEs: "Gomas japonesas con diseño de gato o shiba para regalo y escritorio.",
    descriptionJa: "ネコ・シバ犬デザインの日本の消しゴム。机まわりやギフトに。",
    priceClp: "4.000 CLP",
    badge: { es: "Cute", ja: "かわいい" },
    image: "https://www.kokuyo.com/system/files/SET44292.jpg",
    isGroup: true,
  },
  {
    id: "neko-gomu-eraser",
    category: "accessories",
    brand: "Sun-Star",
    nameEs: "Neko Gomu eraser",
    nameJa: "ネコゴム 消しゴム",
    descriptionEs: "Goma japonesa con diseño de gato para escritorio, estudio o regalo pequeño.",
    descriptionJa: "机まわりや小さなギフトに使いやすい、ネコデザインの日本の消しゴム。",
    priceClp: "4.000 CLP",
    badge: { es: "Cute", ja: "かわいい" },
    image: "https://bungu.store/cdn/shop/files/shiba-and-neko-gomu-eraser-sun-star-bungu-447902.jpg?v=1731958266&width=900",
  },
  {
    id: "shiba-gomu-eraser",
    category: "accessories",
    brand: "Sun-Star",
    nameEs: "Shiba Gomu eraser",
    nameJa: "シバゴム 消しゴム",
    descriptionEs: "Goma japonesa con diseño de shiba para completar un set de papelería divertido.",
    descriptionJa: "文具セットに遊び心を足せる、シバ犬デザインの日本の消しゴム。",
    priceClp: "4.000 CLP",
    badge: { es: "Cute", ja: "かわいい" },
    image: "https://bungu.store/cdn/shop/files/shiba-and-neko-gomu-eraser-sun-star-bungu-447902.jpg?v=1731958266&width=900",
  },
  {
    id: "jetstream-single",
    category: "ballpoint",
    brand: "uni",
    nameEs: "JETSTREAM single color",
    nameJa: "ジェットストリーム 単色",
    descriptionEs: "Bolígrafo clásico de uso diario con tinta suave JETSTREAM.",
    descriptionJa: "なめらかなJETSTREAMインクを普段使いできる単色ボールペン。",
    priceClp: "2.500 CLP",
    badge: { es: "Básico", ja: "定番" },
    image: "https://www.mpuni.co.jp/products/images/products/313882000.jpg",
  },
  {
    id: "jetstream-lite-07",
    category: "ballpoint",
    brand: "uni",
    nameEs: "JETSTREAM Lite touch ink 0.7 mm",
    nameJa: "ジェットストリーム Lite touch ink 0.7mm",
    descriptionEs: "Versión 0.7 mm para trazo más firme y visible.",
    descriptionJa: "0.7mmでしっかり見やすく書けるLite touch ink。",
    priceClp: "3.500 CLP",
    badge: { es: "0.7 mm", ja: "0.7mm" },
    image: "https://www.mpuni.co.jp/products/images/products/313882000.jpg",
  },
  {
    id: "jetstream-lite-refill",
    category: "refills",
    brand: "uni",
    nameEs: "JETSTREAM Lite touch refills",
    nameJa: "ジェットストリーム Lite touch 替え芯",
    descriptionEs: "Recambios Lite touch para mantener tu JETSTREAM favorito en uso.",
    descriptionJa: "Lite touch ink本体を長く使うための替え芯。",
    priceClp: "2.300-2.500 CLP",
    badge: { es: "Refill", ja: "替え芯" },
    image: "https://www.mpuni.co.jp/products/images/products/SXR-L-7.jpg",
  },
  {
    id: "uniball-one-refill",
    category: "refills",
    brand: "uni",
    nameEs: "uni-ball one single refills",
    nameJa: "ユニボール ワン 単色替え芯",
    descriptionEs: "Recambios para uni-ball one en puntas finas y colores básicos.",
    descriptionJa: "uni-ball one単色用の替え芯。細字と基本色を確認可能。",
    priceClp: "2.000 CLP",
    badge: { es: "Gel refill", ja: "ゲル替え芯" },
    image: "https://www.mpuni.co.jp/products/feature_images/main/ballpoint_pens/thm_uniballone.png",
  },
  {
    id: "uniball-one-3-refill",
    category: "refills",
    brand: "uni",
    nameEs: "uni-ball one 3 refills",
    nameJa: "ユニボール ワン 3 替え芯",
    descriptionEs: "Recambios para el cuerpo multicolor uni-ball one 3.",
    descriptionJa: "uni-ball one 3の多色本体に使える替え芯。",
    priceClp: "2.500 CLP",
    badge: { es: "Multicolor", ja: "多色用" },
    image: "https://www.mpuni.co.jp/products/feature_images/main/ballpoint_pens/thm_uniballone.png",
  },
  {
    id: "lightwrite-4c-refill",
    category: "refills",
    brand: "Zebra",
    nameEs: "Lightwrite 4C refill 0.7 mm",
    nameJa: "ライトライト 4C 替え芯 0.7mm",
    descriptionEs: "Recambio 4C para cuerpos compactos compatibles.",
    descriptionJa: "対応するコンパクト本体に使える4C規格の替え芯。",
    priceClp: "1.500 CLP",
    badge: { es: "4C", ja: "4C" },
    image: "https://www.zebra.co.jp/images/product/kv/lightwrite-a/main.jpg",
  },
  {
    id: "juice-up-refill",
    category: "refills",
    brand: "PILOT",
    nameEs: "Juice up refill 0.5 mm",
    nameJa: "Juice up 替え芯 0.5mm",
    descriptionEs: "Recambio de gel para Juice up, ideal para seguir usando el cuerpo.",
    descriptionJa: "Juice up本体を長く使うための0.5mmゲル替え芯。",
    priceClp: "2.500 CLP",
    badge: { es: "Juice up", ja: "Juice up" },
    image: "https://www.pilot.co.jp/press_release/d02899159a77371e1ce39cbdb1cbbe68cc20a235.jpg",
  },
  {
    id: "campus-pencil-sharp-basic",
    category: "mechanical",
    brand: "KOKUYO",
    nameEs: "Campus pencil sharp basic",
    nameJa: "Campus 鉛筆シャープ 単品",
    descriptionEs: "Lápiz mecánico individual con sensación de lápiz para estudio.",
    descriptionJa: "鉛筆のような感覚で使えるCampus鉛筆シャープ単品。",
    priceClp: "3.000 CLP",
    badge: { es: "Bajo precio", ja: "低価格" },
    image: "https://www.kokuyo.com/system/files/SET44292.jpg",
  },
  {
    id: "campus-pencil-sharp-mint",
    category: "mechanical",
    brand: "KOKUYO",
    nameEs: "Campus pencil sharp mint 0.3 mm",
    nameJa: "Campus シャープペン 0.3mm ミント",
    descriptionEs: "Versión mint 0.3 mm para notas pequeñas y estudio.",
    descriptionJa: "小さい文字や勉強に使いやすい0.3mmミントカラー。",
    priceClp: "3.000 CLP",
    badge: { es: "Mint", ja: "ミント" },
    image: "https://www.kokuyo.com/system/files/SET44292.jpg",
  },
  {
    id: "pentel-ain-thick-leads",
    category: "leads",
    brand: "Pentel",
    nameEs: "Pentel Ain thick leads 0.9 / 1.3 mm",
    nameJa: "Pentel Ain 太芯 0.9 / 1.3mm",
    descriptionEs: "Minas gruesas para trazo fuerte, estudio y escritura más visible.",
    descriptionJa: "太くはっきり書ける0.9mm/1.3mmのPentel Ainシャー芯。",
    priceClp: "2.500 CLP",
    badge: { es: "Trazo fuerte", ja: "太芯" },
    image: "https://www.pentel.co.jp/images/products/lead_pentel_ain_mainvisual_pc_1.png",
  },
  {
    id: "kurutoga-metal-silent-blue",
    category: "mechanical",
    brand: "uni",
    nameEs: "KURUTOGA Metal Silent Blue",
    nameJa: "クルトガ メタル Silent Blue",
    descriptionEs: "Color normal sobrio del KURUTOGA Metal para escritura diaria premium.",
    descriptionJa: "落ち着いたSilent Blueのクルトガ メタル通常色。",
    priceClp: "40.000 CLP",
    badge: { es: "Metal", ja: "メタル" },
    image: "https://www.mpuni.co.jp/news/images/news/ed954fa14215beabe02a0d83af8c1e3b97353e94.jpg",
  },
  {
    id: "kurutoga-metal-phantom-grey",
    category: "mechanical",
    brand: "uni",
    nameEs: "KURUTOGA Metal Phantom Grey",
    nameJa: "クルトガ メタル Phantom Grey",
    descriptionEs: "Color gris elegante del KURUTOGA Metal para escritorio profesional.",
    descriptionJa: "仕事用にも合わせやすいPhantom Greyのクルトガ メタル。",
    priceClp: "40.000 CLP",
    badge: { es: "Metal", ja: "メタル" },
    image: "https://www.mpuni.co.jp/news/images/news/ed954fa14215beabe02a0d83af8c1e3b97353e94.jpg",
  },
  {
    id: "zento-standard-yellow",
    category: "ballpoint",
    brand: "uni",
    nameEs: "uniball ZENTO Standard amarillo",
    nameJa: "ユニボール ZENTO Standard 黄",
    descriptionEs: "ZENTO Standard en color amarillo para marcar agenda, estudio y notas.",
    descriptionJa: "手帳やノートの色分けに使いやすい黄色のZENTO Standard。",
    priceClp: "3.800 CLP",
    badge: { es: "Color", ja: "色あり" },
    image: "https://www.mpuni.co.jp/products/images/products/thm_uniballzento_zsc.png",
  },
  {
    id: "zento-standard-orange",
    category: "ballpoint",
    brand: "uni",
    nameEs: "uniball ZENTO Standard naranjo",
    nameJa: "ユニボール ZENTO Standard オレンジ",
    descriptionEs: "Rollerball ZENTO Standard en naranjo, ideal para destacar sin exceso.",
    descriptionJa: "目立ちすぎず色分けしやすいオレンジのZENTO Standard。",
    priceClp: "3.800 CLP",
    badge: { es: "Color", ja: "色あり" },
    image: "https://www.mpuni.co.jp/products/images/products/thm_uniballzento_zsc.png",
  },
  {
    id: "zento-standard-purple",
    category: "ballpoint",
    brand: "uni",
    nameEs: "uniball ZENTO Standard morado",
    nameJa: "ユニボール ZENTO Standard 紫",
    descriptionEs: "Color morado suave para cartas, planner y escritura con personalidad.",
    descriptionJa: "手帳やメモに個性を出せる紫のZENTO Standard。",
    priceClp: "3.800 CLP",
    badge: { es: "Color", ja: "色あり" },
    image: "https://www.mpuni.co.jp/products/images/products/thm_uniballzento_zsc.png",
  },
  {
    id: "zento-limited-wine-red",
    category: "ballpoint",
    brand: "uni",
    nameEs: "uniball ZENTO limitado wine red",
    nameJa: "ユニボール ZENTO 限定 ワインレッド",
    descriptionEs: "Color limitado wine red para quienes quieren un ZENTO más especial.",
    descriptionJa: "少し特別感のあるワインレッドのZENTO限定色。",
    priceClp: "4.000 CLP",
    badge: { es: "Limitado", ja: "限定色" },
    image: "https://www.mpuni.co.jp/products/images/products/thm_uniballzento_zsc.png",
  },
  {
    id: "zento-limited-green",
    category: "ballpoint",
    brand: "uni",
    nameEs: "uniball ZENTO limitado green",
    nameJa: "ユニボール ZENTO 限定 グリーン",
    descriptionEs: "ZENTO limitado en verde para notas, estudio y coleccion.",
    descriptionJa: "ノートや勉強にも合わせやすいグリーンのZENTO限定色。",
    priceClp: "4.000 CLP",
    badge: { es: "Limitado", ja: "限定色" },
    image: "https://www.mpuni.co.jp/products/images/products/thm_uniballzento_zsc.png",
  },
  {
    id: "zento-limited-cream",
    category: "ballpoint",
    brand: "uni",
    nameEs: "uniball ZENTO limitado cream",
    nameJa: "ユニボール ZENTO 限定 クリーム",
    descriptionEs: "Color cream de tono suave para un estuche claro y elegante.",
    descriptionJa: "やさしい雰囲気の筆箱に合わせやすいクリーム系ZENTO限定色。",
    priceClp: "4.000 CLP",
    badge: { es: "Limitado", ja: "限定色" },
    image: "https://www.mpuni.co.jp/products/images/products/thm_uniballzento_zsc.png",
  },
  {
    id: "kurutoga-ks-03",
    category: "mechanical",
    brand: "uni",
    nameEs: "KURUTOGA KS 0.3 mm",
    nameJa: "クルトガ KS 0.3mm",
    descriptionEs: "KURUTOGA KS de punta fina para apuntes pequeños y escritura precisa.",
    descriptionJa: "小さい文字や細かなノートに向く0.3mmのクルトガKS。",
    priceClp: "8.900 CLP",
    badge: { es: "0.3 mm", ja: "0.3mm" },
    image: "https://www.mpuni.co.jp/products/images/products/3eb0c5b8e64e7c7f42cee11e63c979eb51257b43.png",
  },
  {
    id: "kurutoga-ks-green",
    category: "mechanical",
    brand: "uni",
    nameEs: "KURUTOGA KS green 0.5 mm",
    nameJa: "クルトガ KS グリーン 0.5mm",
    descriptionEs: "Color verde sobrio con mecanismo KURUTOGA para uso diario.",
    descriptionJa: "普段使いしやすいグリーン軸の0.5mmクルトガKS。",
    priceClp: "8.900 CLP",
    badge: { es: "0.5 mm", ja: "0.5mm" },
    image: "https://www.mpuni.co.jp/products/images/products/3eb0c5b8e64e7c7f42cee11e63c979eb51257b43.png",
  },
  {
    id: "smash-03",
    category: "mechanical",
    brand: "Pentel",
    nameEs: "Pentel SMASH 0.3 mm",
    nameJa: "ぺんてる SMASH 0.3mm",
    descriptionEs: "SMASH de 0.3 mm para escritura fina, estudio y dibujo preciso.",
    descriptionJa: "細かい筆記や勉強、製図寄りの用途に使いやすいSMASH 0.3mm。",
    priceClp: "14.000 CLP",
    badge: { es: "Fino", ja: "細字" },
    image: "https://www.pentel.co.jp/images/products/smash_mainvisual_pc_1.jpg",
  },
  {
    id: "orenznero-02",
    category: "mechanical",
    brand: "Pentel",
    nameEs: "Pentel Orenznero 0.2 mm",
    nameJa: "ぺんてる オレンズネロ 0.2mm",
    descriptionEs: "Orenznero ultrafino para escritura muy pequeña y controlada.",
    descriptionJa: "極細の文字をコントロールして書きたい人向けのオレンズネロ0.2mm。",
    priceClp: "40.000 CLP",
    badge: { es: "0.2 mm", ja: "0.2mm" },
    image: "https://www.pentel.co.jp/images/products/ORENZNERO_mainvisual_pc-1.jpg",
    isGroup: true,
  },
  {
    id: "orenznero-03",
    category: "mechanical",
    brand: "Pentel",
    nameEs: "Pentel Orenznero 0.3 mm",
    nameJa: "ぺんてる オレンズネロ 0.3mm",
    descriptionEs: "Orenznero 0.3 mm con sensación premium para apuntes finos.",
    descriptionJa: "細字のノートや勉強に使いやすいプレミアムシャープ、オレンズネロ0.3mm。",
    priceClp: "40.000 CLP",
    badge: { es: "0.3 mm", ja: "0.3mm" },
    image: "https://www.pentel.co.jp/images/products/ORENZNERO_mainvisual_pc-1.jpg",
    isGroup: true,
  },
  {
    id: "orenznero-05",
    category: "mechanical",
    brand: "Pentel",
    nameEs: "Pentel Orenznero 0.5 mm",
    nameJa: "ぺんてる オレンズネロ 0.5mm",
    descriptionEs: "Orenznero 0.5 mm para escritura diaria con cuerpo premium.",
    descriptionJa: "日常筆記にも取り入れやすい0.5mmのオレンズネロ。",
    priceClp: "40.000 CLP",
    badge: { es: "0.5 mm", ja: "0.5mm" },
    image: "https://www.pentel.co.jp/images/products/ORENZNERO_mainvisual_pc-1.jpg",
    isGroup: true,
  },
  {
    id: "airstep-limited",
    category: "mechanical",
    brand: "PILOT",
    nameEs: "PILOT AirStep limitado",
    nameJa: "PILOT AirStep 限定モデル",
    descriptionEs: "AirStep edición limitada con agarre cómodo para estudio prolongado.",
    descriptionJa: "長時間の勉強にも使いやすい、PILOT AirStepの限定モデル。",
    priceClp: "7.500 CLP",
    badge: { es: "Limitado", ja: "限定" },
    image: "https://www.pilot.co.jp/press_release/ea7d236ca746fe85e9416a65e41d921b88369ab6.jpg",
  },
  {
    id: "airstep-standard",
    category: "mechanical",
    brand: "PILOT",
    nameEs: "PILOT AirStep standard",
    nameJa: "PILOT AirStep 通常モデル",
    descriptionEs: "AirStep estándar, cómodo y accesible para apuntes de todos los días.",
    descriptionJa: "毎日のノートや勉強に使いやすいAirStep通常モデル。",
    priceClp: "6.900 CLP",
    badge: { es: "Estudio", ja: "勉強向け" },
    image: "https://www.pilot.co.jp/press_release/ea7d236ca746fe85e9416a65e41d921b88369ab6.jpg",
  },
  {
    id: "zento-signature-limited",
    category: "ballpoint",
    brand: "uni",
    nameEs: "uniball ZENTO Signature limitado",
    nameJa: "ユニボール ZENTO シグニチャー 限定",
    descriptionEs: "Modelo Signature de edicion limitada para regalo o coleccion.",
    descriptionJa: "ギフトやコレクション向けのZENTO Signature限定モデル。",
    priceClp: "80.000 CLP",
    badge: { es: "Limitado", ja: "限定" },
    image: "https://item-shopping.c.yimg.jp/i/n/hanko-otobe_ub-zht-05",
    isGroup: true,
  },
  {
    id: "zento-signature-038",
    category: "ballpoint",
    brand: "uni",
    nameEs: "uniball ZENTO Signature 0.38 mm",
    nameJa: "ユニボール ZENTO シグニチャー 0.38mm",
    descriptionEs: "Signature de punta fina para letra pequena y notas cuidadas.",
    descriptionJa: "小さな文字や丁寧なノートに向く0.38mmのSignature。",
    priceClp: "70.000 CLP",
    badge: { es: "0.38 mm", ja: "0.38mm" },
    image: "https://shopping.jreast.co.jp/html/upload/save_image/shop/17456/product/4778690/image_l.jpg",
    isGroup: true,
  },
  {
    id: "zento-signature-05",
    category: "ballpoint",
    brand: "uni",
    nameEs: "uniball ZENTO Signature 0.5 mm",
    nameJa: "ユニボール ZENTO シグニチャー 0.5mm",
    descriptionEs: "Signature equilibrado para escritura diaria premium.",
    descriptionJa: "日常筆記にも使いやすいバランスの0.5mm Signature。",
    priceClp: "70.000 CLP",
    badge: { es: "0.5 mm", ja: "0.5mm" },
    image: "https://item-shopping.c.yimg.jp/i/n/shijimi-ya_ub-zh-05-01",
    isGroup: true,
  },
  {
    id: "zento-signature-07",
    category: "ballpoint",
    brand: "uni",
    nameEs: "uniball ZENTO Signature 0.7 mm",
    nameJa: "ユニボール ZENTO シグニチャー 0.7mm",
    descriptionEs: "Signature de trazo mas visible para firmas y escritura amplia.",
    descriptionJa: "サインや見やすい筆記に向く0.7mmのSignature。",
    priceClp: "70.000 CLP",
    badge: { es: "0.7 mm", ja: "0.7mm" },
    image: "https://item-shopping.c.yimg.jp/i/n/shijimi-ya_ub-zh-07-01",
    isGroup: true,
  },
  {
    id: "sarasa-clip-limited",
    category: "ballpoint",
    brand: "Zebra",
    nameEs: "SARASA CLIP limitado",
    nameJa: "サラサクリップ 限定",
    descriptionEs: "SARASA CLIP de lote limitado, facil de sumar por color.",
    descriptionJa: "色違いで追加しやすい限定系サラサクリップ。",
    priceClp: "2.000 CLP",
    badge: { es: "Limitado", ja: "限定" },
    image: "https://www.zebra.co.jp/pro/images/JJ15-BK.jpg",
  },
  {
    id: "sarasa-dry-04",
    category: "ballpoint",
    brand: "Zebra",
    nameEs: "SARASA dry 0.4 mm",
    nameJa: "サラサドライ 0.4mm",
    descriptionEs: "Gel de secado rapido con punta fina para notas limpias.",
    descriptionJa: "きれいなノートに向く0.4mmの速乾ゲル。",
    priceClp: "2.900 CLP",
    badge: { es: "Secado rapido", ja: "速乾" },
    image: "https://www.zebra.co.jp/pro/images/JJS31-BK.jpg",
  },
  {
    id: "sarasa-dry-05",
    category: "ballpoint",
    brand: "Zebra",
    nameEs: "SARASA dry 0.5 mm",
    nameJa: "サラサドライ 0.5mm",
    descriptionEs: "Gel de secado rapido con trazo practico para estudio.",
    descriptionJa: "勉強や普段使いに便利な0.5mmの速乾ゲル。",
    priceClp: "2.900 CLP",
    badge: { es: "Secado rapido", ja: "速乾" },
    image: "https://www.zebra.co.jp/pro/images/JJ31-BK.jpg",
  },
  {
    id: "juice-up-black",
    category: "ballpoint",
    brand: "PILOT",
    nameEs: "Juice up 0.5 mm negro",
    nameJa: "ジュースアップ 0.5mm 黒",
    descriptionEs: "Gel negro de linea nitida para apuntes y escritura diaria.",
    descriptionJa: "ノートや普段使いに向く黒インクのJuice up 0.5mm。",
    priceClp: "3.500 CLP",
    badge: { es: "Negro", ja: "黒" },
    image: "https://www.pilot.co.jp/press_release/d02899159a77371e1ce39cbdb1cbbe68cc20a235.jpg",
  },
  {
    id: "juice-up-red",
    category: "ballpoint",
    brand: "PILOT",
    nameEs: "Juice up 0.5 mm rojo",
    nameJa: "ジュースアップ 0.5mm 赤",
    descriptionEs: "Gel rojo de linea fina para correcciones, agenda y estudio.",
    descriptionJa: "添削、手帳、勉強に使いやすい赤インクのJuice up。",
    priceClp: "3.500 CLP",
    badge: { es: "Rojo", ja: "赤" },
    image: "https://www.pilot.co.jp/press_release/d02899159a77371e1ce39cbdb1cbbe68cc20a235.jpg",
  },
  {
    id: "jetstream-refill-single-07",
    category: "refills",
    brand: "uni",
    nameEs: "Recambio JETSTREAM single 0.7 mm",
    nameJa: "ジェットストリーム単色 替え芯 0.7mm",
    descriptionEs: "Recambio para JETSTREAM single, color a confirmar por mensaje.",
    descriptionJa: "ジェットストリーム単色用0.7mm替え芯。色はメッセージで確認。",
    priceClp: "1.900 CLP",
    badge: { es: "Single", ja: "単色用" },
    image: "https://www.mpuni.co.jp/products/images/products/05c4001a1c886856e09e18d281d726941dc0f91e.jpg",
  },
  {
    id: "jetstream-multicolor-refill-038",
    category: "refills",
    brand: "uni",
    nameEs: "Recambio JETSTREAM multicolor 0.38 mm",
    nameJa: "ジェットストリーム多色 替え芯 0.38mm",
    descriptionEs: "Refill 0.38 mm para cuerpos JETSTREAM multicolor.",
    descriptionJa: "ジェットストリーム多色本体用の0.38mm替え芯。",
    priceClp: "2.000 CLP",
    badge: { es: "0.38 mm", ja: "0.38mm" },
    image: "https://www.mpuni.co.jp/products/images/products/9ee2d94232349283106f3d438f0ff17dea37c0a2.png",
  },
  {
    id: "jetstream-multicolor-refill-07",
    category: "refills",
    brand: "uni",
    nameEs: "Recambio JETSTREAM multicolor 0.7 mm",
    nameJa: "ジェットストリーム多色 替え芯 0.7mm",
    descriptionEs: "Refill 0.7 mm para cuerpos JETSTREAM multicolor.",
    descriptionJa: "ジェットストリーム多色本体用の0.7mm替え芯。",
    priceClp: "2.000 CLP",
    badge: { es: "0.7 mm", ja: "0.7mm" },
    image: "https://www.mpuni.co.jp/products/images/products/SXR-L-7.jpg",
  },
  {
    id: "zento-refill-038",
    category: "refills",
    brand: "uni",
    nameEs: "Recambio ZENTO 0.38 mm negro",
    nameJa: "ZENTO 替え芯 0.38mm 黒",
    descriptionEs: "Refill 0.38 mm negro para ZENTO; compatibilidad se confirma por mensaje.",
    descriptionJa: "ZENTO用0.38mm黒替え芯。対応本体はメッセージで確認。",
    priceClp: "2.000 CLP",
    badge: { es: "ZENTO", ja: "ZENTO" },
    image: "https://www.mpuni.co.jp/products/images/products/UBR-Z-38.jpg",
  },
  {
    id: "zento-refill-05",
    category: "refills",
    brand: "uni",
    nameEs: "Recambio ZENTO 0.5 mm negro",
    nameJa: "ZENTO 替え芯 0.5mm 黒",
    descriptionEs: "Refill 0.5 mm negro para ZENTO Standard, Flow o Signature compatible.",
    descriptionJa: "対応するZENTO本体に使える0.5mm黒替え芯。",
    priceClp: "2.000 CLP",
    badge: { es: "ZENTO", ja: "ZENTO" },
    image: "https://www.mpuni.co.jp/products/images/products/UBR-Z-05.jpg",
  },
  {
    id: "juice-up-refill-red",
    category: "refills",
    brand: "PILOT",
    nameEs: "Juice up refill 0.5 mm rojo",
    nameJa: "Juice up 替え芯 0.5mm 赤",
    descriptionEs: "Recambio rojo para Juice up 0.5 mm.",
    descriptionJa: "Juice up 0.5mm用の赤替え芯。",
    priceClp: "2.500 CLP",
    badge: { es: "Rojo", ja: "赤" },
    image: "https://www.pilot.co.jp/press_release/d02899159a77371e1ce39cbdb1cbbe68cc20a235.jpg",
  },
  {
    id: "zento-standard-black",
    category: "ballpoint",
    brand: "uni",
    nameEs: "uniball ZENTO Standard negro",
    nameJa: "ユニボール ZENTO Standard 黒",
    descriptionEs: "ZENTO Standard negro para escritura diaria con tinta suave y sobria.",
    descriptionJa: "毎日の筆記に使いやすい黒のZENTO Standard。",
    priceClp: "3.800 CLP",
    badge: { es: "Negro", ja: "黒" },
    image: "https://www.mpuni.co.jp/products/images/products/thm_uniballzento_zsc.png",
  },
  {
    id: "zento-standard-red",
    category: "ballpoint",
    brand: "uni",
    nameEs: "uniball ZENTO Standard rojo",
    nameJa: "ユニボール ZENTO Standard 赤",
    descriptionEs: "ZENTO Standard rojo para correcciones, agenda y notas destacadas.",
    descriptionJa: "添削、手帳、目印に使いやすい赤のZENTO Standard。",
    priceClp: "3.800 CLP",
    badge: { es: "Rojo", ja: "赤" },
    image: "https://www.mpuni.co.jp/products/images/products/thm_uniballzento_zsc.png",
  },
  {
    id: "uniball-one-038-black",
    category: "ballpoint",
    brand: "uni",
    nameEs: "uni-ball one 0.38 mm negro",
    nameJa: "ユニボール ワン 0.38mm 黒",
    descriptionEs: "Gel negro de punta fina para letras pequenas, agenda y apuntes limpios.",
    descriptionJa: "小さい文字、手帳、きれいなノートに向く0.38mm黒ゲル。",
    priceClp: "2.000 CLP",
    badge: { es: "0.38 mm", ja: "0.38mm" },
    image: "https://www.mpuni.co.jp/products/feature_images/main/ballpoint_pens/thm_uniballone.png",
  },
  {
    id: "uniball-one-05-black",
    category: "ballpoint",
    brand: "uni",
    nameEs: "uni-ball one 0.5 mm negro",
    nameJa: "ユニボール ワン 0.5mm 黒",
    descriptionEs: "Gel negro de trazo nitido para estudio, trabajo y escritura diaria.",
    descriptionJa: "勉強、仕事、普段使いに向く0.5mm黒ゲル。",
    priceClp: "2.000 CLP",
    badge: { es: "Negro", ja: "黒" },
    image: "https://www.mpuni.co.jp/products/feature_images/main/ballpoint_pens/thm_uniballone.png",
  },
  {
    id: "uniball-one-05-blue",
    category: "ballpoint",
    brand: "uni",
    nameEs: "uni-ball one 0.5 mm azul",
    nameJa: "ユニボール ワン 0.5mm 青",
    descriptionEs: "Gel azul para apuntes, correcciones suaves y color de estudio.",
    descriptionJa: "ノートや勉強の色分けに使いやすい0.5mm青ゲル。",
    priceClp: "2.000 CLP",
    badge: { es: "Azul", ja: "青" },
    image: "https://www.mpuni.co.jp/products/feature_images/main/ballpoint_pens/thm_uniballone.png",
  },
  {
    id: "uniball-one-05-red",
    category: "ballpoint",
    brand: "uni",
    nameEs: "uni-ball one 0.5 mm rojo",
    nameJa: "ユニボール ワン 0.5mm 赤",
    descriptionEs: "Gel rojo para estudiar, marcar agenda y revisar apuntes.",
    descriptionJa: "勉強、手帳、見直しに使いやすい0.5mm赤ゲル。",
    priceClp: "2.000 CLP",
    badge: { es: "Rojo", ja: "赤" },
    image: "https://www.mpuni.co.jp/products/feature_images/main/ballpoint_pens/thm_uniballone.png",
  },
  {
    id: "kurutoga-advance-03",
    category: "mechanical",
    brand: "uni",
    nameEs: "KURUTOGA Advance 0.3 mm",
    nameJa: "クルトガ アドバンス 0.3mm",
    descriptionEs: "KURUTOGA Advance de punta fina para apuntes pequenos y lineas limpias.",
    descriptionJa: "小さい文字や細い線をきれいに書きたい人向けの0.3mmアドバンス。",
    priceClp: "9.000 CLP",
    badge: { es: "0.3 mm", ja: "0.3mm" },
    image: "https://www.sozodori.com/cdn/shop/files/Copy-of-DSC03611_45e2359c-d1ce-4db8-af83-da1d12f0fb69.jpg?v=1724766667&width=1000",
  },
  {
    id: "campus-pencil-sharp-03-black",
    category: "mechanical",
    brand: "KOKUYO",
    nameEs: "Campus pencil sharp 0.3 mm negro",
    nameJa: "Campus 鉛筆シャープ 0.3mm 黒",
    descriptionEs: "Campus de 0.3 mm negro para escritura pequena y estudio.",
    descriptionJa: "小さい文字や勉強に使いやすい黒の0.3mm Campus鉛筆シャープ。",
    priceClp: "3.000 CLP",
    badge: { es: "0.3 mm", ja: "0.3mm" },
    image: "https://www.kokuyo.com/system/files/SET44292.jpg",
  },
  {
    id: "campus-pencil-sharp-03-white",
    category: "mechanical",
    brand: "KOKUYO",
    nameEs: "Campus pencil sharp 0.3 mm blanco",
    nameJa: "Campus 鉛筆シャープ 0.3mm 白",
    descriptionEs: "Campus blanco de 0.3 mm, limpio y facil de sumar al estuche.",
    descriptionJa: "筆箱に合わせやすい白の0.3mm Campus鉛筆シャープ。",
    priceClp: "3.000 CLP",
    badge: { es: "Blanco", ja: "白" },
    image: "https://www.kokuyo.com/system/files/SET44292.jpg",
  },
  {
    id: "campus-pencil-sharp-05-black",
    category: "mechanical",
    brand: "KOKUYO",
    nameEs: "Campus pencil sharp 0.5 mm negro",
    nameJa: "Campus 鉛筆シャープ 0.5mm 黒",
    descriptionEs: "Campus negro de 0.5 mm para estudio diario y notas largas.",
    descriptionJa: "毎日の勉強や長いノートに使いやすい黒の0.5mm Campus鉛筆シャープ。",
    priceClp: "3.000 CLP",
    badge: { es: "0.5 mm", ja: "0.5mm" },
    image: "https://www.kokuyo.com/system/files/SET44292.jpg",
  },
  {
    id: "campus-pencil-sharp-05-white",
    category: "mechanical",
    brand: "KOKUYO",
    nameEs: "Campus pencil sharp 0.5 mm blanco",
    nameJa: "Campus 鉛筆シャープ 0.5mm 白",
    descriptionEs: "Campus blanco de 0.5 mm con sensacion cercana al lapiz.",
    descriptionJa: "鉛筆に近い感覚で使える白の0.5mm Campus鉛筆シャープ。",
    priceClp: "3.000 CLP",
    badge: { es: "Blanco", ja: "白" },
    image: "https://www.kokuyo.com/system/files/SET44292.jpg",
  },
  {
    id: "pentel-ain-02-hb",
    category: "leads",
    brand: "Pentel",
    nameEs: "Pentel Ain 0.2 mm HB",
    nameJa: "Pentel Ain 0.2mm HB",
    descriptionEs: "Minas Ain ultrafinas 0.2 mm HB para escritura muy pequena.",
    descriptionJa: "極細筆記に使える0.2mm HBのPentel Ainシャー芯。",
    priceClp: "2.500 CLP",
    badge: { es: "0.2 HB", ja: "0.2 HB" },
    image: "https://www.pentel.co.jp/images/products/lead_pentel_ain_mainvisual_pc_1.png",
  },
  {
    id: "pentel-ain-02-b",
    category: "leads",
    brand: "Pentel",
    nameEs: "Pentel Ain 0.2 mm B",
    nameJa: "Pentel Ain 0.2mm B",
    descriptionEs: "Minas Ain 0.2 mm B para trazo fino con tono mas oscuro.",
    descriptionJa: "細い線でも少し濃く書きたい人向けの0.2mm B。",
    priceClp: "2.500 CLP",
    badge: { es: "0.2 B", ja: "0.2 B" },
    image: "https://www.pentel.co.jp/images/products/lead_pentel_ain_mainvisual_pc_1.png",
  },
  {
    id: "pentel-ain-03-hb",
    category: "leads",
    brand: "Pentel",
    nameEs: "Pentel Ain 0.3 mm HB",
    nameJa: "Pentel Ain 0.3mm HB",
    descriptionEs: "Minas Ain 0.3 mm HB para apuntes precisos y lineas finas.",
    descriptionJa: "細かいノートや精密な筆記に使いやすい0.3mm HB。",
    priceClp: "2.500 CLP",
    badge: { es: "0.3 HB", ja: "0.3 HB" },
    image: "https://www.pentel.co.jp/images/products/lead_pentel_ain_mainvisual_pc_1.png",
  },
  {
    id: "pentel-ain-03-b",
    category: "leads",
    brand: "Pentel",
    nameEs: "Pentel Ain 0.3 mm B",
    nameJa: "Pentel Ain 0.3mm B",
    descriptionEs: "Minas Ain 0.3 mm B para trazo fino y un poco mas oscuro.",
    descriptionJa: "細字でも濃さを出したい人向けの0.3mm B。",
    priceClp: "2.500 CLP",
    badge: { es: "0.3 B", ja: "0.3 B" },
    image: "https://www.pentel.co.jp/images/products/lead_pentel_ain_mainvisual_pc_1.png",
  },
  {
    id: "pentel-ain-05-hb",
    category: "leads",
    brand: "Pentel",
    nameEs: "Pentel Ain 0.5 mm HB",
    nameJa: "Pentel Ain 0.5mm HB",
    descriptionEs: "Minas Ain 0.5 mm HB, el grosor equilibrado para uso diario.",
    descriptionJa: "普段使いに一番合わせやすい0.5mm HBのシャー芯。",
    priceClp: "2.500 CLP",
    badge: { es: "0.5 HB", ja: "0.5 HB" },
    image: "https://www.pentel.co.jp/images/products/lead_pentel_ain_mainvisual_pc_1.png",
  },
  {
    id: "pentel-ain-05-b",
    category: "leads",
    brand: "Pentel",
    nameEs: "Pentel Ain 0.5 mm B",
    nameJa: "Pentel Ain 0.5mm B",
    descriptionEs: "Minas Ain 0.5 mm B para una linea mas marcada y suave.",
    descriptionJa: "少し濃く、なめらかに書きたい人向けの0.5mm B。",
    priceClp: "2.500 CLP",
    badge: { es: "0.5 B", ja: "0.5 B" },
    image: "https://www.pentel.co.jp/images/products/lead_pentel_ain_mainvisual_pc_1.png",
  },
  {
    id: "pentel-ain-09-hb",
    category: "leads",
    brand: "Pentel",
    nameEs: "Pentel Ain 0.9 mm HB",
    nameJa: "Pentel Ain 0.9mm HB",
    descriptionEs: "Minas Ain 0.9 mm HB para escritura visible y trazo fuerte.",
    descriptionJa: "見やすく太めに書ける0.9mm HBのシャー芯。",
    priceClp: "2.500 CLP",
    badge: { es: "0.9 HB", ja: "0.9 HB" },
    image: "https://www.pentel.co.jp/images/products/lead_pentel_ain_mainvisual_pc_1.png",
  },
  {
    id: "pentel-ain-09-b",
    category: "leads",
    brand: "Pentel",
    nameEs: "Pentel Ain 0.9 mm B",
    nameJa: "Pentel Ain 0.9mm B",
    descriptionEs: "Minas Ain 0.9 mm B para lineas gruesas y oscuras.",
    descriptionJa: "太く濃い線で書きたい人向けの0.9mm B。",
    priceClp: "2.500 CLP",
    badge: { es: "0.9 B", ja: "0.9 B" },
    image: "https://www.pentel.co.jp/images/products/lead_pentel_ain_mainvisual_pc_1.png",
  },
  {
    id: "pentel-ain-13-hb",
    category: "leads",
    brand: "Pentel",
    nameEs: "Pentel Ain 1.3 mm HB",
    nameJa: "Pentel Ain 1.3mm HB",
    descriptionEs: "Minas Ain 1.3 mm HB para letras grandes, bocetos y estudio.",
    descriptionJa: "大きな文字、ラフ描き、勉強に使いやすい1.3mm HB。",
    priceClp: "2.500 CLP",
    badge: { es: "1.3 HB", ja: "1.3 HB" },
    image: "https://www.pentel.co.jp/images/products/lead_pentel_ain_mainvisual_pc_1.png",
  },
  {
    id: "pentel-ain-13-b",
    category: "leads",
    brand: "Pentel",
    nameEs: "Pentel Ain 1.3 mm B",
    nameJa: "Pentel Ain 1.3mm B",
    descriptionEs: "Minas Ain 1.3 mm B para trazo grueso, suave y muy visible.",
    descriptionJa: "太く濃く、やわらかい線で書きたい人向けの1.3mm B。",
    priceClp: "2.500 CLP",
    badge: { es: "1.3 B", ja: "1.3 B" },
    image: "https://www.pentel.co.jp/images/products/lead_pentel_ain_mainvisual_pc_1.png",
  },
  {
    id: "uni-leads-07-hb",
    category: "leads",
    brand: "uni",
    nameEs: "uni leads 0.7 mm HB",
    nameJa: "uni シャー芯 0.7mm HB",
    descriptionEs: "Minas uni 0.7 mm HB para quienes quieren un trazo mas visible.",
    descriptionJa: "少し見やすい太さで書きたい人向けのuni 0.7mm HB芯。",
    priceClp: "2.500 CLP",
    badge: { es: "0.7 HB", ja: "0.7 HB" },
    image: "https://tacto-studio.com/cdn/shop/products/UN722NDCBL_uni_nanodia_colour_leads_0_7mm_blue_c920b9e9-1f91-49d9-9100-0ce1cceda57d.jpg?v=1698989505",
  },
  {
    id: "uni-leads-07-b",
    category: "leads",
    brand: "uni",
    nameEs: "uni leads 0.7 mm B",
    nameJa: "uni シャー芯 0.7mm B",
    descriptionEs: "Minas uni 0.7 mm B para trazo mas oscuro y suave.",
    descriptionJa: "0.7mmで少し濃く、なめらかに書きたい人向けのB芯。",
    priceClp: "2.500 CLP",
    badge: { es: "0.7 B", ja: "0.7 B" },
    image: "https://tacto-studio.com/cdn/shop/products/UN722NDCBL_uni_nanodia_colour_leads_0_7mm_blue_c920b9e9-1f91-49d9-9100-0ce1cceda57d.jpg?v=1698989505",
  },
  {
    id: "zento-refill-038-blue",
    category: "refills",
    brand: "uni",
    nameEs: "Recambio ZENTO 0.38 mm azul",
    nameJa: "ZENTO 替え芯 0.38mm 青",
    descriptionEs: "Refill ZENTO 0.38 mm azul para escritura fina y notas de color.",
    descriptionJa: "細字の色分けに使いやすいZENTO 0.38mm青替え芯。",
    priceClp: "2.000 CLP",
    badge: { es: "Azul", ja: "青" },
    image: "https://www.mpuni.co.jp/products/images/products/UBR-Z-38.jpg",
  },
  {
    id: "zento-refill-05-blue",
    category: "refills",
    brand: "uni",
    nameEs: "Recambio ZENTO 0.5 mm azul",
    nameJa: "ZENTO 替え芯 0.5mm 青",
    descriptionEs: "Refill ZENTO 0.5 mm azul para cuerpo compatible ZENTO.",
    descriptionJa: "対応するZENTO本体に使える0.5mm青替え芯。",
    priceClp: "2.000 CLP",
    badge: { es: "Azul", ja: "青" },
    image: "https://www.mpuni.co.jp/products/images/products/UBR-Z-05.jpg",
  },
  {
    id: "zento-refill-038-red",
    category: "refills",
    brand: "uni",
    nameEs: "Recambio ZENTO 0.38 mm rojo",
    nameJa: "ZENTO 替え芯 0.38mm 赤",
    descriptionEs: "Refill ZENTO 0.38 mm rojo para correcciones, agenda y notas finas.",
    descriptionJa: "添削、手帳、細かな色分けに使いやすいZENTO 0.38mm赤替え芯。",
    priceClp: "2.000 CLP",
    badge: { es: "Rojo", ja: "赤" },
    image: "https://www.mpuni.co.jp/products/images/products/UBR-Z-38.jpg",
  },
  {
    id: "zento-refill-05-red",
    category: "refills",
    brand: "uni",
    nameEs: "Recambio ZENTO 0.5 mm rojo",
    nameJa: "ZENTO 替え芯 0.5mm 赤",
    descriptionEs: "Refill ZENTO 0.5 mm rojo para cuerpo compatible ZENTO.",
    descriptionJa: "対応するZENTO本体に使える0.5mm赤替え芯。",
    priceClp: "2.000 CLP",
    badge: { es: "Rojo", ja: "赤" },
    image: "https://www.mpuni.co.jp/products/images/products/UBR-Z-05.jpg",
  },
  {
    id: "zento-refill-07-black",
    category: "refills",
    brand: "uni",
    nameEs: "Recambio ZENTO 0.7 mm negro",
    nameJa: "ZENTO 替え芯 0.7mm 黒",
    descriptionEs: "Refill ZENTO 0.7 mm negro para trazo mas visible.",
    descriptionJa: "見やすい線で書きたい人向けのZENTO 0.7mm黒替え芯。",
    priceClp: "2.000 CLP",
    badge: { es: "0.7 mm", ja: "0.7mm" },
    image: "https://www.mpuni.co.jp/products/images/products/b241accc45aa5f1f6807178e161d45decc713c7f.png",
  },
  {
    id: "jetstream-multicolor-refill-038-black",
    category: "refills",
    brand: "uni",
    nameEs: "JETSTREAM multicolor refill 0.38 mm negro",
    nameJa: "ジェットストリーム多色 替え芯 0.38mm 黒",
    descriptionEs: "Refill 0.38 mm negro para cuerpos JETSTREAM multicolor compatibles.",
    descriptionJa: "対応するJETSTREAM多色本体用の0.38mm黒替え芯。",
    priceClp: "2.000 CLP",
    badge: { es: "Negro", ja: "黒" },
    image: "https://www.mpuni.co.jp/products/images/products/9ee2d94232349283106f3d438f0ff17dea37c0a2.png",
  },
  {
    id: "jetstream-multicolor-refill-038-blue",
    category: "refills",
    brand: "uni",
    nameEs: "JETSTREAM multicolor refill 0.38 mm azul",
    nameJa: "ジェットストリーム多色 替え芯 0.38mm 青",
    descriptionEs: "Refill 0.38 mm azul para JETSTREAM multicolor compatible.",
    descriptionJa: "対応するJETSTREAM多色本体用の0.38mm青替え芯。",
    priceClp: "2.000 CLP",
    badge: { es: "Azul", ja: "青" },
    image: "https://www.mpuni.co.jp/products/images/products/9ee2d94232349283106f3d438f0ff17dea37c0a2.png",
  },
  {
    id: "jetstream-multicolor-refill-038-red",
    category: "refills",
    brand: "uni",
    nameEs: "JETSTREAM multicolor refill 0.38 mm rojo",
    nameJa: "ジェットストリーム多色 替え芯 0.38mm 赤",
    descriptionEs: "Refill 0.38 mm rojo para JETSTREAM multicolor compatible.",
    descriptionJa: "対応するJETSTREAM多色本体用の0.38mm赤替え芯。",
    priceClp: "2.000 CLP",
    badge: { es: "Rojo", ja: "赤" },
    image: "https://www.mpuni.co.jp/products/images/products/9ee2d94232349283106f3d438f0ff17dea37c0a2.png",
  },
  {
    id: "jetstream-multicolor-refill-07-black",
    category: "refills",
    brand: "uni",
    nameEs: "JETSTREAM multicolor refill 0.7 mm negro",
    nameJa: "ジェットストリーム多色 替え芯 0.7mm 黒",
    descriptionEs: "Refill 0.7 mm negro para trazo claro en cuerpos multicolor.",
    descriptionJa: "多色本体で見やすく書ける0.7mm黒替え芯。",
    priceClp: "2.000 CLP",
    badge: { es: "Negro", ja: "黒" },
    image: "https://www.mpuni.co.jp/products/images/products/SXR-L-7.jpg",
  },
  {
    id: "jetstream-multicolor-refill-07-blue",
    category: "refills",
    brand: "uni",
    nameEs: "JETSTREAM multicolor refill 0.7 mm azul",
    nameJa: "ジェットストリーム多色 替え芯 0.7mm 青",
    descriptionEs: "Refill 0.7 mm azul para JETSTREAM multicolor compatible.",
    descriptionJa: "対応するJETSTREAM多色本体用の0.7mm青替え芯。",
    priceClp: "2.000 CLP",
    badge: { es: "Azul", ja: "青" },
    image: "https://www.mpuni.co.jp/products/images/products/SXR-L-7.jpg",
  },
  {
    id: "jetstream-multicolor-refill-07-red",
    category: "refills",
    brand: "uni",
    nameEs: "JETSTREAM multicolor refill 0.7 mm rojo",
    nameJa: "ジェットストリーム多色 替え芯 0.7mm 赤",
    descriptionEs: "Refill 0.7 mm rojo para estudio, correccion y agenda.",
    descriptionJa: "勉強、添削、手帳に使いやすい0.7mm赤替え芯。",
    priceClp: "2.000 CLP",
    badge: { es: "Rojo", ja: "赤" },
    image: "https://www.mpuni.co.jp/products/images/products/SXR-L-7.jpg",
  },
  {
    id: "jetstream-multicolor-refill-07-green",
    category: "refills",
    brand: "uni",
    nameEs: "JETSTREAM multicolor refill 0.7 mm verde",
    nameJa: "ジェットストリーム多色 替え芯 0.7mm 緑",
    descriptionEs: "Refill 0.7 mm verde para codificar notas y planner.",
    descriptionJa: "ノートや手帳の色分けに使える0.7mm緑替え芯。",
    priceClp: "2.000 CLP",
    badge: { es: "Verde", ja: "緑" },
    image: "https://www.mpuni.co.jp/products/images/products/SXR-L-7.jpg",
  },
  {
    id: "uniball-one-refill-05-blue",
    category: "refills",
    brand: "uni",
    nameEs: "uni-ball one refill 0.5 mm azul",
    nameJa: "ユニボール ワン 替え芯 0.5mm 青",
    descriptionEs: "Recambio azul para uni-ball one 0.5 mm.",
    descriptionJa: "uni-ball one 0.5mm用の青替え芯。",
    priceClp: "2.000 CLP",
    badge: { es: "Azul", ja: "青" },
    image: "https://www.mpuni.co.jp/products/feature_images/main/ballpoint_pens/thm_uniballone.png",
  },
  {
    id: "uniball-one-refill-05-red",
    category: "refills",
    brand: "uni",
    nameEs: "uni-ball one refill 0.5 mm rojo",
    nameJa: "ユニボール ワン 替え芯 0.5mm 赤",
    descriptionEs: "Recambio rojo para uni-ball one 0.5 mm.",
    descriptionJa: "uni-ball one 0.5mm用の赤替え芯。",
    priceClp: "2.000 CLP",
    badge: { es: "Rojo", ja: "赤" },
    image: "https://www.mpuni.co.jp/products/feature_images/main/ballpoint_pens/thm_uniballone.png",
  },
  {
    id: "juice-up-refill-black",
    category: "refills",
    brand: "PILOT",
    nameEs: "Juice up refill 0.5 mm negro",
    nameJa: "Juice up 替え芯 0.5mm 黒",
    descriptionEs: "Recambio negro para mantener tu Juice up 0.5 mm en uso.",
    descriptionJa: "Juice up 0.5mm本体を長く使うための黒替え芯。",
    priceClp: "2.500 CLP",
    badge: { es: "Negro", ja: "黒" },
    image: "https://www.pilot.co.jp/press_release/d02899159a77371e1ce39cbdb1cbbe68cc20a235.jpg",
  },
  {
    id: "jetstream-4and1-05",
    category: "ballpoint",
    brand: "uni",
    nameEs: "JETSTREAM 4&1 0.5 mm",
    nameJa: "ジェットストリーム 4&1 0.5mm",
    descriptionEs: "Multifunción JETSTREAM con cuatro tintas y lápiz mecánico para uso diario.",
    descriptionJa: "4色ボールペンとシャープをまとめた、日常使い向け多機能JETSTREAM。",
    priceClp: "16.000 CLP",
    badge: { es: "4&1", ja: "4&1" },
    image: "https://www.mpuni.co.jp/products/images/products/313882000.jpg",
  },
  {
    id: "jetstream-lite-refill-05-black",
    category: "refills",
    brand: "uni",
    nameEs: "JETSTREAM Lite touch refill 0.5 mm negro",
    nameJa: "ジェットストリーム Lite touch 替え芯 0.5mm 黒",
    descriptionEs: "Recambio negro 0.5 mm para mantener tu JETSTREAM Lite touch en uso.",
    descriptionJa: "JETSTREAM Lite touchを長く使うための0.5mm黒替え芯。",
    priceClp: "2.300 CLP",
    badge: { es: "0.5 negro", ja: "0.5 黒" },
    image: "https://www.mpuni.co.jp/products/images/products/SXR-L-7.jpg",
  },
  {
    id: "jetstream-lite-refill-07-black",
    category: "refills",
    brand: "uni",
    nameEs: "JETSTREAM Lite touch refill 0.7 mm negro",
    nameJa: "ジェットストリーム Lite touch 替え芯 0.7mm 黒",
    descriptionEs: "Recambio negro 0.7 mm para trazos más visibles en JETSTREAM Lite touch.",
    descriptionJa: "JETSTREAM Lite touchで見やすく書ける0.7mm黒替え芯。",
    priceClp: "2.300 CLP",
    badge: { es: "0.7 negro", ja: "0.7 黒" },
    image: "https://www.mpuni.co.jp/products/images/products/SXR-L-7.jpg",
  },
  {
    id: "jetstream-lite-refill-blue",
    category: "refills",
    brand: "uni",
    nameEs: "JETSTREAM Lite touch refill azul",
    nameJa: "ジェットストリーム Lite touch 替え芯 青",
    descriptionEs: "Recambio azul para cuerpos JETSTREAM Lite touch compatibles.",
    descriptionJa: "対応するJETSTREAM Lite touch本体用の青替え芯。",
    priceClp: "2.500 CLP",
    badge: { es: "Azul", ja: "青" },
    image: "https://www.mpuni.co.jp/products/images/products/SXR-L-7.jpg",
  },
  {
    id: "jetstream-lite-refill-red",
    category: "refills",
    brand: "uni",
    nameEs: "JETSTREAM Lite touch refill rojo",
    nameJa: "ジェットストリーム Lite touch 替え芯 赤",
    descriptionEs: "Recambio rojo para correcciones y notas de color en JETSTREAM Lite touch.",
    descriptionJa: "添削や色分けに使えるJETSTREAM Lite touch用赤替え芯。",
    priceClp: "2.500 CLP",
    badge: { es: "Rojo", ja: "赤" },
    image: "https://www.mpuni.co.jp/products/images/products/SXR-L-7.jpg",
  },
  {
    id: "jetstream-lite-refill-green",
    category: "refills",
    brand: "uni",
    nameEs: "JETSTREAM Lite touch refill verde",
    nameJa: "ジェットストリーム Lite touch 替え芯 緑",
    descriptionEs: "Recambio verde para organizar agenda, estudio y apuntes.",
    descriptionJa: "手帳、勉強、ノート整理に使える緑のLite touch替え芯。",
    priceClp: "2.500 CLP",
    badge: { es: "Verde", ja: "緑" },
    image: "https://www.mpuni.co.jp/products/images/products/SXR-L-7.jpg",
  },
  {
    id: "uniball-one-3-refill-038-set",
    category: "refills",
    brand: "uni",
    nameEs: "uni-ball one 3 refill 0.38 mm",
    nameJa: "ユニボール ワン 3 替え芯 0.38mm",
    descriptionEs: "Recambios 0.38 mm para el cuerpo multicolor uni-ball one 3.",
    descriptionJa: "uni-ball one 3多色本体に使える0.38mm替え芯。",
    priceClp: "2.500 CLP",
    badge: { es: "0.38", ja: "0.38" },
    image: "https://www.mpuni.co.jp/products/feature_images/main/ballpoint_pens/thm_uniballone.png",
  },
  {
    id: "uniball-one-3-refill-05-set",
    category: "refills",
    brand: "uni",
    nameEs: "uni-ball one 3 refill 0.5 mm",
    nameJa: "ユニボール ワン 3 替え芯 0.5mm",
    descriptionEs: "Recambios 0.5 mm para el cuerpo multicolor uni-ball one 3.",
    descriptionJa: "uni-ball one 3多色本体に使える0.5mm替え芯。",
    priceClp: "2.500 CLP",
    badge: { es: "0.5", ja: "0.5" },
    image: "https://www.mpuni.co.jp/products/feature_images/main/ballpoint_pens/thm_uniballone.png",
  },
  {
    id: "uniball-one-refill-038-black",
    category: "refills",
    brand: "uni",
    nameEs: "uni-ball one refill 0.38 mm negro",
    nameJa: "ユニボール ワン 替え芯 0.38mm 黒",
    descriptionEs: "Recambio negro 0.38 mm para uni-ball one de una tinta.",
    descriptionJa: "uni-ball one単色本体に使える0.38mm黒替え芯。",
    priceClp: "2.000 CLP",
    badge: { es: "0.38 negro", ja: "0.38 黒" },
    image: "https://www.mpuni.co.jp/products/feature_images/main/ballpoint_pens/thm_uniballone.png",
  },
  {
    id: "uniball-one-refill-05-black",
    category: "refills",
    brand: "uni",
    nameEs: "uni-ball one refill 0.5 mm negro",
    nameJa: "ユニボール ワン 替え芯 0.5mm 黒",
    descriptionEs: "Recambio negro 0.5 mm para uni-ball one de una tinta.",
    descriptionJa: "uni-ball one単色本体に使える0.5mm黒替え芯。",
    priceClp: "2.000 CLP",
    badge: { es: "0.5 negro", ja: "0.5 黒" },
    image: "https://www.mpuni.co.jp/products/feature_images/main/ballpoint_pens/thm_uniballone.png",
  },
  {
    id: "sarasa-dry-04-black",
    category: "ballpoint",
    brand: "Zebra",
    nameEs: "SARASA dry 0.4 mm negro",
    nameJa: "サラサドライ 0.4mm 黒",
    descriptionEs: "Gel de secado rápido 0.4 mm en negro para apuntes finos.",
    descriptionJa: "細かいノートに使いやすい0.4mm黒の速乾ゲルペン。",
    priceClp: "2.900 CLP",
    badge: { es: "0.4 negro", ja: "0.4 黒" },
    image: "https://www.zebra.co.jp/pro/images/JJS31-BK.jpg",
  },
  {
    id: "sarasa-dry-04-blue",
    category: "ballpoint",
    brand: "Zebra",
    nameEs: "SARASA dry 0.4 mm azul",
    nameJa: "サラサドライ 0.4mm 青",
    descriptionEs: "Gel de secado rápido 0.4 mm en azul para estudio y oficina.",
    descriptionJa: "勉強や仕事の色分けに使いやすい0.4mm青の速乾ゲルペン。",
    priceClp: "2.900 CLP",
    badge: { es: "0.4 azul", ja: "0.4 青" },
    image: "https://www.zebra.co.jp/pro/images/JJS31-BL.jpg",
  },
  {
    id: "sarasa-dry-05-black",
    category: "ballpoint",
    brand: "Zebra",
    nameEs: "SARASA dry 0.5 mm negro",
    nameJa: "サラサドライ 0.5mm 黒",
    descriptionEs: "Gel de secado rápido 0.5 mm en negro para escritura diaria.",
    descriptionJa: "日常筆記に使いやすい0.5mm黒の速乾ゲルペン。",
    priceClp: "2.900 CLP",
    badge: { es: "0.5 negro", ja: "0.5 黒" },
    image: "https://www.zebra.co.jp/pro/images/JJ31-BK.jpg",
  },
  {
    id: "sarasa-dry-05-blue",
    category: "ballpoint",
    brand: "Zebra",
    nameEs: "SARASA dry 0.5 mm azul",
    nameJa: "サラサドライ 0.5mm 青",
    descriptionEs: "Gel de secado rápido 0.5 mm en azul para notas limpias.",
    descriptionJa: "見やすいノート作りに使いやすい0.5mm青の速乾ゲルペン。",
    priceClp: "2.900 CLP",
    badge: { es: "0.5 azul", ja: "0.5 青" },
    image: "https://www.zebra.co.jp/pro/images/JJ31-BL.jpg",
  },
  {
    id: "sarasa-dry-refill-04-black",
    category: "refills",
    brand: "Zebra",
    nameEs: "SARASA dry refill 0.4 mm negro",
    nameJa: "サラサドライ 替え芯 0.4mm 黒",
    descriptionEs: "Recambio negro 0.4 mm para cuerpos SARASA dry compatibles.",
    descriptionJa: "対応するSARASA dry本体用の0.4mm黒替え芯。",
    priceClp: "1.800 CLP",
    badge: { es: "0.4 negro", ja: "0.4 黒" },
    image: "https://www.zebra.co.jp/pro/images/JJS31-BK.jpg",
  },
  {
    id: "sarasa-dry-refill-04-blue",
    category: "refills",
    brand: "Zebra",
    nameEs: "SARASA dry refill 0.4 mm azul",
    nameJa: "サラサドライ 替え芯 0.4mm 青",
    descriptionEs: "Recambio azul 0.4 mm para cuerpos SARASA dry compatibles.",
    descriptionJa: "対応するSARASA dry本体用の0.4mm青替え芯。",
    priceClp: "1.800 CLP",
    badge: { es: "0.4 azul", ja: "0.4 青" },
    image: "https://www.zebra.co.jp/pro/images/JJS31-BL.jpg",
  },
  {
    id: "sarasa-dry-refill-05-black",
    category: "refills",
    brand: "Zebra",
    nameEs: "SARASA dry refill 0.5 mm negro",
    nameJa: "サラサドライ 替え芯 0.5mm 黒",
    descriptionEs: "Recambio negro 0.5 mm para cuerpos SARASA dry compatibles.",
    descriptionJa: "対応するSARASA dry本体用の0.5mm黒替え芯。",
    priceClp: "1.800 CLP",
    badge: { es: "0.5 negro", ja: "0.5 黒" },
    image: "https://www.zebra.co.jp/pro/images/JJ31-BK.jpg",
  },
  {
    id: "sarasa-dry-refill-05-blue",
    category: "refills",
    brand: "Zebra",
    nameEs: "SARASA dry refill 0.5 mm azul",
    nameJa: "サラサドライ 替え芯 0.5mm 青",
    descriptionEs: "Recambio azul 0.5 mm para cuerpos SARASA dry compatibles.",
    descriptionJa: "対応するSARASA dry本体用の0.5mm青替え芯。",
    priceClp: "1.800 CLP",
    badge: { es: "0.5 azul", ja: "0.5 青" },
    image: "https://www.zebra.co.jp/pro/images/JJ31-BL.jpg",
  },
  {
    id: "sarasa-clip-refill-black",
    category: "refills",
    brand: "Zebra",
    nameEs: "SARASA CLIP refill negro",
    nameJa: "サラサクリップ 替え芯 黒",
    descriptionEs: "Recambio negro para seguir usando cuerpos SARASA CLIP compatibles.",
    descriptionJa: "対応するサラサクリップ本体を長く使うための黒替え芯。",
    priceClp: "1.500 CLP",
    badge: { es: "Negro", ja: "黒" },
    image: "https://www.zebra.co.jp/pro/images/JJ15-BK.jpg",
  },
  {
    id: "drgrip-gspec-refill-05",
    category: "refills",
    brand: "PILOT",
    nameEs: "Dr.Grip refill 0.5 mm",
    nameJa: "ドクターグリップ 替え芯 0.5mm",
    descriptionEs: "Recambio 0.5 mm para bolígrafos Dr.Grip compatibles.",
    descriptionJa: "対応するドクターグリップボールペン用の0.5mm替え芯。",
    priceClp: "1.800 CLP",
    badge: { es: "Dr.Grip", ja: "Dr.Grip" },
    image: "https://www.pilot.co.jp/press_release/d02899159a77371e1ce39cbdb1cbbe68cc20a235.jpg",
  },
  {
    id: "energel-refill-05-black",
    category: "refills",
    brand: "Pentel",
    nameEs: "EnerGel refill 0.5 mm negro",
    nameJa: "エナージェル多色 替え芯 0.5mm 黒",
    descriptionEs: "Recambio EnerGel 0.5 mm negro para cuerpos multicolor compatibles.",
    descriptionJa: "対応するエナージェル多色本体用の0.5mm黒替え芯。",
    priceClp: "1.900 CLP",
    badge: { es: "Negro", ja: "黒" },
    image: "https://www.pentel.co.jp/images/products/energel_3c_lineup_1.png",
  },
  {
    id: "energel-refill-05-blue",
    category: "refills",
    brand: "Pentel",
    nameEs: "EnerGel refill 0.5 mm azul",
    nameJa: "エナージェル多色 替え芯 0.5mm 青",
    descriptionEs: "Recambio EnerGel 0.5 mm azul para cuerpos multicolor compatibles.",
    descriptionJa: "対応するエナージェル多色本体用の0.5mm青替え芯。",
    priceClp: "1.900 CLP",
    badge: { es: "Azul", ja: "青" },
    image: "https://www.pentel.co.jp/images/products/energel_3c_lineup_1.png",
  },
  {
    id: "energel-refill-05-red",
    category: "refills",
    brand: "Pentel",
    nameEs: "EnerGel refill 0.5 mm rojo",
    nameJa: "エナージェル多色 替え芯 0.5mm 赤",
    descriptionEs: "Recambio EnerGel 0.5 mm rojo para cuerpos multicolor compatibles.",
    descriptionJa: "対応するエナージェル多色本体用の0.5mm赤替え芯。",
    priceClp: "1.900 CLP",
    badge: { es: "Rojo", ja: "赤" },
    image: "https://www.pentel.co.jp/images/products/energel_3c_lineup_1.png",
  },
];

const productDetailContent = {
  "kurutoga-dive": {
    featuresEs: [
      "Mecanismo premium para escritura continua con menos interrupciones.",
      "Inventario actual concentrado en el color Aurora Purple.",
      "Ideal para quien quiere una pieza japonesa dificil de encontrar localmente.",
    ],
    featuresJa: [
      "筆記の中断を減らすプレミアム機構。",
      "現在の取扱いカラーはAurora Purpleのみ。",
      "チリで探しにくい日本文具を欲しい人向け。",
    ],
    specs: [
      { labelEs: "Tipo", labelJa: "種類", valueEs: "Lápiz mecánico", valueJa: "シャープペン" },
      { labelEs: "Mina", labelJa: "芯径", valueEs: "0.5 mm", valueJa: "0.5mm" },
      { labelEs: "Color", labelJa: "色", valueEs: "Aurora Purple", valueJa: "Aurora Purple" },
      { labelEs: "Consulta", labelJa: "確認事項", valueEs: "Disponibilidad y entrega", valueJa: "受け渡し方法" },
    ],
    availableOptionsEs: "Disponible como KURUTOGA DIVE 0.5 mm en Aurora Purple. Entrega se confirma por mensaje.",
    availableOptionsJa: "KURUTOGA DIVE 0.5mm Aurora Purpleとして扱います。受け渡し方法はメッセージで確認できます。",
    recommendedForEs: "Regalos, coleccionistas y usuarios que quieren una experiencia premium.",
    recommendedForJa: "プレゼント、コレクション、上位モデルの書き心地を求める人。",
    relatedIds: ["kurutoga-metal", "zento-signature", "pentel-ain-leads"],
  },
  "kurutoga-metal": {
    featuresEs: [
      "Cuerpo metálico con sensación firme en mano.",
      "Diseñado para mantener una línea estable durante notas largas.",
      "Disponible en colores normales o limitados según consulta.",
    ],
    featuresJa: [
      "手にしっかり残る金属軸。",
      "長いノート筆記でも線を安定させやすい設計。",
      "通常色・限定色は問い合わせ時に確認。",
    ],
    specs: [
      { labelEs: "Tipo", labelJa: "種類", valueEs: "Lápiz mecánico", valueJa: "シャープペン" },
      { labelEs: "Mina", labelJa: "芯径", valueEs: "0.5 mm", valueJa: "0.5mm" },
      { labelEs: "Rango", labelJa: "価格帯", valueEs: "40.000-45.000 CLP", valueJa: "40.000-45.000 CLP" },
    ],
    availableOptionsEs: "Colores y ediciones se confirman por mensaje.",
    availableOptionsJa: "色と限定モデルの有無はメッセージで確認できます。",
    recommendedForEs: "Estudio, oficina y quienes prefieren lápices mecánicos con peso.",
    recommendedForJa: "勉強、仕事、重みのあるシャープペンが好きな人。",
    relatedIds: ["kurutoga-dive", "daily-pens", "pentel-ain-leads"],
  },
  "zento-signature": {
    featuresEs: [
      "Línea premium con acabado sobrio y sensación de pieza especial.",
      "Punta y color vienen como combinaciones fijas.",
      "El modelo Limited se ofrece solo en 0.5 mm.",
      "Tinta de trazo limpio para escritura cuidada.",
      "Buena opción para regalo o set de escritorio elegante.",
    ],
    featuresJa: [
      "落ち着いた仕上げのプレミアムライン。",
      "ボール径と軸色は固定の組み合わせ。",
      "限定モデルは0.5mmのみ。",
      "丁寧な筆記に向く、きれいな筆跡。",
      "ギフトや上質なデスクセットにも合わせやすい一本。",
    ],
    specs: [
      { labelEs: "Tipo", labelJa: "種類", valueEs: "Rollerball premium", valueJa: "プレミアムローラーボール" },
      { labelEs: "Marca", labelJa: "ブランド", valueEs: "uniball ZENTO", valueJa: "uniball ZENTO" },
      { labelEs: "Combinaciones", labelJa: "組み合わせ", valueEs: "0.38 mm Silver / 0.5 mm Metallic Black / 0.7 mm Champagne Gold / Limited 0.5 mm Stone Brass", valueJa: "0.38mm シルバー / 0.5mm メタリックブラック / 0.7mm シャンパンゴールド / 限定0.5mm ストーンブラス" },
      { labelEs: "Consulta", labelJa: "確認事項", valueEs: "Entrega y disponibilidad", valueJa: "受け渡し方法・在庫確認" },
    ],
    availableOptionsEs: "Elige una combinación fija: 0.38 mm Silver, 0.5 mm Metallic Black, 0.7 mm Champagne Gold o Limited 0.5 mm Stone Brass.",
    availableOptionsJa: "0.38mmシルバー、0.5mmメタリックブラック、0.7mmシャンパンゴールド、限定0.5mmストーンブラスから選びます。",
    recommendedForEs: "Regalos, firma, reuniones y escritura diaria premium.",
    recommendedForJa: "ギフト、署名、打ち合わせ、上質な日常筆記。",
    relatedIds: ["zento-standard", "zento-flow", "zento-refill"],
  },
  "zento-flow": {
    featuresEs: [
      "Trazo suave para escribir más tiempo sin sensación pesada.",
      "Formato práctico para notas, agenda y estudio.",
      "Precio accesible dentro de la línea ZENTO.",
    ],
    featuresJa: [
      "長く書いても重くなりにくいなめらかな筆記感。",
      "ノート、手帳、勉強に使いやすい形。",
      "ZENTOシリーズの中で手に取りやすい価格帯。",
    ],
    specs: [
      { labelEs: "Tipo", labelJa: "種類", valueEs: "Rollerball", valueJa: "ローラーボール" },
      { labelEs: "Uso", labelJa: "用途", valueEs: "Notas y escritura diaria", valueJa: "ノート・日常筆記" },
      { labelEs: "Consulta", labelJa: "確認事項", valueEs: "Color disponible", valueJa: "色の確認" },
    ],
    availableOptionsEs: "Color y disponibilidad se confirman antes de coordinar entrega.",
    availableOptionsJa: "色と受け渡し可否は、連絡時に確認できます。",
    recommendedForEs: "Usuarios que quieren una pluma suave para todos los días.",
    recommendedForJa: "毎日使えるなめらかなペンを探している人。",
    relatedIds: ["zento-signature", "zento-refill", "uniball-one"],
  },
  "jetstream-lite": {
    featuresEs: [
      "Tinta de baja fricción para una escritura ligera.",
      "Buena opción para agenda, oficina y apuntes rápidos.",
      "Consulta por color de tinta antes de coordinar entrega.",
    ],
    featuresJa: [
      "軽く書ける低摩擦インク。",
      "手帳、仕事、素早いメモに使いやすい定番。",
      "インク色は受け渡し前に確認できます。",
    ],
    specs: [
      { labelEs: "Tipo", labelJa: "種類", valueEs: "Bolígrafo", valueJa: "ボールペン" },
      { labelEs: "Tinta", labelJa: "インク", valueEs: "JETSTREAM", valueJa: "JETSTREAM" },
      { labelEs: "Consulta", labelJa: "確認事項", valueEs: "Negro o azul", valueJa: "黒・青など" },
    ],
    availableOptionsEs: "Color, punta y disponibilidad se confirman por mensaje.",
    availableOptionsJa: "色、芯径、受け渡し方法はメッセージで確認できます。",
    recommendedForEs: "Trabajo, estudio, agenda y quienes escriben mucho.",
    recommendedForJa: "仕事、勉強、手帳、たくさん書く人。",
    relatedIds: ["jetstream-refill", "daily-pens", "uniball-one"],
  },
  "uniball-one": {
    featuresEs: [
      "Gel de color nítido para notas con buen contraste.",
      "Cuerpo compacto y fácil de llevar.",
      "Buena base para armar un set de colores básicos.",
    ],
    featuresJa: [
      "コントラストの強いくっきりしたゲルインキ。",
      "持ち運びやすいコンパクトな軸。",
      "基本色のセット作りにも向くシリーズ。",
    ],
    specs: [
      { labelEs: "Tipo", labelJa: "種類", valueEs: "Gel", valueJa: "ゲルインキ" },
      { labelEs: "Colores", labelJa: "色", valueEs: "Negro, azul o rojo según consulta", valueJa: "黒・青・赤など確認" },
      { labelEs: "Rango", labelJa: "価格帯", valueEs: "2.000-6.900 CLP", valueJa: "2.000-6.900 CLP" },
    ],
    availableOptionsEs: "Color, punta y packs se confirman por mensaje.",
    availableOptionsJa: "色、芯径、セット可否はメッセージで確認できます。",
    recommendedForEs: "Notas, estudio, bullet journal y uso diario.",
    recommendedForJa: "ノート、勉強、手帳、日常筆記。",
    relatedIds: ["jetstream-lite", "juice-up", "daily-pens"],
  },
  "juice-up": {
    featuresEs: [
      "Gel de línea fina y definida.",
      "Cómodo para apuntes limpios y escritura pequeña.",
      "Disponible según color de tinta consultado.",
    ],
    featuresJa: [
      "細くくっきりした線が書けるゲルペン。",
      "きれいなノートや小さめの文字に使いやすい。",
      "インク色は問い合わせ時に確認。",
    ],
    specs: [
      { labelEs: "Tipo", labelJa: "種類", valueEs: "Gel", valueJa: "ゲルインキ" },
      { labelEs: "Punta", labelJa: "芯径", valueEs: "0.5 mm", valueJa: "0.5mm" },
      { labelEs: "Marca", labelJa: "ブランド", valueEs: "PILOT", valueJa: "PILOT" },
    ],
    availableOptionsEs: "Color y entrega se confirman por mensaje.",
    availableOptionsJa: "色と受け渡し方法はメッセージで確認できます。",
    recommendedForEs: "Apuntes limpios, estudio y escritura pequeña.",
    recommendedForJa: "きれいなノート、勉強、小さめの文字。",
    relatedIds: ["uniball-one", "jetstream-lite", "daily-pens"],
  },
  "daily-pens": {
    featuresEs: [
      "Selección de modelos confiables para uso diario.",
      "Pensados para oficina, escuela, agenda y notas rápidas.",
      "Se pueden consultar combinaciones por color o tipo.",
    ],
    featuresJa: [
      "日常使いしやすい定番モデルのセレクト。",
      "仕事、学校、手帳、メモに合わせやすい。",
      "色や種類の組み合わせは問い合わせ可能。",
    ],
    specs: [
      { labelEs: "Tipo", labelJa: "種類", valueEs: "Bolígrafos diarios", valueJa: "日常使いボールペン" },
      { labelEs: "Marcas", labelJa: "ブランド", valueEs: "uni / Zebra", valueJa: "uni / Zebra" },
      { labelEs: "Rango", labelJa: "価格帯", valueEs: "2.000-3.500 CLP", valueJa: "2.000-3.500 CLP" },
    ],
    availableOptionsEs: "Color, punta y combinaciones se confirman por mensaje.",
    availableOptionsJa: "色、芯径、組み合わせはメッセージで確認できます。",
    recommendedForEs: "Comprar varias unidades para estudio, oficina o regalo pequeño.",
    recommendedForJa: "勉強、仕事、ちょっとしたギフト用に複数本ほしい人。",
    relatedIds: ["jetstream-lite", "uniball-one", "juice-up"],
  },
  "zento-refill": {
    featuresEs: [
      "Recambio para seguir usando tus ZENTO favoritos.",
      "Útil para mantener una pieza premium sin reemplazarla completa.",
      "Compatibilidad se confirma antes de reservar.",
    ],
    featuresJa: [
      "お気に入りのZENTOを長く使うための替え芯。",
      "本体を買い替えずに上位モデルを使い続けられる。",
      "対応可否は取り置き前に確認。",
    ],
    specs: [
      { labelEs: "Tipo", labelJa: "種類", valueEs: "Recambio", valueJa: "替え芯" },
      { labelEs: "Compatibilidad", labelJa: "対応", valueEs: "ZENTO", valueJa: "ZENTO" },
      { labelEs: "Consulta", labelJa: "確認事項", valueEs: "Modelo y color", valueJa: "対応モデル・色" },
    ],
    availableOptionsEs: "Compatibilidad, punta y color se confirman por mensaje.",
    availableOptionsJa: "対応モデル、芯径、色はメッセージで確認できます。",
    recommendedForEs: "Usuarios de ZENTO Signature o ZENTO Flow.",
    recommendedForJa: "ZENTO Signature / Flowを使っている人。",
    relatedIds: ["zento-signature", "zento-flow", "jetstream-refill"],
  },
  "jetstream-refill": {
    featuresEs: [
      "Recambio para mantener tus JETSTREAM en uso.",
      "Disponible por color según consulta.",
      "Ideal para usuarios que ya tienen cuerpo multicolor compatible.",
    ],
    featuresJa: [
      "JETSTREAMを長く使うための替え芯。",
      "色は問い合わせ時に確認。",
      "対応する多色軸を持っている人に便利。",
    ],
    specs: [
      { labelEs: "Tipo", labelJa: "種類", valueEs: "Recambio", valueJa: "替え芯" },
      { labelEs: "Punta", labelJa: "芯径", valueEs: "0.7 mm", valueJa: "0.7mm" },
      { labelEs: "Consulta", labelJa: "確認事項", valueEs: "Color y compatibilidad", valueJa: "色・対応軸" },
    ],
    availableOptionsEs: "Color y compatibilidad se confirman por mensaje.",
    availableOptionsJa: "色と対応軸はメッセージで確認できます。",
    recommendedForEs: "Usuarios de JETSTREAM multicolor o sets de oficina.",
    recommendedForJa: "JETSTREAM多色軸や仕事用セットを使う人。",
    relatedIds: ["jetstream-lite", "zento-refill", "uniball-one"],
  },
  "pentel-ain-leads": {
    featuresEs: [
      "Minas japonesas para escritura diaria, estudio o dibujo.",
      "Diferentes grosores y durezas según consulta.",
      "Buen complemento para lápices mecánicos premium.",
    ],
    featuresJa: [
      "日常筆記、勉強、製図に使える日本のシャー芯。",
      "太さや濃さは問い合わせ時に確認。",
      "上位シャープペンと合わせて使いやすい補充品。",
    ],
    specs: [
      { labelEs: "Tipo", labelJa: "種類", valueEs: "Minas", valueJa: "シャー芯" },
      { labelEs: "Marca", labelJa: "ブランド", valueEs: "Pentel", valueJa: "Pentel" },
      { labelEs: "Consulta", labelJa: "確認事項", valueEs: "Grosor y dureza", valueJa: "太さ・濃さ" },
    ],
    availableOptionsEs: "Grosor y dureza se confirman por mensaje.",
    availableOptionsJa: "芯径と濃さはメッセージで確認できます。",
    recommendedForEs: "Estudiantes, dibujo técnico y usuarios de lápiz mecánico.",
    recommendedForJa: "学生、製図、シャープペンをよく使う人。",
    relatedIds: ["kurutoga-dive", "kurutoga-metal", "daily-pens"],
  },
  accessories: {
    featuresEs: [
      "Complementos japoneses para ordenar y completar el escritorio.",
      "Incluye útiles como gomas, pegamento, estuches o cortadores según disponibilidad.",
      "Se pueden consultar combinaciones para armar un set.",
    ],
    featuresJa: [
      "机まわりを整える日本文具アクセサリー。",
      "消しゴム、のり、ペンケース、カッターなどを確認可能。",
      "セット向けの組み合わせも相談できます。",
    ],
    specs: [
      { labelEs: "Tipo", labelJa: "種類", valueEs: "Accesorios", valueJa: "文具小物" },
      { labelEs: "Marcas", labelJa: "ブランド", valueEs: "PLUS / KOKUYO / OLFA", valueJa: "PLUS / KOKUYO / OLFA" },
      { labelEs: "Rango", labelJa: "価格帯", valueEs: "2.000-19.900 CLP", valueJa: "2.000-19.900 CLP" },
    ],
    availableOptionsEs: "Modelo, color y combinaciones se confirman por mensaje.",
    availableOptionsJa: "モデル、色、組み合わせはメッセージで確認できます。",
    recommendedForEs: "Armar un set de escritorio, regalo pequeño o compra complementaria.",
    recommendedForJa: "デスクセット、小さなギフト、ついで買いに。",
    relatedIds: ["daily-pens", "uniball-one", "pentel-ain-leads"],
  },
  "zento-standard": {
    featuresEs: [
      "Entrada accesible a la familia ZENTO para escritura diaria.",
      "Cuerpo simple y sobrio, fácil de combinar con otros útiles.",
      "Colores normales o limitados se revisan antes de coordinar entrega.",
    ],
    featuresJa: [
      "ZENTOシリーズを手軽に試せる日常向けモデル。",
      "他の文具と合わせやすいシンプルな本体。",
      "通常色・限定色は受け渡し前に確認。",
    ],
    specs: [
      { labelEs: "Tipo", labelJa: "種類", valueEs: "Rollerball / gel", valueJa: "ローラーボール / ゲル" },
      { labelEs: "Punta", labelJa: "ボール径", valueEs: "0.38 mm o 0.5 mm según modelo", valueJa: "モデルにより0.38mm / 0.5mm" },
      { labelEs: "Consulta", labelJa: "確認事項", valueEs: "Color y edición", valueJa: "色・限定モデル" },
    ],
    availableOptionsEs: "Colores normales y limitados se confirman por mensaje.",
    availableOptionsJa: "通常色・限定色はメッセージで確認できます。",
    recommendedForEs: "Quien quiere probar ZENTO sin ir directo a la línea premium.",
    recommendedForJa: "ZENTOをまず日常使いで試したい人。",
    relatedIds: ["zento-flow", "zento-signature", "zento-refill"],
  },
  "jetstream-4and1": {
    featuresEs: [
      "Cuatro colores y lápiz mecánico en un solo cuerpo.",
      "Tinta Lite touch ink para una sensación más ligera.",
      "Muy práctico para trabajo, estudio y agenda.",
    ],
    featuresJa: [
      "4色ボールペンとシャープを1本に集約。",
      "Lite touch inkの軽い書き心地。",
      "仕事、勉強、手帳に使いやすい多機能モデル。",
    ],
    specs: [
      { labelEs: "Tipo", labelJa: "種類", valueEs: "Multifunción", valueJa: "多機能ペン" },
      { labelEs: "Funciones", labelJa: "機能", valueEs: "4 colores + lápiz mecánico 0.5 mm", valueJa: "4色 + 0.5mmシャープ" },
      { labelEs: "Consulta", labelJa: "確認事項", valueEs: "Color de cuerpo y tinta", valueJa: "軸色・インク色" },
    ],
    availableOptionsEs: "Color de cuerpo y combinación de tinta se confirman por mensaje.",
    availableOptionsJa: "軸色とインク構成はメッセージで確認できます。",
    recommendedForEs: "Oficina, clases, agenda y usuarios que quieren llevar una sola pluma.",
    recommendedForJa: "仕事、授業、手帳、1本で済ませたい人。",
    relatedIds: ["jetstream-slim-compact", "jetstream-multicolor-refill-038", "jetstream-multicolor-refill-07"],
  },
  "jetstream-slim-compact": {
    featuresEs: [
      "Tres colores en un cuerpo delgado.",
      "Punta fina para escritura pequeña y agenda.",
      "Más discreto que un multifunción grande.",
    ],
    featuresJa: [
      "細身の軸に3色を搭載。",
      "手帳や小さな文字に使いやすい細字。",
      "大きな多機能ペンより持ち歩きやすい。",
    ],
    specs: [
      { labelEs: "Tipo", labelJa: "種類", valueEs: "Bolígrafo 3 colores", valueJa: "3色ボールペン" },
      { labelEs: "Punta", labelJa: "ボール径", valueEs: "0.38 mm", valueJa: "0.38mm" },
      { labelEs: "Uso", labelJa: "用途", valueEs: "Agenda y notas rápidas", valueJa: "手帳・メモ" },
    ],
    availableOptionsEs: "Color de cuerpo y tintas disponibles se confirman por mensaje.",
    availableOptionsJa: "軸色とインク色はメッセージで確認できます。",
    recommendedForEs: "Personas que usan agenda o quieren separar notas por color.",
    recommendedForJa: "手帳を使う人、色分けしてメモしたい人。",
    relatedIds: ["jetstream-4and1", "jetstream-multicolor-refill-038", "jetstream-multicolor-refill-07"],
  },
  "jetstream-edge": {
    featuresEs: [
      "Punta ultrafina 0.28 mm para escritura precisa.",
      "Tinta JETSTREAM para trazo suave incluso en línea pequeña.",
      "Cuerpo con diseño técnico y moderno.",
    ],
    featuresJa: [
      "0.28mmの超極細で精密に書ける。",
      "細字でもなめらかなJETSTREAMインク。",
      "テクニカルでモダンなデザイン。",
    ],
    specs: [
      { labelEs: "Tipo", labelJa: "種類", valueEs: "Bolígrafo ultrafino", valueJa: "超極細ボールペン" },
      { labelEs: "Punta", labelJa: "ボール径", valueEs: "0.28 mm", valueJa: "0.28mm" },
      { labelEs: "Consulta", labelJa: "確認事項", valueEs: "Color de cuerpo y refill", valueJa: "軸色・替え芯" },
    ],
    availableOptionsEs: "Color y recambios compatibles se confirman por mensaje.",
    availableOptionsJa: "色と対応替え芯はメッセージで確認できます。",
    recommendedForEs: "Agenda, notas muy pequeñas, dibujo de líneas y usuarios de punta fina.",
    recommendedForJa: "手帳、小さな文字、細線、極細好きの人。",
    relatedIds: ["jetstream-edge-refill", "jetstream-slim-compact", "pentel-ain-leads"],
  },
  "uniball-one-p": {
    featuresEs: [
      "Cuerpo corto y compacto fácil de llevar.",
      "Gel de color nítido de la familia uni-ball one.",
      "Colores normales o limitados para colección.",
    ],
    featuresJa: [
      "持ち歩きやすい短めコンパクト軸。",
      "uni-ball oneらしいくっきりしたゲルインキ。",
      "通常色・限定色を集める楽しさ。",
    ],
    specs: [
      { labelEs: "Tipo", labelJa: "種類", valueEs: "Gel compacto", valueJa: "コンパクトゲルペン" },
      { labelEs: "Punta", labelJa: "ボール径", valueEs: "0.38 mm o 0.5 mm según modelo", valueJa: "モデルにより0.38mm / 0.5mm" },
      { labelEs: "Rango", labelJa: "価格帯", valueEs: "6.900-13.000 CLP", valueJa: "6.900-13.000 CLP" },
    ],
    availableOptionsEs: "Color, punta y edición limitada se confirman por mensaje.",
    availableOptionsJa: "色、ボール径、限定色の有無はメッセージで確認できます。",
    recommendedForEs: "Regalos pequeños, estuche compacto y coleccionistas de colores.",
    recommendedForJa: "小さなギフト、コンパクトな筆箱、色違いを集めたい人。",
    relatedIds: ["uniball-one", "uniball-one-3", "zento-standard"],
  },
  "uniball-one-3": {
    featuresEs: [
      "Tres colores de gel en un solo cuerpo.",
      "Ideal para estudio, subrayado ligero y agenda.",
      "Mantiene el contraste de tinta de la línea uni-ball one.",
    ],
    featuresJa: [
      "ゲルインキ3色を1本に集約。",
      "勉強、軽い色分け、手帳に便利。",
      "uni-ball oneらしい濃く見やすい筆跡。",
    ],
    specs: [
      { labelEs: "Tipo", labelJa: "種類", valueEs: "Gel 3 colores", valueJa: "3色ゲルペン" },
      { labelEs: "Tinta", labelJa: "インク", valueEs: "uni-ball one", valueJa: "uni-ball one" },
      { labelEs: "Consulta", labelJa: "確認事項", valueEs: "Color de cuerpo y recambios", valueJa: "軸色・替え芯" },
    ],
    availableOptionsEs: "Cuerpo, tintas y recambios compatibles se confirman por mensaje.",
    availableOptionsJa: "軸色、インク色、対応替え芯はメッセージで確認できます。",
    recommendedForEs: "Estudiantes, agenda y usuarios que quieren gel multicolor.",
    recommendedForJa: "学生、手帳、ゲルの多色ペンを使いたい人。",
    relatedIds: ["uniball-one", "uniball-one-p", "jetstream-4and1"],
  },
  "sarasa-clip": {
    featuresEs: [
      "Gel clásico de Zebra con colores vivos.",
      "Clip amplio para cuaderno, carpeta o bolsillo.",
      "Precio accesible para comprar varios colores.",
    ],
    featuresJa: [
      "鮮やかな発色のZebra定番ゲル。",
      "ノートやポケットに挟みやすい大きめクリップ。",
      "色違いで揃えやすい価格。",
    ],
    specs: [
      { labelEs: "Tipo", labelJa: "種類", valueEs: "Gel", valueJa: "ゲルインキ" },
      { labelEs: "Marca", labelJa: "ブランド", valueEs: "Zebra", valueJa: "Zebra" },
      { labelEs: "Consulta", labelJa: "確認事項", valueEs: "Color disponible", valueJa: "色の確認" },
    ],
    availableOptionsEs: "Color y cantidad se confirman por mensaje.",
    availableOptionsJa: "色と本数はメッセージで確認できます。",
    recommendedForEs: "Notas de color, estudio, agenda y compra de varios colores.",
    recommendedForJa: "色分けノート、勉強、手帳、複数色買い。",
    relatedIds: ["sarasa-dry", "juice-up", "uniball-one"],
  },
  "sarasa-dry": {
    featuresEs: [
      "Gel pensado para secado rápido.",
      "Cómodo para apuntes largos y escritura continua.",
      "Buena opción para usuarios que manchan la página con gel normal.",
    ],
    featuresJa: [
      "速乾性を重視したゲルインキ。",
      "長いノートや連続筆記に使いやすい。",
      "通常のゲルでこすれが気になる人に向く。",
    ],
    specs: [
      { labelEs: "Tipo", labelJa: "種類", valueEs: "Gel de secado rápido", valueJa: "速乾ゲル" },
      { labelEs: "Marca", labelJa: "ブランド", valueEs: "Zebra", valueJa: "Zebra" },
      { labelEs: "Consulta", labelJa: "確認事項", valueEs: "Punta y color", valueJa: "芯径・色" },
    ],
    availableOptionsEs: "Punta, color y cantidad se confirman por mensaje.",
    availableOptionsJa: "芯径、色、本数はメッセージで確認できます。",
    recommendedForEs: "Clases, oficina, apuntes rápidos y escritura con menos manchas.",
    recommendedForJa: "授業、仕事、速いメモ、こすれを減らしたい筆記。",
    relatedIds: ["sarasa-clip", "juice-up", "daily-pens"],
  },
  "dr-grip-gspec": {
    featuresEs: [
      "Agarre cómodo para sesiones largas de escritura.",
      "Cuerpo equilibrado para reducir fatiga en notas extensas.",
      "Modelo conocido de PILOT para uso diario serio.",
    ],
    featuresJa: [
      "長時間筆記に向く握りやすいグリップ。",
      "長いノートでも疲れにくいバランス。",
      "PILOTの定番として日常筆記に使いやすい。",
    ],
    specs: [
      { labelEs: "Tipo", labelJa: "種類", valueEs: "Bolígrafo ergonómico", valueJa: "エルゴノミックボールペン" },
      { labelEs: "Marca", labelJa: "ブランド", valueEs: "PILOT", valueJa: "PILOT" },
      { labelEs: "Consulta", labelJa: "確認事項", valueEs: "Color de cuerpo y tinta", valueJa: "軸色・インク色" },
    ],
    availableOptionsEs: "Color de cuerpo, tinta y entrega se confirman por mensaje.",
    availableOptionsJa: "軸色、インク色、受け渡し方法はメッセージで確認できます。",
    recommendedForEs: "Personas que escriben mucho y quieren agarre cómodo.",
    recommendedForJa: "たくさん書く人、握りやすいペンを探す人。",
    relatedIds: ["jetstream-4and1", "daily-pens", "juice-up"],
  },
  "kuru-toga-ks": {
    featuresEs: [
      "Mecanismo KURUTOGA para mantener la punta más uniforme.",
      "Precio accesible para estudiantes y uso diario.",
      "Disponible en grosores y colores según consulta.",
    ],
    featuresJa: [
      "芯先を均一に保ちやすいクルトガ機構。",
      "学生や日常使いに導入しやすい価格。",
      "芯径・色は問い合わせ時に確認。",
    ],
    specs: [
      { labelEs: "Tipo", labelJa: "種類", valueEs: "Lápiz mecánico", valueJa: "シャープペン" },
      { labelEs: "Mina", labelJa: "芯径", valueEs: "0.3 mm / 0.5 mm según modelo", valueJa: "モデルにより0.3mm / 0.5mm" },
      { labelEs: "Consulta", labelJa: "確認事項", valueEs: "Color y grosor", valueJa: "色・芯径" },
    ],
    availableOptionsEs: "Color y grosor de mina se confirman por mensaje.",
    availableOptionsJa: "色と芯径はメッセージで確認できます。",
    recommendedForEs: "Estudiantes, apuntes diarios y primer KURUTOGA.",
    recommendedForJa: "学生、日常ノート、初めてのクルトガ。",
    relatedIds: ["kurutoga-metal", "pentel-ain-leads", "orenznero"],
  },
  orenznero: {
    featuresEs: [
      "Sistema Orenz para proteger la mina fina.",
      "Avance automático para escribir con menos interrupciones.",
      "0.2 mm, 0.3 mm y 0.5 mm se eligen dentro de esta misma página.",
      "Cuerpo premium negro con sensación técnica.",
    ],
    featuresJa: [
      "細い芯を守るオレンズシステム。",
      "中断を減らす自動芯出し機構。",
      "0.2mm / 0.3mm / 0.5mmをこのページ内で選択。",
      "黒軸のテクニカルなプレミアムモデル。",
    ],
    specs: [
      { labelEs: "Tipo", labelJa: "種類", valueEs: "Lápiz mecánico premium", valueJa: "プレミアムシャープペン" },
      { labelEs: "Mina", labelJa: "芯径", valueEs: "0.2 mm / 0.3 mm / 0.5 mm", valueJa: "0.2mm / 0.3mm / 0.5mm" },
      { labelEs: "Color", labelJa: "色", valueEs: "Black", valueJa: "ブラック" },
      { labelEs: "Marca", labelJa: "ブランド", valueEs: "Pentel", valueJa: "ぺんてる" },
    ],
    availableOptionsEs: "Elige 0.2 mm, 0.3 mm o 0.5 mm. Entrega se confirma por mensaje.",
    availableOptionsJa: "0.2mm / 0.3mm / 0.5mmから選びます。受け渡し方法はメッセージで確認できます。",
    recommendedForEs: "Usuarios avanzados de lápiz mecánico, dibujo y escritura fina.",
    recommendedForJa: "シャープペン上級者、製図、細字筆記。",
    relatedIds: ["pentel-ain-leads", "kurutoga-dive", "kuru-toga-ks"],
  },
  "pentel-art-multi-8": {
    featuresEs: [
      "Ocho colores en un portaminas artístico.",
      "Útil para bocetos, agenda, marcado y planificación visual.",
      "Formato especial difícil de encontrar localmente.",
    ],
    featuresJa: [
      "8色を1本にまとめたアート向けホルダー。",
      "スケッチ、手帳、マーキング、視覚的な整理に便利。",
      "現地で探しにくい特殊な日本文具。",
    ],
    specs: [
      { labelEs: "Tipo", labelJa: "種類", valueEs: "Portaminas artístico multicolor", valueJa: "多色ホルダー式色鉛筆" },
      { labelEs: "Colores", labelJa: "色数", valueEs: "8 colores", valueJa: "8色" },
      { labelEs: "Consulta", labelJa: "確認事項", valueEs: "Set y repuestos", valueJa: "セット内容・替芯" },
    ],
    availableOptionsEs: "Set, colores y repuestos se confirman por mensaje.",
    availableOptionsJa: "セット内容、色、替芯はメッセージで確認できます。",
    recommendedForEs: "Ilustración, agenda creativa, planificación y regalos para amantes del dibujo.",
    recommendedForJa: "イラスト、クリエイティブ手帳、計画、絵が好きな人へのギフト。",
    relatedIds: ["accessories", "pentel-ain-leads", "orenznero"],
  },
  "energel-multicolor": {
    featuresEs: ["Gel multicolor para organizar apuntes.", "Secado rápido y trazo intenso.", "Práctico para oficina, clases y agenda."],
    featuresJa: ["ノートを色分けしやすい多色ゲル。", "速乾で濃い筆跡。", "仕事、授業、手帳に便利。"],
    specs: [
      { labelEs: "Tipo", labelJa: "種類", valueEs: "Gel multicolor", valueJa: "多色ゲルペン" },
      { labelEs: "Marca", labelJa: "ブランド", valueEs: "Pentel", valueJa: "ぺんてる" },
      { labelEs: "Consulta", labelJa: "確認事項", valueEs: "Color de cuerpo y tinta", valueJa: "軸色・インク色" },
    ],
    availableOptionsEs: "Color de cuerpo, colores de tinta y compatibilidad de refill se confirman por mensaje.",
    availableOptionsJa: "軸色、インク色、替え芯の対応はメッセージで確認できます。",
    recommendedForEs: "Estudio, oficina, agenda y usuarios que quieren gel multicolor.",
    recommendedForJa: "勉強、仕事、手帳、多色ゲルを使いたい人。",
    relatedIds: ["gel-compatible-refills", "sarasa-dry", "uniball-one-3"],
  },
  "zebra-lightwrite-alpha": {
    featuresEs: ["Luz integrada para escribir en baja iluminación.", "Útil para turnos, viajes y notas rápidas.", "Formato especial con valor de regalo."],
    featuresJa: ["暗い場所で書けるライト付き。", "移動中や夜間のメモに便利。", "ギフトにも面白い特殊モデル。"],
    specs: [
      { labelEs: "Tipo", labelJa: "種類", valueEs: "Bolígrafo con luz", valueJa: "ライト付きボールペン" },
      { labelEs: "Marca", labelJa: "ブランド", valueEs: "Zebra", valueJa: "Zebra" },
      { labelEs: "Consulta", labelJa: "確認事項", valueEs: "Color y batería", valueJa: "色・電池確認" },
    ],
    availableOptionsEs: "Color, funcionamiento de luz y entrega se confirman por mensaje.",
    availableOptionsJa: "色、ライトの状態、受け渡し方法はメッセージで確認できます。",
    recommendedForEs: "Regalos, trabajo nocturno, viajes y notas en espacios oscuros.",
    recommendedForJa: "ギフト、夜間作業、移動中、暗い場所でのメモ。",
    relatedIds: ["sarasa-clip", "dr-grip-gspec", "daily-pens"],
  },
  "pilot-airstep": {
    featuresEs: ["Lápiz mecánico ligero para uso diario.", "Bueno para estudiantes y escritura continua.", "Precio accesible según edición."],
    featuresJa: ["日常使いしやすい軽めのシャープ。", "学生や長めの筆記に便利。", "通常・限定で価格確認。"],
    specs: [
      { labelEs: "Tipo", labelJa: "種類", valueEs: "Lápiz mecánico", valueJa: "シャープペン" },
      { labelEs: "Marca", labelJa: "ブランド", valueEs: "PILOT", valueJa: "PILOT" },
      { labelEs: "Consulta", labelJa: "確認事項", valueEs: "Color y grosor", valueJa: "色・芯径" },
    ],
    availableOptionsEs: "Color, edición y grosor de mina se confirman por mensaje.",
    availableOptionsJa: "色、通常/限定、芯径はメッセージで確認できます。",
    recommendedForEs: "Estudiantes, apuntes diarios y primera compra de lápiz japonés.",
    recommendedForJa: "学生、日常ノート、初めての日本シャープ。",
    relatedIds: ["pentel-ain-leads", "kuru-toga-ks", "kokuyo-campus-pencil-sharp"],
  },
  "pentel-smash": {
    featuresEs: ["Clásico técnico de Pentel.", "Agarre firme para control en escritura.", "Popular para estudio y dibujo."],
    featuresJa: ["ぺんてるの定番テクニカルモデル。", "筆記をコントロールしやすいグリップ。", "勉強・製図に人気。"],
    specs: [
      { labelEs: "Tipo", labelJa: "種類", valueEs: "Lápiz mecánico", valueJa: "シャープペン" },
      { labelEs: "Mina", labelJa: "芯径", valueEs: "0.3 mm / 0.5 mm según disponibilidad", valueJa: "在庫により0.3mm / 0.5mm" },
      { labelEs: "Marca", labelJa: "ブランド", valueEs: "Pentel", valueJa: "ぺんてる" },
    ],
    availableOptionsEs: "Grosor, color y disponibilidad se confirman por mensaje.",
    availableOptionsJa: "芯径、色、受け渡し可否はメッセージで確認できます。",
    recommendedForEs: "Estudio serio, dibujo técnico y usuarios que prefieren cuerpo firme.",
    recommendedForJa: "本格的な勉強、製図、しっかりした軸が好きな人。",
    relatedIds: ["graphgear-1000", "pentel-ain-leads", "orenznero"],
  },
  "alpha-gel-switch": {
    featuresEs: ["Grip Alpha-gel cómodo.", "Permite alternar modo KURUTOGA.", "Buena opción para escribir mucho."],
    featuresJa: ["握りやすいアルファゲルグリップ。", "クルトガモードを切り替え可能。", "たくさん書く人に便利。"],
    specs: [
      { labelEs: "Tipo", labelJa: "種類", valueEs: "Lápiz mecánico con grip gel", valueJa: "ゲルグリップシャープ" },
      { labelEs: "Mina", labelJa: "芯径", valueEs: "0.5 mm", valueJa: "0.5mm" },
      { labelEs: "Consulta", labelJa: "確認事項", valueEs: "Color de cuerpo", valueJa: "軸色" },
    ],
    availableOptionsEs: "Color y disponibilidad se confirman por mensaje.",
    availableOptionsJa: "軸色と受け渡し可否はメッセージで確認できます。",
    recommendedForEs: "Escritura larga, clases y usuarios que buscan comodidad.",
    recommendedForJa: "長時間筆記、授業、握りやすさ重視の人。",
    relatedIds: ["kurutoga-advance", "pentel-ain-leads", "dr-grip-gspec"],
  },
  "graphgear-1000": {
    featuresEs: ["Cuerpo técnico con grip firme.", "Clip retráctil y punta para precisión.", "Adecuado para dibujo y escritura cuidada."],
    featuresJa: ["しっかりしたグリップの製図系モデル。", "精密筆記に向く先端設計。", "製図・丁寧なノートに対応。"],
    specs: [
      { labelEs: "Tipo", labelJa: "種類", valueEs: "Lápiz mecánico técnico", valueJa: "製図用シャープ" },
      { labelEs: "Marca", labelJa: "ブランド", valueEs: "Pentel", valueJa: "ぺんてる" },
      { labelEs: "Consulta", labelJa: "確認事項", valueEs: "Grosor y color", valueJa: "芯径・色" },
    ],
    availableOptionsEs: "Grosor, color y entrega se confirman por mensaje.",
    availableOptionsJa: "芯径、色、受け渡し方法はメッセージで確認できます。",
    recommendedForEs: "Dibujo técnico, arquitectura, estudio y precisión.",
    recommendedForJa: "製図、建築、勉強、精密筆記。",
    relatedIds: ["pentel-smash", "orenznero", "pentel-ain-leads"],
  },
  "kurutoga-advance": {
    featuresEs: ["Mecanismo KURUTOGA Advance de giro rápido.", "Mantiene líneas finas y limpias.", "Buena mejora desde modelos básicos."],
    featuresJa: ["回転性能を高めたアドバンス機構。", "細くきれいな線を保ちやすい。", "基本モデルからのアップグレードに。"],
    specs: [
      { labelEs: "Tipo", labelJa: "種類", valueEs: "Lápiz mecánico", valueJa: "シャープペン" },
      { labelEs: "Mina", labelJa: "芯径", valueEs: "0.5 mm según disponibilidad", valueJa: "在庫により0.5mm" },
      { labelEs: "Marca", labelJa: "ブランド", valueEs: "uni", valueJa: "uni" },
    ],
    availableOptionsEs: "Color y grosor se confirman por mensaje.",
    availableOptionsJa: "色と芯径はメッセージで確認できます。",
    recommendedForEs: "Estudio, notas pequeñas y usuarios de KURUTOGA.",
    recommendedForJa: "勉強、小さな文字、クルトガ好きの人。",
    relatedIds: ["kuru-toga-ks", "kurutoga-metal", "pentel-ain-leads"],
  },
  "mono-graph-clear": {
    featuresEs: ["Cuerpo transparente y ligero.", "Incluye goma estilo MONO.", "Diseño atractivo para estuche y estudio."],
    featuresJa: ["透明感のある軽い軸。", "MONO系消しゴム付き。", "筆箱や勉強用に映えるデザイン。"],
    specs: [
      { labelEs: "Tipo", labelJa: "種類", valueEs: "Lápiz mecánico", valueJa: "シャープペン" },
      { labelEs: "Mina", labelJa: "芯径", valueEs: "0.3 mm", valueJa: "0.3mm" },
      { labelEs: "Consulta", labelJa: "確認事項", valueEs: "Color clear", valueJa: "クリアカラー" },
    ],
    availableOptionsEs: "Color clear y disponibilidad se confirman por mensaje.",
    availableOptionsJa: "クリアカラーと受け渡し可否はメッセージで確認できます。",
    recommendedForEs: "Estudiantes, estuches bonitos y compra de bajo precio.",
    recommendedForJa: "学生、かわいい筆箱、買いやすい価格の商品。",
    relatedIds: ["mono-graph-fine", "pentel-ain-leads", "kokuyo-campus-pencil-sharp"],
  },
  "mono-graph-fine": {
    featuresEs: ["Modelo MONO de sensación más cuidada.", "Bueno para escritura fina y notas limpias.", "Diseño sobrio para uso diario."],
    featuresJa: ["上質感のあるMONO graph系モデル。", "細かい筆記やきれいなノート向け。", "日常使いしやすい落ち着いたデザイン。"],
    specs: [
      { labelEs: "Tipo", labelJa: "種類", valueEs: "Lápiz mecánico", valueJa: "シャープペン" },
      { labelEs: "Mina", labelJa: "芯径", valueEs: "0.5 mm", valueJa: "0.5mm" },
      { labelEs: "Marca", labelJa: "ブランド", valueEs: "Tombow", valueJa: "Tombow" },
    ],
    availableOptionsEs: "Color y entrega se confirman por mensaje.",
    availableOptionsJa: "色と受け渡し方法はメッセージで確認できます。",
    recommendedForEs: "Notas limpias, estudio y usuarios que quieren diseño sobrio.",
    recommendedForJa: "きれいなノート、勉強、落ち着いたデザインが好きな人。",
    relatedIds: ["mono-graph-clear", "pentel-ain-leads", "graphgear-1000"],
  },
  "kokuyo-campus-pencil-sharp": {
    featuresEs: ["Sensación cercana a un lápiz.", "Opción individual o set para estudio.", "Precio accesible para compra múltiple."],
    featuresJa: ["鉛筆に近い感覚で使える。", "単品・セットで学習向け。", "複数買いしやすい価格帯。"],
    specs: [
      { labelEs: "Tipo", labelJa: "種類", valueEs: "Lápiz mecánico de estudio", valueJa: "学習用シャープ" },
      { labelEs: "Marca", labelJa: "ブランド", valueEs: "KOKUYO", valueJa: "KOKUYO" },
      { labelEs: "Rango", labelJa: "価格帯", valueEs: "3.000-13.000 CLP", valueJa: "3.000-13.000 CLP" },
    ],
    availableOptionsEs: "Individual, set, color y grosor se confirman por mensaje.",
    availableOptionsJa: "単品/セット、色、芯径はメッセージで確認できます。",
    recommendedForEs: "Estudiantes, compra por set y usuarios que prefieren sensación de lápiz.",
    recommendedForJa: "学生、セット購入、鉛筆感覚が好きな人。",
    relatedIds: ["pentel-ain-leads", "pilot-airstep", "kuru-toga-ks"],
  },
  "pilot-kirena-set": {
    featuresEs: ["Set de cinco colores para organizar notas.", "Útil para agenda y subrayado.", "Compra fácil para regalo pequeño."],
    featuresJa: ["ノート整理に使いやすい5色セット。", "手帳やマーキングに便利。", "小さなギフトにも使いやすい。"],
    specs: [
      { labelEs: "Tipo", labelJa: "種類", valueEs: "Set de marcadores", valueJa: "マーカーセット" },
      { labelEs: "Contenido", labelJa: "内容", valueEs: "5 colores", valueJa: "5色" },
      { labelEs: "Marca", labelJa: "ブランド", valueEs: "PILOT", valueJa: "PILOT" },
    ],
    availableOptionsEs: "Set, colores y entrega se confirman por mensaje.",
    availableOptionsJa: "セット内容、色、受け渡し方法はメッセージで確認できます。",
    recommendedForEs: "Bullet journal, estudio, agenda y regalos accesibles.",
    recommendedForJa: "手帳、勉強、ノート整理、買いやすいギフト。",
    relatedIds: ["plus-mt-fuji-eraser", "kokuyo-gloo-glue", "sarasa-clip"],
  },
  "plus-mt-fuji-eraser": {
    featuresEs: ["Goma japonesa con forma que cambia con el uso.", "Buen regalo pequeño.", "Complemento perfecto para lápices mecánicos."],
    featuresJa: ["使うほど形が変わる日本の消しゴム。", "小さなギフトに向く。", "シャープペンと一緒に買いやすい。"],
    specs: [
      { labelEs: "Tipo", labelJa: "種類", valueEs: "Goma", valueJa: "消しゴム" },
      { labelEs: "Marca", labelJa: "ブランド", valueEs: "PLUS", valueJa: "PLUS" },
      { labelEs: "Consulta", labelJa: "確認事項", valueEs: "Color / diseño", valueJa: "色・デザイン" },
    ],
    availableOptionsEs: "Diseño y disponibilidad se confirman por mensaje.",
    availableOptionsJa: "デザインと受け渡し可否はメッセージで確認できます。",
    recommendedForEs: "Regalos, estudiantes y compras complementarias.",
    recommendedForJa: "ギフト、学生、ついで買い。",
    relatedIds: ["kokuyo-campus-pencil-sharp", "pentel-ain-leads", "pilot-kirena-set"],
  },
  "kokuyo-gloo-glue": {
    featuresEs: ["Pegamento práctico para escritorio.", "Útil para cuadernos, collage y oficina.", "Precio bajo para añadir al pedido."],
    featuresJa: ["机まわりで使いやすいのり。", "ノート、コラージュ、仕事に便利。", "低価格で追加しやすい。"],
    specs: [
      { labelEs: "Tipo", labelJa: "種類", valueEs: "Pegamento", valueJa: "のり" },
      { labelEs: "Marca", labelJa: "ブランド", valueEs: "KOKUYO", valueJa: "KOKUYO" },
      { labelEs: "Consulta", labelJa: "確認事項", valueEs: "Tipo y cantidad", valueJa: "種類・数量" },
    ],
    availableOptionsEs: "Tipo, color y cantidad se confirman por mensaje.",
    availableOptionsJa: "種類、色、数量はメッセージで確認できます。",
    recommendedForEs: "Oficina, estudio, manualidades y compra adicional.",
    recommendedForJa: "仕事、勉強、工作、ついで買い。",
    relatedIds: ["plus-mt-fuji-eraser", "nylon-mesh-pen-case", "pilot-kirena-set"],
  },
  "nylon-mesh-pen-case": {
    featuresEs: ["Estuche ligero y visible.", "Ayuda a organizar plumas y recambios.", "Buena pieza para armar set de regalo."],
    featuresJa: ["軽くて中身が見やすいペンケース。", "ペンと替え芯を整理しやすい。", "ギフトセットにも合わせやすい。"],
    specs: [
      { labelEs: "Tipo", labelJa: "種類", valueEs: "Estuche", valueJa: "ペンケース" },
      { labelEs: "Material", labelJa: "素材", valueEs: "Nylon mesh", valueJa: "ナイロンメッシュ" },
      { labelEs: "Consulta", labelJa: "確認事項", valueEs: "Color y tamaño", valueJa: "色・サイズ" },
    ],
    availableOptionsEs: "Color, tamaño y capacidad se confirman por mensaje.",
    availableOptionsJa: "色、サイズ、容量はメッセージで確認できます。",
    recommendedForEs: "Sets, estudiantes, oficina y usuarios con muchos recambios.",
    recommendedForJa: "セット、学生、仕事、替え芯をまとめたい人。",
    relatedIds: ["daily-pens", "gel-compatible-refills", "plus-mt-fuji-eraser"],
  },
  "olfa-perforation-cutter": {
    featuresEs: ["Corte de perforación para papel.", "Útil para tickets, cupones y proyectos creativos.", "Herramienta japonesa especializada."],
    featuresJa: ["紙にミシン目を入れられる。", "チケット、クーポン、工作に便利。", "日本メーカーの専門ツール。"],
    specs: [
      { labelEs: "Tipo", labelJa: "種類", valueEs: "Cortador", valueJa: "カッター" },
      { labelEs: "Marca", labelJa: "ブランド", valueEs: "OLFA", valueJa: "OLFA" },
      { labelEs: "Consulta", labelJa: "確認事項", valueEs: "Modelo y uso", valueJa: "モデル・用途" },
    ],
    availableOptionsEs: "Modelo, estado de empaque y entrega se confirman por mensaje.",
    availableOptionsJa: "モデル、パッケージ状態、受け渡し方法はメッセージで確認できます。",
    recommendedForEs: "Manualidades, organización, tickets y usuarios de herramientas OLFA.",
    recommendedForJa: "工作、整理、チケット作り、OLFAツール好きの人。",
    relatedIds: ["accessories", "kokuyo-gloo-glue", "nylon-mesh-pen-case"],
  },
  "gel-compatible-refills": {
    featuresEs: ["Recambios para geles populares.", "Ayuda a seguir usando cuerpos favoritos.", "Compatibilidad se revisa antes de vender."],
    featuresJa: ["人気ゲルペン用の替え芯。", "お気に入りの本体を長く使える。", "販売前に対応可否を確認。"],
    specs: [
      { labelEs: "Tipo", labelJa: "種類", valueEs: "Recambios gel", valueJa: "ゲル替え芯" },
      { labelEs: "Compatibilidad", labelJa: "対応", valueEs: "SARASA / Juice up / uni-ball one", valueJa: "SARASA / Juice up / uni-ball one" },
      { labelEs: "Consulta", labelJa: "確認事項", valueEs: "Modelo, punta y color", valueJa: "対応モデル・芯径・色" },
    ],
    availableOptionsEs: "Indica el cuerpo del bolígrafo para confirmar compatibilidad antes de reservar.",
    availableOptionsJa: "取り置き前に、使っている本体を教えてもらい対応可否を確認します。",
    recommendedForEs: "Usuarios de SARASA, Juice up, uni-ball one y compras de mantenimiento.",
    recommendedForJa: "SARASA、Juice up、uni-ball oneユーザー、メンテナンス購入。",
    relatedIds: ["sarasa-clip", "juice-up", "uniball-one"],
  },
  "zento-limited-colors": {
    featuresEs: ["Colores limitados fáciles de comprar.", "Mismo cuerpo ZENTO Standard de uso diario.", "Buena opción para regalar en pares."],
    featuresJa: ["買いやすいZENTO限定色。", "日常使いしやすいStandard軸。", "色違いでのギフトにも向く。"],
    specs: [
      { labelEs: "Tipo", labelJa: "種類", valueEs: "Rollerball / gel", valueJa: "ローラーボール / ゲル" },
      { labelEs: "Punta", labelJa: "ボール径", valueEs: "0.38 mm / 0.7 mm según color", valueJa: "色により0.38mm / 0.7mm" },
      { labelEs: "Colores", labelJa: "色", valueEs: "Wine red, green, cream", valueJa: "ワインレッド、緑、クリーム" },
    ],
    availableOptionsEs: "Color y punta exacta se confirman por mensaje.",
    availableOptionsJa: "色とボール径はメッセージで確認できます。",
    recommendedForEs: "Usuarios que quieren ZENTO a bajo precio con color especial.",
    recommendedForJa: "手頃な価格でZENTOの限定色を使いたい人。",
    relatedIds: ["zento-standard", "zento-flow", "zento-refill"],
  },
  "sarasa-dry-refill": {
    featuresEs: ["Recambio de secado rápido.", "Disponible para cuerpos SARASA dry compatibles.", "Bueno para comprar junto con varios colores."],
    featuresJa: ["速乾タイプの替え芯。", "対応するSARASA dry本体に使える。", "複数色まとめ買いに向く。"],
    specs: [
      { labelEs: "Tipo", labelJa: "種類", valueEs: "Recambio gel", valueJa: "ゲル替え芯" },
      { labelEs: "Punta", labelJa: "芯径", valueEs: "0.4 mm / 0.5 mm", valueJa: "0.4mm / 0.5mm" },
      { labelEs: "Colores", labelJa: "色", valueEs: "Black / blue", valueJa: "黒 / 青" },
    ],
    availableOptionsEs: "Punta, color y cuerpo compatible se confirman por mensaje.",
    availableOptionsJa: "芯径、色、対応本体はメッセージで確認できます。",
    recommendedForEs: "Usuarios de SARASA dry y compras de mantenimiento.",
    recommendedForJa: "SARASA dryユーザー、メンテナンス購入。",
    relatedIds: ["sarasa-dry", "sarasa-clip-refill", "gel-compatible-refills"],
  },
  "sarasa-clip-refill": {
    featuresEs: ["Recambio económico para SARASA CLIP.", "Mantiene tu cuerpo favorito en uso.", "Ideal para compra adicional."],
    featuresJa: ["サラサクリップ用の低価格替え芯。", "お気に入り本体を長く使える。", "ついで買いに向く。"],
    specs: [
      { labelEs: "Tipo", labelJa: "種類", valueEs: "Recambio gel", valueJa: "ゲル替え芯" },
      { labelEs: "Marca", labelJa: "ブランド", valueEs: "Zebra", valueJa: "Zebra" },
      { labelEs: "Consulta", labelJa: "確認事項", valueEs: "Punta y color", valueJa: "芯径・色" },
    ],
    availableOptionsEs: "Punta, color y compatibilidad se confirman por mensaje.",
    availableOptionsJa: "芯径、色、互換性はメッセージで確認できます。",
    recommendedForEs: "Usuarios de SARASA CLIP que quieren bajo costo.",
    recommendedForJa: "サラサクリップを低コストで使い続けたい人。",
    relatedIds: ["sarasa-clip", "sarasa-dry-refill", "gel-compatible-refills"],
  },
  "jetstream-edge-refill": {
    featuresEs: ["Punta 0.28 mm para escritura muy fina.", "Recambio específico para JETSTREAM EDGE.", "Útil para agenda y letra pequeña."],
    featuresJa: ["0.28mmの超極細替え芯。", "JETSTREAM EDGE向け。", "手帳や小さい文字に便利。"],
    specs: [
      { labelEs: "Tipo", labelJa: "種類", valueEs: "Recambio aceite", valueJa: "油性替え芯" },
      { labelEs: "Punta", labelJa: "ボール径", valueEs: "0.28 mm", valueJa: "0.28mm" },
      { labelEs: "Compatibilidad", labelJa: "対応", valueEs: "JETSTREAM EDGE", valueJa: "JETSTREAM EDGE" },
    ],
    availableOptionsEs: "Color y cuerpo compatible se confirman por mensaje.",
    availableOptionsJa: "色と対応本体はメッセージで確認できます。",
    recommendedForEs: "Usuarios de JETSTREAM EDGE, agenda y escritura pequeña.",
    recommendedForJa: "JETSTREAM EDGEユーザー、手帳、小さい文字を書く人。",
    relatedIds: ["jetstream-edge", "jetstream-refill", "daily-pens"],
  },
  "energel-refill": {
    featuresEs: ["Recambio gel de secado rápido.", "Colores básicos para multicolor.", "Buen complemento para EnerGel multicolor."],
    featuresJa: ["速乾ゲル替え芯。", "多色用の基本色。", "エナージェル多色と合わせやすい。"],
    specs: [
      { labelEs: "Tipo", labelJa: "種類", valueEs: "Recambio gel", valueJa: "ゲル替え芯" },
      { labelEs: "Punta", labelJa: "芯径", valueEs: "0.5 mm", valueJa: "0.5mm" },
      { labelEs: "Colores", labelJa: "色", valueEs: "Red / blue / black", valueJa: "赤 / 青 / 黒" },
    ],
    availableOptionsEs: "Color y compatibilidad se confirman por mensaje.",
    availableOptionsJa: "色と対応可否はメッセージで確認できます。",
    recommendedForEs: "Usuarios de EnerGel multicolor y compras en pack.",
    recommendedForJa: "エナージェル多色ユーザー、まとめ買い。",
    relatedIds: ["energel-multicolor", "gel-compatible-refills", "daily-pens"],
  },
  "drgrip-refill": {
    featuresEs: ["Recambio para cuerpos Dr.Grip compatibles.", "Mantiene un bolígrafo cómodo en uso.", "Precio bajo para compra adicional."],
    featuresJa: ["対応するDr.Grip本体用の替え芯。", "握りやすい本体を長く使える。", "低価格の追加購入向け。"],
    specs: [
      { labelEs: "Tipo", labelJa: "種類", valueEs: "Recambio bolígrafo", valueJa: "ボールペン替え芯" },
      { labelEs: "Punta", labelJa: "芯径", valueEs: "0.5 mm", valueJa: "0.5mm" },
      { labelEs: "Marca", labelJa: "ブランド", valueEs: "PILOT", valueJa: "PILOT" },
    ],
    availableOptionsEs: "Compatibilidad con el cuerpo Dr.Grip se confirma por mensaje.",
    availableOptionsJa: "Dr.Grip本体との対応はメッセージで確認できます。",
    recommendedForEs: "Usuarios de Dr.Grip y compras de mantenimiento.",
    recommendedForJa: "Dr.Gripユーザー、メンテナンス購入。",
    relatedIds: ["dr-grip-gspec", "drgrip-play-balance", "daily-pens"],
  },
  "drgrip-play-balance": {
    featuresEs: ["Agarre cómodo para escritura larga.", "Balance ajustable para personalizar la sensación.", "Ideal para estudio y apuntes extensos."],
    featuresJa: ["長時間筆記に向くグリップ。", "重心バランスを調整して感覚を変えられる。", "勉強や長いノートに向く。"],
    specs: [
      { labelEs: "Tipo", labelJa: "種類", valueEs: "Lápiz mecánico", valueJa: "シャープペン" },
      { labelEs: "Mina", labelJa: "芯径", valueEs: "0.5 mm", valueJa: "0.5mm" },
      { labelEs: "Marca", labelJa: "ブランド", valueEs: "PILOT", valueJa: "PILOT" },
    ],
    availableOptionsEs: "Color y entrega se confirman por mensaje.",
    availableOptionsJa: "色と受け渡し方法はメッセージで確認できます。",
    recommendedForEs: "Estudiantes y personas que escriben durante mucho tiempo.",
    recommendedForJa: "学生、長時間書く人。",
    relatedIds: ["dr-grip-gspec", "pentel-ain-leads", "kuru-toga-ks"],
  },
  "kurutoga-dive-aurora-purple": {
    featuresEs: ["Color especial Aurora Purple.", "Mecanismo premium KURUTOGA DIVE.", "Pieza de alto atractivo para colección."],
    featuresJa: ["Aurora Purpleの特別感。", "KURUTOGA DIVEのプレミアム機構。", "コレクション性が高い一本。"],
    specs: [
      { labelEs: "Tipo", labelJa: "種類", valueEs: "Lápiz mecánico premium", valueJa: "プレミアムシャープペン" },
      { labelEs: "Mina", labelJa: "芯径", valueEs: "0.5 mm", valueJa: "0.5mm" },
      { labelEs: "Color", labelJa: "色", valueEs: "Aurora Purple", valueJa: "Aurora Purple" },
      { labelEs: "Marca", labelJa: "ブランド", valueEs: "uni", valueJa: "uni" },
    ],
    availableOptionsEs: "Disponible como 0.5 mm Aurora Purple.",
    availableOptionsJa: "0.5mm Aurora Purpleとして扱います。",
    recommendedForEs: "Coleccionistas, regalos premium y usuarios avanzados.",
    recommendedForJa: "コレクター、プレミアムギフト、上級ユーザー。",
    relatedIds: ["kurutoga-dive", "kurutoga-metal", "pentel-ain-leads"],
  },
  "kurutoga-metal-sunrise-orange": {
    featuresEs: ["Color limitado Sunrise Orange.", "Cuerpo metálico firme.", "Perfecto para quien ya usa KURUTOGA."],
    featuresJa: ["Sunrise Orangeの限定色。", "しっかりした金属軸。", "クルトガ愛用者に向く。"],
    specs: [
      { labelEs: "Tipo", labelJa: "種類", valueEs: "Lápiz mecánico metálico", valueJa: "金属軸シャープペン" },
      { labelEs: "Color", labelJa: "色", valueEs: "Sunrise Orange", valueJa: "Sunrise Orange" },
      { labelEs: "Precio", labelJa: "価格", valueEs: "45.000 CLP", valueJa: "45.000 CLP" },
    ],
    availableOptionsEs: "Edición y estado se confirman por mensaje.",
    availableOptionsJa: "限定モデルと状態はメッセージで確認できます。",
    recommendedForEs: "Usuarios que quieren una edición KURUTOGA llamativa.",
    recommendedForJa: "印象的な限定クルトガを探す人。",
    relatedIds: ["kurutoga-metal", "kurutoga-metal-nocturne-black", "kurutoga-dive"],
  },
  "kurutoga-metal-nocturne-black": {
    featuresEs: ["Color limitado Nocturne Black.", "Diseño sobrio para escritorio profesional.", "Sensación metálica estable."],
    featuresJa: ["Nocturne Blackの限定色。", "仕事用デスクにも合う落ち着いた色。", "安定した金属軸の質感。"],
    specs: [
      { labelEs: "Tipo", labelJa: "種類", valueEs: "Lápiz mecánico metálico", valueJa: "金属軸シャープペン" },
      { labelEs: "Color", labelJa: "色", valueEs: "Nocturne Black", valueJa: "Nocturne Black" },
      { labelEs: "Precio", labelJa: "価格", valueEs: "45.000 CLP", valueJa: "45.000 CLP" },
    ],
    availableOptionsEs: "Edición, color y entrega se confirman por mensaje.",
    availableOptionsJa: "限定モデル、色、受け渡し方法はメッセージで確認できます。",
    recommendedForEs: "Regalos sobrios y usuarios que prefieren negro premium.",
    recommendedForJa: "落ち着いたギフト、黒い上位モデルが好きな人。",
    relatedIds: ["kurutoga-metal", "kurutoga-metal-sunrise-orange", "pentel-ain-leads"],
  },
  "campus-pencil-sharp-set-black": {
    featuresEs: ["Set para comparar escritura.", "Color negro fácil de usar.", "Bueno para estudio y regalos escolares."],
    featuresJa: ["書き比べできるセット。", "使いやすい黒系。", "勉強用や学生向けギフトに。"],
    specs: [
      { labelEs: "Tipo", labelJa: "種類", valueEs: "Set de lápices mecánicos", valueJa: "シャープペンセット" },
      { labelEs: "Color", labelJa: "色", valueEs: "Black", valueJa: "黒" },
      { labelEs: "Marca", labelJa: "ブランド", valueEs: "KOKUYO", valueJa: "KOKUYO" },
    ],
    availableOptionsEs: "Contenido del set y entrega se confirman por mensaje.",
    availableOptionsJa: "セット内容と受け渡し方法はメッセージで確認できます。",
    recommendedForEs: "Estudiantes, comparación de puntas y regalo escolar.",
    recommendedForJa: "学生、芯径の書き比べ、学習ギフト。",
    relatedIds: ["campus-pencil-sharp-set-white", "kokuyo-campus-pencil-sharp", "pentel-ain-leads"],
  },
  "campus-pencil-sharp-set-white": {
    featuresEs: ["Set blanco de estudio.", "Permite probar sensaciones de lápiz mecánico.", "Compra simple para armar kit escolar."],
    featuresJa: ["白系の学習セット。", "シャープペンの書き味を試せる。", "学習キットに入れやすい。"],
    specs: [
      { labelEs: "Tipo", labelJa: "種類", valueEs: "Set de lápices mecánicos", valueJa: "シャープペンセット" },
      { labelEs: "Color", labelJa: "色", valueEs: "White", valueJa: "白" },
      { labelEs: "Marca", labelJa: "ブランド", valueEs: "KOKUYO", valueJa: "KOKUYO" },
    ],
    availableOptionsEs: "Contenido del set y entrega se confirman por mensaje.",
    availableOptionsJa: "セット内容と受け渡し方法はメッセージで確認できます。",
    recommendedForEs: "Estudio, escritura diaria y regalos prácticos.",
    recommendedForJa: "勉強、日常筆記、実用ギフト。",
    relatedIds: ["campus-pencil-sharp-set-black", "kokuyo-campus-pencil-sharp", "uni-leads-07"],
  },
  "uni-leads-07": {
    featuresEs: ["Mina 0.7 mm más firme.", "Disponible en HB o B según consulta.", "Buena para lápices de trazo fuerte."],
    featuresJa: ["しっかり書ける0.7mm芯。", "HB/Bを確認可能。", "太めのシャープペンに合う。"],
    specs: [
      { labelEs: "Tipo", labelJa: "種類", valueEs: "Minas", valueJa: "シャー芯" },
      { labelEs: "Grosor", labelJa: "芯径", valueEs: "0.7 mm", valueJa: "0.7mm" },
      { labelEs: "Dureza", labelJa: "濃さ", valueEs: "HB / B", valueJa: "HB / B" },
    ],
    availableOptionsEs: "Dureza y compatibilidad se confirman por mensaje.",
    availableOptionsJa: "濃さと対応本体はメッセージで確認できます。",
    recommendedForEs: "Usuarios de lápiz mecánico 0.7 mm y escritura firme.",
    recommendedForJa: "0.7mmシャープユーザー、濃くしっかり書きたい人。",
    relatedIds: ["pentel-ain-leads", "kokuyo-campus-pencil-sharp", "graphgear-1000"],
  },
  "sea-design-eraser": {
    featuresEs: ["Diseño marino pequeño.", "Precio bajo para añadir al pedido.", "Sirve como regalo simple."],
    featuresJa: ["海モチーフの小物。", "低価格で追加しやすい。", "小さなギフトにも使える。"],
    specs: [
      { labelEs: "Tipo", labelJa: "種類", valueEs: "Goma", valueJa: "消しゴム" },
      { labelEs: "Diseño", labelJa: "デザイン", valueEs: "Sea motif", valueJa: "海モチーフ" },
      { labelEs: "Precio", labelJa: "価格", valueEs: "2.000 CLP", valueJa: "2.000 CLP" },
    ],
    availableOptionsEs: "Diseño exacto y cantidad se confirman por mensaje.",
    availableOptionsJa: "デザインと数量はメッセージで確認できます。",
    recommendedForEs: "Regalos pequeños, estudiantes y compra complementaria.",
    recommendedForJa: "小さなギフト、学生、ついで買い。",
    relatedIds: ["plus-mt-fuji-eraser", "neko-shiba-eraser", "kokuyo-gloo-glue"],
  },
  "sushi-keyholder": {
    featuresEs: ["Motivo japonés fácil de regalar.", "Precio accesible.", "Complemento divertido junto con papelería."],
    featuresJa: ["日本らしいモチーフでギフト向き。", "買いやすい価格。", "文具と一緒に楽しく追加できる。"],
    specs: [
      { labelEs: "Tipo", labelJa: "種類", valueEs: "Keyholder", valueJa: "キーホルダー" },
      { labelEs: "Motivo", labelJa: "モチーフ", valueEs: "Sushi", valueJa: "寿司" },
      { labelEs: "Precio", labelJa: "価格", valueEs: "4.000 CLP", valueJa: "4.000 CLP" },
    ],
    availableOptionsEs: "Diseño y entrega se confirman por mensaje.",
    availableOptionsJa: "デザインと受け渡し方法はメッセージで確認できます。",
    recommendedForEs: "Regalos pequeños y compras impulsivas.",
    recommendedForJa: "小さなギフト、ついで買い。",
    relatedIds: ["sea-design-eraser", "neko-shiba-eraser", "nylon-mesh-pen-case"],
  },
  "neko-shiba-eraser": {
    featuresEs: ["Diseños de gato o shiba.", "Cute item para escritorio.", "Buen complemento de bajo tamaño."],
    featuresJa: ["ネコ・シバ犬デザイン。", "机まわりに置きたくなる小物。", "小さく追加しやすい。"],
    specs: [
      { labelEs: "Tipo", labelJa: "種類", valueEs: "Goma", valueJa: "消しゴム" },
      { labelEs: "Diseños", labelJa: "デザイン", valueEs: "Neko / Shiba", valueJa: "ネコ / シバ" },
      { labelEs: "Precio", labelJa: "価格", valueEs: "4.000 CLP", valueJa: "4.000 CLP" },
    ],
    availableOptionsEs: "Diseño disponible se confirma por mensaje.",
    availableOptionsJa: "選べるデザインはメッセージで確認できます。",
    recommendedForEs: "Regalos pequeños y fans de papelería cute.",
    recommendedForJa: "小さなギフト、かわいい文具が好きな人。",
    relatedIds: ["plus-mt-fuji-eraser", "sea-design-eraser", "sushi-keyholder"],
  },
  "jetstream-single": {
    featuresEs: ["Tinta JETSTREAM suave.", "Precio fácil para compra diaria.", "Bueno para oficina, escuela y repuestos."],
    featuresJa: ["なめらかなJETSTREAMインク。", "日常用に買いやすい価格。", "仕事・学校・予備用に便利。"],
    specs: [
      { labelEs: "Tipo", labelJa: "種類", valueEs: "Bolígrafo de aceite", valueJa: "油性ボールペン" },
      { labelEs: "Marca", labelJa: "ブランド", valueEs: "uni", valueJa: "uni" },
      { labelEs: "Precio", labelJa: "価格", valueEs: "2.500 CLP", valueJa: "2.500 CLP" },
    ],
    availableOptionsEs: "Color y punta se confirman por mensaje.",
    availableOptionsJa: "色とボール径はメッセージで確認できます。",
    recommendedForEs: "Uso diario, oficina y compras múltiples.",
    recommendedForJa: "普段使い、仕事、まとめ買い。",
    relatedIds: ["jetstream-lite", "jetstream-refill", "daily-pens"],
  },
  "jetstream-lite-07": {
    featuresEs: ["Punta 0.7 mm más visible.", "Tinta ligera para escritura diaria.", "Buena opción para firmas y notas grandes."],
    featuresJa: ["見やすい0.7mm。", "軽い書き心地の日常用インク。", "署名や大きめの文字に向く。"],
    specs: [
      { labelEs: "Tipo", labelJa: "種類", valueEs: "Bolígrafo", valueJa: "ボールペン" },
      { labelEs: "Punta", labelJa: "ボール径", valueEs: "0.7 mm", valueJa: "0.7mm" },
      { labelEs: "Marca", labelJa: "ブランド", valueEs: "uni", valueJa: "uni" },
    ],
    availableOptionsEs: "Color disponible se confirma por mensaje.",
    availableOptionsJa: "選べる色はメッセージで確認できます。",
    recommendedForEs: "Usuarios que quieren una línea más marcada.",
    recommendedForJa: "少し太めで見やすく書きたい人。",
    relatedIds: ["jetstream-lite", "jetstream-lite-refill", "jetstream-single"],
  },
  "jetstream-lite-refill": {
    featuresEs: ["Recambio para Lite touch ink.", "Evita reemplazar el cuerpo completo.", "Puntas y colores se revisan antes de reservar."],
    featuresJa: ["Lite touch ink用の替え芯。", "本体を長く使える。", "芯径と色は購入前に確認。"],
    specs: [
      { labelEs: "Tipo", labelJa: "種類", valueEs: "Recambio", valueJa: "替え芯" },
      { labelEs: "Punta", labelJa: "ボール径", valueEs: "0.5 mm / 0.7 mm", valueJa: "0.5mm / 0.7mm" },
      { labelEs: "Precio", labelJa: "価格", valueEs: "2.300-2.500 CLP", valueJa: "2.300-2.500 CLP" },
    ],
    availableOptionsEs: "Indica tu cuerpo JETSTREAM para confirmar compatibilidad.",
    availableOptionsJa: "使っているJETSTREAM本体を確認して対応可否を見ます。",
    recommendedForEs: "Usuarios de JETSTREAM Lite touch y mantenimiento.",
    recommendedForJa: "Lite touch inkユーザー、メンテナンス購入。",
    relatedIds: ["jetstream-lite", "jetstream-lite-07", "jetstream-refill"],
  },
  "uniball-one-refill": {
    featuresEs: ["Recambio para uni-ball one de un color.", "Gel de línea nítida.", "Ideal para mantener cuerpos favoritos."],
    featuresJa: ["uni-ball one単色用替え芯。", "くっきりしたゲルインク。", "お気に入り本体を長く使える。"],
    specs: [
      { labelEs: "Tipo", labelJa: "種類", valueEs: "Recambio gel", valueJa: "ゲル替え芯" },
      { labelEs: "Punta", labelJa: "ボール径", valueEs: "0.38 mm / 0.5 mm", valueJa: "0.38mm / 0.5mm" },
      { labelEs: "Precio", labelJa: "価格", valueEs: "2.000 CLP", valueJa: "2.000 CLP" },
    ],
    availableOptionsEs: "Punta, color y compatibilidad se confirman por mensaje.",
    availableOptionsJa: "芯径、色、対応本体はメッセージで確認できます。",
    recommendedForEs: "Usuarios de uni-ball one y compras de bajo precio.",
    recommendedForJa: "uni-ball oneユーザー、低価格の追加購入。",
    relatedIds: ["uniball-one", "uniball-one-3-refill", "gel-compatible-refills"],
  },
  "uniball-one-3-refill": {
    featuresEs: ["Recambio para cuerpo multicolor.", "Colores básicos para uso diario.", "Bueno para mantener un solo cuerpo en uso."],
    featuresJa: ["多色本体用の替え芯。", "日常で使う基本色。", "1本の本体を長く使える。"],
    specs: [
      { labelEs: "Tipo", labelJa: "種類", valueEs: "Recambio multicolor", valueJa: "多色用替え芯" },
      { labelEs: "Punta", labelJa: "ボール径", valueEs: "0.38 mm / 0.5 mm", valueJa: "0.38mm / 0.5mm" },
      { labelEs: "Compatibilidad", labelJa: "対応", valueEs: "uni-ball one 3", valueJa: "uni-ball one 3" },
    ],
    availableOptionsEs: "Color y punta se confirman por mensaje.",
    availableOptionsJa: "色とボール径はメッセージで確認できます。",
    recommendedForEs: "Usuarios de uni-ball one 3 y mantenimiento.",
    recommendedForJa: "uni-ball one 3ユーザー、メンテナンス購入。",
    relatedIds: ["uniball-one-3", "uniball-one-refill", "uniball-one"],
  },
  "lightwrite-4c-refill": {
    featuresEs: ["Recambio compacto 4C.", "Precio bajo para mantener bolígrafos compatibles.", "Antes de vender se revisa compatibilidad."],
    featuresJa: ["コンパクトな4C替え芯。", "対応ペンを低価格で長く使える。", "販売前に互換性を確認。"],
    specs: [
      { labelEs: "Tipo", labelJa: "種類", valueEs: "Recambio 4C", valueJa: "4C替え芯" },
      { labelEs: "Punta", labelJa: "芯径", valueEs: "0.7 mm", valueJa: "0.7mm" },
      { labelEs: "Marca", labelJa: "ブランド", valueEs: "Zebra", valueJa: "Zebra" },
    ],
    availableOptionsEs: "Cuerpo compatible y color se confirman por mensaje.",
    availableOptionsJa: "対応本体と色はメッセージで確認できます。",
    recommendedForEs: "Usuarios de Lightwrite Alpha y cuerpos 4C compatibles.",
    recommendedForJa: "Lightwrite Alphaや4C対応本体のユーザー。",
    relatedIds: ["zebra-lightwrite-alpha", "gel-compatible-refills", "daily-pens"],
  },
  "juice-up-refill": {
    featuresEs: ["Recambio gel 0.5 mm.", "Mantiene Juice up en uso.", "Disponible para consultar en colores básicos."],
    featuresJa: ["0.5mmゲル替え芯。", "Juice up本体を長く使える。", "基本色を確認可能。"],
    specs: [
      { labelEs: "Tipo", labelJa: "種類", valueEs: "Recambio gel", valueJa: "ゲル替え芯" },
      { labelEs: "Punta", labelJa: "ボール径", valueEs: "0.5 mm", valueJa: "0.5mm" },
      { labelEs: "Marca", labelJa: "ブランド", valueEs: "PILOT", valueJa: "PILOT" },
    ],
    availableOptionsEs: "Color y compatibilidad se confirman por mensaje.",
    availableOptionsJa: "色と対応本体はメッセージで確認できます。",
    recommendedForEs: "Usuarios de Juice up y escritura gel.",
    recommendedForJa: "Juice upユーザー、ゲルペン好き。",
    relatedIds: ["juice-up", "gel-compatible-refills", "uniball-one-refill"],
  },
  "campus-pencil-sharp-basic": {
    featuresEs: ["Sensación de lápiz en formato mecánico.", "Precio accesible para escuela.", "Disponible en colores básicos."],
    featuresJa: ["鉛筆のような書き心地。", "学生向けに買いやすい価格。", "基本色を確認可能。"],
    specs: [
      { labelEs: "Tipo", labelJa: "種類", valueEs: "Lápiz mecánico", valueJa: "シャープペン" },
      { labelEs: "Mina", labelJa: "芯径", valueEs: "0.3 mm / 0.5 mm", valueJa: "0.3mm / 0.5mm" },
      { labelEs: "Marca", labelJa: "ブランド", valueEs: "KOKUYO", valueJa: "KOKUYO" },
    ],
    availableOptionsEs: "Color y grosor se confirman por mensaje.",
    availableOptionsJa: "色と芯径はメッセージで確認できます。",
    recommendedForEs: "Estudiantes y compra por varios colores.",
    recommendedForJa: "学生、色違いのまとめ買い。",
    relatedIds: ["kokuyo-campus-pencil-sharp", "campus-pencil-sharp-mint", "pentel-ain-leads"],
  },
  "campus-pencil-sharp-mint": {
    featuresEs: ["Color mint suave.", "Punta 0.3 mm para escritura pequeña.", "Precio bajo para compra impulsiva."],
    featuresJa: ["やさしいミントカラー。", "小さい文字に向く0.3mm。", "追加しやすい低価格。"],
    specs: [
      { labelEs: "Tipo", labelJa: "種類", valueEs: "Lápiz mecánico", valueJa: "シャープペン" },
      { labelEs: "Mina", labelJa: "芯径", valueEs: "0.3 mm", valueJa: "0.3mm" },
      { labelEs: "Color", labelJa: "色", valueEs: "Mint", valueJa: "ミント" },
    ],
    availableOptionsEs: "Disponibilidad y entrega se confirman por mensaje.",
    availableOptionsJa: "受け渡し可否はメッセージで確認できます。",
    recommendedForEs: "Notas pequeñas, estudio y colores suaves.",
    recommendedForJa: "小さい文字、勉強、淡い色が好きな人。",
    relatedIds: ["campus-pencil-sharp-basic", "kokuyo-campus-pencil-sharp", "pentel-ain-leads"],
  },
  "pentel-ain-thick-leads": {
    featuresEs: ["Grosores 0.9 y 1.3 mm.", "Trazo más visible y resistente.", "Disponible en durezas a confirmar."],
    featuresJa: ["0.9mm/1.3mmの太芯。", "見やすく折れにくい太めの線。", "濃さは確認可能。"],
    specs: [
      { labelEs: "Tipo", labelJa: "種類", valueEs: "Minas", valueJa: "シャー芯" },
      { labelEs: "Grosor", labelJa: "芯径", valueEs: "0.9 mm / 1.3 mm", valueJa: "0.9mm / 1.3mm" },
      { labelEs: "Marca", labelJa: "ブランド", valueEs: "Pentel", valueJa: "ぺんてる" },
    ],
    availableOptionsEs: "Grosor y dureza se confirman por mensaje.",
    availableOptionsJa: "芯径と濃さはメッセージで確認できます。",
    recommendedForEs: "Usuarios que quieren líneas gruesas y visibles.",
    recommendedForJa: "太く見やすい線を書きたい人。",
    relatedIds: ["pentel-ain-leads", "uni-leads-07", "campus-pencil-sharp-basic"],
  },
  "kurutoga-metal-silent-blue": {
    featuresEs: ["Color normal Silent Blue.", "Cuerpo metálico firme.", "Mecanismo KURUTOGA para escritura estable."],
    featuresJa: ["通常色Silent Blue。", "しっかりした金属軸。", "安定して書けるクルトガ機構。"],
    specs: [
      { labelEs: "Tipo", labelJa: "種類", valueEs: "Lápiz mecánico metálico", valueJa: "金属軸シャープペン" },
      { labelEs: "Color", labelJa: "色", valueEs: "Silent Blue", valueJa: "Silent Blue" },
      { labelEs: "Precio", labelJa: "価格", valueEs: "40.000 CLP", valueJa: "40.000 CLP" },
    ],
    availableOptionsEs: "Color, caja y entrega se confirman por mensaje.",
    availableOptionsJa: "色、箱、受け渡し方法はメッセージで確認できます。",
    recommendedForEs: "Usuarios que quieren KURUTOGA premium en color sobrio.",
    recommendedForJa: "落ち着いた色の上位クルトガを探す人。",
    relatedIds: ["kurutoga-metal", "kurutoga-metal-phantom-grey", "pentel-ain-leads"],
  },
  "kurutoga-metal-phantom-grey": {
    featuresEs: ["Color normal Phantom Grey.", "Aspecto profesional.", "Buena opción premium sin color llamativo."],
    featuresJa: ["通常色Phantom Grey。", "仕事用にも合う見た目。", "派手すぎない上位モデル。"],
    specs: [
      { labelEs: "Tipo", labelJa: "種類", valueEs: "Lápiz mecánico metálico", valueJa: "金属軸シャープペン" },
      { labelEs: "Color", labelJa: "色", valueEs: "Phantom Grey", valueJa: "Phantom Grey" },
      { labelEs: "Precio", labelJa: "価格", valueEs: "40.000 CLP", valueJa: "40.000 CLP" },
    ],
    availableOptionsEs: "Color, caja y entrega se confirman por mensaje.",
    availableOptionsJa: "色、箱、受け渡し方法はメッセージで確認できます。",
    recommendedForEs: "Escritorio profesional, regalo sobrio y usuarios de KURUTOGA.",
    recommendedForJa: "仕事用、落ち着いたギフト、クルトガ愛用者。",
    relatedIds: ["kurutoga-metal", "kurutoga-metal-silent-blue", "kurutoga-dive"],
  },
  "zento-standard-yellow": {
    featuresEs: ["Color amarillo para destacar notas.", "Precio fácil para sumar al pedido.", "Tinta suave ZENTO para uso diario."],
    featuresJa: ["ノートで目立つ黄色。", "追加しやすい価格。", "日常使いしやすいZENTOのなめらかさ。"],
    specs: [
      { labelEs: "Tipo", labelJa: "種類", valueEs: "Rollerball", valueJa: "ローラーボール" },
      { labelEs: "Color", labelJa: "色", valueEs: "Yellow", valueJa: "黄" },
      { labelEs: "Precio", labelJa: "価格", valueEs: "3.800 CLP", valueJa: "3.800 CLP" },
    ],
    availableOptionsEs: "Punta, color y entrega se confirman por mensaje.",
    availableOptionsJa: "芯径、色、受け渡し方法はメッセージで確認できます。",
    recommendedForEs: "Planner, estudio, subrayado suave y compra por colores.",
    recommendedForJa: "手帳、勉強、やわらかい色分け、色違い購入。",
    relatedIds: ["zento-standard", "zento-standard-orange", "zento-refill"],
  },
  "zento-standard-orange": {
    featuresEs: ["Naranjo visible sin ser demasiado fuerte.", "Bueno para agenda y estudio.", "ZENTO Standard de bajo precio."],
    featuresJa: ["強すぎず見やすいオレンジ。", "手帳や勉強に便利。", "買いやすいZENTO Standard。"],
    specs: [
      { labelEs: "Tipo", labelJa: "種類", valueEs: "Rollerball", valueJa: "ローラーボール" },
      { labelEs: "Color", labelJa: "色", valueEs: "Orange", valueJa: "オレンジ" },
      { labelEs: "Precio", labelJa: "価格", valueEs: "3.800 CLP", valueJa: "3.800 CLP" },
    ],
    availableOptionsEs: "Punta, color y entrega se confirman por mensaje.",
    availableOptionsJa: "芯径、色、受け渡し方法はメッセージで確認できます。",
    recommendedForEs: "Notas de estudio, planner y separacion por tema.",
    recommendedForJa: "勉強ノート、手帳、テーマ別の色分け。",
    relatedIds: ["zento-standard", "zento-standard-yellow", "zento-refill"],
  },
  "zento-standard-purple": {
    featuresEs: ["Morado suave para escritura con personalidad.", "Combina con set de colores ZENTO.", "Trazo cómodo para notas largas."],
    featuresJa: ["個性を出せる紫。", "ZENTO色違いと組み合わせやすい。", "長めのメモにも使いやすい書き味。"],
    specs: [
      { labelEs: "Tipo", labelJa: "種類", valueEs: "Rollerball", valueJa: "ローラーボール" },
      { labelEs: "Color", labelJa: "色", valueEs: "Purple", valueJa: "紫" },
      { labelEs: "Precio", labelJa: "価格", valueEs: "3.800 CLP", valueJa: "3.800 CLP" },
    ],
    availableOptionsEs: "Punta, color y entrega se confirman por mensaje.",
    availableOptionsJa: "芯径、色、受け渡し方法はメッセージで確認できます。",
    recommendedForEs: "Cartas, planner y usuarios que buscan colores distintos.",
    recommendedForJa: "手紙、手帳、少し違う色を探している人。",
    relatedIds: ["zento-standard", "zento-limited-wine-red", "zento-refill"],
  },
  "zento-limited-wine-red": {
    featuresEs: ["Color limitado wine red.", "Aspecto más especial que los colores básicos.", "Precio accesible para colección."],
    featuresJa: ["限定色ワインレッド。", "通常色より少し特別感。", "集めやすい価格。"],
    specs: [
      { labelEs: "Tipo", labelJa: "種類", valueEs: "Rollerball limitado", valueJa: "限定ローラーボール" },
      { labelEs: "Color", labelJa: "色", valueEs: "Wine red", valueJa: "ワインレッド" },
      { labelEs: "Precio", labelJa: "価格", valueEs: "4.000 CLP", valueJa: "4.000 CLP" },
    ],
    availableOptionsEs: "Color y entrega se confirman por mensaje.",
    availableOptionsJa: "色と受け渡し方法はメッセージで確認できます。",
    recommendedForEs: "Regalo pequeño, colección y colores sobrios.",
    recommendedForJa: "小さなギフト、コレクション、落ち着いた色が好きな人。",
    relatedIds: ["zento-standard", "zento-limited-green", "zento-refill"],
  },
  "zento-limited-green": {
    featuresEs: ["Color limitado green.", "Bueno para notas de estudio y agenda.", "Fácil de combinar con otros ZENTO."],
    featuresJa: ["限定色グリーン。", "勉強ノートや手帳に便利。", "他のZENTOと合わせやすい。"],
    specs: [
      { labelEs: "Tipo", labelJa: "種類", valueEs: "Rollerball limitado", valueJa: "限定ローラーボール" },
      { labelEs: "Color", labelJa: "色", valueEs: "Green", valueJa: "グリーン" },
      { labelEs: "Precio", labelJa: "価格", valueEs: "4.000 CLP", valueJa: "4.000 CLP" },
    ],
    availableOptionsEs: "Color y entrega se confirman por mensaje.",
    availableOptionsJa: "色と受け渡し方法はメッセージで確認できます。",
    recommendedForEs: "Estudio, planner y compra por colores.",
    recommendedForJa: "勉強、手帳、色違いで揃えたい人。",
    relatedIds: ["zento-standard", "zento-limited-cream", "zento-refill"],
  },
  "zento-limited-cream": {
    featuresEs: ["Color cream suave.", "Diseño claro para estuche minimalista.", "Edición limitada fácil de regalar."],
    featuresJa: ["やさしいクリーム色。", "淡い筆箱に合わせやすいデザイン。", "ギフトにも使いやすい限定色。"],
    specs: [
      { labelEs: "Tipo", labelJa: "種類", valueEs: "Rollerball limitado", valueJa: "限定ローラーボール" },
      { labelEs: "Color", labelJa: "色", valueEs: "Cream", valueJa: "クリーム" },
      { labelEs: "Precio", labelJa: "価格", valueEs: "4.000 CLP", valueJa: "4.000 CLP" },
    ],
    availableOptionsEs: "Color y entrega se confirman por mensaje.",
    availableOptionsJa: "色と受け渡し方法はメッセージで確認できます。",
    recommendedForEs: "Estuches claros, regalo pequeño y usuarios de ZENTO.",
    recommendedForJa: "淡い色の筆箱、小さなギフト、ZENTOユーザー。",
    relatedIds: ["zento-standard", "zento-limited-wine-red", "zento-refill"],
  },
  "kurutoga-ks-03": {
    featuresEs: ["Mina 0.3 mm para escritura fina.", "Mecanismo KURUTOGA para mantener la punta estable.", "Buena entrada a la línea KURUTOGA."],
    featuresJa: ["細かく書ける0.3mm。", "芯先を安定させやすいクルトガ機構。", "クルトガ入門にも使いやすい。"],
    specs: [
      { labelEs: "Tipo", labelJa: "種類", valueEs: "Lápiz mecánico", valueJa: "シャープペン" },
      { labelEs: "Mina", labelJa: "芯径", valueEs: "0.3 mm", valueJa: "0.3mm" },
      { labelEs: "Precio", labelJa: "価格", valueEs: "8.900 CLP", valueJa: "8.900 CLP" },
    ],
    availableOptionsEs: "Color y entrega se confirman por mensaje.",
    availableOptionsJa: "色と受け渡し方法はメッセージで確認できます。",
    recommendedForEs: "Apuntes pequeños, estudio y usuarios de KURUTOGA.",
    recommendedForJa: "小さい文字、勉強、クルトガ好き。",
    relatedIds: ["kuru-toga-ks", "kurutoga-ks-green", "pentel-ain-leads"],
  },
  "kurutoga-ks-green": {
    featuresEs: ["Mina 0.5 mm versátil.", "Color green sobrio.", "Rotación de mina para escritura diaria."],
    featuresJa: ["使いやすい0.5mm。", "落ち着いたグリーン軸。", "日常筆記に向く芯回転機構。"],
    specs: [
      { labelEs: "Tipo", labelJa: "種類", valueEs: "Lápiz mecánico", valueJa: "シャープペン" },
      { labelEs: "Mina", labelJa: "芯径", valueEs: "0.5 mm", valueJa: "0.5mm" },
      { labelEs: "Precio", labelJa: "価格", valueEs: "8.900 CLP", valueJa: "8.900 CLP" },
    ],
    availableOptionsEs: "Color y entrega se confirman por mensaje.",
    availableOptionsJa: "色と受け渡し方法はメッセージで確認できます。",
    recommendedForEs: "Uso diario, escuela, oficina y primer KURUTOGA.",
    recommendedForJa: "日常使い、学校、仕事、初めてのクルトガ。",
    relatedIds: ["kuru-toga-ks", "kurutoga-ks-03", "pentel-ain-leads"],
  },
  "smash-03": {
    featuresEs: ["Punta 0.3 mm precisa.", "Cuerpo clásico SMASH.", "Buena opción para escritura fina y dibujo."],
    featuresJa: ["精密に書ける0.3mm。", "定番SMASHの軸。", "細字筆記や作図に便利。"],
    specs: [
      { labelEs: "Tipo", labelJa: "種類", valueEs: "Lápiz mecánico", valueJa: "シャープペン" },
      { labelEs: "Mina", labelJa: "芯径", valueEs: "0.3 mm", valueJa: "0.3mm" },
      { labelEs: "Precio", labelJa: "価格", valueEs: "14.000 CLP", valueJa: "14.000 CLP" },
    ],
    availableOptionsEs: "Color y entrega se confirman por mensaje.",
    availableOptionsJa: "色と受け渡し方法はメッセージで確認できます。",
    recommendedForEs: "Estudio, dibujo, escritura pequeña y usuarios de Pentel.",
    recommendedForJa: "勉強、作図、小さい文字、ぺんてる好き。",
    relatedIds: ["pentel-smash", "graphgear-1000", "pentel-ain-leads"],
  },
  "orenznero-02": {
    featuresEs: ["Punta ultrafina 0.2 mm.", "Modelo premium de Pentel.", "Para escritura muy pequeña y técnica."],
    featuresJa: ["超極細0.2mm。", "ぺんてるの上位モデル。", "極小文字や細かな作業向け。"],
    specs: [
      { labelEs: "Tipo", labelJa: "種類", valueEs: "Lápiz mecánico premium", valueJa: "プレミアムシャープペン" },
      { labelEs: "Mina", labelJa: "芯径", valueEs: "0.2 mm", valueJa: "0.2mm" },
      { labelEs: "Precio", labelJa: "価格", valueEs: "40.000 CLP", valueJa: "40.000 CLP" },
    ],
    availableOptionsEs: "Grosor, color y entrega se confirman por mensaje.",
    availableOptionsJa: "芯径、色、受け渡し方法はメッセージで確認できます。",
    recommendedForEs: "Escritura ultrafina, colección y usuarios avanzados.",
    recommendedForJa: "超細字、コレクション、上級者向け。",
    relatedIds: ["orenznero", "orenznero-03", "pentel-ain-leads"],
  },
  "orenznero-03": {
    featuresEs: ["Punta 0.3 mm fina.", "Cuerpo premium sobrio.", "Equilibrio entre precisión y uso diario."],
    featuresJa: ["細字の0.3mm。", "落ち着いたプレミアム軸。", "精密さと日常使いのバランス。"],
    specs: [
      { labelEs: "Tipo", labelJa: "種類", valueEs: "Lápiz mecánico premium", valueJa: "プレミアムシャープペン" },
      { labelEs: "Mina", labelJa: "芯径", valueEs: "0.3 mm", valueJa: "0.3mm" },
      { labelEs: "Precio", labelJa: "価格", valueEs: "40.000 CLP", valueJa: "40.000 CLP" },
    ],
    availableOptionsEs: "Grosor, color y entrega se confirman por mensaje.",
    availableOptionsJa: "芯径、色、受け渡し方法はメッセージで確認できます。",
    recommendedForEs: "Estudio detallado, apuntes finos y usuarios premium.",
    recommendedForJa: "細かい勉強ノート、細字筆記、上位モデルを探す人。",
    relatedIds: ["orenznero", "orenznero-02", "orenznero-05"],
  },
  "orenznero-05": {
    featuresEs: ["Punta 0.5 mm versátil.", "Sensación premium para uso diario.", "Compatible con minas comunes 0.5 mm."],
    featuresJa: ["使いやすい0.5mm。", "日常にも使える上位感。", "一般的な0.5mm芯と合わせやすい。"],
    specs: [
      { labelEs: "Tipo", labelJa: "種類", valueEs: "Lápiz mecánico premium", valueJa: "プレミアムシャープペン" },
      { labelEs: "Mina", labelJa: "芯径", valueEs: "0.5 mm", valueJa: "0.5mm" },
      { labelEs: "Precio", labelJa: "価格", valueEs: "40.000 CLP", valueJa: "40.000 CLP" },
    ],
    availableOptionsEs: "Grosor, color y entrega se confirman por mensaje.",
    availableOptionsJa: "芯径、色、受け渡し方法はメッセージで確認できます。",
    recommendedForEs: "Uso diario premium, regalo y estudio.",
    recommendedForJa: "日常使いの上位モデル、ギフト、勉強用。",
    relatedIds: ["orenznero", "orenznero-03", "pentel-ain-leads"],
  },
  "airstep-limited": {
    featuresEs: ["Edición limitada.", "Grip cómodo para estudiar.", "Precio medio fácil de elegir."],
    featuresJa: ["限定モデル。", "勉強しやすいグリップ。", "選びやすい中価格帯。"],
    specs: [
      { labelEs: "Tipo", labelJa: "種類", valueEs: "Lápiz mecánico", valueJa: "シャープペン" },
      { labelEs: "Modelo", labelJa: "モデル", valueEs: "Limited", valueJa: "限定" },
      { labelEs: "Precio", labelJa: "価格", valueEs: "7.500 CLP", valueJa: "7.500 CLP" },
    ],
    availableOptionsEs: "Color y entrega se confirman por mensaje.",
    availableOptionsJa: "色と受け渡し方法はメッセージで確認できます。",
    recommendedForEs: "Estudiantes, regalos pequeños y usuarios de PILOT.",
    recommendedForJa: "学生、小さなギフト、PILOT好き。",
    relatedIds: ["pilot-airstep", "airstep-standard", "pentel-ain-leads"],
  },
  "airstep-standard": {
    featuresEs: ["Modelo estándar de precio accesible.", "Agarre cómodo.", "Bueno para apuntes largos."],
    featuresJa: ["買いやすい通常モデル。", "握りやすいグリップ。", "長めのノートにも便利。"],
    specs: [
      { labelEs: "Tipo", labelJa: "種類", valueEs: "Lápiz mecánico", valueJa: "シャープペン" },
      { labelEs: "Modelo", labelJa: "モデル", valueEs: "Standard", valueJa: "通常" },
      { labelEs: "Precio", labelJa: "価格", valueEs: "6.900 CLP", valueJa: "6.900 CLP" },
    ],
    availableOptionsEs: "Color y entrega se confirman por mensaje.",
    availableOptionsJa: "色と受け渡し方法はメッセージで確認できます。",
    recommendedForEs: "Escuela, universidad y compra de primer lápiz japonés.",
    recommendedForJa: "学校、大学、日本のシャープペン入門。",
    relatedIds: ["pilot-airstep", "airstep-limited", "pentel-ain-leads"],
  },
};

Object.assign(productDetailContent, {
  "zento-signature-limited": {
    featuresEs: ["Edicion limitada de la linea Signature.", "Modelo Limited solo en 0.5 mm.", "Color Stone Brass de presencia premium."],
    featuresJa: ["Signatureラインの限定モデル。", "限定モデルは0.5mmのみ。", "Stone Brassの上位感ある色。"],
    specs: [
      { labelEs: "Tipo", labelJa: "種類", valueEs: "Rollerball premium", valueJa: "プレミアムローラーボール" },
      { labelEs: "Combinacion", labelJa: "組み合わせ", valueEs: "Limited 0.5 mm / Stone Brass", valueJa: "限定0.5mm / ストーンブラス" },
      { labelEs: "Precio", labelJa: "価格", valueEs: "80.000 CLP", valueJa: "80.000 CLP" },
    ],
    availableOptionsEs: "El modelo Limited se maneja como 0.5 mm Stone Brass.",
    availableOptionsJa: "限定モデルは0.5mm Stone Brassとして扱います。",
    recommendedForEs: "Regalo especial, coleccion y usuarios que quieren una pieza ZENTO superior.",
    recommendedForJa: "特別なギフト、コレクション、上位ZENTOを探している人。",
    relatedIds: ["zento-signature", "zento-signature-05", "zento-refill-05"],
  },
  "zento-signature-038": {
    featuresEs: ["Punta 0.38 mm para letra pequena.", "Color Silver como combinacion fija.", "Ideal para planner y notas finas."],
    featuresJa: ["小さな文字に向く0.38mm。", "軸色はシルバー固定。", "手帳や細かなノートに便利。"],
    specs: [
      { labelEs: "Tipo", labelJa: "種類", valueEs: "Rollerball premium", valueJa: "プレミアムローラーボール" },
      { labelEs: "Punta", labelJa: "ボール径", valueEs: "0.38 mm", valueJa: "0.38mm" },
      { labelEs: "Color", labelJa: "色", valueEs: "Silver", valueJa: "シルバー" },
      { labelEs: "Precio", labelJa: "価格", valueEs: "70.000 CLP", valueJa: "70.000 CLP" },
    ],
    availableOptionsEs: "0.38 mm se maneja como Silver.",
    availableOptionsJa: "0.38mmはシルバーとして扱います。",
    recommendedForEs: "Planner, letra pequena y escritura cuidada.",
    recommendedForJa: "手帳、小さな文字、丁寧な筆記。",
    relatedIds: ["zento-signature-05", "zento-signature-07", "zento-refill-038"],
  },
  "zento-signature-05": {
    featuresEs: ["Punta 0.5 mm equilibrada.", "Color Metallic Black como combinacion fija.", "Trazo visible sin sentirse demasiado grueso."],
    featuresJa: ["バランスの良い0.5mm。", "軸色はメタリックブラック固定。", "太すぎず見やすい線。"],
    specs: [
      { labelEs: "Tipo", labelJa: "種類", valueEs: "Rollerball premium", valueJa: "プレミアムローラーボール" },
      { labelEs: "Punta", labelJa: "ボール径", valueEs: "0.5 mm", valueJa: "0.5mm" },
      { labelEs: "Color", labelJa: "色", valueEs: "Metallic Black", valueJa: "メタリックブラック" },
      { labelEs: "Precio", labelJa: "価格", valueEs: "70.000 CLP", valueJa: "70.000 CLP" },
    ],
    availableOptionsEs: "0.5 mm se maneja como Metallic Black. Limited 0.5 mm es Stone Brass.",
    availableOptionsJa: "0.5mmはメタリックブラックとして扱います。限定0.5mmはストーンブラスです。",
    recommendedForEs: "Uso diario premium, regalos y escritura de oficina.",
    recommendedForJa: "日常使いの上位モデル、ギフト、仕事用。",
    relatedIds: ["zento-signature-038", "zento-signature-07", "zento-refill-05"],
  },
  "zento-signature-07": {
    featuresEs: ["Punta 0.7 mm de trazo mas presente.", "Color Champagne Gold como combinacion fija.", "Buena para firmas y escritura amplia."],
    featuresJa: ["存在感のある0.7mm。", "軸色はシャンパンゴールド固定。", "サインや大きめの文字に便利。"],
    specs: [
      { labelEs: "Tipo", labelJa: "種類", valueEs: "Rollerball premium", valueJa: "プレミアムローラーボール" },
      { labelEs: "Punta", labelJa: "ボール径", valueEs: "0.7 mm", valueJa: "0.7mm" },
      { labelEs: "Color", labelJa: "色", valueEs: "Champagne Gold", valueJa: "シャンパンゴールド" },
      { labelEs: "Precio", labelJa: "価格", valueEs: "70.000 CLP", valueJa: "70.000 CLP" },
    ],
    availableOptionsEs: "0.7 mm se maneja como Champagne Gold.",
    availableOptionsJa: "0.7mmはシャンパンゴールドとして扱います。",
    recommendedForEs: "Firmas, escritura visible y regalo premium.",
    recommendedForJa: "サイン、見やすい筆記、プレミアムギフト。",
    relatedIds: ["zento-signature-05", "zento-signature-limited", "zento-refill-05"],
  },
  "sarasa-clip-limited": {
    featuresEs: ["Gel SARASA con clip practico.", "Lote limitado consultable por color.", "Precio facil para comprar varias unidades."],
    featuresJa: ["便利なクリップ付きSARASAゲル。", "限定色はメッセージで確認。", "複数本買いやすい価格。"],
    specs: [
      { labelEs: "Tipo", labelJa: "種類", valueEs: "Boligrafo gel", valueJa: "ゲルボールペン" },
      { labelEs: "Punta", labelJa: "ボール径", valueEs: "A confirmar", valueJa: "要確認" },
      { labelEs: "Precio", labelJa: "価格", valueEs: "2.000 CLP", valueJa: "2.000 CLP" },
    ],
    availableOptionsEs: "Color, punta y cantidad se confirman por mensaje.",
    availableOptionsJa: "色、ボール径、数量はメッセージで確認できます。",
    recommendedForEs: "Notas diarias, estudio y compra por colores.",
    recommendedForJa: "普段のノート、勉強、色違い購入。",
    relatedIds: ["sarasa-clip", "sarasa-dry-04", "sarasa-clip-refill"],
  },
  "sarasa-dry-04": {
    featuresEs: ["Secado rapido para reducir manchas.", "Punta fina 0.4 mm.", "Buena para apuntes rapidos."],
    featuresJa: ["こすれを減らしやすい速乾タイプ。", "細字の0.4mm。", "速く書くノートに便利。"],
    specs: [
      { labelEs: "Tipo", labelJa: "種類", valueEs: "Boligrafo gel", valueJa: "ゲルボールペン" },
      { labelEs: "Punta", labelJa: "ボール径", valueEs: "0.4 mm", valueJa: "0.4mm" },
      { labelEs: "Precio", labelJa: "価格", valueEs: "2.900 CLP", valueJa: "2.900 CLP" },
    ],
    availableOptionsEs: "Color de tinta y entrega se confirman por mensaje.",
    availableOptionsJa: "インク色と受け渡し方法はメッセージで確認できます。",
    recommendedForEs: "Estudiantes, apuntes rapidos y personas zurdas que buscan secado rapido.",
    recommendedForJa: "学生、速記ノート、速乾性を重視する人。",
    relatedIds: ["sarasa-dry-05", "sarasa-dry-refill", "juice-up-black"],
  },
  "sarasa-dry-05": {
    featuresEs: ["Secado rapido con trazo 0.5 mm.", "Legible para estudio y oficina.", "Buena alternativa a geles comunes."],
    featuresJa: ["0.5mmで読みやすい速乾ゲル。", "勉強や仕事に使いやすい。", "通常ゲルの代替として便利。"],
    specs: [
      { labelEs: "Tipo", labelJa: "種類", valueEs: "Boligrafo gel", valueJa: "ゲルボールペン" },
      { labelEs: "Punta", labelJa: "ボール径", valueEs: "0.5 mm", valueJa: "0.5mm" },
      { labelEs: "Precio", labelJa: "価格", valueEs: "2.900 CLP", valueJa: "2.900 CLP" },
    ],
    availableOptionsEs: "Color de tinta y entrega se confirman por mensaje.",
    availableOptionsJa: "インク色と受け渡し方法はメッセージで確認できます。",
    recommendedForEs: "Notas largas, oficina y escritura diaria.",
    recommendedForJa: "長めのノート、仕事、普段使い。",
    relatedIds: ["sarasa-dry-04", "sarasa-dry-refill", "sarasa-clip-limited"],
  },
  "juice-up-black": {
    featuresEs: ["Gel negro nitido.", "Punta 0.5 mm equilibrada.", "Buena para notas limpias."],
    featuresJa: ["くっきりした黒ゲル。", "使いやすい0.5mm。", "きれいなノートに便利。"],
    specs: [
      { labelEs: "Tipo", labelJa: "種類", valueEs: "Boligrafo gel", valueJa: "ゲルボールペン" },
      { labelEs: "Tinta", labelJa: "インク色", valueEs: "Negro", valueJa: "黒" },
      { labelEs: "Precio", labelJa: "価格", valueEs: "3.500 CLP", valueJa: "3.500 CLP" },
    ],
    availableOptionsEs: "Entrega y cantidad se confirman por mensaje.",
    availableOptionsJa: "受け渡し方法と数量はメッセージで確認できます。",
    recommendedForEs: "Estudio, agenda y escritura diaria.",
    recommendedForJa: "勉強、手帳、普段使い。",
    relatedIds: ["juice-up", "juice-up-red", "juice-up-refill"],
  },
  "juice-up-red": {
    featuresEs: ["Gel rojo para correcciones.", "Punta 0.5 mm clara.", "Practico para estudio y planner."],
    featuresJa: ["添削に使いやすい赤ゲル。", "見やすい0.5mm。", "勉強や手帳に便利。"],
    specs: [
      { labelEs: "Tipo", labelJa: "種類", valueEs: "Boligrafo gel", valueJa: "ゲルボールペン" },
      { labelEs: "Tinta", labelJa: "インク色", valueEs: "Rojo", valueJa: "赤" },
      { labelEs: "Precio", labelJa: "価格", valueEs: "3.500 CLP", valueJa: "3.500 CLP" },
    ],
    availableOptionsEs: "Entrega y cantidad se confirman por mensaje.",
    availableOptionsJa: "受け渡し方法と数量はメッセージで確認できます。",
    recommendedForEs: "Correcciones, estudio y notas por color.",
    recommendedForJa: "添削、勉強、色分けノート。",
    relatedIds: ["juice-up", "juice-up-black", "juice-up-refill-red"],
  },
  "jetstream-refill-single-07": {
    featuresEs: ["Recambio para JETSTREAM single.", "Punta 0.7 mm de trazo legible.", "Mantiene tu cuerpo favorito en uso."],
    featuresJa: ["ジェットストリーム単色用替え芯。", "読みやすい0.7mm。", "お気に入り本体を長く使える。"],
    specs: [
      { labelEs: "Tipo", labelJa: "種類", valueEs: "Recambio", valueJa: "替え芯" },
      { labelEs: "Punta", labelJa: "ボール径", valueEs: "0.7 mm", valueJa: "0.7mm" },
      { labelEs: "Precio", labelJa: "価格", valueEs: "1.900 CLP", valueJa: "1.900 CLP" },
    ],
    availableOptionsEs: "Color y compatibilidad del cuerpo se confirman por mensaje.",
    availableOptionsJa: "色と対応本体はメッセージで確認できます。",
    recommendedForEs: "Usuarios de JETSTREAM single y compra de mantenimiento.",
    recommendedForJa: "JETSTREAM単色ユーザー、メンテナンス購入。",
    relatedIds: ["jetstream-single", "jetstream-lite", "jetstream-refill"],
  },
  "jetstream-multicolor-refill-038": {
    featuresEs: ["Recambio para JETSTREAM multicolor.", "Punta fina 0.38 mm.", "Colores basicos consultables."],
    featuresJa: ["ジェットストリーム多色用替え芯。", "細字の0.38mm。", "基本色を確認可能。"],
    specs: [
      { labelEs: "Tipo", labelJa: "種類", valueEs: "Recambio", valueJa: "替え芯" },
      { labelEs: "Punta", labelJa: "ボール径", valueEs: "0.38 mm", valueJa: "0.38mm" },
      { labelEs: "Precio", labelJa: "価格", valueEs: "2.000 CLP", valueJa: "2.000 CLP" },
    ],
    availableOptionsEs: "Color y cuerpo compatible se confirman por mensaje.",
    availableOptionsJa: "色と対応本体はメッセージで確認できます。",
    recommendedForEs: "JETSTREAM 3 colores, 4&1 y compra de recambios finos.",
    recommendedForJa: "JETSTREAM 3色・4&1用、細字替え芯の補充。",
    relatedIds: ["jetstream-4and1", "jetstream-slim-compact", "jetstream-multicolor-refill-07"],
  },
  "jetstream-multicolor-refill-07": {
    featuresEs: ["Recambio para JETSTREAM multicolor.", "Punta 0.7 mm mas visible.", "Buena para reponer colores de uso frecuente."],
    featuresJa: ["ジェットストリーム多色用替え芯。", "見やすい0.7mm。", "よく使う色の補充に便利。"],
    specs: [
      { labelEs: "Tipo", labelJa: "種類", valueEs: "Recambio", valueJa: "替え芯" },
      { labelEs: "Punta", labelJa: "ボール径", valueEs: "0.7 mm", valueJa: "0.7mm" },
      { labelEs: "Precio", labelJa: "価格", valueEs: "2.000 CLP", valueJa: "2.000 CLP" },
    ],
    availableOptionsEs: "Color y cuerpo compatible se confirman por mensaje.",
    availableOptionsJa: "色と対応本体はメッセージで確認できます。",
    recommendedForEs: "JETSTREAM multicolor, oficina y estudio.",
    recommendedForJa: "JETSTREAM多色、仕事、勉強用。",
    relatedIds: ["jetstream-4and1", "jetstream-multicolor-refill-038", "jetstream-refill"],
  },
  "zento-refill-038": {
    optionGroups: [
      { labelEs: "Punta", labelJa: "ボール径", optionsEs: ["0.38 mm"], optionsJa: ["0.38mm"] },
      { labelEs: "Tinta", labelJa: "インク色", optionsEs: ["Black"], optionsJa: ["黒"] },
    ],
    featuresEs: ["Recambio ZENTO 0.38 mm negro.", "Para escritura fina.", "Compatibilidad confirmada por mensaje."],
    featuresJa: ["ZENTO用0.38mm黒替え芯。", "細かな筆記向け。", "対応本体はメッセージで確認。"],
    specs: [
      { labelEs: "Tipo", labelJa: "種類", valueEs: "Recambio ZENTO", valueJa: "ZENTO替え芯" },
      { labelEs: "Punta", labelJa: "ボール径", valueEs: "0.38 mm", valueJa: "0.38mm" },
      { labelEs: "Tinta", labelJa: "インク色", valueEs: "Black", valueJa: "黒" },
      { labelEs: "Precio", labelJa: "価格", valueEs: "2.000 CLP", valueJa: "2.000 CLP" },
    ],
    availableOptionsEs: "Compatibilidad, color y entrega se confirman por mensaje.",
    availableOptionsJa: "対応本体、色、受け渡し方法はメッセージで確認できます。",
    recommendedForEs: "Usuarios de ZENTO Standard o Signature 0.38 mm.",
    recommendedForJa: "ZENTO StandardやSignature 0.38mmユーザー。",
    relatedIds: ["zento-signature-038", "zento-standard", "zento-refill"],
  },
  "zento-refill-05": {
    optionGroups: [
      { labelEs: "Punta", labelJa: "ボール径", optionsEs: ["0.5 mm"], optionsJa: ["0.5mm"] },
      { labelEs: "Tinta", labelJa: "インク色", optionsEs: ["Black"], optionsJa: ["黒"] },
    ],
    featuresEs: ["Recambio ZENTO 0.5 mm negro.", "Punta equilibrada.", "Bueno para mantener modelos Signature o Standard."],
    featuresJa: ["ZENTO用0.5mm黒替え芯。", "バランスの良い太さ。", "SignatureやStandardの補充に便利。"],
    specs: [
      { labelEs: "Tipo", labelJa: "種類", valueEs: "Recambio ZENTO", valueJa: "ZENTO替え芯" },
      { labelEs: "Punta", labelJa: "ボール径", valueEs: "0.5 mm", valueJa: "0.5mm" },
      { labelEs: "Tinta", labelJa: "インク色", valueEs: "Black", valueJa: "黒" },
      { labelEs: "Precio", labelJa: "価格", valueEs: "2.000 CLP", valueJa: "2.000 CLP" },
    ],
    availableOptionsEs: "Compatibilidad, color y entrega se confirman por mensaje.",
    availableOptionsJa: "対応本体、色、受け渡し方法はメッセージで確認できます。",
    recommendedForEs: "Usuarios de ZENTO 0.5 mm y compra preventiva de refill.",
    recommendedForJa: "ZENTO 0.5mmユーザー、予備替え芯購入。",
    relatedIds: ["zento-signature-05", "zento-flow", "zento-refill-038"],
  },
  "juice-up-refill-red": {
    featuresEs: ["Recambio rojo para Juice up.", "Punta 0.5 mm.", "Bueno para correcciones y estudio."],
    featuresJa: ["Juice up用の赤替え芯。", "0.5mm。", "添削や勉強に便利。"],
    specs: [
      { labelEs: "Tipo", labelJa: "種類", valueEs: "Recambio gel", valueJa: "ゲル替え芯" },
      { labelEs: "Tinta", labelJa: "インク色", valueEs: "Rojo", valueJa: "赤" },
      { labelEs: "Precio", labelJa: "価格", valueEs: "2.500 CLP", valueJa: "2.500 CLP" },
    ],
    availableOptionsEs: "Compatibilidad con cuerpo Juice up y entrega se confirman por mensaje.",
    availableOptionsJa: "Juice up本体との対応と受け渡し方法はメッセージで確認できます。",
    recommendedForEs: "Usuarios de Juice up rojo, estudio y correcciones.",
    recommendedForJa: "赤Juice upユーザー、勉強、添削。",
    relatedIds: ["juice-up-red", "juice-up-refill", "juice-up-black"],
  },
});

Object.assign(productDetailContent, {
  "uniball-one-p-standard": {
    featuresEs: ["Cuerpo compacto para estuche pequeño.", "Tinta gel uni-ball one de trazo nítido.", "Precio más accesible que la edición limitada."],
    featuresJa: ["小さな筆箱に入れやすいコンパクト軸。", "くっきり見えるuni-ball oneインク。", "限定モデルより買いやすい通常モデル。"],
    specs: [
      { labelEs: "Tipo", labelJa: "種類", valueEs: "Gel compacto", valueJa: "コンパクトゲルペン" },
      { labelEs: "Modelo", labelJa: "モデル", valueEs: "Standard", valueJa: "通常" },
      { labelEs: "Precio", labelJa: "価格", valueEs: "6.900 CLP", valueJa: "6.900 CLP" },
    ],
    availableOptionsEs: "Color y punta se confirman por mensaje.",
    availableOptionsJa: "色とボール径はメッセージで確認できます。",
    recommendedForEs: "Estuche compacto, agenda y uso diario.",
    recommendedForJa: "小さめの筆箱、手帳、普段使い。",
    relatedIds: ["uniball-one-p-limited", "uniball-one", "uniball-one-refill"],
  },
  "uniball-one-p-limited": {
    featuresEs: ["Edición limitada para coleccionar.", "Formato corto y cómodo de llevar.", "Buen regalo pequeño para fans de papelería japonesa."],
    featuresJa: ["集めたくなる限定モデル。", "持ち運びやすい短めの軸。", "日本文具好きへの小さなギフトにも向く一本。"],
    specs: [
      { labelEs: "Tipo", labelJa: "種類", valueEs: "Gel compacto", valueJa: "コンパクトゲルペン" },
      { labelEs: "Modelo", labelJa: "モデル", valueEs: "Limitado", valueJa: "限定" },
      { labelEs: "Precio", labelJa: "価格", valueEs: "13.000 CLP", valueJa: "13.000 CLP" },
    ],
    availableOptionsEs: "Color limitado, punta y entrega se confirman por mensaje.",
    availableOptionsJa: "限定色、ボール径、受け渡し方法はメッセージで確認できます。",
    recommendedForEs: "Coleccionistas, regalo y usuarios que quieren un color especial.",
    recommendedForJa: "コレクション、ギフト、特別な色を選びたい人。",
    relatedIds: ["uniball-one-p-standard", "uniball-one", "zento-standard"],
  },
  "neko-gomu-eraser": {
    featuresEs: ["Diseño de gato con presencia en el escritorio.", "Fácil de sumar a un pedido de bolígrafos.", "Buena opción de regalo pequeño."],
    featuresJa: ["机に置いてかわいいネコデザイン。", "ペンと一緒に追加しやすい小物。", "小さなギフトにも使いやすい。"],
    specs: [
      { labelEs: "Tipo", labelJa: "種類", valueEs: "Goma de borrar", valueJa: "消しゴム" },
      { labelEs: "Diseño", labelJa: "デザイン", valueEs: "Neko", valueJa: "ネコ" },
      { labelEs: "Precio", labelJa: "価格", valueEs: "4.000 CLP", valueJa: "4.000 CLP" },
    ],
    availableOptionsEs: "Diseño y entrega se confirman por mensaje.",
    availableOptionsJa: "デザインと受け渡し方法はメッセージで確認できます。",
    recommendedForEs: "Regalo pequeño, escritorio y estudiantes.",
    recommendedForJa: "小さなギフト、机まわり、学生向け。",
    relatedIds: ["shiba-gomu-eraser", "sea-design-eraser", "plus-mt-fuji-eraser"],
  },
  "shiba-gomu-eraser": {
    featuresEs: ["Diseño de shiba con estilo japonés casual.", "Precio accesible para compra adicional.", "Combina bien con lápices y minas."],
    featuresJa: ["日本らしいシバ犬デザイン。", "ついで買いしやすい価格。", "シャープペンやシャー芯と一緒に使いやすい。"],
    specs: [
      { labelEs: "Tipo", labelJa: "種類", valueEs: "Goma de borrar", valueJa: "消しゴム" },
      { labelEs: "Diseño", labelJa: "デザイン", valueEs: "Shiba", valueJa: "シバ犬" },
      { labelEs: "Precio", labelJa: "価格", valueEs: "4.000 CLP", valueJa: "4.000 CLP" },
    ],
    availableOptionsEs: "Diseño y entrega se confirman por mensaje.",
    availableOptionsJa: "デザインと受け渡し方法はメッセージで確認できます。",
    recommendedForEs: "Regalo pequeño, estudio y pedidos combinados.",
    recommendedForJa: "小さなギフト、勉強用、まとめ買い。",
    relatedIds: ["neko-gomu-eraser", "sea-design-eraser", "plus-mt-fuji-eraser"],
  },
});

products.forEach((product) => {
  Object.assign(product, productDetailContent[product.id]);
  product.featuresEs = product.featuresEs || [product.descriptionEs];
  product.featuresJa = product.featuresJa || [product.descriptionJa];
  product.specs = product.specs || [
    { labelEs: "Marca", labelJa: "ブランド", valueEs: product.brand, valueJa: product.brand },
    { labelEs: "Categoria", labelJa: "カテゴリ", valueEs: product.category, valueJa: product.category },
    { labelEs: "Precio", labelJa: "価格", valueEs: product.priceClp, valueJa: product.priceClp },
  ];
  product.availableOptionsEs = product.availableOptionsEs || "Color, punta y entrega se confirman por mensaje.";
  product.availableOptionsJa = product.availableOptionsJa || "色、芯径・ボール径、受け渡し方法はメッセージで確認できます。";
  product.recommendedForEs = product.recommendedForEs || "Compra diaria, regalo pequeno y pedidos combinados.";
  product.recommendedForJa = product.recommendedForJa || "普段使い、小さなギフト、まとめ買い。";
  product.relatedIds =
    product.relatedIds ||
    products
      .filter((candidate) => candidate.id !== product.id && candidate.category === product.category)
      .slice(0, 3)
      .map((candidate) => candidate.id);
});

const productMerchandisingContent = {
  "kurutoga-dive": {
    galleryImages: [
      "https://baseec-img-mng.akamaized.net/images/item/origin/021379cc1be855e3056c57e17d7d3b00.jpg?im=Resize%2Cwidth%3D1280%2Ctype%3Dnormal&imformat=generic&q=90",
      "https://baseec-img-mng.akamaized.net/images/item/origin/7f0fddd11ef7250faf5d1a9e1995d6ee.jpg?im=Resize%2Cwidth%3D1280%2Ctype%3Dnormal&imformat=generic&q=90",
      "https://baseec-img-mng.akamaized.net/images/item/origin/c742d2c9a0e602da390b1ce66a0917b0.jpg?im=Resize%2Cwidth%3D1280%2Ctype%3Dnormal&imformat=generic&q=90",
    ],
    optionGroups: [
      { labelEs: "Mina", labelJa: "芯径", optionsEs: ["0.5 mm"], optionsJa: ["0.5mm"] },
      { labelEs: "Color", labelJa: "色", optionsEs: ["Aurora Purple"], optionsJa: ["Aurora Purple"] },
    ],
    longDescriptionEs:
      "KURUTOGA DIVE es la pieza premium para quien quiere una experiencia de escritura distinta: avance de mina pensado para escribir con menos interrupciones y un cuerpo con presencia de colección. En Kami to Pen se maneja como 0.5 mm Aurora Purple.",
    longDescriptionJa:
      "クルトガ ダイブは、筆記の中断を減らしたい人向けのプレミアムシャープペンです。Kami to Penでは0.5mm Aurora Purpleとして扱います。",
    sellingPointsEs: ["Pieza premium dificil de encontrar localmente.", "Ideal para regalo serio o colección.", "Combina bien con minas Pentel Ain."],
    sellingPointsJa: ["チリで探しにくいプレミアムモデル。", "ギフトやコレクション向け。", "Pentel Ainシャー芯と合わせやすい。"],
    careNoteEs: "Color disponible: Aurora Purple. Estado de caja y forma de entrega se confirman por mensaje antes de reservar.",
    careNoteJa: "取扱いカラーはAurora Purpleのみです。箱の状態、受け渡し方法は取り置き前にメッセージで確認します。",
  },
  "kurutoga-metal": {
    galleryImages: [
      "https://www.mpuni.co.jp/news/images/news/ed954fa14215beabe02a0d83af8c1e3b97353e94.jpg",
    ],
    optionGroups: [
      { labelEs: "Mina", labelJa: "芯径", optionsEs: ["0.5 mm"], optionsJa: ["0.5mm"] },
      { labelEs: "Color", labelJa: "色", optionsEs: ["Normal", "Limitado", "A confirmar"], optionsJa: ["通常色", "限定色", "要確認"] },
    ],
    longDescriptionEs:
      "KURUTOGA Metal mantiene el atractivo del mecanismo KURUTOGA en un cuerpo metálico más firme. Es una opción equilibrada para estudio, oficina y usuarios que prefieren sensación de peso.",
    longDescriptionJa:
      "クルトガ メタルは、クルトガの芯回転機構に金属軸のしっかりした質感を合わせたモデルです。勉強、仕事、重みのある軸が好きな人に向きます。",
    sellingPointsEs: ["Cuerpo metálico con sensación firme.", "Para notas largas y escritura estable.", "Colores normales o limitados según disponibilidad."],
    sellingPointsJa: ["しっかりした金属軸。", "長い筆記でも安定しやすい。", "通常色・限定色は在庫確認。"],
    careNoteEs: "La edición y el color exacto se confirman por mensaje.",
    careNoteJa: "色と限定モデルの有無はメッセージで確認します。",
  },
  "zento-signature": {
    galleryImages: [
      "https://shopping.jreast.co.jp/html/upload/save_image/shop/17456/product/4778690/image_l.jpg",
      "https://item-shopping.c.yimg.jp/i/n/shijimi-ya_ub-zh-05-01",
      "https://item-shopping.c.yimg.jp/i/n/shijimi-ya_ub-zh-07-01",
      "https://item-shopping.c.yimg.jp/i/n/hanko-otobe_ub-zht-05",
    ],
    optionGroups: [
      {
        labelEs: "Punta / cuerpo",
        labelJa: "ボール径 / 軸色",
        optionsEs: ["0.38 mm / Silver", "0.5 mm / Metallic Black", "0.7 mm / Champagne Gold", "Limited 0.5 mm / Stone Brass"],
        optionsJa: ["0.38mm / シルバー", "0.5mm / メタリックブラック", "0.7mm / シャンパンゴールド", "限定0.5mm / ストーンブラス"],
      },
    ],
    longDescriptionEs:
      "ZENTO Signature es la línea más elegante de uniball ZENTO, pensada para quien quiere una pluma con acabado sobrio y escritura fluida para reuniones, firma y escritorio. En este modelo la punta y el color no se eligen por separado: cada grosor viene con su color fijo, y el Limited existe solo en 0.5 mm.",
    longDescriptionJa:
      "ZENTO Signatureは、落ち着いた質感と上質な筆記感を重視したZENTOの上位ラインです。署名、打ち合わせ、デスク用の一本に向きます。このモデルはボール径と軸色を別々に選ぶのではなく、太さごとに軸色が固定されています。限定モデルは0.5mmのみです。",
    sellingPointsEs: ["Acabado sobrio y premium.", "Combinaciones fijas para elegir sin confusión.", "Limited 0.5 mm disponible como modelo especial.", "Compatible con recambios ZENTO consultables."],
    sellingPointsJa: ["落ち着いたプレミアム感。", "固定コンビで選びやすい。", "限定モデルは0.5mmのみ。", "ZENTO替え芯も相談可能。"],
    careNoteEs: "0.38 mm es Silver, 0.5 mm es Metallic Black, 0.7 mm es Champagne Gold y Limited 0.5 mm es Stone Brass. Entrega se confirma antes de cerrar el pedido.",
    careNoteJa: "0.38mmはシルバー、0.5mmはメタリックブラック、0.7mmはシャンパンゴールド、限定0.5mmはストーンブラスです。受け渡し方法は確定前に確認します。",
  },
  "zento-flow": {
    galleryImages: [
      "https://www.mpuni.co.jp/products/images/products/thm_uniballzento_zf.png",
      "https://www.mpuni.co.jp/products/images/products/b628f8b3b59e3a6f06a79dd29b55b00db4636648.jpg",
      "https://www.mpuni.co.jp/products/images/products/e33bb6fee13971320ba23c68a70bc9395d0d4892.jpg",
    ],
    optionGroups: [
      { labelEs: "Punta", labelJa: "ボール径", optionsEs: ["0.38 mm", "0.5 mm"], optionsJa: ["0.38mm", "0.5mm"] },
      { labelEs: "Color", labelJa: "色", optionsEs: ["Black", "Soft color", "A confirmar"], optionsJa: ["ブラック", "淡色系", "要確認"] },
    ],
    longDescriptionEs:
      "ZENTO Flow ofrece una escritura suave para notas largas y uso diario cuidado. Es una entrada accesible a la línea ZENTO sin perder sensación de calidad.",
    longDescriptionJa:
      "ZENTO Flowは、長い筆記にも使いやすいなめらかなローラーボールです。ZENTOシリーズを試しやすい価格帯で楽しめます。",
    sellingPointsEs: ["Trazo suave para todos los días.", "Precio accesible dentro de ZENTO.", "Colores consultables para armar set."],
    sellingPointsJa: ["毎日使えるなめらかさ。", "ZENTOの中で手に取りやすい価格。", "色違いセットも相談可能。"],
    careNoteEs: "Color y punta disponible se confirman por mensaje.",
    careNoteJa: "色とボール径はメッセージで確認します。",
  },
  "jetstream-lite": {
    galleryImages: [
      "https://www.mpuni.co.jp/products/images/products/313882000.jpg",
      "https://www.mpuni.co.jp/products/images/products/SXR-L-7.jpg",
      "https://www.mpuni.co.jp/products/feature_images/main/ballpoint_pens/thm_uniballone.png",
    ],
    optionGroups: [
      { labelEs: "Tinta", labelJa: "インク色", optionsEs: ["Black", "Blue", "A confirmar"], optionsJa: ["黒", "青", "要確認"] },
      { labelEs: "Uso", labelJa: "用途", optionsEs: ["Agenda", "Oficina", "Estudio"], optionsJa: ["手帳", "仕事", "勉強"] },
    ],
    longDescriptionEs:
      "JETSTREAM Lite touch ink es una opción de uso diario para quienes buscan tinta de baja fricción, escritura rápida y una sensación ligera en apuntes extensos.",
    longDescriptionJa:
      "JETSTREAM Lite touch inkは、低摩擦インクの軽い書き心地が魅力の普段使いボールペンです。長いメモや仕事用にも向きます。",
    sellingPointsEs: ["Escritura ligera y rápida.", "Buena para oficina y agenda.", "Precio fácil para comprar varias unidades."],
    sellingPointsJa: ["軽く素早く書ける。", "仕事や手帳に使いやすい。", "複数本買いやすい価格。"],
    careNoteEs: "Color de tinta y cantidad se confirman antes de coordinar entrega.",
    careNoteJa: "インク色と本数は受け渡し前に確認します。",
  },
  "uniball-one": {
    galleryImages: [
      "https://www.mpuni.co.jp/products/feature_images/main/ballpoint_pens/thm_uniballone.png",
      "https://www.mpuni.co.jp/products/images/products/313882000.jpg",
      "https://www.mpuni.co.jp/products/images/products/SXR-L-7.jpg",
    ],
    optionGroups: [
      { labelEs: "Punta", labelJa: "ボール径", optionsEs: ["0.38 mm", "0.5 mm"], optionsJa: ["0.38mm", "0.5mm"] },
      { labelEs: "Color", labelJa: "色", optionsEs: ["Black", "Blue", "Red", "A confirmar"], optionsJa: ["黒", "青", "赤", "要確認"] },
    ],
    longDescriptionEs:
      "uni-ball one es una línea de gel con color nítido y buen contraste. Funciona muy bien para estudio, bullet journal, agenda y notas con buena lectura.",
    longDescriptionJa:
      "ユニボール ワンは、くっきりした濃い発色が特徴のゲルインキペンです。勉強、手帳、ノートを見やすくまとめたい人に向きます。",
    sellingPointsEs: ["Color oscuro y legible.", "Formato cómodo para llevar.", "Buen equilibrio entre precio y calidad."],
    sellingPointsJa: ["濃く読みやすい発色。", "持ち運びやすい形。", "価格と品質のバランスが良い。"],
    careNoteEs: "Color, punta y pack se confirman por mensaje.",
    careNoteJa: "色、ボール径、セット可否はメッセージで確認します。",
  },
  "juice-up": {
    galleryImages: [
      "https://www.pilot.co.jp/press_release/d02899159a77371e1ce39cbdb1cbbe68cc20a235.jpg",
      "https://www.mpuni.co.jp/products/feature_images/main/ballpoint_pens/thm_uniballone.png",
      "https://www.mpuni.co.jp/products/images/products/313882000.jpg",
    ],
    optionGroups: [
      { labelEs: "Punta", labelJa: "ボール径", optionsEs: ["0.5 mm"], optionsJa: ["0.5mm"] },
      { labelEs: "Tinta", labelJa: "インク色", optionsEs: ["Black", "Red", "A confirmar"], optionsJa: ["黒", "赤", "要確認"] },
    ],
    longDescriptionEs:
      "Juice up es un gel japonés de línea fina y definida, cómodo para escribir pequeño, ordenar apuntes y marcar detalles sin que la página se vea pesada.",
    longDescriptionJa:
      "ジュースアップは、細くくっきりした線が書ける日本のゲルインキペンです。小さめの文字やきれいなノート作りに向きます。",
    sellingPointsEs: ["Línea fina y clara.", "Cómodo para apuntes limpios.", "Buena alternativa a geles de uso diario."],
    sellingPointsJa: ["細くクリアな線。", "きれいなノートに使いやすい。", "普段使いゲルペンの選択肢。"],
    careNoteEs: "Color de tinta se confirma por mensaje.",
    careNoteJa: "インク色はメッセージで確認します。",
  },
  "daily-pens": {
    galleryImages: [
      "https://www.mpuni.co.jp/products/images/products/313882000.jpg",
      "https://www.mpuni.co.jp/products/feature_images/main/ballpoint_pens/thm_uniballone.png",
      "https://www.pilot.co.jp/press_release/d02899159a77371e1ce39cbdb1cbbe68cc20a235.jpg",
    ],
    optionGroups: [
      { labelEs: "Tipo", labelJa: "種類", optionsEs: ["Bolígrafo", "Gel", "A confirmar"], optionsJa: ["ボールペン", "ゲル", "要確認"] },
      { labelEs: "Color", labelJa: "色", optionsEs: ["Black", "Blue", "Red"], optionsJa: ["黒", "青", "赤"] },
    ],
    longDescriptionEs:
      "Selección práctica de bolígrafos japoneses para quienes necesitan escribir todos los días en oficina, estudio o agenda. Se puede consultar una combinación según uso.",
    longDescriptionJa:
      "仕事、勉強、手帳など毎日使いやすい日本の定番ペンをまとめたセレクトです。用途に合わせた組み合わせも相談できます。",
    sellingPointsEs: ["Fáciles de usar todos los días.", "Buena opción para comprar varias unidades.", "Se pueden armar combinaciones por color."],
    sellingPointsJa: ["毎日使いやすい。", "複数本まとめ買いしやすい。", "色の組み合わせ相談可能。"],
    careNoteEs: "Modelo exacto, color y cantidad se confirman por mensaje.",
    careNoteJa: "具体的なモデル、色、本数はメッセージで確認します。",
  },
  "zento-refill": {
    galleryImages: [
      "https://www.mpuni.co.jp/products/images/products/UBR-Z-38.jpg",
      "https://www.mpuni.co.jp/products/images/products/UBR-Z-05.jpg",
      "https://www.mpuni.co.jp/products/images/products/b241accc45aa5f1f6807178e161d45decc713c7f.png",
    ],
    optionGroups: [
      { labelEs: "Compatibilidad", labelJa: "対応", optionsEs: ["ZENTO Signature", "ZENTO Flow", "A confirmar"], optionsJa: ["ZENTO Signature", "ZENTO Flow", "要確認"] },
      { labelEs: "Color", labelJa: "色", optionsEs: ["Black", "A confirmar"], optionsJa: ["黒", "要確認"] },
    ],
    longDescriptionEs:
      "Recambios pensados para seguir usando la línea ZENTO sin reemplazar el cuerpo completo. Antes de reservar se revisa compatibilidad con el modelo exacto.",
    longDescriptionJa:
      "ZENTO本体を長く使うための替え芯です。取り置き前に、手持ちの本体との互換性を確認します。",
    sellingPointsEs: ["Mantiene en uso una pluma premium.", "Útil para compradores de ZENTO.", "Compatibilidad revisada por mensaje."],
    sellingPointsJa: ["上位ペンを長く使える。", "ZENTO購入者に便利。", "互換性はメッセージで確認。"],
    careNoteEs: "Indica el modelo de tu ZENTO antes de confirmar el refill.",
    careNoteJa: "替え芯確定前に、使っているZENTO本体のモデルを確認します。",
  },
  "jetstream-refill": {
    galleryImages: [
      "https://www.mpuni.co.jp/products/images/products/SXR-L-7.jpg",
    ],
    optionGroups: [
      { labelEs: "Punta", labelJa: "芯径", optionsEs: ["0.7 mm"], optionsJa: ["0.7mm"] },
      { labelEs: "Color", labelJa: "色", optionsEs: ["Black", "Blue", "Red", "A confirmar"], optionsJa: ["黒", "青", "赤", "要確認"] },
    ],
    longDescriptionEs:
      "Recambio para mantener tus JETSTREAM favoritos en uso. Es una compra pequeña pero importante para usuarios que ya tienen cuerpos multicolor compatibles.",
    longDescriptionJa:
      "JETSTREAMを長く使うための替え芯です。対応する多色軸を使っている人にとって、手元にあると便利な補充品です。",
    sellingPointsEs: ["Para mantener cuerpos JETSTREAM activos.", "Práctico para oficina y estudio.", "Color se confirma antes de entrega."],
    sellingPointsJa: ["JETSTREAM本体を長く使える。", "仕事や勉強用に便利。", "色は受け渡し前に確認。"],
    careNoteEs: "Confirma el cuerpo compatible antes de reservar.",
    careNoteJa: "取り置き前に対応する本体を確認します。",
  },
  "pentel-ain-leads": {
    galleryImages: [
      "https://www.pentel.co.jp/images/products/lead_pentel_ain_mainvisual_pc_1.png",
    ],
    optionGroups: [
      { labelEs: "Grosor", labelJa: "芯径", optionsEs: ["0.3 mm", "0.5 mm", "0.7 mm", "A confirmar"], optionsJa: ["0.3mm", "0.5mm", "0.7mm", "要確認"] },
      { labelEs: "Dureza", labelJa: "濃さ", optionsEs: ["B", "HB", "A confirmar"], optionsJa: ["B", "HB", "要確認"] },
    ],
    longDescriptionEs:
      "Pentel Ain es un complemento esencial para lápices mecánicos. Sirve para estudio, notas diarias, dibujo técnico y para acompañar modelos premium como KURUTOGA.",
    longDescriptionJa:
      "Pentel Ainは、シャープペンを使う人に欠かせない補充品です。勉強、日常筆記、製図、クルトガ系の上位モデルとの組み合わせに向きます。",
    sellingPointsEs: ["Complemento esencial para lápices mecánicos.", "Consulta por grosor y dureza.", "Ideal junto con KURUTOGA."],
    sellingPointsJa: ["シャープペン用の基本補充品。", "芯径と濃さを相談可能。", "クルトガと相性が良い。"],
    careNoteEs: "Grosor y dureza se confirman por mensaje.",
    careNoteJa: "芯径と濃さはメッセージで確認します。",
  },
  accessories: {
    galleryImages: [
      "https://www.olfa.co.jp/wordpress/wp-content/uploads/1501648948PRC-3.jpg",
    ],
    optionGroups: [
      { labelEs: "Tipo", labelJa: "種類", optionsEs: ["Cortador", "Pegamento", "Estuche", "Goma"], optionsJa: ["カッター", "のり", "ペンケース", "消しゴム"] },
      { labelEs: "Set", labelJa: "セット", optionsEs: ["Individual", "Combinación"], optionsJa: ["単品", "組み合わせ"] },
    ],
    longDescriptionEs:
      "Accesorios japoneses para completar el escritorio: piezas pequeñas pero útiles para estudio, oficina, organización y regalos simples junto con bolígrafos.",
    longDescriptionJa:
      "机まわりを整える日本文具アクセサリーです。勉強、仕事、整理、ペンと合わせた小さなギフトに向きます。",
    sellingPointsEs: ["Complementa una compra de plumas.", "Útil para escritorio y estudio.", "Permite armar sets pequeños."],
    sellingPointsJa: ["ペン購入に合わせやすい。", "デスクや勉強用に便利。", "小さなセット作りに向く。"],
    careNoteEs: "Modelo, color y combinación se confirman por mensaje.",
    careNoteJa: "モデル、色、組み合わせはメッセージで確認します。",
  },
  "zento-standard": {
    galleryImages: [
      "https://www.mpuni.co.jp/products/images/products/thm_uniballzento_zsc.png",
      "https://www.mpuni.co.jp/products/images/products/b628f8b3b59e3a6f06a79dd29b55b00db4636648.jpg",
      "https://www.mpuni.co.jp/products/images/products/e33bb6fee13971320ba23c68a70bc9395d0d4892.jpg",
    ],
    optionGroups: [
      { labelEs: "Punta", labelJa: "ボール径", optionsEs: ["0.38 mm", "0.5 mm", "A confirmar"], optionsJa: ["0.38mm", "0.5mm", "要確認"] },
      { labelEs: "Color", labelJa: "色", optionsEs: ["Normal", "Limitado", "A confirmar"], optionsJa: ["通常色", "限定色", "要確認"] },
    ],
    longDescriptionEs:
      "ZENTO Standard es una forma accesible de probar la línea ZENTO. Mantiene una escritura suave y una presencia sobria, con opciones normales o limitadas según disponibilidad.",
    longDescriptionJa:
      "ZENTO Standardは、ZENTOシリーズを日常使いで試しやすいモデルです。なめらかな筆記感と落ち着いた雰囲気があり、通常色・限定色は在庫に合わせて確認します。",
    sellingPointsEs: ["Entrada accesible a ZENTO.", "Colores normales o limitados.", "Buen precio para uso diario."],
    sellingPointsJa: ["ZENTOを試しやすい価格。", "通常色・限定色を相談可能。", "普段使いにちょうど良い。"],
    careNoteEs: "Color, punta y edición se confirman por mensaje antes de reservar.",
    careNoteJa: "色、ボール径、限定モデルの有無は取り置き前にメッセージで確認します。",
  },
  "jetstream-4and1": {
    galleryImages: [
      "https://www.mpuni.co.jp/products/images/products/313882000.jpg",
      "https://www.mpuni.co.jp/products/images/products/313882000.jpg",
      "https://www.mpuni.co.jp/products/images/products/SXR-L-7.jpg",
    ],
    optionGroups: [
      { labelEs: "Funciones", labelJa: "機能", optionsEs: ["4 colores", "Lápiz 0.5 mm"], optionsJa: ["4色", "0.5mmシャープ"] },
      { labelEs: "Color de cuerpo", labelJa: "軸色", optionsEs: ["A confirmar"], optionsJa: ["要確認"] },
    ],
    longDescriptionEs:
      "JETSTREAM 4&1 Lite touch ink concentra varias funciones en un solo cuerpo: cuatro tintas para separar información y un lápiz mecánico para apuntes rápidos.",
    longDescriptionJa:
      "JETSTREAM 4&1 Lite touch inkは、4色インクとシャープを1本にまとめた実用モデルです。色分け、仕事、授業、手帳に使いやすい構成です。",
    sellingPointsEs: ["Una sola pluma para varias tareas.", "Tinta de escritura ligera.", "Muy práctico para oficina y estudio."],
    sellingPointsJa: ["1本で複数用途に対応。", "軽い書き心地のインク。", "仕事・勉強に実用的。"],
    careNoteEs: "Color de cuerpo, composición de tinta y entrega se confirman por mensaje.",
    careNoteJa: "軸色、インク構成、受け渡し方法はメッセージで確認します。",
  },
  "jetstream-slim-compact": {
    galleryImages: [
      "https://www.mpuni.co.jp/products/images/products/313882000.jpg",
      "https://www.mpuni.co.jp/products/images/products/313882000.jpg",
      "https://www.mpuni.co.jp/products/images/products/SXR-L-7.jpg",
    ],
    optionGroups: [
      { labelEs: "Punta", labelJa: "ボール径", optionsEs: ["0.38 mm"], optionsJa: ["0.38mm"] },
      { labelEs: "Uso", labelJa: "用途", optionsEs: ["Agenda", "Oficina", "Estudio"], optionsJa: ["手帳", "仕事", "勉強"] },
    ],
    longDescriptionEs:
      "JETSTREAM Slim Compact combina tres colores en un cuerpo delgado, ideal cuando quieres separar información sin llevar un bolígrafo grande.",
    longDescriptionJa:
      "JETSTREAM Slim Compactは、細身の軸に3色をまとめたモデルです。大きい多機能ペンを持ちたくない人や手帳用に向きます。",
    sellingPointsEs: ["Tres colores en formato delgado.", "Punta fina para agenda.", "Discreto y fácil de llevar."],
    sellingPointsJa: ["細身で3色使える。", "手帳向きの細字。", "持ち運びやすい。"],
    careNoteEs: "Color de cuerpo y tintas disponibles se confirman por mensaje.",
    careNoteJa: "軸色とインク色はメッセージで確認します。",
  },
  "jetstream-edge": {
    galleryImages: [
      "https://www.mpuni.co.jp/news/pressrelease/detail/news_file/file/JETSTREAMEDGE.jpg",
      "https://www.mpuni.co.jp/products/app_product_images/258772000.jpg",
    ],
    optionGroups: [
      { labelEs: "Punta", labelJa: "ボール径", optionsEs: ["0.28 mm"], optionsJa: ["0.28mm"] },
      { labelEs: "Tinta", labelJa: "インク", optionsEs: ["Black", "A confirmar"], optionsJa: ["黒", "要確認"] },
    ],
    longDescriptionEs:
      "JETSTREAM EDGE es para usuarios que disfrutan escribir muy fino. La punta 0.28 mm ayuda a mantener agendas, notas pequeñas y detalles técnicos ordenados.",
    longDescriptionJa:
      "JETSTREAM EDGEは、0.28mmの超極細で小さな文字や細かいメモを書きたい人向けです。手帳や精密な記録に向きます。",
    sellingPointsEs: ["Punta 0.28 mm ultrafina.", "Buena para letra pequeña.", "Diseño técnico y premium."],
    sellingPointsJa: ["0.28mmの超極細。", "小さな文字に強い。", "テクニカルなデザイン。"],
    careNoteEs: "Color de cuerpo y refill compatible se confirman por mensaje.",
    careNoteJa: "軸色と対応替え芯はメッセージで確認します。",
  },
  "uniball-one-p": {
    galleryImages: [
      "https://www.mpuni.co.jp/products/images/products/7bd507720d7e9e9e14f24792291f164d1957b642.jpg",
      "https://www.mpuni.co.jp/products/feature_images/main/ballpoint_pens/thm_uniballone.png",
      "https://www.mpuni.co.jp/products/images/products/313882000.jpg",
    ],
    optionGroups: [
      { labelEs: "Punta", labelJa: "ボール径", optionsEs: ["0.38 mm", "0.5 mm", "A confirmar"], optionsJa: ["0.38mm", "0.5mm", "要確認"] },
      { labelEs: "Edición", labelJa: "種類", optionsEs: ["Normal", "Limitada"], optionsJa: ["通常", "限定"] },
    ],
    longDescriptionEs:
      "uni-ball one P mantiene la tinta nítida de la serie en un cuerpo corto y coleccionable. Es fácil de llevar y funciona bien como regalo pequeño.",
    longDescriptionJa:
      "uni-ball one Pは、くっきりしたインクを短めのかわいい軸で楽しめるモデルです。持ち運びや小さなギフトにも向きます。",
    sellingPointsEs: ["Cuerpo compacto y coleccionable.", "Tinta de buen contraste.", "Colores limitados consultables."],
    sellingPointsJa: ["コンパクトで集めやすい。", "濃く見やすいインク。", "限定色も相談可能。"],
    careNoteEs: "Punta, color y edición se confirman por mensaje.",
    careNoteJa: "ボール径、色、限定色の有無はメッセージで確認します。",
  },
  "uniball-one-3": {
    galleryImages: [
      "https://www.mpuni.co.jp/products/feature_images/main/ballpoint_pens/thm_uniballone.png",
      "https://www.mpuni.co.jp/products/images/products/7bd507720d7e9e9e14f24792291f164d1957b642.jpg",
      "https://www.mpuni.co.jp/products/images/products/SXR-L-7.jpg",
    ],
    optionGroups: [
      { labelEs: "Sistema", labelJa: "構成", optionsEs: ["3 colores"], optionsJa: ["3色"] },
      { labelEs: "Uso", labelJa: "用途", optionsEs: ["Notas", "Estudio", "Agenda"], optionsJa: ["ノート", "勉強", "手帳"] },
    ],
    longDescriptionEs:
      "uni-ball one 3 es la opción multicolor para quienes quieren el contraste del gel uni-ball one con cambio rápido de colores.",
    longDescriptionJa:
      "uni-ball one 3は、uni-ball oneの濃く見やすいゲルインキを多色で使いたい人向けのモデルです。",
    sellingPointsEs: ["Gel multicolor en un cuerpo.", "Útil para clasificar notas.", "Recambios se consultan por compatibilidad."],
    sellingPointsJa: ["1本でゲル多色。", "ノートの分類に便利。", "替え芯互換性も確認可能。"],
    careNoteEs: "Color de cuerpo y recambios se confirman antes de reservar.",
    careNoteJa: "軸色と替え芯は取り置き前に確認します。",
  },
  "sarasa-clip": {
    galleryImages: [
      "https://www.zebra.co.jp/global/images/sarasa.png",
      "https://www.zebra.co.jp/global/images/sarasa.png",
      "https://www.pilot.co.jp/press_release/d02899159a77371e1ce39cbdb1cbbe68cc20a235.jpg",
    ],
    optionGroups: [
      { labelEs: "Tinta", labelJa: "インク色", optionsEs: ["Black", "Blue", "Red", "A confirmar"], optionsJa: ["黒", "青", "赤", "要確認"] },
      { labelEs: "Compra", labelJa: "購入", optionsEs: ["Individual", "Varios colores"], optionsJa: ["単品", "複数色"] },
    ],
    longDescriptionEs:
      "SARASA CLIP es un gel clásico para notas y estudio. Su clip grande es práctico para cuadernos y permite armar combinaciones de colores.",
    longDescriptionJa:
      "サラサクリップは、ノートや勉強に使いやすい定番ゲルペンです。大きめクリップで持ち運びやすく、色違いでも揃えやすいモデルです。",
    sellingPointsEs: ["Gel clásico y accesible.", "Clip práctico.", "Bueno para comprar varios colores."],
    sellingPointsJa: ["定番で買いやすいゲル。", "便利なクリップ。", "複数色で揃えやすい。"],
    careNoteEs: "Color y cantidad se confirman por mensaje.",
    careNoteJa: "色と本数はメッセージで確認します。",
  },
  "sarasa-dry": {
    galleryImages: [
      "https://www.zebra.co.jp/global/images/sarasa.png",
      "https://www.zebra.co.jp/global/images/sarasa.png",
      "https://www.pilot.co.jp/press_release/d02899159a77371e1ce39cbdb1cbbe68cc20a235.jpg",
    ],
    optionGroups: [
      { labelEs: "Característica", labelJa: "特徴", optionsEs: ["Secado rápido"], optionsJa: ["速乾"] },
      { labelEs: "Color", labelJa: "色", optionsEs: ["Black", "A confirmar"], optionsJa: ["黒", "要確認"] },
    ],
    longDescriptionEs:
      "SARASA dry está pensada para quienes quieren gel con menos espera de secado. Es útil para clases, oficina y escritura rápida.",
    longDescriptionJa:
      "サラサドライは、ゲルインキの書き味を保ちながら速乾性を重視したモデルです。授業や仕事で素早く書く人に向きます。",
    sellingPointsEs: ["Seca más rápido que un gel común.", "Buena para apuntes largos.", "Reduce manchas al escribir rápido."],
    sellingPointsJa: ["通常ゲルより乾きやすい。", "長いノートに使いやすい。", "速く書く時のこすれを減らしやすい。"],
    careNoteEs: "Punta y color disponibles se confirman por mensaje.",
    careNoteJa: "芯径と色はメッセージで確認します。",
  },
  "dr-grip-gspec": {
    galleryImages: [
      "https://www.pilot.co.jp/press_release/d02899159a77371e1ce39cbdb1cbbe68cc20a235.jpg",
      "https://www.pilot.co.jp/press_release/d02899159a77371e1ce39cbdb1cbbe68cc20a235.jpg",
      "https://www.mpuni.co.jp/products/images/products/313882000.jpg",
    ],
    optionGroups: [
      { labelEs: "Agarre", labelJa: "グリップ", optionsEs: ["Suave", "Cómodo"], optionsJa: ["やわらかめ", "握りやすい"] },
      { labelEs: "Uso", labelJa: "用途", optionsEs: ["Escritura larga", "Oficina", "Estudio"], optionsJa: ["長時間筆記", "仕事", "勉強"] },
    ],
    longDescriptionEs:
      "Dr.Grip G-Spec es una opción ergonómica para quienes escriben mucho. El agarre cómodo ayuda en jornadas de estudio, trabajo o notas extensas.",
    longDescriptionJa:
      "Dr.Grip G-Specは、たくさん書く人向けの握りやすいボールペンです。勉強や仕事で長時間書く時に使いやすいモデルです。",
    sellingPointsEs: ["Agarre cómodo.", "Pensado para escribir largo.", "Modelo confiable de PILOT."],
    sellingPointsJa: ["握りやすいグリップ。", "長時間筆記向け。", "PILOTの定番モデル。"],
    careNoteEs: "Color de cuerpo y tinta se confirman por mensaje.",
    careNoteJa: "軸色とインク色はメッセージで確認します。",
  },
  "kuru-toga-ks": {
    galleryImages: [
      "https://www.mpuni.co.jp/products/images/products/3eb0c5b8e64e7c7f42cee11e63c979eb51257b43.png",
    ],
    optionGroups: [
      { labelEs: "Mina", labelJa: "芯径", optionsEs: ["0.3 mm", "0.5 mm", "A confirmar"], optionsJa: ["0.3mm", "0.5mm", "要確認"] },
      { labelEs: "Color", labelJa: "色", optionsEs: ["White", "Black", "A confirmar"], optionsJa: ["白", "黒", "要確認"] },
    ],
    longDescriptionEs:
      "KURUTOGA KS es un lápiz mecánico accesible con el mecanismo KURUTOGA, pensado para estudiantes y usuarios que quieren escritura uniforme sin subir a modelos premium.",
    longDescriptionJa:
      "クルトガKSは、クルトガ機構を手軽に使えるスタンダードラインです。学生や日常筆記で、上位モデルまでは必要ない人に向きます。",
    sellingPointsEs: ["Primer KURUTOGA ideal.", "Precio accesible.", "Combina con minas Pentel Ain."],
    sellingPointsJa: ["初めてのクルトガに最適。", "導入しやすい価格。", "Pentel Ainシャー芯と合わせやすい。"],
    careNoteEs: "Grosor de mina, color y entrega se confirman por mensaje.",
    careNoteJa: "芯径、色、受け渡し方法はメッセージで確認します。",
  },
  orenznero: {
    galleryImages: [
      "https://www.pentel.co.jp/images/products/ORENZNERO_mainvisual_pc-1.jpg",
    ],
    optionGroups: [
      { labelEs: "Mina", labelJa: "芯径", optionsEs: ["0.2 mm", "0.3 mm", "0.5 mm"], optionsJa: ["0.2mm", "0.3mm", "0.5mm"] },
      { labelEs: "Color", labelJa: "色", optionsEs: ["Black"], optionsJa: ["黒"] },
    ],
    longDescriptionEs:
      "ORENZNERO es una pieza premium de Pentel para usuarios que escriben fino y quieren menos interrupciones. El sistema Orenz protege la mina y el avance automático mejora el flujo. En esta página se agrupan las versiones 0.2 mm, 0.3 mm y 0.5 mm para elegir el grosor antes de agregar al carrito.",
    longDescriptionJa:
      "オレンズネロは、細い芯で集中して書きたい人向けのぺんてる上位モデルです。オレンズシステムで芯を守り、自動芯出しで筆記の流れを保ちます。このページに0.2mm / 0.3mm / 0.5mmをまとめ、購入前に芯径を選べるようにしています。",
    sellingPointsEs: ["Sistema premium de mina protegida.", "Avance automático.", "0.2 / 0.3 / 0.5 mm en una sola página.", "Ideal para escritura fina y técnica."],
    sellingPointsJa: ["芯を守る上位機構。", "自動芯出し。", "0.2 / 0.3 / 0.5mmを1ページで選択。", "細字・製図に向く。"],
    careNoteEs: "Elige el grosor antes de confirmar. Estado de caja y entrega se revisan por mensaje.",
    careNoteJa: "購入前に芯径を選びます。箱の状態と受け渡し方法はメッセージで確認します。",
  },
  "pentel-art-multi-8": {
    galleryImages: [
      "https://www.pentel.co.jp/images/products/artmulti8_lineup_2.png",
    ],
    optionGroups: [],
    longDescriptionEs:
      "Art Multi 8 es una herramienta especial para combinar ocho colores en un solo portaminas. Sirve para bocetos, planificación visual y notas creativas.",
    longDescriptionJa:
      "アートマルチ8は、8色を1本で使える特殊な文具です。スケッチ、手帳、視覚的な計画、クリエイティブなノートに向きます。",
    sellingPointsEs: ["Ocho colores en un cuerpo.", "Perfecto para creatividad y agenda.", "Artículo especial para regalo."],
    sellingPointsJa: ["1本で8色使える。", "手帳や創作に便利。", "特別感のあるギフトにも。"],
    careNoteEs: "Este producto se vende como un set fijo de 8 colores. Repuestos y entrega se confirman por mensaje.",
    careNoteJa: "この商品は8色セットの固定商品です。替芯や受け渡し方法はメッセージで確認します。",
  },
  "energel-multicolor": {
    galleryImages: [
      "https://www.pentel.co.jp/images/products/energel_3c_lineup_1.png",
    ],
    optionGroups: [
      { labelEs: "Tinta", labelJa: "インク", optionsEs: ["Gel", "Multicolor"], optionsJa: ["ゲル", "多色"] },
      { labelEs: "Uso", labelJa: "用途", optionsEs: ["Agenda", "Estudio", "Oficina"], optionsJa: ["手帳", "勉強", "仕事"] },
    ],
    longDescriptionEs:
      "EnerGel multicolor es una opción práctica para organizar notas con tinta gel de secado rápido. Funciona bien cuando quieres separar información sin cambiar de pluma.",
    longDescriptionJa:
      "エナージェル多色は、速乾ゲルでノートを色分けしやすい実用モデルです。ペンを持ち替えずに情報を整理したい人に向きます。",
    sellingPointsEs: ["Gel de secado rápido.", "Colores para organizar notas.", "Buena compra de uso diario."],
    sellingPointsJa: ["速乾ゲル。", "色分けノートに便利。", "日常使いしやすい。"],
    careNoteEs: "Color de cuerpo, colores de tinta y refill compatible se confirman por mensaje.",
    careNoteJa: "軸色、インク色、対応替え芯はメッセージで確認します。",
  },
  "zebra-lightwrite-alpha": {
    galleryImages: [
      "https://www.zebra.co.jp/images/product/kv/lightwrite-a/main.jpg",
      "https://www.zebra.co.jp/global/images/sarasa.png",
      "https://www.pilot.co.jp/press_release/d02899159a77371e1ce39cbdb1cbbe68cc20a235.jpg",
    ],
    optionGroups: [
      { labelEs: "Función", labelJa: "機能", optionsEs: ["Luz integrada"], optionsJa: ["ライト付き"] },
      { labelEs: "Color", labelJa: "色", optionsEs: ["A confirmar"], optionsJa: ["要確認"] },
    ],
    longDescriptionEs:
      "Lightwrite Alpha es un bolígrafo especial para escribir cuando falta luz. Es útil para trabajo nocturno, viajes, cama, auto o espacios con iluminación limitada.",
    longDescriptionJa:
      "ライトライトαは、暗い場所でも書きやすいライト付きボールペンです。夜間作業、移動中、ベッドサイドなどに便利です。",
    sellingPointsEs: ["Luz para baja iluminación.", "Artículo llamativo para regalo.", "Útil fuera del escritorio."],
    sellingPointsJa: ["暗い場所で書ける。", "ギフトに面白い。", "机以外でも使いやすい。"],
    careNoteEs: "Color, funcionamiento de luz y batería se confirman por mensaje.",
    careNoteJa: "色、ライトの状態、電池まわりはメッセージで確認します。",
  },
  "pilot-airstep": {
    galleryImages: [
      "https://www.pilot.co.jp/press_release/ea7d236ca746fe85e9416a65e41d921b88369ab6.jpg",
    ],
    optionGroups: [
      { labelEs: "Mina", labelJa: "芯径", optionsEs: ["A confirmar"], optionsJa: ["要確認"] },
      { labelEs: "Edición", labelJa: "種類", optionsEs: ["Normal", "Limitada"], optionsJa: ["通常", "限定"] },
    ],
    longDescriptionEs:
      "AirStep es un lápiz mecánico ligero para escribir todos los días. Es fácil de recomendar para estudiantes o para quien quiere probar papelería japonesa sin gastar demasiado.",
    longDescriptionJa:
      "エアステップは、毎日の筆記に使いやすい軽めのシャープペンです。学生や、手頃に日本文具を試したい人にすすめやすいモデルです。",
    sellingPointsEs: ["Ligero para uso diario.", "Precio accesible.", "Bueno para estudiantes."],
    sellingPointsJa: ["日常使いしやすい軽さ。", "買いやすい価格。", "学生向け。"],
    careNoteEs: "Color, edición y grosor se confirman por mensaje.",
    careNoteJa: "色、通常/限定、芯径はメッセージで確認します。",
  },
  "pentel-smash": {
    galleryImages: [
      "https://www.pentel.co.jp/images/products/smash_mainvisual_pc_1.jpg",
    ],
    optionGroups: [
      { labelEs: "Mina", labelJa: "芯径", optionsEs: ["0.3 mm", "0.5 mm", "A confirmar"], optionsJa: ["0.3mm", "0.5mm", "要確認"] },
      { labelEs: "Uso", labelJa: "用途", optionsEs: ["Estudio", "Dibujo"], optionsJa: ["勉強", "製図"] },
    ],
    longDescriptionEs:
      "SMASH es un clásico de Pentel para quienes quieren control, firmeza y una sensación más técnica que la de un lápiz mecánico básico.",
    longDescriptionJa:
      "スマッシュは、しっかりした操作感とテクニカルな雰囲気があるぺんてるの定番シャープです。基本モデルより本格的な一本を探す人に向きます。",
    sellingPointsEs: ["Clásico japonés.", "Grip firme.", "Popular para estudio serio."],
    sellingPointsJa: ["日本の定番。", "しっかり握れる。", "本格的な勉強に人気。"],
    careNoteEs: "Grosor, color y estado de empaque se confirman por mensaje.",
    careNoteJa: "芯径、色、パッケージ状態はメッセージで確認します。",
  },
  "alpha-gel-switch": {
    galleryImages: [
      "https://www.mpuni.co.jp/products/images/products/thm_agel_switch.png",
    ],
    optionGroups: [
      { labelEs: "Mina", labelJa: "芯径", optionsEs: ["0.5 mm"], optionsJa: ["0.5mm"] },
      { labelEs: "Modo", labelJa: "モード", optionsEs: ["KURUTOGA", "Hold"], optionsJa: ["クルトガ", "ホールド"] },
    ],
    longDescriptionEs:
      "Alpha-gel switch combina comodidad de agarre con una función de cambio de modo. Es una buena alternativa para quienes escriben mucho y quieren descansar la mano.",
    longDescriptionJa:
      "アルファゲル スイッチは、握りやすさとモード切替を両立したシャープペンです。長く書く人や手の負担を減らしたい人に向きます。",
    sellingPointsEs: ["Grip cómodo.", "Modo KURUTOGA activable.", "Bueno para escritura larga."],
    sellingPointsJa: ["握りやすい。", "クルトガモード対応。", "長時間筆記向け。"],
    careNoteEs: "Color de cuerpo y disponibilidad se confirman por mensaje.",
    careNoteJa: "軸色と受け渡し可否はメッセージで確認します。",
  },
  "graphgear-1000": {
    galleryImages: [
      "https://www.pentel.co.jp/images/products/MV_graphgear1000_pc.png",
    ],
    optionGroups: [
      { labelEs: "Mina", labelJa: "芯径", optionsEs: ["0.3 mm", "0.5 mm", "A confirmar"], optionsJa: ["0.3mm", "0.5mm", "要確認"] },
      { labelEs: "Uso", labelJa: "用途", optionsEs: ["Técnico", "Estudio"], optionsJa: ["製図", "勉強"] },
    ],
    longDescriptionEs:
      "GraphGear 1000 es una opción técnica para escribir o dibujar con precisión. Se siente más profesional que un lápiz mecánico escolar y combina bien con minas Pentel Ain.",
    longDescriptionJa:
      "グラフギア1000は、精密に書く・描くためのテクニカルなシャープペンです。学習用より本格的で、Pentel Ainシャー芯とも合わせやすいです。",
    sellingPointsEs: ["Sensación profesional.", "Para dibujo técnico.", "Buena combinación con Pentel Ain."],
    sellingPointsJa: ["プロ感のある軸。", "製図向け。", "Pentel Ainと相性が良い。"],
    careNoteEs: "Grosor y color exactos se confirman por mensaje.",
    careNoteJa: "芯径と色はメッセージで確認します。",
  },
  "kurutoga-advance": {
    galleryImages: [
      "https://www.sozodori.com/cdn/shop/files/Copy-of-DSC03611_45e2359c-d1ce-4db8-af83-da1d12f0fb69.jpg?v=1724766667&width=1000",
    ],
    optionGroups: [
      { labelEs: "Mina", labelJa: "芯径", optionsEs: ["0.5 mm", "A confirmar"], optionsJa: ["0.5mm", "要確認"] },
      { labelEs: "Color", labelJa: "色", optionsEs: ["A confirmar"], optionsJa: ["要確認"] },
    ],
    longDescriptionEs:
      "KURUTOGA Advance es una mejora natural para quien ya conoce KURUTOGA. Su mecanismo está pensado para mantener una punta más fina y estable.",
    longDescriptionJa:
      "クルトガ アドバンスは、クルトガをすでに知っている人のアップグレードに向くモデルです。より細く安定した筆記を狙った機構です。",
    sellingPointsEs: ["Giro rápido.", "Línea fina y estable.", "Upgrade accesible."],
    sellingPointsJa: ["回転性能アップ。", "細く安定した線。", "手頃なアップグレード。"],
    careNoteEs: "Color, grosor y edición se confirman por mensaje.",
    careNoteJa: "色、芯径、モデルはメッセージで確認します。",
  },
  "mono-graph-clear": {
    galleryImages: [
      "https://www.tombow.com/files/2021/03/20210304_1-1-1024x675.jpg",
    ],
    optionGroups: [
      { labelEs: "Mina", labelJa: "芯径", optionsEs: ["0.3 mm"], optionsJa: ["0.3mm"] },
      { labelEs: "Color", labelJa: "色", optionsEs: ["Clear", "A confirmar"], optionsJa: ["クリア", "要確認"] },
    ],
    longDescriptionEs:
      "MONO graph Clear Color combina un cuerpo transparente con la practicidad de la serie MONO. Es fácil de comprar como lápiz de estudio o regalo pequeño.",
    longDescriptionJa:
      "MONO graph クリアカラーは、透明感のある軸とMONOシリーズの実用性が魅力です。勉強用や小さなギフトに選びやすいモデルです。",
    sellingPointsEs: ["Diseño clear.", "Incluye goma MONO.", "Precio accesible."],
    sellingPointsJa: ["クリアデザイン。", "MONO消しゴム付き。", "買いやすい価格。"],
    careNoteEs: "Color clear y disponibilidad se confirman por mensaje.",
    careNoteJa: "クリアカラーと受け渡し可否はメッセージで確認します。",
  },
  "mono-graph-fine": {
    galleryImages: [
      "https://www.tombow.com/files/2021/03/20210304_1-1-1024x675.jpg",
    ],
    optionGroups: [
      { labelEs: "Mina", labelJa: "芯径", optionsEs: ["0.5 mm"], optionsJa: ["0.5mm"] },
      { labelEs: "Uso", labelJa: "用途", optionsEs: ["Notas limpias", "Estudio"], optionsJa: ["きれいなノート", "勉強"] },
    ],
    longDescriptionEs:
      "MONO graph fine es para quienes quieren una escritura fina con diseño sobrio. Funciona bien para notas cuidadas, agenda y estudio.",
    longDescriptionJa:
      "MONO graph fineは、落ち着いたデザインで細かく書きたい人向けです。きれいなノート、手帳、勉強に向きます。",
    sellingPointsEs: ["Modelo sobrio.", "Bueno para notas limpias.", "Sensación más cuidada."],
    sellingPointsJa: ["落ち着いたモデル。", "きれいなノート向け。", "上質感がある。"],
    careNoteEs: "Color y disponibilidad se confirman por mensaje.",
    careNoteJa: "色と受け渡し可否はメッセージで確認します。",
  },
  "kokuyo-campus-pencil-sharp": {
    galleryImages: [
      "https://www.kokuyo.com/system/files/SET44292.jpg",
    ],
    optionGroups: [
      { labelEs: "Formato", labelJa: "形式", optionsEs: ["Individual", "Set"], optionsJa: ["単品", "セット"] },
      { labelEs: "Mina", labelJa: "芯径", optionsEs: ["0.3 mm", "0.5 mm", "A confirmar"], optionsJa: ["0.3mm", "0.5mm", "要確認"] },
    ],
    longDescriptionEs:
      "Campus pencil sharp tiene una sensación cercana al lápiz, ideal para estudiantes. Puede consultarse como unidad individual o como set según disponibilidad.",
    longDescriptionJa:
      "Campus 鉛筆シャープは、鉛筆に近い感覚で使える学習向けシャープです。単品またはセットで、在庫に合わせて確認できます。",
    sellingPointsEs: ["Sensación de lápiz.", "Ideal para estudiantes.", "Disponible como set según consulta."],
    sellingPointsJa: ["鉛筆感覚。", "学生向け。", "セットも相談可能。"],
    careNoteEs: "Formato, grosor y color se confirman por mensaje.",
    careNoteJa: "単品/セット、芯径、色はメッセージで確認します。",
  },
  "pilot-kirena-set": {
    galleryImages: [
      "https://fujinote.com/cdn/shop/files/IMG_E8257_0.5x.png?v=1759128936&width=416",
    ],
    optionGroups: [
      { labelEs: "Set", labelJa: "セット", optionsEs: ["5 colores"], optionsJa: ["5色"] },
      { labelEs: "Uso", labelJa: "用途", optionsEs: ["Subrayar", "Agenda", "Notas"], optionsJa: ["マーキング", "手帳", "ノート"] },
    ],
    longDescriptionEs:
      "Kire-na 5-color set es un conjunto fácil de recomendar para organizar apuntes, agenda o estudio. Agrega color sin complicar la compra.",
    longDescriptionJa:
      "キレーナ5色セットは、ノート整理や手帳、勉強に色を足したい人にすすめやすいセットです。買いやすい価格も魅力です。",
    sellingPointsEs: ["Set listo para usar.", "Bueno para agenda.", "Regalo accesible."],
    sellingPointsJa: ["すぐ使えるセット。", "手帳に便利。", "買いやすいギフト。"],
    careNoteEs: "Colores incluidos y estado del set se confirman por mensaje.",
    careNoteJa: "セット内容と状態はメッセージで確認します。",
  },
  "plus-mt-fuji-eraser": {
    galleryImages: [
      "https://www.kokuyo.com/system/files/SET44292.jpg",
    ],
    optionGroups: [
      { labelEs: "Tipo", labelJa: "種類", optionsEs: ["Goma"], optionsJa: ["消しゴム"] },
      { labelEs: "Diseño", labelJa: "デザイン", optionsEs: ["Mt. Fuji", "A confirmar"], optionsJa: ["富士山", "要確認"] },
    ],
    longDescriptionEs:
      "Mt. Fuji eraser es una goma pequeña con encanto japonés. Al usarse, la forma va revelando el Monte Fuji, lo que la vuelve atractiva para regalo.",
    longDescriptionJa:
      "富士山消しゴムは、使うほど富士山の形が出てくる遊び心ある消しゴムです。小さなギフトやついで買いに向きます。",
    sellingPointsEs: ["Divertida para regalo.", "Precio bajo.", "Complemento para lápices mecánicos."],
    sellingPointsJa: ["ギフトに楽しい。", "低価格。", "シャープペンと合わせやすい。"],
    careNoteEs: "Diseño y disponibilidad se confirman por mensaje.",
    careNoteJa: "デザインと受け渡し可否はメッセージで確認します。",
  },
  "kokuyo-gloo-glue": {
    galleryImages: [
      "https://www.kokuyo.com/system/files/SET44292.jpg",
      "https://www.kokuyo.com/system/files/SET44292.jpg",
      "https://www.kokuyo.com/system/files/SET44292.jpg",
    ],
    optionGroups: [
      { labelEs: "Tipo", labelJa: "種類", optionsEs: ["Pegamento"], optionsJa: ["のり"] },
      { labelEs: "Uso", labelJa: "用途", optionsEs: ["Cuaderno", "Oficina", "Manualidades"], optionsJa: ["ノート", "仕事", "工作"] },
    ],
    longDescriptionEs:
      "GLOO es un pegamento japonés práctico para el escritorio. Funciona como compra adicional de bajo precio junto con plumas y accesorios.",
    longDescriptionJa:
      "GLOOは、机まわりで使いやすいKOKUYOののりです。ペンや小物と一緒に追加しやすい低価格商品です。",
    sellingPointsEs: ["Útil todos los días.", "Precio bajo.", "Bueno para añadir al pedido."],
    sellingPointsJa: ["毎日使いやすい。", "低価格。", "ついで買いに向く。"],
    careNoteEs: "Tipo y cantidad se confirman por mensaje.",
    careNoteJa: "種類と数量はメッセージで確認します。",
  },
  "nylon-mesh-pen-case": {
    galleryImages: [
      "https://www.kokuyo.com/system/files/SET44292.jpg",
      "https://www.mpuni.co.jp/products/images/products/313882000.jpg",
      "https://www.mpuni.co.jp/products/images/products/SXR-L-7.jpg",
    ],
    optionGroups: [
      { labelEs: "Material", labelJa: "素材", optionsEs: ["Nylon mesh"], optionsJa: ["ナイロンメッシュ"] },
      { labelEs: "Color", labelJa: "色", optionsEs: ["A confirmar"], optionsJa: ["要確認"] },
    ],
    longDescriptionEs:
      "Nylon mesh pen case ayuda a ordenar plumas, refills y accesorios. Es útil para armar un set de compra y mantener visible lo que llevas.",
    longDescriptionJa:
      "ナイロンメッシュペンケースは、ペン、替え芯、小物を整理して持ち運びやすいアイテムです。中身が見えるのでセット購入にも合わせやすいです。",
    sellingPointsEs: ["Organiza plumas y refills.", "Ligero y visible.", "Bueno para sets."],
    sellingPointsJa: ["ペンと替え芯を整理。", "軽くて見やすい。", "セットに合わせやすい。"],
    careNoteEs: "Color, tamaño y capacidad se confirman por mensaje.",
    careNoteJa: "色、サイズ、容量はメッセージで確認します。",
  },
  "olfa-perforation-cutter": {
    galleryImages: [
      "https://www.olfa.co.jp/wordpress/wp-content/uploads/1501648948PRC-3.jpg",
    ],
    optionGroups: [
      { labelEs: "Tipo", labelJa: "種類", optionsEs: ["Perforation cutter"], optionsJa: ["ミシン目カッター"] },
      { labelEs: "Uso", labelJa: "用途", optionsEs: ["Papel", "Tickets", "Manualidades"], optionsJa: ["紙", "チケット", "工作"] },
    ],
    longDescriptionEs:
      "OLFA perforation cutter es una herramienta especializada para crear líneas de corte perforado en papel. Aporta valor para proyectos creativos y organización.",
    longDescriptionJa:
      "OLFA ミシン目カッターは、紙に切り取り線を作れる専門ツールです。工作、整理、チケット作りに便利です。",
    sellingPointsEs: ["Herramienta especializada.", "Útil para proyectos creativos.", "Marca japonesa confiable."],
    sellingPointsJa: ["専門ツール。", "工作に便利。", "信頼できる日本メーカー。"],
    careNoteEs: "Modelo y estado de empaque se confirman por mensaje.",
    careNoteJa: "モデルとパッケージ状態はメッセージで確認します。",
  },
  "gel-compatible-refills": {
    galleryImages: [
      "https://www.mpuni.co.jp/products/images/products/SXR-L-7.jpg",
      "https://www.zebra.co.jp/global/images/sarasa.png",
      "https://www.pilot.co.jp/press_release/d02899159a77371e1ce39cbdb1cbbe68cc20a235.jpg",
    ],
    optionGroups: [
      { labelEs: "Compatibilidad", labelJa: "対応", optionsEs: ["SARASA", "Juice up", "uni-ball one"], optionsJa: ["SARASA", "Juice up", "uni-ball one"] },
      { labelEs: "Punta", labelJa: "芯径", optionsEs: ["0.38 mm", "0.5 mm", "0.7 mm", "A confirmar"], optionsJa: ["0.38mm", "0.5mm", "0.7mm", "要確認"] },
    ],
    longDescriptionEs:
      "Recambios compatibles para geles populares. Antes de reservar se confirma el cuerpo exacto del bolígrafo para evitar errores de compatibilidad.",
    longDescriptionJa:
      "人気ゲルペン用の対応替え芯です。取り置き前に使っている本体を確認して、互換性の間違いを防ぎます。",
    sellingPointsEs: ["Mantiene tus geles en uso.", "Precio bajo.", "Compatibilidad confirmada por mensaje."],
    sellingPointsJa: ["ゲルペンを長く使える。", "低価格。", "互換性をメッセージで確認。"],
    careNoteEs: "Indica el modelo del cuerpo, punta y color antes de reservar.",
    careNoteJa: "取り置き前に、本体モデル、芯径、色を確認します。",
  },
  "jetstream-single": {
    galleryImages: [
      "https://www.mpuni.co.jp/products/images/products/313882000.jpg",
      "https://www.mpuni.co.jp/products/images/products/SXR-L-7.jpg",
    ],
    optionGroups: [
      { labelEs: "Punta", labelJa: "ボール径", optionsEs: ["A confirmar"], optionsJa: ["要確認"] },
      { labelEs: "Color", labelJa: "色", optionsEs: ["Black", "Blue", "A confirmar"], optionsJa: ["黒", "青", "要確認"] },
    ],
    longDescriptionEs: "JETSTREAM single color es la opción simple y confiable para uso diario. Es fácil de recomendar para oficina, escuela o compra por varias unidades.",
    longDescriptionJa: "ジェットストリーム単色は、普段使いに選びやすい定番ボールペンです。仕事、学校、予備用のまとめ買いにも向きます。",
    sellingPointsEs: ["Tinta suave.", "Precio accesible.", "Fácil de comprar en varias unidades."],
    sellingPointsJa: ["なめらかなインク。", "買いやすい価格。", "まとめ買いしやすい。"],
    careNoteEs: "Color y punta se confirman por mensaje.",
    careNoteJa: "色とボール径はメッセージで確認します。",
  },
  "jetstream-lite-07": {
    galleryImages: [
      "https://www.mpuni.co.jp/products/images/products/313882000.jpg",
      "https://www.mpuni.co.jp/products/images/products/SXR-L-7.jpg",
    ],
    optionGroups: [
      { labelEs: "Punta", labelJa: "ボール径", optionsEs: ["0.7 mm"], optionsJa: ["0.7mm"] },
      { labelEs: "Color", labelJa: "色", optionsEs: ["Black", "A confirmar"], optionsJa: ["黒", "要確認"] },
    ],
    longDescriptionEs: "La versión 0.7 mm de JETSTREAM Lite touch ink sirve para quienes prefieren una línea más visible sin perder una sensación ligera.",
    longDescriptionJa: "JETSTREAM Lite touch inkの0.7mmは、軽い書き味のまま少し太く見やすい線を書きたい人に向きます。",
    sellingPointsEs: ["Trazo más visible.", "Escritura ligera.", "Buena para firmas y notas."],
    sellingPointsJa: ["見やすい線。", "軽い書き味。", "署名やノートに便利。"],
    careNoteEs: "Color disponible se confirma por mensaje.",
    careNoteJa: "選べる色はメッセージで確認します。",
  },
  "jetstream-lite-refill": {
    galleryImages: [
      "https://www.mpuni.co.jp/products/images/products/SXR-L-7.jpg",
      "https://www.mpuni.co.jp/products/images/products/313882000.jpg",
    ],
    optionGroups: [
      { labelEs: "Punta", labelJa: "ボール径", optionsEs: ["0.5 mm", "0.7 mm"], optionsJa: ["0.5mm", "0.7mm"] },
      { labelEs: "Color", labelJa: "色", optionsEs: ["Black", "Blue", "Red", "Green", "A confirmar"], optionsJa: ["黒", "青", "赤", "緑", "要確認"] },
    ],
    longDescriptionEs: "Recambios para JETSTREAM Lite touch ink. Antes de reservar se confirma el cuerpo exacto para evitar errores de compatibilidad.",
    longDescriptionJa: "JETSTREAM Lite touch ink用の替え芯です。取り置き前に本体を確認して、対応違いを防ぎます。",
    sellingPointsEs: ["Mantiene tu cuerpo favorito.", "Varios colores consultables.", "Precio de mantenimiento."],
    sellingPointsJa: ["お気に入り本体を長く使える。", "複数色を確認可能。", "メンテナンス価格。"],
    careNoteEs: "Indica el cuerpo JETSTREAM antes de reservar.",
    careNoteJa: "取り置き前に使っているJETSTREAM本体を確認します。",
  },
  "uniball-one-refill": {
    galleryImages: [
      "https://www.mpuni.co.jp/products/feature_images/main/ballpoint_pens/thm_uniballone.png",
      "https://www.mpuni.co.jp/products/images/products/SXR-L-7.jpg",
    ],
    optionGroups: [
      { labelEs: "Punta", labelJa: "ボール径", optionsEs: ["0.38 mm", "0.5 mm"], optionsJa: ["0.38mm", "0.5mm"] },
      { labelEs: "Color", labelJa: "色", optionsEs: ["Black", "Blue", "Red", "A confirmar"], optionsJa: ["黒", "青", "赤", "要確認"] },
    ],
    longDescriptionEs: "Recambios para uni-ball one de un color. Son una compra práctica para seguir usando cuerpos favoritos sin comprar otro bolígrafo completo.",
    longDescriptionJa: "uni-ball one単色用の替え芯です。本体を買い直さず、お気に入りの軸を長く使えます。",
    sellingPointsEs: ["Gel nítido.", "Compra económica.", "Compatibilidad confirmada por mensaje."],
    sellingPointsJa: ["くっきりしたゲル。", "低価格で追加しやすい。", "対応をメッセージで確認。"],
    careNoteEs: "Punta, color y cuerpo se confirman por mensaje.",
    careNoteJa: "芯径、色、本体はメッセージで確認します。",
  },
  "uniball-one-3-refill": {
    galleryImages: [
      "https://www.mpuni.co.jp/products/feature_images/main/ballpoint_pens/thm_uniballone.png",
      "https://www.mpuni.co.jp/products/images/products/313882000.jpg",
    ],
    optionGroups: [
      { labelEs: "Punta", labelJa: "ボール径", optionsEs: ["0.38 mm", "0.5 mm"], optionsJa: ["0.38mm", "0.5mm"] },
      { labelEs: "Color", labelJa: "色", optionsEs: ["Black", "Blue", "Red"], optionsJa: ["黒", "青", "赤"] },
    ],
    longDescriptionEs: "Recambios para uni-ball one 3. Son útiles para mantener el cuerpo multicolor listo para clase, oficina o agenda.",
    longDescriptionJa: "uni-ball one 3用の替え芯です。授業、仕事、手帳用の多色本体を長く使えます。",
    sellingPointsEs: ["Para cuerpo multicolor.", "Colores básicos.", "Útil para mantenimiento."],
    sellingPointsJa: ["多色本体用。", "基本色。", "メンテナンスに便利。"],
    careNoteEs: "Punta y color disponibles se confirman por mensaje.",
    careNoteJa: "芯径と色はメッセージで確認します。",
  },
  "lightwrite-4c-refill": {
    galleryImages: [
      "https://www.zebra.co.jp/pro/images/refill/BR-8A-4C-BK.jpg",
    ],
    optionGroups: [
      { labelEs: "Punta", labelJa: "芯径", optionsEs: ["0.7 mm"], optionsJa: ["0.7mm"] },
      { labelEs: "Compatibilidad", labelJa: "対応", optionsEs: ["Lightwrite Alpha", "4C compatible"], optionsJa: ["Lightwrite Alpha", "4C対応"] },
    ],
    longDescriptionEs: "Recambio 4C para Lightwrite Alpha y cuerpos compatibles. Es una pieza pequeña, ideal para añadir al pedido principal.",
    longDescriptionJa: "Lightwrite Alphaや4C対応本体向けの替え芯です。小さく、メイン商品に追加しやすいアイテムです。",
    sellingPointsEs: ["Formato 4C.", "Precio bajo.", "Bueno como compra adicional."],
    sellingPointsJa: ["4C規格。", "低価格。", "ついで買いに便利。"],
    careNoteEs: "Compatibilidad con el cuerpo se confirma por mensaje.",
    careNoteJa: "本体との対応はメッセージで確認します。",
  },
  "juice-up-refill": {
    galleryImages: [
      "https://www.pilot.co.jp/press_release/d02899159a77371e1ce39cbdb1cbbe68cc20a235.jpg",
      "https://www.mpuni.co.jp/products/images/products/SXR-L-7.jpg",
    ],
    optionGroups: [
      { labelEs: "Punta", labelJa: "ボール径", optionsEs: ["0.5 mm"], optionsJa: ["0.5mm"] },
      { labelEs: "Color", labelJa: "色", optionsEs: ["Black", "Red", "A confirmar"], optionsJa: ["黒", "赤", "要確認"] },
    ],
    longDescriptionEs: "Recambio 0.5 mm para PILOT Juice up. Mantiene el trazo fino de gel y evita reemplazar el cuerpo completo.",
    longDescriptionJa: "PILOT Juice up用の0.5mm替え芯です。細かいゲル筆記を保ちながら本体を長く使えます。",
    sellingPointsEs: ["Gel fino.", "Para Juice up.", "Buena compra de mantenimiento."],
    sellingPointsJa: ["細字ゲル。", "Juice up用。", "メンテナンス購入向け。"],
    careNoteEs: "Color y cuerpo compatible se confirman por mensaje.",
    careNoteJa: "色と対応本体はメッセージで確認します。",
  },
  "campus-pencil-sharp-basic": {
    galleryImages: [
      "https://www.kokuyo.com/system/files/SET44292.jpg",
    ],
    optionGroups: [
      { labelEs: "Mina", labelJa: "芯径", optionsEs: ["0.3 mm", "0.5 mm"], optionsJa: ["0.3mm", "0.5mm"] },
      { labelEs: "Color", labelJa: "色", optionsEs: ["Black", "White", "A confirmar"], optionsJa: ["黒", "白", "要確認"] },
    ],
    longDescriptionEs: "Campus pencil sharp basic se siente cercano a un lápiz, pero con la comodidad de un mecánico. Es una opción de bajo precio para estudio.",
    longDescriptionJa: "Campus鉛筆シャープ単品は、鉛筆に近い感覚で使える低価格シャープです。勉強用に取り入れやすい一本です。",
    sellingPointsEs: ["Precio bajo.", "Sensación de lápiz.", "Bueno para estudiantes."],
    sellingPointsJa: ["低価格。", "鉛筆感覚。", "学生向け。"],
    careNoteEs: "Color y grosor se confirman por mensaje.",
    careNoteJa: "色と芯径はメッセージで確認します。",
  },
  "campus-pencil-sharp-mint": {
    galleryImages: [
      "https://www.kokuyo.com/system/files/SET44292.jpg",
    ],
    optionGroups: [
      { labelEs: "Mina", labelJa: "芯径", optionsEs: ["0.3 mm"], optionsJa: ["0.3mm"] },
      { labelEs: "Color", labelJa: "色", optionsEs: ["Mint"], optionsJa: ["ミント"] },
    ],
    longDescriptionEs: "Campus mint 0.3 mm es una opción suave visualmente para quienes escriben pequeño y quieren un color más fresco en el estuche.",
    longDescriptionJa: "Campus 0.3mmミントは、小さい文字を書きたい人や筆箱に淡い色を入れたい人に向く一本です。",
    sellingPointsEs: ["Color suave.", "Punta fina.", "Fácil de añadir al pedido."],
    sellingPointsJa: ["淡い色。", "細字向け。", "追加しやすい価格。"],
    careNoteEs: "Disponibilidad se confirma por mensaje.",
    careNoteJa: "受け渡し可否はメッセージで確認します。",
  },
  "pentel-ain-thick-leads": {
    galleryImages: [
      "https://www.pentel.co.jp/images/products/lead_pentel_ain_mainvisual_pc_1.png",
    ],
    optionGroups: [
      { labelEs: "Grosor", labelJa: "芯径", optionsEs: ["0.9 mm", "1.3 mm"], optionsJa: ["0.9mm", "1.3mm"] },
      { labelEs: "Dureza", labelJa: "濃さ", optionsEs: ["HB", "B", "A confirmar"], optionsJa: ["HB", "B", "要確認"] },
    ],
    longDescriptionEs: "Pentel Ain thick leads son para usuarios que quieren líneas fuertes y visibles. Van bien con lápices mecánicos de mina gruesa.",
    longDescriptionJa: "Pentel Ain太芯は、太く見やすい線を書きたい人向けです。太芯対応シャープと合わせて使えます。",
    sellingPointsEs: ["Línea gruesa.", "Buena visibilidad.", "Para estudio y bocetos."],
    sellingPointsJa: ["太い線。", "見やすい。", "勉強やラフ描きに便利。"],
    careNoteEs: "Grosor y dureza se confirman por mensaje.",
    careNoteJa: "芯径と濃さはメッセージで確認します。",
  },
  "kurutoga-metal-silent-blue": {
    galleryImages: [
      "https://www.mpuni.co.jp/news/images/news/ed954fa14215beabe02a0d83af8c1e3b97353e94.jpg",
    ],
    optionGroups: [
      { labelEs: "Mina", labelJa: "芯径", optionsEs: ["0.5 mm"], optionsJa: ["0.5mm"] },
      { labelEs: "Color", labelJa: "色", optionsEs: ["Silent Blue"], optionsJa: ["Silent Blue"] },
    ],
    longDescriptionEs: "KURUTOGA Metal Silent Blue ofrece el cuerpo metálico de KURUTOGA en un color sobrio de uso diario premium.",
    longDescriptionJa: "クルトガ メタル Silent Blueは、金属軸の上位感を落ち着いた色で使える通常色モデルです。",
    sellingPointsEs: ["Cuerpo metálico.", "Color sobrio.", "Precio normal del Metal."],
    sellingPointsJa: ["金属軸。", "落ち着いた色。", "メタル通常色価格。"],
    careNoteEs: "Estado de caja y entrega se confirman por mensaje.",
    careNoteJa: "箱の状態と受け渡し方法はメッセージで確認します。",
  },
  "kurutoga-metal-phantom-grey": {
    galleryImages: [
      "https://www.mpuni.co.jp/news/images/news/ed954fa14215beabe02a0d83af8c1e3b97353e94.jpg",
    ],
    optionGroups: [
      { labelEs: "Mina", labelJa: "芯径", optionsEs: ["0.5 mm"], optionsJa: ["0.5mm"] },
      { labelEs: "Color", labelJa: "色", optionsEs: ["Phantom Grey"], optionsJa: ["Phantom Grey"] },
    ],
    longDescriptionEs: "KURUTOGA Metal Phantom Grey es una opción premium discreta para escritorio, estudio y regalo sobrio.",
    longDescriptionJa: "クルトガ メタル Phantom Greyは、仕事用や落ち着いたギフトにも合う控えめな上位モデルです。",
    sellingPointsEs: ["Premium discreto.", "Cuerpo metálico.", "Buen regalo sobrio."],
    sellingPointsJa: ["控えめなプレミアム感。", "金属軸。", "落ち着いたギフトに。"],
    careNoteEs: "Estado de caja y entrega se confirman por mensaje.",
    careNoteJa: "箱の状態と受け渡し方法はメッセージで確認します。",
  },
  "zento-standard-yellow": {
    galleryImages: ["https://www.mpuni.co.jp/products/images/products/thm_uniballzento_zsc.png", "https://www.mpuni.co.jp/products/images/products/b628f8b3b59e3a6f06a79dd29b55b00db4636648.jpg"],
    optionGroups: [
      { labelEs: "Color", labelJa: "色", optionsEs: ["Yellow"], optionsJa: ["黄"] },
      { labelEs: "Punta", labelJa: "芯径", optionsEs: ["A confirmar"], optionsJa: ["要確認"] },
    ],
    longDescriptionEs: "ZENTO Standard amarillo es una opción fácil para agregar color a apuntes y agenda sin subir demasiado el precio del pedido.",
    longDescriptionJa: "ZENTO Standardの黄色は、ノートや手帳に色を足したい時に追加しやすい一本です。",
    sellingPointsEs: ["Color visible.", "Precio accesible.", "Bueno para estudiar."],
    sellingPointsJa: ["見やすい色。", "買いやすい価格。", "勉強用に便利。"],
    careNoteEs: "Punta exacta y entrega se confirman por mensaje.",
    careNoteJa: "芯径と受け渡し方法はメッセージで確認します。",
  },
  "zento-standard-orange": {
    galleryImages: ["https://www.mpuni.co.jp/products/images/products/thm_uniballzento_zsc.png", "https://www.mpuni.co.jp/products/images/products/b628f8b3b59e3a6f06a79dd29b55b00db4636648.jpg"],
    optionGroups: [
      { labelEs: "Color", labelJa: "色", optionsEs: ["Orange"], optionsJa: ["オレンジ"] },
      { labelEs: "Punta", labelJa: "芯径", optionsEs: ["A confirmar"], optionsJa: ["要確認"] },
    ],
    longDescriptionEs: "ZENTO Standard naranjo funciona bien para separar temas, marcar tareas y escribir notas que deben llamar la atención.",
    longDescriptionJa: "ZENTO Standardのオレンジは、テーマ分けやタスクの目印に使いやすいカラーです。",
    sellingPointsEs: ["Color cálido.", "Útil para planner.", "Fácil de combinar."],
    sellingPointsJa: ["あたたかい色。", "手帳に便利。", "色違いで合わせやすい。"],
    careNoteEs: "Punta exacta y entrega se confirman por mensaje.",
    careNoteJa: "芯径と受け渡し方法はメッセージで確認します。",
  },
  "zento-standard-purple": {
    galleryImages: ["https://www.mpuni.co.jp/products/images/products/thm_uniballzento_zsc.png", "https://www.mpuni.co.jp/products/images/products/b628f8b3b59e3a6f06a79dd29b55b00db4636648.jpg"],
    optionGroups: [
      { labelEs: "Color", labelJa: "色", optionsEs: ["Purple"], optionsJa: ["紫"] },
      { labelEs: "Punta", labelJa: "芯径", optionsEs: ["A confirmar"], optionsJa: ["要確認"] },
    ],
    longDescriptionEs: "ZENTO Standard morado suma un tono distinto al estuche y funciona bien para cartas, diario y notas personales.",
    longDescriptionJa: "ZENTO Standardの紫は、手紙や日記、少し個性を出したいメモに向くカラーです。",
    sellingPointsEs: ["Tono distinto.", "Bueno para diario.", "Compra por colores."],
    sellingPointsJa: ["少し違う色。", "日記にも便利。", "色違いで揃えやすい。"],
    careNoteEs: "Punta exacta y entrega se confirman por mensaje.",
    careNoteJa: "芯径と受け渡し方法はメッセージで確認します。",
  },
  "zento-limited-wine-red": {
    galleryImages: ["https://www.mpuni.co.jp/products/images/products/thm_uniballzento_zsc.png", "https://www.mpuni.co.jp/products/images/products/e33bb6fee13971320ba23c68a70bc9395d0d4892.jpg"],
    optionGroups: [
      { labelEs: "Color", labelJa: "色", optionsEs: ["Wine red"], optionsJa: ["ワインレッド"] },
      { labelEs: "Edición", labelJa: "仕様", optionsEs: ["Limited"], optionsJa: ["限定"] },
    ],
    longDescriptionEs: "ZENTO limited wine red mantiene el precio de entrada, pero con una sensación más especial para regalo pequeño o colección.",
    longDescriptionJa: "ZENTO限定ワインレッドは、買いやすい価格で少し特別感を出せるカラーです。",
    sellingPointsEs: ["Color limitado.", "Buen regalo pequeño.", "Tono sobrio."],
    sellingPointsJa: ["限定色。", "小さなギフトに。", "落ち着いた色味。"],
    careNoteEs: "La disponibilidad del color limitado se confirma por mensaje.",
    careNoteJa: "限定色の受け渡し可否はメッセージで確認します。",
  },
  "zento-limited-green": {
    galleryImages: ["https://www.mpuni.co.jp/products/images/products/thm_uniballzento_zsc.png", "https://www.mpuni.co.jp/products/images/products/b628f8b3b59e3a6f06a79dd29b55b00db4636648.jpg"],
    optionGroups: [
      { labelEs: "Color", labelJa: "色", optionsEs: ["Green"], optionsJa: ["グリーン"] },
      { labelEs: "Edición", labelJa: "仕様", optionsEs: ["Limited"], optionsJa: ["限定"] },
    ],
    longDescriptionEs: "ZENTO limited green es una alternativa fresca para separar temas en apuntes y mantener una paleta de escritorio más natural.",
    longDescriptionJa: "ZENTO限定グリーンは、ノートのテーマ分けや落ち着いた筆箱づくりに使いやすい一本です。",
    sellingPointsEs: ["Color fresco.", "Útil para estudio.", "Limitado."],
    sellingPointsJa: ["爽やかな色。", "勉強に便利。", "限定カラー。"],
    careNoteEs: "La disponibilidad del color limitado se confirma por mensaje.",
    careNoteJa: "限定色の受け渡し可否はメッセージで確認します。",
  },
  "zento-limited-cream": {
    galleryImages: ["https://www.mpuni.co.jp/products/images/products/thm_uniballzento_zsc.png", "https://www.mpuni.co.jp/products/images/products/b628f8b3b59e3a6f06a79dd29b55b00db4636648.jpg"],
    optionGroups: [
      { labelEs: "Color", labelJa: "色", optionsEs: ["Cream"], optionsJa: ["クリーム"] },
      { labelEs: "Edición", labelJa: "仕様", optionsEs: ["Limited"], optionsJa: ["限定"] },
    ],
    longDescriptionEs: "ZENTO limited cream combina bien con estuches claros y una estética suave de escritorio japonés.",
    longDescriptionJa: "ZENTO限定クリームは、淡い色の筆箱ややわらかい雰囲気の机まわりに合わせやすいカラーです。",
    sellingPointsEs: ["Color suave.", "Fácil de regalar.", "Limitado."],
    sellingPointsJa: ["やさしい色。", "ギフトにも便利。", "限定カラー。"],
    careNoteEs: "La disponibilidad del color limitado se confirma por mensaje.",
    careNoteJa: "限定色の受け渡し可否はメッセージで確認します。",
  },
  "kurutoga-ks-03": {
    galleryImages: ["https://www.mpuni.co.jp/products/images/products/3eb0c5b8e64e7c7f42cee11e63c979eb51257b43.png"],
    optionGroups: [
      { labelEs: "Mina", labelJa: "芯径", optionsEs: ["0.3 mm"], optionsJa: ["0.3mm"] },
      { labelEs: "Color", labelJa: "色", optionsEs: ["A confirmar"], optionsJa: ["要確認"] },
    ],
    longDescriptionEs: "KURUTOGA KS 0.3 mm es una entrada práctica a la línea KURUTOGA para quienes escriben pequeño y quieren una punta más estable.",
    longDescriptionJa: "クルトガKS 0.3mmは、小さい文字をきれいに書きたい人に向く、クルトガ入門にも使いやすいモデルです。",
    sellingPointsEs: ["Punta fina.", "Mecanismo KURUTOGA.", "Bueno para estudio."],
    sellingPointsJa: ["細字。", "クルトガ機構。", "勉強向け。"],
    careNoteEs: "Color y entrega se confirman por mensaje.",
    careNoteJa: "色と受け渡し方法はメッセージで確認します。",
  },
  "kurutoga-ks-green": {
    galleryImages: ["https://www.mpuni.co.jp/products/images/products/3eb0c5b8e64e7c7f42cee11e63c979eb51257b43.png"],
    optionGroups: [
      { labelEs: "Mina", labelJa: "芯径", optionsEs: ["0.5 mm"], optionsJa: ["0.5mm"] },
      { labelEs: "Color", labelJa: "色", optionsEs: ["Green"], optionsJa: ["グリーン"] },
    ],
    longDescriptionEs: "KURUTOGA KS green 0.5 mm es una opción equilibrada para uso diario, con color sobrio y escritura estable.",
    longDescriptionJa: "クルトガKSグリーン0.5mmは、落ち着いた色と安定した書き心地を両立した普段使い向けモデルです。",
    sellingPointsEs: ["0.5 mm versátil.", "Color sobrio.", "Uso diario."],
    sellingPointsJa: ["使いやすい0.5mm。", "落ち着いた色。", "日常使い。"],
    careNoteEs: "Color y entrega se confirman por mensaje.",
    careNoteJa: "色と受け渡し方法はメッセージで確認します。",
  },
  "smash-03": {
    galleryImages: ["https://www.pentel.co.jp/images/products/smash_mainvisual_pc_1.jpg"],
    optionGroups: [
      { labelEs: "Mina", labelJa: "芯径", optionsEs: ["0.3 mm"], optionsJa: ["0.3mm"] },
      { labelEs: "Marca", labelJa: "ブランド", optionsEs: ["Pentel"], optionsJa: ["ぺんてる"] },
    ],
    longDescriptionEs: "Pentel SMASH 0.3 mm conserva la sensación clásica del modelo, pero con una punta más fina para escritura precisa.",
    longDescriptionJa: "ぺんてるSMASH 0.3mmは、定番SMASHの使い心地を細字で使いたい人向けのモデルです。",
    sellingPointsEs: ["Clásico Pentel.", "Punta fina.", "Bueno para dibujo."],
    sellingPointsJa: ["ぺんてる定番。", "細字。", "作図にも便利。"],
    careNoteEs: "Color y entrega se confirman por mensaje.",
    careNoteJa: "色と受け渡し方法はメッセージで確認します。",
  },
  "orenznero-02": {
    galleryImages: ["https://www.pentel.co.jp/images/products/ORENZNERO_mainvisual_pc-1.jpg"],
    optionGroups: [
      { labelEs: "Mina", labelJa: "芯径", optionsEs: ["0.2 mm"], optionsJa: ["0.2mm"] },
      { labelEs: "Uso", labelJa: "用途", optionsEs: ["Ultra fine"], optionsJa: ["超細字"] },
    ],
    longDescriptionEs: "Orenznero 0.2 mm es para quien necesita una línea muy fina y una sensación premium en un lápiz mecánico japonés.",
    longDescriptionJa: "オレンズネロ0.2mmは、極細の線と上位モデルの質感を求める人向けのシャープペンです。",
    sellingPointsEs: ["Ultrafino.", "Premium.", "Para escritura técnica."],
    sellingPointsJa: ["超細字。", "プレミアム。", "細かな作業向け。"],
    careNoteEs: "Usar minas compatibles 0.2 mm. Entrega se confirma por mensaje.",
    careNoteJa: "0.2mm対応芯を使用します。受け渡し方法はメッセージで確認します。",
  },
  "orenznero-03": {
    galleryImages: ["https://www.pentel.co.jp/images/products/ORENZNERO_mainvisual_pc-1.jpg"],
    optionGroups: [
      { labelEs: "Mina", labelJa: "芯径", optionsEs: ["0.3 mm"], optionsJa: ["0.3mm"] },
      { labelEs: "Uso", labelJa: "用途", optionsEs: ["Fine writing"], optionsJa: ["細字筆記"] },
    ],
    longDescriptionEs: "Orenznero 0.3 mm equilibra precisión y escritura diaria para usuarios que quieren un lápiz premium fino.",
    longDescriptionJa: "オレンズネロ0.3mmは、細字の精密さと日常筆記の使いやすさを両立した上位モデルです。",
    sellingPointsEs: ["Preciso.", "Premium.", "Buen equilibrio."],
    sellingPointsJa: ["精密。", "プレミアム。", "バランスが良い。"],
    careNoteEs: "Usar minas compatibles 0.3 mm. Entrega se confirma por mensaje.",
    careNoteJa: "0.3mm対応芯を使用します。受け渡し方法はメッセージで確認します。",
  },
  "orenznero-05": {
    galleryImages: ["https://www.pentel.co.jp/images/products/ORENZNERO_mainvisual_pc-1.jpg"],
    optionGroups: [
      { labelEs: "Mina", labelJa: "芯径", optionsEs: ["0.5 mm"], optionsJa: ["0.5mm"] },
      { labelEs: "Uso", labelJa: "用途", optionsEs: ["Daily premium"], optionsJa: ["日常プレミアム"] },
    ],
    longDescriptionEs: "Orenznero 0.5 mm es la versión más fácil de incorporar al uso diario si ya usas minas comunes 0.5 mm.",
    longDescriptionJa: "オレンズネロ0.5mmは、一般的な0.5mm芯で日常使いしやすい上位シャープです。",
    sellingPointsEs: ["0.5 mm común.", "Premium diario.", "Buen regalo."],
    sellingPointsJa: ["一般的な0.5mm。", "日常使いの上位感。", "ギフトにも。"],
    careNoteEs: "Usar minas compatibles 0.5 mm. Entrega se confirma por mensaje.",
    careNoteJa: "0.5mm対応芯を使用します。受け渡し方法はメッセージで確認します。",
  },
  "airstep-limited": {
    galleryImages: ["https://www.pilot.co.jp/press_release/ea7d236ca746fe85e9416a65e41d921b88369ab6.jpg"],
    optionGroups: [
      { labelEs: "Modelo", labelJa: "モデル", optionsEs: ["Limited"], optionsJa: ["限定"] },
      { labelEs: "Color", labelJa: "色", optionsEs: ["A confirmar"], optionsJa: ["要確認"] },
    ],
    longDescriptionEs: "PILOT AirStep limitado es una opción cómoda para estudiar y una forma fácil de sumar una pieza japonesa especial al pedido.",
    longDescriptionJa: "PILOT AirStep限定モデルは、勉強用として使いやすく、少し特別な日本文具を追加したい時にも向きます。",
    sellingPointsEs: ["Edición limitada.", "Grip cómodo.", "Precio medio."],
    sellingPointsJa: ["限定モデル。", "握りやすい。", "中価格帯。"],
    careNoteEs: "Color y entrega se confirman por mensaje.",
    careNoteJa: "色と受け渡し方法はメッセージで確認します。",
  },
  "airstep-standard": {
    galleryImages: ["https://www.pilot.co.jp/press_release/ea7d236ca746fe85e9416a65e41d921b88369ab6.jpg"],
    optionGroups: [
      { labelEs: "Modelo", labelJa: "モデル", optionsEs: ["Standard"], optionsJa: ["通常"] },
      { labelEs: "Color", labelJa: "色", optionsEs: ["A confirmar"], optionsJa: ["要確認"] },
    ],
    longDescriptionEs: "PILOT AirStep standard es una alternativa accesible para apuntes largos, escuela y universidad.",
    longDescriptionJa: "PILOT AirStep通常モデルは、学校や大学の長めのノートに使いやすい買いやすいシャープです。",
    sellingPointsEs: ["Accesible.", "Cómodo.", "Para estudio."],
    sellingPointsJa: ["買いやすい。", "握りやすい。", "勉強向け。"],
    careNoteEs: "Color y entrega se confirman por mensaje.",
    careNoteJa: "色と受け渡し方法はメッセージで確認します。",
  },
};

Object.assign(productMerchandisingContent, {
  "zento-signature-limited": {
    galleryImages: [
      "https://item-shopping.c.yimg.jp/i/n/hanko-otobe_ub-zht-05",
    ],
    optionGroups: [
      { labelEs: "Punta / cuerpo", labelJa: "ボール径 / 軸色", optionsEs: ["Limited 0.5 mm / Stone Brass"], optionsJa: ["限定0.5mm / ストーンブラス"] },
    ],
    longDescriptionEs: "ZENTO Signature limitado es la opcion de coleccion dentro de la linea ZENTO. El Limited se maneja como 0.5 mm Stone Brass.",
    longDescriptionJa: "ZENTO Signature限定モデルは、ZENTOの中でもコレクション性のある上位モデルです。限定モデルは0.5mm Stone Brassとして扱います。",
    sellingPointsEs: ["Modelo limitado.", "Presentacion premium.", "Buen regalo serio."],
    sellingPointsJa: ["限定モデル。", "上位感のある見た目。", "特別なギフトに。"],
    careNoteEs: "Limited es solo 0.5 mm. Entrega se confirma por mensaje.",
    careNoteJa: "限定モデルは0.5mmのみです。受け渡し方法はメッセージで確認します。",
  },
  "zento-signature-038": {
    galleryImages: [
      "https://shopping.jreast.co.jp/html/upload/save_image/shop/17456/product/4778690/image_l.jpg",
    ],
    optionGroups: [
      { labelEs: "Punta / cuerpo", labelJa: "ボール径 / 軸色", optionsEs: ["0.38 mm / Silver"], optionsJa: ["0.38mm / シルバー"] },
    ],
    longDescriptionEs: "La version 0.38 mm de ZENTO Signature es para quienes escriben pequeno o quieren un trazo fino en agendas y notas cuidadas. Esta punta viene con cuerpo Silver.",
    longDescriptionJa: "ZENTO Signature 0.38mmは、小さめの文字や手帳、丁寧なノートに向く細字モデルです。軸色はシルバー固定です。",
    sellingPointsEs: ["Punta fina.", "Premium discreto.", "Ideal para planner."],
    sellingPointsJa: ["細字。", "落ち着いた上位感。", "手帳向け。"],
    careNoteEs: "0.38 mm viene con cuerpo Silver. Entrega se confirma por mensaje.",
    careNoteJa: "0.38mmはシルバー軸です。受け渡し方法はメッセージで確認します。",
  },
  "zento-signature-05": {
    galleryImages: [
      "https://item-shopping.c.yimg.jp/i/n/shijimi-ya_ub-zh-05-01",
    ],
    optionGroups: [
      { labelEs: "Punta / cuerpo", labelJa: "ボール径 / 軸色", optionsEs: ["0.5 mm / Metallic Black"], optionsJa: ["0.5mm / メタリックブラック"] },
    ],
    longDescriptionEs: "ZENTO Signature 0.5 mm es el punto medio: suficientemente fino para uso diario y con presencia para regalo. Esta punta viene con cuerpo Metallic Black.",
    longDescriptionJa: "ZENTO Signature 0.5mmは、日常使いしやすくギフト感もあるバランスの良いモデルです。軸色はメタリックブラック固定です。",
    sellingPointsEs: ["Punta equilibrada.", "Uso diario premium.", "Compatible con refill consultable."],
    sellingPointsJa: ["バランスの良い太さ。", "上質な日常使い。", "替え芯も相談可能。"],
    careNoteEs: "0.5 mm regular viene con cuerpo Metallic Black. Limited 0.5 mm es Stone Brass.",
    careNoteJa: "通常0.5mmはメタリックブラック軸です。限定0.5mmはストーンブラスです。",
  },
  "zento-signature-07": {
    galleryImages: [
      "https://item-shopping.c.yimg.jp/i/n/shijimi-ya_ub-zh-07-01",
    ],
    optionGroups: [
      { labelEs: "Punta / cuerpo", labelJa: "ボール径 / 軸色", optionsEs: ["0.7 mm / Champagne Gold"], optionsJa: ["0.7mm / シャンパンゴールド"] },
    ],
    longDescriptionEs: "ZENTO Signature 0.7 mm ofrece una linea mas marcada. Va bien para firmas, escritura amplia y usuarios que prefieren trazos visibles. Esta punta viene con cuerpo Champagne Gold.",
    longDescriptionJa: "ZENTO Signature 0.7mmは、より見やすい線で書けるモデルです。サインや大きめの文字に向きます。軸色はシャンパンゴールド固定です。",
    sellingPointsEs: ["Trazo visible.", "Ideal para firma.", "Sensacion premium."],
    sellingPointsJa: ["見やすい線。", "サイン向け。", "上位感あり。"],
    careNoteEs: "0.7 mm viene con cuerpo Champagne Gold. Entrega se confirma por mensaje.",
    careNoteJa: "0.7mmはシャンパンゴールド軸です。受け渡し方法はメッセージで確認します。",
  },
  "sarasa-clip-limited": {
    galleryImages: [
      "https://www.zebra.co.jp/pro/images/JJ15-BK.jpg",
      "https://www.zebra.co.jp/global/images/sarasa.png",
    ],
    optionGroups: [
      { labelEs: "Tipo", labelJa: "種類", optionsEs: ["SARASA CLIP"], optionsJa: ["サラサクリップ"] },
      { labelEs: "Color", labelJa: "色", optionsEs: ["Limited color", "A confirmar"], optionsJa: ["限定色", "要確認"] },
    ],
    longDescriptionEs: "SARASA CLIP limitado mantiene la comodidad del clip y la tinta gel SARASA, con colores consultables por mensaje para armar combinaciones.",
    longDescriptionJa: "サラサクリップ限定は、便利なクリップとSARASAらしいゲルインキをそのまま楽しめる色違い商品です。",
    sellingPointsEs: ["Precio accesible.", "Color limitado.", "Facil de comprar en set."],
    sellingPointsJa: ["買いやすい価格。", "限定カラー。", "セット買いしやすい。"],
    careNoteEs: "La imagen muestra la familia SARASA CLIP; color exacto se confirma por mensaje.",
    careNoteJa: "画像はSARASA CLIPシリーズです。正確な色はメッセージで確認します。",
  },
  "sarasa-dry-04": {
    galleryImages: [
      "https://www.zebra.co.jp/pro/images/JJS31-BK.jpg",
    ],
    optionGroups: [
      { labelEs: "Punta", labelJa: "ボール径", optionsEs: ["0.4 mm"], optionsJa: ["0.4mm"] },
      { labelEs: "Tinta", labelJa: "インク色", optionsEs: ["Black", "Blue"], optionsJa: ["黒", "青"] },
    ],
    longDescriptionEs: "SARASA dry 0.4 mm es para escritura rapida y fina. La tinta seca rapido y ayuda a mantener apuntes limpios.",
    longDescriptionJa: "サラサドライ0.4mmは、細かく速く書くノート向けです。速乾タイプでページをきれいに保ちやすいです。",
    sellingPointsEs: ["Secado rapido.", "Punta fina.", "Para apuntes limpios."],
    sellingPointsJa: ["速乾。", "細字。", "きれいなノート向け。"],
    careNoteEs: "Color de tinta y cantidad disponible se confirman por mensaje.",
    careNoteJa: "インク色と購入できる数量はメッセージで確認します。",
  },
  "sarasa-dry-05": {
    galleryImages: [
      "https://www.zebra.co.jp/pro/images/JJ31-BK.jpg",
    ],
    optionGroups: [
      { labelEs: "Punta", labelJa: "ボール径", optionsEs: ["0.5 mm"], optionsJa: ["0.5mm"] },
      { labelEs: "Tinta", labelJa: "インク色", optionsEs: ["Black", "Blue"], optionsJa: ["黒", "青"] },
    ],
    longDescriptionEs: "SARASA dry 0.5 mm es una opcion diaria de gel con secado rapido, ideal para estudio y oficina.",
    longDescriptionJa: "サラサドライ0.5mmは、勉強や仕事で使いやすい速乾ゲルの普段使いモデルです。",
    sellingPointsEs: ["Secado rapido.", "Trazo legible.", "Uso diario."],
    sellingPointsJa: ["速乾。", "読みやすい線。", "普段使い。"],
    careNoteEs: "Color de tinta y entrega se confirman por mensaje.",
    careNoteJa: "インク色と受け渡し方法はメッセージで確認します。",
  },
  "juice-up-black": {
    galleryImages: [
      "https://www.pilot.co.jp/press_release/d02899159a77371e1ce39cbdb1cbbe68cc20a235.jpg",
      "https://www.pilot.co.jp/press_release/img/2019/06/05/_05/main.jpg",
    ],
    optionGroups: [
      { labelEs: "Punta", labelJa: "ボール径", optionsEs: ["0.5 mm"], optionsJa: ["0.5mm"] },
      { labelEs: "Tinta", labelJa: "インク色", optionsEs: ["Black"], optionsJa: ["黒"] },
    ],
    longDescriptionEs: "Juice up negro 0.5 mm ofrece una linea clara y fina para apuntes, agenda y escritura diaria.",
    longDescriptionJa: "黒のJuice up 0.5mmは、ノートや手帳、普段使いに向くくっきりした細めのゲルペンです。",
    sellingPointsEs: ["Negro nitido.", "Punta fina.", "Recambio consultable."],
    sellingPointsJa: ["くっきり黒。", "細めの線。", "替え芯も相談可能。"],
    careNoteEs: "La imagen corresponde a la serie Juice up; tinta negra se confirma al consultar.",
    careNoteJa: "画像はJuice upシリーズです。黒インクは問い合わせ時に確認します。",
  },
  "juice-up-red": {
    galleryImages: [
      "https://www.pilot.co.jp/press_release/d02899159a77371e1ce39cbdb1cbbe68cc20a235.jpg",
      "https://www.pilot.co.jp/press_release/img/2019/06/05/_05/main.jpg",
    ],
    optionGroups: [
      { labelEs: "Punta", labelJa: "ボール径", optionsEs: ["0.5 mm"], optionsJa: ["0.5mm"] },
      { labelEs: "Tinta", labelJa: "インク色", optionsEs: ["Red"], optionsJa: ["赤"] },
    ],
    longDescriptionEs: "Juice up rojo 0.5 mm es practico para correcciones, estudio y marcar detalles en agenda.",
    longDescriptionJa: "赤のJuice up 0.5mmは、添削、勉強、手帳の目印に使いやすいゲルペンです。",
    sellingPointsEs: ["Rojo claro.", "Para estudio.", "Recambio rojo consultable."],
    sellingPointsJa: ["見やすい赤。", "勉強向け。", "赤替え芯も相談可能。"],
    careNoteEs: "La imagen corresponde a la serie Juice up; tinta roja se confirma al consultar.",
    careNoteJa: "画像はJuice upシリーズです。赤インクは問い合わせ時に確認します。",
  },
  "jetstream-refill-single-07": {
    galleryImages: [
      "https://www.mpuni.co.jp/products/images/products/05c4001a1c886856e09e18d281d726941dc0f91e.jpg",
    ],
    optionGroups: [
      { labelEs: "Compatibilidad", labelJa: "対応", optionsEs: ["JETSTREAM single"], optionsJa: ["JETSTREAM単色"] },
      { labelEs: "Punta", labelJa: "ボール径", optionsEs: ["0.7 mm"], optionsJa: ["0.7mm"] },
    ],
    longDescriptionEs: "Recambio 0.7 mm para cuerpos JETSTREAM single. Es ideal para mantener el boligrafo funcionando sin comprar un cuerpo nuevo.",
    longDescriptionJa: "JETSTREAM単色本体用の0.7mm替え芯です。本体を買い替えずに長く使えます。",
    sellingPointsEs: ["Para JETSTREAM single.", "Precio bajo.", "Mantenimiento facil."],
    sellingPointsJa: ["単色JETSTREAM用。", "買いやすい価格。", "メンテナンスに便利。"],
    careNoteEs: "Confirma el modelo del cuerpo antes de reservar el refill.",
    careNoteJa: "替え芯を取り置きする前に対応本体を確認します。",
  },
  "jetstream-multicolor-refill-038": {
    galleryImages: [
      "https://www.mpuni.co.jp/products/images/products/9ee2d94232349283106f3d438f0ff17dea37c0a2.png",
    ],
    optionGroups: [
      { labelEs: "Compatibilidad", labelJa: "対応", optionsEs: ["JETSTREAM multicolor"], optionsJa: ["JETSTREAM多色"] },
      { labelEs: "Tinta", labelJa: "インク色", optionsEs: ["Black", "Blue", "Red"], optionsJa: ["黒", "青", "赤"] },
    ],
    longDescriptionEs: "Recambio 0.38 mm para JETSTREAM multicolor. Buen complemento para 3 colores, 4&1 y cuerpos compatibles.",
    longDescriptionJa: "JETSTREAM多色本体用の0.38mm替え芯です。3色、4&1など対応本体と合わせて確認します。",
    sellingPointsEs: ["Punta fina.", "Varios colores.", "Para cuerpos multicolor."],
    sellingPointsJa: ["細字。", "複数色あり。", "多色本体用。"],
    careNoteEs: "Compatibilidad exacta y color se confirman por mensaje.",
    careNoteJa: "正確な対応本体と色はメッセージで確認します。",
  },
  "jetstream-multicolor-refill-07": {
    galleryImages: [
      "https://www.mpuni.co.jp/products/images/products/SXR-L-7.jpg",
    ],
    optionGroups: [
      { labelEs: "Compatibilidad", labelJa: "対応", optionsEs: ["JETSTREAM multicolor"], optionsJa: ["JETSTREAM多色"] },
      { labelEs: "Tinta", labelJa: "インク色", optionsEs: ["Black", "Blue", "Red", "Green"], optionsJa: ["黒", "青", "赤", "緑"] },
    ],
    longDescriptionEs: "Recambio 0.7 mm para cuerpos JETSTREAM multicolor. Recomendado cuando quieres un trazo mas visible.",
    longDescriptionJa: "JETSTREAM多色本体用の0.7mm替え芯です。見やすい太さで書きたい時に便利です。",
    sellingPointsEs: ["Trazo visible.", "Colores basicos.", "Para 3 colores y 4&1 compatibles."],
    sellingPointsJa: ["見やすい線。", "基本色。", "対応する3色・4&1用。"],
    careNoteEs: "La foto corresponde a recambios JETSTREAM; compatibilidad exacta se confirma por mensaje.",
    careNoteJa: "写真はJETSTREAM替え芯シリーズです。正確な対応はメッセージで確認します。",
  },
  "zento-refill-038": {
    galleryImages: ["https://www.mpuni.co.jp/products/images/products/UBR-Z-38.jpg"],
    optionGroups: [
      { labelEs: "Punta", labelJa: "ボール径", optionsEs: ["0.38 mm"], optionsJa: ["0.38mm"] },
      { labelEs: "Compatibilidad", labelJa: "対応", optionsEs: ["ZENTO"], optionsJa: ["ZENTO"] },
    ],
    longDescriptionEs: "Refill ZENTO 0.38 mm para mantener tus ZENTO de punta fina en uso.",
    longDescriptionJa: "ZENTO 0.38mm本体を長く使うための替え芯です。",
    sellingPointsEs: ["Punta fina.", "Precio bajo.", "Complemento para ZENTO."],
    sellingPointsJa: ["細字。", "買いやすい価格。", "ZENTO本体と合わせやすい。"],
    careNoteEs: "Modelo compatible y color se confirman por mensaje.",
    careNoteJa: "対応モデルと色はメッセージで確認します。",
  },
  "zento-refill-05": {
    galleryImages: ["https://www.mpuni.co.jp/products/images/products/UBR-Z-05.jpg"],
    optionGroups: [
      { labelEs: "Punta", labelJa: "ボール径", optionsEs: ["0.5 mm"], optionsJa: ["0.5mm"] },
      { labelEs: "Compatibilidad", labelJa: "対応", optionsEs: ["ZENTO"], optionsJa: ["ZENTO"] },
    ],
    longDescriptionEs: "Refill ZENTO 0.5 mm para uso diario, compatible con modelos ZENTO que aceptan esta punta.",
    longDescriptionJa: "ZENTO 0.5mm対応本体に使える、日常使い向けの替え芯です。",
    sellingPointsEs: ["Punta equilibrada.", "Recambio practico.", "Para uso diario."],
    sellingPointsJa: ["バランスの良い太さ。", "実用的な替え芯。", "普段使い向け。"],
    careNoteEs: "Confirma el cuerpo ZENTO antes de reservar.",
    careNoteJa: "取り置き前に対応するZENTO本体を確認します。",
  },
  "juice-up-refill-red": {
    galleryImages: [
      "https://www.pilot.co.jp/press_release/d02899159a77371e1ce39cbdb1cbbe68cc20a235.jpg",
      "https://www.pilot.co.jp/press_release/img/2019/06/05/_05/main.jpg",
    ],
    optionGroups: [
      { labelEs: "Tinta", labelJa: "インク色", optionsEs: ["Red"], optionsJa: ["赤"] },
      { labelEs: "Punta", labelJa: "ボール径", optionsEs: ["0.5 mm"], optionsJa: ["0.5mm"] },
    ],
    longDescriptionEs: "Recambio rojo para Juice up 0.5 mm. Bueno para mantener un cuerpo Juice up y seguir usando tinta roja.",
    longDescriptionJa: "Juice up 0.5mm用の赤替え芯です。赤インクを使い続けたい人向けです。",
    sellingPointsEs: ["Rojo para correcciones.", "Mantiene tu cuerpo Juice up.", "Precio de recambio."],
    sellingPointsJa: ["添削向けの赤。", "Juice up本体を長く使える。", "替え芯価格。"],
    careNoteEs: "Confirma compatibilidad con tu cuerpo Juice up antes de reservar.",
    careNoteJa: "取り置き前にJuice up本体との対応を確認します。",
  },
});

const zentoStandardImage = "https://www.mpuni.co.jp/products/images/products/thm_uniballzento_zsc.png";
[
  ["zento-standard-black", "Black", "黒", "negro", "黒", "zento-standard-red"],
  ["zento-standard-red", "Red", "赤", "rojo", "赤", "zento-standard-black"],
].forEach(([id, colorEs, colorJa, colorWordEs, colorWordJa, siblingId]) => {
  productMerchandisingContent[id] = {
    galleryImages: [zentoStandardImage],
    optionGroups: [
      { labelEs: "Punta", labelJa: "ボール径", optionsEs: ["0.5 mm", "A confirmar"], optionsJa: ["0.5mm", "要確認"] },
      { labelEs: "Tinta", labelJa: "インク色", optionsEs: [colorEs], optionsJa: [colorJa] },
    ],
    featuresEs: ["Rollerball ZENTO accesible.", `Tinta ${colorWordEs} para uso diario.`, "Buen precio para comprar por color."],
    featuresJa: ["買いやすいZENTO Standard。", `${colorWordJa}インクの日常使い向け。`, "色違いで追加しやすい価格。"],
    specs: [
      { labelEs: "Tipo", labelJa: "種類", valueEs: "Rollerball", valueJa: "ローラーボール" },
      { labelEs: "Tinta", labelJa: "インク色", valueEs: colorEs, valueJa: colorJa },
      { labelEs: "Precio", labelJa: "価格", valueEs: "3.800 CLP", valueJa: "3.800 CLP" },
    ],
    availableOptionsEs: "Color exacto, punta y entrega se confirman por mensaje.",
    availableOptionsJa: "正確な色、ボール径、受け渡し方法はメッセージで確認します。",
    recommendedForEs: "Notas diarias, agenda y compra por color.",
    recommendedForJa: "日常のノート、手帳、色違い購入。",
    longDescriptionEs: `ZENTO Standard ${colorWordEs} es una entrada accesible a la linea ZENTO. Va bien para quienes quieren probar una escritura japonesa suave sin pasar a los modelos premium.`,
    longDescriptionJa: `ZENTO Standard ${colorWordJa}は、ZENTOシリーズを試しやすい日常モデルです。上位モデルほど高くなく、なめらかな日本の筆記具を取り入れやすい一本です。`,
    sellingPointsEs: ["Precio facil de sumar.", "Tinta suave.", "Compatible con consulta de recambio."],
    sellingPointsJa: ["追加しやすい価格。", "なめらかな筆記。", "替え芯も相談しやすい。"],
    careNoteEs: "La imagen corresponde a la familia ZENTO Standard; color final se confirma al consultar.",
    careNoteJa: "画像はZENTO Standardシリーズです。最終的な色は問い合わせ時に確認します。",
    relatedIds: ["zento-standard", siblingId, "zento-refill-05"],
  };
});

const uniballOneImage = "https://www.mpuni.co.jp/news/images/news/uniball_one_1.jpg";
[
  ["uniball-one-038-black", "0.38 mm", "0.38mm", "Black", "黒"],
  ["uniball-one-05-black", "0.5 mm", "0.5mm", "Black", "黒"],
  ["uniball-one-05-blue", "0.5 mm", "0.5mm", "Blue", "青"],
  ["uniball-one-05-red", "0.5 mm", "0.5mm", "Red", "赤"],
].forEach(([id, pointEs, pointJa, colorEs, colorJa]) => {
  productMerchandisingContent[id] = {
    galleryImages: [uniballOneImage],
    optionGroups: [
      { labelEs: "Punta", labelJa: "ボール径", optionsEs: [pointEs], optionsJa: [pointJa] },
      { labelEs: "Tinta", labelJa: "インク色", optionsEs: [colorEs], optionsJa: [colorJa] },
    ],
    featuresEs: ["Gel de color intenso.", "Linea clara para estudio y trabajo.", "Facil de comprar junto con recambios."],
    featuresJa: ["濃くくっきり見えるゲルインキ。", "勉強や仕事で線が見やすい。", "替え芯と合わせて買いやすい。"],
    specs: [
      { labelEs: "Tipo", labelJa: "種類", valueEs: "Boligrafo gel", valueJa: "ゲルボールペン" },
      { labelEs: "Punta", labelJa: "ボール径", valueEs: pointEs, valueJa: pointJa },
      { labelEs: "Tinta", labelJa: "インク色", valueEs: colorEs, valueJa: colorJa },
    ],
    availableOptionsEs: "Color, punta y entrega se confirman por mensaje.",
    availableOptionsJa: "色、ボール径、受け渡し方法はメッセージで確認します。",
    recommendedForEs: "Apuntes, planner, oficina y compras de varios colores.",
    recommendedForJa: "ノート、手帳、仕事、色違いのまとめ買い。",
    longDescriptionEs: `uni-ball one ${pointEs} ${colorEs.toLowerCase()} destaca por una linea nitida y facil de leer. Es una compra pequena que mejora mucho la experiencia diaria de escribir.`,
    longDescriptionJa: `uni-ball one ${pointJa} ${colorJa}は、くっきりした線で読み返しやすいゲルペンです。小さな追加でも、日常の筆記体験をしっかり変えてくれます。`,
    sellingPointsEs: ["Trazo nitido.", "Precio bajo.", "Muy combinable por color."],
    sellingPointsJa: ["線がくっきり。", "低価格。", "色違いで揃えやすい。"],
    careNoteEs: "La imagen muestra la familia uni-ball one; color y punta se confirman al consultar.",
    careNoteJa: "画像はuni-ball oneシリーズです。色とボール径は問い合わせ時に確認します。",
    relatedIds: ["uniball-one", "uniball-one-refill", "uniball-one-p"],
  };
});

productMerchandisingContent["kurutoga-advance-03"] = {
  galleryImages: [
    "https://www.sozodori.com/cdn/shop/files/Copy-of-DSC03611_45e2359c-d1ce-4db8-af83-da1d12f0fb69.jpg?v=1724766667&width=1000",
  ],
  optionGroups: [
    { labelEs: "Mina", labelJa: "芯径", optionsEs: ["0.3 mm"], optionsJa: ["0.3mm"] },
    { labelEs: "Uso", labelJa: "用途", optionsEs: ["Notas pequenas", "Estudio"], optionsJa: ["小さい文字", "勉強"] },
  ],
  featuresEs: ["Rotacion KURUTOGA para punta estable.", "0.3 mm para escritura fina.", "Buena entrada a la serie Advance."],
  featuresJa: ["クルトガ機構で芯先を安定させやすい。", "細字向けの0.3mm。", "Advanceシリーズを試しやすい価格。"],
  specs: [
    { labelEs: "Tipo", labelJa: "種類", valueEs: "Lapiz mecanico", valueJa: "シャープペン" },
    { labelEs: "Mina", labelJa: "芯径", valueEs: "0.3 mm", valueJa: "0.3mm" },
    { labelEs: "Precio", labelJa: "価格", valueEs: "9.000 CLP", valueJa: "9.000 CLP" },
  ],
  availableOptionsEs: "Color y entrega se confirman por mensaje.",
  availableOptionsJa: "色と受け渡し方法はメッセージで確認します。",
  recommendedForEs: "Usuarios que escriben pequeno, estudiantes y fans de KURUTOGA.",
  recommendedForJa: "小さな文字を書く人、学生、クルトガ好き。",
  longDescriptionEs: "KURUTOGA Advance 0.3 mm es para quienes quieren una linea mas fina que el 0.5 mm, manteniendo el sistema de rotacion de mina de la familia KURUTOGA.",
  longDescriptionJa: "クルトガ アドバンス0.3mmは、0.5mmより細い線で書きたい人向けです。クルトガらしい芯回転の安定感を、細字のノートに取り入れられます。",
  sellingPointsEs: ["0.3 mm fino.", "Para notas precisas.", "Serie KURUTOGA popular."],
  sellingPointsJa: ["細字0.3mm。", "精密なノート向け。", "人気のクルトガ系。"],
  careNoteEs: "Usar minas 0.3 mm compatibles; disponibilidad se confirma por mensaje.",
  careNoteJa: "0.3mm対応芯を使います。在庫状況はメッセージで確認します。",
  relatedIds: ["kurutoga-advance", "kurutoga-ks-03", "pentel-ain-03-hb"],
};

const campusImage = "https://www.kokuyo.com/system/files/SET44292.jpg";
[
  ["campus-pencil-sharp-03-black", "0.3 mm", "0.3mm", "Black", "黒"],
  ["campus-pencil-sharp-03-white", "0.3 mm", "0.3mm", "White", "白"],
  ["campus-pencil-sharp-05-black", "0.5 mm", "0.5mm", "Black", "黒"],
  ["campus-pencil-sharp-05-white", "0.5 mm", "0.5mm", "White", "白"],
].forEach(([id, leadEs, leadJa, colorEs, colorJa]) => {
  productMerchandisingContent[id] = {
    galleryImages: [campusImage],
    optionGroups: [
      { labelEs: "Mina", labelJa: "芯径", optionsEs: [leadEs], optionsJa: [leadJa] },
      { labelEs: "Color", labelJa: "色", optionsEs: [colorEs], optionsJa: [colorJa] },
    ],
    featuresEs: ["Sensacion cercana al lapiz.", "Precio bajo para estudio.", "Ligero y facil de llevar."],
    featuresJa: ["鉛筆に近い書き味。", "勉強用に買いやすい価格。", "軽くて持ち運びやすい。"],
    specs: [
      { labelEs: "Tipo", labelJa: "種類", valueEs: "Lapiz mecanico", valueJa: "シャープペン" },
      { labelEs: "Mina", labelJa: "芯径", valueEs: leadEs, valueJa: leadJa },
      { labelEs: "Color", labelJa: "色", valueEs: colorEs, valueJa: colorJa },
    ],
    availableOptionsEs: "Color, grosor y entrega se confirman por mensaje.",
    availableOptionsJa: "色、芯径、受け渡し方法はメッセージで確認します。",
    recommendedForEs: "Escuela, universidad, apuntes largos y compras para varios usuarios.",
    recommendedForJa: "学校、大学、長いノート、家族や友人分のまとめ買い。",
    longDescriptionEs: `Campus pencil sharp ${leadEs} ${colorEs.toLowerCase()} es una opcion muy comprable para estudiar. Tiene una sensacion cercana al lapiz, pero con la comodidad de un mecanico.`,
    longDescriptionJa: `Campus鉛筆シャープ ${leadJa} ${colorJa}は、勉強用に取り入れやすい低価格モデルです。鉛筆に近い感覚で書けて、シャープペンとして繰り返し使えます。`,
    sellingPointsEs: ["Muy comprable.", "Para estudio diario.", "Combina con minas Ain."],
    sellingPointsJa: ["買いやすい。", "毎日の勉強向け。", "Ainシャー芯と合わせやすい。"],
    careNoteEs: "La imagen corresponde a la familia Campus pencil sharp; color final se confirma al consultar.",
    careNoteJa: "画像はCampus鉛筆シャープシリーズです。最終的な色は問い合わせ時に確認します。",
    relatedIds: ["campus-pencil-sharp-basic", "pentel-ain-leads", "kokuyo-campus-pencil-sharp"],
  };
});

const pentelAinImage = "https://www.pentel.co.jp/images/products/lead_pentel_ain_mainvisual_pc_1.png";
[
  ["pentel-ain-02-hb", "0.2 mm", "0.2mm", "HB"],
  ["pentel-ain-02-b", "0.2 mm", "0.2mm", "B"],
  ["pentel-ain-03-hb", "0.3 mm", "0.3mm", "HB"],
  ["pentel-ain-03-b", "0.3 mm", "0.3mm", "B"],
  ["pentel-ain-05-hb", "0.5 mm", "0.5mm", "HB"],
  ["pentel-ain-05-b", "0.5 mm", "0.5mm", "B"],
  ["pentel-ain-09-hb", "0.9 mm", "0.9mm", "HB"],
  ["pentel-ain-09-b", "0.9 mm", "0.9mm", "B"],
  ["pentel-ain-13-hb", "1.3 mm", "1.3mm", "HB"],
  ["pentel-ain-13-b", "1.3 mm", "1.3mm", "B"],
].forEach(([id, sizeEs, sizeJa, hardness]) => {
  productMerchandisingContent[id] = {
    galleryImages: [pentelAinImage],
    optionGroups: [
      { labelEs: "Grosor", labelJa: "芯径", optionsEs: [sizeEs], optionsJa: [sizeJa] },
      { labelEs: "Dureza", labelJa: "濃さ", optionsEs: [hardness], optionsJa: [hardness] },
    ],
    featuresEs: ["Mina japonesa confiable.", "Ayuda a ajustar el trazo a tu lapiz.", "Compra pequena para mejorar escritura."],
    featuresJa: ["信頼しやすい日本のシャー芯。", "使うシャープに合わせて線を調整できる。", "小さな追加で書き味を整えられる。"],
    specs: [
      { labelEs: "Tipo", labelJa: "種類", valueEs: "Minas", valueJa: "シャー芯" },
      { labelEs: "Grosor", labelJa: "芯径", valueEs: sizeEs, valueJa: sizeJa },
      { labelEs: "Dureza", labelJa: "濃さ", valueEs: hardness, valueJa: hardness },
    ],
    availableOptionsEs: "Grosor, dureza y entrega se confirman por mensaje.",
    availableOptionsJa: "芯径、濃さ、受け渡し方法はメッセージで確認します。",
    recommendedForEs: "Usuarios de lapices mecanicos, estudio, dibujo y escritura diaria.",
    recommendedForJa: "シャープペンユーザー、勉強、製図、日常筆記。",
    longDescriptionEs: `Pentel Ain ${sizeEs} ${hardness} es una recarga pequena pero importante: cambia la sensacion de escritura y permite ajustar el trazo al cuaderno, al lapiz y al uso diario.`,
    longDescriptionJa: `Pentel Ain ${sizeJa} ${hardness}は、小さな商品ですが書き心地を大きく変える消耗品です。ノート、使うシャープ、筆圧に合わせて選べます。`,
    sellingPointsEs: ["Consumible esencial.", "Facil de sumar al carrito.", "Varios grosores para comparar."],
    sellingPointsJa: ["必須の消耗品。", "カートに追加しやすい。", "芯径を比べやすい。"],
    careNoteEs: "Confirma que tu lapiz mecanico sea compatible con este grosor.",
    careNoteJa: "使うシャープペンがこの芯径に対応しているか確認します。",
    relatedIds: ["pentel-ain-leads", "pentel-ain-thick-leads", "campus-pencil-sharp-basic"],
  };
});

const uniLeadImage = "https://tacto-studio.com/cdn/shop/products/UN722NDCBL_uni_nanodia_colour_leads_0_7mm_blue_c920b9e9-1f91-49d9-9100-0ce1cceda57d.jpg?v=1698989505";
[
  ["uni-leads-07-hb", "HB"],
  ["uni-leads-07-b", "B"],
].forEach(([id, hardness]) => {
  productMerchandisingContent[id] = {
    galleryImages: [uniLeadImage],
    optionGroups: [
      { labelEs: "Grosor", labelJa: "芯径", optionsEs: ["0.7 mm"], optionsJa: ["0.7mm"] },
      { labelEs: "Dureza", labelJa: "濃さ", optionsEs: [hardness], optionsJa: [hardness] },
    ],
    featuresEs: ["0.7 mm mas visible.", "Buena compra junto con lapices de estudio.", "Dureza consultable por mensaje."],
    featuresJa: ["見やすい0.7mm。", "勉強用シャープと合わせやすい。", "濃さはメッセージで確認。"],
    specs: [
      { labelEs: "Tipo", labelJa: "種類", valueEs: "Minas", valueJa: "シャー芯" },
      { labelEs: "Grosor", labelJa: "芯径", valueEs: "0.7 mm", valueJa: "0.7mm" },
      { labelEs: "Dureza", labelJa: "濃さ", valueEs: hardness, valueJa: hardness },
    ],
    availableOptionsEs: "Dureza y entrega se confirman por mensaje.",
    availableOptionsJa: "濃さと受け渡し方法はメッセージで確認します。",
    recommendedForEs: "Quienes quieren escritura mas visible que 0.5 mm.",
    recommendedForJa: "0.5mmより見やすく書きたい人。",
    longDescriptionEs: `uni leads 0.7 mm ${hardness} son para quienes quieren una linea mas visible sin pasar a minas muy gruesas.`,
    longDescriptionJa: `uni 0.7mm ${hardness}芯は、太すぎない範囲で見やすい線を書きたい人に向きます。`,
    sellingPointsEs: ["0.7 mm practico.", "Bueno para estudiar.", "Se compra facil con lapices."],
    sellingPointsJa: ["実用的な0.7mm。", "勉強向け。", "シャープと一緒に買いやすい。"],
    careNoteEs: "La imagen corresponde a una familia de minas uni; dureza exacta se confirma al consultar.",
    careNoteJa: "画像はuni芯シリーズです。正確な濃さは問い合わせ時に確認します。",
    relatedIds: ["uni-leads-07", "pentel-ain-leads", "campus-pencil-sharp-basic"],
  };
});

[
  ["zento-refill-038-blue", "ZENTO", "0.38 mm", "0.38mm", "Blue", "青", "https://www.mpuni.co.jp/products/images/products/UBR-Z-38.jpg", ["zento-refill-038", "zento-standard", "zento-signature-038"]],
  ["zento-refill-05-blue", "ZENTO", "0.5 mm", "0.5mm", "Blue", "青", "https://www.mpuni.co.jp/products/images/products/UBR-Z-05.jpg", ["zento-refill-05", "zento-standard", "zento-flow"]],
  ["zento-refill-038-red", "ZENTO", "0.38 mm", "0.38mm", "Red", "赤", "https://www.mpuni.co.jp/products/images/products/UBR-Z-38.jpg", ["zento-refill-038", "zento-standard", "zento-signature-038"]],
  ["zento-refill-05-red", "ZENTO", "0.5 mm", "0.5mm", "Red", "赤", "https://www.mpuni.co.jp/products/images/products/UBR-Z-05.jpg", ["zento-refill-05", "zento-standard", "zento-flow"]],
  ["zento-refill-07-black", "ZENTO", "0.7 mm", "0.7mm", "Black", "黒", "https://www.mpuni.co.jp/products/images/products/b241accc45aa5f1f6807178e161d45decc713c7f.png", ["zento-refill", "zento-signature-07", "zento-flow"]],
  ["jetstream-multicolor-refill-038-black", "JETSTREAM multicolor", "0.38 mm", "0.38mm", "Black", "黒", "https://www.mpuni.co.jp/products/images/products/9ee2d94232349283106f3d438f0ff17dea37c0a2.png", ["jetstream-multicolor-refill-038", "jetstream-4and1", "jetstream-slim-compact"]],
  ["jetstream-multicolor-refill-038-blue", "JETSTREAM multicolor", "0.38 mm", "0.38mm", "Blue", "青", "https://www.mpuni.co.jp/products/images/products/9ee2d94232349283106f3d438f0ff17dea37c0a2.png", ["jetstream-multicolor-refill-038", "jetstream-4and1", "jetstream-slim-compact"]],
  ["jetstream-multicolor-refill-038-red", "JETSTREAM multicolor", "0.38 mm", "0.38mm", "Red", "赤", "https://www.mpuni.co.jp/products/images/products/9ee2d94232349283106f3d438f0ff17dea37c0a2.png", ["jetstream-multicolor-refill-038", "jetstream-4and1", "jetstream-slim-compact"]],
  ["jetstream-multicolor-refill-07-black", "JETSTREAM multicolor", "0.7 mm", "0.7mm", "Black", "黒", "https://www.mpuni.co.jp/products/images/products/SXR-L-7.jpg", ["jetstream-multicolor-refill-07", "jetstream-4and1", "jetstream-refill"]],
  ["jetstream-multicolor-refill-07-blue", "JETSTREAM multicolor", "0.7 mm", "0.7mm", "Blue", "青", "https://www.mpuni.co.jp/products/images/products/SXR-L-7.jpg", ["jetstream-multicolor-refill-07", "jetstream-4and1", "jetstream-refill"]],
  ["jetstream-multicolor-refill-07-red", "JETSTREAM multicolor", "0.7 mm", "0.7mm", "Red", "赤", "https://www.mpuni.co.jp/products/images/products/SXR-L-7.jpg", ["jetstream-multicolor-refill-07", "jetstream-4and1", "jetstream-refill"]],
  ["jetstream-multicolor-refill-07-green", "JETSTREAM multicolor", "0.7 mm", "0.7mm", "Green", "緑", "https://www.mpuni.co.jp/products/images/products/SXR-L-7.jpg", ["jetstream-multicolor-refill-07", "jetstream-4and1", "jetstream-refill"]],
  ["uniball-one-refill-05-blue", "uni-ball one", "0.5 mm", "0.5mm", "Blue", "青", uniballOneImage, ["uniball-one-refill", "uniball-one-05-blue", "uniball-one"]],
  ["uniball-one-refill-05-red", "uni-ball one", "0.5 mm", "0.5mm", "Red", "赤", uniballOneImage, ["uniball-one-refill", "uniball-one-05-red", "uniball-one"]],
  ["juice-up-refill-black", "Juice up", "0.5 mm", "0.5mm", "Black", "黒", "https://www.pilot.co.jp/press_release/d02899159a77371e1ce39cbdb1cbbe68cc20a235.jpg", ["juice-up-refill", "juice-up-black", "juice-up-refill-red"]],
].forEach(([id, family, pointEs, pointJa, colorEs, colorJa, image, relatedIds]) => {
  productMerchandisingContent[id] = {
    galleryImages: [image],
    optionGroups: [
      { labelEs: "Compatibilidad", labelJa: "対応", optionsEs: [family], optionsJa: [family] },
      { labelEs: "Punta", labelJa: "ボール径", optionsEs: [pointEs], optionsJa: [pointJa] },
      { labelEs: "Tinta", labelJa: "インク色", optionsEs: [colorEs], optionsJa: [colorJa] },
    ],
    featuresEs: ["Recambio para seguir usando tu cuerpo favorito.", "Compra pequena y practica.", "Compatibilidad se confirma antes de reservar."],
    featuresJa: ["お気に入りの本体を長く使うための替え芯。", "小さく追加しやすい実用品。", "対応本体は取り置き前に確認。"],
    specs: [
      { labelEs: "Tipo", labelJa: "種類", valueEs: "Recambio", valueJa: "替え芯" },
      { labelEs: "Punta", labelJa: "ボール径", valueEs: pointEs, valueJa: pointJa },
      { labelEs: "Tinta", labelJa: "インク色", valueEs: colorEs, valueJa: colorJa },
    ],
    availableOptionsEs: "Modelo compatible, color y entrega se confirman por mensaje.",
    availableOptionsJa: "対応モデル、色、受け渡し方法はメッセージで確認します。",
    recommendedForEs: "Usuarios que ya tienen el cuerpo compatible y pedidos combinados.",
    recommendedForJa: "対応本体を持っている人、まとめ買い。",
    longDescriptionEs: `Este recambio ${family} ${pointEs} ${colorEs.toLowerCase()} permite mantener el cuerpo principal en uso. Es el tipo de producto pequeno que conviene sumar cuando compras un boligrafo compatible.`,
    longDescriptionJa: `${family} ${pointJa} ${colorJa}替え芯は、対応本体を長く使うための消耗品です。対応するペンを買う時に一緒に追加しやすい商品です。`,
    sellingPointsEs: ["Precio bajo.", "Mantiene el cuerpo en uso.", "Ideal como compra adicional."],
    sellingPointsJa: ["低価格。", "本体を長く使える。", "ついで買いに最適。"],
    careNoteEs: "Confirma compatibilidad exacta con tu cuerpo antes de comprar.",
    careNoteJa: "購入前に、使う本体との正確な対応を確認します。",
    relatedIds,
  };
});

productMerchandisingContent["jetstream-4and1-05"] = {
  galleryImages: [
    "https://www.mpuni.co.jp/products/images/products/313882000.jpg",
  ],
  optionGroups: [
    { labelEs: "Funciones", labelJa: "機能", optionsEs: ["4 colors", "Mechanical pencil"], optionsJa: ["4色", "シャープ"] },
    { labelEs: "Mina", labelJa: "シャープ芯", optionsEs: ["0.5 mm"], optionsJa: ["0.5mm"] },
  ],
  featuresEs: ["Cuatro tintas y lápiz mecánico en un cuerpo.", "Tinta JETSTREAM suave.", "Bueno para oficina, estudio y agenda."],
  featuresJa: ["4色ボールペンとシャープを1本に集約。", "なめらかなJETSTREAMインク。", "仕事、勉強、手帳に便利。"],
  specs: [
    { labelEs: "Tipo", labelJa: "種類", valueEs: "Multifunción", valueJa: "多機能ペン" },
    { labelEs: "Punta", labelJa: "ボール径", valueEs: "0.5 mm", valueJa: "0.5mm" },
    { labelEs: "Precio", labelJa: "価格", valueEs: "16.000 CLP", valueJa: "16.000 CLP" },
  ],
  availableOptionsEs: "Modelo 0.5 mm. El color del cuerpo y la entrega se confirman por mensaje.",
  availableOptionsJa: "0.5mmモデルです。本体色と受け渡し方法はメッセージで確認します。",
  recommendedForEs: "Quienes quieren una sola pieza para trabajo, estudio y planner.",
  recommendedForJa: "仕事、勉強、手帳用を1本にまとめたい人。",
  longDescriptionEs:
    "JETSTREAM 4&1 0.5 mm es una pieza práctica para llevar menos bolígrafos. Permite alternar colores rápidamente y sumar lápiz mecánico en el mismo cuerpo.",
  longDescriptionJa:
    "ジェットストリーム 4&1 0.5mmは、持ち歩く本数を減らしたい人に便利な多機能ペンです。色分けとシャープを1本でこなせます。",
  sellingPointsEs: ["Muy práctico.", "Reduce el estuche.", "Compatible con recambios JETSTREAM."],
  sellingPointsJa: ["実用性が高い。", "筆箱をすっきりできる。", "JETSTREAM替え芯と合わせやすい。"],
  careNoteEs: "Para 4&1 se muestran recambios multicolor compatibles disponibles; 0.28 mm no se ofrece para este cuerpo.",
  careNoteJa: "4&1には在庫の多色・多機能用替え芯だけを表示します。この本体では0.28mmは選択肢に出しません。",
  relatedIds: ["jetstream-4and1", "jetstream-multicolor-refill-038", "jetstream-multicolor-refill-07"],
};

const jetstreamLiteRefillImage = "https://www.mpuni.co.jp/products/images/products/SXR-L-7.jpg";
[
  ["jetstream-lite-refill-05-black", "0.5 mm", "0.5mm", "Black", "黒", "2.300 CLP"],
  ["jetstream-lite-refill-07-black", "0.7 mm", "0.7mm", "Black", "黒", "2.300 CLP"],
  ["jetstream-lite-refill-blue", "A confirmar", "要確認", "Blue", "青", "2.500 CLP"],
  ["jetstream-lite-refill-red", "A confirmar", "要確認", "Red", "赤", "2.500 CLP"],
  ["jetstream-lite-refill-green", "A confirmar", "要確認", "Green", "緑", "2.500 CLP"],
].forEach(([id, pointEs, pointJa, colorEs, colorJa, price]) => {
  productMerchandisingContent[id] = {
    galleryImages: [jetstreamLiteRefillImage],
    optionGroups: [
      { labelEs: "Compatibilidad", labelJa: "対応", optionsEs: ["JETSTREAM Lite touch"], optionsJa: ["JETSTREAM Lite touch"] },
      { labelEs: "Tinta", labelJa: "インク色", optionsEs: [colorEs], optionsJa: [colorJa] },
      { labelEs: "Punta", labelJa: "ボール径", optionsEs: [pointEs], optionsJa: [pointJa] },
    ],
    featuresEs: ["Recambio para Lite touch.", "Mantiene el cuerpo favorito en uso.", "Compra pequeña ideal junto con el bolígrafo."],
    featuresJa: ["Lite touch用の替え芯。", "お気に入りの本体を長く使える。", "本体と一緒に追加しやすい。"],
    specs: [
      { labelEs: "Tipo", labelJa: "種類", valueEs: "Recambio JETSTREAM", valueJa: "JETSTREAM替え芯" },
      { labelEs: "Tinta", labelJa: "インク色", valueEs: colorEs, valueJa: colorJa },
      { labelEs: "Precio", labelJa: "価格", valueEs: price, valueJa: price },
    ],
    availableOptionsEs: "Compatibilidad exacta, punta y entrega se confirman por mensaje.",
    availableOptionsJa: "正確な対応本体、ボール径、受け渡し方法はメッセージで確認します。",
    recommendedForEs: "Usuarios de JETSTREAM Lite touch y compras de mantenimiento.",
    recommendedForJa: "JETSTREAM Lite touchユーザー、補充購入。",
    longDescriptionEs: `Recambio JETSTREAM Lite touch ${colorEs.toLowerCase()} para seguir usando el cuerpo principal. Conviene sumar uno o dos cuando compras el bolígrafo.`,
    longDescriptionJa: `JETSTREAM Lite touch ${colorJa}替え芯は、本体を長く使うための実用品です。本体購入時に一緒に追加しやすい商品です。`,
    sellingPointsEs: ["Precio bajo.", "Útil para reponer.", "Va bien en pedidos combinados."],
    sellingPointsJa: ["低価格。", "補充に便利。", "まとめ買いしやすい。"],
    careNoteEs: "La foto corresponde a recambios JETSTREAM; compatibilidad exacta se confirma antes de reservar.",
    careNoteJa: "写真はJETSTREAM替え芯シリーズです。正確な対応は取り置き前に確認します。",
    relatedIds: ["jetstream-lite", "jetstream-lite-07", "jetstream-lite-refill"],
  };
});

[
  ["uniball-one-3-refill-038-set", "0.38 mm", "0.38mm"],
  ["uniball-one-3-refill-05-set", "0.5 mm", "0.5mm"],
].forEach(([id, pointEs, pointJa]) => {
  productMerchandisingContent[id] = {
    galleryImages: [uniballOneImage],
    optionGroups: [
      { labelEs: "Compatibilidad", labelJa: "対応", optionsEs: ["uni-ball one 3"], optionsJa: ["uni-ball one 3"] },
      { labelEs: "Tinta", labelJa: "インク色", optionsEs: ["Black", "Blue", "Red"], optionsJa: ["黒", "青", "赤"] },
      { labelEs: "Punta", labelJa: "ボール径", optionsEs: [pointEs], optionsJa: [pointJa] },
    ],
    featuresEs: ["Recambio para cuerpo multicolor.", "Colores básicos consultables.", "Bueno para mantener el set activo."],
    featuresJa: ["多色本体用の替え芯。", "基本色を確認できます。", "3色本体を長く使える。"],
    specs: [
      { labelEs: "Tipo", labelJa: "種類", valueEs: "Recambio gel", valueJa: "ゲル替え芯" },
      { labelEs: "Punta", labelJa: "ボール径", valueEs: pointEs, valueJa: pointJa },
      { labelEs: "Precio", labelJa: "価格", valueEs: "2.500 CLP", valueJa: "2.500 CLP" },
    ],
    availableOptionsEs: "Color y compatibilidad con el cuerpo se confirman por mensaje.",
    availableOptionsJa: "色と対応本体はメッセージで確認します。",
    recommendedForEs: "Usuarios de uni-ball one 3 y quienes compran recambios preventivos.",
    recommendedForJa: "uni-ball one 3ユーザー、予備替え芯を買いたい人。",
    longDescriptionEs: `Recambio uni-ball one 3 ${pointEs} para mantener el cuerpo multicolor funcionando. Es una compra pequeña que evita dejar el bolígrafo sin uso cuando se acaba una tinta.`,
    longDescriptionJa: `uni-ball one 3 ${pointJa}替え芯は、多色本体を使い続けるための消耗品です。インク切れで本体が止まらないように補充できます。`,
    sellingPointsEs: ["Para cuerpo multicolor.", "Colores básicos.", "Compra preventiva útil."],
    sellingPointsJa: ["多色本体用。", "基本色あり。", "予備購入に便利。"],
    careNoteEs: "La imagen muestra la familia uni-ball one; el refill exacto se confirma por mensaje.",
    careNoteJa: "画像はuni-ball oneシリーズです。正確な替え芯はメッセージで確認します。",
    relatedIds: ["uniball-one-3", "uniball-one-3-refill", "uniball-one"],
  };
});

[
  ["uniball-one-refill-038-black", "0.38 mm", "0.38mm"],
  ["uniball-one-refill-05-black", "0.5 mm", "0.5mm"],
].forEach(([id, pointEs, pointJa]) => {
  productMerchandisingContent[id] = {
    galleryImages: [uniballOneImage],
    optionGroups: [
      { labelEs: "Compatibilidad", labelJa: "対応", optionsEs: ["uni-ball one single"], optionsJa: ["uni-ball one 単色"] },
      { labelEs: "Tinta", labelJa: "インク色", optionsEs: ["Black"], optionsJa: ["黒"] },
      { labelEs: "Punta", labelJa: "ボール径", optionsEs: [pointEs], optionsJa: [pointJa] },
    ],
    featuresEs: ["Negro intenso uni-ball one.", "Recambio pequeño y fácil de sumar.", "Mantiene tu cuerpo favorito en uso."],
    featuresJa: ["uni-ball oneらしい濃い黒。", "小さく追加しやすい替え芯。", "お気に入り本体を長く使える。"],
    specs: [
      { labelEs: "Tipo", labelJa: "種類", valueEs: "Recambio gel", valueJa: "ゲル替え芯" },
      { labelEs: "Punta", labelJa: "ボール径", valueEs: pointEs, valueJa: pointJa },
      { labelEs: "Precio", labelJa: "価格", valueEs: "2.000 CLP", valueJa: "2.000 CLP" },
    ],
    availableOptionsEs: "Compatibilidad exacta se confirma por mensaje.",
    availableOptionsJa: "正確な対応本体はメッセージで確認します。",
    recommendedForEs: "Usuarios de uni-ball one de una tinta.",
    recommendedForJa: "uni-ball one単色ユーザー。",
    longDescriptionEs: `Recambio negro uni-ball one ${pointEs}. Va bien para quienes escriben mucho con tinta negra y quieren mantener el cuerpo original.`,
    longDescriptionJa: `uni-ball one ${pointJa}黒替え芯は、黒インクをよく使う人向けの補充商品です。本体をそのまま長く使えます。`,
    sellingPointsEs: ["Negro nítido.", "Precio bajo.", "Práctico para sumar."],
    sellingPointsJa: ["くっきり黒。", "低価格。", "追加しやすい。"],
    careNoteEs: "La imagen muestra la familia uni-ball one; compatibilidad exacta se confirma por mensaje.",
    careNoteJa: "画像はuni-ball oneシリーズです。正確な対応はメッセージで確認します。",
    relatedIds: ["uniball-one", "uniball-one-refill", "uniball-one-038-black"],
  };
});

Object.assign(productMerchandisingContent, {
  "uniball-one-p-standard": {
    galleryImages: [
      "https://www.mpuni.co.jp/products/images/products/7bd507720d7e9e9e14f24792291f164d1957b642.jpg",
      "https://www.mpuni.co.jp/products/feature_images/main/ballpoint_pens/thm_uniballone.png",
    ],
    optionGroups: [
      { labelEs: "Modelo", labelJa: "モデル", optionsEs: ["Standard"], optionsJa: ["通常"] },
      { labelEs: "Color", labelJa: "色", optionsEs: ["A confirmar"], optionsJa: ["要確認"] },
    ],
    longDescriptionEs: "uni-ball one P standard es la version compacta y diaria de la familia uni-ball one. Es buena para llevar en estuche pequeno y usar en agenda o notas rápidas.",
    longDescriptionJa: "ユニボール ワン P 通常モデルは、uni-ball oneシリーズのコンパクトな普段使いモデルです。小さめの筆箱、手帳、短いメモに使いやすい一本です。",
    sellingPointsEs: ["Compacto.", "Precio accesible.", "Tinta nítida."],
    sellingPointsJa: ["コンパクト。", "買いやすい価格。", "くっきりした筆跡。"],
    careNoteEs: "Color y punta exactos se confirman por mensaje antes de agregar al pedido.",
    careNoteJa: "正確な色とボール径は注文前にメッセージで確認します。",
  },
  "uniball-one-p-limited": {
    galleryImages: [
      "https://www.mpuni.co.jp/products/images/products/7bd507720d7e9e9e14f24792291f164d1957b642.jpg",
      "https://www.mpuni.co.jp/products/feature_images/main/ballpoint_pens/thm_uniballone.png",
    ],
    optionGroups: [
      { labelEs: "Modelo", labelJa: "モデル", optionsEs: ["Limited"], optionsJa: ["限定"] },
      { labelEs: "Color", labelJa: "色", optionsEs: ["A confirmar"], optionsJa: ["要確認"] },
    ],
    longDescriptionEs: "uni-ball one P limitado mantiene el formato corto de one P y suma colores especiales. Es una pieza pequeña, fácil de regalar y atractiva para coleccionistas.",
    longDescriptionJa: "ユニボール ワン P 限定モデルは、one Pの短めコンパクト軸に特別色の楽しさを加えたモデルです。ギフトやコレクションにも向きます。",
    sellingPointsEs: ["Edición limitada.", "Formato compacto.", "Buen regalo."],
    sellingPointsJa: ["限定モデル。", "コンパクト軸。", "ギフト向き。"],
    careNoteEs: "La disponibilidad de color limitado se confirma por mensaje.",
    careNoteJa: "限定色の在庫はメッセージで確認します。",
  },
  "neko-gomu-eraser": {
    galleryImages: [
      "https://bungu.store/cdn/shop/files/shiba-and-neko-gomu-eraser-sun-star-bungu-447902.jpg?v=1731958266&width=900",
    ],
    optionGroups: [
      { labelEs: "Diseño", labelJa: "デザイン", optionsEs: ["Neko"], optionsJa: ["ネコ"] },
    ],
    longDescriptionEs: "Neko Gomu es una goma japonesa con diseño de gato. Funciona como compra adicional para completar un set de escritura o como detalle pequeño.",
    longDescriptionJa: "ネコゴムは、ネコデザインの日本の消しゴムです。筆記具セットに加える小物や、ちょっとしたギフトとして使いやすい商品です。",
    sellingPointsEs: ["Diseño amable.", "Compra adicional fácil.", "Para regalo pequeño."],
    sellingPointsJa: ["親しみやすいデザイン。", "ついで買いしやすい。", "小さなギフト向き。"],
    careNoteEs: "El diseño final y entrega se confirman por mensaje.",
    careNoteJa: "最終デザインと受け渡し方法はメッセージで確認します。",
  },
  "shiba-gomu-eraser": {
    galleryImages: [
      "https://bungu.store/cdn/shop/files/shiba-and-neko-gomu-eraser-sun-star-bungu-447902.jpg?v=1731958266&width=900",
    ],
    optionGroups: [
      { labelEs: "Diseño", labelJa: "デザイン", optionsEs: ["Shiba"], optionsJa: ["シバ犬"] },
    ],
    longDescriptionEs: "Shiba Gomu es una goma japonesa con diseño de shiba. Es una pieza pequeña y fácil de sumar a pedidos de lápices mecánicos o minas.",
    longDescriptionJa: "シバゴムは、シバ犬デザインの日本の消しゴムです。シャープペンやシャー芯の注文に追加しやすい小物です。",
    sellingPointsEs: ["Diseño japonés casual.", "Precio accesible.", "Combina con sets de estudio."],
    sellingPointsJa: ["日本らしいカジュアルなデザイン。", "買いやすい価格。", "勉強セットに合わせやすい。"],
    careNoteEs: "El diseño final y entrega se confirman por mensaje.",
    careNoteJa: "最終デザインと受け渡し方法はメッセージで確認します。",
  },
});

const sarasaDryImages = {
  "0.4 mm Black": "https://www.zebra.co.jp/pro/images/JJS31-BK.jpg",
  "0.4 mm Blue": "https://www.zebra.co.jp/pro/images/JJS31-BL.jpg",
  "0.5 mm Black": "https://www.zebra.co.jp/pro/images/JJ31-BK.jpg",
  "0.5 mm Blue": "https://www.zebra.co.jp/pro/images/JJ31-BL.jpg",
};

[
  ["sarasa-dry-04-black", "0.4 mm", "0.4mm", "Black", "黒", "0.4 mm Black"],
  ["sarasa-dry-04-blue", "0.4 mm", "0.4mm", "Blue", "青", "0.4 mm Blue"],
  ["sarasa-dry-05-black", "0.5 mm", "0.5mm", "Black", "黒", "0.5 mm Black"],
  ["sarasa-dry-05-blue", "0.5 mm", "0.5mm", "Blue", "青", "0.5 mm Blue"],
].forEach(([id, pointEs, pointJa, colorEs, colorJa, imageKey]) => {
  productMerchandisingContent[id] = {
    galleryImages: [sarasaDryImages[imageKey], "https://www.zebra.co.jp/global/images/sarasa.png"],
    optionGroups: [
      { labelEs: "Punta", labelJa: "ボール径", optionsEs: [pointEs], optionsJa: [pointJa] },
      { labelEs: "Tinta", labelJa: "インク色", optionsEs: [colorEs], optionsJa: [colorJa] },
    ],
    featuresEs: ["Secado rápido.", "Bueno para apuntes limpios.", "Precio fácil para comprar por color."],
    featuresJa: ["速乾タイプ。", "きれいなノート作りに便利。", "色違いで買いやすい価格。"],
    specs: [
      { labelEs: "Tipo", labelJa: "種類", valueEs: "Bolígrafo gel", valueJa: "ゲルボールペン" },
      { labelEs: "Punta", labelJa: "ボール径", valueEs: pointEs, valueJa: pointJa },
      { labelEs: "Tinta", labelJa: "インク色", valueEs: colorEs, valueJa: colorJa },
    ],
    availableOptionsEs: "Color, punta y entrega se confirman por mensaje.",
    availableOptionsJa: "色、ボール径、受け渡し方法はメッセージで確認します。",
    recommendedForEs: "Estudio, oficina, personas que escriben rápido y apuntes diarios.",
    recommendedForJa: "勉強、仕事、速く書く人、毎日のノート。",
    longDescriptionEs: `SARASA dry ${pointEs} ${colorEs.toLowerCase()} combina tinta gel con secado rápido, ideal para escribir muchas notas sin ensuciar la página.`,
    longDescriptionJa: `サラサドライ ${pointJa} ${colorJa}は、ゲルの書き味と速乾性を両立した日常筆記向けの一本です。ノートを汚しにくく、勉強や仕事に使いやすいです。`,
    sellingPointsEs: ["Seca rápido.", "Tinta gel.", "Fácil de elegir por punta."],
    sellingPointsJa: ["乾きやすい。", "ゲルインキ。", "太さで選びやすい。"],
    careNoteEs: "La disponibilidad por punta y color se confirma por mensaje.",
    careNoteJa: "ボール径と色ごとの在庫はメッセージで確認します。",
    relatedIds: ["sarasa-dry", "sarasa-dry-refill", "sarasa-clip"],
  };
});

[
  ["sarasa-dry-refill-04-black", "0.4 mm", "0.4mm", "Black", "黒", "0.4 mm Black"],
  ["sarasa-dry-refill-04-blue", "0.4 mm", "0.4mm", "Blue", "青", "0.4 mm Blue"],
  ["sarasa-dry-refill-05-black", "0.5 mm", "0.5mm", "Black", "黒", "0.5 mm Black"],
  ["sarasa-dry-refill-05-blue", "0.5 mm", "0.5mm", "Blue", "青", "0.5 mm Blue"],
].forEach(([id, pointEs, pointJa, colorEs, colorJa, imageKey]) => {
  productMerchandisingContent[id] = {
    galleryImages: [sarasaDryImages[imageKey]],
    optionGroups: [
      { labelEs: "Compatibilidad", labelJa: "対応", optionsEs: ["SARASA dry"], optionsJa: ["SARASA dry"] },
      { labelEs: "Punta", labelJa: "ボール径", optionsEs: [pointEs], optionsJa: [pointJa] },
      { labelEs: "Tinta", labelJa: "インク色", optionsEs: [colorEs], optionsJa: [colorJa] },
    ],
    featuresEs: ["Recambio SARASA dry.", "Compra pequeña para mantener el cuerpo.", "Color y punta claros para elegir."],
    featuresJa: ["SARASA dry用替え芯。", "本体を長く使える小さな補充。", "色と太さで選びやすい。"],
    specs: [
      { labelEs: "Tipo", labelJa: "種類", valueEs: "Recambio gel", valueJa: "ゲル替え芯" },
      { labelEs: "Punta", labelJa: "ボール径", valueEs: pointEs, valueJa: pointJa },
      { labelEs: "Precio", labelJa: "価格", valueEs: "1.800 CLP", valueJa: "1.800 CLP" },
    ],
    availableOptionsEs: "Compatibilidad con el cuerpo SARASA dry se confirma por mensaje.",
    availableOptionsJa: "SARASA dry本体との対応はメッセージで確認します。",
    recommendedForEs: "Usuarios de SARASA dry y pedidos combinados con bolígrafos gel.",
    recommendedForJa: "SARASA dryユーザー、ゲルペンとのまとめ買い。",
    longDescriptionEs: `Recambio SARASA dry ${pointEs} ${colorEs.toLowerCase()} para seguir usando el cuerpo compatible sin comprar otro bolígrafo completo.`,
    longDescriptionJa: `SARASA dry ${pointJa} ${colorJa}替え芯は、対応本体を買い替えずに使い続けるための補充商品です。`,
    sellingPointsEs: ["Precio bajo.", "Reduce desperdicio.", "Ideal como adicional."],
    sellingPointsJa: ["低価格。", "本体を長く使える。", "ついで買いに便利。"],
    careNoteEs: "La imagen corresponde a la familia SARASA dry; compatibilidad exacta se confirma por mensaje.",
    careNoteJa: "画像はSARASA dryシリーズです。正確な対応はメッセージで確認します。",
    relatedIds: ["sarasa-dry", "sarasa-dry-04-black", "sarasa-dry-05-black"],
  };
});

Object.assign(productMerchandisingContent, {
  "sarasa-clip-refill-black": {
    galleryImages: ["https://www.zebra.co.jp/pro/images/JJ15-BK.jpg", "https://www.zebra.co.jp/global/images/sarasa.png"],
    optionGroups: [
      { labelEs: "Compatibilidad", labelJa: "対応", optionsEs: ["SARASA CLIP"], optionsJa: ["サラサクリップ"] },
      { labelEs: "Tinta", labelJa: "インク色", optionsEs: ["Black"], optionsJa: ["黒"] },
    ],
    featuresEs: ["Recambio negro económico.", "Bueno para usar el cuerpo SARASA por más tiempo.", "Fácil de sumar con SARASA CLIP."],
    featuresJa: ["買いやすい黒替え芯。", "SARASA本体を長く使える。", "サラサクリップと一緒に追加しやすい。"],
    specs: [
      { labelEs: "Tipo", labelJa: "種類", valueEs: "Recambio gel", valueJa: "ゲル替え芯" },
      { labelEs: "Tinta", labelJa: "インク色", valueEs: "Black", valueJa: "黒" },
      { labelEs: "Precio", labelJa: "価格", valueEs: "1.500 CLP", valueJa: "1.500 CLP" },
    ],
    availableOptionsEs: "Compatibilidad exacta y entrega se confirman por mensaje.",
    availableOptionsJa: "正確な対応本体と受け渡し方法はメッセージで確認します。",
    recommendedForEs: "Usuarios de SARASA CLIP y compras de bajo precio.",
    recommendedForJa: "サラサクリップユーザー、低価格の追加購入。",
    longDescriptionEs: "Recambio negro SARASA CLIP para mantener el cuerpo compatible en uso. Es una compra pequeña y práctica para quienes escriben mucho.",
    longDescriptionJa: "サラサクリップ黒替え芯は、対応本体を長く使うための実用品です。よく書く人ほど追加しておくと便利です。",
    sellingPointsEs: ["Muy accesible.", "Mantiene el cuerpo.", "Ideal para sumar al carrito."],
    sellingPointsJa: ["かなり買いやすい。", "本体を長く使える。", "カートに追加しやすい。"],
    careNoteEs: "La foto corresponde a la familia SARASA CLIP; refill exacto se confirma al consultar.",
    careNoteJa: "写真はSARASA CLIPシリーズです。正確な替え芯は問い合わせ時に確認します。",
    relatedIds: ["sarasa-clip", "sarasa-clip-refill", "sarasa-dry-refill"],
  },
  "drgrip-gspec-refill-05": {
    galleryImages: [
      "https://www.pilot.co.jp/press_release/d02899159a77371e1ce39cbdb1cbbe68cc20a235.jpg",
    ],
    optionGroups: [
      { labelEs: "Compatibilidad", labelJa: "対応", optionsEs: ["Dr.Grip"], optionsJa: ["Dr.Grip"] },
      { labelEs: "Punta", labelJa: "ボール径", optionsEs: ["0.5 mm"], optionsJa: ["0.5mm"] },
    ],
    featuresEs: ["Recambio para cuerpo Dr.Grip compatible.", "Mantiene el agarre cómodo en uso.", "Compra práctica para escritura diaria."],
    featuresJa: ["対応するDr.Grip本体用替え芯。", "握りやすい本体を長く使える。", "普段書きの補充に便利。"],
    specs: [
      { labelEs: "Tipo", labelJa: "種類", valueEs: "Recambio", valueJa: "替え芯" },
      { labelEs: "Punta", labelJa: "ボール径", valueEs: "0.5 mm", valueJa: "0.5mm" },
      { labelEs: "Precio", labelJa: "価格", valueEs: "1.800 CLP", valueJa: "1.800 CLP" },
    ],
    availableOptionsEs: "Modelo compatible y entrega se confirman por mensaje.",
    availableOptionsJa: "対応本体と受け渡し方法はメッセージで確認します。",
    recommendedForEs: "Usuarios de Dr.Grip que escriben mucho.",
    recommendedForJa: "Dr.Gripをよく使う人。",
    longDescriptionEs: "Recambio Dr.Grip 0.5 mm para quienes quieren seguir usando un cuerpo cómodo sin comprar otro bolígrafo completo.",
    longDescriptionJa: "ドクターグリップ0.5mm替え芯は、握りやすい本体を買い替えずに使い続けたい人向けの商品です。",
    sellingPointsEs: ["Mantiene el cuerpo.", "Precio bajo.", "Para escritura larga."],
    sellingPointsJa: ["本体を活かせる。", "低価格。", "長時間筆記向け。"],
    careNoteEs: "La imagen corresponde a la familia Dr.Grip; compatibilidad exacta se confirma por mensaje.",
    careNoteJa: "画像はDr.Gripシリーズです。正確な対応はメッセージで確認します。",
    relatedIds: ["dr-grip-gspec", "drgrip-refill", "drgrip-play-balance"],
  },
});

[
  ["energel-refill-05-black", "Black", "黒"],
  ["energel-refill-05-blue", "Blue", "青"],
  ["energel-refill-05-red", "Red", "赤"],
].forEach(([id, colorEs, colorJa]) => {
  productMerchandisingContent[id] = {
    galleryImages: ["https://www.pentel.co.jp/images/products/energel_3c_lineup_1.png"],
    optionGroups: [
      { labelEs: "Compatibilidad", labelJa: "対応", optionsEs: ["EnerGel multicolor"], optionsJa: ["エナージェル多色"] },
      { labelEs: "Punta", labelJa: "ボール径", optionsEs: ["0.5 mm"], optionsJa: ["0.5mm"] },
      { labelEs: "Tinta", labelJa: "インク色", optionsEs: [colorEs], optionsJa: [colorJa] },
    ],
    featuresEs: ["Recambio EnerGel 0.5 mm.", "Tinta gel de secado rápido.", "Compra ideal junto con el cuerpo multicolor."],
    featuresJa: ["エナージェル0.5mm替え芯。", "速乾ゲルインキ。", "多色本体と一緒に買いやすい。"],
    specs: [
      { labelEs: "Tipo", labelJa: "種類", valueEs: "Recambio gel", valueJa: "ゲル替え芯" },
      { labelEs: "Tinta", labelJa: "インク色", valueEs: colorEs, valueJa: colorJa },
      { labelEs: "Precio", labelJa: "価格", valueEs: "1.900 CLP", valueJa: "1.900 CLP" },
    ],
    availableOptionsEs: "Compatibilidad exacta y entrega se confirman por mensaje.",
    availableOptionsJa: "正確な対応本体と受け渡し方法はメッセージで確認します。",
    recommendedForEs: "Usuarios de EnerGel multicolor, estudio y oficina.",
    recommendedForJa: "エナージェル多色ユーザー、勉強、仕事。",
    longDescriptionEs: `Recambio EnerGel 0.5 mm ${colorEs.toLowerCase()} para mantener el cuerpo multicolor con tinta fresca y de secado rápido.`,
    longDescriptionJa: `エナージェル多色 0.5mm ${colorJa}替え芯は、速乾ゲルの書き味を本体で使い続けるための補充商品です。`,
    sellingPointsEs: ["Secado rápido.", "Precio bajo.", "Suma bien con el cuerpo."],
    sellingPointsJa: ["速乾。", "低価格。", "本体と一緒に買いやすい。"],
    careNoteEs: "La foto corresponde a la familia EnerGel multicolor; color y compatibilidad se confirman por mensaje.",
    careNoteJa: "写真はエナージェル多色シリーズです。色と対応はメッセージで確認します。",
    relatedIds: ["energel-multicolor", "energel-refill", "juice-up-refill-black"],
  };
});

const officialImages = {
  kurutogaDive: [
    "https://www.mpuni.co.jp/products/images/products/309534000.jpg",
  ],
  kurutogaMetal: [
    "https://www.mpuni.co.jp/products/images/products/thm_kurutogametal.png",
    "https://www.mpuni.co.jp/products/images/products/c984a4236c583b4af3bbc2774d3d774e0290d654.jpg",
    "https://www.mpuni.co.jp/products/images/products/5f30f2f7333d19e9681675da38d58a1a27368659.jpg",
    "https://www.mpuni.co.jp/products/images/products/ebe297712c4efdc0a32ae8ba14bf9e7ef4e31a8c.jpg",
  ],
  zentoSignature: [
    "https://www.mpuni.co.jp/products/images/products/9908ee21ee3e4f86a55f26fbfa4446eb95c631bd.png",
    "https://www.mpuni.co.jp/products/images/products/5dc404fcd77fb96e9a57301443bee5e39402a24f.png",
    "https://www.mpuni.co.jp/products/images/products/322297000.jpg",
    "https://www.mpuni.co.jp/products/images/products/4256a035be35e4fc03759476807c8d8da0bf374c.jpg",
  ],
  zentoFlow: [
    "https://www.mpuni.co.jp/products/images/products/348805000.jpg",
    "https://www.mpuni.co.jp/products/images/products/348813000.jpg",
    "https://www.mpuni.co.jp/products/images/products/322271000.jpg",
  ],
  zentoStandard: [
    "https://www.mpuni.co.jp/products/images/products/c02f6f6bc6a9036aeefda0096c2ab136ba5c529b.png",
    "https://www.mpuni.co.jp/products/images/products/346b2f3630c5a8712b69444a3f1ff222f797f24d.png",
    "https://www.mpuni.co.jp/products/images/products/2986e406faf8319a017705bb24f5b8d0ea1cfb75.png",
    "https://www.mpuni.co.jp/products/images/products/11823f755b0160c55d3878a548fa5d075ad1374e.png",
  ],
  jetstreamLite: [
    "https://www.mpuni.co.jp/products/images/products/313718000.jpg",
    "https://www.mpuni.co.jp/products/images/products/313692000.jpg",
    "https://www.mpuni.co.jp/products/images/products/313684000.jpg",
  ],
  jetstreamFourAndOne: [
    "https://www.mpuni.co.jp/products/images/products/258194002.jpg",
  ],
  jetstreamSlimCompact: [
    "https://www.mpuni.co.jp/news/pressrelease/detail/news_file/file/jetstreamslim3color.jpg",
  ],
  jetstreamStandard: [
    "https://www.mpuni.co.jp/news/images/news/f87ce611e2c3a3d1d46edee6c39c40c04652998e.jpg",
    "https://www.mpuni.co.jp/news/images/news/2c4259a8fab8771f4faef1abf4d6f813de77d30f.jpg",
  ],
  jetstreamEdge: [
    "https://www.mpuni.co.jp/news/pressrelease/detail/news_file/file/JETSTREAMEDGE.jpg",
  ],
  uniballOne: [
    "https://www.mpuni.co.jp/news/images/news/uniball_one_1.jpg",
    "https://www.mpuni.co.jp/news/images/news/uniball_one_2.jpg",
  ],
  uniballOneBlack: [
    "https://www.mpuni.co.jp/news/images/news/uniball_one_1.jpg",
  ],
  uniballOneBlue: [
    "https://www.mpuni.co.jp/news/images/news/uniball_one_2.jpg",
  ],
  uniballOneRed: [
    "https://www.mpuni.co.jp/news/images/news/uniball_one_2.jpg",
  ],
  uniballOneRefill038: [
    "https://www.mpuni.co.jp/products/images/products/UMR38S.24.jpg",
  ],
  uniballOneRefill05: [
    "https://www.mpuni.co.jp/products/images/products/UMR05S.24.jpg",
  ],
  uniballOneRefill05Blue: [
    "https://www.mpuni.co.jp/products/images/products/UMR05S.24.jpg",
  ],
  uniballOneRefill05Red: [
    "https://www.mpuni.co.jp/products/images/products/UMR05S.24.jpg",
  ],
  uniballOne3: [
    "https://www.mpuni.co.jp/products/images/products/30886b9778a9311f940fa61aafbc9444421e00b1.png",
    "https://www.mpuni.co.jp/products/images/products/Green_haikei_yoko.png",
  ],
  kurutogaKs: [
    "https://www.mpuni.co.jp/products/images/products/3eb0c5b8e64e7c7f42cee11e63c979eb51257b43.png",
  ],
  kurutogaAdvance: [
    "https://www.mpuni.co.jp/products/app_product_images/244004000.jpg",
  ],
  uniballOneP: [
    "https://www.mpuni.co.jp/products/images/products/7bd507720d7e9e9e14f24792291f164d1957b642.jpg",
  ],
  juiceUp: [
    "https://webcatalog.pilot.co.jp/products/fileDownload?fileID=t010000001528&type=prev&volumeName=00004",
    "https://webcatalog.pilot.co.jp/products/fileDownload?fileID=t010000014264&type=prev&volumeName=00004",
  ],
  juiceUpRefill: [
    "https://webcatalog.pilot.co.jp/products/fileDownload?fileID=t010000004009&type=icon&volumeName=00004",
    "https://webcatalog.pilot.co.jp/products/fileDownload?fileID=t010000004008&type=icon&volumeName=00004",
  ],
  pilotDrGripRefill: [
    "https://webcatalog.pilot.co.jp/products/fileDownload?fileID=t010000003506&type=icon&volumeName=00004",
    "https://webcatalog.pilot.co.jp/products/fileDownload?fileID=t010000003509&type=icon&volumeName=00004",
  ],
  pilotDrGripPlayBalance: [
    "https://webcatalog.pilot.co.jp/products/fileDownload?fileID=t010000009280&type=prev&volumeName=00004",
    "https://webcatalog.pilot.co.jp/products/fileDownload?fileID=t010000000563&type=icon&volumeName=00004",
  ],
  pilotDrGripGSpec: [
    "https://webcatalog.pilot.co.jp/products/fileDownload?fileID=t010000009302&type=icon&volumeName=00004",
    "https://webcatalog.pilot.co.jp/products/fileDownload?fileID=t010000000608&type=icon&volumeName=00004",
  ],
  pilotAirStep: [
    "https://webcatalog.pilot.co.jp/products/fileDownload?fileID=t010000015796&type=prev&volumeName=00004",
    "https://webcatalog.pilot.co.jp/products/fileDownload?fileID=t010000015797&type=icon&volumeName=00004",
  ],
  pilotKirena: [
    "https://webcatalog.pilot.co.jp/products/fileDownload?fileID=t010000007355&type=icon&volumeName=00004",
    "https://webcatalog.pilot.co.jp/products/fileDownload?fileID=t010000007252&type=icon&volumeName=00004",
  ],
  monoGraphFine: [
    "https://www.tombow.com/files/2023/10/dpa-112a-1_02.jpg",
    "https://www.tombow.com/files/2023/10/dpa112b-1_02.jpg",
  ],
  monoGraphClear: [
    "https://www.tombow.com/files/2021/03/20210304_1-1-1024x675.jpg",
  ],
  plusFujiEraser: [
    "https://bungu.plus.co.jp/product/correct/img/catetop_fujisan.jpg",
    "https://bungu.plus.co.jp/product/correct/img/air-in/fujisan/01.jpg",
    "https://bungu.plus.co.jp/product/correct/img/air-in/fujisan/02.jpg",
  ],
  kokuyoGloo: [
    "https://www.kokuyo.com/system/files/SET43165.jpg",
    "https://www.kokuyo.com/sites/default/files/assets/images/parts/st-gloo-glue-stick_3.png",
  ],
  kokuyoCapattoMesh: [
    "https://www.kokuyo.com/sites/default/files/assets/images/parts/st-capatto-mesh-main_4.png",
    "https://www.kokuyo.com/sites/default/files/assets/images/parts/st-capatto-mesh-feature-b01_3.png",
  ],
  sarasaClip: [
    "https://www.zebra.co.jp/pro/images/JJ15-BK.jpg",
    "https://www.zebra.co.jp/global/images/sarasa.png",
  ],
  sarasaDry: [
    "https://www.zebra.co.jp/pro/images/JJS31-BK.jpg",
    "https://www.zebra.co.jp/pro/images/JJS31-BL.jpg",
  ],
  lightwriteAlpha: [
    "https://www.zebra.co.jp/images/product/kv/lightwrite-a/main.jpg",
  ],
  energelRefill: [
    "https://www.pentel.co.jp/images/products/refill_1_XLRN5H-A-1.png",
  ],
  zebra4cRefill: [
    "https://www.zebra.co.jp/pro/images/refill/BR-8A-4C-BK.jpg",
  ],
  sarasaClipRefill: [
    "https://www.zebra.co.jp/pro/images/refill/RJF5.jpg",
  ],
  sarasaDryRefill: [
    "https://www.zebra.co.jp/pro/images/refill/RJLV5-BK.jpg",
  ],
  olfaPerforationCutter: [
    "https://www.olfa.co.jp/wordpress/wp-content/uploads/1501648948PRC-3.jpg",
  ],
};

const productImageCorrections = {
  "kurutoga-dive": { galleryImages: officialImages.kurutogaDive },
  "kurutoga-dive-aurora-purple": { galleryImages: officialImages.kurutogaDive },
  "kurutoga-metal": { galleryImages: officialImages.kurutogaMetal },
  "kurutoga-metal-sunrise-orange": { galleryImages: officialImages.kurutogaMetal },
  "kurutoga-metal-nocturne-black": { galleryImages: officialImages.kurutogaMetal },
  "kurutoga-metal-silent-blue": { galleryImages: officialImages.kurutogaMetal },
  "kurutoga-metal-phantom-grey": { galleryImages: officialImages.kurutogaMetal },
  "zento-signature": { galleryImages: officialImages.zentoSignature },
  "zento-signature-limited": { galleryImages: officialImages.zentoSignature },
  "zento-signature-038": { galleryImages: officialImages.zentoSignature },
  "zento-signature-05": { galleryImages: officialImages.zentoSignature },
  "zento-signature-07": { galleryImages: officialImages.zentoSignature },
  "zento-flow": { galleryImages: officialImages.zentoFlow },
  "zento-standard": { galleryImages: officialImages.zentoStandard },
  "zento-limited-colors": { galleryImages: officialImages.zentoStandard },
  "zento-standard-yellow": { galleryImages: officialImages.zentoStandard },
  "zento-standard-orange": { galleryImages: officialImages.zentoStandard },
  "zento-standard-purple": { galleryImages: officialImages.zentoStandard },
  "zento-limited-wine-red": { galleryImages: officialImages.zentoStandard },
  "zento-limited-green": { galleryImages: officialImages.zentoStandard },
  "zento-limited-cream": { galleryImages: officialImages.zentoStandard },
  "zento-standard-black": { galleryImages: officialImages.zentoStandard },
  "zento-standard-red": { galleryImages: officialImages.zentoStandard },
  "jetstream-lite": { galleryImages: officialImages.jetstreamLite },
  "jetstream-lite-07": { galleryImages: officialImages.jetstreamLite },
  "jetstream-refill": { galleryImages: ["https://www.mpuni.co.jp/products/images/products/SXR-L-7.jpg"] },
  "jetstream-refill-single-07": {
    galleryImages: ["https://www.mpuni.co.jp/products/images/products/05c4001a1c886856e09e18d281d726941dc0f91e.jpg"],
  },
  "jetstream-multicolor-refill-038": {
    galleryImages: ["https://www.mpuni.co.jp/products/images/products/9ee2d94232349283106f3d438f0ff17dea37c0a2.png"],
  },
  "jetstream-multicolor-refill-07": {
    galleryImages: ["https://www.mpuni.co.jp/products/images/products/SXR-L-7.jpg"],
  },
  "jetstream-lite-refill": { galleryImages: ["https://www.mpuni.co.jp/products/images/products/SXR-L-7.jpg"] },
  "jetstream-4and1": { galleryImages: officialImages.jetstreamFourAndOne },
  "jetstream-4and1-05": { galleryImages: officialImages.jetstreamFourAndOne },
  "jetstream-slim-compact": { galleryImages: officialImages.jetstreamSlimCompact },
  "jetstream-single": { galleryImages: ["assets/product-image-pen-pending.svg"] },
  "jetstream-edge": { galleryImages: officialImages.jetstreamEdge },
  "jetstream-edge-refill": {
    galleryImages: ["assets/product-image-pen-pending.svg"],
    image: "assets/product-image-pen-pending.svg",
  },
  "energel-refill": {
    galleryImages: officialImages.energelRefill,
    image: officialImages.energelRefill[0],
  },
  "energel-refill-05-black": {
    galleryImages: officialImages.energelRefill,
    image: officialImages.energelRefill[0],
  },
  "energel-refill-05-blue": {
    galleryImages: officialImages.energelRefill,
    image: officialImages.energelRefill[0],
  },
  "energel-refill-05-red": {
    galleryImages: officialImages.energelRefill,
    image: officialImages.energelRefill[0],
  },
  "uniball-one": { galleryImages: officialImages.uniballOne },
  "uniball-one-038-black": { galleryImages: officialImages.uniballOneBlack },
  "uniball-one-05-black": { galleryImages: officialImages.uniballOneBlack },
  "uniball-one-05-blue": { galleryImages: officialImages.uniballOneBlue },
  "uniball-one-05-red": { galleryImages: officialImages.uniballOneRed },
  "uniball-one-refill": {
    galleryImages: [...officialImages.uniballOneRefill038, ...officialImages.uniballOneRefill05],
  },
  "uniball-one-refill-038-black": { galleryImages: officialImages.uniballOneRefill038 },
  "uniball-one-refill-05-black": { galleryImages: officialImages.uniballOneRefill05 },
  "uniball-one-refill-05-blue": { galleryImages: officialImages.uniballOneRefill05Blue },
  "uniball-one-refill-05-red": { galleryImages: officialImages.uniballOneRefill05Red },
  "uniball-one-3": { galleryImages: officialImages.uniballOne3 },
  "uniball-one-3-refill": {
    galleryImages: [...officialImages.uniballOneRefill038, ...officialImages.uniballOneRefill05],
  },
  "uniball-one-3-refill-038-set": { galleryImages: officialImages.uniballOneRefill038 },
  "uniball-one-3-refill-05-set": { galleryImages: officialImages.uniballOneRefill05 },
  "kuru-toga-ks": { galleryImages: officialImages.kurutogaKs },
  "kurutoga-ks-03": { galleryImages: officialImages.kurutogaKs },
  "kurutoga-ks-green": { galleryImages: officialImages.kurutogaKs },
  "kurutoga-advance": { galleryImages: officialImages.kurutogaAdvance },
  "kurutoga-advance-03": { galleryImages: officialImages.kurutogaAdvance },
  "uniball-one-p": { galleryImages: officialImages.uniballOneP },
  "uniball-one-p-standard": { galleryImages: officialImages.uniballOneP },
  "uniball-one-p-limited": { galleryImages: officialImages.uniballOneP },
  "juice-up": { galleryImages: officialImages.juiceUp },
  "juice-up-black": { galleryImages: officialImages.juiceUp },
  "juice-up-red": { galleryImages: officialImages.juiceUp },
  "juice-up-refill": { galleryImages: officialImages.juiceUpRefill },
  "juice-up-refill-black": { galleryImages: officialImages.juiceUpRefill },
  "juice-up-refill-red": { galleryImages: officialImages.juiceUpRefill },
  "dr-grip-gspec": { galleryImages: officialImages.pilotDrGripGSpec },
  "drgrip-refill": { galleryImages: officialImages.pilotDrGripRefill },
  "drgrip-gspec-refill-05": { galleryImages: officialImages.pilotDrGripRefill },
  "drgrip-play-balance": { galleryImages: officialImages.pilotDrGripPlayBalance },
  "pilot-airstep": { galleryImages: officialImages.pilotAirStep },
  "airstep-limited": { galleryImages: officialImages.pilotAirStep },
  "airstep-standard": { galleryImages: officialImages.pilotAirStep },
  "pilot-kirena-set": { galleryImages: officialImages.pilotKirena },
  "mono-graph-fine": { galleryImages: officialImages.monoGraphFine },
  "mono-graph-clear": { galleryImages: officialImages.monoGraphClear },
  "plus-mt-fuji-eraser": { galleryImages: officialImages.plusFujiEraser },
  "kokuyo-gloo-glue": { galleryImages: officialImages.kokuyoGloo },
  "nylon-mesh-pen-case": { galleryImages: officialImages.kokuyoCapattoMesh },
  "sarasa-clip": { galleryImages: officialImages.sarasaClip },
  "sarasa-clip-limited": { galleryImages: officialImages.sarasaClip },
  "sarasa-dry": { galleryImages: officialImages.sarasaDry },
  "sarasa-dry-04": { galleryImages: officialImages.sarasaDry },
  "sarasa-dry-05": { galleryImages: officialImages.sarasaDry },
  "sarasa-dry-refill": { galleryImages: officialImages.sarasaDryRefill },
  "sarasa-dry-refill-04-black": { galleryImages: officialImages.sarasaDryRefill },
  "sarasa-dry-refill-04-blue": { galleryImages: officialImages.sarasaDryRefill },
  "sarasa-dry-refill-05-black": { galleryImages: officialImages.sarasaDryRefill },
  "sarasa-dry-refill-05-blue": { galleryImages: officialImages.sarasaDryRefill },
  "sarasa-dry-04-black": { galleryImages: officialImages.sarasaDry },
  "sarasa-dry-04-blue": { galleryImages: officialImages.sarasaDry },
  "sarasa-dry-05-black": { galleryImages: officialImages.sarasaDry },
  "sarasa-dry-05-blue": { galleryImages: officialImages.sarasaDry },
  "sarasa-clip-refill": { galleryImages: officialImages.sarasaClipRefill },
  "sarasa-clip-refill-black": { galleryImages: officialImages.sarasaClipRefill },
  "zebra-lightwrite-alpha": { galleryImages: officialImages.lightwriteAlpha },
  "lightwrite-4c-refill": { galleryImages: officialImages.zebra4cRefill },
  "olfa-perforation-cutter": { galleryImages: officialImages.olfaPerforationCutter },
  "uni-leads-07": {
    galleryImages: [
      "https://tacto-studio.com/cdn/shop/products/UN722NDCBL_uni_nanodia_colour_leads_0_7mm_blue_c920b9e9-1f91-49d9-9100-0ce1cceda57d.jpg?v=1698989505",
    ],
  },
  "sea-design-eraser": { galleryImages: ["assets/product-image-pending.svg"] },
  "sushi-keyholder": { galleryImages: ["assets/product-image-pending.svg"] },
  "neko-shiba-eraser": {
    galleryImages: [
      "https://bungu.store/cdn/shop/files/shiba-and-neko-gomu-eraser-sun-star-bungu-447902.jpg?v=1731958266&width=900",
    ],
    image: "https://bungu.store/cdn/shop/files/shiba-and-neko-gomu-eraser-sun-star-bungu-447902.jpg?v=1731958266&width=900",
  },
};

products.forEach((product) => {
  Object.assign(product, productMerchandisingContent[product.id]);
  Object.assign(product, productImageCorrections[product.id]);
  product.optionGroups = product.optionGroups || [
    { labelEs: "Consulta", labelJa: "確認", optionsEs: ["A confirmar"], optionsJa: ["要確認"] },
  ];
  product.longDescriptionEs = product.longDescriptionEs || product.descriptionEs;
  product.longDescriptionJa = product.longDescriptionJa || product.descriptionJa;
  product.sellingPointsEs = product.sellingPointsEs || product.featuresEs;
  product.sellingPointsJa = product.sellingPointsJa || product.featuresJa;
  product.careNoteEs = product.careNoteEs || "Color, compatibilidad y entrega se confirman por mensaje.";
  product.careNoteJa = product.careNoteJa || "色、対応、受け渡し方法はメッセージで確認します。";
  product.galleryImages = Array.from(new Set(product.galleryImages || [product.image]));
  product.image = product.galleryImages[0] || product.image;
});

function isPlaceholderProductImage(src) {
  return typeof src === "string" && (src.includes("product-image-pending.svg") || src.includes("product-image-pen-pending.svg"));
}

const imageReviewProductIds = new Set([
  "jetstream-single",
  "jetstream-edge-refill",
  "sea-design-eraser",
  "sushi-keyholder",
]);

function productFallbackImage(product) {
  const writingCategories = new Set(["ballpoint", "mechanical", "refills", "leads"]);
  return writingCategories.has(product?.category) ? "assets/product-image-pen-pending.svg" : "assets/product-image-pending.svg";
}

function productImageNeedsReview(product) {
  if (!product) return true;
  return imageReviewProductIds.has(product.id);
}

function productGalleryImages(product) {
  if (!product || productImageNeedsReview(product)) return [productFallbackImage(product)];

  const images = [product.image, ...(product.galleryImages || [])]
    .filter(Boolean)
    .filter((image) => !isPlaceholderProductImage(image));
  const uniqueImages = Array.from(new Set(images));
  return uniqueImages.length ? uniqueImages : [productFallbackImage(product)];
}

function productDisplayImage(product) {
  return productGalleryImages(product)[0] || productFallbackImage(product);
}

function productImageErrorFallback(product) {
  return productFallbackImage(product);
}

const selectableProductFamilies = {
  "kurutoga-dive": {
    variants: ["kurutoga-dive-aurora-purple"],
    optionGroups: [
      { labelEs: "Mina", labelJa: "芯径", optionsEs: ["0.5 mm"], optionsJa: ["0.5mm"] },
      { labelEs: "Color", labelJa: "色", optionsEs: ["Aurora Purple"], optionsJa: ["オーロラパープル"] },
    ],
    availableOptionsEs: "Este stock corresponde a 0.5 mm Aurora Purple. Entrega se confirma por mensaje.",
    availableOptionsJa: "在庫は0.5mmのオーロラパープルのみです。受け渡し方法はメッセージで確認します。",
    careNoteEs: "KURUTOGA DIVE es un producto premium; color y entrega se revisan antes de cerrar el pedido.",
    careNoteJa: "KURUTOGA DIVEはプレミアム商品です。色と受け渡し方法は注文確定前に確認します。",
  },
  "kurutoga-metal": {
    variants: [
      "kurutoga-metal-sunrise-orange",
      "kurutoga-metal-nocturne-black",
      "kurutoga-metal-silent-blue",
      "kurutoga-metal-phantom-grey",
    ],
    optionGroups: [
      { labelEs: "Mina", labelJa: "芯径", optionsEs: ["0.5 mm"], optionsJa: ["0.5mm"] },
      {
        labelEs: "Color",
        labelJa: "色",
        optionsEs: ["Silent Blue", "Phantom Grey", "Sunrise Orange", "Nocturne Black"],
        optionsJa: ["Silent Blue", "Phantom Grey", "Sunrise Orange", "Nocturne Black"],
      },
    ],
    availableOptionsEs: "Elige el color KURUTOGA Metal en esta página. Disponibilidad y entrega se confirman por mensaje.",
    availableOptionsJa: "このページ内でKURUTOGA Metalの色を選べます。在庫色と受け渡し方法はメッセージで確認します。",
    careNoteEs: "El tono exacto puede variar por edición. Se confirma el color antes de cerrar la compra.",
    careNoteJa: "エディションにより色味が異なります。購入確定前に希望色を確認します。",
  },
  "zento-standard": {
    variants: [
      "zento-limited-colors",
      "zento-standard-yellow",
      "zento-standard-orange",
      "zento-standard-purple",
      "zento-limited-wine-red",
      "zento-limited-green",
      "zento-limited-cream",
      "zento-standard-black",
      "zento-standard-red",
    ],
    optionGroups: [
      { labelEs: "Punta", labelJa: "ボール径", optionsEs: ["0.38 mm", "0.5 mm"], optionsJa: ["0.38mm", "0.5mm"] },
      {
        labelEs: "Color / tinta",
        labelJa: "色 / インク",
        optionsEs: ["Black", "Red", "Yellow", "Orange", "Purple", "Wine red", "Green", "Cream"],
        optionsJa: ["黒", "赤", "黄", "オレンジ", "紫", "ワインレッド", "グリーン", "クリーム"],
      },
    ],
    availableOptionsEs: "Elige color y punta en esta página. Ediciones limitadas se confirman por mensaje.",
    availableOptionsJa: "このページ内で色とボール径を選べます。限定色はメッセージで確認します。",
    careNoteEs: "Color, punta y refill compatible se revisan antes de cerrar la compra.",
    careNoteJa: "色、ボール径、替え芯対応は注文確定前に確認します。",
  },
  "jetstream-lite": {
    variants: ["jetstream-lite-07"],
    optionGroups: [
      { labelEs: "Punta", labelJa: "ボール径", optionsEs: ["0.5 mm", "0.7 mm"], optionsJa: ["0.5mm", "0.7mm"] },
      { labelEs: "Tinta", labelJa: "インク色", optionsEs: ["Black"], optionsJa: ["黒"] },
    ],
    availableOptionsEs: "Elige 0.5 mm o 0.7 mm. Color y entrega se confirman por mensaje.",
    availableOptionsJa: "0.5mmまたは0.7mmを選べます。色と受け渡し方法はメッセージで確認します。",
    careNoteEs: "Si quieres refill compatible, confirma el modelo del cuerpo por mensaje.",
    careNoteJa: "替え芯も必要な場合は、本体モデルをメッセージで確認します。",
  },
  "jetstream-4and1": {
    variants: ["jetstream-4and1-05"],
    optionGroups: [
      { labelEs: "Punta", labelJa: "ボール径", optionsEs: ["0.5 mm"], optionsJa: ["0.5mm"] },
      { labelEs: "Función", labelJa: "機能", optionsEs: ["4 colores + lápiz 0.5"], optionsJa: ["4色ボール + 0.5mmシャープ"] },
    ],
    availableOptionsEs: "Modelo multifunción 4&1. Color del cuerpo se confirma por mensaje.",
    availableOptionsJa: "4&1多機能モデルです。本体色はメッセージで確認します。",
  },
  "uniball-one": {
    variants: ["uniball-one-038-black", "uniball-one-05-black", "uniball-one-05-blue", "uniball-one-05-red"],
    optionGroups: [
      { labelEs: "Punta", labelJa: "ボール径", optionsEs: ["0.38 mm", "0.5 mm"], optionsJa: ["0.38mm", "0.5mm"] },
      { labelEs: "Tinta", labelJa: "インク色", optionsEs: ["Black", "Blue", "Red"], optionsJa: ["黒", "青", "赤"] },
    ],
    availableOptionsEs: "Elige punta e tinta en esta página. Disponibilidad se confirma por mensaje.",
    availableOptionsJa: "このページ内でボール径とインク色を選べます。在庫はメッセージで確認します。",
  },
  "uniball-one-p": {
    variants: ["uniball-one-p-standard", "uniball-one-p-limited"],
    optionGroups: [
      { labelEs: "Modelo", labelJa: "モデル", optionsEs: ["Standard", "Limited"], optionsJa: ["通常", "限定"] },
      { labelEs: "Punta", labelJa: "ボール径", optionsEs: ["0.38 mm", "0.5 mm"], optionsJa: ["0.38mm", "0.5mm"] },
      { labelEs: "Color", labelJa: "色", optionsEs: ["A confirmar"], optionsJa: ["要確認"] },
    ],
    availableOptionsEs: "Elige edición y punta. Los colores coleccionables se confirman por mensaje.",
    availableOptionsJa: "通常/限定とボール径を選べます。色はメッセージで確認します。",
    careNoteEs: "Algunas ediciones cambian rápido; confirma color antes de pagar.",
    careNoteJa: "限定色は変動しやすいため、支払い前に色を確認します。",
  },
  "sarasa-clip": {
    variants: ["sarasa-clip-limited"],
    optionGroups: [
      { labelEs: "Modelo", labelJa: "モデル", optionsEs: ["Standard", "Limited"], optionsJa: ["通常", "限定"] },
      { labelEs: "Punta", labelJa: "ボール径", optionsEs: ["0.5 mm"], optionsJa: ["0.5mm"] },
      { labelEs: "Tinta", labelJa: "インク色", optionsEs: ["Black", "A confirmar"], optionsJa: ["黒", "要確認"] },
    ],
    availableOptionsEs: "Elige modelo normal o limitado. Tinta y disponibilidad se confirman por mensaje.",
    availableOptionsJa: "通常/限定を選べます。インク色と在庫はメッセージで確認します。",
  },
  "sarasa-dry": {
    variants: ["sarasa-dry-04", "sarasa-dry-05", "sarasa-dry-04-black", "sarasa-dry-04-blue", "sarasa-dry-05-black", "sarasa-dry-05-blue"],
    optionGroups: [
      { labelEs: "Punta", labelJa: "ボール径", optionsEs: ["0.4 mm", "0.5 mm"], optionsJa: ["0.4mm", "0.5mm"] },
      { labelEs: "Tinta", labelJa: "インク色", optionsEs: ["Black", "Blue"], optionsJa: ["黒", "青"] },
    ],
    availableOptionsEs: "Elige grosor e tinta dentro de esta página.",
    availableOptionsJa: "このページ内でボール径とインク色を選べます。",
    careNoteEs: "SARASA dry seca rápido; confirma tinta y punta antes de cerrar el pedido.",
    careNoteJa: "サラサドライは速乾タイプです。インク色とボール径を注文前に確認します。",
  },
  "juice-up": {
    variants: ["juice-up-black", "juice-up-red"],
    optionGroups: [
      { labelEs: "Punta", labelJa: "ボール径", optionsEs: ["0.5 mm"], optionsJa: ["0.5mm"] },
      { labelEs: "Tinta", labelJa: "インク色", optionsEs: ["Black", "Red"], optionsJa: ["黒", "赤"] },
    ],
    availableOptionsEs: "Elige tinta negra o roja. Disponibilidad se confirma por mensaje.",
    availableOptionsJa: "黒または赤を選べます。在庫はメッセージで確認します。",
  },
  "kuru-toga-ks": {
    variants: ["kurutoga-ks-03", "kurutoga-ks-green"],
    optionGroups: [
      { labelEs: "Mina", labelJa: "芯径", optionsEs: ["0.3 mm", "0.5 mm"], optionsJa: ["0.3mm", "0.5mm"] },
      { labelEs: "Color", labelJa: "色", optionsEs: ["Black", "Green", "A confirmar"], optionsJa: ["黒", "グリーン", "要確認"] },
    ],
    availableOptionsEs: "Elige grosor y color. Recomendado para estudio y apuntes diarios.",
    availableOptionsJa: "芯径と色を選べます。勉強や日常筆記におすすめです。",
  },
  "kurutoga-advance": {
    variants: ["kurutoga-advance-03"],
    optionGroups: [
      { labelEs: "Mina", labelJa: "芯径", optionsEs: ["0.3 mm", "0.5 mm"], optionsJa: ["0.3mm", "0.5mm"] },
      { labelEs: "Color", labelJa: "色", optionsEs: ["A confirmar"], optionsJa: ["要確認"] },
    ],
    availableOptionsEs: "Elige grosor según tu uso: notas pequeñas, estudio o escritura diaria.",
    availableOptionsJa: "細かいノート、勉強、普段書きに合わせて芯径を選べます。",
  },
  "pilot-airstep": {
    variants: ["airstep-limited", "airstep-standard"],
    optionGroups: [
      { labelEs: "Modelo", labelJa: "モデル", optionsEs: ["Standard", "Limited"], optionsJa: ["通常", "限定"] },
      { labelEs: "Mina", labelJa: "芯径", optionsEs: ["0.5 mm"], optionsJa: ["0.5mm"] },
    ],
    availableOptionsEs: "Elige edición normal o limitada. Color se confirma por mensaje.",
    availableOptionsJa: "通常/限定を選べます。色はメッセージで確認します。",
  },
  "pentel-smash": {
    variants: ["smash-03"],
    optionGroups: [
      { labelEs: "Mina", labelJa: "芯径", optionsEs: ["0.3 mm", "0.5 mm"], optionsJa: ["0.3mm", "0.5mm"] },
      { labelEs: "Color", labelJa: "色", optionsEs: ["Black"], optionsJa: ["黒"] },
    ],
    availableOptionsEs: "Elige 0.3 mm o 0.5 mm según el nivel de detalle que necesitas.",
    availableOptionsJa: "必要な細かさに合わせて0.3mm/0.5mmを選べます。",
  },
  "kokuyo-campus-pencil-sharp": {
    variants: [
      "campus-pencil-sharp-set-black",
      "campus-pencil-sharp-set-white",
      "campus-pencil-sharp-basic",
      "campus-pencil-sharp-mint",
      "campus-pencil-sharp-03-black",
      "campus-pencil-sharp-03-white",
      "campus-pencil-sharp-05-black",
      "campus-pencil-sharp-05-white",
    ],
    optionGroups: [
      { labelEs: "Mina", labelJa: "芯径", optionsEs: ["0.3 mm", "0.5 mm"], optionsJa: ["0.3mm", "0.5mm"] },
      { labelEs: "Color", labelJa: "色", optionsEs: ["Black", "White", "Mint"], optionsJa: ["黒", "白", "ミント"] },
      { labelEs: "Formato", labelJa: "内容", optionsEs: ["Unitario", "Set"], optionsJa: ["単品", "セット"] },
    ],
    availableOptionsEs: "Elige grosor, color y si quieres unidad o set.",
    availableOptionsJa: "芯径、色、単品/セットをこのページ内で選べます。",
  },
  "pentel-ain-leads": {
    variants: [
      "pentel-ain-thick-leads",
      "pentel-ain-02-hb",
      "pentel-ain-02-b",
      "pentel-ain-03-hb",
      "pentel-ain-03-b",
      "pentel-ain-05-hb",
      "pentel-ain-05-b",
      "pentel-ain-09-hb",
      "pentel-ain-09-b",
      "pentel-ain-13-hb",
      "pentel-ain-13-b",
    ],
    optionGroups: [
      { labelEs: "Grosor", labelJa: "芯径", optionsEs: ["0.2 mm", "0.3 mm", "0.5 mm", "0.9 mm", "1.3 mm"], optionsJa: ["0.2mm", "0.3mm", "0.5mm", "0.9mm", "1.3mm"] },
      { labelEs: "Dureza", labelJa: "濃さ", optionsEs: ["HB", "B"], optionsJa: ["HB", "B"] },
    ],
    availableOptionsEs: "Elige grosor y dureza. Compatibilidad con tu lápiz se confirma por mensaje.",
    availableOptionsJa: "芯径と濃さを選べます。対応する本体はメッセージで確認します。",
    careNoteEs: "Revisa que el grosor de la mina coincida con tu lápiz mecánico.",
    careNoteJa: "使うシャープペンの芯径と合っているか確認してください。",
  },
  "uni-leads-07": {
    variants: ["uni-leads-07-hb", "uni-leads-07-b"],
    optionGroups: [
      { labelEs: "Grosor", labelJa: "芯径", optionsEs: ["0.7 mm"], optionsJa: ["0.7mm"] },
      { labelEs: "Dureza", labelJa: "濃さ", optionsEs: ["HB", "B"], optionsJa: ["HB", "B"] },
    ],
    availableOptionsEs: "Minas 0.7 mm para escritura más marcada. Elige HB o B.",
    availableOptionsJa: "しっかり書ける0.7mm芯です。HBまたはBを選べます。",
  },
  "zento-refill": {
    variants: [
      "zento-refill-038",
      "zento-refill-05",
      "zento-refill-038-blue",
      "zento-refill-05-blue",
      "zento-refill-038-red",
      "zento-refill-05-red",
      "zento-refill-07-black",
    ],
    optionGroups: [
      {
        labelEs: "Punta / tinta",
        labelJa: "ボール径 / インク色",
        optionsEs: [
          "0.38 mm / Black",
          "0.38 mm / Blue",
          "0.38 mm / Red",
          "0.5 mm / Black",
          "0.5 mm / Blue",
          "0.5 mm / Red",
          "0.7 mm / Black",
        ],
        optionsJa: [
          "0.38mm / 黒",
          "0.38mm / 青",
          "0.38mm / 赤",
          "0.5mm / 黒",
          "0.5mm / 青",
          "0.5mm / 赤",
          "0.7mm / 黒",
        ],
      },
      { labelEs: "Compatibilidad", labelJa: "対応", optionsEs: ["ZENTO Signature", "ZENTO Flow", "ZENTO Standard"], optionsJa: ["ZENTO Signature", "ZENTO Flow", "ZENTO Standard"] },
    ],
    availableOptionsEs: "Elige una combinacion valida de punta e tinta. Azul y rojo estan disponibles solo en 0.38 mm y 0.5 mm; 0.7 mm es negro.",
    availableOptionsJa: "ボール径とインク色の有効な組み合わせから選びます。青と赤は0.38mm/0.5mmのみ、0.7mmは黒のみです。",
    careNoteEs: "Confirma el cuerpo exacto antes de comprar para evitar errores de compatibilidad.",
    careNoteJa: "互換性違いを避けるため、購入前に使う本体を確認します。",
  },
  "jetstream-refill": {
    variants: [
      "jetstream-refill-single-07",
      "jetstream-multicolor-refill-038",
      "jetstream-multicolor-refill-07",
      "jetstream-multicolor-refill-038-black",
      "jetstream-multicolor-refill-038-blue",
      "jetstream-multicolor-refill-038-red",
      "jetstream-multicolor-refill-07-black",
      "jetstream-multicolor-refill-07-blue",
      "jetstream-multicolor-refill-07-red",
      "jetstream-multicolor-refill-07-green",
      "jetstream-lite-refill",
      "jetstream-lite-refill-05-black",
      "jetstream-lite-refill-07-black",
      "jetstream-lite-refill-blue",
      "jetstream-lite-refill-red",
      "jetstream-lite-refill-green",
      "jetstream-edge-refill",
    ],
    optionGroups: [
      {
        labelEs: "Recambio disponible",
        labelJa: "在庫の替え芯",
        optionsEs: [
          "Single 0.7 mm / A confirmar",
          "Multicolor / 4&1 0.38 mm / Black",
          "Multicolor / 4&1 0.38 mm / Blue",
          "Multicolor / 4&1 0.38 mm / Red",
          "Multicolor / 4&1 0.7 mm / Black",
          "Multicolor / 4&1 0.7 mm / Blue",
          "Multicolor / 4&1 0.7 mm / Red",
          "Multicolor / 4&1 0.7 mm / Green",
          "Lite touch 0.5 mm / Black",
          "Lite touch 0.7 mm / Black",
          "Lite touch / Blue / punta a confirmar",
          "Lite touch / Red / punta a confirmar",
          "Lite touch / Green / punta a confirmar",
          "EDGE 0.28 mm / Black",
        ],
        optionsJa: [
          "単色 0.7mm / 要確認",
          "多色 / 4&1 0.38mm / 黒",
          "多色 / 4&1 0.38mm / 青",
          "多色 / 4&1 0.38mm / 赤",
          "多色 / 4&1 0.7mm / 黒",
          "多色 / 4&1 0.7mm / 青",
          "多色 / 4&1 0.7mm / 赤",
          "多色 / 4&1 0.7mm / 緑",
          "Lite touch 0.5mm / 黒",
          "Lite touch 0.7mm / 黒",
          "Lite touch / 青 / ボール径確認",
          "Lite touch / 赤 / ボール径確認",
          "Lite touch / 緑 / ボール径確認",
          "EDGE 0.28mm / 黒",
        ],
      },
    ],
    availableOptionsEs: "Elige una combinacion valida por cuerpo. 0.28 mm corresponde a EDGE, no a 4&1.",
    availableOptionsJa: "本体ごとの有効な組み合わせから選びます。0.28mmはEDGE用で、4&1用としては表示しません。",
    careNoteEs: "JETSTREAM tiene refills distintos por modelo. Se confirma compatibilidad antes de cerrar el pedido.",
    careNoteJa: "JETSTREAMはモデルごとに替え芯が異なるため、注文前に対応を確認します。",
  },
  "uniball-one-refill": {
    variants: [
      "uniball-one-3-refill",
      "uniball-one-3-refill-038-set",
      "uniball-one-3-refill-05-set",
      "uniball-one-refill-05-blue",
      "uniball-one-refill-05-red",
      "uniball-one-refill-038-black",
      "uniball-one-refill-05-black",
    ],
    optionGroups: [
      { labelEs: "Punta", labelJa: "ボール径", optionsEs: ["0.38 mm", "0.5 mm"], optionsJa: ["0.38mm", "0.5mm"] },
      { labelEs: "Tinta", labelJa: "インク色", optionsEs: ["Black", "Blue", "Red"], optionsJa: ["黒", "青", "赤"] },
      { labelEs: "Formato", labelJa: "内容", optionsEs: ["Single", "Set para uni-ball one 3"], optionsJa: ["単品", "uni-ball one 3用セット"] },
    ],
    availableOptionsEs: "Elige punta, tinta y formato. Compatibilidad se confirma por mensaje.",
    availableOptionsJa: "ボール径、インク色、単品/セットを選べます。対応はメッセージで確認します。",
  },
  "juice-up-refill": {
    variants: ["juice-up-refill-black", "juice-up-refill-red"],
    optionGroups: [
      { labelEs: "Punta", labelJa: "ボール径", optionsEs: ["0.5 mm"], optionsJa: ["0.5mm"] },
      { labelEs: "Tinta", labelJa: "インク色", optionsEs: ["Black", "Red"], optionsJa: ["黒", "赤"] },
    ],
    availableOptionsEs: "Elige tinta negra o roja. Confirma compatibilidad con tu Juice up por mensaje.",
    availableOptionsJa: "黒または赤を選べます。Juice up本体との対応はメッセージで確認します。",
  },
  "sarasa-dry-refill": {
    variants: ["sarasa-dry-refill-04-black", "sarasa-dry-refill-04-blue", "sarasa-dry-refill-05-black", "sarasa-dry-refill-05-blue"],
    optionGroups: [
      { labelEs: "Punta", labelJa: "ボール径", optionsEs: ["0.4 mm", "0.5 mm"], optionsJa: ["0.4mm", "0.5mm"] },
      { labelEs: "Tinta", labelJa: "インク色", optionsEs: ["Black", "Blue"], optionsJa: ["黒", "青"] },
    ],
    availableOptionsEs: "Elige grosor e tinta para SARASA dry.",
    availableOptionsJa: "サラサドライ用のボール径とインク色を選べます。",
  },
  "sarasa-clip-refill": {
    variants: ["sarasa-clip-refill-black"],
    optionGroups: [
      { labelEs: "Punta", labelJa: "ボール径", optionsEs: ["0.5 mm"], optionsJa: ["0.5mm"] },
      { labelEs: "Tinta", labelJa: "インク色", optionsEs: ["Black"], optionsJa: ["黒"] },
    ],
    availableOptionsEs: "Recambio para SARASA CLIP. Compatibilidad se confirma por mensaje.",
    availableOptionsJa: "サラサクリップ用の替え芯です。対応はメッセージで確認します。",
  },
  "drgrip-refill": {
    variants: ["drgrip-gspec-refill-05"],
    optionGroups: [
      { labelEs: "Punta", labelJa: "ボール径", optionsEs: ["0.5 mm"], optionsJa: ["0.5mm"] },
      { labelEs: "Compatibilidad", labelJa: "対応", optionsEs: ["Dr. Grip G-SPEC"], optionsJa: ["ドクターグリップ G-SPEC"] },
    ],
    availableOptionsEs: "Confirma el cuerpo PILOT compatible por mensaje.",
    availableOptionsJa: "対応するPILOT本体はメッセージで確認します。",
  },
  "energel-refill": {
    variants: ["energel-refill-05-black", "energel-refill-05-blue", "energel-refill-05-red"],
    optionGroups: [
      { labelEs: "Punta", labelJa: "ボール径", optionsEs: ["0.5 mm"], optionsJa: ["0.5mm"] },
      { labelEs: "Tinta", labelJa: "インク色", optionsEs: ["Black", "Blue", "Red"], optionsJa: ["黒", "青", "赤"] },
    ],
    availableOptionsEs: "Elige tinta para EnerGel. Compatibilidad se confirma por mensaje.",
    availableOptionsJa: "エナージェル用のインク色を選べます。対応はメッセージで確認します。",
  },
  orenznero: {
    variants: ["orenznero-02", "orenznero-03", "orenznero-05"],
    optionGroups: [
      { labelEs: "Mina", labelJa: "芯径", optionsEs: ["0.2 mm", "0.3 mm", "0.5 mm"], optionsJa: ["0.2mm", "0.3mm", "0.5mm"] },
      { labelEs: "Color", labelJa: "色", optionsEs: ["Black"], optionsJa: ["黒"] },
    ],
    availableOptionsEs: "Elige 0.2, 0.3 o 0.5 mm en esta página. Disponibilidad se confirma por mensaje.",
    availableOptionsJa: "このページ内で0.2/0.3/0.5mmを選べます。在庫はメッセージで確認します。",
    careNoteEs: "ORENZNERO usa minas muy finas; confirma grosor antes de cerrar la compra.",
    careNoteJa: "オレンズネロは芯径違いの使用感が大きいため、購入前に芯径を確認します。",
  },
};

Object.entries(selectableProductFamilies).forEach(([parentId, family]) => {
  const parentProduct = products.find((product) => product.id === parentId);
  if (!parentProduct) return;

  const { variants = [], ...familyContent } = family;
  const variantProducts = variants.map((variantId) => products.find((product) => product.id === variantId)).filter(Boolean);
  Object.assign(parentProduct, familyContent);
  parentProduct.isGroup = false;
  variantProducts.forEach((variantProduct) => {
    variantProduct.isGroup = true;
  });

  const familyGallery = [
    ...(familyContent.galleryImages || []),
    ...(parentProduct.galleryImages || []),
    parentProduct.image,
    ...variantProducts.flatMap((variantProduct) => variantProduct.galleryImages || [variantProduct.image]),
  ].filter((src) => Boolean(src) && !isPlaceholderProductImage(src));
  parentProduct.galleryImages = Array.from(new Set(familyGallery));
  parentProduct.image = parentProduct.galleryImages[0] || parentProduct.image;
});

const familyProductReplacements = Object.fromEntries(
  Object.entries(selectableProductFamilies).flatMap(([parentId, family]) =>
    (family.variants || [])
      .filter((variantId) => products.some((product) => product.id === variantId))
      .map((variantId) => [variantId, parentId]),
  ),
);

const productAliasReplacements = {};

const groupProductReplacements = {
  "daily-pens": "jetstream-single",
  accessories: "plus-mt-fuji-eraser",
  "gel-compatible-refills": "juice-up-refill",
  "neko-shiba-eraser": "neko-gomu-eraser",
  "kurutoga-dive-aurora-purple": "kurutoga-dive",
  "orenznero-02": "orenznero",
  "orenznero-03": "orenznero",
  "orenznero-05": "orenznero",
  "zento-signature-limited": "zento-signature",
  "zento-signature-038": "zento-signature",
  "zento-signature-05": "zento-signature",
  "zento-signature-07": "zento-signature",
  ...familyProductReplacements,
};

Object.assign(productAliasReplacements, groupProductReplacements);

const compatibleRefillMap = {
  "zento-signature": ["zento-refill"],
  "zento-standard": ["zento-refill"],
  "zento-flow": ["zento-refill"],
  "jetstream-lite": ["jetstream-lite-refill"],
  "jetstream-lite-07": ["jetstream-lite-refill"],
  "jetstream-single": ["jetstream-refill-single-07"],
  "jetstream-4and1": ["jetstream-multicolor-refill-038", "jetstream-multicolor-refill-07"],
  "jetstream-4and1-05": ["jetstream-multicolor-refill-038", "jetstream-multicolor-refill-07"],
  "jetstream-slim-compact": ["jetstream-multicolor-refill-038", "jetstream-multicolor-refill-07"],
  "jetstream-edge": ["jetstream-edge-refill"],
  "uniball-one": ["uniball-one-refill"],
  "uniball-one-p": ["uniball-one-refill"],
  "uniball-one-3": ["uniball-one-3-refill"],
  "juice-up": ["juice-up-refill"],
  "sarasa-clip": ["sarasa-clip-refill"],
  "sarasa-dry": ["sarasa-dry-refill"],
  "dr-grip-gspec": ["drgrip-refill"],
  "energel-multicolor": ["energel-refill"],
  "zebra-lightwrite-alpha": ["lightwrite-4c-refill"],
  "kurutoga-dive": ["pentel-ain-leads"],
  "kurutoga-metal": ["pentel-ain-leads"],
  "kuru-toga-ks": ["pentel-ain-leads"],
  "kurutoga-advance": ["pentel-ain-leads"],
  "pilot-airstep": ["pentel-ain-leads"],
  "pentel-smash": ["pentel-ain-leads"],
  "graphgear-1000": ["pentel-ain-leads"],
  "alpha-gel-switch": ["pentel-ain-leads"],
  "mono-graph-clear": ["pentel-ain-leads"],
  "mono-graph-fine": ["pentel-ain-leads"],
  "kokuyo-campus-pencil-sharp": ["pentel-ain-leads"],
  orenznero: ["pentel-ain-leads"],
  "drgrip-play-balance": ["pentel-ain-leads"],
};

const compatibleSupplyNotExpected = new Set([
  "pentel-art-multi-8",
]);

products.forEach((product) => {
  product.relatedIds = (product.relatedIds || [])
    .map((relatedId) => groupProductReplacements[relatedId] || relatedId)
    .filter((relatedId, index, relatedIds) => relatedId !== product.id && relatedIds.indexOf(relatedId) === index && getProduct(relatedId))
    .slice(0, 3);
});

const categories = [
  {
    key: "all",
    labelEs: "Todo",
    labelJa: "すべて",
    titleEs: "Todo",
    titleJa: "すべて",
    descriptionEs: "Ver todos los destacados.",
    descriptionJa: "注目商品をすべて表示。",
    position: "0%",
  },
  {
    key: "ballpoint",
    labelEs: "Bolígrafos",
    labelJa: "ボールペン",
    titleEs: "Bolígrafos",
    titleJa: "ボールペン",
    descriptionEs: "Gel, rollerball y multifuncionales para escritura diaria.",
    descriptionJa: "ゲル、ローラーボール、多機能ペン。",
    position: "0%",
    image: "https://www.mpuni.co.jp/products/feature_images/main/ballpoint_pens/thm_uniballone.png",
  },
  {
    key: "refills",
    labelEs: "Recambios",
    labelJa: "替え芯",
    titleEs: "Recambios",
    titleJa: "替え芯",
    descriptionEs: "Refills para mantener tus plumas favoritas en uso.",
    descriptionJa: "お気に入りのペンを長く使うための替え芯。",
    position: "25%",
    image: "https://www.mpuni.co.jp/products/images/products/SXR-L-7.jpg",
  },
  {
    key: "mechanical",
    labelEs: "Lápices mecánicos",
    labelJa: "シャープペン",
    titleEs: "Lápices mecánicos",
    titleJa: "シャープペン",
    descriptionEs: "Modelos premium y de estudio con mecanismos japoneses.",
    descriptionJa: "日本の機構を楽しめる上位モデルと学習用モデル。",
    position: "50%",
    image: "https://www.mpuni.co.jp/news/images/news/ed954fa14215beabe02a0d83af8c1e3b97353e94.jpg",
  },
  {
    key: "leads",
    labelEs: "Minas",
    labelJa: "シャー芯",
    titleEs: "Minas",
    titleJa: "シャー芯",
    descriptionEs: "Grosores y durezas para dibujo, estudio y notas.",
    descriptionJa: "製図、勉強、ノートに合わせた太さと濃さ。",
    position: "75%",
    image: "https://www.pentel.co.jp/images/products/lead_pentel_ain_mainvisual_pc_1.png",
  },
  {
    key: "accessories",
    labelEs: "Accesorios",
    labelJa: "その他文具",
    titleEs: "Accesorios",
    titleJa: "その他文具",
    descriptionEs: "Gomas, pegamento, estuches y pequenos utiles.",
    descriptionJa: "消しゴム、のり、ペンケースなどの小物。",
    position: "100%",
    image: "https://www.olfa.co.jp/wordpress/wp-content/uploads/1501648948PRC-3.jpg",
  },
];

const inventoryPhotos = [
  {
    productId: "jetstream-lite",
    image: "https://www.mpuni.co.jp/products/images/products/313882000.jpg",
    titleEs: "JETSTREAM Lite touch ink",
    titleJa: "ジェットストリーム Lite touch ink",
    descriptionEs: "Imagen de referencia del modelo JETSTREAM.",
    descriptionJa: "JETSTREAMモデルの外部参考画像。",
    priceClp: "3.500 CLP",
  },
  {
    productId: "kurutoga-dive",
    image: "https://baseec-img-mng.akamaized.net/images/item/origin/021379cc1be855e3056c57e17d7d3b00.jpg?im=Resize%2Cwidth%3D1280%2Ctype%3Dnormal&imformat=generic&q=90",
    titleEs: "KURUTOGA DIVE",
    titleJa: "クルトガ ダイブ",
    descriptionEs: "Imagen externa del lápiz mecánico premium.",
    descriptionJa: "プレミアムシャープペンの外部参考画像。",
    priceClp: "100.000 CLP",
  },
  {
    productId: "kurutoga-metal",
    image: "https://www.mpuni.co.jp/news/images/news/ed954fa14215beabe02a0d83af8c1e3b97353e94.jpg",
    titleEs: "KURUTOGA Metal",
    titleJa: "クルトガ メタル",
    descriptionEs: "Referencia externa de los modelos metálicos.",
    descriptionJa: "メタルモデルの外部参考画像。",
    priceClp: "40.000-45.000 CLP",
  },
  {
    productId: "zento-signature",
    image: "https://shopping.jreast.co.jp/html/upload/save_image/shop/17456/product/4778690/image_l.jpg",
    titleEs: "ZENTO Signature",
    titleJa: "ZENTO シグニチャー",
    descriptionEs: "Referencia externa de la linea ZENTO premium.",
    descriptionJa: "ZENTO上位ラインの外部参考画像。",
    priceClp: "70.000-80.000 CLP",
  },
  {
    productId: "zento-flow",
    image: "https://www.mpuni.co.jp/products/images/products/thm_uniballzento_zf.png",
    titleEs: "ZENTO Flow",
    titleJa: "ZENTO Flow",
    descriptionEs: "Referencia externa del rollerball ZENTO.",
    descriptionJa: "ZENTOローラーボールの外部参考画像。",
    priceClp: "13.000 CLP",
  },
  {
    productId: "jetstream-4and1",
    image: "https://www.mpuni.co.jp/products/images/products/313882000.jpg",
    titleEs: "JETSTREAM 4&1",
    titleJa: "ジェットストリーム 4&1",
    descriptionEs: "Referencia externa del multifunción JETSTREAM.",
    descriptionJa: "JETSTREAM多機能モデルの外部参考画像。",
    priceClp: "16.000 CLP",
  },
  {
    productId: "uniball-one-p-standard",
    image: "https://www.mpuni.co.jp/products/images/products/7bd507720d7e9e9e14f24792291f164d1957b642.jpg",
    titleEs: "uni-ball one P standard",
    titleJa: "ユニボール ワン P 通常",
    descriptionEs: "Referencia externa del modelo compacto one P.",
    descriptionJa: "コンパクトなone Pの外部参考画像。",
    priceClp: "6.900 CLP",
  },
  {
    productId: "kuru-toga-ks",
    image: "https://www.mpuni.co.jp/products/images/products/3eb0c5b8e64e7c7f42cee11e63c979eb51257b43.png",
    titleEs: "KURUTOGA KS",
    titleJa: "クルトガ KS",
    descriptionEs: "Referencia externa del KURUTOGA para estudio.",
    descriptionJa: "学習向けクルトガの外部参考画像。",
    priceClp: "8.900 CLP",
  },
  {
    productId: "orenznero",
    image: "https://www.pentel.co.jp/images/products/ORENZNERO_mainvisual_pc-1.jpg",
    titleEs: "Pentel ORENZNERO",
    titleJa: "ぺんてる オレンズネロ",
    descriptionEs: "Referencia externa del lápiz mecánico premium Pentel.",
    descriptionJa: "ぺんてる上位シャープの外部参考画像。",
    priceClp: "40.000 CLP",
  },
  {
    productId: "uniball-one",
    image: "https://www.mpuni.co.jp/products/feature_images/main/ballpoint_pens/thm_uniballone.png",
    titleEs: "uni-ball one",
    titleJa: "ユニボール ワン",
    descriptionEs: "Referencia externa para la familia uni-ball one.",
    descriptionJa: "uni-ball oneシリーズの外部参考画像。",
    priceClp: "2.000-6.900 CLP",
  },
  {
    productId: "juice-up",
    image: "https://www.pilot.co.jp/press_release/d02899159a77371e1ce39cbdb1cbbe68cc20a235.jpg",
    titleEs: "Juice up",
    titleJa: "ジュースアップ",
    descriptionEs: "Referencia externa de la pluma gel Juice up.",
    descriptionJa: "Juice upゲルペンの外部参考画像。",
    priceClp: "3.500 CLP",
  },
  {
    productId: "sarasa-clip",
    image: "https://www.zebra.co.jp/global/images/sarasa.png",
    titleEs: "SARASA CLIP",
    titleJa: "サラサクリップ",
    descriptionEs: "Referencia externa del gel clásico de Zebra.",
    descriptionJa: "Zebra定番ゲルペンの外部参考画像。",
    priceClp: "2.000 CLP",
  },
  {
    productId: "pentel-art-multi-8",
    image: "https://www.pentel.co.jp/images/products/artmulti8_lineup_2.png",
    titleEs: "Pentel Art Multi 8",
    titleJa: "ぺんてる アートマルチ8",
    descriptionEs: "Referencia externa del portaminas artístico multicolor.",
    descriptionJa: "多色アート文具の外部参考画像。",
    priceClp: "37.000 CLP",
  },
  {
    productId: "jetstream-refill",
    image: "https://www.mpuni.co.jp/products/images/products/SXR-L-7.jpg",
    titleEs: "Recambios JETSTREAM",
    titleJa: "ジェットストリーム替え芯",
    descriptionEs: "Referencia externa de recambios JETSTREAM.",
    descriptionJa: "JETSTREAM替え芯の外部参考画像。",
    priceClp: "2.000 CLP",
  },
  {
    productId: "pentel-ain-leads",
    image: "https://www.pentel.co.jp/images/products/lead_pentel_ain_mainvisual_pc_1.png",
    titleEs: "Minas Pentel Ain",
    titleJa: "Pentel Ain シャー芯",
    descriptionEs: "Referencia externa de minas Pentel Ain.",
    descriptionJa: "Pentel Ainシャー芯の外部参考画像。",
    priceClp: "2.500 CLP",
  },
  {
    productId: "campus-pencil-sharp-basic",
    image: "https://www.kokuyo.com/system/files/SET44292.jpg",
    titleEs: "KOKUYO enpitsu sharp",
    titleJa: "KOKUYO 鉛筆シャープ",
    descriptionEs: "Referencia externa de lápices mecánicos de uso diario.",
    descriptionJa: "日常使いシャープペンの外部参考画像。",
    priceClp: "3.000 CLP",
  },
  {
    productId: "olfa-perforation-cutter",
    image: "https://www.olfa.co.jp/wordpress/wp-content/uploads/1501648948PRC-3.jpg",
    titleEs: "OLFA perforation cutter",
    titleJa: "OLFA ミシン目カッター",
    descriptionEs: "Referencia externa del cortador de perforación OLFA.",
    descriptionJa: "OLFAミシン目カッターの外部参考画像。",
    priceClp: "19.900 CLP",
  },
];

const copy = {
  es: {
    brandSubtitle: "Papelería japonesa seleccionada",
    announcementText: "New Japanese stationery for Chile - consulta y reserva por mensaje.",
    navAbout: "Nosotros",
    navGallery: "Productos",
    navCatalog: "Productos",
    navCategories: "Categorías",
    navBrands: "Marcas",
    navContact: "Contacto",
    menuLabel: "Categorías",
    menuTitle: "Comprar por categoría",
    menuText: "Elige una categoría para ver productos filtrados.",
    menuAll: "Todos los productos",
    menuClose: "Cerrar menú",
    heroEyebrow: "Desde Japón para escribir mejor en Chile",
    heroTitle: "Kami to Pen",
    heroLede:
      "Bolígrafos, lápices mecánicos y recambios japoneses elegidos por calidad, precisión y disponibilidad local.",
    heroCollectionCta: "Ver productos",
    ctaWhatsapp: "WhatsApp準備中",
    ctaInstagram: "Instagram準備中",
    statSkusLabel: "Lineas seleccionadas",
    statCategoriesLabel: "Categorías",
    statCurrencyLabel: "Precios",
    introLineOne: "Productos seleccionados con precios de venta en CLP.",
    introLineTwo: "Para colores, punta, disponibilidad exacta o packs, consulta por mensaje.",
    storeRailEyebrow: "Comprar por categoría",
    storeRailTitle: "Elige tu próxima pieza.",
    storeRailText:
      "Explora por familia y compara productos con tarjetas claras, como en una tienda online.",
    dashboardEyebrow: "Selección rápida",
    dashboardTitle: "Empieza por lo más visto.",
    dashboardText:
      "Atajos para ver premium, uso diario, recambios y básicos sin perderte en toda la lista.",
    brandRailEyebrow: "Comprar por marca",
    brandRailTitle: "Compara por marca.",
    brandRailText:
      "Si ya sabes qué fabricante te gusta, entra directo a su selección y compara modelos.",
    dashboardContinueTitle: "Continúa tu selección",
    dashboardContinueText: "Tus favoritos y productos agregados aparecen primero. Si no hay nada guardado, mostramos piezas recomendadas.",
    dashboardPremiumTitle: "Piezas especiales",
    dashboardPremiumText: "Modelos para quienes buscan acabado, rareza o una sensación de escritura más cuidada.",
    dashboardDailyTitle: "Para usar todos los días",
    dashboardDailyText: "Opciones fáciles de comprar para estudio, trabajo, agenda y notas rápidas.",
    dashboardRefillTitle: "Recambios y mantenimiento",
    dashboardRefillText: "Repuestos para seguir usando tus cuerpos favoritos y confirmar compatibilidad por mensaje.",
    dashboardBrowse: "Ver selección",
    shelfResultsTitle: "Resultados seleccionados",
    shelfCountLabel: "{count} productos",
    aboutEyebrow: "Nosotros",
    aboutTitle: "Papelería japonesa seleccionada para Chile",
    aboutParagraphOne: "KAMI TO PEN es una pequeña tienda selecta que trae papelería japonesa a Chile.",
    aboutParagraphTwo:
      "No elegimos productos solo porque sirven para escribir, sino porque hacen que escribir, estudiar, trabajar o crear se sienta mejor.",
    aboutParagraphThree:
      "Seleccionamos bolígrafos, cuadernos, gomas y artículos de papelería japoneses por su calidad, diseño y experiencia de uso.",
    aboutBelief: "Creemos que con buen papel y un buen lápiz, las ideas se sienten mejor.",
    galleryEyebrow: "Productos",
    galleryTitle: "Imágenes de productos",
    galleryText:
      "Las fotos se cargan desde páginas externas de referencia. Colores y combinaciones se confirman por mensaje.",
    sourceNote: "Fuentes de imagen:",
    catalogEyebrow: "Productos",
    catalogTitle: "Papelería japonesa para elegir",
    catalogText:
      "Una primera seleccion de productos con alta demanda: ediciones premium, modelos de uso diario y recambios compatibles.",
    searchLabel: "Buscar",
    searchPlaceholder: "Busca ZENTO, KURUTOGA, Pentel, refills...",
    sortLabel: "Ordenar",
    sortFeatured: "Recomendados",
    sortPriceLow: "Precio: menor a mayor",
    sortPriceHigh: "Precio: mayor a menor",
    sortNewest: "Más nuevos",
    resetFilters: "Limpiar filtros",
    resultCount: "{count} productos encontrados",
    noResultsTitle: "No encontramos productos",
    noResultsText: "Prueba otra palabra, cambia la categoría o limpia los filtros.",
    tagAll: "Todos los tags",
    tagPremium: "Premium",
    tagBudget: "Bajo precio",
    tagRefills: "Recambios",
    tagStudy: "Estudio",
    tagLimited: "Limitados",
    brandFilterLabel: "Comprar por marca",
    brandAll: "Todas las marcas",
    inkTypeLabel: "Tipo de bolígrafo",
    inkTypeAll: "Todos los bolígrafos",
    inkTypeGel: "Gel",
    inkTypeOil: "Tinta aceite",
    inkTypeWater: "Tinta líquida / roller",
    inkTypeMulti: "Multicolor / multifunción",
    categoriesEyebrow: "Categorías",
    categoriesTitle: "Cinco grupos para armar tu set",
    categoriesText:
      "La seleccion cubre escritura diaria, piezas premium, mantenimiento y accesorios pequenos.",
    faqEyebrow: "Antes de comprar",
    faqTitle: "Compra con información clara.",
    faqText:
      "Kami to Pen todavía confirma cada pedido por mensaje para evitar errores de color, punta o entrega.",
    faqStockQuestion: "¿El stock está confirmado?",
    faqStockAnswer:
      "La selección está preparada para consulta, pero color, punta y entrega se confirman antes de cerrar el pedido.",
    faqDeliveryQuestion: "¿Cómo se coordina la entrega?",
    faqDeliveryAnswer:
      "El punto de entrega dentro de Chile se acuerda por mensaje según comuna y disponibilidad.",
    faqPaymentQuestion: "¿Se paga dentro del sitio?",
    faqPaymentAnswer:
      "Por ahora no hay cobro online. El carrito prepara el pedido y luego se confirma por mensaje.",
    faqCompatibilityQuestion: "¿Los refills son compatibles?",
    faqCompatibilityAnswer:
      "Cuando un bolígrafo o lápiz tiene recambio recomendado, se muestra en la página del producto y se vuelve a revisar antes de comprar.",
    contactEyebrow: "Contacto",
    contactTitle: "Consulta modelo, color y entrega",
    contactText:
      "Los enlaces definitivos se agregarán cuando el número de WhatsApp y la cuenta de Instagram estén listos.",
    contactWhatsapp: "Preparando enlace",
    contactInstagram: "Preparando perfil",
    footerNote: "Papelería japonesa seleccionada para Chile.",
    cartLabel: "Carrito",
    addToCart: "Agregar al carrito",
    addedToCart: "{name} agregado al carrito.",
    cartSummary: "{count} productos en el carrito. La compra final se coordina por mensaje.",
    cartEmpty: "El carrito está vacío.",
    cartDrawerEyebrow: "Carrito",
    cartDrawerTitle: "Tu selección",
    cartDrawerText: "Revisa cantidades y deja el pedido listo antes de pasar a confirmar.",
    cartDrawerSubtotal: "Subtotal",
    cartDrawerCheckout: "Ir al checkout",
    cartDrawerCopy: "Copiar pedido",
    cartDrawerContinue: "Seguir mirando",
    cartDrawerEmptyTitle: "Todavía no hay productos",
    cartDrawerEmptyText: "Agrega un producto y vuelve aquí para revisar cantidades.",
    cartDrawerRemove: "Quitar",
    cartDrawerQuantity: "Cantidad",
    favoriteLabel: "Favoritos",
    favoriteAdd: "Guardar en favoritos",
    favoriteSaved: "Guardado",
    favoriteAddedToast: "{name} guardado en favoritos.",
    favoriteRemovedToast: "{name} eliminado de favoritos.",
    favoriteShelfTitle: "Tus favoritos",
    favoriteShelfText: "Compra desde aquí sin volver a buscar el producto.",
    favoriteShelfEmpty: "Guarda productos para comprarlos rápido después.",
    favoriteBuyNow: "Agregar",
    favoriteView: "Ver",
    favoriteCheckout: "Ir al carrito",
    checkoutSecureTitle: "Protegemos tu información",
    checkoutEyebrow: "Checkout",
    checkoutTitle: "Revisa y confirma tu pedido",
    checkoutText:
      "Esta pantalla no cobra en línea. Ordena tu carrito y prepara un mensaje para confirmar stock, color, entrega y forma de pago.",
    checkoutAddressTitle: "Datos de entrega",
    checkoutAddressLine: "Chile - comuna y punto de entrega por confirmar",
    checkoutChange: "Cambiar",
    checkoutDeliveryInstruction: "Confirmar entrega por mensaje",
    checkoutNearbyPickup: "Consultar punto cercano de entrega",
    checkoutPaymentMethod: "Forma de pago",
    checkoutPaymentLine: "Transferencia o pago acordado por mensaje",
    checkoutPaymentBenefits: "El pago se confirma después de revisar stock, color y entrega.",
    checkoutDeliveryTitle: "Entrega y productos",
    checkoutDeliveryDeadline: "Fecha y punto se confirman antes de cerrar el pedido.",
    checkoutFastDelivery: "Entrega coordinada",
    checkoutDateDelivery: "Reservar para otra fecha",
    checkoutFree: "Por definir",
    checkoutItemsTitle: "Productos en el pedido",
    checkoutSummaryTitle: "Confirmar pedido",
    checkoutSubtotal: "Subtotal",
    checkoutDelivery: "Entrega",
    checkoutDeliveryValue: "Por coordinar",
    checkoutTotal: "Total",
    checkoutPaymentTitle: "Pago",
    checkoutPaymentText:
      "El pago se acuerda después de revisar el pedido. Por ahora Kami to Pen no procesa pagos dentro del sitio.",
    checkoutMessageTitle: "Mensaje de compra",
    checkoutCopy: "Confirmar pedido",
    checkoutOrderLegal:
      "Al confirmar, se genera un mensaje de compra. La reserva queda cerrada solo después de confirmar stock, entrega y pago por mensaje.",
    checkoutContinue: "Seguir comprando",
    checkoutEmptyTitle: "Tu carrito está vacío",
    checkoutEmptyText: "Agrega productos desde la lista para preparar tu pedido.",
    checkoutRemove: "Quitar",
    checkoutUnitPrice: "Precio unitario",
    checkoutQuantity: "Cantidad",
    checkoutCount: "{count} productos",
    checkoutCopySuccess: "Pedido copiado.",
    priceLabel: "Precio venta",
    askProduct: "Consultar y reservar",
    askFromPhoto: "Consultar este producto",
    viewDetail: "Ver detalle",
    availabilityByMessage: "Disponibilidad por mensaje",
    stockInline: "Stock por mensaje",
    stockInlineDetail: "Stock, color y entrega se confirman por mensaje",
    chooseOptions: "Choose options",
    reviewCount: "reseñas",
    reviewStatus: "Reviews soon",
    viewReviews: "View reviews",
    reviewsTitle: "Customer reviews",
    reviewsEmptyTitle: "Reviews are being collected",
    reviewsEmptyText:
      "Real customer comments will appear here after the first deliveries. For now, you can ask about availability, color and delivery by message.",
    reviewsNoPublished: "No published reviews yet",
    viewCollection: "View collection",
    voiceLabel: "Resumen rápido",
    detailVoiceTitle: "Resumen del producto",
    backToCatalog: "Volver al catálogo",
    detailEyebrow: "Detalle del producto",
    detailFeatures: "Características",
    detailDescription: "Descripción",
    detailSpecs: "Detalles",
    detailOptions: "Opciones a confirmar",
    detailRecommended: "Recomendado para",
    detailSellingPoints: "Por qué elegirlo",
    detailCareNote: "Antes de comprar",
    detailRelated: "También te puede interesar",
    compatibleRefillEyebrow: "Recambio compatible",
    compatibleRefillTitle: "Este es el refill para este bolígrafo",
    compatibleRefillText:
      "Agrega el cuerpo y su refill recomendado juntos. Punta, tinta y compatibilidad final se revisan por mensaje.",
    compatibleRefillCheck: "Compatibilidad se confirma antes de cerrar el pedido.",
    compatibleRefillOptionsTitle: "Elige el refill",
    compatibleRefillAdd: "Agregar bolígrafo + refill",
    compatibleRefillSelection: "Refill recomendado para {base}",
    compatibleLeadEyebrow: "Minas compatibles",
    compatibleLeadTitle: "Minas recomendadas para este lápiz mecánico",
    compatibleLeadText:
      "Agrega el lápiz mecánico y las minas recomendadas juntos. Grosor, dureza y compatibilidad final se revisan por mensaje.",
    compatibleLeadCheck: "El grosor de la mina se confirma antes de cerrar el pedido.",
    compatibleLeadOptionsTitle: "Elige las minas",
    compatibleLeadAdd: "Agregar lápiz + minas",
    compatibleLeadSelection: "Minas recomendadas para {base}",
    refillBundleAdded: "{base} y {refill} agregados al carrito.",
    detailContactNote: "Color, punta, disponibilidad y entrega se confirman por mensaje.",
    detailGuideTitle: "Antes de cerrar tu pedido",
    detailGuideStockTitle: "Confirmación final",
    detailGuideStockText: "Stock, color y punta se revisan por mensaje para que recibas exactamente lo que quieres.",
    detailGuideDeliveryTitle: "Entrega en Chile",
    detailGuideDeliveryText: "El punto y fecha de entrega se coordinan después de preparar tu selección.",
    detailGuideRefillTitle: "Recambios",
    detailGuideRefillText: "Si hay refill o mina compatible, puedes agregarlo desde esta misma página.",
    detailReviews: "reseñas",
    detailSize: "Punta / tamaño",
    detailColor: "Color",
    detailQuantity: "Cantidad",
    detailTax: "Precio de venta en CLP. Entrega se coordina por mensaje.",
    detailAskMain: "Consultar disponibilidad",
    breadcrumbHome: "Inicio",
    inquiryEyebrow: "Consulta",
    inquiryTitle: "Mensaje listo para enviar",
    inquiryHelp: "Copia este mensaje y envíalo cuando el canal esté listo.",
    copyInquiry: "Copiar mensaje",
    openWhatsapp: "Abrir WhatsApp",
    openInstagram: "Abrir Instagram",
    copySuccess: "Mensaje copiado.",
    copyFallback: "No se pudo copiar automáticamente. Selecciona el texto manualmente.",
    inquiryConfigNote:
      "Cuando el número de WhatsApp o Instagram estén listos, agrega los datos en contactConfig dentro de script.js.",
    toast: "El enlace de {channel} se agregará cuando esté disponible.",
  },
  ja: {
    brandSubtitle: "チリ向け日本文具セレクト",
    announcementText: "チリ向け日本文具の新入荷 - メッセージで在庫確認・取り置き相談。",
    navAbout: "私たち",
    navGallery: "商品",
    navCatalog: "商品",
    navCategories: "カテゴリ",
    navBrands: "ブランド",
    navContact: "問い合わせ",
    menuLabel: "メニュー",
    menuTitle: "カテゴリから探す",
    menuText: "カテゴリを選ぶと、商品一覧を絞り込めます。",
    menuAll: "すべての商品",
    menuClose: "メニューを閉じる",
    heroEyebrow: "日本から、チリの筆記時間へ",
    heroTitle: "Kami to Pen",
    heroLede:
      "品質、書き心地、現地での買いやすさを基準に選んだ日本のボールペン、シャープペン、替え芯。",
    heroCollectionCta: "商品を見る",
    ctaWhatsapp: "WhatsApp準備中",
    ctaInstagram: "Instagram準備中",
    statSkusLabel: "注目ライン",
    statCategoriesLabel: "カテゴリ",
    statCurrencyLabel: "価格表示",
    introLineOne: "商品一覧では、選びやすい文房具とCLPの販売価格だけを掲載します。",
    introLineTwo: "色、芯径、正確な在庫、セット販売はメッセージで確認できます。",
    storeRailEyebrow: "カテゴリから探す",
    storeRailTitle: "次の一本を見つける。",
    storeRailText:
      "カテゴリごとに、大きなカードで商品を比べられます。",
    dashboardEyebrow: "すぐ選べる入口",
    dashboardTitle: "今見てほしい商品。",
    dashboardText:
      "プレミアム、日常使い、替え芯、定番小物を見やすく分けました。",
    brandRailEyebrow: "ブランドから探す",
    brandRailTitle: "ブランドごとに比べる。",
    brandRailText:
      "uni、PILOT、Pentelなど、メーカー別に商品をまとめて見られます。",
    dashboardContinueTitle: "気になる商品から続ける",
    dashboardContinueText: "お気に入りやカートの商品を優先表示します。未保存の場合はおすすめ商品を表示します。",
    dashboardPremiumTitle: "特別感のある一本",
    dashboardPremiumText: "書き心地、質感、希少性を重視した上位モデル。",
    dashboardDailyTitle: "毎日使いやすい定番",
    dashboardDailyText: "勉強、仕事、手帳、メモに使いやすい買いやすい商品。",
    dashboardRefillTitle: "替え芯・メンテナンス",
    dashboardRefillText: "お気に入りの本体を使い続けるための対応替え芯。",
    dashboardBrowse: "この棚を見る",
    shelfResultsTitle: "選択中の商品",
    shelfCountLabel: "{count}件",
    aboutEyebrow: "私たちについて",
    aboutTitle: "日本文具をチリへ届ける小さな店",
    aboutParagraphOne: "KAMI TO PENは、日本の文房具をチリに届ける小さなセレクトショップです。",
    aboutParagraphTwo:
      "ただ書ければいいペンではなく、書き心地、デザイン、使う時間の気持ちよさまで大切にして選んでいます。",
    aboutParagraphThree:
      "日本で見つけた上質なペン、ノート、消しゴム、文房具を、チリの日常に少しずつ届けていきます。",
    aboutBelief: "紙とペンがあるだけで、考える時間は少し豊かになる。それが、KAMI TO PENの考え方です。",
    galleryEyebrow: "商品",
    galleryTitle: "商品イメージ",
    galleryText:
      "商品の雰囲気や色の候補を見ながら、気になるモデルを選べます。色や組み合わせはメッセージで確認できます。",
    sourceNote: "画像出典:",
    catalogEyebrow: "商品",
    catalogTitle: "選びやすい日本文具",
    catalogText:
      "プレミアムモデル、日常使いの定番、対応替え芯を中心に、販売につながりやすい商品を厳選しています。",
    searchLabel: "検索",
    searchPlaceholder: "ZENTO、クルトガ、Pentel、替え芯など",
    sortLabel: "並び替え",
    sortFeatured: "おすすめ順",
    sortPriceLow: "価格の安い順",
    sortPriceHigh: "価格の高い順",
    sortNewest: "新着順",
    resetFilters: "絞り込みをリセット",
    resultCount: "{count}件の商品",
    noResultsTitle: "該当商品がありません",
    noResultsText: "別のキーワード、カテゴリ変更、またはリセットを試してください。",
    tagAll: "すべてのタグ",
    tagPremium: "プレミアム",
    tagBudget: "低価格",
    tagRefills: "替え芯",
    tagStudy: "学習向け",
    tagLimited: "限定",
    brandFilterLabel: "ブランドで探す",
    brandAll: "すべてのブランド",
    inkTypeLabel: "ボールペンの種類",
    inkTypeAll: "すべて",
    inkTypeGel: "ゲルボールペン",
    inkTypeOil: "油性ボールペン",
    inkTypeWater: "水性・ローラーボール",
    inkTypeMulti: "多色・多機能",
    categoriesEyebrow: "カテゴリ",
    categoriesTitle: "用途で選べる5カテゴリ",
    categoriesText:
      "日常筆記、上位モデル、メンテナンス用替え芯、机まわりの小物まで整理しています。",
    faqEyebrow: "購入前に",
    faqTitle: "購入前に確認したいこと。",
    faqText:
      "Kami to Penでは、色、芯径、受け渡し方法の間違いを避けるため、最後はメッセージで確認します。",
    faqStockQuestion: "在庫は確定していますか？",
    faqStockAnswer:
      "サイト上の商品は相談できる商品です。色、芯径、受け渡し方法は注文確定前にメッセージで確認します。",
    faqDeliveryQuestion: "受け渡しはどう決めますか？",
    faqDeliveryAnswer:
      "チリ国内の受け渡し場所と日時は、コミューンや都合に合わせてメッセージで調整します。",
    faqPaymentQuestion: "サイト内で支払いできますか？",
    faqPaymentAnswer:
      "今はオンライン決済はありません。カートで注文内容を作り、メッセージで確認してから支払い方法を決めます。",
    faqCompatibilityQuestion: "替え芯の互換性は大丈夫ですか？",
    faqCompatibilityAnswer:
      "対応替え芯やシャー芯がある商品は商品ページに表示し、購入前にもう一度確認します。",
    contactEyebrow: "問い合わせ",
    contactTitle: "モデル・色・受け渡しを相談",
    contactText:
      "WhatsApp番号とInstagramアカウントが確定したら、ここに正式リンクを追加します。",
    contactWhatsapp: "リンク準備中",
    contactInstagram: "プロフィール準備中",
    footerNote: "チリ向け日本文具セレクト。",
    cartLabel: "カート",
    addToCart: "カートに入れる",
    addedToCart: "{name}をカートに入れました。",
    cartSummary: "カートに{count}点入っています。購入前の確認はメッセージで行います。",
    cartEmpty: "カートは空です。",
    cartDrawerEyebrow: "カート",
    cartDrawerTitle: "選択中の商品",
    cartDrawerText: "数量を確認して、注文内容を整えてから確認画面へ進めます。",
    cartDrawerSubtotal: "小計",
    cartDrawerCheckout: "確認画面へ",
    cartDrawerCopy: "注文文をコピー",
    cartDrawerContinue: "買い物を続ける",
    cartDrawerEmptyTitle: "まだ商品が入っていません",
    cartDrawerEmptyText: "気になる商品をカートに入れると、ここで数量を確認できます。",
    cartDrawerRemove: "削除",
    cartDrawerQuantity: "数量",
    favoriteLabel: "お気に入り",
    favoriteAdd: "お気に入りに追加",
    favoriteSaved: "お気に入り済み",
    favoriteAddedToast: "{name}をお気に入りに追加しました。",
    favoriteRemovedToast: "{name}をお気に入りから外しました。",
    favoriteShelfTitle: "お気に入り",
    favoriteShelfText: "探し直さずに、ここからすぐカートに入れられます。",
    favoriteShelfEmpty: "気になる商品を保存しておくと、あとですぐ買えます。",
    favoriteBuyNow: "追加",
    favoriteView: "見る",
    favoriteCheckout: "カートへ",
    checkoutSecureTitle: "お客様情報を保護しています",
    checkoutEyebrow: "Checkout",
    checkoutTitle: "注文内容を確認して確定",
    checkoutText:
      "この画面ではオンライン決済は行いません。カート内容を整理し、在庫・色・受け渡し・支払い方法を確認するメッセージを作ります。",
    checkoutAddressTitle: "お届け先",
    checkoutAddressLine: "チリ - 受け渡しエリアと場所は確認中",
    checkoutChange: "変更",
    checkoutDeliveryInstruction: "配送・受け渡しをメッセージで確認",
    checkoutNearbyPickup: "近くの受け渡し場所を相談",
    checkoutPaymentMethod: "お支払い方法",
    checkoutPaymentLine: "銀行振込またはメッセージで相談",
    checkoutPaymentBenefits: "在庫、色、受け渡し方法を確認してから支払いを確定します。",
    checkoutDeliveryTitle: "到着予定と商品",
    checkoutDeliveryDeadline: "日時と場所は注文確定前にメッセージで確認します。",
    checkoutFastDelivery: "受け渡しを調整",
    checkoutDateDelivery: "別の日で予約",
    checkoutFree: "要確認",
    checkoutItemsTitle: "注文の商品",
    checkoutSummaryTitle: "注文を確定",
    checkoutSubtotal: "商品の小計",
    checkoutDelivery: "受け渡し",
    checkoutDeliveryValue: "要相談",
    checkoutTotal: "ご請求額",
    checkoutPaymentTitle: "支払い",
    checkoutPaymentText:
      "支払いは注文内容を確認してから相談します。現時点では、サイト内でカード決済やオンライン決済は行いません。",
    checkoutMessageTitle: "注文メッセージ",
    checkoutCopy: "注文を確定する",
    checkoutOrderLegal:
      "ボタンを押すと注文メッセージを作成します。取り置きは、在庫・受け渡し・支払い方法をメッセージで確認してから確定します。",
    checkoutContinue: "買い物を続ける",
    checkoutEmptyTitle: "カートは空です",
    checkoutEmptyText: "商品一覧から商品を追加すると、ここで注文内容を確認できます。",
    checkoutRemove: "削除",
    checkoutUnitPrice: "単価",
    checkoutQuantity: "数量",
    checkoutCount: "{count}点",
    checkoutCopySuccess: "注文文をコピーしました。",
    priceLabel: "販売価格",
    askProduct: "在庫確認・取り置き相談",
    askFromPhoto: "この商品を問い合わせる",
    viewDetail: "詳細を見る",
    availabilityByMessage: "在庫はメッセージで確認",
    stockInline: "在庫確認OK",
    stockInlineDetail: "在庫・色・受け渡しはメッセージで確認",
    chooseOptions: "選択して相談",
    reviewCount: "レビュー",
    reviewStatus: "レビュー準備中",
    viewReviews: "レビューを見る",
    reviewsTitle: "購入者レビュー",
    reviewsEmptyTitle: "レビューを収集中です",
    reviewsEmptyText:
      "実際の購入者レビューは、受け渡し後の感想が集まり次第ここに掲載します。今はメッセージで在庫、色、受け渡し方法を確認できます。",
    reviewsNoPublished: "公開済みレビューはまだありません",
    viewCollection: "コレクションを見る",
    voiceLabel: "商品紹介",
    detailVoiceTitle: "商品のポイント",
    backToCatalog: "一覧へ戻る",
    detailEyebrow: "商品詳細",
    detailFeatures: "特徴",
    detailDescription: "説明",
    detailSpecs: "仕様",
    detailOptions: "確認できる内容",
    detailRecommended: "おすすめ用途",
    detailSellingPoints: "選ぶ理由",
    detailCareNote: "購入前の確認",
    detailRelated: "関連商品",
    compatibleRefillEyebrow: "対応替え芯",
    compatibleRefillTitle: "このボールペンの替え芯はこれです",
    compatibleRefillText:
      "本体とおすすめ替え芯を一緒にカートへ入れられます。芯径、インク色、最終的な対応は購入前に確認します。",
    compatibleRefillCheck: "対応モデルは注文前に確認します。",
    compatibleRefillOptionsTitle: "替え芯を選択",
    compatibleRefillAdd: "本体＋替え芯を追加",
    compatibleRefillSelection: "{base}用のおすすめ替え芯",
    compatibleLeadEyebrow: "対応シャー芯",
    compatibleLeadTitle: "このシャープペンに使えるシャー芯",
    compatibleLeadText:
      "シャープペン本体とおすすめシャー芯を一緒にカートへ入れられます。芯径、濃さ、最終的な対応は購入前に確認します。",
    compatibleLeadCheck: "芯径が本体に合うか注文前に確認します。",
    compatibleLeadOptionsTitle: "シャー芯を選択",
    compatibleLeadAdd: "本体＋シャー芯を追加",
    compatibleLeadSelection: "{base}用のおすすめシャー芯",
    refillBundleAdded: "{base}と{refill}をカートに入れました。",
    detailContactNote: "色、芯径、受け渡し方法はメッセージで確認できます。",
    detailGuideTitle: "購入前に確認すること",
    detailGuideStockTitle: "最終確認",
    detailGuideStockText: "色、芯径、正確な在庫をメッセージで確認してから確定します。",
    detailGuideDeliveryTitle: "チリ国内の受け渡し",
    detailGuideDeliveryText: "受け渡し場所と日時は、注文内容を見ながらメッセージで調整します。",
    detailGuideRefillTitle: "替え芯・シャー芯",
    detailGuideRefillText: "対応する替え芯やシャー芯がある場合は、このページから一緒に追加できます。",
    detailReviews: "レビュー",
    detailSize: "芯径 / サイズ",
    detailColor: "色",
    detailQuantity: "数量",
    detailTax: "CLP販売価格です。受け渡しはメッセージで調整します。",
    detailAskMain: "在庫を問い合わせる",
    breadcrumbHome: "ホーム",
    inquiryEyebrow: "問い合わせ",
    inquiryTitle: "問い合わせ文",
    inquiryHelp: "この文面をコピーして、連絡先が確定したら送れます。",
    copyInquiry: "文面をコピー",
    openWhatsapp: "WhatsAppを開く",
    openInstagram: "Instagramを開く",
    copySuccess: "問い合わせ文をコピーしました。",
    copyFallback: "自動コピーできませんでした。テキストを選択してコピーしてください。",
    inquiryConfigNote:
      "WhatsApp番号またはInstagram URLが決まったら、script.js の contactConfig に追加してください。",
    toast: "{channel} のリンクは準備でき次第追加します。",
  },
};

let currentLang = "es";
let currentCategory = "all";
let currentSearch = "";
let currentSort = "featured";
let currentTag = "all";
let currentInkType = "all";
let currentBrand = "all";

const isProductPage = document.body.dataset.page === "product";
const isCheckoutPage = document.body.dataset.page === "checkout";
const i18nNodes = document.querySelectorAll("[data-i18n]");
const i18nPlaceholderNodes = document.querySelectorAll("[data-i18n-placeholder]");
const homeSections = document.querySelectorAll("main > section");
const inventoryGrid = document.querySelector("#inventory-grid");
const catalogSearch = document.querySelector("#catalog-search");
const catalogSort = document.querySelector("#catalog-sort");
const tagFilter = document.querySelector("#tag-filter");
const brandFilter = document.querySelector("#brand-filter");
const catalogReset = document.querySelector("#catalog-reset");
const catalogResultCount = document.querySelector("#catalog-result-count");
const filterBar = document.querySelector("#filter-bar");
const inkTypeFilter = document.querySelector("#ink-type-filter");
const productGrid = document.querySelector("#product-grid");
const productDetail = document.querySelector("#product-detail");
const categoryGrid = document.querySelector("#category-grid");
const storeCategoryRail = document.querySelector("#store-category-rail");
const storeDashboardGrid = document.querySelector("#store-dashboard-grid");
const brandRail = document.querySelector("#brand-rail");
const inquiryModal = document.querySelector("#inquiry-modal");
const inquiryMessage = document.querySelector("#inquiry-message");
const copyInquiryButton = document.querySelector("#copy-inquiry");
const whatsappInquiry = document.querySelector("#whatsapp-inquiry");
const instagramInquiry = document.querySelector("#instagram-inquiry");
const toast = document.querySelector("#toast");
const year = document.querySelector("#year");
const productCountStat = document.querySelector("#product-count-stat");
const cartButtons = document.querySelectorAll("[data-cart-summary]");
const cartCountNodes = document.querySelectorAll("[data-cart-count]");
const cartDrawer = document.querySelector("#cart-drawer");
const cartDrawerItems = document.querySelector("#cart-drawer-items");
const cartDrawerSubtotal = document.querySelector("#cart-drawer-subtotal");
const cartDrawerCheckout = document.querySelector("[data-cart-drawer-checkout]");
const cartDrawerCopy = document.querySelector("[data-cart-drawer-copy]");
const checkoutItems = document.querySelector("#checkout-items");
const checkoutCount = document.querySelector("#checkout-count");
const checkoutSubtotal = document.querySelector("#checkout-subtotal");
const checkoutTotal = document.querySelector("#checkout-total");
const checkoutMessage = document.querySelector("#checkout-message");
const checkoutCopyButton = document.querySelector("#checkout-copy");
const checkoutWhatsapp = document.querySelector("#checkout-whatsapp");
const checkoutInstagram = document.querySelector("#checkout-instagram");
const menuToggle = document.querySelector("[data-menu-toggle]");
const productsMenuTriggers = document.querySelectorAll("[data-products-menu]");
const categoriesMenuTriggers = document.querySelectorAll("[data-categories-menu]");
const heroSlideshow = document.querySelector("[data-hero-slideshow]");
const heroSlideGrid = document.querySelector("[data-hero-slide-grid]");
const heroDots = document.querySelector("[data-hero-dots]");

let activeInquiryProductId = "";
let activeInquiryMessage = "";
let activeProductId = "";
let lastFocusedElement = null;
let cartItems = loadCart();
let cartSelections = loadCartSelections();
let cartPriceOverrides = loadCartPriceOverrides();
let favoriteItems = loadFavorites();
let activeHeroIndex = 0;
let heroTimer = null;

const catalogTags = [
  { key: "all", labelKey: "tagAll" },
  { key: "premium", labelKey: "tagPremium" },
  { key: "budget", labelKey: "tagBudget" },
  { key: "refills", labelKey: "tagRefills" },
  { key: "study", labelKey: "tagStudy" },
  { key: "limited", labelKey: "tagLimited" },
];

const inkTypeFilters = [
  { key: "all", labelKey: "inkTypeAll" },
  { key: "gel", labelKey: "inkTypeGel" },
  { key: "oil", labelKey: "inkTypeOil" },
  { key: "water", labelKey: "inkTypeWater" },
  { key: "multi", labelKey: "inkTypeMulti" },
];

const catalogBrands = [
  { key: "all", labelKey: "brandAll" },
  { key: "uni", labelEs: "uni", labelJa: "uni" },
  { key: "pilot", labelEs: "PILOT", labelJa: "PILOT" },
  { key: "pentel", labelEs: "Pentel", labelJa: "Pentel" },
  { key: "zebra", labelEs: "Zebra", labelJa: "Zebra" },
  { key: "kokuyo", labelEs: "KOKUYO", labelJa: "KOKUYO" },
  { key: "tombow", labelEs: "Tombow", labelJa: "Tombow" },
  { key: "plus", labelEs: "PLUS", labelJa: "PLUS" },
  { key: "olfa", labelEs: "OLFA", labelJa: "OLFA" },
  { key: "sun-star", labelEs: "Sun-Star", labelJa: "Sun-Star" },
];

const heroSlideshowIds = [
  "kurutoga-dive",
  "zento-signature",
  "jetstream-lite",
  "uniball-one",
  "kurutoga-metal",
  "pentel-ain-leads",
  "graphgear-1000",
  "mono-graph-clear",
];

function t(key) {
  return copy[currentLang][key] || copy.es[key] || key;
}

function categoryLabel(key) {
  const category = categories.find((item) => item.key === key);
  if (!category) return key;
  return currentLang === "ja" ? category.labelJa : category.labelEs;
}

function brandLabel(key) {
  const brand = catalogBrands.find((item) => item.key === key);
  if (!brand) return key;
  if (brand.labelKey) return t(brand.labelKey);
  return currentLang === "ja" ? brand.labelJa : brand.labelEs;
}

function getProduct(productId) {
  const resolvedProductId = productAliasReplacements[productId] || productId;
  return products.find((product) => product.id === resolvedProductId);
}

function getRawProduct(productId) {
  return products.find((product) => product.id === productId);
}

function canonicalProductId(productId) {
  return productAliasReplacements[productId] || productId;
}

function productName(product) {
  return currentLang === "ja" ? product.nameJa : product.nameEs;
}

function loadCart() {
  try {
    const savedCart = JSON.parse(localStorage.getItem("kamiToPenCart") || "{}");
    return savedCart && typeof savedCart === "object" && !Array.isArray(savedCart) ? savedCart : {};
  } catch {
    return {};
  }
}

function saveCart() {
  try {
    localStorage.setItem("kamiToPenCart", JSON.stringify(cartItems));
  } catch {
    // The cart is decorative and inquiry-led, so storage failure should not block browsing.
  }
}

function loadCartSelections() {
  try {
    const savedSelections = JSON.parse(localStorage.getItem("kamiToPenCartSelections") || "{}");
    return savedSelections && typeof savedSelections === "object" && !Array.isArray(savedSelections) ? savedSelections : {};
  } catch {
    return {};
  }
}

function saveCartSelections() {
  try {
    localStorage.setItem("kamiToPenCartSelections", JSON.stringify(cartSelections));
  } catch {
    // Option notes are a convenience layer; cart quantities are still the source of truth.
  }
}

function loadCartPriceOverrides() {
  try {
    const savedPrices = JSON.parse(localStorage.getItem("kamiToPenCartPrices") || "{}");
    return savedPrices && typeof savedPrices === "object" && !Array.isArray(savedPrices) ? savedPrices : {};
  } catch {
    return {};
  }
}

function saveCartPriceOverrides() {
  try {
    localStorage.setItem("kamiToPenCartPrices", JSON.stringify(cartPriceOverrides));
  } catch {
    // Price overrides only mirror selected public prices; the catalog still has fallback pricing.
  }
}

function loadFavorites() {
  try {
    const savedFavorites = JSON.parse(localStorage.getItem("kamiToPenFavorites") || "[]");
    if (!Array.isArray(savedFavorites)) return [];
    return [...new Set(savedFavorites.filter((productId) => typeof productId === "string" && getProduct(productId)))];
  } catch {
    return [];
  }
}

function saveFavorites() {
  try {
    localStorage.setItem("kamiToPenFavorites", JSON.stringify(favoriteItems));
  } catch {
    // Favorites are a convenience layer, so browsing should continue even without storage.
  }
}

function favoriteProducts() {
  return favoriteItems.map(getProduct).filter(Boolean);
}

function isFavoriteProduct(productId) {
  return favoriteItems.includes(productId);
}

function favoriteButtonText(productId) {
  return isFavoriteProduct(productId) ? t("favoriteSaved") : t("favoriteAdd");
}

function updateFavoriteButtons(scope = document) {
  scope.querySelectorAll("[data-favorite-product-id]").forEach((button) => {
    const product = getProduct(button.dataset.favoriteProductId);
    if (!product) return;
    const isSaved = isFavoriteProduct(product.id);
    button.classList.toggle("is-favorite", isSaved);
    button.setAttribute("aria-pressed", String(isSaved));
    button.setAttribute("aria-label", `${favoriteButtonText(product.id)} ${productName(product)}`);
    const icon = button.querySelector("[data-favorite-icon]");
    if (icon) icon.textContent = isSaved ? "♥" : "♡";
    const label = button.querySelector("[data-favorite-label]");
    if (label) label.textContent = favoriteButtonText(product.id);
  });
}

function favoriteShelfMarkup() {
  const items = favoriteProducts();
  if (!items.length) {
    return `
      <section class="favorite-panel is-empty" aria-label="${t("favoriteLabel")}">
        <div>
          <h4>${t("favoriteShelfTitle")}</h4>
          <p>${t("favoriteShelfEmpty")}</p>
        </div>
      </section>
    `;
  }

  return `
    <section class="favorite-panel" aria-label="${t("favoriteLabel")}">
      <div class="favorite-panel-heading">
        <div>
          <h4>${t("favoriteShelfTitle")}</h4>
          <p>${t("favoriteShelfText")}</p>
        </div>
        <a href="checkout.html">${t("favoriteCheckout")}</a>
      </div>
      <div class="favorite-mini-list">
        ${items
          .map(
            (item) => `
              <article class="favorite-mini-card">
                <a href="${productPageUrl(item.id)}" data-detail-product-id="${item.id}" aria-label="${t("viewDetail")} ${productName(item)}">
                  <img src="${item.image}" alt="${productName(item)}" referrerpolicy="no-referrer" onerror="this.onerror=null;this.src='assets/product-image-pending.svg'">
                </a>
                <div>
                  <strong>${productName(item)}</strong>
                  <span>${item.priceClp}</span>
                </div>
                <button class="favorite-mini-buy" type="button" data-cart-product-id="${item.id}" aria-label="${t("addToCart")} ${productName(item)}">
                  <span class="cart-cta-icon" aria-hidden="true"></span>
                  <span>${t("favoriteBuyNow")}</span>
                </button>
              </article>
            `,
          )
          .join("")}
      </div>
    </section>
  `;
}

function refreshFavoriteShelves() {
  document.querySelectorAll("[data-favorite-shelf]").forEach((shelf) => {
    shelf.innerHTML = favoriteShelfMarkup();
    bindCartButtons(shelf);
    bindDetailTriggers(shelf);
  });
}

function detailPurchaseGuideMarkup(product) {
  if (!product) return "";

  return `
    <section class="detail-purchase-guide" aria-label="${t("detailGuideTitle")}">
      <h4>${t("detailGuideTitle")}</h4>
      <div class="detail-guide-grid">
        <article>
          <span>01</span>
          <strong>${t("detailGuideStockTitle")}</strong>
          <p>${t("detailGuideStockText")}</p>
        </article>
        <article>
          <span>02</span>
          <strong>${t("detailGuideRefillTitle")}</strong>
          <p>${t("detailGuideRefillText")}</p>
        </article>
        <article>
          <span>03</span>
          <strong>${t("detailGuideDeliveryTitle")}</strong>
          <p>${t("detailGuideDeliveryText")}</p>
        </article>
      </div>
    </section>
  `;
}

function toggleFavoriteProduct(productId, sourceButton = null) {
  const product = getProduct(productId);
  if (!product) return;

  const isSaved = isFavoriteProduct(product.id);
  favoriteItems = isSaved
    ? favoriteItems.filter((savedId) => savedId !== product.id)
    : [product.id, ...favoriteItems.filter((savedId) => savedId !== product.id)];
  saveFavorites();
  updateFavoriteButtons();
  refreshFavoriteShelves();
  renderStoreDashboard();
  if (sourceButton) {
    sourceButton.classList.remove("is-tapping");
    sourceButton.classList.remove("is-ink-settling");
    void sourceButton.offsetWidth;
    sourceButton.classList.add("is-tapping");
    if (!isSaved) sourceButton.classList.add("is-ink-settling");
    sourceButton.addEventListener("animationend", () => sourceButton.classList.remove("is-tapping"), { once: true });
    window.setTimeout(() => sourceButton.classList.remove("is-ink-settling"), 900);
  }
  showToast(t(isSaved ? "favoriteRemovedToast" : "favoriteAddedToast").replace("{name}", productName(product)));
}

function cartTotal() {
  return Object.values(cartItems).reduce((sum, quantity) => sum + Number(quantity || 0), 0);
}

function cartEntries() {
  return Object.entries(cartItems)
    .map(([productId, quantity]) => {
      const product = getProduct(productId);
      const safeQuantity = Math.max(0, Number(quantity) || 0);
      const priceClp = cartPriceOverrides[productId] || cartPriceOverrides[product?.id] || product?.priceClp || "";
      const unitPrice = parsePriceClp(priceClp);
      return {
        product,
        priceClp,
        quantity: safeQuantity,
        unitPrice: Number.isFinite(unitPrice) ? unitPrice : 0,
        selection: cartSelections[product?.id] || "",
      };
    })
    .filter((entry) => entry.product && entry.quantity > 0);
}

function cartSubtotal(entries = cartEntries()) {
  return entries.reduce((sum, entry) => sum + entry.unitPrice * entry.quantity, 0);
}

function formatClp(value) {
  const safeValue = Math.max(0, Number(value) || 0);
  return `${new Intl.NumberFormat("es-CL").format(safeValue)} CLP`;
}

function cartDrawerIsOpen() {
  return Boolean(cartDrawer?.classList.contains("is-open"));
}

function renderCartDrawer() {
  if (!cartDrawer || !cartDrawerItems) return;

  const entries = cartEntries();
  const subtotal = cartSubtotal(entries);
  if (cartDrawerSubtotal) cartDrawerSubtotal.textContent = formatClp(subtotal);

  if (cartDrawerCheckout) {
    const isEmpty = entries.length === 0;
    cartDrawerCheckout.classList.toggle("is-disabled", isEmpty);
    cartDrawerCheckout.setAttribute("aria-disabled", isEmpty ? "true" : "false");
    if (isEmpty) {
      cartDrawerCheckout.setAttribute("tabindex", "-1");
    } else {
      cartDrawerCheckout.removeAttribute("tabindex");
    }
  }
  if (cartDrawerCopy) {
    const isEmpty = entries.length === 0;
    cartDrawerCopy.disabled = isEmpty;
    cartDrawerCopy.classList.toggle("is-disabled", isEmpty);
  }

  if (!entries.length) {
    cartDrawerItems.innerHTML = `
      <div class="cart-drawer-empty">
        <h3>${t("cartDrawerEmptyTitle")}</h3>
        <p>${t("cartDrawerEmptyText")}</p>
      </div>
    `;
    return;
  }

  cartDrawerItems.innerHTML = entries
    .map((entry) => {
      const name = productName(entry.product);
      const selection = entry.selection ? `<span class="cart-drawer-selection">${entry.selection}</span>` : "";
      const lineTotal = formatClp(entry.unitPrice * entry.quantity);
      const image = productDisplayImage(entry.product);
      const fallbackImage = productImageErrorFallback(entry.product);
      return `
        <article class="cart-drawer-item" data-cart-drawer-item="${entry.product.id}">
          <a class="cart-drawer-image" href="${productPageUrl(entry.product.id)}">
            <img src="${image}" alt="${name}" referrerpolicy="no-referrer" onerror="this.onerror=null;this.src='${fallbackImage}'">
          </a>
          <div class="cart-drawer-item-main">
            <a class="cart-drawer-name" href="${productPageUrl(entry.product.id)}">${name}</a>
            ${selection}
            <span class="cart-drawer-unit">${entry.priceClp}</span>
          </div>
          <div class="cart-drawer-item-side">
            <strong>${lineTotal}</strong>
            <div class="cart-drawer-quantity" aria-label="${t("cartDrawerQuantity")}">
              <button type="button" data-cart-drawer-step="-1" data-cart-drawer-product="${entry.product.id}" aria-label="-">−</button>
              <span>${entry.quantity}</span>
              <button type="button" data-cart-drawer-step="1" data-cart-drawer-product="${entry.product.id}" aria-label="+">+</button>
            </div>
            <button class="cart-drawer-remove" type="button" data-cart-drawer-remove="${entry.product.id}">
              ${t("cartDrawerRemove")}
            </button>
          </div>
        </article>
      `;
    })
    .join("");
}

function updateCartDisplay() {
  const total = cartTotal();
  cartCountNodes.forEach((node) => {
    node.textContent = String(total);
    node.hidden = total === 0;
  });
  cartButtons.forEach((button) => {
    const label = total ? t("cartSummary").replace("{count}", String(total)) : t("cartEmpty");
    button.setAttribute("aria-label", label);
  });
  if (cartDrawerIsOpen()) renderCartDrawer();
}

function openCartDrawer() {
  if (!cartDrawer) return;
  closeCategoryMenu();
  renderCartDrawer();
  cartDrawer.classList.add("is-open");
  cartDrawer.setAttribute("aria-hidden", "false");
  document.body.classList.add("cart-drawer-open");
  cartDrawer.querySelector("[data-cart-drawer-close]")?.focus();
}

function closeCartDrawer() {
  if (!cartDrawer) return;
  cartDrawer.classList.remove("is-open");
  cartDrawer.setAttribute("aria-hidden", "true");
  document.body.classList.remove("cart-drawer-open");
}

function setCartItemQuantity(productId, quantity) {
  const product = getProduct(productId);
  if (!product) return;

  const safeQuantity = Math.max(0, Number(quantity) || 0);
  if (safeQuantity <= 0) {
    delete cartItems[product.id];
    delete cartSelections[product.id];
    delete cartPriceOverrides[product.id];
    saveCartSelections();
    saveCartPriceOverrides();
  } else {
    cartItems[product.id] = safeQuantity;
  }
  saveCart();
  updateCartDisplay();
  renderCartDrawer();
  renderStoreDashboard();
  if (isCheckoutPage) renderCheckout();
}

function playCartBounce(button) {
  if (!button) return;
  button.classList.remove("is-bouncing");
  void button.offsetWidth;
  button.classList.add("is-bouncing");
  button.addEventListener("animationend", () => button.classList.remove("is-bouncing"), { once: true });
}

function preferredMotionIsReduced() {
  return window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
}

function visibleCartButton() {
  return [...cartButtons].find((button) => {
    const rect = button.getBoundingClientRect();
    return rect.width > 0 && rect.height > 0;
  });
}

function rectIsVisible(rect) {
  if (!rect || !rect.width || !rect.height) return false;
  return rect.bottom > 0 && rect.right > 0 && rect.top < window.innerHeight && rect.left < window.innerWidth;
}

function imageFlySource(image, fallbackElement) {
  if (!image?.src) return null;
  if (rectIsVisible(image.getBoundingClientRect())) {
    return { element: image, src: image.src };
  }
  if (fallbackElement && rectIsVisible(fallbackElement.getBoundingClientRect())) {
    return { element: fallbackElement, src: image.src };
  }
  return { element: image, src: image.src };
}

function cartFlySource(sourceButton, product) {
  const cardImage = sourceButton?.closest(".product-card")?.querySelector(".product-image");
  const refillImage = sourceButton?.closest(".compatible-refill-card")?.querySelector("img");
  const favoriteImage = sourceButton?.closest(".favorite-mini-card")?.querySelector("img");
  const detailImage = sourceButton?.closest(".detail-layout")?.querySelector("[data-gallery-main]");
  const sourceImage = cardImage || refillImage || favoriteImage;

  const visibleImageSource = imageFlySource(sourceImage, sourceButton);
  if (visibleImageSource) return visibleImageSource;

  const detailImageSource = imageFlySource(detailImage, sourceButton);
  if (detailImageSource) {
    return detailImageSource;
  }

  return {
    element: sourceButton,
    src: productDisplayImage(product),
  };
}

function playCartFlyAnimation(sourceButton, product) {
  if (!sourceButton || preferredMotionIsReduced()) return;

  const targetButton = visibleCartButton();
  const source = cartFlySource(sourceButton, product);
  if (!targetButton || !source.element || !source.src) return;

  const sourceRect = source.element.getBoundingClientRect();
  const targetRect = targetButton.getBoundingClientRect();
  if (!sourceRect.width || !sourceRect.height || !targetRect.width || !targetRect.height) return;

  const flyImage = document.createElement("img");
  flyImage.className = "cart-fly-image";
  flyImage.src = source.src;
  flyImage.alt = "";
  flyImage.setAttribute("aria-hidden", "true");
  flyImage.referrerPolicy = "no-referrer";

  const startSize = Math.min(104, Math.max(58, Math.min(sourceRect.width, sourceRect.height)));
  const startLeft = sourceRect.left + sourceRect.width / 2 - startSize / 2;
  const startTop = sourceRect.top + sourceRect.height / 2 - startSize / 2;
  const endX = targetRect.left + targetRect.width / 2 - (startLeft + startSize / 2);
  const endY = targetRect.top + targetRect.height / 2 - (startTop + startSize / 2);

  Object.assign(flyImage.style, {
    left: `${startLeft}px`,
    top: `${startTop}px`,
    width: `${startSize}px`,
    height: `${startSize}px`,
  });

  document.body.append(flyImage);
  const arcY = Math.min(-34, endY * 0.28 - 24);
  const animation = flyImage.animate(
    [
      { opacity: 0, transform: "translate3d(0, 8px, 0) scale(0.96)", filter: "blur(0)" },
      { opacity: 0.96, transform: "translate3d(0, 0, 0) scale(1)", filter: "blur(0)", offset: 0.18 },
      {
        opacity: 0.88,
        transform: `translate3d(${endX * 0.52}px, ${endY * 0.42 + arcY}px, 0) scale(0.58) rotate(-3deg)`,
        filter: "blur(0)",
        offset: 0.62,
      },
      {
        opacity: 0.58,
        transform: `translate3d(${endX * 0.84}px, ${endY * 0.82}px, 0) scale(0.3) rotate(3deg)`,
        filter: "blur(0.4px)",
        offset: 0.86,
      },
      {
        opacity: 0,
        transform: `translate3d(${endX}px, ${endY}px, 0) scale(0.1) rotate(5deg)`,
        filter: "blur(1.4px)",
      },
    ],
    {
      duration: 1120,
      easing: "cubic-bezier(0.22, 1, 0.36, 1)",
      fill: "forwards",
    },
  );
  animation.addEventListener("finish", () => flyImage.remove(), { once: true });
}

function playQuantityMotion(control, valueNode, step) {
  if (!control || !valueNode) return;
  control.classList.remove("is-adding", "is-removing");
  valueNode.classList.remove("is-popping");
  void control.offsetWidth;
  control.classList.add(step > 0 ? "is-adding" : "is-removing");
  valueNode.classList.add("is-popping");
  control.addEventListener(
    "animationend",
    () => {
      control.classList.remove("is-adding", "is-removing");
      valueNode.classList.remove("is-popping");
    },
    { once: true },
  );
}

const softTapSelector = [
  ".button:not(.cart-cta)",
  ".filter-button",
  ".tag-button",
  ".brand-button",
  ".brand-rail-card",
  ".ink-type-button",
  ".contact-link",
  ".social-cta",
  ".inquiry-link",
  ".language-button",
  ".menu-toggle",
  ".category-menu-close",
  ".category-menu-link",
  ".store-category-chip",
  ".gallery-arrow",
  ".detail-thumbnails button",
  ".related-card",
  ".hero-dot",
].join(",");

function playSoftTap(target) {
  if (!target) return;
  if (
    target.matches("[data-cart-product-id], [data-refill-bundle-id], [data-favorite-product-id], [data-option-chip], [data-quantity-step]") ||
    target.closest(".quantity-control, .cart-cta, .cart-summary-button")
  ) {
    return;
  }

  target.querySelectorAll(":scope > .soft-tap-ripple").forEach((node) => node.remove());
}

function runAfterSoftTap(target, callback) {
  playSoftTap(target);
  callback();
}

function addToCart(productId, quantity = 1, sourceButton = null, selection = "", priceClp = "") {
  const product = getProduct(productId);
  if (!product) return;

  const safeQuantity = Math.max(1, Number(quantity) || 1);
  cartItems[product.id] = (Number(cartItems[product.id]) || 0) + safeQuantity;
  if (selection) {
    cartSelections[product.id] = selection;
    saveCartSelections();
  }
  if (priceClp) {
    cartPriceOverrides[product.id] = priceClp;
    saveCartPriceOverrides();
  }
  saveCart();
  updateCartDisplay();
  renderStoreDashboard();
  if (isCheckoutPage) renderCheckout();
  playCartFlyAnimation(sourceButton, product);
  playCartBounce(sourceButton);
  cartButtons.forEach((button) => playCartBounce(button));
  showToast(t("addedToCart").replace("{name}", productName(product)));
}

function addRefillBundleToCart(
  baseProductId,
  refillProductId,
  quantity = 1,
  sourceButton = null,
  selection = "",
  refillSelection = "",
  basePriceClp = "",
  refillPriceClp = "",
) {
  const baseProduct = getProduct(baseProductId);
  const refillProduct = getProduct(refillProductId);
  if (!baseProduct || !refillProduct) return;

  const safeQuantity = Math.max(1, Number(quantity) || 1);
  cartItems[baseProduct.id] = (Number(cartItems[baseProduct.id]) || 0) + safeQuantity;
  cartItems[refillProduct.id] = (Number(cartItems[refillProduct.id]) || 0) + safeQuantity;

  if (selection) {
    cartSelections[baseProduct.id] = selection;
  }
  const selectionTemplate =
    baseProduct.category === "mechanical" ? t("compatibleLeadSelection") : t("compatibleRefillSelection");
  cartSelections[refillProduct.id] = [
    selectionTemplate.replace("{base}", productName(baseProduct)),
    refillSelection,
  ]
    .filter(Boolean)
    .join(" / ");
  if (basePriceClp) cartPriceOverrides[baseProduct.id] = basePriceClp;
  if (refillPriceClp) cartPriceOverrides[refillProduct.id] = refillPriceClp;

  saveCart();
  saveCartSelections();
  saveCartPriceOverrides();
  updateCartDisplay();
  renderStoreDashboard();
  if (isCheckoutPage) renderCheckout();
  playCartFlyAnimation(sourceButton, baseProduct);
  playCartBounce(sourceButton);
  cartButtons.forEach((button) => playCartBounce(button));
  showToast(
    t("refillBundleAdded")
      .replace("{base}", productName(baseProduct))
      .replace("{refill}", productName(refillProduct)),
  );
}

function secondaryProductName(product) {
  return currentLang === "ja" ? product.nameEs : product.nameJa;
}

function productDescription(product) {
  return currentLang === "ja" ? product.descriptionJa : product.descriptionEs;
}

function productVoice(product) {
  const explicitVoice = currentLang === "ja" ? product.voiceJa : product.voiceEs;
  if (explicitVoice) return explicitVoice;

  const name = productName(product);
  const price = parsePriceClp(product.priceClp);
  const isPremium = price >= 40000 || productTags(product).has("premium");

  if (currentLang === "ja") {
    if (isPremium) return `${name}は、書き心地やデザインまでこだわって選びたい人向けの上位モデルです。`;
    if (product.category === "ballpoint") return `${name}は、ノート、手帳、仕事用に使いやすい日常筆記向けのボールペンです。`;
    if (product.category === "mechanical") return `${name}は、芯先の安定感や細かい文字の書きやすさを重視したシャープペンです。`;
    if (product.category === "refills") return `${name}は、対応する本体を長く使うための替え芯です。購入前に対応モデルを確認できます。`;
    if (product.category === "leads") return `${name}は、書き味や濃さを調整したい人向けのシャープ芯です。`;
    return `${name}は、机まわりや学習、手帳時間を整えるための文房具です。`;
  }

  if (isPremium) return `${name} es una pieza premium para quienes valoran la sensación de escritura, el diseño y los detalles.`;
  if (product.category === "ballpoint") return `${name} es un bolígrafo práctico para apuntes, agenda, trabajo y escritura diaria.`;
  if (product.category === "mechanical") return `${name} es un portaminas pensado para trazos precisos, control de punta y uso constante.`;
  if (product.category === "refills") return `${name} es un repuesto para seguir usando tu cuerpo favorito; conviene confirmar compatibilidad por mensaje.`;
  if (product.category === "leads") return `${name} ayuda a ajustar la suavidad, la intensidad y la sensación de tu portaminas.`;
  return `${name} es un accesorio de papelería para ordenar mejor el escritorio, el estudio o la rutina diaria.`;
}

function compatibleRefillProducts(product) {
  if (!product || !["ballpoint", "mechanical"].includes(product.category)) return [];
  const productId = canonicalProductId(product.id);
  const refillIds = compatibleRefillMap[productId] || [];
  return refillIds
    .map((refillId) => getRawProduct(refillId) || getProduct(refillId))
    .filter(Boolean)
    .filter((refill, index, refills) => refills.findIndex((item) => item.id === refill.id) === index);
}

function compatibleSupplyText(product, key) {
  const prefix = product?.category === "mechanical" ? "compatibleLead" : "compatibleRefill";
  return t(`${prefix}${key}`);
}

function compatibleRefillOptionGroups(refill) {
  return (refill.optionGroups || []).filter((group) => {
    const label = `${group.labelEs || ""} ${group.labelJa || ""}`.toLowerCase();
    return !label.includes("compatibilidad") && !label.includes("対応");
  });
}

function isInformationalOptionGroup(group) {
  const labelText = `${group.labelEs || ""} ${group.labelJa || ""}`;
  return /(^|\s)(uso|purpose)($|\s)|用途/i.test(labelText);
}

function localizedOptionValues(group) {
  const primary = currentLang === "ja" ? group.optionsJa : group.optionsEs;
  const fallback = currentLang === "ja" ? group.optionsEs : group.optionsJa;
  const normalizeValues = (values) =>
    (Array.isArray(values) ? values : [])
      .map((value) => String(value || "").trim())
      .filter(Boolean);
  const primaryValues = normalizeValues(primary);
  return primaryValues.length ? primaryValues : normalizeValues(fallback);
}

function optionValuesForBothLanguages(group) {
  return [
    ...new Set(
      [...(group.optionsEs || []), ...(group.optionsJa || [])]
        .map((value) => String(value || "").trim())
        .filter(Boolean),
    ),
  ];
}

function customerOptionGroups(product) {
  return (product.optionGroups || [])
    .map((group) => ({
      group,
      label: currentLang === "ja" ? group.labelJa : group.labelEs,
      values: localizedOptionValues(group),
    }))
    .filter(({ group, values }) => {
      if (isInformationalOptionGroup(group)) return false;
      return values.length > 1 || Boolean(group.showWhenSingle);
    });
}

function compatibleRefillOptionsMarkup(product, refill) {
  const optionGroups = compatibleRefillOptionGroups(refill);
  if (!optionGroups.length) return "";

  const optionMarkup = optionGroups
    .map((group) => {
      const label = currentLang === "ja" ? group.labelJa : group.labelEs;
      const values = localizedOptionValues(group);
      if (isInformationalOptionGroup(group) || (!group.showWhenSingle && values.length <= 1)) return "";
      return `
            <div class="compatible-refill-option-group">
              <h5>${label}</h5>
              <div class="option-chip-row compatible-refill-chip-row">
                ${values
                  .map(
                    (chip, index) =>
                      `<button class="${index === 0 ? "is-active" : ""}" type="button" data-option-chip aria-pressed="${index === 0 ? "true" : "false"}"><span>${chip}</span></button>`,
                  )
                  .join("")}
              </div>
            </div>
          `;
    })
    .filter(Boolean)
    .join("");

  if (!optionMarkup) return "";

  return `
    <div class="compatible-refill-options">
      <span>${compatibleSupplyText(product, "OptionsTitle")}</span>
      ${optionMarkup}
    </div>
  `;
}

function compatibleRefillMarkup(product) {
  const refills = compatibleRefillProducts(product);
  if (!refills.length) return "";

  return `
    <div class="compatible-refills">
      <div class="compatible-refills-heading">
        <span>${compatibleSupplyText(product, "Eyebrow")}</span>
        <h4>${compatibleSupplyText(product, "Title")}</h4>
        <p>${compatibleSupplyText(product, "Text")}</p>
      </div>
      <div class="compatible-refill-list">
        ${refills
          .map((refill) => {
            const refillName = productName(refill);
            const refillImage = productDisplayImage(refill);
            const refillFallbackImage = productImageErrorFallback(refill);
            return `
              <article class="compatible-refill-card">
                <a class="compatible-refill-image" href="${productPageUrl(refill.id)}" aria-label="${t("viewDetail")} ${refillName}">
                  <img src="${refillImage}" alt="${refillName}" referrerpolicy="no-referrer" onerror="this.onerror=null;this.src='${refillFallbackImage}'">
                </a>
                <div class="compatible-refill-copy">
                  <strong>${refillName}</strong>
                  <span>${refill.priceClp}</span>
                  <p>${compatibleSupplyText(product, "Check")}</p>
                </div>
                ${compatibleRefillOptionsMarkup(product, refill)}
                <button
                  class="button cart-cta compatible-refill-button"
                  type="button"
                  data-refill-bundle-id="${refill.id}"
                  data-base-product-id="${product.id}"
                  aria-label="${compatibleSupplyText(product, "Add")} ${refillName}"
                >
                  <span class="cart-cta-icon" aria-hidden="true"></span>
                  <span class="cart-cta-text">${compatibleSupplyText(product, "Add")}</span>
                </button>
              </article>
            `;
          })
          .join("")}
      </div>
    </div>
  `;
}

function normalizeText(value) {
  return String(value || "")
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();
}

function parsePriceClp(priceClp) {
  const match = String(priceClp || "").match(/\d[\d.]*/);
  return match ? Number(match[0].replace(/\./g, "")) : Number.POSITIVE_INFINITY;
}

function productSearchText(product) {
  return normalizeText([
    product.id,
    product.brand,
    productBrandKeys(product).join(" "),
    product.nameEs,
    product.nameJa,
    product.descriptionEs,
    product.descriptionJa,
    product.priceClp,
    categoryLabel(product.category),
    product.badge?.es,
    product.badge?.ja,
    product.availableOptionsEs,
    product.availableOptionsJa,
    product.recommendedForEs,
    product.recommendedForJa,
    productInkType(product),
    inkTypeLabel(product),
    ...(product.featuresEs || []),
    ...(product.featuresJa || []),
    ...(product.sellingPointsEs || []),
    ...(product.sellingPointsJa || []),
  ].join(" "));
}

function brandKeyFromName(value) {
  const slug = normalizeText(value)
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
  const aliases = {
    "mitsubishi-pencil": "uni",
    "uni-ball": "uni",
    uniball: "uni",
    "pilot-corporation": "pilot",
    "sunstar": "sun-star",
  };
  return aliases[slug] || slug;
}

function productBrandKeys(product) {
  const allowedBrands = new Set(catalogBrands.map((brand) => brand.key));
  return [
    ...new Set(
      String(product.brand || "")
        .split(/[\/,]/)
        .map((brand) => brandKeyFromName(brand))
        .filter((brandKey) => brandKey && allowedBrands.has(brandKey) && brandKey !== "all"),
    ),
  ];
}

function brandProductCount(brandKey) {
  const list = products.filter((product) => !product.isGroup);
  if (brandKey === "all") return list.length;
  return list.filter((product) => productBrandKeys(product).includes(brandKey)).length;
}

function inkTypeLabel(product) {
  const inkType = productInkType(product);
  const filter = inkTypeFilters.find((item) => item.key === inkType);
  if (!filter) return "";
  return `${copy.es[filter.labelKey] || ""} ${copy.ja[filter.labelKey] || ""}`;
}

function productInkType(product) {
  if (product.category !== "ballpoint") return "all";

  const searchable = normalizeText([
    product.id,
    product.brand,
    product.nameEs,
    product.nameJa,
    product.descriptionEs,
    product.descriptionJa,
    product.availableOptionsEs,
    product.availableOptionsJa,
  ].join(" "));

  if (
    searchable.includes("4&1") ||
    searchable.includes("4and1") ||
    searchable.includes("3 colores") ||
    searchable.includes("3色") ||
    searchable.includes("multicolor") ||
    searchable.includes("多色") ||
    searchable.includes("multi")
  ) {
    return "multi";
  }

  if (searchable.includes("zento")) return "water";
  if (searchable.includes("jetstream") || searchable.includes("dr.grip") || searchable.includes("dr grip") || searchable.includes("lightwrite")) {
    return "oil";
  }
  if (
    searchable.includes("sarasa") ||
    searchable.includes("juice up") ||
    searchable.includes("uni-ball one") ||
    searchable.includes("uniball one") ||
    searchable.includes("energel")
  ) {
    return "gel";
  }

  return "gel";
}

function productTags(product) {
  const tags = new Set();
  const price = parsePriceClp(product.priceClp);
  const searchable = normalizeText(`${product.nameEs} ${product.nameJa} ${product.badge?.es || ""} ${product.badge?.ja || ""}`);

  if (price >= 40000 || searchable.includes("premium") || searchable.includes("limited") || searchable.includes("限定")) {
    tags.add("premium");
  }
  if (price <= 4000) tags.add("budget");
  if (product.category === "refills") tags.add("refills");
  if ((product.category === "mechanical" || product.category === "leads") && price <= 15000) tags.add("study");
  if (searchable.includes("limited") || searchable.includes("限定")) tags.add("limited");

  return tags;
}

function resetInkTypeOutsideBallpoint() {
  if (currentCategory !== "ballpoint") currentInkType = "all";
}

function getVisibleProducts() {
  const query = normalizeText(currentSearch);
  const decorated = products.filter((product) => !product.isGroup).map((product, index) => ({ product, index }));

  return decorated
    .filter(({ product }) => currentCategory === "all" || product.category === currentCategory)
    .filter(({ product }) => currentBrand === "all" || productBrandKeys(product).includes(currentBrand))
    .filter(({ product }) => currentTag === "all" || productTags(product).has(currentTag))
    .filter(({ product }) => currentInkType === "all" || productInkType(product) === currentInkType)
    .filter(({ product }) => !query || productSearchText(product).includes(query))
    .sort((a, b) => {
      if (currentSort === "price-low") return parsePriceClp(a.product.priceClp) - parsePriceClp(b.product.priceClp) || a.index - b.index;
      if (currentSort === "price-high") return parsePriceClp(b.product.priceClp) - parsePriceClp(a.product.priceClp) || a.index - b.index;
      if (currentSort === "newest") return b.index - a.index;
      return a.index - b.index;
    })
    .map(({ product }) => product);
}

function syncCatalogStateFromUrl() {
  if (isProductPage || isCheckoutPage) return;
  const params = new URLSearchParams(window.location.search);
  const category = params.get("category") || "all";
  const sort = params.get("sort") || "featured";
  const tag = params.get("tag") || "all";
  const inkType = params.get("ink") || "all";
  const brand = params.get("brand") || "all";

  currentSearch = params.get("search") || "";
  currentCategory = categories.some((item) => item.key === category) ? category : "all";
  currentSort = ["featured", "price-low", "price-high", "newest"].includes(sort) ? sort : "featured";
  currentTag = catalogTags.some((item) => item.key === tag) ? tag : "all";
  currentInkType = inkTypeFilters.some((item) => item.key === inkType) ? inkType : "all";
  currentBrand = catalogBrands.some((item) => item.key === brand && (brand === "all" || brandProductCount(brand) > 0)) ? brand : "all";
  resetInkTypeOutsideBallpoint();
}

function updateCatalogUrl() {
  if (isProductPage || isCheckoutPage) return;
  const params = new URLSearchParams();
  if (currentSearch.trim()) params.set("search", currentSearch.trim());
  if (currentCategory !== "all") params.set("category", currentCategory);
  if (currentSort !== "featured") params.set("sort", currentSort);
  if (currentTag !== "all") params.set("tag", currentTag);
  if (currentBrand !== "all") params.set("brand", currentBrand);
  if (currentCategory === "ballpoint" && currentInkType !== "all") params.set("ink", currentInkType);

  const query = params.toString();
  const nextUrl = `${window.location.pathname}${query ? `?${query}` : ""}#catalog`;
  history.pushState({ catalog: true }, "", nextUrl);
}

function resetCatalogFilters() {
  currentSearch = "";
  currentCategory = "all";
  currentSort = "featured";
  currentTag = "all";
  currentInkType = "all";
  currentBrand = "all";
  renderCatalogControls();
  renderFilters();
  renderProducts();
  renderStoreCategoryRail();
  renderStoreDashboard();
  renderBrandRail();
  updateCatalogUrl();
}

function buildInquiryMessage(product) {
  if (!product) {
    return currentLang === "ja"
      ? "Kami to Penの商品について問い合わせたいです。在庫や受け渡し方法を教えてください。"
      : "Hola, quiero consultar productos de Kami to Pen. ¿Me puedes ayudar con disponibilidad y entrega?";
  }

  const name = currentLang === "ja" ? product.nameJa : product.nameEs;
  return currentLang === "ja"
    ? `${name}（${product.priceClp}）について問い合わせたいです。在庫や受け渡し方法を教えてください。`
    : `Hola, me interesa ${name}. Precio: ${product.priceClp}. ¿Está disponible?`;
}

function buildCheckoutMessage() {
  const entries = cartEntries();
  if (!entries.length) {
    return currentLang === "ja"
      ? "Kami to Penで商品を購入したいです。おすすめ商品や在庫を教えてください。"
      : "Hola, quiero comprar productos de Kami to Pen. ¿Me puedes recomendar opciones disponibles?";
  }

  const lines = entries.map(({ product, priceClp, quantity, selection }) => {
    const name = currentLang === "ja" ? product.nameJa : product.nameEs;
    const optionText = selection ? ` / ${selection}` : "";
    return currentLang === "ja"
      ? `- ${name}${optionText} x ${quantity}（${priceClp}）`
      : `- ${name}${optionText} x ${quantity} (${priceClp})`;
  });
  const total = formatClp(cartSubtotal(entries));

  return currentLang === "ja"
    ? [
        "Kami to Penで以下の商品を購入したいです。",
        ...lines,
        `合計目安: ${total}`,
        "在庫、色、受け渡し方法、支払い方法を教えてください。",
      ].join("\n")
    : [
        "Hola, quiero confirmar este pedido de Kami to Pen:",
        ...lines,
        `Total estimado: ${total}`,
        "¿Me puedes confirmar stock, colores, entrega y forma de pago?",
      ].join("\n");
}

function parseProductHash() {
  const hash = window.location.hash.replace(/^#/, "");
  const params = new URLSearchParams(hash);
  return params.get("product") || "";
}

function shouldFocusReviews() {
  const hash = window.location.hash.replace(/^#/, "");
  const params = new URLSearchParams(hash);
  return params.get("reviews") === "1";
}

function productPageUrl(productId) {
  return `product.html#product=${encodeURIComponent(canonicalProductId(productId))}`;
}

function productReviewsUrl(productId) {
  return `product.html#product=${encodeURIComponent(canonicalProductId(productId))}&reviews=1`;
}

function getHeroProducts() {
  return heroSlideshowIds.map(getProduct).filter(Boolean);
}

function renderHeroDots(slides = getHeroProducts()) {
  if (!heroDots) return;
  heroDots.innerHTML = slides
    .map(
      (product, index) => `
        <button
          class="${index === activeHeroIndex ? "is-active" : ""}"
          type="button"
          data-hero-index="${index}"
          aria-label="${t("viewDetail")} ${productName(product)}"
          aria-pressed="${index === activeHeroIndex ? "true" : "false"}"
        ></button>
      `,
    )
    .join("");
}

function renderHeroSlide(index = activeHeroIndex) {
  if (!heroSlideshow || !heroSlideGrid) return;
  const slides = getHeroProducts();
  if (!slides.length) return;

  activeHeroIndex = ((index % slides.length) + slides.length) % slides.length;
  const visibleCount = Math.min(4, slides.length);
  const visibleProducts = Array.from({ length: visibleCount }, (_, offset) => slides[(activeHeroIndex + offset) % slides.length]);
  const featuredProduct = visibleProducts[0];

  heroSlideshow.dataset.activeProductId = featuredProduct.id;
  heroSlideGrid.innerHTML = visibleProducts
    .map((product, offset) => {
      const name = productName(product);
      const image = productDisplayImage(product);
      const fallbackImage = productImageErrorFallback(product);
      return `
        <a
          class="hero-product-tile ${offset === 0 ? "is-featured" : ""}"
          href="${productPageUrl(product.id)}"
          aria-label="${t("viewDetail")} ${name}"
          style="--tile-index: ${offset}"
        >
          <img src="${image}" alt="${name}" referrerpolicy="no-referrer" onerror="this.onerror=null;this.src='${fallbackImage}'">
        </a>
      `;
    })
    .join("");
  heroSlideGrid.classList.remove("is-changing");
  void heroSlideGrid.offsetWidth;
  heroSlideGrid.classList.add("is-changing");
  renderHeroDots(slides);
}

function startHeroSlideshow() {
  if (!heroSlideshow) return;
  renderHeroSlide(activeHeroIndex);
  if (heroTimer || typeof window.setInterval !== "function") return;
  heroTimer = window.setInterval(() => {
    renderHeroSlide(activeHeroIndex + 1);
  }, 4600);
}

function categoryMenuUrl(categoryKey) {
  if (categoryKey === "all") return "index.html#catalog";
  return `index.html?category=${encodeURIComponent(categoryKey)}#catalog`;
}

function ensureCategoryMenu() {
  if (!menuToggle) return null;
  let menu = document.querySelector("[data-category-menu]");
  if (menu) return menu;

  const backdrop = document.createElement("button");
  backdrop.className = "category-menu-backdrop";
  backdrop.type = "button";
  backdrop.hidden = true;
  backdrop.dataset.menuClose = "true";
  backdrop.setAttribute("aria-label", t("menuClose"));

  menu = document.createElement("aside");
  menu.className = "category-menu";
  menu.id = "category-drawer";
  menu.hidden = true;
  menu.dataset.categoryMenu = "true";
  menu.setAttribute("aria-hidden", "true");
  menu.setAttribute("aria-labelledby", "category-menu-title");

  document.body.append(backdrop, menu);
  return menu;
}

function renderCategoryMenu() {
  const menu = ensureCategoryMenu();
  if (!menu) return;
  menuToggle.setAttribute("aria-label", t("menuLabel"));
  document.querySelector(".category-menu-backdrop")?.setAttribute("aria-label", t("menuClose"));

  const categoryLinks = categories
    .map((category) => {
      const label = category.key === "all" ? t("menuAll") : currentLang === "ja" ? category.labelJa : category.labelEs;
      const description = category.key === "all" ? t("catalogText") : currentLang === "ja" ? category.descriptionJa : category.descriptionEs;
      const image = category.image || "assets/kami-to-pen-logo-cutout.png?v=logo-cutout";
      return `
        <a class="category-menu-link" href="${categoryMenuUrl(category.key)}" data-menu-category="${category.key}">
          <img src="${image}" alt="" referrerpolicy="no-referrer" onerror="this.onerror=null;this.src='assets/product-image-pending.svg'">
          <span>
            <strong>${label}</strong>
            <em>${description}</em>
          </span>
        </a>
      `;
    })
    .join("");

  menu.innerHTML = `
    <div class="category-menu-panel">
      <div class="category-menu-head">
        <div>
          <p class="eyebrow">${t("menuLabel")}</p>
          <h2 id="category-menu-title">${t("menuTitle")}</h2>
        </div>
        <button class="category-menu-close" type="button" data-menu-close aria-label="${t("menuClose")}">×</button>
      </div>
      <p class="category-menu-text">${t("menuText")}</p>
      <nav class="category-menu-list" aria-label="${t("menuLabel")}">
        ${categoryLinks}
      </nav>
    </div>
  `;

  document.querySelectorAll("[data-menu-close]").forEach((control) => {
    control.onclick = closeCategoryMenu;
  });

  menu.querySelectorAll("[data-menu-category]").forEach((link) => {
    link.addEventListener("click", (event) => {
      const categoryKey = link.dataset.menuCategory;
      if (isProductPage || isCheckoutPage) return;
      event.preventDefault();
      currentCategory = categories.some((category) => category.key === categoryKey) ? categoryKey : "all";
      currentSearch = "";
      currentTag = "all";
      currentSort = "featured";
      currentBrand = "all";
      resetInkTypeOutsideBallpoint();
      renderCatalogControls();
      renderFilters();
      renderProducts();
      renderStoreCategoryRail();
      renderStoreDashboard();
      updateCatalogUrl();
      closeCategoryMenu();
    });
  });
}

function openHeaderSelection() {
  if (isCheckoutPage) {
    window.location.href = "index.html#catalog";
    return;
  }
  openCategoryMenu("center");
}

function openCategoryMenu(placement = "left") {
  const menu = ensureCategoryMenu();
  const backdrop = document.querySelector(".category-menu-backdrop");
  if (!menu || !backdrop) return;
  renderCategoryMenu();
  menu.dataset.placement = placement === "center" ? "center" : "left";
  menu.hidden = false;
  backdrop.hidden = false;
  document.body.classList.add("menu-open");
  menu.classList.add("is-open");
  backdrop.classList.add("is-open");
  menu.setAttribute("aria-hidden", "false");
  menuToggle.setAttribute("aria-expanded", placement === "left" ? "true" : "false");
  menu.querySelector("[data-menu-close]")?.focus();
}

function closeCategoryMenu() {
  const menu = document.querySelector("[data-category-menu]");
  const backdrop = document.querySelector(".category-menu-backdrop");
  if (!menu || !backdrop) return;
  document.body.classList.remove("menu-open");
  menu.classList.remove("is-open");
  backdrop.classList.remove("is-open");
  menu.setAttribute("aria-hidden", "true");
  menuToggle?.setAttribute("aria-expanded", "false");
  const finishClose = () => {
    if (!menu.classList.contains("is-open")) {
      menu.hidden = true;
      backdrop.hidden = true;
    }
  };
  if (typeof window.setTimeout === "function") {
    window.setTimeout(finishClose, 220);
  } else {
    finishClose();
  }
}

function clearStaleScrollLocks() {
  const menu = document.querySelector("[data-category-menu]");
  if (!menu || !menu.classList.contains("is-open")) {
    document.body.classList.remove("menu-open");
  }
  if (!inquiryModal || !inquiryModal.classList.contains("is-visible")) {
    document.body.classList.remove("modal-open");
  }
  if (!cartDrawer || !cartDrawer.classList.contains("is-open")) {
    document.body.classList.remove("cart-drawer-open");
  }
}

function navigateToProduct(productId) {
  if (!isProductPage) {
    window.location.href = productPageUrl(productId);
    return;
  }

  if (parseProductHash() === productId) {
    showProductDetail(productId, false);
    return;
  }
  history.pushState({ productId }, "", productPageUrl(productId));
  showProductDetail(productId, false);
  window.scrollTo({ top: 0, behavior: "instant" });
}

function navigateToReviews(productId) {
  if (!isProductPage) {
    window.location.href = productReviewsUrl(productId);
    return;
  }

  if (parseProductHash() !== productId) {
    history.pushState({ productId, reviews: true }, "", productReviewsUrl(productId));
    showProductDetail(productId, false);
  }

  const reviews = document.querySelector("#product-reviews");
  if (reviews) reviews.scrollIntoView({ behavior: "smooth", block: "start" });
}

function navigateToCatalog() {
  if (isProductPage) {
    window.location.href = "index.html#catalog";
    return;
  }

  activeProductId = "";
  if (window.location.hash) {
    history.pushState("", document.title, window.location.pathname + window.location.search);
  }
  showProductList(false);
}

function showProductList(shouldScroll = false) {
  if (isProductPage) {
    window.location.href = "index.html#catalog";
    return;
  }

  activeProductId = "";
  homeSections.forEach((section) => {
    section.hidden = false;
  });
  if (productDetail) productDetail.hidden = true;
  if (productGrid) productGrid.hidden = false;
  if (filterBar) filterBar.hidden = false;
  if (productGrid) renderProducts();
  if (shouldScroll) {
    document.querySelector("#catalog").scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function showProductDetail(productId, shouldScroll = false) {
  const canonicalId = canonicalProductId(productId);
  const product = getProduct(productId);

  if (!isProductPage) {
    if (product) window.location.href = productPageUrl(product.id);
    else showProductList(false);
    return;
  }

  if (!product) {
    window.location.href = "index.html#catalog";
    return;
  }

  if (canonicalId !== productId) {
    history.replaceState({ productId: canonicalId }, "", productPageUrl(canonicalId));
  }

  activeProductId = product.id;
  if (productDetail) productDetail.hidden = false;
  renderProductDetail(product);
  if (shouldScroll) {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}

function scrollToCurrentSectionHash() {
  if (!window.location.hash || window.location.hash.startsWith("#product=")) return;
  const targetId = decodeURIComponent(window.location.hash.slice(1));
  const target = targetId ? document.getElementById(targetId) : null;
  if (!target) return;
  window.requestAnimationFrame(() => {
    target.scrollIntoView({ behavior: "auto", block: "start" });
  });
}

function syncRouteFromHash(shouldScroll = false) {
  if (isCheckoutPage) return;
  const productId = parseProductHash();
  if (productId) {
    showProductDetail(productId, shouldScroll);
  } else if (isProductPage) {
    window.location.href = "index.html#catalog";
  } else {
    showProductList(shouldScroll);
    scrollToCurrentSectionHash();
  }
}

function setPreparedLink(link, labelKey, channel) {
  link.href = "#contact";
  link.removeAttribute("target");
  link.removeAttribute("rel");
  link.classList.add("is-disabled");
  link.dataset.channel = channel;
  link.textContent = t(labelKey);
}

function updateContactLinks(message) {
  if (contactConfig.whatsappNumber.trim()) {
    const number = contactConfig.whatsappNumber.replace(/[^\d]/g, "");
    whatsappInquiry.href = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
    whatsappInquiry.target = "_blank";
    whatsappInquiry.rel = "noreferrer";
    whatsappInquiry.classList.remove("is-disabled");
    whatsappInquiry.textContent = t("openWhatsapp");
  } else {
    setPreparedLink(whatsappInquiry, "ctaWhatsapp", "WhatsApp");
  }

  if (contactConfig.instagramUrl.trim()) {
    instagramInquiry.href = contactConfig.instagramUrl;
    instagramInquiry.target = "_blank";
    instagramInquiry.rel = "noreferrer";
    instagramInquiry.classList.remove("is-disabled");
    instagramInquiry.textContent = t("openInstagram");
  } else {
    setPreparedLink(instagramInquiry, "ctaInstagram", "Instagram");
  }
}

function setPreparedCheckoutLink(link, labelKey, channel) {
  if (!link) return;
  link.href = "index.html#contact";
  link.removeAttribute("target");
  link.removeAttribute("rel");
  link.classList.add("is-disabled");
  link.dataset.channel = channel;
  link.textContent = t(labelKey);
}

function updateCheckoutLinks(message) {
  if (checkoutWhatsapp) {
    if (contactConfig.whatsappNumber.trim()) {
      const number = contactConfig.whatsappNumber.replace(/[^\d]/g, "");
      checkoutWhatsapp.href = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
      checkoutWhatsapp.target = "_blank";
      checkoutWhatsapp.rel = "noreferrer";
      checkoutWhatsapp.classList.remove("is-disabled");
      checkoutWhatsapp.textContent = t("openWhatsapp");
    } else {
      setPreparedCheckoutLink(checkoutWhatsapp, "ctaWhatsapp", "WhatsApp");
    }
  }

  if (checkoutInstagram) {
    if (contactConfig.instagramUrl.trim()) {
      checkoutInstagram.href = contactConfig.instagramUrl;
      checkoutInstagram.target = "_blank";
      checkoutInstagram.rel = "noreferrer";
      checkoutInstagram.classList.remove("is-disabled");
      checkoutInstagram.textContent = t("openInstagram");
    } else {
      setPreparedCheckoutLink(checkoutInstagram, "ctaInstagram", "Instagram");
    }
  }
}

function setCartQuantity(productId, quantity) {
  const safeQuantity = Math.max(0, Number(quantity) || 0);
  if (safeQuantity === 0) {
    delete cartItems[productId];
    delete cartSelections[productId];
    delete cartPriceOverrides[productId];
  } else {
    cartItems[productId] = safeQuantity;
  }
  saveCart();
  saveCartSelections();
  saveCartPriceOverrides();
  updateCartDisplay();
  renderCheckout();
}

function renderCheckout() {
  if (!checkoutItems) return;

  const entries = cartEntries();
  const totalQuantity = entries.reduce((sum, entry) => sum + entry.quantity, 0);
  const subtotal = cartSubtotal(entries);
  const message = buildCheckoutMessage();

  if (checkoutCount) checkoutCount.textContent = t("checkoutCount").replace("{count}", String(totalQuantity));
  if (checkoutSubtotal) checkoutSubtotal.textContent = formatClp(subtotal);
  if (checkoutTotal) checkoutTotal.textContent = formatClp(subtotal);
  if (checkoutMessage) checkoutMessage.value = message;
  updateCheckoutLinks(message);

  if (!entries.length) {
    checkoutItems.innerHTML = `
      <section class="checkout-empty-state">
        <h3>${t("checkoutEmptyTitle")}</h3>
        <p>${t("checkoutEmptyText")}</p>
        <a class="button button-primary" href="index.html#catalog">${t("checkoutContinue")}</a>
      </section>
    `;
    return;
  }

  checkoutItems.innerHTML = entries
    .map(({ product, priceClp, quantity, unitPrice, selection }) => {
      const name = productName(product);
      const secondaryName = secondaryProductName(product);
      const image = productDisplayImage(product);
      const fallbackImage = productImageErrorFallback(product);
      return `
        <article class="checkout-item" data-checkout-product-id="${product.id}">
          <a class="checkout-item-image" href="${productPageUrl(product.id)}" aria-label="${t("viewDetail")} ${name}">
            <img src="${image}" alt="${name}" referrerpolicy="no-referrer" onerror="this.onerror=null;this.src='${fallbackImage}'">
          </a>
          <div class="checkout-item-copy">
            <span class="brand-pill">${product.brand}</span>
            <h3>${name}</h3>
            <p>${secondaryName}</p>
            ${selection ? `<p class="checkout-item-options">${selection}</p>` : ""}
            <p class="checkout-item-seller">Kami to Pen</p>
            <dl>
              <div>
                <dt>${t("checkoutUnitPrice")}</dt>
                <dd>${priceClp}</dd>
              </div>
              <div>
                <dt>${t("checkoutSubtotal")}</dt>
                <dd>${formatClp(unitPrice * quantity)}</dd>
              </div>
            </dl>
          </div>
          <div class="checkout-item-actions">
            <div class="quantity-control checkout-quantity" aria-label="${t("checkoutQuantity")}">
              <button type="button" data-checkout-step="-1">−</button>
              <span data-checkout-quantity>${quantity}</span>
              <button type="button" data-checkout-step="1">+</button>
            </div>
            <button class="checkout-remove" type="button" data-checkout-remove>${t("checkoutRemove")}</button>
          </div>
        </article>
      `;
    })
    .join("");

  checkoutItems.querySelectorAll("[data-checkout-step]").forEach((button) => {
    button.addEventListener("click", () => {
      const item = button.closest("[data-checkout-product-id]");
      const productId = item.dataset.checkoutProductId;
      const quantityNode = item.querySelector("[data-checkout-quantity]");
      const nextQuantity = Number(quantityNode.textContent) + Number(button.dataset.checkoutStep);
      setCartQuantity(productId, nextQuantity);
    });
  });

  checkoutItems.querySelectorAll("[data-checkout-remove]").forEach((button) => {
    button.addEventListener("click", () => {
      const productId = button.closest("[data-checkout-product-id]").dataset.checkoutProductId;
      setCartQuantity(productId, 0);
    });
  });
}

function openInquiry(productId = "") {
  const product = getProduct(productId);
  activeInquiryProductId = product ? product.id : "";
  activeInquiryMessage = buildInquiryMessage(product);
  inquiryMessage.value = activeInquiryMessage;
  updateContactLinks(activeInquiryMessage);
  lastFocusedElement = document.activeElement;
  inquiryModal.classList.add("is-visible");
  inquiryModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
  copyInquiryButton.focus();
}

function closeInquiry() {
  inquiryModal.classList.remove("is-visible");
  inquiryModal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
  if (lastFocusedElement) lastFocusedElement.focus();
}

function setLanguage(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;
  document.body.classList.toggle("lang-ja", lang === "ja");

  i18nNodes.forEach((node) => {
    const key = node.dataset.i18n;
    node.textContent = t(key);
  });

  i18nPlaceholderNodes.forEach((node) => {
    node.setAttribute("placeholder", t(node.dataset.i18nPlaceholder));
  });

  document.querySelectorAll("option[data-i18n]").forEach((option) => {
    option.textContent = t(option.dataset.i18n);
  });

  document.querySelectorAll("[data-lang-button]").forEach((button) => {
    const isActive = button.dataset.langButton === lang;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  renderCatalogControls();
  if (filterBar) renderFilters();
  if (inventoryGrid) renderInventoryPhotos();
  if (isProductPage && (activeProductId || parseProductHash())) {
    activeProductId = activeProductId || parseProductHash();
    renderProductDetail(getProduct(activeProductId));
  } else if (isCheckoutPage) {
    renderCheckout();
  } else if (productGrid) {
    renderProducts();
  }
  if (categoryGrid) renderCategories();
  renderStoreCategoryRail();
  renderStoreDashboard();
  renderBrandRail();
  renderCategoryMenu();
  renderHeroSlide(activeHeroIndex);
  updateCartDisplay();

  if (inquiryModal && inquiryModal.classList.contains("is-visible")) {
    const product = getProduct(activeInquiryProductId);
    activeInquiryMessage = buildInquiryMessage(product);
    inquiryMessage.value = activeInquiryMessage;
    updateContactLinks(activeInquiryMessage);
  }
}

function renderCatalogControls() {
  if (catalogSearch) catalogSearch.value = currentSearch;
  if (catalogSort) catalogSort.value = currentSort;
  if (catalogReset) {
    catalogReset.hidden =
      !currentSearch &&
      currentCategory === "all" &&
      currentSort === "featured" &&
      currentTag === "all" &&
      currentInkType === "all" &&
      currentBrand === "all";
  }

  if (tagFilter) {
    tagFilter.innerHTML = "";
    catalogTags.forEach((tag) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "tag-button";
      button.dataset.tag = tag.key;
      button.textContent = t(tag.labelKey);
      button.classList.toggle("is-active", currentTag === tag.key);
      button.setAttribute("aria-pressed", String(currentTag === tag.key));
      button.addEventListener("click", (event) => {
        event.preventDefault();
        event.stopPropagation();
        runAfterSoftTap(button, () => {
          currentTag = tag.key;
          renderCatalogControls();
          renderProducts();
          updateCatalogUrl();
        });
      });
      tagFilter.append(button);
    });
  }

  if (brandFilter) {
    brandFilter.innerHTML = "";

    const label = document.createElement("span");
    label.className = "brand-filter-label";
    label.textContent = t("brandFilterLabel");
    brandFilter.append(label);

    catalogBrands.forEach((brand) => {
      const count = brandProductCount(brand.key);
      if (brand.key !== "all" && count === 0) return;

      const button = document.createElement("button");
      button.type = "button";
      button.className = "brand-button";
      button.dataset.brand = brand.key;
      button.innerHTML = `
        <span>${brandLabel(brand.key)}</span>
        <em>${count}</em>
      `;
      button.classList.toggle("is-active", currentBrand === brand.key);
      button.setAttribute("aria-pressed", String(currentBrand === brand.key));
      button.addEventListener("click", (event) => {
        event.preventDefault();
        event.stopPropagation();
        runAfterSoftTap(button, () => {
          currentBrand = brand.key;
          renderCatalogControls();
          renderProducts();
          renderBrandRail();
          updateCatalogUrl();
        });
      });
      brandFilter.append(button);
    });
  }
}

function renderFilters() {
  if (filterBar) {
    filterBar.innerHTML = "";

    categories.forEach((category) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "filter-button";
      button.dataset.category = category.key;
      button.textContent = currentLang === "ja" ? category.labelJa : category.labelEs;
      button.classList.toggle("is-active", category.key === currentCategory);
      button.setAttribute("aria-pressed", String(category.key === currentCategory));
      button.addEventListener("click", (event) => {
        event.preventDefault();
        event.stopPropagation();
        runAfterSoftTap(button, () => {
          currentCategory = category.key;
          resetInkTypeOutsideBallpoint();
          renderCatalogControls();
          renderFilters();
          renderProducts();
          renderStoreCategoryRail();
          renderStoreDashboard();
          updateCatalogUrl();
        });
      });
      filterBar.append(button);
    });
  }

  renderInkTypeFilters();
}

function renderInkTypeFilters() {
  if (!inkTypeFilter) return;
  const shouldShow = currentCategory === "ballpoint";

  inkTypeFilter.hidden = !shouldShow;
  inkTypeFilter.innerHTML = "";
  if (!shouldShow) return;

  const label = document.createElement("span");
  label.className = "ink-type-label";
  label.textContent = t("inkTypeLabel");
  inkTypeFilter.append(label);

  inkTypeFilters.forEach((type) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "ink-type-button";
    button.dataset.inkType = type.key;
    button.textContent = t(type.labelKey);
    button.classList.toggle("is-active", currentInkType === type.key);
    button.setAttribute("aria-pressed", String(currentInkType === type.key));
    button.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      runAfterSoftTap(button, () => {
        currentInkType = type.key;
        renderCatalogControls();
        renderInkTypeFilters();
        renderProducts();
        updateCatalogUrl();
      });
    });
    inkTypeFilter.append(button);
  });
}

function categoryDescription(categoryKey) {
  const category = categories.find((item) => item.key === categoryKey);
  if (!category) return "";
  return currentLang === "ja" ? category.descriptionJa : category.descriptionEs;
}

function uniqueDashboardProducts(items) {
  const seen = new Set();
  return items.filter((product) => {
    if (!product || product.isGroup || seen.has(product.id)) return false;
    seen.add(product.id);
    return true;
  });
}

function dashboardProductsFromIds(productIds, fallbackIds = [], max = 4) {
  const primary = uniqueDashboardProducts(productIds.map(getProduct));
  const fallback = uniqueDashboardProducts(fallbackIds.map(getProduct));
  return uniqueDashboardProducts([...primary, ...fallback]).slice(0, max);
}

function dashboardPanelHref(panel) {
  if (panel.category) return panel.category === "all" ? "index.html#catalog" : `index.html?category=${encodeURIComponent(panel.category)}#catalog`;
  if (panel.tag) return `index.html?tag=${encodeURIComponent(panel.tag)}#catalog`;
  return "index.html#catalog";
}

function dashboardMiniProductMarkup(product, index = 0) {
  const name = productName(product);
  const image = productDisplayImage(product);
  const fallbackImage = productImageErrorFallback(product);
  return `
    <a class="dashboard-mini-product ${index === 0 ? "is-featured" : ""}" href="${productPageUrl(product.id)}" aria-label="${t("viewDetail")} ${name}">
      <span class="dashboard-mini-image">
        <img src="${image}" alt="${name}" referrerpolicy="no-referrer" onerror="this.onerror=null;this.src='${fallbackImage}'">
      </span>
      <span class="dashboard-mini-copy">
        <strong>${name}</strong>
        <em>${product.priceClp}</em>
      </span>
    </a>
  `;
}

function dashboardFallbackProducts(predicate, fallbackIds, max = 4) {
  return uniqueDashboardProducts([
    ...products.filter((product) => !product.isGroup && predicate(product)),
    ...fallbackIds.map(getProduct),
  ]).slice(0, max);
}

function dashboardPanels() {
  const cartProductIds = cartEntries().map((entry) => entry.product.id);
  const favoriteProductIds = favoriteProducts().map((product) => product.id);

  return [
    {
      className: "is-personal",
      eyebrow: t("favoriteLabel"),
      title: t("dashboardContinueTitle"),
      text: t("dashboardContinueText"),
      href: "checkout.html",
      products: dashboardProductsFromIds(
        [...favoriteProductIds, ...cartProductIds],
        ["zento-signature", "jetstream-lite", "uniball-one", "kurutoga-metal"],
      ),
    },
    {
      className: "is-premium",
      eyebrow: t("tagPremium"),
      title: t("dashboardPremiumTitle"),
      text: t("dashboardPremiumText"),
      href: dashboardPanelHref({ tag: "premium" }),
      products: dashboardFallbackProducts(
        (product) => productTags(product).has("premium"),
        ["kurutoga-dive", "zento-signature", "kurutoga-metal", "orenznero"],
      ),
    },
    {
      className: "is-daily",
      eyebrow: t("tagBudget"),
      title: t("dashboardDailyTitle"),
      text: t("dashboardDailyText"),
      href: dashboardPanelHref({ tag: "budget" }),
      products: dashboardFallbackProducts(
        (product) => parsePriceClp(product.priceClp) <= 10000 && product.category !== "refills",
        ["jetstream-lite", "uniball-one", "juice-up", "campus-pencil-sharp-basic"],
      ),
    },
    {
      className: "is-refills",
      eyebrow: t("tagRefills"),
      title: t("dashboardRefillTitle"),
      text: t("dashboardRefillText"),
      href: dashboardPanelHref({ category: "refills" }),
      products: dashboardFallbackProducts(
        (product) => product.category === "refills",
        ["zento-refill", "jetstream-refill", "uniball-one-refill", "juice-up-refill"],
      ),
    },
  ];
}

function renderStoreDashboard() {
  if (!storeDashboardGrid) return;
  storeDashboardGrid.innerHTML = dashboardPanels()
    .map(
      (panel) => `
        <article class="dashboard-panel ${panel.className}">
          <div class="dashboard-panel-head">
            <span>${panel.eyebrow}</span>
            <h3>${panel.title}</h3>
            <p>${panel.text}</p>
          </div>
          <div class="dashboard-mini-grid">
            ${panel.products.map(dashboardMiniProductMarkup).join("")}
          </div>
          <a class="dashboard-panel-link" href="${panel.href}">
            ${t("dashboardBrowse")}
          </a>
        </article>
      `,
    )
    .join("");
}

function renderStoreCategoryRail() {
  if (!storeCategoryRail) return;
  storeCategoryRail.innerHTML = "";

  categories.forEach((category) => {
    const count =
      category.key === "all"
        ? products.filter((product) => !product.isGroup).length
        : products.filter((product) => !product.isGroup && product.category === category.key).length;
    if (category.key !== "all" && count === 0) return;

    const button = document.createElement("button");
    button.type = "button";
    button.className = "store-category-chip";
    button.dataset.storeCategory = category.key;
    button.classList.toggle("is-active", currentCategory === category.key);
    button.setAttribute("aria-pressed", String(currentCategory === category.key));

    const label = category.key === "all" ? t("menuAll") : currentLang === "ja" ? category.labelJa : category.labelEs;
    const image = category.image || "assets/kami-to-pen-logo-cutout.png?v=logo-cutout";
    button.innerHTML = `
      <span class="store-category-image">
        <img src="${image}" alt="" referrerpolicy="no-referrer" onerror="this.onerror=null;this.src='assets/product-image-pending.svg'">
      </span>
      <strong>${label}</strong>
      <em>${t("shelfCountLabel").replace("{count}", String(count))}</em>
    `;

    button.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      runAfterSoftTap(button, () => {
        currentCategory = category.key;
        currentSearch = "";
        currentTag = "all";
        currentSort = "featured";
        currentBrand = "all";
        resetInkTypeOutsideBallpoint();
        renderCatalogControls();
        renderFilters();
        renderProducts();
        renderStoreCategoryRail();
        renderStoreDashboard();
        renderBrandRail();
        updateCatalogUrl();
        document.querySelector("#catalog")?.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    });

    storeCategoryRail.append(button);
  });
}

function brandFeaturedProducts(brandKey, limit = 3) {
  return products
    .filter((product) => !product.isGroup && productBrandKeys(product).includes(brandKey))
    .slice(0, limit);
}

function brandRailDescription(brandKey) {
  const descriptions = {
    uni: {
      es: "JETSTREAM, ZENTO y KURUTOGA para escribir todos los dias o elegir una pieza especial.",
      ja: "JETSTREAM、ZENTO、KURUTOGAなど、日常使いから特別な一本まで。",
    },
    pilot: {
      es: "Gel, tintas suaves y repuestos para cuadernos, agenda y estudio.",
      ja: "ゲルインキ、なめらかな筆記、本体を長く使うための替え芯。",
    },
    pentel: {
      es: "Portaminas, minas y piezas tecnicas para escritura fina y estudio.",
      ja: "シャープペン、シャー芯、細かい筆記や学習向けの定番。",
    },
    zebra: {
      es: "Boligrafos practicos y faciles de sumar al set diario.",
      ja: "毎日使いやすく、セットに加えやすい実用ボールペン。",
    },
    tombow: {
      es: "Herramientas de escritura y correccion con diseno limpio.",
      ja: "書く、消す、整えるためのクリーンな文具。",
    },
    kokuyo: {
      es: "Campus y accesorios para estudio, notas y escritorio.",
      ja: "Campus系を中心に、勉強・ノート・机まわりを整える文具。",
    },
  };
  const fallback = {
    es: "Modelos seleccionados para comparar por marca.",
    ja: "ブランドごとに比べやすいセレクト。",
  };
  const description = descriptions[brandKey] || fallback;
  return currentLang === "ja" ? description.ja : description.es;
}

function renderBrandRail() {
  if (!brandRail) return;
  brandRail.innerHTML = "";

  catalogBrands
    .filter((brand) => brand.key !== "all" && brandProductCount(brand.key) > 0)
    .forEach((brand) => {
      const count = brandProductCount(brand.key);
      const featuredProducts = brandFeaturedProducts(brand.key);
      const button = document.createElement("button");
      button.type = "button";
      button.className = "brand-rail-card";
      button.dataset.brand = brand.key;
      button.classList.toggle("is-active", currentBrand === brand.key);
      button.setAttribute("aria-pressed", String(currentBrand === brand.key));
      button.innerHTML = `
        <div class="brand-rail-preview" aria-hidden="true">
          ${featuredProducts
            .map(
              (product) => {
                const image = productDisplayImage(product);
                const fallbackImage = productImageErrorFallback(product);
                return `
                  <img src="${image}" alt="" referrerpolicy="no-referrer" onerror="this.onerror=null;this.src='${fallbackImage}'">
                `;
              },
            )
            .join("")}
        </div>
        <span class="brand-rail-count">${t("shelfCountLabel").replace("{count}", String(count))}</span>
        <strong>${brandLabel(brand.key)}</strong>
        <em>${brandRailDescription(brand.key)}</em>
      `;
      button.addEventListener("click", (event) => {
        event.preventDefault();
        event.stopPropagation();
        runAfterSoftTap(button, () => {
          currentBrand = brand.key;
          currentCategory = "all";
          currentSearch = "";
          currentTag = "all";
          currentSort = "featured";
          currentInkType = "all";
          renderCatalogControls();
          renderFilters();
          renderProducts();
          renderStoreCategoryRail();
          renderStoreDashboard();
          renderBrandRail();
          updateCatalogUrl();
          document.querySelector("#catalog")?.scrollIntoView({ behavior: "smooth", block: "start" });
        });
      });
      brandRail.append(button);
    });
}

function productShelves(visibleProducts) {
  const hasFocusedFilter =
    Boolean(currentSearch.trim()) ||
    currentSort !== "featured" ||
    currentTag !== "all" ||
    currentInkType !== "all" ||
    currentBrand !== "all";

  if (hasFocusedFilter || currentCategory !== "all") {
    const title = currentCategory === "all" ? t("shelfResultsTitle") : categoryLabel(currentCategory);
    const description =
      currentBrand !== "all"
        ? `${brandLabel(currentBrand)} · ${title}`
        : currentCategory === "all"
          ? t("catalogText")
          : categoryDescription(currentCategory);
    return [{ key: currentCategory, title, description, products: visibleProducts }];
  }

  return categories
    .filter((category) => category.key !== "all")
    .map((category) => ({
      key: category.key,
      title: currentLang === "ja" ? category.labelJa : category.labelEs,
      description: currentLang === "ja" ? category.descriptionJa : category.descriptionEs,
      products: visibleProducts.filter((product) => product.category === category.key),
    }))
    .filter((shelf) => shelf.products.length);
}

function renderInventoryPhotos() {
  if (!inventoryGrid) return;
  inventoryGrid.innerHTML = "";

  inventoryPhotos.forEach((photo, index) => {
    const card = document.createElement("article");
    card.className = "inventory-card";
    if (index === 0 || index === 3) card.classList.add("inventory-card-wide");

    const title = currentLang === "ja" ? photo.titleJa : photo.titleEs;
    const description = currentLang === "ja" ? photo.descriptionJa : photo.descriptionEs;

    card.innerHTML = `
      <button class="inventory-image-button" type="button" data-detail-product-id="${photo.productId}" aria-label="${t("viewDetail")} ${title}">
        <img class="inventory-image" src="${photo.image}" alt="${title}" referrerpolicy="no-referrer" onerror="this.onerror=null;this.src='assets/product-image-pending.svg'">
      </button>
      <div class="inventory-caption">
        <div class="inventory-title-row">
          <h3>${title}</h3>
          <span class="stock-inline-pill inventory-stock-pill">${t("stockInline")}</span>
        </div>
        <p>${description}</p>
        <div class="inventory-price">
          <span>${t("priceLabel")}</span>
          <strong>${photo.priceClp}</strong>
        </div>
        <button class="button cart-cta inventory-cart-cta" type="button" data-cart-product-id="${photo.productId}" aria-label="${t("addToCart")} ${title}">
          <span class="cart-cta-icon" aria-hidden="true"></span>
          <span class="cart-cta-text">${t("addToCart")}</span>
        </button>
      </div>
    `;
    inventoryGrid.append(card);
  });

  bindCartButtons(inventoryGrid);
  bindDetailTriggers(inventoryGrid);
}

function renderProducts() {
  if (!productGrid) return;
  const visibleProducts = getVisibleProducts();

  productGrid.innerHTML = "";
  if (catalogResultCount) {
    catalogResultCount.textContent = t("resultCount").replace("{count}", String(visibleProducts.length));
  }
  if (catalogReset) {
    catalogReset.hidden =
      !currentSearch &&
      currentCategory === "all" &&
      currentSort === "featured" &&
      currentTag === "all" &&
      currentInkType === "all" &&
      currentBrand === "all";
  }

  if (!visibleProducts.length) {
    const empty = document.createElement("section");
    empty.className = "catalog-empty-state";
    empty.innerHTML = `
      <h3>${t("noResultsTitle")}</h3>
      <p>${t("noResultsText")}</p>
      <button class="button button-primary" type="button">${t("resetFilters")}</button>
    `;
    empty.querySelector("button").addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      runAfterSoftTap(event.currentTarget, resetCatalogFilters);
    });
    productGrid.append(empty);
    return;
  }

  const appendProductCard = (parent, product) => {
    const article = document.createElement("article");
    const tags = productTags(product);
    article.className = [
      "product-card",
      tags.has("premium") ? "is-premium-card" : "",
      tags.has("limited") ? "is-limited-card" : "",
    ].filter(Boolean).join(" ");
    article.tabIndex = 0;
    article.dataset.detailProductId = product.id;
    article.dataset.category = product.category;
    article.dataset.tags = [...tags].join(" ");
    article.setAttribute("role", "link");
    article.setAttribute("aria-label", `${t("viewDetail")} ${productName(product)}`);

    const name = productName(product);
    const secondaryName = secondaryProductName(product);
    const description = productDescription(product);
    const badge = currentLang === "ja" ? product.badge.ja : product.badge.es;
    const sellingPoint = (currentLang === "ja" ? product.sellingPointsJa : product.sellingPointsEs)?.[0] || "";
    const voice = productVoice(product);
    const image = productDisplayImage(product);
    const fallbackImage = productImageErrorFallback(product);

    article.innerHTML = `
      <div class="product-image-wrap">
        <img class="product-image" src="${image}" alt="${name}" referrerpolicy="no-referrer" onerror="this.onerror=null;this.src='${fallbackImage}'">
        <button class="wishlist-bubble" type="button" data-favorite-product-id="${product.id}" aria-label="${favoriteButtonText(product.id)} ${name}" aria-pressed="${isFavoriteProduct(product.id)}">
          <span data-favorite-icon aria-hidden="true">${isFavoriteProduct(product.id) ? "♥" : "♡"}</span>
        </button>
      </div>
      <div class="product-top">
        <div class="product-meta">
          <span class="brand-pill">${product.brand}</span>
          <span class="badge-pill">${badge}</span>
        </div>
        <div>
          <div class="product-title-line">
            <h3>${name}</h3>
            <span class="stock-inline-pill">${t("stockInline")}</span>
          </div>
          <p class="secondary-name">${secondaryName}</p>
        </div>
        <div class="card-rating" aria-label="Rating">
          <span aria-hidden="true">★★★★★</span>
          <button type="button" data-review-product-id="${product.id}">${t("viewReviews")}</button>
        </div>
        <p>${description}</p>
        <div class="product-card-note">
          <span>${t("voiceLabel")}</span>
          <strong>${voice}</strong>
          <em>${categoryLabel(product.category)} · ${sellingPoint}</em>
        </div>
      </div>
      <div class="product-bottom">
        <a class="button detail-cta" href="${productPageUrl(product.id)}" data-detail-product-id="${product.id}">
          ${t("viewDetail")}
        </a>
        <div class="price-row">
          <span class="price-label">${t("priceLabel")}</span>
          <span class="price-value">${product.priceClp}</span>
        </div>
        <button class="button cart-cta" type="button" data-cart-product-id="${product.id}" aria-label="${t("addToCart")} ${productName(product)}">
          <span class="cart-cta-icon" aria-hidden="true"></span>
          <span class="cart-cta-text">${t("addToCart")}</span>
        </button>
      </div>
    `;

    article.addEventListener("click", (event) => {
      if (event.target.closest(".inquiry-trigger") || event.target.closest(".detail-cta") || event.target.closest("[data-review-product-id]") || event.target.closest("[data-cart-product-id]") || event.target.closest("[data-favorite-product-id]")) return;
      navigateToProduct(product.id);
    });
    article.addEventListener("keydown", (event) => {
      if (event.key !== "Enter" && event.key !== " ") return;
      if (event.target.closest(".inquiry-trigger") || event.target.closest(".detail-cta") || event.target.closest("[data-review-product-id]") || event.target.closest("[data-cart-product-id]") || event.target.closest("[data-favorite-product-id]")) return;
      event.preventDefault();
      navigateToProduct(product.id);
    });

    parent.append(article);
  };

  productGrid.classList.add("is-shelved");
  productShelves(visibleProducts).forEach((shelf) => {
    const shelfSection = document.createElement("section");
    shelfSection.className = "product-shelf";
    shelfSection.dataset.shelfCategory = shelf.key;

    const shelfHead = document.createElement("div");
    shelfHead.className = "product-shelf-heading";
    shelfHead.innerHTML = `
      <div>
        <h3>${shelf.title}</h3>
        <p>${shelf.description || t("catalogText")}</p>
      </div>
      <span>${t("shelfCountLabel").replace("{count}", String(shelf.products.length))}</span>
    `;

    const row = document.createElement("div");
    row.className = "product-shelf-row";
    row.setAttribute("aria-label", shelf.title);
    shelf.products.forEach((product) => appendProductCard(row, product));

    shelfSection.append(shelfHead, row);
    productGrid.append(shelfSection);
  });

  bindInquiryTriggers(productGrid);
  bindCartButtons(productGrid);
  bindFavoriteButtons(productGrid);
  bindDetailTriggers(productGrid);
  bindReviewTriggers(productGrid);
}

function renderProductDetail(product) {
  if (!product || !productDetail) return;

  const name = productName(product);
  const secondaryName = secondaryProductName(product);
  const description = productDescription(product);
  const voice = productVoice(product);
  const features = currentLang === "ja" ? product.featuresJa : product.featuresEs;
  const longDescription = currentLang === "ja" ? product.longDescriptionJa : product.longDescriptionEs;
  const sellingPoints = currentLang === "ja" ? product.sellingPointsJa : product.sellingPointsEs;
  const careNote = currentLang === "ja" ? product.careNoteJa : product.careNoteEs;
  const options = currentLang === "ja" ? product.availableOptionsJa : product.availableOptionsEs;
  const recommended = currentLang === "ja" ? product.recommendedForJa : product.recommendedForEs;
  const galleryImages = productGalleryImages(product);
  const fallbackImage = productImageErrorFallback(product);
  const optionGroups = customerOptionGroups(product);
  const relatedProducts = (product.relatedIds || []).map(getProduct).filter(Boolean);
  const specsSummary = product.specs
    .map((spec) => {
      const label = currentLang === "ja" ? spec.labelJa : spec.labelEs;
      const value = currentLang === "ja" ? spec.valueJa : spec.valueEs;
      return { label, value };
    });
  const detailOptionsMarkup = optionGroups.length
    ? `
        <div class="detail-divider"></div>
        <div class="detail-options-stack">
          ${optionGroups
            .map(({ label, values }) => {
              return `
                <div class="detail-option-group">
                  <h4>${label}</h4>
                  <div class="option-chip-row">
                    ${values
                      .map(
                        (chip, index) =>
                          `<button class="${index === 0 ? "is-active" : ""}" type="button" data-option-chip aria-pressed="${index === 0 ? "true" : "false"}"><span>${chip}</span></button>`,
                      )
                      .join("")}
                  </div>
                </div>
              `;
            })
            .join("")}
        </div>
      `
    : "";

  productDetail.innerHTML = `
    <article class="detail-layout" data-category="${product.category}">
      <nav class="detail-breadcrumb" aria-label="Breadcrumb">
        <button type="button" data-back-to-catalog>${t("breadcrumbHome")}</button>
        <span>›</span>
        <button type="button" data-back-to-catalog>${currentLang === "ja" ? "商品" : "Productos"}</button>
        <span>›</span>
        <strong>${name}</strong>
      </nav>
      <div class="detail-gallery">
        <div class="detail-media">
          <button class="gallery-arrow" type="button" aria-label="Previous" data-gallery-step="-1">‹</button>
          <img src="${galleryImages[0]}" alt="${name}" data-gallery-main referrerpolicy="no-referrer" onerror="this.onerror=null;this.src='${fallbackImage}'">
          <button class="gallery-arrow" type="button" aria-label="Next" data-gallery-step="1">›</button>
          <span class="gallery-count" data-gallery-count>1 / ${galleryImages.length}</span>
        </div>
        <div class="detail-thumbnails">
          ${galleryImages
            .map(
              (image, index) => `
                <button type="button" class="${index === 0 ? "is-active" : ""}" aria-label="${name} ${index + 1}" data-gallery-index="${index}">
                  <img src="${image}" alt="" referrerpolicy="no-referrer" onerror="this.onerror=null;this.src='${fallbackImage}'">
                </button>
              `,
            )
            .join("")}
        </div>
      </div>
      <div class="detail-summary" data-detail-product-id="${product.id}">
        <div class="detail-heading-row">
          <div>
            <span class="detail-brand-pill">${product.brand}</span>
            <h3>${name}</h3>
            <p class="secondary-name">${secondaryName}</p>
          </div>
          <button class="detail-favorite-button" type="button" data-favorite-product-id="${product.id}" aria-label="${favoriteButtonText(product.id)} ${name}" aria-pressed="${isFavoriteProduct(product.id)}">
            <span data-favorite-icon aria-hidden="true">${isFavoriteProduct(product.id) ? "♥" : "♡"}</span>
            <span data-favorite-label>${favoriteButtonText(product.id)}</span>
          </button>
        </div>
        <div class="detail-stock-line">
          <span class="stock-dot" aria-hidden="true"></span>
          <strong>${t("stockInline")}</strong>
          <span>${t("stockInlineDetail")}</span>
        </div>
        <div class="detail-rating" aria-label="Rating">
          <span aria-hidden="true">★★★★★</span>
          <button type="button" data-review-product-id="${product.id}">${t("viewReviews")}</button>
        </div>
        <p class="detail-description">${description}</p>
        <div class="product-voice detail-product-voice">
          <span>${t("detailVoiceTitle")}</span>
          <p>${voice}</p>
        </div>
        <div class="detail-price">
          <strong data-detail-price>${product.priceClp}</strong>
          <span>${t("detailTax")}</span>
        </div>
        ${detailOptionsMarkup}
        <div class="detail-divider"></div>
        <div class="detail-buy-row">
          <div class="quantity-control" aria-label="${t("detailQuantity")}">
            <button type="button" data-quantity-step="-1">−</button>
            <span data-quantity-value>1</span>
            <button type="button" data-quantity-step="1">+</button>
          </div>
          <button class="button cart-cta detail-cart" type="button" data-cart-product-id="${product.id}" aria-label="${t("addToCart")} ${name}">
            <span class="cart-cta-icon" aria-hidden="true"></span>
            <span class="cart-cta-text">${t("addToCart")}</span>
          </button>
        </div>
        <p class="detail-note">${t("detailContactNote")}</p>
        ${detailPurchaseGuideMarkup(product)}
        ${compatibleRefillMarkup(product)}
        <div data-favorite-shelf>
          ${favoriteShelfMarkup()}
        </div>
      </div>
      <section class="detail-panel detail-wide detail-description-panel">
        <h4>${t("detailDescription")}</h4>
        <p>${longDescription || description}</p>
      </section>
      <section class="detail-panel">
        <h4>${t("detailFeatures")}</h4>
        <ul class="feature-list">
          ${features.map((feature) => `<li>${feature}</li>`).join("")}
        </ul>
      </section>
      <section class="detail-panel">
        <h4>${t("detailSpecs")}</h4>
        <dl class="spec-list">
          ${specsSummary
            .map((spec) => `<div><dt>${spec.label}</dt><dd>${spec.value}</dd></div>`)
            .join("")}
        </dl>
      </section>
      <section class="detail-panel">
        <h4>${t("detailSellingPoints")}</h4>
        <ul class="feature-list">
          ${(sellingPoints || []).map((point) => `<li>${point}</li>`).join("")}
        </ul>
      </section>
      <section class="detail-panel">
        <h4>${t("detailCareNote")}</h4>
        <p>${careNote}</p>
      </section>
      <section class="detail-panel detail-wide">
        <h4>${t("detailOptions")}</h4>
        <p>${options}</p>
        <h4>${t("detailRecommended")}</h4>
        <p>${recommended}</p>
      </section>
      <section class="detail-related detail-wide">
        <h4>${t("detailRelated")}</h4>
        <div class="related-grid">
          ${relatedProducts
            .map(
              (related) => {
                const relatedImage = productDisplayImage(related);
                const relatedFallbackImage = productImageErrorFallback(related);
                return `
                  <button class="related-card" type="button" data-detail-product-id="${related.id}">
                    <img src="${relatedImage}" alt="${productName(related)}" referrerpolicy="no-referrer" onerror="this.onerror=null;this.src='${relatedFallbackImage}'">
                    <span>${productName(related)}</span>
                    <strong>${related.priceClp}</strong>
                  </button>
                `;
              },
            )
            .join("")}
        </div>
      </section>
      <section class="detail-reviews detail-wide" id="product-reviews">
        <div class="reviews-heading">
          <div>
            <h4>${t("reviewsTitle")}</h4>
            <p>${t("reviewsNoPublished")}</p>
          </div>
          <div class="reviews-score" aria-label="${t("detailReviews")}">
            <span aria-hidden="true">★★★★★</span>
            <strong>--</strong>
          </div>
        </div>
        <div class="review-empty-state">
          <h5>${t("reviewsEmptyTitle")}</h5>
          <p>${t("reviewsEmptyText")}</p>
          <button class="button button-primary inquiry-trigger" type="button" data-product-id="${product.id}">
            ${t("detailAskMain")}
          </button>
        </div>
      </section>
    </article>
  `;

  productDetail.querySelectorAll("[data-back-to-catalog]").forEach((button) => {
    button.addEventListener("click", navigateToCatalog);
  });
  bindGalleryControls(productDetail);
  bindQuantityControls(productDetail);
  bindOptionChips(productDetail);
  bindInquiryTriggers(productDetail);
  bindCartButtons(productDetail);
  bindRefillBundleButtons(productDetail);
  bindFavoriteButtons(productDetail);
  bindDetailTriggers(productDetail);
  bindReviewTriggers(productDetail);
  syncCompatibleRefillThickness(productDetail.querySelector(".detail-summary"));
  updateDetailSelectedPrice(productDetail.querySelector(".detail-summary"), false);
  updateCompatibleRefillCardPrices(productDetail, false);

  if (shouldFocusReviews()) {
    requestAnimationFrame(() => {
      productDetail.querySelector("#product-reviews")?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }
}

function renderCategories() {
  if (!categoryGrid) return;
  categoryGrid.innerHTML = "";

  categories
    .filter((category) => category.key !== "all")
    .forEach((category) => {
      const card = document.createElement("article");
      card.className = "category-card";
      card.innerHTML = `
        <img class="category-image" src="${category.image}" alt="${currentLang === "ja" ? category.titleJa : category.titleEs}" referrerpolicy="no-referrer" onerror="this.onerror=null;this.src='assets/product-image-pending.svg'">
        <div class="category-content">
          <h3>${currentLang === "ja" ? category.titleJa : category.titleEs}</h3>
          <p>${currentLang === "ja" ? category.descriptionJa : category.descriptionEs}</p>
          <span>${t("viewCollection")}</span>
        </div>
      `;
      categoryGrid.append(card);
    });
}

function showToast(message) {
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add("is-visible");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => {
    toast.classList.remove("is-visible");
  }, 2600);
}

function bindInquiryTriggers(scope = document) {
  scope.querySelectorAll(".inquiry-trigger").forEach((trigger) => {
    if (trigger.dataset.bound === "true") return;
    trigger.dataset.bound = "true";
    trigger.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      openInquiry(trigger.dataset.productId || "");
    });
  });
}

function bindCartButtons(scope = document) {
  scope.querySelectorAll("[data-cart-product-id]").forEach((button) => {
    if (button.dataset.cartBound === "true") return;
    button.dataset.cartBound = "true";
    button.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      const detailSummary = button.closest(".detail-summary");
      const quantityNode = detailSummary?.querySelector("[data-quantity-value]");
      const quantity = quantityNode ? Number(quantityNode.textContent) : 1;
      addToCart(
        button.dataset.cartProductId,
        quantity,
        button,
        selectedOptionSummary(detailSummary),
        selectedDetailPrice(detailSummary) || button.dataset.selectedPriceClp || "",
      );
    });
  });
}

function bindRefillBundleButtons(scope = document) {
  scope.querySelectorAll("[data-refill-bundle-id]").forEach((button) => {
    if (button.dataset.refillBundleBound === "true") return;
    button.dataset.refillBundleBound = "true";
    button.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      const detailSummary = button.closest(".detail-summary");
      const refillCard = button.closest(".compatible-refill-card");
      const quantityNode = detailSummary?.querySelector("[data-quantity-value]");
      const quantity = quantityNode ? Number(quantityNode.textContent) : 1;
      addRefillBundleToCart(
        button.dataset.baseProductId,
        button.dataset.refillBundleId,
        quantity,
        button,
        selectedOptionSummary(detailSummary),
        selectedRefillOptionSummary(refillCard),
        selectedDetailPrice(detailSummary),
        selectedCompatibleRefillPrice(refillCard),
      );
    });
  });
}

function bindFavoriteButtons(scope = document) {
  scope.querySelectorAll("[data-favorite-product-id]").forEach((button) => {
    if (button.dataset.favoriteBound === "true") return;
    button.dataset.favoriteBound = "true";
    button.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      toggleFavoriteProduct(button.dataset.favoriteProductId, button);
    });
  });
  updateFavoriteButtons(scope);
}

function bindGalleryControls(scope = document) {
  const mainImage = scope.querySelector("[data-gallery-main]");
  const countNode = scope.querySelector("[data-gallery-count]");
  const thumbnails = [...scope.querySelectorAll("[data-gallery-index]")];
  const images = thumbnails.map((button) => button.querySelector("img")?.src).filter(Boolean);
  if (!mainImage || !countNode || images.length === 0) return;

  let activeIndex = 0;
  const setActiveImage = (index) => {
    activeIndex = (index + images.length) % images.length;
    mainImage.src = images[activeIndex];
    countNode.textContent = `${activeIndex + 1} / ${images.length}`;
    thumbnails.forEach((button, thumbnailIndex) => {
      button.classList.toggle("is-active", thumbnailIndex === activeIndex);
    });
  };

  thumbnails.forEach((button, index) => {
    button.addEventListener("click", () => setActiveImage(index));
  });

  scope.querySelectorAll("[data-gallery-step]").forEach((button) => {
    button.addEventListener("click", () => setActiveImage(activeIndex + Number(button.dataset.galleryStep)));
  });
}

function bindQuantityControls(scope = document) {
  scope.querySelectorAll("[data-quantity-step]").forEach((button) => {
    if (button.dataset.quantityBound === "true") return;
    button.dataset.quantityBound = "true";
    button.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      const control = button.closest(".quantity-control");
      const valueNode = control?.querySelector("[data-quantity-value]");
      if (!control || !valueNode) return;
      const currentValue = Number(valueNode.textContent);
      const step = Number(button.dataset.quantityStep);
      const nextValue = Math.max(1, currentValue + step);
      valueNode.textContent = String(nextValue);
      if (nextValue !== currentValue) {
        playQuantityMotion(control, valueNode, step);
      }
    });
  });
}

function productFamilyVariants(product) {
  const productId = canonicalProductId(product?.id);
  const family = selectableProductFamilies[productId];
  const explicitVariants = (family?.variants || []).map(getRawProduct).filter(Boolean);
  if (explicitVariants.length) return explicitVariants;

  return Object.entries(groupProductReplacements)
    .filter(([, parentId]) => parentId === productId)
    .map(([variantId]) => getRawProduct(variantId))
    .filter(Boolean);
}

function optionChipTextParts(value) {
  const normalized = normalizeText(value);
  return normalized
    .split(/\s*[/|,・]\s*|\s+-\s+/)
    .map((part) => part.trim())
    .filter((part) => part.length >= 2);
}

function optionMatchScore(variant, selectedOptions) {
  const searchable = normalizeText(
    [
      variant.id,
      variant.nameEs,
      variant.nameJa,
      variant.descriptionEs,
      variant.descriptionJa,
      variant.badge?.es,
      variant.badge?.ja,
      variant.priceClp,
      variant.availableOptionsEs,
      variant.availableOptionsJa,
      variant.longDescriptionEs,
      variant.longDescriptionJa,
      variant.careNoteEs,
      variant.careNoteJa,
      ...(variant.specs || []).flatMap((spec) => [spec.valueEs, spec.valueJa]),
      ...(variant.optionGroups || []).flatMap((group) => [
        group.labelEs,
        group.labelJa,
        ...(group.optionsEs || []),
        ...(group.optionsJa || []),
      ]),
    ].join(" "),
  );

  return selectedOptions.reduce((score, option) => {
    const optionText = typeof option === "string" ? option : option.text;
    const optionLabel = typeof option === "string" ? "" : option.label;
    const normalizedOption = normalizeText(optionText);
    const normalizedLabel = normalizeText(optionLabel);
    const isSizeOption = /(punta|mina|grosor|ボール径|芯径)/i.test(normalizedLabel);
    const isIdentityOption = /(color|tinta|cuerpo|modelo|formato|色|インク|軸色|モデル|内容)/i.test(normalizedLabel);
    const size = extractLeadSize(optionText);
    const sizeMatched = size && searchable.includes(size);
    let nextScore = score;

    if (normalizedOption && searchable.includes(normalizedOption)) {
      nextScore += isIdentityOption ? 12 : isSizeOption ? 3 : 5;
    }
    if (sizeMatched) nextScore += isSizeOption ? 2 : 4;
    if (normalizedOption.includes("limited") && searchable.includes("limited")) nextScore += 3;
    if (normalizedOption.includes("限定") && searchable.includes("限定")) nextScore += 3;

    optionChipTextParts(optionText).forEach((part) => {
      if (part && searchable.includes(part)) nextScore += isIdentityOption ? 4 : isSizeOption ? 1 : 2;
    });

    return nextScore;
  }, 0);
}

function selectedVariantProduct(product, scope, groupSelector) {
  const variants = productFamilyVariants(product);
  if (!variants.length || !scope) return product;

  const selectedOptions = [...scope.querySelectorAll(groupSelector)]
    .map((group) => {
      const label = group.querySelector("h4, h5")?.textContent?.trim() || "";
      const text = group.querySelector("[data-option-chip].is-active")?.textContent?.trim() || "";
      return { label, text };
    })
    .filter((option) => option.text);
  if (!selectedOptions.length) return product;

  const [bestMatch] = variants
    .map((variant, index) => ({
      variant,
      index,
      score: optionMatchScore(variant, selectedOptions),
    }))
    .sort((a, b) => b.score - a.score || a.index - b.index);

  return bestMatch?.score > 0 ? bestMatch.variant : product;
}

function playPriceMotion(priceNode, targetPriceClp = "") {
  if (!priceNode) return;
  const previousText = priceNode.textContent.trim();
  const startValue = parsePriceClp(previousText);
  const endValue = parsePriceClp(targetPriceClp);
  const canCount =
    targetPriceClp &&
    Number.isFinite(startValue) &&
    Number.isFinite(endValue) &&
    startValue !== endValue &&
    !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (priceNode.priceAnimationFrame) {
    window.cancelAnimationFrame(priceNode.priceAnimationFrame);
  }

  priceNode.classList.remove("is-price-changing");
  void priceNode.offsetWidth;
  priceNode.classList.add("is-price-changing");
  priceNode.addEventListener("animationend", () => priceNode.classList.remove("is-price-changing"), { once: true });

  if (!canCount) {
    if (targetPriceClp) priceNode.textContent = targetPriceClp;
    return;
  }

  const duration = 560;
  const startedAt = performance.now();
  const distance = endValue - startValue;
  const easeOutCubic = (value) => 1 - Math.pow(1 - value, 3);

  const tick = (timestamp) => {
    const progress = Math.max(0, Math.min(1, (timestamp - startedAt) / duration));
    const currentValue = Math.round(startValue + distance * easeOutCubic(progress));
    priceNode.textContent = formatClp(currentValue);

    if (progress < 1) {
      priceNode.priceAnimationFrame = window.requestAnimationFrame(tick);
      return;
    }

    priceNode.textContent = targetPriceClp;
    priceNode.priceAnimationFrame = null;
  };

  priceNode.priceAnimationFrame = window.requestAnimationFrame(tick);
}

function updateDetailSelectedPrice(detailSummary, animate = true) {
  if (!detailSummary) return;
  const product = getProduct(detailSummary.dataset.detailProductId);
  if (!product) return;

  const selectedVariant = selectedVariantProduct(product, detailSummary, ".detail-option-group");
  const priceClp = selectedVariant.priceClp || product.priceClp;
  const priceNode = detailSummary.querySelector("[data-detail-price]");
  const cartButton = detailSummary.querySelector("[data-cart-product-id]");
  const didChange = priceNode && priceNode.textContent.trim() !== priceClp;

  if (priceNode && (!animate || !didChange)) priceNode.textContent = priceClp;
  if (cartButton) {
    cartButton.dataset.selectedPriceClp = priceClp;
    cartButton.dataset.selectedVariantId = selectedVariant.id;
  }
  if (animate && didChange) playPriceMotion(priceNode, priceClp);
}

function selectedDetailPrice(detailSummary) {
  return detailSummary?.querySelector("[data-detail-price]")?.textContent?.trim() || "";
}

function updateCompatibleRefillCardPrice(refillCard, animate = true) {
  if (!refillCard) return;
  const button = refillCard.querySelector("[data-refill-bundle-id]");
  const refill = getProduct(button?.dataset.refillBundleId);
  if (!button || !refill) return;

  const selectedVariant = selectedVariantProduct(refill, refillCard, ".compatible-refill-option-group");
  const priceClp = selectedVariant.priceClp || refill.priceClp;
  const priceNode = refillCard.querySelector(".compatible-refill-copy span");
  const didChange = priceNode && priceNode.textContent.trim() !== priceClp;

  if (priceNode && (!animate || !didChange)) priceNode.textContent = priceClp;
  button.dataset.selectedRefillPriceClp = priceClp;
  button.dataset.selectedRefillVariantId = selectedVariant.id;
  if (animate && didChange) playPriceMotion(priceNode, priceClp);
}

function updateCompatibleRefillCardPrices(scope = document, animate = true) {
  scope.querySelectorAll(".compatible-refill-card").forEach((card) => updateCompatibleRefillCardPrice(card, animate));
}

function selectedCompatibleRefillPrice(refillCard) {
  return (
    refillCard?.querySelector("[data-refill-bundle-id]")?.dataset.selectedRefillPriceClp ||
    refillCard?.querySelector(".compatible-refill-copy span")?.textContent?.trim() ||
    ""
  );
}

function selectedOptionSummary(scope) {
  if (!scope) return "";
  return [...scope.querySelectorAll(".detail-option-group")]
    .map((group) => {
      const label = group.querySelector("h4")?.textContent?.trim();
      const activeChip = group.querySelector("[data-option-chip].is-active")?.textContent?.trim();
      return label && activeChip ? `${label}: ${activeChip}` : "";
    })
    .filter(Boolean)
    .join(" / ");
}

function selectedRefillOptionSummary(scope) {
  if (!scope) return "";
  return [...scope.querySelectorAll(".compatible-refill-option-group")]
    .map((group) => {
      const label = group.querySelector("h5")?.textContent?.trim();
      const activeChip = group.querySelector("[data-option-chip].is-active")?.textContent?.trim();
      return label && activeChip ? `${label}: ${activeChip}` : "";
    })
    .filter(Boolean)
    .join(" / ");
}

function extractLeadSize(value) {
  const normalized = String(value || "")
    .replace(/\s+/g, "")
    .replace(/,/g, ".")
    .toLowerCase();
  const match = normalized.match(/(?:0|０)\.(?:28|3|38|4|5|7|9)|(?:1|１)\.(?:3)/);
  return match ? match[0].replace(/^０/, "0").replace(/^１/, "1") : "";
}

function syncCompatibleRefillThickness(detailSummary, selectedText = "") {
  if (!detailSummary) return;
  const size =
    extractLeadSize(selectedText) ||
    extractLeadSize(
      [...detailSummary.querySelectorAll(".detail-option-group [data-option-chip].is-active")]
        .map((chip) => chip.textContent)
        .join(" "),
    );
  if (!size) return;

  detailSummary.querySelectorAll(".compatible-refill-option-group").forEach((group) => {
    const label = group.querySelector("h5")?.textContent?.trim().toLowerCase() || "";
    if (!/(punta|grosor|ボール径|芯径)/i.test(label)) return;

    const chips = [...group.querySelectorAll("[data-option-chip]")];
    const match = chips.find((chip) => extractLeadSize(chip.textContent) === size);
    if (!match) return;

    chips.forEach((chip) => {
      const isActive = chip === match;
      chip.classList.toggle("is-active", isActive);
      chip.setAttribute("aria-pressed", String(isActive));
    });
  });
}

function bindOptionChips(scope = document) {
  scope.querySelectorAll(".option-chip-row").forEach((row) => {
    row.querySelectorAll("[data-option-chip]").forEach((button) => {
      if (button.dataset.optionBound === "true") return;
      button.dataset.optionBound = "true";
      button.addEventListener("click", (event) => {
        event.preventDefault();
        event.stopPropagation();
        row.querySelectorAll("[data-option-chip]").forEach((chip) => {
          chip.classList.toggle("is-active", chip === button);
          chip.setAttribute("aria-pressed", String(chip === button));
        });
        button.classList.remove("is-tapping");
        void button.offsetWidth;
        button.classList.add("is-tapping");
        button.addEventListener("animationend", () => button.classList.remove("is-tapping"), { once: true });
        const detailSummary = button.closest(".detail-summary");
        if (button.closest(".detail-option-group")) {
          syncCompatibleRefillThickness(detailSummary, button.textContent);
          updateDetailSelectedPrice(detailSummary);
          updateCompatibleRefillCardPrices(detailSummary);
        }
        if (button.closest(".compatible-refill-option-group")) {
          updateCompatibleRefillCardPrice(button.closest(".compatible-refill-card"));
        }
      });
    });
  });
}

function bindDetailTriggers(scope = document) {
  scope.querySelectorAll("[data-detail-product-id]").forEach((trigger) => {
    if (trigger.classList.contains("detail-summary")) return;
    if (trigger.dataset.detailBound === "true") return;
    trigger.dataset.detailBound = "true";
    trigger.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      navigateToProduct(trigger.dataset.detailProductId);
    });
    trigger.addEventListener("keydown", (event) => {
      if (event.key !== "Enter" && event.key !== " ") return;
      event.preventDefault();
      navigateToProduct(trigger.dataset.detailProductId);
    });
  });
}

function bindReviewTriggers(scope = document) {
  scope.querySelectorAll("[data-review-product-id]").forEach((trigger) => {
    if (trigger.dataset.reviewBound === "true") return;
    trigger.dataset.reviewBound = "true";
    trigger.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      navigateToReviews(trigger.dataset.reviewProductId);
    });
  });
}

document.querySelectorAll("[data-inquiry-close]").forEach((control) => {
  control.addEventListener("click", closeInquiry);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && inquiryModal && inquiryModal.classList.contains("is-visible")) {
    closeInquiry();
  }
  if (event.key === "Escape" && document.body.classList.contains("menu-open")) {
    closeCategoryMenu();
  }
  if (event.key === "Escape" && cartDrawerIsOpen()) {
    closeCartDrawer();
  }
});

document.addEventListener("pointerdown", (event) => {
  if (!(event.target instanceof Element)) return;
  const target = event.target.closest(softTapSelector);
  if (!target || target.getAttribute("aria-disabled") === "true" || target.disabled) return;
  playSoftTap(target, event);
});

document.addEventListener("keydown", (event) => {
  if (event.key !== "Enter" && event.key !== " ") return;
  if (!(event.target instanceof Element)) return;
  const target = event.target.closest(softTapSelector);
  if (!target || target.getAttribute("aria-disabled") === "true" || target.disabled) return;
  playSoftTap(target);
});

if (menuToggle) {
  menuToggle.addEventListener("click", () => {
    if (document.body.classList.contains("menu-open")) {
      closeCategoryMenu();
    } else {
      openCategoryMenu();
    }
  });
}

[...productsMenuTriggers, ...categoriesMenuTriggers].forEach((trigger) => {
  trigger.addEventListener("click", openHeaderSelection);
});

if (heroDots) {
  heroDots.addEventListener("click", (event) => {
    const button = event.target.closest("[data-hero-index]");
    if (!button) return;
    event.preventDefault();
    event.stopPropagation();
    renderHeroSlide(Number(button.dataset.heroIndex));
  });
}

async function copyTextToClipboard(message, successKey, fallbackField = null) {
  try {
    if (!navigator.clipboard) throw new Error("Clipboard API unavailable");
    await navigator.clipboard.writeText(message);
    showToast(t(successKey));
  } catch {
    const targetField = fallbackField || document.createElement("textarea");
    if (!fallbackField) {
      targetField.value = message;
      targetField.setAttribute("readonly", "true");
      Object.assign(targetField.style, {
        position: "fixed",
        width: "1px",
        height: "1px",
        opacity: "0",
        pointerEvents: "none",
        inset: "0 auto auto 0",
      });
      document.body.append(targetField);
    }
    targetField.focus();
    targetField.select();
    const copied = document.execCommand("copy");
    if (!fallbackField) targetField.remove();
    showToast(copied ? t(successKey) : t("copyFallback"));
  }
}

if (copyInquiryButton) {
  copyInquiryButton.addEventListener("click", async () => {
    try {
      if (!navigator.clipboard) throw new Error("Clipboard API unavailable");
      await navigator.clipboard.writeText(activeInquiryMessage);
      showToast(t("copySuccess"));
    } catch {
      inquiryMessage.focus();
      inquiryMessage.select();
      const copied = document.execCommand("copy");
      showToast(copied ? t("copySuccess") : t("copyFallback"));
    }
  });
}

if (checkoutCopyButton) {
  checkoutCopyButton.addEventListener("click", async () => {
    await copyTextToClipboard(buildCheckoutMessage(), "checkoutCopySuccess", checkoutMessage);
  });
}

if (cartDrawerCopy) {
  cartDrawerCopy.addEventListener("click", async (event) => {
    event.preventDefault();
    if (!cartEntries().length) {
      showToast(t("cartEmpty"));
      return;
    }
    await copyTextToClipboard(buildCheckoutMessage(), "checkoutCopySuccess");
  });
}

[whatsappInquiry, instagramInquiry].filter(Boolean).forEach((link) => {
  link.addEventListener("click", (event) => {
    if (!link.classList.contains("is-disabled")) return;
    event.preventDefault();
    showToast(t("toast").replace("{channel}", link.dataset.channel || "contacto"));
  });
});

[checkoutWhatsapp, checkoutInstagram].filter(Boolean).forEach((link) => {
  link.addEventListener("click", (event) => {
    if (!link.classList.contains("is-disabled")) return;
    event.preventDefault();
    showToast(t("toast").replace("{channel}", link.dataset.channel || "contacto"));
  });
});

cartButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    if (!isCheckoutPage && cartDrawer) {
      event.preventDefault();
      openCartDrawer();
      playCartBounce(button);
      return;
    }
    if (button.tagName.toLowerCase() === "a") return;
    const total = cartTotal();
    showToast(total ? t("cartSummary").replace("{count}", String(total)) : t("cartEmpty"));
    playCartBounce(button);
  });
});

document.querySelectorAll("[data-cart-drawer-close]").forEach((button) => {
  button.addEventListener("click", closeCartDrawer);
});

if (cartDrawerItems) {
  cartDrawerItems.addEventListener("click", (event) => {
    if (!(event.target instanceof Element)) return;
    const stepButton = event.target.closest("[data-cart-drawer-step]");
    if (stepButton) {
      const productId = stepButton.dataset.cartDrawerProduct;
      const step = Number(stepButton.dataset.cartDrawerStep) || 0;
      setCartItemQuantity(productId, (Number(cartItems[productId]) || 0) + step);
      playCartBounce(visibleCartButton());
      return;
    }

    const removeButton = event.target.closest("[data-cart-drawer-remove]");
    if (removeButton) {
      setCartItemQuantity(removeButton.dataset.cartDrawerRemove, 0);
    }
  });
}

if (cartDrawerCheckout) {
  cartDrawerCheckout.addEventListener("click", (event) => {
    if (cartDrawerCheckout.classList.contains("is-disabled")) {
      event.preventDefault();
      showToast(t("cartEmpty"));
    }
  });
}

document.querySelectorAll("[data-lang-button]").forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.langButton));
});

if (catalogSearch) {
  catalogSearch.addEventListener("input", () => {
    currentSearch = catalogSearch.value;
    renderProducts();
    updateCatalogUrl();
  });
}

if (catalogSort) {
  catalogSort.addEventListener("change", () => {
    currentSort = catalogSort.value;
    renderProducts();
    updateCatalogUrl();
  });
}

if (catalogReset) {
  catalogReset.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation();
    runAfterSoftTap(catalogReset, resetCatalogFilters);
  });
}

window.addEventListener("hashchange", () => {
  closeCategoryMenu();
  clearStaleScrollLocks();
  syncRouteFromHash(false);
});
window.addEventListener("popstate", () => {
  closeCategoryMenu();
  clearStaleScrollLocks();
  syncCatalogStateFromUrl();
  renderCatalogControls();
  renderFilters();
  renderStoreCategoryRail();
  renderStoreDashboard();
  renderBrandRail();
  syncRouteFromHash(false);
});
window.addEventListener("pageshow", clearStaleScrollLocks);

function productDataAudit() {
  const imageUsage = new Map();
  const publicProducts = products.filter((product) => !product.isGroup);
  publicProducts.forEach((product) => {
    productGalleryImages(product)
      .filter((image) => !isPlaceholderProductImage(image))
      .forEach((image) => {
        const ids = imageUsage.get(image) || [];
        ids.push(product.id);
        imageUsage.set(image, ids);
      });
  });

  return {
    totalProducts: publicProducts.length,
    missingImages: publicProducts.filter((product) => !productGalleryImages(product).length).map((product) => product.id),
    imageReviewNeeded: publicProducts.filter(productImageNeedsReview).map((product) => product.id),
    duplicateImages: [...imageUsage.entries()]
      .filter(([, ids]) => new Set(ids).size > 1)
      .map(([image, ids]) => ({ image, ids: [...new Set(ids)] })),
    missingDetailText: publicProducts
      .filter((product) => !product.longDescriptionEs || !product.longDescriptionJa)
      .map((product) => product.id),
    singleChoiceOptionGroups: publicProducts
      .flatMap((product) =>
        (product.optionGroups || [])
          .filter((group) => !isInformationalOptionGroup(group) && optionValuesForBothLanguages(group).length <= 1)
          .map((group) => ({
            productId: product.id,
            label: group.labelEs || group.labelJa || "",
          })),
      ),
    informationalGroupsHidden: publicProducts
      .flatMap((product) =>
        (product.optionGroups || [])
          .filter(isInformationalOptionGroup)
          .map((group) => ({
            productId: product.id,
            label: group.labelEs || group.labelJa || "",
          })),
      ),
    missingCompatibleSupplies: publicProducts
      .filter((product) => ["ballpoint", "mechanical"].includes(product.category))
      .filter((product) => !compatibleSupplyNotExpected.has(product.id))
      .filter((product) => !compatibleRefillProducts(product).length)
      .map((product) => product.id),
  };
}

window.kamiToPenAudit = productDataAudit;
if (new URLSearchParams(window.location.search).get("audit") === "1") {
  console.table(productDataAudit());
}

if (year) year.textContent = new Date().getFullYear();
if (productCountStat) productCountStat.textContent = String(products.filter((product) => !product.isGroup).length);
syncCatalogStateFromUrl();
bindInquiryTriggers();
bindCartButtons();
bindFavoriteButtons();
updateCartDisplay();
setLanguage(currentLang);
renderBrandRail();
startHeroSlideshow();
syncRouteFromHash(false);
