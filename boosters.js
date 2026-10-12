// ============================================================
// DESCENT TCG — Collectr Sealed Vault inventory
// Source: authenticated Collectr Sealed Vault snapshot, 2026-10-12.
// `trackedValue` is the displayed Collectr value; `marketPrice` is
// populated only when Collectr showed a separate market quote.
// ============================================================

const TCG_SEALED_CATEGORY_ORDER = [
  'Booster Boxes',
  'Individual Packs',
  'Premium Sealed',
  'Japanese Pokémon Center Specials',
  'Magic: The Gathering — TMNT',
];

const TCG_SEALED_CATEGORY_COPY = {
  'Booster Boxes': 'Full booster boxes held in the sealed collection.',
  'Individual Packs': 'Vintage and modern packs tracked individually.',
  'Premium Sealed': 'Premium collections and Pokémon Center exclusives.',
  'Japanese Pokémon Center Specials': 'Regional Pokémon Center Japan boxes.',
  'Magic: The Gathering — TMNT': 'Sealed product from Magic\'s Teenage Mutant Ninja Turtles crossover.',
};

const TCG_SEALED_ITEMS = [
  { category: 'Booster Boxes', name: 'Diamond and Pearl Booster Box', set: 'Diamond and Pearl', qty: 1, trackedValue: 28000.00, marketPrice: 8888.00 },
  { category: 'Booster Boxes', name: 'Team Up Booster Box', set: 'Team Up', qty: 1, trackedValue: 12700.00, marketPrice: null },
  { category: 'Booster Boxes', name: 'XY Evolutions Booster Box', set: 'Evolutions', qty: 1, trackedValue: 2981.87, marketPrice: null },
  { category: 'Booster Boxes', name: 'Celestial Storm Booster Box', set: 'Celestial Storm', qty: 1, trackedValue: 2559.28, marketPrice: null },
  { category: 'Booster Boxes', name: 'Evolving Skies Booster Box', set: 'Evolving Skies', qty: 1, trackedValue: 2272.87, marketPrice: null },
  { category: 'Booster Boxes', name: 'Lost Origin Booster Box', set: 'Lost Origin', qty: 1, trackedValue: 733.17, marketPrice: null },

  { category: 'Individual Packs', name: 'Legendary Collection Booster Pack', set: 'Legendary Collection', qty: 1, trackedValue: 7000.00, marketPrice: null },
  { category: 'Individual Packs', name: 'Base Set Booster Pack [Shadowless]', set: 'Base Set (1st Edition & Shadowless)', qty: 1, trackedValue: 4000.00, marketPrice: 1782.66 },
  { category: 'Individual Packs', name: 'Jungle Booster Pack [1st Edition]', set: 'Jungle', qty: 1, trackedValue: 753.57, marketPrice: null },
  { category: 'Individual Packs', name: 'Jungle Booster Pack [Unlimited Edition]', set: 'Jungle', qty: 1, trackedValue: 700.00, marketPrice: 330.45 },
  { category: 'Individual Packs', name: 'Fossil Booster Pack [1st Edition]', set: 'Fossil', qty: 1, trackedValue: 669.58, marketPrice: null },
  { category: 'Individual Packs', name: 'Base Set 2 Booster Pack', set: 'Base Set 2', qty: 1, trackedValue: 500.00, marketPrice: null },
  { category: 'Individual Packs', name: 'Flashfire Sleeved Booster Pack', set: 'Flashfire', qty: 1, trackedValue: 186.41, marketPrice: null },

  { category: 'Premium Sealed', name: 'Celebrations Ultra Premium Collection', set: 'Celebrations', qty: 1, trackedValue: 1235.21, marketPrice: null },
  { category: 'Premium Sealed', name: 'Celebrations Pokémon Center Elite Trainer Box (Exclusive)', set: 'Celebrations', qty: 1, trackedValue: 497.96, marketPrice: null },

  { category: 'Japanese Pokémon Center Specials', name: 'Hiroshima Box (Pokemon Center) (JP)', set: 'Miscellaneous Cards & Products', qty: 3, trackedValue: 152.01, marketPrice: null },
  { category: 'Japanese Pokémon Center Specials', name: 'Tohoku Box (Pokemon Center) (JP)', set: 'Miscellaneous Cards & Products', qty: 3, trackedValue: 144.85, marketPrice: null },
  { category: 'Japanese Pokémon Center Specials', name: 'Fukuoka Box (Pokemon Center) (JP)', set: 'Miscellaneous Cards & Products', qty: 3, trackedValue: 132.78, marketPrice: null },

  { category: 'Magic: The Gathering — TMNT', name: 'Teenage Mutant Ninja Turtles - Play Booster Display', set: 'Teenage Mutant Ninja Turtles', qty: 1, trackedValue: 107.84, marketPrice: null },
  { category: 'Magic: The Gathering — TMNT', name: 'Teenage Mutant Ninja Turtles Commander Deck - Turtle Power!', set: 'Commander: Teenage Mutant Ninja Turtles', qty: 1, trackedValue: 59.03, marketPrice: null },
  { category: 'Magic: The Gathering — TMNT', name: 'Teenage Mutant Ninja Turtles - Bundle', set: 'Teenage Mutant Ninja Turtles', qty: 1, trackedValue: 45.65, marketPrice: null },
  { category: 'Magic: The Gathering — TMNT', name: 'Teenage Mutant Ninja Turtles - Turtle Team-Up', set: 'Teenage Mutant Ninja Turtles', qty: 1, trackedValue: 33.20, marketPrice: null },
  { category: 'Magic: The Gathering — TMNT', name: 'Teenage Mutant Ninja Turtles - Prerelease Pack', set: 'Teenage Mutant Ninja Turtles', qty: 1, trackedValue: 22.77, marketPrice: null },
];

const TCG_SEALED_PHOTOS = {
  'diamond and pearl booster box': 'assets/photos/boosters/diamond-and-pearl.webp',
  'team up booster box': 'assets/photos/boosters/team-up.webp',
  'xy evolutions booster box': 'assets/photos/boosters/evolutions.webp',
  'celestial storm booster box': 'assets/photos/boosters/celestial-storm.webp',
  'evolving skies booster box': 'assets/photos/boosters/evolving-skies.webp',
  'lost origin booster box': 'assets/photos/boosters/lost-origin.webp',
  'legendary collection booster pack': 'assets/photos/boosters/legendary-collection-booster-pack.webp',
  'base set booster pack [shadowless]': 'assets/photos/boosters/base-set-booster-pack-shadowless.webp',
  'jungle booster pack [1st edition]': 'assets/photos/boosters/jungle-booster-pack-1st-edition.webp',
  'jungle booster pack [unlimited edition]': 'assets/photos/boosters/jungle-booster-pack-unlimited-edition.webp',
  'fossil booster pack [1st edition]': 'assets/photos/boosters/fossil-booster-pack-1st-edition.webp',
  'base set 2 booster pack': 'assets/photos/boosters/base-set-2-booster-pack.webp',
  'flashfire sleeved booster pack': 'assets/photos/boosters/flashfire-sleeved-booster-pack.webp',
  'celebrations ultra premium collection': 'assets/photos/boosters/celebrations.webp',
  'celebrations pokémon center elite trainer box (exclusive)': 'assets/photos/boosters/celebrations-2.webp',
  'hiroshima box (pokemon center) (jp)': 'assets/sealed-vault/pokemon-center-hiroshima-box.webp',
  'tohoku box (pokemon center) (jp)': 'assets/sealed-vault/pokemon-center-tohoku-box.webp',
  'fukuoka box (pokemon center) (jp)': 'assets/sealed-vault/pokemon-center-fukuoka-box.webp',
  'teenage mutant ninja turtles - play booster display': 'assets/sealed-vault/tmnt-play-booster-display.webp',
  'teenage mutant ninja turtles commander deck - turtle power!': 'assets/sealed-vault/tmnt-commander-deck-turtle-power.webp',
  'teenage mutant ninja turtles - bundle': 'assets/sealed-vault/tmnt-bundle.webp',
  'teenage mutant ninja turtles - turtle team-up': 'assets/sealed-vault/tmnt-turtle-team-up.webp',
  'teenage mutant ninja turtles - prerelease pack': 'assets/sealed-vault/tmnt-prerelease-pack.webp',
};

function tcgSealedKeyFor(name) {
  return (name || '').trim().toLowerCase();
}
