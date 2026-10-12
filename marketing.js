// ============================================================
// DESCENT TCG — Collectr Slabs Vault inventory
// Source: authenticated Collectr Slabs Vault snapshot, 2026-10-12.
// Values are the tracked values displayed by Collectr; a null market
// value means Collectr did not expose a separate market quote.
// ============================================================

const TRACKER_PERMANENT_PHOTOS = {
  'suicune': 'assets/photos/marketing/suicune.webp',
  'ooyama\'s pikachu (jp)': 'assets/photos/marketing/s-pikachu-jp.webp',
  'mewtwo (jp)': 'assets/photos/marketing/mewtwo-jp.webp',
  'ditto': 'assets/photos/marketing/ditto.webp',
  'seismitoad': 'assets/photos/marketing/seismitoad.jpeg',
  'victini': 'assets/photos/marketing/victini.webp',
  'zekrom ex': 'assets/photos/marketing/zekrom-ex.webp',
  'imakuni\'s corner (jp)': 'assets/photos/marketing/s-corner-jp.webp',
  'reshiram ex': 'assets/photos/marketing/reshiram-ex.webp',
  'kadabra (jp)': 'assets/photos/marketing/kadabra-jp.webp',
  'pikachu ex': 'assets/photos/marketing/pikachu-ex.webp',
  'lose? (jp)': 'assets/photos/marketing/lose-jp.webp',
  'imakuni\'s pc (jp)': 'assets/photos/marketing/s-pc-jp.webp',
  'scyther (jp)': 'assets/photos/marketing/scyther-jp.webp',
  'tauros (jp)': 'assets/photos/marketing/tauros-jp.webp',
  'ponyta (jp)': 'assets/photos/marketing/ponyta-jp.webp',
  'weezing (jp)': 'assets/photos/marketing/weezing-jp.webp',
  'kingler (jp)': 'assets/photos/marketing/kingler-jp.webp',
  'deck exchange (jp)': 'assets/photos/marketing/deck-exchange-jp.webp',
  '3 deck battle (jp)': 'assets/photos/marketing/3-deck-battle-jp.webp',
  'retro teenage mutant ninja turtles (tmnt02)': 'assets/photos/marketing/retro-teenage-mutant-ninja-turtles.webp',
  'pikachu': 'assets/photos/marketing/s-promo.webp',
};

const TRACKER_ITEMS = [
  { name: 'Suicune', set: 'Nintendo Promos', no: '30', rarity: 'Holo Rare', targetPrice: 12000, purchasePrice: null, marketPrice: 275.69, owned: true, grade: 'PSA 10.0 GEM - MT', series: 'Other Slabs', quantity: 1 },
  { name: "Ooyama's Pikachu (JP)", set: 'Vending Series 3 (Green)', no: '025', rarity: 'Rare', targetPrice: 7263.15, purchasePrice: null, marketPrice: null, owned: true, grade: 'PSA 10.0 GEM - MT', series: 'Vending Series 3 (Green)', quantity: 1 },
  { name: 'Mewtwo (JP)', set: 'Vending Series 3 (Green)', no: '150', rarity: 'Rare', targetPrice: 3809.49, purchasePrice: null, marketPrice: null, owned: true, grade: 'PSA 10.0 GEM - MT', series: 'Vending Series 3 (Green)', quantity: 1 },
  { name: 'Ditto', set: 'EX Delta Species', no: '61', rarity: 'Common', targetPrice: 2567.55, purchasePrice: null, marketPrice: null, owned: true, grade: 'PSA 10.0 GEM - MT', series: 'Other Slabs', quantity: 1 },
  { name: 'Seismitoad', set: 'Black Bolt', no: '105/086', rarity: 'Illustration Rare', targetPrice: 1754.38, purchasePrice: null, marketPrice: null, owned: true, grade: 'PSA 10.0 GEM - MT', series: 'Black Bolt & White Flare', quantity: 1 },
  { name: 'Victini', set: 'Black Bolt', no: '171/086', rarity: 'Black White Rare', targetPrice: 1333.60, purchasePrice: null, marketPrice: null, owned: true, grade: 'PSA 10.0 GEM - MT', series: 'Black Bolt & White Flare', quantity: 1 },
  { name: 'Zekrom ex', set: 'Black Bolt', no: '172/086', rarity: 'Black White Rare', targetPrice: 1257.76, purchasePrice: null, marketPrice: null, owned: true, grade: 'PSA 10.0 GEM - MT', series: 'Black Bolt & White Flare', quantity: 1 },
  { name: "Imakuni's Corner (JP)", set: 'Vending Series 3 (Green)', no: '', rarity: '', targetPrice: 1100, purchasePrice: null, marketPrice: 620.38, owned: true, grade: 'PSA 10.0 GEM - MT', note: 'Qty: 2', series: 'Vending Series 3 (Green)', quantity: 2 },
  { name: 'Reshiram ex', set: 'White Flare', no: '173/086', rarity: 'Black White Rare', targetPrice: 1057.52, purchasePrice: null, marketPrice: null, owned: true, grade: 'PSA 10.0 GEM - MT', series: 'Black Bolt & White Flare', quantity: 1 },
  { name: 'Kadabra (JP)', set: 'Vending Series 3 (Green)', no: '064', rarity: 'Uncommon', targetPrice: 873.66, purchasePrice: null, marketPrice: null, owned: true, grade: 'PSA 10.0 GEM - MT', series: 'Vending Series 3 (Green)', quantity: 1 },
  { name: 'Kadabra (JP)', set: 'Vending Series 3 (Green)', no: '064', rarity: 'Uncommon', targetPrice: 811.05, purchasePrice: null, marketPrice: null, owned: true, grade: 'PSA 10.0 GEM - MT', series: 'Vending Series 3 (Green)', quantity: 1 },
  { name: 'Pikachu ex', set: 'Ascended Heroes', no: '277/217', rarity: 'Special Illustration Rare', targetPrice: 678.09, purchasePrice: null, marketPrice: null, owned: true, grade: 'PSA 10.0 GEM - MT', series: 'Other Slabs', quantity: 1 },
  { name: 'Lose? (JP)', set: 'Vending Series 3 (Green)', no: '', rarity: '', targetPrice: 647.87, purchasePrice: null, marketPrice: null, owned: true, grade: 'PSA 10.0 GEM - MT', series: 'Vending Series 3 (Green)', quantity: 1 },
  { name: "Imakuni's PC (JP)", set: 'Vending Series 3 (Green)', no: '', rarity: '', targetPrice: 542.49, purchasePrice: null, marketPrice: null, owned: true, grade: 'PSA 10.0 GEM - MT', series: 'Vending Series 3 (Green)', quantity: 1 },
  { name: 'Scyther (JP)', set: 'Vending Series 3 (Green)', no: '123', rarity: 'Rare', targetPrice: 534.90, purchasePrice: null, marketPrice: null, owned: true, grade: 'PSA 10.0 GEM - MT', series: 'Vending Series 3 (Green)', quantity: 1 },
  { name: 'Tauros (JP)', set: 'Vending Series 3 (Green)', no: '128', rarity: 'Rare', targetPrice: 496.02, purchasePrice: null, marketPrice: null, owned: true, grade: 'PSA 10.0 GEM - MT', series: 'Vending Series 3 (Green)', quantity: 1 },
  { name: 'Ponyta (JP)', set: 'Vending Series 3 (Green)', no: '077', rarity: 'Common', targetPrice: 311.81, purchasePrice: null, marketPrice: null, owned: true, grade: 'PSA 10.0 GEM - MT', series: 'Vending Series 3 (Green)', quantity: 1 },
  { name: 'Weezing (JP)', set: 'Vending Series 3 (Green)', no: '110', rarity: 'Rare', targetPrice: 311.31, purchasePrice: null, marketPrice: null, owned: true, grade: 'PSA 10.0 GEM - MT', series: 'Vending Series 3 (Green)', quantity: 1 },
  { name: 'Kingler (JP)', set: 'Vending Series 3 (Green)', no: '099', rarity: 'Rare', targetPrice: 242.50, purchasePrice: null, marketPrice: null, owned: true, grade: 'PSA 10.0 GEM - MT', series: 'Vending Series 3 (Green)', quantity: 1 },
  { name: 'Deck Exchange (JP)', set: 'Vending Series 3 (Green)', no: '05', rarity: 'Rare', targetPrice: 235.71, purchasePrice: null, marketPrice: null, owned: true, grade: 'PSA 10.0 GEM - MT', series: 'Vending Series 3 (Green)', quantity: 1 },
  { name: '3 Deck Battle (JP)', set: 'Vending Series 3 (Green)', no: '03', rarity: 'Rare', targetPrice: 182.50, purchasePrice: null, marketPrice: null, owned: true, grade: 'PSA 10.0 GEM - MT', series: 'Vending Series 3 (Green)', quantity: 1 },
  { name: 'Retro Teenage Mutant Ninja Turtles (TMNT02)', set: 'Teenage Mutant Ninja Turtles', no: 'TMNT02 1/19', rarity: 'Character', targetPrice: 150.00, purchasePrice: null, marketPrice: 0, owned: true, grade: 'PSA 10.0 GEM - MT', series: 'Other Slabs', quantity: 1 },
  { name: 'Pikachu', set: "McDonald's Promo (2025)", no: '020/M-P', rarity: 'Common', targetPrice: 86.03, purchasePrice: null, marketPrice: null, owned: true, grade: 'PSA 10.0 GEM - MT', series: 'Other Slabs', quantity: 1 },
];

function itemKeyFor(name) {
  return (name || '').trim().toLowerCase();
}
