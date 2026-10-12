// ============================================================
// DESCENT TCG — Slab Vault inventory
// Fully hardcoded — name, card number, and pricing (targetPrice /
// purchasePrice / marketPrice) and ownership status are all
// maintained directly in this file. All three price fields are
// optional — null means "not shown" on the page. Update this
// data only when told to (e.g. "bought the Mario Pikachu Promo
// card" or "set target price on Rayquaza Green to $500").
//
// IMPORTANT: TRACKER_PERMANENT_PHOTOS and its data structure
// must never change — that's where already-uploaded photos live.
// ============================================================

const TRACKER_PERMANENT_PHOTOS = {
  'retro teenage mutant ninja turtles': 'assets/photos/marketing/retro-teenage-mutant-ninja-turtles.webp',
  'charizard g lv.x': 'assets/photos/marketing/charizard-g-lv-x.jpeg',
  'pretend comedian pikachu (jp pokemon center osaka dx openning)': 'assets/photos/marketing/pretend-comedian-pikachu-jp-pokemon-center-osaka-dx-openning.webp',
  'team boss pikachu (rocket) (jp)': 'assets/photos/marketing/team-boss-pikachu-rocket-jp.webp',
  'team boss pikachu (aqua) (jp)': 'assets/photos/marketing/team-boss-pikachu-aqua-jp.webp',
  'team boss pikachu (magma) (jp)': 'assets/photos/marketing/team-boss-pikachu-magma-jp.webp',
  'team boss pikachu (galactic) (jp)': 'assets/photos/marketing/team-boss-pikachu-galactic-jp.webp',
  'team boss pikachu (plasma) (jp)': 'assets/photos/marketing/team-boss-pikachu-plasma-jp.webp',
  'team boss pikachu (flare) (jp)': 'assets/photos/marketing/team-boss-pikachu-flare-jp.webp',
  'team boss pikachu (skull) (jp)': 'assets/photos/marketing/team-boss-pikachu-skull-jp.webp',
  'weezing (jp)': 'assets/photos/marketing/weezing-jp.webp',
  'ponyta (jp)': 'assets/photos/marketing/ponyta-jp.webp',
  'kadabra (jp)': 'assets/photos/marketing/kadabra-jp.webp',
  'mewtwo (jp)': 'assets/photos/marketing/mewtwo-jp.webp',
  'tauros (jp)': 'assets/photos/marketing/tauros-jp.webp',
  '3 deck battle (jp)': 'assets/photos/marketing/3-deck-battle-jp.webp',
  'deck exchange (jp)': 'assets/photos/marketing/deck-exchange-jp.webp',
  'imakuni\'s pc (jp)': 'assets/photos/marketing/s-pc-jp.webp',
  'imakuni\'s corner (jp)': 'assets/photos/marketing/s-corner-jp.webp',
  'lose? (jp)': 'assets/photos/marketing/lose-jp.webp',
  'luigi pikachu promo': 'assets/photos/marketing/luigi-pikachu-promo.webp',
  'victini': 'assets/photos/marketing/victini.webp',
  'pikachu ex': 'assets/photos/marketing/pikachu-ex.webp',
  'scyther (jp)': 'assets/photos/marketing/scyther-jp.webp',
  'kingler (jp)': 'assets/photos/marketing/kingler-jp.webp',
  'pretend magikarp pikachu promo': 'assets/photos/marketing/pretend-magikarp-pikachu-promo.webp', // 150/XY-P
  'pretend gyarados pikachu promo': 'assets/photos/marketing/pretend-gyarados-pikachu-promo.webp', // 151/XY-P
  'poncho-wearing pikachu promo - mega charizard x': 'assets/photos/marketing/poncho-wearing-pikachu-promo-mega-charizard-x.webp', // 207/XY-P
  'poncho-wearing pikachu promo - mega charizard y': 'assets/photos/marketing/poncho-wearing-pikachu-promo-mega-charizard-y.webp', // 208/XY-P
  'poncho-wearing pikachu promo - rayquaza green': 'assets/photos/marketing/poncho-wearing-pikachu-promo-rayquaza-green.webp', // 230/XY-P
  'poncho-wearing pikachu promo - rayquaza black': 'assets/photos/marketing/poncho-wearing-pikachu-promo-rayquaza-black.webp', // 231/XY-P
  'mario pikachu promo': 'assets/photos/marketing/mario-pikachu-promo.webp', // 293/XY-P
  'mario pikachu promo - full art': 'assets/photos/marketing/mario-pikachu-promo-full-art.webp', // 294/XY-P
  'luigi pikachu promo': 'assets/photos/marketing/luigi-pikachu-promo-2.webp', // 295/XY-P
  'luigi pikachu promo - full art': 'assets/photos/marketing/luigi-pikachu-promo-full-art.webp', // 296/XY-P
  'pretend team skull pikachu promo': 'assets/photos/marketing/pretend-team-skull-pikachu-promo.webp', // 013/SM-P
  'seismitoad': 'assets/photos/marketing/seismitoad.jpeg', // 105/086
  'zekrom ex': 'assets/photos/marketing/zekrom-ex.webp', // 172/086
  'rayquaza vmax (alternate art secret)': 'assets/photos/marketing/rayquaza-vmax-alternate-art-secret.webp', // 218/203
  'ditto': 'assets/photos/marketing/ditto.webp', // 61
  'pikachu (mcdonald\'s promo)': 'assets/photos/marketing/s-promo.webp', // 020/M-P
  'suicune': 'assets/photos/marketing/suicune.webp', // 30
  'pikachu - 208/s-p (yu nagaba)': 'assets/photos/marketing/pikachu-208-s-p-yu-nagaba.webp', // 208/S-P
  'latias & latios gx (alternate full art)': 'assets/photos/marketing/latias-latios-gx-alternate-full-art.webp', // 170
  'ooyama\'s pikachu (jp)': 'assets/photos/marketing/s-pikachu-jp.webp', // 025
  'reshiram ex': 'assets/photos/marketing/reshiram-ex.webp', // 173/086
  'poncho pikachu (jp)': 'assets/photos/marketing/poncho-pikachu-jp.webp', // 203/XY-P
};

// Hardcoded card list — updated by request only.
const TRACKER_ITEMS = [
  { name: 'Retro Teenage Mutant Ninja Turtles', set: 'Universus CCG - TMNT', no: 'CH TMNT02 1/19', rarity: 'Rare', targetPrice: null, purchasePrice: 130, marketPrice: null, owned: true, grade: 'PSA 10.0 GEM - MT', series: 'Other Slabs' },
  { name: 'Team Boss Pikachu (Rocket) (JP)', set: 'Sun & Moon Promos JP', no: '191/SM-P', rarity: 'Holofoil', targetPrice: null, purchasePrice: null, marketPrice: 3867.14, owned: true, grade: 'PSA 10.0 GEM - MT', series: 'Team Boss Pikachu (JP)' },
  { name: 'Team Boss Pikachu (Aqua) (JP)', set: 'Sun & Moon Promos JP', no: '192/SM-P', rarity: 'Holofoil', targetPrice: null, purchasePrice: null, marketPrice: 3678.25, owned: true, grade: 'PSA 10.0 GEM - MT', series: 'Team Boss Pikachu (JP)' },
  { name: 'Team Boss Pikachu (Magma) (JP)', set: 'Sun & Moon Promos JP', no: '193/SM-P', rarity: 'Holofoil', targetPrice: null, purchasePrice: null, marketPrice: 2513.89, owned: true, grade: 'PSA 10.0 GEM - MT', series: 'Team Boss Pikachu (JP)' },
  { name: 'Team Boss Pikachu (Galactic) (JP)', set: 'Sun & Moon Promos JP', no: '194/SM-P', rarity: 'Holofoil', targetPrice: null, purchasePrice: null, marketPrice: 4022.33, owned: true, grade: 'PSA 10.0 GEM - MT', series: 'Team Boss Pikachu (JP)' },
  { name: 'Team Boss Pikachu (Plasma) (JP)', set: 'Sun & Moon Promos JP', no: '195/SM-P', rarity: 'Holofoil', targetPrice: null, purchasePrice: null, marketPrice: 3215.62, owned: true, grade: 'PSA 10.0 GEM - MT', series: 'Team Boss Pikachu (JP)' },
  { name: 'Team Boss Pikachu (Flare) (JP)', set: 'Sun & Moon Promos JP', no: '196/SM-P', rarity: 'Holofoil', targetPrice: null, purchasePrice: null, marketPrice: 2767, owned: true, grade: 'PSA 10.0 GEM - MT', series: 'Team Boss Pikachu (JP)' },
  { name: 'Team Boss Pikachu (Skull) (JP)', set: 'Sun & Moon Promos JP', no: '197/SM-P', rarity: 'Holofoil', targetPrice: null, purchasePrice: null, marketPrice: 3527.25, owned: true, grade: 'PSA 10.0 GEM - MT', series: 'Team Boss Pikachu (JP)' },
  { name: 'Pretend Comedian Pikachu (JP Pokemon Center Osaka DX Openning)', set: 'Sun & Moon Promos JP', no: '407/SM-P', rarity: 'Holofoil', targetPrice: null, purchasePrice: null, marketPrice: 941.35, owned: true, grade: 'PSA 10.0 GEM - MT', series: "Poncho Pikachu's" },
  { name: 'Charizard G LV.X', set: 'Garchomp vs Charizard SP Deck Kit (Charizard)', no: '002/016', rarity: '1st Edition', targetPrice: null, purchasePrice: null, marketPrice: 5076.94, owned: true, grade: 'PSA 10.0 GEM - MT', series: 'Other Slabs' },
  { name: 'Pretend Team Skull Pikachu Promo', no: '013/SM-P', targetPrice: null, purchasePrice: null, marketPrice: null, owned: false },
  { name: 'Pretend Magikarp Pikachu Promo', no: '150/XY-P', targetPrice: null, purchasePrice: null, marketPrice: null, owned: false },
  { name: 'Pretend Gyarados Pikachu Promo', no: '151/XY-P', targetPrice: null, purchasePrice: null, marketPrice: null, owned: false },
  { name: 'Poncho-wearing Pikachu Promo - Mega Charizard X', no: '207/XY-P', targetPrice: null, purchasePrice: null, marketPrice: null, owned: false },
  { name: 'Poncho-wearing Pikachu Promo - Mega Charizard Y', no: '208/XY-P', targetPrice: null, purchasePrice: null, marketPrice: null, owned: false },
  { name: 'Poncho-wearing Pikachu Promo - Rayquaza Green', no: '230/XY-P', targetPrice: null, purchasePrice: null, marketPrice: null, owned: false },
  { name: 'Poncho-wearing Pikachu Promo - Rayquaza Black', no: '231/XY-P', targetPrice: null, purchasePrice: null, marketPrice: null, owned: false },
  { name: 'Mario Pikachu Promo', no: '293/XY-P', targetPrice: null, purchasePrice: null, marketPrice: null, owned: false },
  { name: 'Mario Pikachu Promo - Full Art', no: '294/XY-P', targetPrice: null, purchasePrice: null, marketPrice: null, owned: false },
  { name: 'Luigi Pikachu Promo', set: 'XY Promos (JP)', no: '295/XY-P', targetPrice: 6976.25, purchasePrice: 7000, marketPrice: 6677.29, owned: true, grade: 'PSA 10.0 GEM - MT', series: "Poncho Pikachu's", rarity: 'Rare' },
  { name: 'Luigi Pikachu Promo - Full Art', no: '296/XY-P', targetPrice: null, purchasePrice: null, marketPrice: null, owned: false },
  { name: 'Seismitoad', set: 'Black Bolt', no: '105/086', targetPrice: 2813.72, purchasePrice: 2450, marketPrice: 2444.96, owned: true, grade: 'PSA 10.0 GEM - MT', series: 'Scarlet & Violet: Black Bolt & White Flare', rarity: 'Illustration Rare' },
  { name: 'Zekrom ex', set: 'Black Bolt', no: '172/086', targetPrice: 1569.31, purchasePrice: 1525, marketPrice: 1532.52, owned: true, grade: 'PSA 10.0 GEM - MT', series: 'Scarlet & Violet: Black Bolt & White Flare', rarity: 'Black White Rare' },
  { name: 'Ditto', set: 'EX Delta Species', no: '61', targetPrice: 3733.33, purchasePrice: 2200, marketPrice: 2947.6, owned: true, grade: 'PSA 10.0 GEM - MT', series: 'Other Slabs', rarity: 'Common' },
  { name: 'Pikachu (McDonald\'s Promo)', set: 'McDonald\'s Promo (2025)', no: '020/M-P', targetPrice: 95.12, purchasePrice: 115, marketPrice: 97.48, owned: true, grade: 'PSA 10.0 GEM - MT', series: 'Other Slabs', rarity: 'Common' },
  { name: 'Suicune', set: 'Nintendo Promos', no: '30', targetPrice: 12000, purchasePrice: 7000, marketPrice: 275.69, owned: true, grade: 'PSA 10.0 GEM - MT', series: 'Other Slabs', rarity: 'Holo Rare' },
  { name: 'Ooyama\'s Pikachu (JP)', set: 'Vending Series 3 (Green)', no: '025', targetPrice: 7256.47, purchasePrice: 7600, marketPrice: 7310.64, owned: true, grade: 'PSA 10.0 GEM - MT', series: 'Vending Series 3 (Green)', rarity: 'Rare' },
  { name: 'Reshiram ex', set: 'White Flare', no: '173/086', targetPrice: 1289.88, purchasePrice: 1200, marketPrice: 1303.54, owned: true, grade: 'PSA 10.0 GEM - MT', series: 'Scarlet & Violet: Black Bolt & White Flare', rarity: 'Black White Rare' },
  { name: 'Pikachu ex', set: 'Ascended Heroes', no: '277/217', targetPrice: 1107.55, purchasePrice: 1000, marketPrice: 1129.58, owned: true, grade: 'PSA 10.0 GEM - MT', series: 'Other Slabs', rarity: 'Special Illustration Rare' },
  { name: 'Victini', set: 'Black Bolt', no: '171/086', targetPrice: 1530.61, purchasePrice: 1350, marketPrice: 1538.69, owned: true, grade: 'PSA 10.0 GEM - MT', series: 'Scarlet & Violet: Black Bolt & White Flare', rarity: 'Black White Rare' },
  { name: '3 Deck Battle (JP)', set: 'Vending Series 3 (Green)', no: '03', targetPrice: 182.5, purchasePrice: 200, marketPrice: 182.5, owned: true, grade: 'PSA 10.0 GEM - MT', series: 'Vending Series 3 (Green)', rarity: 'Rare' },
  { name: 'Deck Exchange (JP)', set: 'Vending Series 3 (Green)', no: '05', targetPrice: 246.3, purchasePrice: 300, marketPrice: 249.53, owned: true, grade: 'PSA 10.0 GEM - MT', series: 'Vending Series 3 (Green)', rarity: 'Rare' },
  { name: 'Imakuni\'s Corner (JP)', set: 'Vending Series 3 (Green)', no: '', targetPrice: 1100, purchasePrice: 550, marketPrice: 313.43, owned: true, grade: 'PSA 10.0 GEM - MT', note: 'Qty: 2', series: 'Vending Series 3 (Green)' },
  { name: 'Imakuni\'s PC (JP)', set: 'Vending Series 3 (Green)', no: '', targetPrice: 283.01, purchasePrice: 400, marketPrice: 328.05, owned: true, grade: 'PSA 10.0 GEM - MT', series: 'Vending Series 3 (Green)' },
  { name: 'Kadabra (JP)', set: 'Vending Series 3 (Green)', no: '064', targetPrice: 1136.65, purchasePrice: 1000, marketPrice: 1136.65, owned: true, grade: 'PSA 10.0 GEM - MT', note: 'Qty: 2', series: 'Vending Series 3 (Green)', rarity: 'Uncommon' },
  { name: 'Kingler (JP)', set: 'Vending Series 3 (Green)', no: '099', targetPrice: 242.5, purchasePrice: 200, marketPrice: 242.5, owned: true, grade: 'PSA 10.0 GEM - MT', series: 'Vending Series 3 (Green)', rarity: 'Rare' },
  { name: 'Lose? (JP)', set: 'Vending Series 3 (Green)', no: '', targetPrice: 631.04, purchasePrice: 800, marketPrice: 568.52, owned: true, grade: 'PSA 10.0 GEM - MT', series: 'Vending Series 3 (Green)' },
  { name: 'Mewtwo (JP)', set: 'Vending Series 3 (Green)', no: '150', targetPrice: 2948.41, purchasePrice: 2800, marketPrice: 2948.41, owned: true, grade: 'PSA 10.0 GEM - MT', series: 'Vending Series 3 (Green)', rarity: 'Rare' },
  { name: 'Ponyta (JP)', set: 'Vending Series 3 (Green)', no: '077', targetPrice: 238.19, purchasePrice: 300, marketPrice: 238.19, owned: true, grade: 'PSA 10.0 GEM - MT', series: 'Vending Series 3 (Green)', rarity: 'Common' },
  { name: 'Scyther (JP)', set: 'Vending Series 3 (Green)', no: '123', targetPrice: 450, purchasePrice: 400, marketPrice: 450, owned: true, grade: 'PSA 10.0 GEM - MT', series: 'Vending Series 3 (Green)', rarity: 'Rare' },
  { name: 'Tauros (JP)', set: 'Vending Series 3 (Green)', no: '128', targetPrice: 327.75, purchasePrice: 400, marketPrice: 327.75, owned: true, grade: 'PSA 10.0 GEM - MT', series: 'Vending Series 3 (Green)', rarity: 'Rare' },
  { name: 'Weezing (JP)', set: 'Vending Series 3 (Green)', no: '110', targetPrice: 212.51, purchasePrice: 230, marketPrice: 212.51, owned: true, grade: 'PSA 10.0 GEM - MT', series: 'Vending Series 3 (Green)', rarity: 'Rare' },
];

function itemKeyFor(name) {
  return (name || '').trim().toLowerCase();
}

let trackerFilter = 'all';
let trackerSearchTerm = '';

function renderTrackerGrid() {
  const grid = document.getElementById('tracker-grid');
  const count = document.getElementById('tracker-count');
  if (!grid || !count) return;

  const term = trackerSearchTerm.trim().toLowerCase();
  const visible = TRACKER_ITEMS.filter(i => {
    const matchesStatus = trackerFilter === 'all' ||
      (trackerFilter.toLowerCase() === 'own' ? i.owned : !i.owned);
    const matchesSearch = !term || (i.name || '').toLowerCase().includes(term);
    return matchesStatus && matchesSearch;
  });

  count.textContent = visible.length + (visible.length === 1 ? ' card' : ' cards');
  grid.innerHTML = '';

  if (!visible.length) {
    const empty = document.createElement('p');
    empty.style.color = 'var(--ink-faint)';
    empty.textContent = 'No cards match this filter.';
    grid.appendChild(empty);
    return;
  }

  visible.forEach(item => {
    const key = itemKeyFor(item.name);
    const photoSrc = TRACKER_PERMANENT_PHOTOS[key];
    const isOwned = !!item.owned;

    const card = document.createElement('article');
    card.className = 'card-slab';
    if (isOwned) card.classList.add('in-stock');

    // --- label bar: No. on the left, status badge on the right ---
    const label = document.createElement('div');
    label.className = 'card-slab-label';
    label.style.cssText = 'display:flex; justify-content:space-between; align-items:center;';

    const noSpan = document.createElement('span');
    noSpan.textContent = item.no || '';
    noSpan.style.cssText = 'font-family:var(--mono); font-weight:700; font-size:0.85rem; letter-spacing:0.02em; color:var(--ink);';
    label.appendChild(noSpan);

    const statusBadge = document.createElement('span');
    statusBadge.textContent = isOwned ? 'Own' : 'Still looking';
    statusBadge.style.cssText = `font-family:var(--mono); font-weight:700; font-size:0.8rem; text-transform:uppercase; letter-spacing:0.04em; color:${isOwned ? 'var(--mint)' : 'var(--citrus)'};`;
    label.appendChild(statusBadge);

    card.appendChild(label);

    // --- photo ---
    const art = document.createElement('div');
    art.className = 'card-art';
    art.style.position = 'relative';

    if (photoSrc) {
      const img = document.createElement('img');
      img.src = photoSrc;
      img.alt = item.name || '';
      img.style.cssText = 'width:100%;height:100%;object-fit:cover;';
      art.appendChild(img);
    } else {
      art.innerHTML = '<span class="card-glyph">?</span>';
    }
    card.appendChild(art);

    // --- body ---
    const body = document.createElement('div');
    body.className = 'card-body';
    const h3 = document.createElement('h3');
    h3.textContent = item.name || 'Untitled';
    body.appendChild(h3);

    // Target / Purchase / Market price stack
    const priceRow = document.createElement('div');
    priceRow.style.cssText = 'display:flex; align-items:stretch; margin-top:14px; background:var(--paper); border:1px solid var(--line); border-radius:6px; overflow:hidden;';

    function formatPrice(v) {
      return (v === null || v === undefined) ? '—' : '$' + Number(v).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    }
    function buildPriceCol(labelText, value, isLast) {
      const col = document.createElement('div');
      col.style.cssText = `flex:1; min-width:0; text-align:center; padding:6px 4px;${isLast ? '' : ' border-right:1px solid var(--line);'}`;
      const lbl = document.createElement('div');
      lbl.textContent = labelText;
      lbl.style.cssText = 'font-family:var(--mono); font-size:0.56rem; text-transform:uppercase; letter-spacing:0.03em; color:var(--ink-faint); margin-bottom:3px;';
      const val = document.createElement('div');
      val.textContent = formatPrice(value);
      val.style.cssText = `font-family:var(--mono); font-size:0.68rem; font-weight:700; white-space:nowrap; overflow:hidden; text-overflow:ellipsis; color:${value === null || value === undefined ? 'var(--ink-faint)' : 'var(--ink)'};`;
      col.appendChild(lbl);
      col.appendChild(val);
      return col;
    }

    priceRow.appendChild(buildPriceCol('Target', item.targetPrice, false));
    priceRow.appendChild(buildPriceCol('Purchase', item.purchasePrice, false));
    priceRow.appendChild(buildPriceCol('Market', item.marketPrice, true));
    body.appendChild(priceRow);

    card.appendChild(body);
    grid.appendChild(card);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  renderTrackerGrid();

  document.querySelectorAll('#tracker-filters .filter-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      document.querySelectorAll('#tracker-filters .filter-chip').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      trackerFilter = chip.dataset.status;
      renderTrackerGrid();
    });
  });

  const search = document.getElementById('tracker-search');
  if (search) {
    search.addEventListener('input', () => {
      trackerSearchTerm = search.value;
      renderTrackerGrid();
    });
  }
});
