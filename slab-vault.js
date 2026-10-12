// ============================================================
// TCG VAULT — GRADED SLAB RENDERER
// Uses TRACKER_ITEMS and TRACKER_PERMANENT_PHOTOS from marketing.js.
// ============================================================

function slabQuantity(items) {
  return items.reduce((sum, item) => sum + (item.quantity || 1), 0);
}

function buildSlabVaultPlaque(item) {
  const key = itemKeyFor(item.name);
  const photoSrc = TRACKER_PERMANENT_PHOTOS[key];
  const plaque = document.createElement('article');
  plaque.className = 'vault-plaque';

  const corner1 = document.createElement('span'); corner1.className = 'corner-bl';
  const corner2 = document.createElement('span'); corner2.className = 'corner-br';
  plaque.appendChild(corner1);
  plaque.appendChild(corner2);

  if (photoSrc) {
    const art = document.createElement('div');
    art.className = 'vault-plaque-art';
    const img = document.createElement('img');
    img.loading = 'lazy';
    img.decoding = 'async';
    img.src = photoSrc;
    img.alt = item.name || '';
    art.appendChild(img);
    plaque.appendChild(art);
  }

  const h3 = document.createElement('h3');
  h3.textContent = item.name || 'Untitled';
  plaque.appendChild(h3);

  if (item.set) {
    const setLine = document.createElement('span');
    setLine.className = 'vault-plaque-set';
    setLine.textContent = item.set;
    plaque.appendChild(setLine);
  }

  const rarity = document.createElement('span');
  rarity.className = 'vault-plaque-rarity';
  rarity.textContent = item.rarity && item.no ? `${item.rarity} • ${item.no}` : (item.rarity || item.no || 'Graded card');
  plaque.appendChild(rarity);

  const badges = document.createElement('div');
  badges.className = 'vault-plaque-badges';
  if (item.quantity > 1 || item.note) {
    const note = document.createElement('span');
    note.className = 'vault-plaque-note';
    note.textContent = item.note || `Qty: ${item.quantity}`;
    badges.appendChild(note);
  }
  if (item.grade) {
    const grade = document.createElement('span');
    grade.className = 'vault-plaque-grade';
    grade.textContent = item.grade;
    badges.appendChild(grade);
  }
  if (badges.childElementCount) plaque.appendChild(badges);

  return plaque;
}

function buildSlabSeriesBanner(seriesName, cards) {
  const total = slabQuantity(cards);
  const banner = document.createElement('div');
  banner.className = 'slab-series-banner';
  const corner1 = document.createElement('span'); corner1.className = 'slab-series-corner slab-series-corner-tl';
  const corner2 = document.createElement('span'); corner2.className = 'slab-series-corner slab-series-corner-br';
  banner.appendChild(corner1);
  banner.appendChild(corner2);

  const titleRow = document.createElement('div');
  titleRow.className = 'slab-series-title-row';
  const h2 = document.createElement('h2');
  h2.className = 'slab-series-title';
  h2.textContent = seriesName;
  titleRow.appendChild(h2);
  const stats = document.createElement('div');
  stats.className = 'slab-series-stats';
  stats.innerHTML = `<span><strong>${total}</strong> slab${total === 1 ? '' : 's'}</span>`;
  titleRow.appendChild(stats);
  banner.appendChild(titleRow);

  const rule = document.createElement('div');
  rule.className = 'slab-series-rule';
  banner.appendChild(rule);
  return banner;
}

function renderSlabVaultSection(container) {
  const ownedItems = TRACKER_ITEMS.filter(item => item.owned);
  container.innerHTML = '';
  if (!ownedItems.length) return;

  const groups = new Map();
  ownedItems.forEach((item) => {
    const series = item.series || 'Graded Slabs';
    if (!groups.has(series)) groups.set(series, []);
    groups.get(series).push(item);
  });

  groups.forEach((cards, series) => {
    cards.sort((a, b) => (b.targetPrice || b.marketPrice || 0) - (a.targetPrice || a.marketPrice || 0));
    container.appendChild(buildSlabSeriesBanner(series, cards));
    const grid = document.createElement('div');
    grid.className = 'vault-grid';
    cards.forEach(card => grid.appendChild(buildSlabVaultPlaque(card)));
    container.appendChild(grid);
  });
}

function renderTcgVaultSlabs() {
  const content = document.getElementById('tcg-vault-slabs-content');
  if (!content) return;
  const ownedItems = TRACKER_ITEMS.filter(item => item.owned);
  const total = slabQuantity(ownedItems);
  const heroStat = document.getElementById('stat-slabs');
  const sectionStat = document.getElementById('section-stat-slabs');
  if (heroStat) heroStat.textContent = total;
  if (sectionStat) sectionStat.textContent = total;
  renderSlabVaultSection(content);
}

document.addEventListener('DOMContentLoaded', renderTcgVaultSlabs);
