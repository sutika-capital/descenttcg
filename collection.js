// ============================================================
// MY COLLECTION — Illumineer's Vault
// Reads the same LORCANA_ITEMS / LORCANA_SET_INVENTORY /
// LORCANA_PERMANENT_PHOTOS / LORCANA_SET_PHOTOS data defined in
// lorcana.js (loaded before this file). There is no separate
// data source here on purpose — whatever is marked owned or
// stocked on the Lorcana Chase Cards page is exactly what shows
// up here, automatically, with zero extra upkeep.
// ============================================================

function renderVaultEmpty(container) {
  const empty = document.createElement('div');
  empty.className = 'vault-empty';
  empty.innerHTML = `
    <h3>The vault is still empty</h3>
    <p>Nothing has been pulled from the inkwell yet — check back once the first card or box is in hand.</p>
  `;
  container.appendChild(empty);
}

function buildVaultPlaque(item) {
  const key = lorcanaKeyFor(item.name);
  const photoSrc = LORCANA_PERMANENT_PHOTOS[key];

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
    img.setAttribute('loading', 'lazy');
    img.setAttribute('decoding', 'async');
    img.src = photoSrc;
    img.alt = item.name || '';
    art.appendChild(img);
    plaque.appendChild(art);
  }

  const rarity = document.createElement('span');
  rarity.className = 'vault-plaque-rarity';
  rarity.textContent = item.rarity || '';
  if (item.rarity === 'Iconic') {
    rarity.style.color = 'var(--vault-gold-br)';
    rarity.style.fontWeight = '700';
  } else if (item.rarity === 'Epic') {
    rarity.style.color = 'var(--citrus)';
    rarity.style.fontWeight = '700';
  }
  plaque.appendChild(rarity);

  if (item.grade) {
    const grade = document.createElement('span');
    grade.className = 'vault-plaque-grade';
    grade.textContent = item.grade;
    plaque.appendChild(grade);
  }

  const h3 = document.createElement('h3');
  h3.textContent = item.name || 'Untitled';
  plaque.appendChild(h3);

  const setLine = document.createElement('span');
  setLine.className = 'vault-plaque-set';
  setLine.textContent = item.set || '';
  plaque.appendChild(setLine);

  return plaque;
}

function buildVaultSet(setName, ownedCards, inventory) {
  const key = setName.trim().toLowerCase();
  const photoSrc = LORCANA_SET_PHOTOS[key];
  const isEmpty = ownedCards.length === 0;

  const section = document.createElement('div');
  section.className = isEmpty ? 'vault-set vault-set-empty' : 'vault-set';

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
  if (photoSrc) {
    const img = document.createElement('img');
    img.setAttribute('loading', 'lazy');
    img.setAttribute('decoding', 'async');
    img.src = photoSrc;
    img.alt = setName;
    titleGroup.appendChild(img);
  }
  const h2 = document.createElement('h2');
  h2.className = 'vault-series-title';
  const setNum = LORCANA_SET_NUMBERS[key];
  h2.textContent = setNum ? `${setName} - Set ${setNum}` : setName;
  titleGroup.appendChild(h2);
  titleRow.appendChild(titleGroup);

  const stats = document.createElement('div');
  stats.className = 'vault-series-stats';
  stats.appendChild(buildLorcanaRarityBadges(setName));
  if ((inventory.promoSets || 0) > 0) {
    const sealedBadge = document.createElement('span');
    sealedBadge.style.cssText = 'display:inline-flex; align-items:center; font-family:var(--mono); font-size:0.72rem; font-weight:700; letter-spacing:0.02em; padding:4px 10px; border-radius:999px; background:rgba(255,209,0,0.16); color:var(--vault-gold-br);';
    sealedBadge.textContent = `Box Count ${inventory.promoSets}`;
    stats.appendChild(sealedBadge);
  }
  titleRow.appendChild(stats);

  banner.appendChild(titleRow);
  const rule = document.createElement('div');
  rule.className = 'vault-series-rule';
  banner.appendChild(rule);

  section.appendChild(banner);

  if (isEmpty) {
    // Compact: just the banner row, no grid or placeholder paragraph.
    return section;
  }

  if (ownedCards.length > 0) {
    const grid = document.createElement('div');
    grid.className = 'vault-grid';
    const sortedCards = [
      ...ownedCards.filter(c => c.rarity !== 'Epic'),
      ...ownedCards.filter(c => c.rarity === 'Epic'),
    ];
    sortedCards.forEach(item => grid.appendChild(buildVaultPlaque(item)));
    section.appendChild(grid);
  } else {
    const note = document.createElement('p');
    note.style.cssText = 'color:var(--vault-faint); font-family:var(--mono); font-size:0.82rem;';
    note.textContent = 'No individual chase cards owned yet from this set.';
    section.appendChild(note);
  }

  return section;
}

function buildIconicShowcase(ownedIconicCards, uniqueIconicCount, totalIconic) {
  const section = document.createElement('div');
  section.className = 'vault-set vault-iconic-showcase-section';

  const banner = document.createElement('div');
  banner.className = 'vault-series-banner vault-iconic-showcase-banner';

  const corner1 = document.createElement('span'); corner1.className = 'vault-series-corner vault-series-corner-tl';
  const corner2 = document.createElement('span'); corner2.className = 'vault-series-corner vault-series-corner-br';
  banner.appendChild(corner1);
  banner.appendChild(corner2);

  const titleRow = document.createElement('div');
  titleRow.className = 'vault-series-title-row';

  const titleGroup = document.createElement('div');
  titleGroup.className = 'vault-series-title-group';
  const h2 = document.createElement('h2');
  h2.className = 'vault-series-title';
  h2.textContent = 'The Iconics';
  titleGroup.appendChild(h2);
  titleRow.appendChild(titleGroup);

  const stats = document.createElement('div');
  stats.className = 'vault-series-stats';
  stats.innerHTML = `<span><strong>${ownedIconicCards.length}</strong> slabs<span class="vault-series-stats-divider">&nbsp;•&nbsp;</span><strong>${uniqueIconicCount}</strong> of <strong>${totalIconic}</strong> unique collected</span>`;
  titleRow.appendChild(stats);

  banner.appendChild(titleRow);
  const rule = document.createElement('div');
  rule.className = 'vault-series-rule';
  banner.appendChild(rule);
  section.appendChild(banner);

  const grid = document.createElement('div');
  grid.className = 'vault-grid';
  ownedIconicCards.forEach(item => {
    const plaque = buildVaultPlaque(item);
    plaque.classList.add('vault-iconic-plaque');
    const ribbon = document.createElement('span');
    ribbon.className = 'vault-iconic-ribbon';
    ribbon.textContent = 'Iconic';
    plaque.appendChild(ribbon);
    grid.appendChild(plaque);
  });
  section.appendChild(grid);

  return section;
}

function buildSealedProductPlaque(setName, inventory) {
  const key = setName.trim().toLowerCase();
  const photoSrc = LORCANA_BOOSTER_BOX_PHOTOS[key];

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
    img.setAttribute('loading', 'lazy');
    img.setAttribute('decoding', 'async');
    img.src = photoSrc;
    img.alt = setName;
    art.appendChild(img);
    plaque.appendChild(art);
  }

  const h3 = document.createElement('h3');
  h3.textContent = setName;
  plaque.appendChild(h3);

  const countsRow = document.createElement('div');
  countsRow.style.cssText = 'display:flex; gap:8px; margin-top:8px; flex-wrap:wrap;';
  function countPill(labelText, count) {
    const pill = document.createElement('span');
    pill.style.cssText = 'font-family:var(--mono); font-size:0.72rem; font-weight:700; color:var(--vault-parch); background:var(--vault-panel-2); border:1px solid var(--vault-line); border-radius:999px; padding:4px 10px;';
    pill.innerHTML = `<strong style="color:var(--vault-gold-br);">${count}</strong> ${labelText}`;
    return pill;
  }
  if ((inventory.promoSets || 0) > 0 && !(inventory.boosterBoxes > 0) && !(inventory.cases > 0)) {
    // Promo-set-only product (D23 Collection, Curator's Collection) — no
    // box/case pills make sense here, just the promo set count.
    countsRow.appendChild(countPill(inventory.promoSets === 1 ? 'Sealed Promo Set' : 'Sealed Promo Sets', inventory.promoSets));
  } else {
    countsRow.appendChild(countPill(inventory.boosterBoxes === 1 ? 'box' : 'boxes', inventory.boosterBoxes || 0));
    countsRow.appendChild(countPill(inventory.cases === 1 ? 'case' : 'cases', inventory.cases || 0));
  }
  plaque.appendChild(countsRow);

  return plaque;
}

function buildSealedProductsShowcase(entries, totalBoxes, totalCases) {
  const section = document.createElement('div');
  section.className = 'vault-set';

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
  const h2 = document.createElement('h2');
  h2.className = 'vault-series-title';
  h2.textContent = 'Sealed Products';
  titleGroup.appendChild(h2);
  titleRow.appendChild(titleGroup);

  const stats = document.createElement('div');
  stats.className = 'vault-series-stats';
  stats.innerHTML = `<span><strong>${totalBoxes}</strong> boxes<span class="vault-series-stats-divider">&nbsp;•&nbsp;</span><strong>${totalCases}</strong> cases</span>`;
  titleRow.appendChild(stats);

  banner.appendChild(titleRow);
  const rule = document.createElement('div');
  rule.className = 'vault-series-rule';
  banner.appendChild(rule);
  section.appendChild(banner);

  const grid = document.createElement('div');
  grid.className = 'vault-grid';
  entries.forEach(({ setName, inventory }) => grid.appendChild(buildSealedProductPlaque(setName, inventory)));
  section.appendChild(grid);

  return section;
}

function renderVault() {
  const content = document.getElementById('vault-content');
  if (!content) return;

  content.innerHTML = '';

  const ownedItems = LORCANA_ITEMS.filter(i => i.owned);
  const ownedIconic = ownedItems.filter(i => i.rarity === 'Iconic').length;
  const ownedEnchanted = ownedItems.filter(i => i.rarity === 'Enchanted').length;
  const uniqueOwnedCount = rarity => new Set(
    ownedItems
      .filter(i => i.rarity === rarity)
      .map(i => `${i.set || ''}::${i.rarity || ''}::${(i.name || '').trim().toLowerCase()}`),
  ).size;
  const uniqueIconic = uniqueOwnedCount('Iconic');
  const uniqueEnchanted = uniqueOwnedCount('Enchanted');
  const ownedEpic = ownedItems.filter(i => i.rarity === 'Epic').length;
  const ownedPromo = ownedItems.filter(i => i.rarity === 'Promo').length;
  const ownedRare = ownedItems.filter(i => i.rarity === 'Rare').length;
  const totalIconic = Object.values(LORCANA_ICONIC_TOTALS).reduce((sum, n) => sum + n, 0);
  const totalEnchanted = Object.values(LORCANA_ENCHANTED_TOTALS).reduce((sum, n) => sum + n, 0);
  let totalBoxes = 0;
  let totalCases = 0;
  let totalPromoSets = 0;
  Object.values(LORCANA_SET_INVENTORY).forEach(inv => {
    totalBoxes += inv.boosterBoxes || 0;
    totalCases += inv.cases || 0;
    totalPromoSets += inv.promoSets || 0;
  });

  const cardsIconicEl = document.getElementById('stat-cards-iconic');
  const cardsEnchantedEl = document.getElementById('stat-cards-enchanted');
  const cardsEpicEl = document.getElementById('stat-cards-epic');
  const cardsPromoEl = document.getElementById('stat-cards-promo');
  const cardsRareEl = document.getElementById('stat-cards-rare');
  const boxesEl = document.getElementById('stat-boxes');
  const casesEl = document.getElementById('stat-cases');
  const promoSetsEl = document.getElementById('stat-promo-sets');
  if (cardsIconicEl) cardsIconicEl.textContent = ownedIconic;
  if (cardsEnchantedEl) cardsEnchantedEl.textContent = ownedEnchanted;
  if (cardsEpicEl) cardsEpicEl.textContent = ownedEpic;
  if (cardsPromoEl) cardsPromoEl.textContent = ownedPromo;
  if (cardsRareEl) cardsRareEl.textContent = ownedRare;
  if (boxesEl) boxesEl.textContent = totalBoxes;
  if (casesEl) casesEl.textContent = totalCases;
  if (promoSetsEl) promoSetsEl.textContent = totalPromoSets;

  const iconicProgressLabel = document.getElementById('stat-iconic-progress-label');
  const iconicProgressFill = document.getElementById('stat-iconic-progress-fill');
  if (iconicProgressLabel) iconicProgressLabel.textContent = `${uniqueIconic} of ${totalIconic} unique collected`;
  if (iconicProgressFill) iconicProgressFill.style.width = `${totalIconic ? Math.min(100, (uniqueIconic / totalIconic) * 100) : 0}%`;

  const enchantedProgressLabel = document.getElementById('stat-enchanted-progress-label');
  const enchantedProgressFill = document.getElementById('stat-enchanted-progress-fill');
  if (enchantedProgressLabel) enchantedProgressLabel.textContent = `${uniqueEnchanted} of ${totalEnchanted} unique collected`;
  if (enchantedProgressFill) enchantedProgressFill.style.width = `${totalEnchanted ? Math.min(100, (uniqueEnchanted / totalEnchanted) * 100) : 0}%`;

  const ownedIconicCards = ownedItems.filter(i => i.rarity === 'Iconic');
  if (ownedIconicCards.length > 0) {
    content.appendChild(buildIconicShowcase(ownedIconicCards, uniqueIconic, totalIconic));
  }

  // Sealed Products showcase — every set with at least one box or case,
  // numbered sets first in release order, then any non-numbered sets.
  const properCaseByKey = {};
  LORCANA_ITEMS.forEach(item => {
    const k = item.set.trim().toLowerCase();
    if (!properCaseByKey[k]) properCaseByKey[k] = item.set;
  });
  function properSetName(key) {
    return properCaseByKey[key] || LORCANA_SET_DISPLAY_NAMES[key] || key;
  }
  const sealedEntries = [];
  Object.entries(LORCANA_SET_NUMBERS)
    .sort((a, b) => a[1] - b[1])
    .forEach(([key]) => {
      const inv = LORCANA_SET_INVENTORY[key];
      if (!inv) return;
      if ((inv.boosterBoxes || 0) === 0 && (inv.cases || 0) === 0 && (inv.promoSets || 0) === 0) return;
      sealedEntries.push({ setName: properSetName(key), inventory: inv });
    });
  Object.keys(LORCANA_SET_INVENTORY).forEach(key => {
    if (LORCANA_SET_NUMBERS[key]) return; // already handled above
    const inv = LORCANA_SET_INVENTORY[key];
    if ((inv.boosterBoxes || 0) === 0 && (inv.cases || 0) === 0 && (inv.promoSets || 0) === 0) return;
    sealedEntries.push({ setName: properSetName(key), inventory: inv });
  });
  if (sealedEntries.length > 0) {
    content.appendChild(buildSealedProductsShowcase(sealedEntries, totalBoxes, totalCases));
  }


  // Walk sets in the order they first appear in LORCANA_ITEMS, then make
  // sure all 13 numbered mainline sets are always represented. Sets with
  // no individual cards and only sealed stock (e.g. Curator's Collection)
  // are intentionally left out here — they're fully represented in the
  // Sealed Products showcase above instead, with no near-empty chapter
  // section needed.
  const seenSets = [];
  LORCANA_ITEMS.forEach(item => {
    if (!seenSets.includes(item.set)) seenSets.push(item.set);
  });
  Object.entries(LORCANA_SET_NUMBERS)
    .sort((a, b) => a[1] - b[1])
    .forEach(([key]) => {
      const alreadySeen = seenSets.some(s => s.trim().toLowerCase() === key);
      if (!alreadySeen) {
        const display = LORCANA_SET_DISPLAY_NAMES[key] || key;
        seenSets.push(display);
      }
    });

  seenSets.forEach(setName => {
    const key = setName.trim().toLowerCase();
    const inventory = LORCANA_SET_INVENTORY[key] || { boosterBoxes: 0, cases: 0 };
    const ownedCards = LORCANA_ITEMS.filter(i => i.set === setName && i.owned && i.rarity !== 'Iconic');
    const isNumberedSet = !!LORCANA_SET_NUMBERS[key];

    const hasAnything = ownedCards.length > 0 || inventory.boosterBoxes > 0 || inventory.cases > 0 || inventory.promoSets > 0;
    if (!hasAnything && !isNumberedSet) {
      return; // nothing to show, and not one of the 13 mainline sets
    }

    content.appendChild(buildVaultSet(setName, ownedCards, inventory));
  });
}

document.addEventListener('DOMContentLoaded', () => {
  if (typeof renderLorcanaRarityLegend === 'function') renderLorcanaRarityLegend();
  renderVault();
});
