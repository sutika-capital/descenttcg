// ============================================================
// TCG VAULT — TEAM BOSS PIKACHU (JP) COLLECTION
// Owner-approved seven-card collection shown separately from
// the sealed inventory and archived general graded-card data.
// ============================================================

const BOSS_PIKACHU_PHOTOS = {
  'team boss pikachu (rocket) (jp)': 'assets/photos/marketing/team-boss-pikachu-rocket-jp.webp',
  'team boss pikachu (aqua) (jp)': 'assets/photos/marketing/team-boss-pikachu-aqua-jp.webp',
  'team boss pikachu (magma) (jp)': 'assets/photos/marketing/team-boss-pikachu-magma-jp.webp',
  'team boss pikachu (galactic) (jp)': 'assets/photos/marketing/team-boss-pikachu-galactic-jp.webp',
  'team boss pikachu (plasma) (jp)': 'assets/photos/marketing/team-boss-pikachu-plasma-jp.webp',
  'team boss pikachu (flare) (jp)': 'assets/photos/marketing/team-boss-pikachu-flare-jp.webp',
  'team boss pikachu (skull) (jp)': 'assets/photos/marketing/team-boss-pikachu-skull-jp.webp',
};

const BOSS_PIKACHU_ITEMS = [
  { name: 'Team Boss Pikachu (Rocket) (JP)', set: 'Sun & Moon Promos JP', no: '191/SM-P', rarity: 'Holofoil', marketPrice: 3867.14, grade: 'PSA 10.0 GEM - MT' },
  { name: 'Team Boss Pikachu (Aqua) (JP)', set: 'Sun & Moon Promos JP', no: '192/SM-P', rarity: 'Holofoil', marketPrice: 3678.25, grade: 'PSA 10.0 GEM - MT' },
  { name: 'Team Boss Pikachu (Magma) (JP)', set: 'Sun & Moon Promos JP', no: '193/SM-P', rarity: 'Holofoil', marketPrice: 2513.89, grade: 'PSA 10.0 GEM - MT' },
  { name: 'Team Boss Pikachu (Galactic) (JP)', set: 'Sun & Moon Promos JP', no: '194/SM-P', rarity: 'Holofoil', marketPrice: 4022.33, grade: 'PSA 10.0 GEM - MT' },
  { name: 'Team Boss Pikachu (Plasma) (JP)', set: 'Sun & Moon Promos JP', no: '195/SM-P', rarity: 'Holofoil', marketPrice: 3215.62, grade: 'PSA 10.0 GEM - MT' },
  { name: 'Team Boss Pikachu (Flare) (JP)', set: 'Sun & Moon Promos JP', no: '196/SM-P', rarity: 'Holofoil', marketPrice: 2767.00, grade: 'PSA 10.0 GEM - MT' },
  { name: 'Team Boss Pikachu (Skull) (JP)', set: 'Sun & Moon Promos JP', no: '197/SM-P', rarity: 'Holofoil', marketPrice: 3527.25, grade: 'PSA 10.0 GEM - MT' },
];

function bossPikachuKeyFor(name) {
  return (name || '').trim().toLowerCase();
}

function buildBossPikachuPlaque(item) {
  const plaque = document.createElement('article');
  plaque.className = 'vault-plaque boss-pikachu-plaque';
  const corner1 = document.createElement('span'); corner1.className = 'corner-bl';
  const corner2 = document.createElement('span'); corner2.className = 'corner-br';
  plaque.appendChild(corner1);
  plaque.appendChild(corner2);

  const art = document.createElement('div');
  art.className = 'vault-plaque-art';
  const image = document.createElement('img');
  image.loading = 'lazy';
  image.decoding = 'async';
  image.src = BOSS_PIKACHU_PHOTOS[bossPikachuKeyFor(item.name)];
  image.alt = item.name;
  art.appendChild(image);
  plaque.appendChild(art);

  const name = document.createElement('h3');
  name.textContent = item.name;
  plaque.appendChild(name);

  const set = document.createElement('span');
  set.className = 'vault-plaque-set';
  set.textContent = item.set;
  plaque.appendChild(set);

  const rarity = document.createElement('span');
  rarity.className = 'vault-plaque-rarity';
  rarity.textContent = `${item.rarity} • ${item.no}`;
  plaque.appendChild(rarity);

  const grade = document.createElement('span');
  grade.className = 'boss-pikachu-plaque-grade';
  grade.textContent = item.grade;
  plaque.appendChild(grade);

  return plaque;
}

function renderBossPikachuCollection() {
  const content = document.getElementById('boss-pikachu-content');
  if (!content) return;
  content.innerHTML = '';

  const grid = document.createElement('div');
  grid.className = 'vault-grid';
  [...BOSS_PIKACHU_ITEMS]
    .sort((a, b) => b.marketPrice - a.marketPrice)
    .forEach((item) => grid.appendChild(buildBossPikachuPlaque(item)));
  content.appendChild(grid);
}

document.addEventListener('DOMContentLoaded', renderBossPikachuCollection);
