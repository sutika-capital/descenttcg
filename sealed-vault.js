// ============================================================
// TCG VAULT — SEALED PRODUCT RENDERER
// Uses TCG_SEALED_ITEMS and TCG_SEALED_PHOTOS from boosters.js.
// ============================================================

function formatTrackedValue(value) {
  return typeof value === 'number'
    ? `$${value.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
    : '—';
}

function buildTcgSealedPlaque(item) {
  const plaque = document.createElement('article');
  plaque.className = 'vault-plaque';
  const corner1 = document.createElement('span'); corner1.className = 'corner-bl';
  const corner2 = document.createElement('span'); corner2.className = 'corner-br';
  plaque.appendChild(corner1);
  plaque.appendChild(corner2);

  const photoSrc = TCG_SEALED_PHOTOS[tcgSealedKeyFor(item.name)];
  if (photoSrc) {
    const art = document.createElement('div');
    art.className = 'sealed-vault-plaque-art';
    const img = document.createElement('img');
    img.loading = 'lazy';
    img.decoding = 'async';
    img.src = photoSrc;
    img.alt = item.name || 'Sealed product';
    art.appendChild(img);
    plaque.appendChild(art);
  }

  const body = document.createElement('div');
  body.className = 'sealed-vault-plaque-body';
  const set = document.createElement('span');
  set.className = 'vault-plaque-rarity';
  set.textContent = item.set || item.category;
  body.appendChild(set);
  const h3 = document.createElement('h3');
  h3.textContent = item.name || 'Untitled product';
  body.appendChild(h3);

  const quantity = document.createElement('div');
  quantity.className = 'sealed-vault-plaque-qty';
  const quantityLabel = document.createElement('span'); quantityLabel.textContent = 'Units';
  const quantityValue = document.createElement('span'); quantityValue.textContent = String(item.qty || 0);
  quantity.appendChild(quantityLabel);
  quantity.appendChild(quantityValue);
  body.appendChild(quantity);

  const value = document.createElement('div');
  value.className = 'sealed-vault-plaque-qty';
  const valueLabel = document.createElement('span'); valueLabel.textContent = 'Tracked value';
  const valueAmount = document.createElement('span'); valueAmount.textContent = formatTrackedValue(item.trackedValue);
  value.appendChild(valueLabel);
  value.appendChild(valueAmount);
  body.appendChild(value);

  plaque.appendChild(body);
  return plaque;
}

function buildTcgSealedBanner(category, items) {
  const total = items.reduce((sum, item) => sum + (item.qty || 0), 0);
  const banner = document.createElement('div');
  banner.className = 'vault-series-banner';
  const corner1 = document.createElement('span'); corner1.className = 'vault-series-corner vault-series-corner-tl';
  const corner2 = document.createElement('span'); corner2.className = 'vault-series-corner vault-series-corner-br';
  banner.appendChild(corner1);
  banner.appendChild(corner2);

  const titleRow = document.createElement('div');
  titleRow.className = 'vault-series-title-row';
  const titleGroup = document.createElement('div');
  titleGroup.className = 'vault-series-title-group';
  const title = document.createElement('h2');
  title.className = 'vault-series-title';
  title.textContent = category;
  titleGroup.appendChild(title);
  titleRow.appendChild(titleGroup);
  const stats = document.createElement('div');
  stats.className = 'vault-series-stats';
  stats.innerHTML = `<span><strong>${total}</strong> unit${total === 1 ? '' : 's'}</span>`;
  titleRow.appendChild(stats);
  banner.appendChild(titleRow);

  const rule = document.createElement('div');
  rule.className = 'vault-series-rule';
  banner.appendChild(rule);
  const desc = document.createElement('p');
  desc.className = 'vault-series-desc';
  desc.textContent = TCG_SEALED_CATEGORY_COPY[category] || '';
  banner.appendChild(desc);
  return banner;
}

function renderTcgSealedVault() {
  const content = document.getElementById('tcg-vault-sealed-content');
  if (!content) return;
  content.innerHTML = '';

  const categoryTotals = Object.fromEntries(
    TCG_SEALED_CATEGORY_ORDER.map(category => [
      category,
      TCG_SEALED_ITEMS.filter(item => item.category === category).reduce((sum, item) => sum + (item.qty || 0), 0),
    ]),
  );
  const boosterBoxes = categoryTotals['Booster Boxes'] || 0;
  const packs = categoryTotals['Individual Packs'] || 0;
  const other = TCG_SEALED_ITEMS.reduce((sum, item) => sum + (item.qty || 0), 0) - boosterBoxes - packs;
  const heroBoxes = document.getElementById('stat-boxes');
  const heroPacks = document.getElementById('stat-packs');
  const heroOther = document.getElementById('stat-other');
  if (heroBoxes) heroBoxes.textContent = boosterBoxes;
  if (heroPacks) heroPacks.textContent = packs;
  if (heroOther) heroOther.textContent = other;

  TCG_SEALED_CATEGORY_ORDER.forEach((category) => {
    const items = TCG_SEALED_ITEMS.filter(item => item.category === category && item.qty > 0);
    if (!items.length) return;
    content.appendChild(buildTcgSealedBanner(category, items));
    const grid = document.createElement('div');
    grid.className = 'vault-grid';
    items.forEach(item => grid.appendChild(buildTcgSealedPlaque(item)));
    content.appendChild(grid);
  });
}

document.addEventListener('DOMContentLoaded', renderTcgSealedVault);
