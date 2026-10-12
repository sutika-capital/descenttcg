// ============================================================
// DESCENT TCG — Sealed Vault inventory
// Fully hardcoded — set name, release year, and pricing
// (targetPrice / purchasePrice / marketPrice) are all maintained
// directly in this file. All three price fields are optional —
// null means "not shown" on the page. Update this data only when
// told to (e.g. "bought 1 booster box of Evolving Skies" or
// "set target price on Base Set Unlimited to $12000").
// ============================================================

// Hardcoded set list — updated by request only.
const BOOSTERS_ITEMS = [
  { name: 'Base Set (Unlimited)', year: '1999', targetPrice: null, purchasePrice: null, marketPrice: null },
  { name: 'Base Set (Shadowless)', year: '1999', targetPrice: null, purchasePrice: null, marketPrice: null },
  { name: 'Jungle (1st Edition)', year: '1999', targetPrice: null, purchasePrice: 420, marketPrice: 629.7 },
  { name: 'Jungle (Unlimited)', year: '1999', targetPrice: null, purchasePrice: 600, marketPrice: 287.44 },
  { name: 'Fossil (1st Edition)', year: '1999', targetPrice: null, purchasePrice: 500, marketPrice: 629.76 },
  { name: 'Fossil (Unlimited)', year: '1999', targetPrice: null, purchasePrice: null, marketPrice: null },
  { name: 'Base Set 2', year: '2000', targetPrice: null, purchasePrice: 450, marketPrice: 371.75 },
  { name: 'Team Rocket (1st Edition)', year: '2000', targetPrice: null, purchasePrice: null, marketPrice: null },
  { name: 'Gym Heroes (1st Edition)', year: '2000', targetPrice: null, purchasePrice: null, marketPrice: null },
  { name: 'Gym Heroes (Unlimited)', year: '2000', targetPrice: null, purchasePrice: null, marketPrice: null },
  { name: 'Gym Challenge (1st Edition)', year: '2000', targetPrice: null, purchasePrice: null, marketPrice: null },
  { name: 'Gym Challenge (Unlimited)', year: '2000', targetPrice: null, purchasePrice: null, marketPrice: null },
  { name: 'Neo Genesis (1st Edition)', year: '2000', targetPrice: null, purchasePrice: null, marketPrice: null },
  { name: 'Ruby & Sapphire', year: '2003', targetPrice: null, purchasePrice: null, marketPrice: null },
  { name: 'Hidden Legends', year: '2004', targetPrice: null, purchasePrice: null, marketPrice: null },
  { name: 'FireRed & LeafGreen', year: '2004', targetPrice: null, purchasePrice: null, marketPrice: null },
  { name: 'Crystal Guardians', year: '2006', targetPrice: null, purchasePrice: null, marketPrice: null },
  { name: 'Power Keepers', year: '2007', targetPrice: null, purchasePrice: null, marketPrice: null },
  { name: 'Diamond and Pearl', year: '2007', targetPrice: null, purchasePrice: 21000, marketPrice: 8888 },
  { name: 'Mysterious Treasures', year: '2007', targetPrice: null, purchasePrice: null, marketPrice: null },
  { name: 'Great Encounters', year: '2008', targetPrice: null, purchasePrice: null, marketPrice: null },
  { name: 'Stormfront', year: '2008', targetPrice: null, purchasePrice: null, marketPrice: null },
  { name: 'Supreme Victors', year: '2009', targetPrice: null, purchasePrice: null, marketPrice: null },
  { name: 'Arceus', year: '2009', targetPrice: null, purchasePrice: null, marketPrice: null },
  { name: 'Unleashed', year: '2009', targetPrice: null, purchasePrice: null, marketPrice: null },
  { name: 'Undaunted', year: '2010', targetPrice: null, purchasePrice: null, marketPrice: null },
  { name: 'Triumphant', year: '2010', targetPrice: null, purchasePrice: null, marketPrice: null },
  { name: 'Call of Legends', year: '2011', targetPrice: null, purchasePrice: null, marketPrice: null },
  { name: 'Black and White', year: '2011', targetPrice: null, purchasePrice: null, marketPrice: null },
  { name: 'Emerging Powers', year: '2011', targetPrice: null, purchasePrice: null, marketPrice: null },
  { name: 'Noble Victories', year: '2011', targetPrice: null, purchasePrice: null, marketPrice: null },
  { name: 'Next Destinies', year: '2012', targetPrice: null, purchasePrice: null, marketPrice: null },
  { name: 'Dark Explorers', year: '2012', targetPrice: null, purchasePrice: null, marketPrice: null },
  { name: 'Dragons Exalted', year: '2012', targetPrice: null, purchasePrice: null, marketPrice: null },
  { name: 'Boundaries Crossed', year: '2012', targetPrice: null, purchasePrice: null, marketPrice: null },
  { name: 'Plasma Storm', year: '2013', targetPrice: null, purchasePrice: null, marketPrice: null },
  { name: 'Plasma Freeze', year: '2013', targetPrice: null, purchasePrice: null, marketPrice: null },
  { name: 'Plasma Blast', year: '2013', targetPrice: null, purchasePrice: null, marketPrice: null },
  { name: 'Legendary Treasures', year: '2013', targetPrice: null, purchasePrice: null, marketPrice: null },
  { name: 'XY Base Set', year: '2014', targetPrice: null, purchasePrice: null, marketPrice: null },
  { name: 'Flashfire', year: '2014', targetPrice: null, purchasePrice: 180, marketPrice: 184.14 },
  { name: 'Furious Fists', year: '2014', targetPrice: null, purchasePrice: null, marketPrice: null },
  { name: 'Phantom Forces', year: '2014', targetPrice: null, purchasePrice: null, marketPrice: null },
  { name: 'Primal Clash', year: '2015', targetPrice: null, purchasePrice: null, marketPrice: null },
  { name: 'Roaring Skies', year: '2015', targetPrice: null, purchasePrice: null, marketPrice: null },
  { name: 'Ancient Origins', year: '2015', targetPrice: null, purchasePrice: null, marketPrice: null },
  { name: 'BREAKthrough', year: '2015', targetPrice: null, purchasePrice: null, marketPrice: null },
  { name: 'BREAKpoint', year: '2016', targetPrice: null, purchasePrice: null, marketPrice: null },
  { name: 'Fates Collide', year: '2016', targetPrice: null, purchasePrice: null, marketPrice: null },
  { name: 'Steam Siege', year: '2016', targetPrice: null, purchasePrice: null, marketPrice: null },
  { name: 'Evolutions', year: '2016', targetPrice: null, purchasePrice: 2400, marketPrice: 2501.13 },
  { name: 'Sun & Moon Base Set', year: '2017', targetPrice: null, purchasePrice: null, marketPrice: null },
  { name: 'Guardians Rising', year: '2017', targetPrice: null, purchasePrice: null, marketPrice: null },
  { name: 'Burning Shadows', year: '2017', targetPrice: null, purchasePrice: null, marketPrice: null },
  { name: 'Crimson Invasion', year: '2017', targetPrice: null, purchasePrice: null, marketPrice: null },
  { name: 'Ultra Prism', year: '2018', targetPrice: null, purchasePrice: null, marketPrice: null },
  { name: 'Forbidden Light', year: '2018', targetPrice: null, purchasePrice: null, marketPrice: null },
  { name: 'Celestial Storm', year: '2018', targetPrice: null, purchasePrice: 2300, marketPrice: 2463.87 },
  { name: 'Lost Thunder', year: '2018', targetPrice: null, purchasePrice: null, marketPrice: null },
  { name: 'Team Up', year: '2019', targetPrice: null, purchasePrice: 11500, marketPrice: 11333.47 },
  { name: 'Unbroken Bonds', year: '2019', targetPrice: null, purchasePrice: null, marketPrice: null },
  { name: 'Unified Minds', year: '2019', targetPrice: null, purchasePrice: null, marketPrice: null },
  { name: 'Cosmic Eclipse', year: '2019', targetPrice: null, purchasePrice: null, marketPrice: null },
  { name: 'Sword & Shield Base Set', year: '2020', targetPrice: null, purchasePrice: null, marketPrice: null },
  { name: 'Rebel Clash', year: '2020', targetPrice: null, purchasePrice: null, marketPrice: null },
  { name: 'Darkness Ablaze', year: '2020', targetPrice: null, purchasePrice: null, marketPrice: null },
  { name: 'Vivid Voltage', year: '2020', targetPrice: null, purchasePrice: null, marketPrice: null },
  { name: 'Battle Styles', year: '2021', targetPrice: null, purchasePrice: null, marketPrice: null },
  { name: 'Chilling Reign', year: '2021', targetPrice: null, purchasePrice: 500, marketPrice: 500.15 },
  { name: 'Evolving Skies', year: '2021', targetPrice: null, purchasePrice: 2250, marketPrice: 2510.64 },
  { name: 'Celebrations', year: '2021', targetPrice: null, purchasePrice: 480, marketPrice: 573.23 },
  { name: 'Fusion Strike', year: '2021', targetPrice: null, purchasePrice: 820, marketPrice: 507.36 },
  { name: 'Brilliant Stars', year: '2022', targetPrice: null, purchasePrice: 255, marketPrice: 263.92 },
  { name: 'Astral Radiance', year: '2022', targetPrice: null, purchasePrice: 220, marketPrice: 238.91 },
  { name: 'Lost Origin', year: '2022', targetPrice: null, purchasePrice: 700, marketPrice: 733.43 },
  { name: 'Silver Tempest', year: '2022', targetPrice: null, purchasePrice: 500, marketPrice: 526.77 },
  { name: 'Scarlet & Violet Base Set', year: '2023', targetPrice: null, purchasePrice: 290, marketPrice: 292.61 },
  { name: 'Paldea Evolved', year: '2023', targetPrice: null, purchasePrice: 460, marketPrice: 492.6 },
  { name: 'Obsidian Flames', year: '2023', targetPrice: null, purchasePrice: 360, marketPrice: 379.99 },
  { name: 'Pokemon 151', year: '2023', targetPrice: null, purchasePrice: 300, marketPrice: 318.71 },
  { name: 'Paradox Rift', year: '2023', targetPrice: null, purchasePrice: 192, marketPrice: 213.83 },
  { name: 'Temporal Forces', year: '2024', targetPrice: null, purchasePrice: 175, marketPrice: 194.64 },
  { name: 'Twilight Masquerade', year: '2024', targetPrice: null, purchasePrice: 174, marketPrice: 187.74 },
  { name: 'Shrouded Fable', year: '2024', targetPrice: null, purchasePrice: 158, marketPrice: 167.94 },
  { name: 'Stellar Crown', year: '2024', targetPrice: null, purchasePrice: null, marketPrice: null },
  { name: 'Surging Sparks', year: '2024', targetPrice: null, purchasePrice: null, marketPrice: null },
  { name: 'Journey Together', year: '2025', targetPrice: null, purchasePrice: 194.5, marketPrice: 204.63 },
  { name: 'Destined Rivals', year: '2025', targetPrice: null, purchasePrice: 500, marketPrice: 528.44 },
  { name: 'Black Bolt', year: '2025', targetPrice: null, purchasePrice: 277.5, marketPrice: 293.29 },
  { name: 'Mega Evolution Base Set', year: '2026', targetPrice: null, purchasePrice: 275, marketPrice: 319.78 },
  { name: 'Phantasmal Flames', year: '2026', targetPrice: null, purchasePrice: 430, marketPrice: 420.41 },
  { name: 'Perfect Order', year: '2026', targetPrice: null, purchasePrice: 115, marketPrice: 119.79 },
  { name: 'Chaos Rising', year: '2026', targetPrice: null, purchasePrice: 150, marketPrice: 146.74 },
  { name: 'Pitch Black', year: '2026', targetPrice: null, purchasePrice: 187, marketPrice: 188.24 },
  { name: 'Ascended Heroes', year: '2026', targetPrice: null, purchasePrice: 405, marketPrice: 431.72 },
  { name: 'Paldean Fates', year: '2024', targetPrice: null, purchasePrice: 610, marketPrice: 614.3 },
  { name: 'Pokemon Go', year: '2022', targetPrice: null, purchasePrice: 215, marketPrice: 252.26 },
  { name: 'Prismatic Evolutions', year: '2025', targetPrice: null, purchasePrice: 435, marketPrice: 476.42 },
  { name: 'SV: 151', year: '2023', targetPrice: null, purchasePrice: 1250, marketPrice: 1371.63 },
];

// Hardcoded sealed-product inventory per set — updated by
// request only, not editable in-browser.
// Box art for owned sets. Only sets with a photo on file get one;
// missing entries fall back to a text-only card. Update by request only.
// Individual loose booster packs — tracked separately from full boxes/
// cases/ETBs/UPCs since they don't belong to a per-set qty breakdown.
// Shown in their own "Individual Packs" section on the Sealed Vault page.
const BOOSTERS_PACKS = [
  { name: 'Base Set Booster Pack [Shadowless]', set: 'Base Set (1st Edition & Shadowless)', price: 4000.00, qty: 1 },
  { name: 'Flashfire Sleeved Booster Pack', set: 'Flashfire', price: 184.98, qty: 1 },
  { name: 'Fossil Booster Pack [1st Edition]', set: 'Fossil', price: 627.65, qty: 1 },
  { name: 'Jungle Booster Pack [1st Edition]', set: 'Jungle', price: 629.70, qty: 1 },
  { name: 'Jungle Booster Pack [Unlimited Edition]', set: 'Jungle', price: 700.00, qty: 1 },
  { name: 'Legendary Collection Booster Pack', set: 'Legendary Collection', price: 4999.99, qty: 1 },
  { name: 'Base Set 2 Booster Pack', set: 'Base Set 2', price: 500.00, qty: 1 },
];

// Tins, deck displays, and other sealed product that isn't a booster pack.
const BOOSTERS_OTHER = [
  { name: 'TAG TEAM Tin [Eevee & Snorlax GX]', set: 'Team Up', price: 710.00, qty: 1 },
  { name: '2025 World Championship Deck Display', set: 'World Championship Decks', price: 160.50, qty: 2 },
];

// Photos for individual loose packs. Keyed by pack name (lowercase).
const BOOSTERS_PACK_PHOTOS = {
  'base set booster pack [shadowless]': 'assets/photos/boosters/base-set-booster-pack-shadowless.webp',
  'flashfire sleeved booster pack': 'assets/photos/boosters/flashfire-sleeved-booster-pack.webp',
  'fossil booster pack [1st edition]': 'assets/photos/boosters/fossil-booster-pack-1st-edition.webp',
  'jungle booster pack [1st edition]': 'assets/photos/boosters/jungle-booster-pack-1st-edition.webp',
  'legendary collection booster pack': 'assets/photos/boosters/legendary-collection-booster-pack.webp',
  'jungle booster pack [unlimited edition]': 'assets/photos/boosters/jungle-booster-pack-unlimited-edition.webp',
  'base set 2 booster pack': 'assets/photos/boosters/base-set-2-booster-pack.webp',
  'tag team tin [eevee & snorlax gx]': 'assets/photos/boosters/tag-team-tin-eevee-snorlax-gx.webp',
  '2025 world championship deck display': 'assets/photos/boosters/2025-world-championship-deck-display.webp',
};

const BOOSTERS_SET_PHOTOS_UPC = {
  'celebrations': 'assets/photos/boosters/celebrations.webp',
};

const BOOSTERS_SET_PHOTOS_ETB = {
  'perfect order': 'assets/photos/boosters/perfect-order.webp',
  'pokemon go': 'assets/photos/boosters/pokemon-go.webp',
  'sv: 151': 'assets/photos/boosters/sv-151.webp',
  'fusion strike': 'assets/photos/boosters/fusion-strike.webp',
  'brilliant stars': 'assets/photos/boosters/brilliant-stars.webp',
  'astral radiance': 'assets/photos/boosters/astral-radiance.webp',
  'paldean fates': 'assets/photos/boosters/paldean-fates.webp',
  'prismatic evolutions': 'assets/photos/boosters/prismatic-evolutions.webp',
  'ascended heroes': 'assets/photos/boosters/ascended-heroes.webp',
  'temporal forces': 'assets/photos/boosters/temporal-forces.webp',
  'twilight masquerade': 'assets/photos/boosters/twilight-masquerade.webp',
  'shrouded fable': 'assets/photos/boosters/shrouded-fable.webp',
  'journey together': 'assets/photos/boosters/journey-together.webp',
  'paradox rift': 'assets/photos/boosters/paradox-rift.webp',
  'obsidian flames': 'assets/photos/boosters/obsidian-flames.webp',
  'black bolt': 'assets/photos/boosters/black-bolt.webp',
  'mega evolution base set': 'assets/photos/boosters/mega-evolution-base-set.webp',
  'chaos rising': 'assets/photos/boosters/chaos-rising.webp',
  'scarlet & violet base set': 'assets/photos/boosters/scarlet-violet-base-set.webp',
  'celebrations': 'assets/photos/boosters/celebrations-2.webp',
  'pitch black': 'assets/photos/boosters/pitch-black.webp',
  'chilling reign': 'assets/photos/boosters/chilling-reign.webp',
};

const BOOSTERS_SET_PHOTOS = {
  'temporal forces': 'assets/photos/boosters/temporal-forces-2.webp',
  'twilight masquerade': 'assets/photos/boosters/twilight-masquerade-2.webp',
  'shrouded fable': 'assets/photos/boosters/shrouded-fable-2.webp',
  'journey together': 'assets/photos/boosters/journey-together-2.webp',
  'paradox rift': 'assets/photos/boosters/paradox-rift-2.webp',
  'scarlet & violet base set': 'assets/photos/boosters/scarlet-violet-base-set-2.webp',
  'pokemon 151': 'assets/photos/boosters/pokemon-151.webp',
  'black bolt': 'assets/photos/boosters/black-bolt-2.webp',
  'celebrations': 'assets/photos/boosters/celebrations-3.webp',
  'celestial storm': 'assets/photos/boosters/celestial-storm.webp',
  'chaos rising': 'assets/photos/boosters/chaos-rising-2.webp',
  'chilling reign': 'assets/photos/boosters/chilling-reign-2.webp',
  'destined rivals': 'assets/photos/boosters/destined-rivals.webp',
  'diamond and pearl': 'assets/photos/boosters/diamond-and-pearl.webp',
  'evolving skies': 'assets/photos/boosters/evolving-skies.webp',
  'lost origin': 'assets/photos/boosters/lost-origin.webp',
  'mega evolution base set': 'assets/photos/boosters/mega-evolution-base-set-2.webp',
  'obsidian flames': 'assets/photos/boosters/obsidian-flames-2.webp',
  'paldea evolved': 'assets/photos/boosters/paldea-evolved.webp',
  'phantasmal flames': 'assets/photos/boosters/phantasmal-flames.webp',
  'pitch black': 'assets/photos/boosters/pitch-black-2.webp',
  'silver tempest': 'assets/photos/boosters/silver-tempest.webp',
  'evolutions': 'assets/photos/boosters/evolutions.webp',
  'team up': 'assets/photos/boosters/team-up.webp',
};

const BOOSTERS_INVENTORY = {
  'base set (unlimited)': { boosterBoxes: 0, cases: 0, etbs: 0, upc: 0 },
  'base set (shadowless)': { boosterBoxes: 0, cases: 0, etbs: 0, upc: 0 },
  'jungle (1st edition)': { boosterBoxes: 0, cases: 0, etbs: 0, upc: 0 },
  'jungle (unlimited)': { boosterBoxes: 0, cases: 0, etbs: 0, upc: 0 },
  'fossil (1st edition)': { boosterBoxes: 0, cases: 0, etbs: 0, upc: 0 },
  'fossil (unlimited)': { boosterBoxes: 0, cases: 0, etbs: 0, upc: 0 },
  'base set 2': { boosterBoxes: 0, cases: 0, etbs: 0, upc: 0 },
  'team rocket (1st edition)': { boosterBoxes: 0, cases: 0, etbs: 0, upc: 0 },
  'gym heroes (1st edition)': { boosterBoxes: 0, cases: 0, etbs: 0, upc: 0 },
  'gym heroes (unlimited)': { boosterBoxes: 0, cases: 0, etbs: 0, upc: 0 },
  'gym challenge (1st edition)': { boosterBoxes: 0, cases: 0, etbs: 0, upc: 0 },
  'gym challenge (unlimited)': { boosterBoxes: 0, cases: 0, etbs: 0, upc: 0 },
  'neo genesis (1st edition)': { boosterBoxes: 0, cases: 0, etbs: 0, upc: 0 },
  'ruby & sapphire': { boosterBoxes: 0, cases: 0, etbs: 0, upc: 0 },
  'hidden legends': { boosterBoxes: 0, cases: 0, etbs: 0, upc: 0 },
  'firered & leafgreen': { boosterBoxes: 0, cases: 0, etbs: 0, upc: 0 },
  'crystal guardians': { boosterBoxes: 0, cases: 0, etbs: 0, upc: 0 },
  'power keepers': { boosterBoxes: 0, cases: 0, etbs: 0, upc: 0 },
  'diamond and pearl': { boosterBoxes: 1, cases: 0, etbs: 0, upc: 0 },
  'mysterious treasures': { boosterBoxes: 0, cases: 0, etbs: 0, upc: 0 },
  'great encounters': { boosterBoxes: 0, cases: 0, etbs: 0, upc: 0 },
  'stormfront': { boosterBoxes: 0, cases: 0, etbs: 0, upc: 0 },
  'supreme victors': { boosterBoxes: 0, cases: 0, etbs: 0, upc: 0 },
  'arceus': { boosterBoxes: 0, cases: 0, etbs: 0, upc: 0 },
  'unleashed': { boosterBoxes: 0, cases: 0, etbs: 0, upc: 0 },
  'undaunted': { boosterBoxes: 0, cases: 0, etbs: 0, upc: 0 },
  'triumphant': { boosterBoxes: 0, cases: 0, etbs: 0, upc: 0 },
  'call of legends': { boosterBoxes: 0, cases: 0, etbs: 0, upc: 0 },
  'black and white': { boosterBoxes: 0, cases: 0, etbs: 0, upc: 0 },
  'emerging powers': { boosterBoxes: 0, cases: 0, etbs: 0, upc: 0 },
  'noble victories': { boosterBoxes: 0, cases: 0, etbs: 0, upc: 0 },
  'next destinies': { boosterBoxes: 0, cases: 0, etbs: 0, upc: 0 },
  'dark explorers': { boosterBoxes: 0, cases: 0, etbs: 0, upc: 0 },
  'dragons exalted': { boosterBoxes: 0, cases: 0, etbs: 0, upc: 0 },
  'boundaries crossed': { boosterBoxes: 0, cases: 0, etbs: 0, upc: 0 },
  'plasma storm': { boosterBoxes: 0, cases: 0, etbs: 0, upc: 0 },
  'plasma freeze': { boosterBoxes: 0, cases: 0, etbs: 0, upc: 0 },
  'plasma blast': { boosterBoxes: 0, cases: 0, etbs: 0, upc: 0 },
  'legendary treasures': { boosterBoxes: 0, cases: 0, etbs: 0, upc: 0 },
  'xy base set': { boosterBoxes: 0, cases: 0, etbs: 0, upc: 0 },
  'flashfire': { boosterBoxes: 0, cases: 0, etbs: 0, upc: 0 },
  'furious fists': { boosterBoxes: 0, cases: 0, etbs: 0, upc: 0 },
  'phantom forces': { boosterBoxes: 0, cases: 0, etbs: 0, upc: 0 },
  'primal clash': { boosterBoxes: 0, cases: 0, etbs: 0, upc: 0 },
  'roaring skies': { boosterBoxes: 0, cases: 0, etbs: 0, upc: 0 },
  'ancient origins': { boosterBoxes: 0, cases: 0, etbs: 0, upc: 0 },
  'breakthrough': { boosterBoxes: 0, cases: 0, etbs: 0, upc: 0 },
  'breakpoint': { boosterBoxes: 0, cases: 0, etbs: 0, upc: 0 },
  'fates collide': { boosterBoxes: 0, cases: 0, etbs: 0, upc: 0 },
  'steam siege': { boosterBoxes: 0, cases: 0, etbs: 0, upc: 0 },
  'evolutions': { boosterBoxes: 1, cases: 0, etbs: 0, upc: 0 },
  'sun & moon base set': { boosterBoxes: 0, cases: 0, etbs: 0, upc: 0 },
  'guardians rising': { boosterBoxes: 0, cases: 0, etbs: 0, upc: 0 },
  'burning shadows': { boosterBoxes: 0, cases: 0, etbs: 0, upc: 0 },
  'crimson invasion': { boosterBoxes: 0, cases: 0, etbs: 0, upc: 0 },
  'ultra prism': { boosterBoxes: 0, cases: 0, etbs: 0, upc: 0 },
  'forbidden light': { boosterBoxes: 0, cases: 0, etbs: 0, upc: 0 },
  'celestial storm': { boosterBoxes: 1, cases: 0, etbs: 0, upc: 0 },
  'lost thunder': { boosterBoxes: 0, cases: 0, etbs: 0, upc: 0 },
  'team up': { boosterBoxes: 1, cases: 0, etbs: 0, upc: 0 },
  'unbroken bonds': { boosterBoxes: 0, cases: 0, etbs: 0, upc: 0 },
  'unified minds': { boosterBoxes: 0, cases: 0, etbs: 0, upc: 0 },
  'cosmic eclipse': { boosterBoxes: 0, cases: 0, etbs: 0, upc: 0 },
  'sword & shield base set': { boosterBoxes: 0, cases: 0, etbs: 0, upc: 0 },
  'rebel clash': { boosterBoxes: 0, cases: 0, etbs: 0, upc: 0 },
  'darkness ablaze': { boosterBoxes: 0, cases: 0, etbs: 0, upc: 0 },
  'vivid voltage': { boosterBoxes: 0, cases: 0, etbs: 0, upc: 0 },
  'battle styles': { boosterBoxes: 0, cases: 0, etbs: 0, upc: 0 },
  'chilling reign': { boosterBoxes: 1, cases: 0, etbs: 1, upc: 0 },
  'evolving skies': { boosterBoxes: 1, cases: 0, etbs: 0, upc: 0 },
  'celebrations': { boosterBoxes: 0, cases: 0, etbs: 1, upc: 1 },
  'fusion strike': { boosterBoxes: 1, cases: 0, etbs: 1, upc: 0 },
  'brilliant stars': { boosterBoxes: 0, cases: 0, etbs: 2, upc: 0 },
  'astral radiance': { boosterBoxes: 0, cases: 0, etbs: 1, upc: 0 },
  'lost origin': { boosterBoxes: 4, cases: 0, etbs: 0, upc: 0 },
  'silver tempest': { boosterBoxes: 1, cases: 0, etbs: 0, upc: 0 },
  'scarlet & violet base set': { boosterBoxes: 0, cases: 0, etbs: 2, upc: 0 },
  'paldea evolved': { boosterBoxes: 1, cases: 0, etbs: 0, upc: 0 },
  'obsidian flames': { boosterBoxes: 1, cases: 0, etbs: 1, upc: 0 },
  'pokemon 151': { boosterBoxes: 1, cases: 0, etbs: 0, upc: 0 },
  'paradox rift': { boosterBoxes: 0, cases: 0, etbs: 1, upc: 0 },
  'temporal forces': { boosterBoxes: 0, cases: 0, etbs: 2, upc: 0 },
  'twilight masquerade': { boosterBoxes: 0, cases: 0, etbs: 1, upc: 0 },
  'shrouded fable': { boosterBoxes: 0, cases: 0, etbs: 1, upc: 0 },
  'stellar crown': { boosterBoxes: 0, cases: 0, etbs: 0, upc: 0 },
  'surging sparks': { boosterBoxes: 0, cases: 0, etbs: 0, upc: 0 },
  'journey together': { boosterBoxes: 0, cases: 0, etbs: 2, upc: 0 },
  'destined rivals': { boosterBoxes: 2, cases: 0, etbs: 0, upc: 0 },
  'black bolt': { boosterBoxes: 0, cases: 0, etbs: 2, upc: 0 },
  'mega evolution base set': { boosterBoxes: 1, cases: 0, etbs: 1, upc: 0 },
  'phantasmal flames': { boosterBoxes: 3, cases: 0, etbs: 0, upc: 0 },
  'perfect order': { boosterBoxes: 0, cases: 0, etbs: 4, upc: 0 },
  'chaos rising': { boosterBoxes: 0, cases: 0, etbs: 2, upc: 0 },
  'pitch black': { boosterBoxes: 3, cases: 0, etbs: 2, upc: 0 },
  'ascended heroes': { boosterBoxes: 0, cases: 0, etbs: 1, upc: 0 },
  'paldean fates': { boosterBoxes: 0, cases: 0, etbs: 1, upc: 0 },
  'pokemon go': { boosterBoxes: 0, cases: 0, etbs: 2, upc: 0 },
  'prismatic evolutions': { boosterBoxes: 0, cases: 0, etbs: 1, upc: 0 },
  'sv: 151': { boosterBoxes: 0, cases: 0, etbs: 1, upc: 0 },
};

let boostersSearchTerm = '';

function itemKeyFor(name) {
  return (name || '').trim().toLowerCase();
}

function buildBoosterCard(item) {
  const key = itemKeyFor(item.name);
  const inventory = BOOSTERS_INVENTORY[key] || { boosterBoxes: 0, cases: 0, etbs: 0, upc: 0 };
  const hasStock = inventory.boosterBoxes > 0 || inventory.cases > 0 || inventory.etbs > 0 || inventory.upc > 0;

  const card = document.createElement('article');
  card.className = 'card-slab';
  if (hasStock) card.classList.add('in-stock');

  const label = document.createElement('div');
  label.className = 'card-slab-label';
  const yearSpan = document.createElement('span');
  yearSpan.textContent = item.year || '';
  label.appendChild(yearSpan);
  card.appendChild(label);

  const body = document.createElement('div');
  body.className = 'card-body';

  const h3 = document.createElement('h3');
  h3.textContent = item.name || 'Untitled';
  body.appendChild(h3);

  function buildQtyDisplay(labelText, qty) {
    const wrap = document.createElement('div');
    wrap.style.cssText = 'display:flex; align-items:center; justify-content:space-between; gap:10px; margin-bottom:6px;';

    const lbl = document.createElement('span');
    lbl.textContent = labelText;
    lbl.style.cssText = 'font-family:var(--mono); font-size:0.7rem; color:var(--ink-faint); text-transform:uppercase; letter-spacing:0.03em;';
    wrap.appendChild(lbl);

    const value = document.createElement('span');
    value.textContent = String(qty);
    value.style.cssText = `font-family:var(--mono); font-weight:700; font-size:0.9rem; color:${qty > 0 ? 'var(--mint)' : 'var(--ink-faint)'};`;
    wrap.appendChild(value);

    return wrap;
  }

  const qtyBlock = document.createElement('div');
  qtyBlock.style.cssText = 'margin-bottom:12px;';
  qtyBlock.appendChild(buildQtyDisplay('Booster Boxes', inventory.boosterBoxes));
  qtyBlock.appendChild(buildQtyDisplay('Cases', inventory.cases));
  qtyBlock.appendChild(buildQtyDisplay('Pokemon Center ETBs', inventory.etbs));
  qtyBlock.appendChild(buildQtyDisplay('Ultra Premium Collections', inventory.upc));
  body.appendChild(qtyBlock);

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
  return card;
}

function renderBoostersGrid() {
  const grid = document.getElementById('boosters-grid');
  const count = document.getElementById('boosters-count');
  if (!grid || !count) return;

  const term = boostersSearchTerm.trim().toLowerCase();
  const visible = term
    ? BOOSTERS_ITEMS.filter(i => (i.name || '').toLowerCase().includes(term))
    : BOOSTERS_ITEMS;

  count.textContent = visible.length + (visible.length === 1 ? ' set' : ' sets');
  grid.innerHTML = '';

  if (!visible.length) {
    const empty = document.createElement('p');
    empty.style.color = 'var(--ink-faint)';
    empty.textContent = 'No sets match your search.';
    grid.appendChild(empty);
    return;
  }

  visible.forEach(item => {
    grid.appendChild(buildBoosterCard(item));
  });
}

document.addEventListener('DOMContentLoaded', () => {
  renderBoostersGrid();

  const search = document.getElementById('boosters-search');
  if (search) {
    search.addEventListener('input', () => {
      boostersSearchTerm = search.value;
      renderBoostersGrid();
    });
  }
});
