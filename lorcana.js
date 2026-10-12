// ============================================================
// DESCENT TCG — Lorcana Vault inventory
// Fully hardcoded — name, set, rarity, ownership, and pricing
// (targetPrice / purchasePrice / marketPrice) are all maintained
// directly in this file. All three price fields are optional —
// null means "not shown" on the page. Update this data only when
// told to (e.g. "bought the Elsa Enchanted" or "set target price
// on Merida to $2000").
// ============================================================

// Hardcoded sealed-product inventory per set — updated by request only, not
// editable in-browser. All sets default to 0 unless stated otherwise below.
// Main expansion sets by release number. D23 promo sets and other
// non-numbered releases are intentionally left out of this map.
const LORCANA_SET_NUMBERS = {
  "the first chapter": 1,
  "rise of the floodborn": 2,
  "into the inklands": 3,
  "ursula's return": 4,
  "shimmering skies": 5,
  "azurite sea": 6,
  "archazia's island": 7,
  "reign of jafar": 8,
  "fabled": 9,
  "whispers in the well": 10,
  "winterspell": 11,
  "wilds unknown": 12,
  "attack of the vine!": 13,
};

// Total Enchanted count per set (Sets 1-2 only had 12; every set since has 18)
// and total Iconic count per set (only Set 9/Fabled onward introduced Iconics, 2 each).
const LORCANA_ENCHANTED_TOTALS = {
  1: 12, 2: 12, 3: 18, 4: 18, 5: 18, 6: 18, 7: 18, 8: 18,
  9: 18, 10: 18, 11: 18, 12: 18, 13: 18,
};
const LORCANA_ICONIC_TOTALS = {
  9: 2, 10: 2, 11: 2, 12: 2, 13: 2,
};

// Rarity symbol icons (cropped from the community rarity reference sheet),
// used in the rarity legend and next to the Iconic/Enchanted/Promo counters.
const LORCANA_RARITY_ICONS = {
  enchanted: 'assets/photos/lorcana/2-rarity-symbol-icons-cropped-from-the-community-rarity-reference-sheet-used-in-.png',
  iconic: 'assets/photos/lorcana/iconic.png',
  promo: 'assets/photos/lorcana/promo.png',
};
function buildLorcanaRarityBadges(setName) {
  const setNum = LORCANA_SET_NUMBERS[setName.trim().toLowerCase()];
  const wrap = document.createElement('div');
  wrap.style.cssText = 'display:flex; align-items:center; gap:8px; flex-wrap:wrap;';

  // Iconic/Enchanted only have known per-set totals for numbered sets;
  // enchantedTotal/iconicTotal come back undefined for non-numbered sets
  // (D23, Curator's Collection, Championship Promo Cards, etc.) and their
  // badges are skipped below -- but Epic/Rare/Promo (plain owned counts,
  // no known totals) still get checked for every set, numbered or not.
  const enchantedTotal = setNum ? LORCANA_ENCHANTED_TOTALS[setNum] : undefined;
  const iconicTotal = setNum ? LORCANA_ICONIC_TOTALS[setNum] : undefined;
  const setCards = LORCANA_ITEMS.filter(i => i.set === setName);

  function badge(labelText, owned, total, bg, fg, iconSrc) {
    const pill = document.createElement('span');
    pill.style.cssText = `display:inline-flex; align-items:center; gap:6px; font-family:var(--mono); font-size:0.72rem; font-weight:700; letter-spacing:0.02em; padding:4px 10px 4px 6px; border-radius:999px; background:${bg}; color:${fg};`;
    if (iconSrc) {
      const icon = document.createElement('img');
      icon.src = iconSrc;
      icon.alt = labelText;
      icon.style.cssText = 'width:16px; height:16px; object-fit:contain; flex-shrink:0;';
      pill.appendChild(icon);
    }
    const text = document.createElement('span');
    if (labelText === '') {
      text.textContent = (total === null || total === undefined) ? `${owned}` : `${owned}/${total}`;
    } else {
      text.textContent = (total === null || total === undefined) ? `${labelText} ${owned}` : `${labelText} ${owned}/${total}`;
    }
    pill.appendChild(text);
    return pill;
  }

  if (iconicTotal) {
    const ownedIconic = setCards.filter(i => i.owned && i.rarity === 'Iconic').length;
    wrap.appendChild(badge('Iconic', ownedIconic, iconicTotal, 'rgba(255,209,0,0.16)', 'var(--cobalt)', LORCANA_RARITY_ICONS.iconic));
  }
  if (enchantedTotal) {
    const ownedEnchanted = setCards.filter(i => i.owned && i.rarity === 'Enchanted').length;
    wrap.appendChild(badge('Enchanted', ownedEnchanted, enchantedTotal, 'rgba(169,124,232,0.16)', 'var(--vault-glimmer)', LORCANA_RARITY_ICONS.enchanted));
  }
  const epicOwnedCount = setCards.filter(i => i.owned && i.rarity === 'Epic').length;
  if (epicOwnedCount > 0) {
    // No known per-set Epic total, so this is a plain owned count, not a ratio.
    wrap.appendChild(badge('Epic', epicOwnedCount, null, 'rgba(76,175,88,0.14)', 'var(--mint)'));
  }
  const rareOwnedCount = setCards.filter(i => i.owned && i.rarity === 'Rare').length;
  if (rareOwnedCount > 0) {
    // No known per-set Rare total either, so this is a plain owned count too.
    wrap.appendChild(badge('Rare', rareOwnedCount, null, 'rgba(96,165,250,0.14)', '#60a5fa'));
  }
  const promoOwnedCount = setCards.filter(i => i.owned && i.rarity === 'Promo').length;
  const promoTotal = setCards.filter(i => i.rarity === 'Promo').length;
  if (promoTotal > 0) {
    const promoPill = document.createElement('span');
    promoPill.style.cssText = 'display:inline-flex; align-items:center; font-family:var(--mono); font-size:0.72rem; font-weight:700; letter-spacing:0.02em; padding:4px 10px; border-radius:999px; background:rgba(244,114,182,0.14); color:#f472b6;';
    promoPill.textContent = `${promoOwnedCount}/${promoTotal} cards in set`;
    wrap.appendChild(promoPill);
  }
  return wrap;
}

const LORCANA_SET_INVENTORY = {
  "the first chapter": { boosterBoxes: 1, cases: 1 },
  "rise of the floodborn": { boosterBoxes: 1, cases: 0 },
  "into the inklands": { boosterBoxes: 1, cases: 0 },
  "ursula's return": { boosterBoxes: 1, cases: 0 },
  "shimmering skies": { boosterBoxes: 1, cases: 0 },
  "azurite sea": { boosterBoxes: 1, cases: 0 },
  "archazia's island": { boosterBoxes: 1, cases: 0 },
  "reign of jafar": { boosterBoxes: 1, cases: 0 },
  "fabled": { boosterBoxes: 4, cases: 3 },
  "whispers in the well": { boosterBoxes: 1, cases: 1 },
  "winterspell": { boosterBoxes: 1, cases: 1 },
  "wilds unknown": { boosterBoxes: 1, cases: 1 },
  "attack of the vine!": { boosterBoxes: 0, cases: 1 },
  "d23 expo promo set - 2022": { boosterBoxes: 0, cases: 0, promoSets: 0 },
  "d23 collection - 2024": { boosterBoxes: 0, cases: 0, promoSets: 3 },
  "curator's collection: heroines edition - 2026": { boosterBoxes: 0, cases: 0, promoSets: 3 },
  "d23 collection - 2026": { boosterBoxes: 0, cases: 0, promoSets: 3 },
};

// Proper-cased display names for sealed-only sets that have no individual
// card entries in LORCANA_ITEMS (so there's nowhere else to source casing from).
const LORCANA_SET_DISPLAY_NAMES = {
  "curator's collection: heroines edition - 2026": "Curator's Collection: Heroines Edition - 2026",
};

const LORCANA_SET_PHOTOS = {
  "the first chapter": 'assets/lorcana-sets/the-first-chapter.webp',
  "rise of the floodborn": 'assets/lorcana-sets/rise-of-the-floodborn.webp',
  "into the inklands": 'assets/lorcana-sets/into-the-inklands.webp',
  "ursula's return": 'assets/lorcana-sets/ursula-s-return.webp',
  "shimmering skies": 'assets/lorcana-sets/shimmering-skies.webp',
  "azurite sea": 'assets/lorcana-sets/azurite-sea.webp',
  "archazia's island": 'assets/lorcana-sets/archazia-s-island.webp',
  "reign of jafar": 'assets/lorcana-sets/reign-of-jafar.webp',
  "fabled": 'assets/lorcana-sets/fabled.webp',
  "whispers in the well": 'assets/lorcana-sets/whispers-in-the-well.webp',
  "winterspell": 'assets/lorcana-sets/winterspell.webp',
  "wilds unknown": 'assets/lorcana-sets/wilds-unknown.webp',
  "attack of the vine!": 'assets/lorcana-sets/attack-of-the-vine.webp',
  "d23 collection - 2024": 'assets/lorcana-sets/d23-collection-2024.webp',
  "d23 collection - 2026": 'assets/lorcana-sets/d23-collection-2026.webp',
  "d23 expo promo set - 2022": 'assets/lorcana-sets/d23-expo-promo-set-2022.webp',
  "curator's collection: heroines edition - 2026": 'assets/lorcana-sets/curators-collection-heroines-edition.webp',
};

// Separate, larger booster-box product photos used only in the Sealed
// Products showcase on the Lorcana Vault page. Kept apart from
// LORCANA_SET_PHOTOS (which feeds the small icon next to each chapter's
// title) since that map already points at a different product shot for
// a couple of sets. D23 Collection and Curator's Collection reuse their
// existing LORCANA_SET_PHOTOS images since those are already the right
// product photo.
const LORCANA_BOOSTER_BOX_PHOTOS = {
  "the first chapter": 'assets/lorcana-sets/booster-box-the-first-chapter.webp',
  "rise of the floodborn": 'assets/lorcana-sets/booster-box-rise-of-the-floodborn.webp',
  "into the inklands": 'assets/lorcana-sets/booster-box-into-the-inklands.webp',
  "ursula's return": 'assets/lorcana-sets/booster-box-ursulas-return.webp',
  "shimmering skies": 'assets/lorcana-sets/booster-box-shimmering-skies.webp',
  "azurite sea": 'assets/lorcana-sets/booster-box-azurite-sea.webp',
  "archazia's island": 'assets/lorcana-sets/booster-box-archazias-island.webp',
  "reign of jafar": 'assets/lorcana-sets/booster-box-reign-of-jafar.webp',
  "fabled": 'assets/lorcana-sets/booster-box-fabled.webp',
  "whispers in the well": 'assets/lorcana-sets/booster-box-whispers-in-the-well.webp',
  "winterspell": 'assets/lorcana-sets/booster-box-winterspell.webp',
  "wilds unknown": 'assets/lorcana-sets/booster-box-wilds-unknown.webp',
  "attack of the vine!": 'assets/lorcana-sets/booster-box-attack-of-the-vine.webp',
  "d23 collection - 2024": 'assets/lorcana-sets/d23-collection-2024.webp',
  "d23 collection - 2026": 'assets/lorcana-sets/d23-collection-2026.webp',
  "curator's collection: heroines edition - 2026": 'assets/lorcana-sets/curators-collection-heroines-edition.webp',
};

const LORCANA_PERMANENT_PHOTOS = {
  'scar, mastermind': 'assets/lorcana/scar-mastermind.webp',
  'stitch, rock star (2024)': 'assets/lorcana/stitch-rock-star-championship.webp',
  "ursula, sea witch queen (2024)": 'assets/lorcana/ursula-sea-witch-queen-championship.webp',
  'mirabel madrigal, family gatherer (2024)': 'assets/lorcana/mirabel-madrigal-family-gatherer-championship.webp',
  'scar, heartless hunter (2024)': 'assets/lorcana/scar-heartless-hunter-championship.webp',
  'jafar, high sultan of lorcana (2025)': 'assets/lorcana/jafar-high-sultan-of-lorcana-championship.webp',
  'maleficent, monstrous dragon (2025)': 'assets/lorcana/maleficent-monstrous-dragon-championship.webp',
  'a whole new world (2025)': 'assets/lorcana/a-whole-new-world-championship.webp',
  'tinker bell, snowflake collector (store championship - 2026)': 'assets/lorcana/tinker-bell-snowflake-collector-championship.webp',
  'woody, jungle guide (2026)': 'assets/lorcana/woody-jungle-guide-championship.webp',
  'ariel, spectacular singer': 'assets/lorcana/ariel-spectacular-singer.webp',
  'elsa, trusted sister': 'assets/lorcana/elsa-trusted-sister.webp',
  'jasmine, royal seafarer': 'assets/lorcana/jasmine-royal-seafarer.webp',
  'mulan, elite archer': 'assets/lorcana/mulan-elite-archer.webp',
  'anna, trusting sister': 'assets/lorcana/anna-trusting-sister.webp',
  'tinker bell, giant fairy': 'assets/lorcana/tinker-bell-giant-fairy.webp',
  'discard card (black background)': 'assets/lorcana/discard-card-black-background.webp',
  'all is found (song)': 'assets/lorcana/all-is-found-song.webp',
  'mickey mouse, inspirational warrior': 'assets/lorcana/mickey-mouse-inspirational-warrior.webp',
  'mirabel madrigal, musically talented': 'assets/lorcana/mirabel-madrigal-musically-talented.webp',
  'bolt, superdog': 'assets/lorcana/bolt-superdog.webp',
  'the glass slipper': 'assets/lorcana/the-glass-slipper.webp',
  'donald duck, flustered sorcerer': 'assets/lorcana/donald-duck-flustered-sorcerer.webp',
  'jafar, newly crowned': 'assets/lorcana/jafar-newly-crowned.webp',
  'show me more! (song)': 'assets/lorcana/show-me-more-song.webp',
  'tramp, enterprising dog': 'assets/lorcana/tramp-enterprising-dog.webp',
  'mad hatter, unruly eccentric': 'assets/lorcana/mad-hatter-unruly-eccentric.webp',
  'hiro hamada, armor designer': 'assets/lorcana/hiro-hamada-armor-designer.webp',
  'the return of hercules (song)': 'assets/lorcana/the-return-of-hercules-song.webp',
  'ratigan, nefarious criminal': 'assets/lorcana/ratigan-nefarious-criminal.webp',
  'belle, mechanic extraordinaire': 'assets/lorcana/belle-mechanic-extraordinaire.webp',
  "devil's eye diamond": 'assets/lorcana/devils-eye-diamond.webp',
  'tamatoa, happy as a clam': 'assets/lorcana/tamatoa-happy-as-a-clam.webp',
  'restoring atlantis (song)': 'assets/lorcana/restoring-atlantis-song.webp',
  'stitch, experiment 626': 'assets/lorcana/stitch-experiment-626.webp',
  'fantastical and magical (song)': 'assets/lorcana/fantastical-and-magical-song.webp',
  'wrong lever! (song)': 'assets/lorcana/wrong-lever-song.webp',
  'the sword of shan yu': 'assets/lorcana/the-sword-of-shan-yu.webp',
  'desperate plan (song)': 'assets/lorcana/desperate-plan-song.webp',
  "mother gothel, knows what's best": 'assets/lorcana/mother-gothel-knows-whats-best.webp',
  'mushu, your worst nightmare': 'assets/lorcana/mushu-your-worst-nightmare.webp',
  'kuzco, impulsive llama': 'assets/lorcana/kuzco-impulsive-llama.webp',
  'captain hook, the pirate king': 'assets/lorcana/captain-hook-the-pirate-king.webp',
  'wreck-it ralph, big lug': 'assets/lorcana/wreck-it-ralph-big-lug.webp',
  'lilo, causing an uproar': 'assets/lorcana/lilo-causing-an-uproar.webp',
  'perdita, determined mother': 'assets/lorcana/perdita-determined-mother.webp',
  'lady, decisive dog': 'assets/lorcana/lady-decisive-dog.webp',
  'jasmine, steady strategist': 'assets/lorcana/jasmine-steady-strategist.webp',
  'bambi, little prince': 'assets/lorcana/bambi-little-prince.webp',
  'rapunzel, high climber': 'assets/lorcana/rapunzel-high-climber.webp',
  'it means no worries (song)': 'assets/lorcana/it-means-no-worries-song.webp',
  'into the unknown (song)': 'assets/lorcana/into-the-unknown-song.webp',
  'winnie the pooh, hunny wizard': 'assets/lorcana/winnie-the-pooh-hunny-wizard.webp',
  'circle of life (song)': 'assets/lorcana/circle-of-life-song.webp',
  "powerline, world's greatest rock star": 'assets/lorcana/powerline-worlds-greatest-rock-star.webp',
  'lilo, best explorer ever': 'assets/lorcana/lilo-best-explorer-ever.webp',
  'scar, finally king': 'assets/lorcana/scar-finally-king.webp',
  'pongo, determined father': 'assets/lorcana/pongo-determined-father.webp',
  'mulan, considerate diplomat': 'assets/lorcana/mulan-considerate-diplomat.webp',
  'mickey mouse, steamboat pilot': 'assets/lorcana/mickey-mouse-steamboat-pilot.webp',
  'max goof, chart topper': 'assets/lorcana/max-goof-chart-topper.webp',
  'jasmine, fearless princess': 'assets/lorcana/jasmine-fearless-princess.webp',
  'i2i (song)': 'assets/lorcana/i2i-song.webp',
  'hades, infernal schemer': 'assets/lorcana/hades-infernal-schemer.webp',
  'genie, of the lamp': 'assets/lorcana/genie-of-the-lamp.webp',
  'dumbo, ninth wonder of the universe': 'assets/lorcana/dumbo-ninth-wonder-of-the-universe.webp',
  'cruella de vil, style icon': 'assets/lorcana/cruella-de-vil-style-icon.webp',
  'belle, accomplished mystic': 'assets/lorcana/belle-accomplished-mystic.webp',
  'beast, gracious prince': 'assets/lorcana/beast-gracious-prince.webp',
  'ariel, adventurous collector': 'assets/lorcana/ariel-adventurous-collector.webp',
  'spooky sight (song)': 'assets/lorcana/spooky-sight-song.webp',
  'demona, scourge of the wyvern clan': 'assets/lorcana/demona-scourge-of-the-wyvern-clan.webp',
  'simba, king in the making': 'assets/lorcana/simba-king-in-the-making.webp',
  'the black cauldron': 'assets/lorcana/the-black-cauldron.webp',
  'baloo, carefree bear': 'assets/lorcana/baloo-carefree-bear.webp',
  'the headless horseman, terror of sleepy hollow': 'assets/lorcana/the-headless-horseman-terror-of-sleepy-hollow.webp',
  'malicious, mean, and scary (song)': 'assets/lorcana/malicious-mean-and-scary-song.webp',
  'next stop, olympus (song)': 'assets/lorcana/next-stop-olympus-song.webp',
  'cinderella, dream come true': 'assets/lorcana/cinderella-dream-come-true.webp',
  'nick wilde, persistent investigator': 'assets/lorcana/nick-wilde-persistent-investigator.webp',
  'the sword of hercules': 'assets/lorcana/the-sword-of-hercules.webp',
  'goliath, clan leader': 'assets/lorcana/goliath-clan-leader.webp',
  "can't hold it back anymore (song)": 'assets/lorcana/cant-hold-it-back-anymore-song.webp',
  'lady tremaine, sinister socialite': 'assets/lorcana/lady-tremaine-sinister-socialite.webp',
  'judy hopps, lead detective': 'assets/lorcana/judy-hopps-lead-detective.webp',
  'the horned king, wicked ruler': 'assets/lorcana/the-horned-king-wicked-ruler.webp',
  'webby vanderquack, junior prospector': 'assets/lorcana/webby-vanderquack-junior-prospector.webp',
  'goofy, galumphing gumshoe': 'assets/lorcana/goofy-galumphing-gumshoe.webp',
  'elsa, ice artisan': 'assets/lorcana/elsa-ice-artisan.webp',
  'ohana means family (song)': 'assets/lorcana/ohana-means-family-song.webp',
  'eeyore, in the way': 'assets/lorcana/eeyore-in-the-way.webp',
  'freeze the vine (song)': 'assets/lorcana/freeze-the-vine-song.webp',
  'lilo, rock star': 'assets/lorcana/lilo-rock-star.webp',
  'raging storm (song)': 'assets/lorcana/raging-storm-song.webp',
  'anna, soothing sister': 'assets/lorcana/anna-soothing-sister.webp',
  'colors of the wind (song)': 'assets/lorcana/colors-of-the-wind-song.webp',
  'mulan, resourceful recruit': 'assets/lorcana/mulan-resourceful-recruit.webp',
  'tod, knows all the tricks': 'assets/lorcana/tod-knows-all-the-tricks.webp',
  'negaduck, public enemy number one': 'assets/lorcana/negaduck-public-enemy-number-one.webp',
  'the cold never bothered me (song)': 'assets/lorcana/the-cold-never-bothered-me-song.webp',
  'scrooge mcduck, reformed ebenezer': 'assets/lorcana/scrooge-mcduck-reformed-ebenezer.webp',
  'belle, snowfield strategist': 'assets/lorcana/belle-snowfield-strategist.webp',
  'tamatoa, seeker of shine': 'assets/lorcana/tamatoa-seeker-of-shine.webp',
  'angel, experiment 624': 'assets/lorcana/angel-experiment-624.webp',
  'darkwing duck, cool under pressure': 'assets/lorcana/darkwing-duck-cool-under-pressure.webp',
  "let's get dangerous (song)": 'assets/lorcana/lets-get-dangerous-song.webp',
  "you've got a friend in me (song)": 'assets/lorcana/youve-got-a-friend-in-me-song.webp',
  'what else can i do? (song)': 'assets/lorcana/what-else-can-i-do-song.webp',
  'isabela madrigal, caring cultivator': 'assets/lorcana/isabela-madrigal-caring-cultivator.webp',
  'frozone, super cool': 'assets/lorcana/frozone-super-cool.webp',
  'touch the sky (song)': 'assets/lorcana/touch-the-sky-song.webp',
  'jessie, lively cowgirl': 'assets/lorcana/jessie-lively-cowgirl.webp',
  'luisa madrigal, confident climber': 'assets/lorcana/luisa-madrigal-confident-climber.webp',
  'dunbroch family tapestry': 'assets/lorcana/dunbroch-family-tapestry.webp',
  'alien, true believer': 'assets/lorcana/alien-true-believer.webp',
  'milo thatch, getting his hands dirty': 'assets/lorcana/milo-thatch-getting-his-hands-dirty.webp',
  'the family scattered (song)': 'assets/lorcana/the-family-scattered-song.webp',
  'jack-jack parr, incredible potential': 'assets/lorcana/jack-jack-parr-incredible-potential.webp',
  'the leviathan, guardian of atlantis': 'assets/lorcana/the-leviathan-guardian-of-atlantis.webp',
  'mr. incredible, super strong': 'assets/lorcana/mr-incredible-super-strong.webp',
  'zipper, big helper': 'assets/lorcana/zipper-big-helper.webp',
  'kida, crystal scion': 'assets/lorcana/kida-crystal-scion.webp',
  'syndrome, out for revenge': 'assets/lorcana/syndrome-out-for-revenge.webp',
  'mrs. incredible, determined rescuer': 'assets/lorcana/mrs-incredible-determined-rescuer.webp',
  'mufasa, ruler of pride rock': 'assets/lorcana/mufasa-ruler-of-pride-rock.webp',
  "tigger, in the crow's nest": 'assets/lorcana/tigger-in-the-crows-nest.webp',
  'aurora, waking beauty': 'assets/lorcana/aurora-waking-beauty.webp',
  'stitch, carefree surfer': 'assets/lorcana/stitch-carefree-surfer.webp',
  'elsa, spirit of winter': 'assets/lorcana/elsa-spirit-of-winter.webp',
  'mickey mouse, wayward sorcerer': 'assets/lorcana/mickey-mouse-wayward-sorcerer.webp',
  'snow white, well wisher': 'assets/lorcana/snow-white-well-wisher.webp',
  'cinderella, ballroom sensation': 'assets/lorcana/cinderella-ballroom-sensation.webp',
  'alice, growing girl': 'assets/lorcana/alice-growing-girl.webp',
  'morph, space goo': 'assets/lorcana/morph-space-goo.webp',
  'ursula, deceiver of all': 'assets/lorcana/ursula-deceiver-of-all.webp',
  'robin hood, champion of sherwood': 'assets/lorcana/robin-hood-champion-of-sherwood.webp',
  'diablo, devoted herald': 'assets/lorcana/diablo-devoted-herald.webp',
  'ariel, sonic warrior': 'assets/lorcana/ariel-sonic-warrior.webp',
  'the wall, border fortress': 'assets/lorcana/the-wall-border-fortress.webp',
  'minnie mouse, musketeer champion': 'assets/lorcana/minnie-mouse-musketeer-champion.webp',
  'yen sid, powerful sorcerer': 'assets/lorcana/yen-sid-powerful-sorcerer.webp',
  'the queen, diviner': 'assets/lorcana/the-queen-diviner.webp',
  "we don't talk about bruno (song)": 'assets/lorcana/we-dont-talk-about-bruno-song.webp',
  'goofy, super goof': 'assets/lorcana/goofy-super-goof.webp',
  'cinderella, melody weaver': 'assets/lorcana/cinderella-melody-weaver.webp',
  'anna, true-hearted': 'assets/lorcana/anna-true-hearted.webp',
  'look at this family (song)': 'assets/lorcana/look-at-this-family-song.webp',
  "ariel's grotto, a secret place": 'assets/lorcana/ariels-grotto-a-secret-place.webp',
  'piglet, sturdy swordsman': 'assets/lorcana/piglet-sturdy-swordsman.webp',
  'snuggly duckling, disreputable pub': 'assets/lorcana/snuggly-duckling-disreputable-pub.webp',
  'sisu, empowered sibling': 'assets/lorcana/sisu-empowered-sibling.webp',
  'ursula, sea witch queen': 'assets/lorcana/ursula-sea-witch-queen.webp',
  'second star to the right (song)': 'assets/lorcana/second-star-to-the-right-song.webp',
  'jasmine, desert warrior': 'assets/lorcana/jasmine-desert-warrior.webp',
  "you're welcome (song)": 'assets/lorcana/you-re-welcome-song.webp',
  'clarabelle, light on her hooves': 'assets/lorcana/clarabelle-light-on-her-hooves.webp',
  'you came back (song)': 'assets/lorcana/you-came-back-song.webp',
  'tiana, restaurant owner': 'assets/lorcana/tiana-restaurant-owner.webp',
  'wreck-it ralph, ham hands': 'assets/lorcana/wreck-it-ralph-ham-hands.webp',
  'basil, disguised detective': 'assets/lorcana/basil-disguised-detective.webp',
  'baymax, personal healthcare companion': 'assets/lorcana/baymax-personal-healthcare-companion.webp',
  'the islands i pulled from the sea (song)': 'assets/lorcana/the-islands-i-pulled-from-the-sea-song.webp',
  'sugar rush speedway, finish line': 'assets/lorcana/sugar-rush-speedway-finish-line.webp',
  'we could be immortals (song)': 'assets/lorcana/we-could-be-immortals-song.webp',
  'yzma, conniving chemist': 'assets/lorcana/yzma-conniving-chemist.webp',
  'captain amelia, commander of the legacy': 'assets/lorcana/captain-amelia-commander-of-the-legacy.webp',
  "chip 'n' dale, recovery rangers": 'assets/lorcana/chip-n-dale-recovery-rangers.webp',
  'rafiki, ethereal guide': 'assets/lorcana/rafiki-ethereal-guide.webp',
  "maleficent's staff": 'assets/lorcana/maleficents-staff.webp',
  'raya, kumandran rider': 'assets/lorcana/raya-kumandran-rider.webp',
  'gadget hackwrench, brilliant bosun': 'assets/lorcana/gadget-hackwrench-brilliant-bosun.webp',
  'daisy duck, pirate captain': 'assets/lorcana/daisy-duck-pirate-captain.webp',
  'treasure mountain, azurite sea island': 'assets/lorcana/treasure-mountain-azurite-sea-island.webp',
  'lilo & stitch, fun-loving friends': 'assets/lorcana/lilo-stitch-fun-loving-friends.webp',
  'belle & beast, certain as the sun': 'assets/lorcana/belle-beast-certain-as-the-sun.webp',
  'mike wazowski, heroic climber': 'assets/lorcana/mike-wazowski-heroic-climber.webp',
  'pocahontas & meeko, adventurous friends': 'assets/lorcana/pocahontas-meeko-adventurous-friends.webp',
  'woody & buzz lightyear, best buddies': 'assets/lorcana/woody-buzz-lightyear-best-buddies.webp',
  'sulley & boo, scare buddies': 'assets/lorcana/sulley-boo-scare-buddies.webp',
  'the madrigal family, every generation': 'assets/lorcana/the-madrigal-family-every-generation.webp',
  'merida, wisp conjurer': 'assets/lorcana/merida-wisp-conjurer.webp',
  'aladdin & genie, mischievous pals': 'assets/lorcana/aladdin-genie-mischievous-pals.webp',
  'peter pan & tinker bell, fast friends': 'assets/lorcana/peter-pan-tinker-bell-fast-friends.webp',
  'winnie the pooh & piglet, hunny mages': 'assets/lorcana/winnie-the-pooh-piglet-hunny-mages.webp',
  'maleficent & diablo, evil incarnate': 'assets/lorcana/maleficent-diablo-evil-incarnate.webp',
  'tod & copper, best of friends': 'assets/lorcana/tod-copper-best-of-friends.webp',
  'carl fredricksen & russell, intrepid explorers': 'assets/lorcana/carl-fredricksen-russell-intrepid-explorers.webp',
  'mickey mouse & minnie mouse, adventuring duo': 'assets/lorcana/mickey-mouse-minnie-mouse-adventuring-duo.webp',
  'rapunzel & flynn rider, unlikely pair': 'assets/lorcana/rapunzel-flynn-rider-unlikely-pair.webp',
  'meilin lee, popular red panda': 'assets/lorcana/meilin-lee-popular-red-panda.webp',
  'dash parr & violet parr, super siblings': 'assets/lorcana/dash-parr-violet-parr-super-siblings.webp',
  "darkwing duck & launchpad, st. canard's finest": 'assets/lorcana/darkwing-duck-launchpad-st-canards-finest.webp',
  'scar, created by the vine': 'assets/lorcana/scar-created-by-the-vine.webp',
  "max goof, rockin' teen": 'assets/lorcana/max-goof-rockin-teen.webp',
  'mickey mouse, playful sorcerer': 'assets/lorcana/mickey-mouse-playful-sorcerer.webp',
  'mickey mouse, brave little tailor': 'assets/lorcana/mickey-mouse-brave-little-tailor.webp',
  'mickey mouse, brave little tailor (extended art)': 'assets/lorcana/mickey-mouse-brave-little-tailor-extended-art.webp',
  'stitch, rock star': 'assets/lorcana/stitch-d23.webp',
  'elsa, snow queen': 'assets/lorcana/elsa-snow-queen.webp',
  'ursula, deceiver': 'assets/lorcana/ursula-deceiver-d23.webp',
  'cruella de vil, miserable as usual': 'assets/lorcana/cruella-de-vil-miserable-as-usual.webp',
  'maleficent, monstrous dragon': 'assets/lorcana/maleficent-monstrous-dragon.webp',
  'vanellope von schweetz, sugar rush princess (d23)': 'assets/lorcana/vanellope-von-schweetz-sugar-rush-princess-d23.webp',
  'oswald, the lucky rabbit': 'assets/lorcana/oswald-the-lucky-rabbit.webp',
  'robin hood, unrivaled archer': 'assets/lorcana/robin-hood-unrivaled-archer.webp',
  'captain hook, fanciful duelist': 'assets/lorcana/captain-hook-d23.webp',
  'mickey mouse, pirate captain': 'assets/lorcana/mickey-mouse-pirate-captain-cruise.webp',
  'goofy, expert shipwright': 'assets/lorcana/goofy-expert-shipwright.webp',
  'donald duck, buccaneer': 'assets/lorcana/donald-duck-buccaneer.webp',
  'daisy duck, pirate captain (disney cruise)': 'assets/lorcana/daisy-duck-pirate-captain-cruise.webp',
  'minnie mouse, pirate lookout': 'assets/lorcana/minnie-mouse-pirate-lookout.webp',
  'mickey mouse, warm welcome': 'assets/lorcana/mickey-mouse-warm-welcome.webp',
  'mickey mouse (disney100)': 'assets/lorcana/mickey-mouse-disney100.webp',
  'elsa (disney100)': 'assets/lorcana/elsa-disney100.webp',
  'genie, powers unleashed': 'assets/lorcana/genie-powers-unleashed.webp',
  'stitch (disney100)': 'assets/lorcana/stitch-disney100.webp',
  'maleficent, uninvited': 'assets/lorcana/maleficent-uninvited.webp',
  'maui, demigod': 'assets/lorcana/maui-demigod.webp',
  'bruno madrigal, undetected uncle': 'assets/lorcana/bruno-madrigal-undetected-uncle.webp',
  'cinderella, stouthearted': 'assets/lorcana/cinderella-stouthearted.webp',
  'mad hatter, unruly eccentric (d23)': 'assets/lorcana/mad-hatter-unruly-eccentric-d23.webp',
  'iago, out of reach': 'assets/lorcana/iago-out-of-reach.webp',
  'genie, of the lamp': 'assets/lorcana/genie-of-the-lamp.webp',
  'mulan, considerate diplomat': 'assets/lorcana/mulan-considerate-diplomat.webp',
  'lilo, best explorer ever': 'assets/lorcana/lilo-best-explorer-ever.webp',
  'lady tremaine, imperious queen': 'assets/lorcana/lady-tremaine-imperious-queen.webp',
  'pride lands, pride rock': 'assets/lorcana/pride-lands-pride-rock.webp',
  "kuzco's palace, home of the emperor": 'assets/lorcana/kuzcos-palace-home-of-the-emperor.webp',
  'bad-anon, villain support center': 'assets/lorcana/bad-anon-villain-support-center.webp',
  'king candy, sweet abomination': 'assets/lorcana/king-candy-sweet-abomination.webp',
  'pocahontas, peacekeeper': 'assets/lorcana/pocahontas-peacekeeper.webp',
  'moana, curious explorer': 'assets/lorcana/moana-curious-explorer.webp',
  'merida, formidable archer': 'assets/lorcana/merida-formidable-archer.webp',
  'hades, looking for a deal': 'assets/lorcana/hades-looking-for-a-deal.webp',
  'mickey mouse, brave little prince': 'assets/lorcana/mickey-mouse-brave-little-prince.webp',
  'buzz lightyear, jungle ranger': 'assets/lorcana/buzz-lightyear-jungle-ranger.webp',
  'minnie mouse, sweetheart princess': 'assets/lorcana/minnie-mouse-sweetheart-princess.webp',
  'ariel, ethereal voice': 'assets/lorcana/ariel-ethereal-voice.webp',
  'simba, returned king': 'assets/lorcana/simba-returned-king.webp',
  'belle, strange but special': 'assets/lorcana/belle-strange-but-special.webp',
  'aurora, dreaming guardian': 'assets/lorcana/aurora-dreaming-guardian.webp',
  'tinker bell, giant fairy': 'assets/lorcana/tinker-bell-giant-fairy.webp',
  'mickey mouse, artful rogue': 'assets/lorcana/mickey-mouse-artful-rogue.webp',
  'genie, on the job': 'assets/lorcana/genie-on-the-job.webp',
  'aladdin, heroic outlaw': 'assets/lorcana/aladdin-heroic-outlaw.webp',
  'maui, hero to all': 'assets/lorcana/maui-hero-to-all.webp',
  'hades, king of olympus': 'assets/lorcana/hades-king-of-olympus.webp',
  'beast, relentless': 'assets/lorcana/beast-relentless.webp',
  'hercules, divine hero': 'assets/lorcana/hercules-divine-hero.webp',
  'shere khan, menacing predator': 'assets/lorcana/shere-khan-menacing-predator.webp',
  "arthur, wizard's apprentice": 'assets/lorcana/arthur-wizards-apprentice.webp',
  'sisu, divine water dragon': 'assets/lorcana/sisu-divine-water-dragon.webp',
  'madam mim, purple dragon': 'assets/lorcana/madam-mim-purple-dragon.webp',
  'namaari, morning mist': 'assets/lorcana/namaari-morning-mist.webp',
  'pete, bad guy': 'assets/lorcana/pete-bad-guy.webp',
  'finders keepers (song)': 'assets/lorcana/finders-keepers-song.webp',
  'prince naveen, ukulele player': 'assets/lorcana/prince-naveen-ukulele-player.webp',
  'revive (song)': 'assets/lorcana/revive-song.webp',
  "ratigan's party, seedy back room": 'assets/lorcana/ratigans-party-seedy-back-room.webp',
  'snow white, fair-hearted': 'assets/lorcana/snow-white-fair-hearted.webp',
  'olaf, happy passenger': 'assets/lorcana/olaf-happy-passenger.webp',
  'scar, vengeful lion': 'assets/lorcana/scar-vengeful-lion.webp',
  'donald duck, pie slinger': 'assets/lorcana/donald-duck-pie-slinger.webp',
  'robin hood, sharpshooter': 'assets/lorcana/robin-hood-sharpshooter.webp',
  'vanellope von schweetz, sugar rush princess': 'assets/lorcana/vanellope-von-schweetz-sugar-rush-princess.webp',
  'arthur, king victorious': 'assets/lorcana/arthur-king-victorious.webp',
  'archimedes, electrified owl': 'assets/lorcana/archimedes-electrified-owl.webp',
  'royal tantrum (song)': 'assets/lorcana/royal-tantrum-song.webp',
  "peter pan, pirate's bane": 'assets/lorcana/peter-pan-pirates-bane.webp',
  'gramma tala, spirit of the ocean': 'assets/lorcana/gramma-tala-spirit-of-the-ocean.webp',
  'mickey mouse, trumpeter': 'assets/lorcana/mickey-mouse-trumpeter.webp',
  'scrooge mcduck, richest duck in the world': 'assets/lorcana/scrooge-mcduck-richest-duck-in-the-world.webp',
  'and then along came zeus (song)': 'assets/lorcana/and-then-along-came-zeus-song.webp',
  "the sorcerer's hat": 'assets/lorcana/the-sorcerers-hat.webp',
  'maleficent, mistress of all evil': 'assets/lorcana/maleficent-mistress-of-all-evil.webp',
  'chernabog, evildoer': 'assets/lorcana/chernabog-evildoer.webp',
  'jafar, striking illusionist': 'assets/lorcana/jafar-striking-illusionist.webp',
  'kida, protector of atlantis': 'assets/lorcana/kida-protector-of-atlantis.webp',
  'captain hook, master swordsman': 'assets/lorcana/captain-hook-master-swordsman.webp',
  'rls legacy, solar galleon': 'assets/lorcana/rls-legacy-solar-galleon.webp',
  "belle's house, maurice's workshop": 'assets/lorcana/belles-house-maurices-workshop.webp',
  "kuzco's palace, home of the emperor": 'assets/lorcana/kuzcos-palace-home-of-the-emperor.webp',
};

// Snapshot data — card name, set, rarity, market price at time of snapshot
const LORCANA_ITEMS = [
  { name: 'Elsa, Spirit of Winter', set: 'The First Chapter', rarity: 'Enchanted', targetPrice: null, purchasePrice: 2500.0, marketPrice: 2914.54, owned: true, grade: 'PSA 10.0 GEM - MT' },
  { name: 'Mickey Mouse, Wayward Sorcerer', set: 'The First Chapter', rarity: 'Enchanted', targetPrice: null, purchasePrice: 1200.0, marketPrice: 1164.82, owned: true, grade: 'PSA 10.0 GEM - MT' },
  { name: 'Stitch, Carefree Surfer', set: 'The First Chapter', rarity: 'Enchanted', targetPrice: null, purchasePrice: null, marketPrice: null, owned: false },
  { name: 'Simba, Returned King', set: 'The First Chapter', rarity: 'Enchanted', targetPrice: null, purchasePrice: null, marketPrice: null, owned: false },
  { name: 'Belle, Strange but Special', set: 'The First Chapter', rarity: 'Enchanted', targetPrice: null, purchasePrice: 1000.0, marketPrice: 1130.63, owned: true, grade: 'PSA 10.0 GEM - MT' },
  { name: 'Aurora, Dreaming Guardian', set: 'The First Chapter', rarity: 'Enchanted', targetPrice: null, purchasePrice: null, marketPrice: null, owned: false },
  { name: 'Tinker Bell, Giant Fairy', set: 'The First Chapter', rarity: 'Enchanted', targetPrice: null, purchasePrice: null, marketPrice: null, owned: false },
  { name: 'Mickey Mouse, Artful Rogue', set: 'The First Chapter', rarity: 'Enchanted', targetPrice: null, purchasePrice: 700.0, marketPrice: 966.67, owned: true, grade: 'PSA 10.0 GEM - MT' },
  { name: 'Genie, On the Job', set: 'The First Chapter', rarity: 'Enchanted', targetPrice: null, purchasePrice: null, marketPrice: null, owned: false },
  { name: 'Aladdin, Heroic Outlaw', set: 'The First Chapter', rarity: 'Enchanted', targetPrice: null, purchasePrice: null, marketPrice: null, owned: false },
  { name: 'Maui, Hero to All', set: 'The First Chapter', rarity: 'Enchanted', targetPrice: null, purchasePrice: null, marketPrice: null, owned: false },
  { name: 'Hades, King of Olympus', set: 'The First Chapter', rarity: 'Enchanted', targetPrice: null, purchasePrice: 500.0, marketPrice: 556.67, owned: true, grade: 'PSA 10.0 GEM - MT' },
  { name: 'Discard Card (Black Background)', set: 'The First Chapter', rarity: 'Promo', targetPrice: null, purchasePrice: null, marketPrice: null, owned: true, grade: 'PSA 10.0 GEM - MT' },
  { name: 'Scar, Mastermind', set: 'The First Chapter', rarity: 'Rare', targetPrice: null, purchasePrice: 31.01, marketPrice: null, owned: true, grade: 'PSA 10.0 GEM - MT' },
  { name: 'Cinderella, Ballroom Sensation', set: 'Rise of the Floodborn', rarity: 'Enchanted', targetPrice: null, purchasePrice: null, marketPrice: null, owned: false },
  { name: 'Alice, Growing Girl', set: 'Rise of the Floodborn', rarity: 'Enchanted', targetPrice: null, purchasePrice: null, marketPrice: null, owned: false },
  { name: 'Snow White, Well Wisher', set: 'Rise of the Floodborn', rarity: 'Enchanted', targetPrice: null, purchasePrice: null, marketPrice: null, owned: false },
  { name: 'Beast, Relentless', set: 'Rise of the Floodborn', rarity: 'Enchanted', targetPrice: null, purchasePrice: null, marketPrice: null, owned: false },
  { name: 'Hercules, Divine Hero', set: 'Rise of the Floodborn', rarity: 'Enchanted', targetPrice: null, purchasePrice: null, marketPrice: null, owned: false },
  { name: 'Shere Khan, Menacing Predator', set: 'Rise of the Floodborn', rarity: 'Enchanted', targetPrice: 165, purchasePrice: 175.0, marketPrice: 165.0, owned: true, grade: 'PSA 10.0 GEM - MT' },
  { name: "Arthur, Wizard's Apprentice", set: 'Rise of the Floodborn', rarity: 'Enchanted', targetPrice: null, purchasePrice: null, marketPrice: null, owned: false },
  { name: 'Lady Tremaine, Imperious Queen', set: 'Rise of the Floodborn', rarity: 'Enchanted', targetPrice: null, purchasePrice: 139.1, marketPrice: 146.6, owned: true, grade: 'PSA 10.0 GEM - MT' },
  { name: 'Sisu, Divine Water Dragon', set: 'Rise of the Floodborn', rarity: 'Enchanted', targetPrice: null, purchasePrice: null, marketPrice: null, owned: false },
  { name: 'Madam Mim, Purple Dragon', set: 'Rise of the Floodborn', rarity: 'Enchanted', targetPrice: null, purchasePrice: null, marketPrice: null, owned: false },
  { name: 'Namaari, Morning Mist', set: 'Rise of the Floodborn', rarity: 'Enchanted', targetPrice: null, purchasePrice: null, marketPrice: null, owned: false },
  { name: 'Pete, Bad Guy', set: 'Rise of the Floodborn', rarity: 'Enchanted', targetPrice: null, purchasePrice: null, marketPrice: null, owned: false },
  { name: 'Morph, Space Goo', set: 'Into the Inklands', rarity: 'Enchanted', targetPrice: null, purchasePrice: null, marketPrice: null, owned: false },
  { name: 'Ursula, Deceiver of All', set: 'Into the Inklands', rarity: 'Enchanted', targetPrice: null, purchasePrice: null, marketPrice: null, owned: false },
  { name: 'Robin Hood, Champion of Sherwood', set: 'Into the Inklands', rarity: 'Enchanted', targetPrice: null, purchasePrice: 267.5, marketPrice: 261.48, owned: true, grade: 'PSA 10.0 GEM - MT' },
  { name: "Peter Pan, Pirate's Bane", set: 'Into the Inklands', rarity: 'Enchanted', targetPrice: null, purchasePrice: 600.0, marketPrice: 158.96, owned: true, grade: 'PSA 10.0 GEM - MT' },
  { name: 'Gramma Tala, Spirit of the Ocean', set: 'Into the Inklands', rarity: 'Enchanted', targetPrice: null, purchasePrice: 100.0, marketPrice: 123.51, owned: true, grade: 'PSA 10.0 GEM - MT' },
  { name: 'Pride Lands, Pride Rock', set: 'Into the Inklands', rarity: 'Enchanted', targetPrice: null, purchasePrice: 181.89, marketPrice: 92.22, owned: true, grade: 'PSA 10.0 GEM - MT' },
  { name: 'RLS Legacy, Solar Galleon', set: 'Into the Inklands', rarity: 'Enchanted', targetPrice: null, purchasePrice: null, marketPrice: null, owned: false },
  { name: "Belle's House, Maurice's Workshop", set: 'Into the Inklands', rarity: 'Enchanted', targetPrice: null, purchasePrice: null, marketPrice: null, owned: false },
  { name: "Kuzco's Palace, Home of the Emperor", set: 'Into the Inklands', rarity: 'Enchanted', targetPrice: null, purchasePrice: 167.52, marketPrice: 131.48, owned: true, grade: 'PSA 10.0 GEM - MT' },
  { name: 'Mickey Mouse, Trumpeter', set: 'Into the Inklands', rarity: 'Enchanted', targetPrice: null, purchasePrice: 750.0, marketPrice: 823.09, owned: true, grade: 'PSA 10.0 GEM - MT' },
  { name: 'Scrooge McDuck, Richest Duck in the World', set: 'Into the Inklands', rarity: 'Enchanted', targetPrice: null, purchasePrice: null, marketPrice: null, owned: false },
  { name: 'And Then Along Came Zeus (song)', set: 'Into the Inklands', rarity: 'Enchanted', targetPrice: null, purchasePrice: null, marketPrice: null, owned: false },
  { name: "The Sorcerer's Hat", set: 'Into the Inklands', rarity: 'Enchanted', targetPrice: null, purchasePrice: 325.0, marketPrice: 376.25, owned: true, grade: 'PSA 10.0 GEM - MT' },
  { name: 'Maleficent, Mistress of All Evil', set: 'Into the Inklands', rarity: 'Enchanted', targetPrice: null, purchasePrice: null, marketPrice: null, owned: false },
  { name: 'Chernabog, Evildoer', set: 'Into the Inklands', rarity: 'Enchanted', targetPrice: null, purchasePrice: null, marketPrice: null, owned: false },
  { name: 'Jafar, Striking Illusionist', set: 'Into the Inklands', rarity: 'Enchanted', targetPrice: null, purchasePrice: null, marketPrice: null, owned: false },
  { name: 'Kida, Protector of Atlantis', set: 'Into the Inklands', rarity: 'Enchanted', targetPrice: null, purchasePrice: null, marketPrice: null, owned: false },
  { name: 'Captain Hook, Master Swordsman', set: 'Into the Inklands', rarity: 'Enchanted', targetPrice: null, purchasePrice: 325.0, marketPrice: 356.54, owned: true, grade: 'PSA 10.0 GEM - MT' },
  { name: 'Ariel, Sonic Warrior', set: "Ursula's Return", rarity: 'Enchanted', targetPrice: null, purchasePrice: null, marketPrice: null, owned: false },
  { name: 'Diablo, Devoted Herald', set: "Ursula's Return", rarity: 'Enchanted', targetPrice: null, purchasePrice: null, marketPrice: null, owned: false },
  { name: 'The Wall, Border Fortress', set: "Ursula's Return", rarity: 'Enchanted', targetPrice: null, purchasePrice: null, marketPrice: null, owned: false },
  { name: 'Minnie Mouse, Musketeer Champion', set: "Ursula's Return", rarity: 'Enchanted', targetPrice: null, purchasePrice: null, marketPrice: null, owned: false },
  { name: 'Yen Sid, Powerful Sorcerer', set: "Ursula's Return", rarity: 'Enchanted', targetPrice: null, purchasePrice: null, marketPrice: null, owned: false },
  { name: 'The Queen, Diviner', set: "Ursula's Return", rarity: 'Enchanted', targetPrice: null, purchasePrice: null, marketPrice: null, owned: false },
  { name: "We Don't Talk About Bruno (song)", set: "Ursula's Return", rarity: 'Enchanted', targetPrice: null, purchasePrice: null, marketPrice: null, owned: false },
  { name: 'Goofy, Super Goof', set: "Ursula's Return", rarity: 'Enchanted', targetPrice: null, purchasePrice: 450.0, marketPrice: 510.0, owned: true, grade: 'PSA 10.0 GEM - MT' },
  { name: 'Cinderella, Melody Weaver', set: "Ursula's Return", rarity: 'Enchanted', targetPrice: null, purchasePrice: null, marketPrice: null, owned: false },
  { name: 'Anna, True-Hearted', set: "Ursula's Return", rarity: 'Enchanted', targetPrice: null, purchasePrice: null, marketPrice: null, owned: false },
  { name: 'Look at This Family (song)', set: "Ursula's Return", rarity: 'Enchanted', targetPrice: null, purchasePrice: null, marketPrice: null, owned: false },
  { name: "Ariel's Grotto, A Secret Place", set: "Ursula's Return", rarity: 'Enchanted', targetPrice: null, purchasePrice: null, marketPrice: null, owned: false },
  { name: 'Piglet, Sturdy Swordsman', set: "Ursula's Return", rarity: 'Enchanted', targetPrice: null, purchasePrice: null, marketPrice: null, owned: false },
  { name: 'Snuggly Duckling, Disreputable Pub', set: "Ursula's Return", rarity: 'Enchanted', targetPrice: null, purchasePrice: null, marketPrice: null, owned: false },
  { name: 'Sisu, Empowered Sibling', set: "Ursula's Return", rarity: 'Enchanted', targetPrice: null, purchasePrice: null, marketPrice: null, owned: false },
  { name: 'Ursula, Sea Witch Queen', set: "Ursula's Return", rarity: 'Enchanted', targetPrice: null, purchasePrice: null, marketPrice: null, owned: false },
  { name: 'Second Star to the Right (song)', set: "Ursula's Return", rarity: 'Enchanted', targetPrice: null, purchasePrice: null, marketPrice: null, owned: false },
  { name: 'Jasmine, Desert Warrior', set: "Ursula's Return", rarity: 'Enchanted', targetPrice: null, purchasePrice: null, marketPrice: null, owned: false },
  { name: 'Mufasa, Ruler of Pride Rock', set: 'Shimmering Skies', rarity: 'Enchanted', targetPrice: null, purchasePrice: 1000.0, marketPrice: 1032.31, owned: true, grade: 'PSA 10.0 GEM - MT' },
  { name: 'Clarabelle, Light on Her Hooves', set: 'Shimmering Skies', rarity: 'Enchanted', targetPrice: null, purchasePrice: null, marketPrice: null, owned: false },
  { name: "You're Welcome (song)", set: 'Shimmering Skies', rarity: 'Enchanted', targetPrice: null, purchasePrice: null, marketPrice: null, owned: false },
  { name: 'Finders Keepers (song)', set: 'Shimmering Skies', rarity: 'Enchanted', targetPrice: null, purchasePrice: null, marketPrice: null, owned: false },
  { name: 'Prince Naveen, Ukulele Player', set: 'Shimmering Skies', rarity: 'Enchanted', targetPrice: null, purchasePrice: 125.0, marketPrice: 161.19, owned: true, grade: 'PSA 10.0 GEM - MT' },
  { name: 'King Candy, Sweet Abomination', set: 'Shimmering Skies', rarity: 'Enchanted', targetPrice: null, purchasePrice: 224.11, marketPrice: 165.23, owned: true, grade: 'PSA 10.0 GEM - MT' },
  { name: 'Revive (song)', set: 'Shimmering Skies', rarity: 'Enchanted', targetPrice: null, purchasePrice: null, marketPrice: null, owned: false },
  { name: 'Bad-Anon, Villain Support Center', set: 'Shimmering Skies', rarity: 'Enchanted', targetPrice: null, purchasePrice: 144.44, marketPrice: 146.66, owned: true, grade: 'PSA 10.0 GEM - MT' },
  { name: "Ratigan's Party, Seedy Back Room", set: 'Shimmering Skies', rarity: 'Enchanted', targetPrice: null, purchasePrice: null, marketPrice: null, owned: false },
  { name: 'Snow White, Fair-Hearted', set: 'Shimmering Skies', rarity: 'Enchanted', targetPrice: null, purchasePrice: null, marketPrice: null, owned: false },
  { name: 'Olaf, Happy Passenger', set: 'Shimmering Skies', rarity: 'Enchanted', targetPrice: null, purchasePrice: null, marketPrice: null, owned: false },
  { name: 'Scar, Vengeful Lion', set: 'Shimmering Skies', rarity: 'Enchanted', targetPrice: null, purchasePrice: 594.89, marketPrice: null, owned: true, grade: 'PSA 10.0 GEM - MT' },
  { name: 'Donald Duck, Pie Slinger', set: 'Shimmering Skies', rarity: 'Enchanted', targetPrice: null, purchasePrice: null, marketPrice: null, owned: false },
  { name: 'Robin Hood, Sharpshooter', set: 'Shimmering Skies', rarity: 'Enchanted', targetPrice: null, purchasePrice: null, marketPrice: null, owned: false },
  { name: 'Vanellope von Schweetz, Sugar Rush Princess', set: 'Shimmering Skies', rarity: 'Enchanted', targetPrice: null, purchasePrice: null, marketPrice: null, owned: false },
  { name: 'Arthur, King Victorious', set: 'Shimmering Skies', rarity: 'Enchanted', targetPrice: null, purchasePrice: 350.0, marketPrice: 425.0, owned: true, grade: 'PSA 10.0 GEM - MT' },
  { name: 'Archimedes, Electrified Owl', set: 'Shimmering Skies', rarity: 'Enchanted', targetPrice: null, purchasePrice: null, marketPrice: null, owned: false },
  { name: 'Royal Tantrum (song)', set: 'Shimmering Skies', rarity: 'Enchanted', targetPrice: null, purchasePrice: 300.0, marketPrice: 333.08, owned: true, grade: 'PSA 10.0 GEM - MT' },
  { name: 'You Came Back (song)', set: 'Azurite Sea', rarity: 'Enchanted', targetPrice: null, purchasePrice: 375.0, marketPrice: 483.45, owned: true, grade: 'PSA 10.0 GEM - MT' },
  { name: 'Tiana, Restaurant Owner', set: 'Azurite Sea', rarity: 'Enchanted', targetPrice: null, purchasePrice: null, marketPrice: null, owned: false },
  { name: "Tigger, In the Crow's Nest", set: 'Azurite Sea', rarity: 'Enchanted', targetPrice: null, purchasePrice: null, marketPrice: null, owned: false },
  { name: 'Wreck-It Ralph, Ham Hands', set: 'Azurite Sea', rarity: 'Enchanted', targetPrice: null, purchasePrice: null, marketPrice: null, owned: false },
  { name: 'Basil, Disguised Detective', set: 'Azurite Sea', rarity: 'Enchanted', targetPrice: null, purchasePrice: 223.15, marketPrice: 132.5, owned: true, grade: 'PSA 10.0 GEM - MT' },
  { name: 'Baymax, Personal Healthcare Companion', set: 'Azurite Sea', rarity: 'Enchanted', targetPrice: null, purchasePrice: null, marketPrice: null, owned: false },
  { name: 'The Islands I Pulled From The Sea (song)', set: 'Azurite Sea', rarity: 'Enchanted', targetPrice: null, purchasePrice: null, marketPrice: null, owned: false },
  { name: 'Sugar Rush Speedway, Finish Line', set: 'Azurite Sea', rarity: 'Enchanted', targetPrice: null, purchasePrice: null, marketPrice: null, owned: false },
  { name: 'We Could Be Immortals (song)', set: 'Azurite Sea', rarity: 'Enchanted', targetPrice: null, purchasePrice: null, marketPrice: null, owned: false },
  { name: 'Yzma, Conniving Chemist', set: 'Azurite Sea', rarity: 'Enchanted', targetPrice: null, purchasePrice: null, marketPrice: null, owned: false },
  { name: 'Captain Amelia, Commander of the Legacy', set: 'Azurite Sea', rarity: 'Enchanted', targetPrice: null, purchasePrice: null, marketPrice: null, owned: false },
  { name: "Chip 'n' Dale, Recovery Rangers", set: 'Azurite Sea', rarity: 'Enchanted', targetPrice: null, purchasePrice: null, marketPrice: null, owned: false },
  { name: 'Rafiki, Ethereal Guide', set: 'Azurite Sea', rarity: 'Enchanted', targetPrice: null, purchasePrice: null, marketPrice: null, owned: false },
  { name: "Maleficent's Staff", set: 'Azurite Sea', rarity: 'Enchanted', targetPrice: null, purchasePrice: null, marketPrice: null, owned: false },
  { name: 'Raya, Kumandran Rider', set: 'Azurite Sea', rarity: 'Enchanted', targetPrice: null, purchasePrice: null, marketPrice: null, owned: false },
  { name: 'Gadget Hackwrench, Brilliant Bosun', set: 'Azurite Sea', rarity: 'Enchanted', targetPrice: null, purchasePrice: null, marketPrice: null, owned: false },
  { name: 'Daisy Duck, Pirate Captain', set: 'Azurite Sea', rarity: 'Enchanted', targetPrice: null, purchasePrice: null, marketPrice: null, owned: false },
  { name: 'Treasure Mountain, Azurite Sea Island', set: 'Azurite Sea', rarity: 'Enchanted', targetPrice: null, purchasePrice: null, marketPrice: null, owned: false },
  { name: 'All Is Found (song)', set: "Archazia's Island", rarity: 'Enchanted', targetPrice: null, purchasePrice: null, marketPrice: null, owned: false },
  { name: 'Aurora, Waking Beauty', set: "Archazia's Island", rarity: 'Enchanted', targetPrice: null, purchasePrice: null, marketPrice: null, owned: false },
  { name: 'Mickey Mouse, Inspirational Warrior', set: "Archazia's Island", rarity: 'Enchanted', targetPrice: null, purchasePrice: null, marketPrice: null, owned: false },
  { name: 'Mirabel Madrigal, Musically Talented', set: "Archazia's Island", rarity: 'Enchanted', targetPrice: null, purchasePrice: null, marketPrice: null, owned: false },
  { name: 'Bolt, Superdog', set: "Archazia's Island", rarity: 'Enchanted', targetPrice: null, purchasePrice: null, marketPrice: null, owned: false },
  { name: 'The Glass Slipper', set: "Archazia's Island", rarity: 'Enchanted', targetPrice: null, purchasePrice: null, marketPrice: null, owned: false },
  { name: 'Donald Duck, Flustered Sorcerer', set: "Archazia's Island", rarity: 'Enchanted', targetPrice: null, purchasePrice: null, marketPrice: null, owned: false },
  { name: 'Jafar, Newly Crowned', set: "Archazia's Island", rarity: 'Enchanted', targetPrice: null, purchasePrice: null, marketPrice: null, owned: false },
  { name: 'Show Me More! (song)', set: "Archazia's Island", rarity: 'Enchanted', targetPrice: null, purchasePrice: null, marketPrice: null, owned: false },
  { name: 'Tramp, Enterprising Dog', set: "Archazia's Island", rarity: 'Enchanted', targetPrice: null, purchasePrice: null, marketPrice: null, owned: false },
  { name: 'Mad Hatter, Unruly Eccentric', set: "Archazia's Island", rarity: 'Enchanted', targetPrice: null, purchasePrice: null, marketPrice: null, owned: false },
  { name: 'Hiro Hamada, Armor Designer', set: "Archazia's Island", rarity: 'Enchanted', targetPrice: null, purchasePrice: null, marketPrice: null, owned: false },
  { name: 'The Return of Hercules (song)', set: "Archazia's Island", rarity: 'Enchanted', targetPrice: null, purchasePrice: null, marketPrice: null, owned: false },
  { name: 'Ratigan, Nefarious Criminal', set: "Archazia's Island", rarity: 'Enchanted', targetPrice: null, purchasePrice: null, marketPrice: null, owned: false },
  { name: 'Belle, Mechanic Extraordinaire', set: "Archazia's Island", rarity: 'Enchanted', targetPrice: null, purchasePrice: null, marketPrice: null, owned: false },
  { name: "Devil's Eye Diamond", set: "Archazia's Island", rarity: 'Enchanted', targetPrice: null, purchasePrice: null, marketPrice: null, owned: false },
  { name: 'Tamatoa, Happy as a Clam', set: "Archazia's Island", rarity: 'Enchanted', targetPrice: null, purchasePrice: null, marketPrice: null, owned: false },
  { name: 'Restoring Atlantis (song)', set: "Archazia's Island", rarity: 'Enchanted', targetPrice: null, purchasePrice: null, marketPrice: null, owned: false },
  { name: 'Stitch, Experiment 626', set: 'Reign of Jafar', rarity: 'Enchanted', targetPrice: null, purchasePrice: 3500.0, marketPrice: 3106.05, owned: true, grade: 'PSA 10.0 GEM - MT' },
  { name: 'Fantastical and Magical (song)', set: 'Reign of Jafar', rarity: 'Enchanted', targetPrice: null, purchasePrice: null, marketPrice: null, owned: false },
  { name: 'Wrong Lever! (song)', set: 'Reign of Jafar', rarity: 'Enchanted', targetPrice: null, purchasePrice: null, marketPrice: null, owned: false },
  { name: 'The Sword of Shan Yu', set: 'Reign of Jafar', rarity: 'Enchanted', targetPrice: null, purchasePrice: null, marketPrice: null, owned: false },
  { name: 'Desperate Plan (song)', set: 'Reign of Jafar', rarity: 'Enchanted', targetPrice: null, purchasePrice: null, marketPrice: null, owned: false },
  { name: "Mother Gothel, Knows What's Best", set: 'Reign of Jafar', rarity: 'Enchanted', targetPrice: null, purchasePrice: null, marketPrice: null, owned: false },
  { name: 'Mushu, Your Worst Nightmare', set: 'Reign of Jafar', rarity: 'Enchanted', targetPrice: null, purchasePrice: null, marketPrice: null, owned: false },
  { name: 'Kuzco, Impulsive Llama', set: 'Reign of Jafar', rarity: 'Enchanted', targetPrice: null, purchasePrice: null, marketPrice: null, owned: false },
  { name: 'Captain Hook, The Pirate King', set: 'Reign of Jafar', rarity: 'Enchanted', targetPrice: null, purchasePrice: null, marketPrice: null, owned: false },
  { name: 'Wreck-It Ralph, Big Lug', set: 'Reign of Jafar', rarity: 'Enchanted', targetPrice: null, purchasePrice: null, marketPrice: null, owned: false },
  { name: 'Lilo, Causing an Uproar', set: 'Reign of Jafar', rarity: 'Enchanted', targetPrice: null, purchasePrice: null, marketPrice: null, owned: false },
  { name: 'Perdita, Determined Mother', set: 'Reign of Jafar', rarity: 'Enchanted', targetPrice: null, purchasePrice: null, marketPrice: null, owned: false },
  { name: 'Lady, Decisive Dog', set: 'Reign of Jafar', rarity: 'Enchanted', targetPrice: null, purchasePrice: null, marketPrice: null, owned: false },
  { name: 'Jasmine, Steady Strategist', set: 'Reign of Jafar', rarity: 'Enchanted', targetPrice: null, purchasePrice: null, marketPrice: null, owned: false },
  { name: 'Bambi, Little Prince', set: 'Reign of Jafar', rarity: 'Enchanted', targetPrice: null, purchasePrice: 1900.0, marketPrice: 2200.0, owned: true, grade: 'PSA 10.0 GEM - MT' },
  { name: 'Rapunzel, High Climber', set: 'Reign of Jafar', rarity: 'Enchanted', targetPrice: null, purchasePrice: null, marketPrice: null, owned: false },
  { name: 'It Means No Worries (song)', set: 'Reign of Jafar', rarity: 'Enchanted', targetPrice: null, purchasePrice: null, marketPrice: null, owned: false },
  { name: 'Into the Unknown (song)', set: 'Reign of Jafar', rarity: 'Enchanted', targetPrice: null, purchasePrice: null, marketPrice: null, owned: false },
  { name: 'Mickey Mouse, Brave Little Prince', set: 'Fabled', rarity: 'Iconic', targetPrice: 13200, purchasePrice: 14183.0, marketPrice: 13028.17, owned: true, grade: 'PSA 10.0 GEM - MT' },
  { name: 'Minnie Mouse, Sweetheart Princess', set: 'Fabled', rarity: 'Iconic', targetPrice: null, purchasePrice: 6250.0, marketPrice: 6689.56, owned: true, grade: 'PSA 10.0 GEM - MT' },
  { name: 'Winnie the Pooh, Hunny Wizard', set: 'Fabled', rarity: 'Enchanted', targetPrice: null, purchasePrice: 5200.0, marketPrice: 7341.72, owned: true, grade: 'PSA 10.0 GEM - MT' },
  { name: 'Circle of Life (song)', set: 'Fabled', rarity: 'Enchanted', targetPrice: null, purchasePrice: null, marketPrice: null, owned: false },
  { name: "Powerline, World's Greatest Rock Star", set: 'Fabled', rarity: 'Enchanted', targetPrice: null, purchasePrice: null, marketPrice: null, owned: false },
  { name: 'Lilo, Best Explorer Ever', set: 'Fabled', rarity: 'Enchanted', targetPrice: null, purchasePrice: 695.5, marketPrice: 909.0, owned: true, grade: 'PSA 10.0 GEM - MT' },
  { name: 'Scar, Finally King', set: 'Fabled', rarity: 'Enchanted', targetPrice: null, purchasePrice: 1000.0, marketPrice: 1173.42, owned: true, grade: 'PSA 10.0 GEM - MT' },
  { name: 'Pongo, Determined Father', set: 'Fabled', rarity: 'Enchanted', targetPrice: null, purchasePrice: null, marketPrice: null, owned: false },
  { name: 'Mulan, Considerate Diplomat', set: 'Fabled', rarity: 'Enchanted', targetPrice: null, purchasePrice: 836.0, marketPrice: 776.26, owned: true, grade: 'PSA 10.0 GEM - MT' },
  { name: 'Mickey Mouse, Steamboat Pilot', set: 'Fabled', rarity: 'Enchanted', targetPrice: null, purchasePrice: 2140.0, marketPrice: 2345.78, owned: true, grade: 'PSA 10.0 GEM - MT' },
  { name: 'Max Goof, Chart Topper', set: 'Fabled', rarity: 'Enchanted', targetPrice: null, purchasePrice: 1191.0, marketPrice: 700.0, owned: true, grade: 'PSA 10.0 GEM - MT' },
  { name: "Max Goof, Rockin' Teen", set: 'Fabled', rarity: 'Epic', targetPrice: null, purchasePrice: 100.0, marketPrice: 125.0, owned: true, grade: 'PSA 10.0 GEM - MT' },
  { name: 'Jasmine, Fearless Princess', set: 'Fabled', rarity: 'Enchanted', targetPrice: null, purchasePrice: null, marketPrice: null, owned: false },
  { name: 'I2I (song)', set: 'Fabled', rarity: 'Enchanted', targetPrice: null, purchasePrice: null, marketPrice: null, owned: false },
  { name: 'Hades, Infernal Schemer', set: 'Fabled', rarity: 'Enchanted', targetPrice: null, purchasePrice: null, marketPrice: null, owned: false },
  { name: 'Genie, Of the Lamp', set: 'Fabled', rarity: 'Enchanted', targetPrice: null, purchasePrice: 1091.0, marketPrice: 1100.0, owned: true, grade: 'PSA 10.0 GEM - MT' },
  { name: 'Dumbo, Ninth Wonder of the Universe', set: 'Fabled', rarity: 'Enchanted', targetPrice: null, purchasePrice: null, marketPrice: null, owned: false },
  { name: 'Cruella De Vil, Style Icon', set: 'Fabled', rarity: 'Enchanted', targetPrice: null, purchasePrice: 802.5, marketPrice: 704.52, owned: true, grade: 'PSA 10.0 GEM - MT' },
  { name: 'Belle, Accomplished Mystic', set: 'Fabled', rarity: 'Enchanted', targetPrice: null, purchasePrice: null, marketPrice: null, owned: false },
  { name: 'Beast, Gracious Prince', set: 'Fabled', rarity: 'Enchanted', targetPrice: null, purchasePrice: 942.0, marketPrice: 875.11, owned: true, grade: 'PSA 10.0 GEM - MT' },
  { name: 'Ariel, Adventurous Collector', set: 'Fabled', rarity: 'Enchanted', targetPrice: null, purchasePrice: 4000.0, marketPrice: 3534.58, owned: true, grade: 'PSA 10.0 GEM - MT' },
  { name: 'Ariel, Ethereal Voice', set: 'Whispers in the Well', rarity: 'Iconic', targetPrice: null, purchasePrice: 3163.0, marketPrice: 3233.25, owned: true, grade: 'PSA 10.0 GEM - MT' },
  { name: 'Hades, Looking for a Deal', set: 'Whispers in the Well', rarity: 'Iconic', targetPrice: null, purchasePrice: 2735.0, marketPrice: 2440.18, owned: true, grade: 'PSA 10.0 GEM - MT' },
  { name: 'Spooky Sight (song)', set: 'Whispers in the Well', rarity: 'Enchanted', targetPrice: null, purchasePrice: null, marketPrice: null, owned: false },
  { name: 'Demona, Scourge of the Wyvern Clan', set: 'Whispers in the Well', rarity: 'Enchanted', targetPrice: null, purchasePrice: null, marketPrice: null, owned: false },
  { name: 'Simba, King in the Making', set: 'Whispers in the Well', rarity: 'Enchanted', targetPrice: null, purchasePrice: null, marketPrice: null, owned: false },
  { name: 'The Black Cauldron', set: 'Whispers in the Well', rarity: 'Enchanted', targetPrice: null, purchasePrice: null, marketPrice: null, owned: false },
  { name: 'Baloo, Carefree Bear', set: 'Whispers in the Well', rarity: 'Enchanted', targetPrice: null, purchasePrice: 400.0, marketPrice: 500.0, owned: true, grade: 'PSA 10.0 GEM - MT' },
  { name: 'The Headless Horseman, Terror of Sleepy Hollow', set: 'Whispers in the Well', rarity: 'Enchanted', targetPrice: null, purchasePrice: null, marketPrice: null, owned: false },
  { name: 'Malicious, Mean, and Scary (song)', set: 'Whispers in the Well', rarity: 'Enchanted', targetPrice: null, purchasePrice: null, marketPrice: null, owned: false },
  { name: 'Next Stop, Olympus (song)', set: 'Whispers in the Well', rarity: 'Enchanted', targetPrice: null, purchasePrice: null, marketPrice: null, owned: false },
  { name: 'Cinderella, Dream Come True', set: 'Whispers in the Well', rarity: 'Enchanted', targetPrice: null, purchasePrice: 2500.0, marketPrice: 1791.67, owned: true, grade: 'PSA 10.0 GEM - MT' },
  { name: 'Nick Wilde, Persistent Investigator', set: 'Whispers in the Well', rarity: 'Enchanted', targetPrice: null, purchasePrice: null, marketPrice: null, owned: false },
  { name: 'The Sword of Hercules', set: 'Whispers in the Well', rarity: 'Enchanted', targetPrice: null, purchasePrice: null, marketPrice: null, owned: false },
  { name: 'Goliath, Clan Leader', set: 'Whispers in the Well', rarity: 'Enchanted', targetPrice: null, purchasePrice: 300.0, marketPrice: 340.0, owned: true, grade: 'PSA 10.0 GEM - MT' },
  { name: "Can't Hold It Back Anymore (song)", set: 'Whispers in the Well', rarity: 'Enchanted', targetPrice: null, purchasePrice: null, marketPrice: null, owned: false },
  { name: 'Lady Tremaine, Sinister Socialite', set: 'Whispers in the Well', rarity: 'Enchanted', targetPrice: null, purchasePrice: null, marketPrice: null, owned: false },
  { name: 'Judy Hopps, Lead Detective', set: 'Whispers in the Well', rarity: 'Enchanted', targetPrice: null, purchasePrice: null, marketPrice: null, owned: false },
  { name: 'The Horned King, Wicked Ruler', set: 'Whispers in the Well', rarity: 'Enchanted', targetPrice: null, purchasePrice: null, marketPrice: null, owned: false },
  { name: 'Webby Vanderquack, Junior Prospector', set: 'Whispers in the Well', rarity: 'Enchanted', targetPrice: null, purchasePrice: null, marketPrice: null, owned: false },
  { name: 'Goofy, Galumphing Gumshoe', set: 'Whispers in the Well', rarity: 'Enchanted', targetPrice: null, purchasePrice: null, marketPrice: null, owned: false },
  { name: 'Moana, Curious Explorer', set: 'Winterspell', rarity: 'Iconic', targetPrice: null, purchasePrice: 2617.0, marketPrice: 2648.94, owned: true, grade: 'PSA 10.0 GEM - MT' },
  { name: 'Pocahontas, Peacekeeper', set: 'Winterspell', rarity: 'Iconic', targetPrice: null, purchasePrice: 2045.0, marketPrice: 2053.23, owned: true, grade: 'PSA 10.0 GEM - MT' },
  { name: 'Elsa, Ice Artisan', set: 'Winterspell', rarity: 'Enchanted', targetPrice: null, purchasePrice: null, marketPrice: null, owned: false },
  { name: 'Ohana Means Family (song)', set: 'Winterspell', rarity: 'Enchanted', targetPrice: null, purchasePrice: null, marketPrice: null, owned: false },
  { name: 'Eeyore, In the Way', set: 'Winterspell', rarity: 'Enchanted', targetPrice: null, purchasePrice: null, marketPrice: null, owned: false },
  { name: 'Freeze the Vine (song)', set: 'Winterspell', rarity: 'Enchanted', targetPrice: null, purchasePrice: null, marketPrice: null, owned: false },
  { name: 'Lilo, Rock Star', set: 'Winterspell', rarity: 'Enchanted', targetPrice: null, purchasePrice: null, marketPrice: null, owned: false },
  { name: 'Raging Storm (song)', set: 'Winterspell', rarity: 'Enchanted', targetPrice: null, purchasePrice: null, marketPrice: null, owned: false },
  { name: 'Anna, Soothing Sister', set: 'Winterspell', rarity: 'Enchanted', targetPrice: null, purchasePrice: null, marketPrice: null, owned: false },
  { name: 'Colors of the Wind (song)', set: 'Winterspell', rarity: 'Enchanted', targetPrice: null, purchasePrice: null, marketPrice: null, owned: false },
  { name: 'Mulan, Resourceful Recruit', set: 'Winterspell', rarity: 'Enchanted', targetPrice: null, purchasePrice: null, marketPrice: null, owned: false },
  { name: 'Tod, Knows All the Tricks', set: 'Winterspell', rarity: 'Enchanted', targetPrice: null, purchasePrice: null, marketPrice: null, owned: false },
  { name: 'Negaduck, Public Enemy Number One', set: 'Winterspell', rarity: 'Enchanted', targetPrice: null, purchasePrice: null, marketPrice: null, owned: false },
  { name: 'The Cold Never Bothered Me (song)', set: 'Winterspell', rarity: 'Enchanted', targetPrice: null, purchasePrice: null, marketPrice: null, owned: false },
  { name: 'Scrooge McDuck, Reformed Ebenezer', set: 'Winterspell', rarity: 'Enchanted', targetPrice: null, purchasePrice: null, marketPrice: null, owned: false },
  { name: 'Belle, Snowfield Strategist', set: 'Winterspell', rarity: 'Enchanted', targetPrice: null, purchasePrice: null, marketPrice: null, owned: false },
  { name: 'Tamatoa, Seeker of Shine', set: 'Winterspell', rarity: 'Enchanted', targetPrice: null, purchasePrice: null, marketPrice: null, owned: false },
  { name: 'Angel, Experiment 624', set: 'Winterspell', rarity: 'Enchanted', targetPrice: null, purchasePrice: null, marketPrice: null, owned: false },
  { name: 'Darkwing Duck, Cool Under Pressure', set: 'Winterspell', rarity: 'Enchanted', targetPrice: null, purchasePrice: null, marketPrice: null, owned: false },
  { name: "Let's Get Dangerous (song)", set: 'Winterspell', rarity: 'Enchanted', targetPrice: null, purchasePrice: null, marketPrice: null, owned: false },
  { name: 'Buzz Lightyear, Jungle Ranger', set: 'Wilds Unknown', rarity: 'Iconic', targetPrice: null, purchasePrice: null, marketPrice: null, owned: false },
  { name: 'Merida, Formidable Archer', set: 'Wilds Unknown', rarity: 'Iconic', targetPrice: null, purchasePrice: 1986.0, marketPrice: 2033.81, owned: true, grade: 'PSA 10.0 GEM - MT' },
  { name: "You've Got a Friend in Me (song)", set: 'Wilds Unknown', rarity: 'Enchanted', targetPrice: null, purchasePrice: 1368.0, marketPrice: 1400.0, owned: true, grade: 'PSA 10.0 GEM - MT' },
  { name: 'What Else Can I Do? (song)', set: 'Wilds Unknown', rarity: 'Enchanted', targetPrice: null, purchasePrice: null, marketPrice: null, owned: false },
  { name: 'Isabela Madrigal, Caring Cultivator', set: 'Wilds Unknown', rarity: 'Enchanted', targetPrice: null, purchasePrice: null, marketPrice: null, owned: false },
  { name: 'Frozone, Super Cool', set: 'Wilds Unknown', rarity: 'Enchanted', targetPrice: null, purchasePrice: null, marketPrice: null, owned: false },
  { name: 'Touch the Sky (song)', set: 'Wilds Unknown', rarity: 'Enchanted', targetPrice: null, purchasePrice: null, marketPrice: null, owned: false },
  { name: 'Jessie, Lively Cowgirl', set: 'Wilds Unknown', rarity: 'Enchanted', targetPrice: null, purchasePrice: null, marketPrice: null, owned: false },
  { name: 'Luisa Madrigal, Confident Climber', set: 'Wilds Unknown', rarity: 'Enchanted', targetPrice: null, purchasePrice: null, marketPrice: null, owned: false },
  { name: 'DunBroch Family Tapestry', set: 'Wilds Unknown', rarity: 'Enchanted', targetPrice: null, purchasePrice: null, marketPrice: null, owned: false },
  { name: 'Alien, True Believer', set: 'Wilds Unknown', rarity: 'Enchanted', targetPrice: null, purchasePrice: null, marketPrice: null, owned: false },
  { name: 'Milo Thatch, Getting His Hands Dirty', set: 'Wilds Unknown', rarity: 'Enchanted', targetPrice: null, purchasePrice: null, marketPrice: null, owned: false },
  { name: 'The Family Scattered (song)', set: 'Wilds Unknown', rarity: 'Enchanted', targetPrice: null, purchasePrice: null, marketPrice: null, owned: false },
  { name: 'Jack-Jack Parr, Incredible Potential', set: 'Wilds Unknown', rarity: 'Enchanted', targetPrice: null, purchasePrice: null, marketPrice: null, owned: false },
  { name: 'The Leviathan, Guardian of Atlantis', set: 'Wilds Unknown', rarity: 'Enchanted', targetPrice: null, purchasePrice: null, marketPrice: null, owned: false },
  { name: 'Mr. Incredible, Super Strong', set: 'Wilds Unknown', rarity: 'Enchanted', targetPrice: null, purchasePrice: null, marketPrice: null, owned: false },
  { name: 'Zipper, Big Helper', set: 'Wilds Unknown', rarity: 'Enchanted', targetPrice: null, purchasePrice: null, marketPrice: null, owned: false },
  { name: 'Kida, Crystal Scion', set: 'Wilds Unknown', rarity: 'Enchanted', targetPrice: null, purchasePrice: null, marketPrice: null, owned: false },
  { name: 'Syndrome, Out for Revenge', set: 'Wilds Unknown', rarity: 'Enchanted', targetPrice: null, purchasePrice: null, marketPrice: null, owned: false },
  { name: 'Mrs. Incredible, Determined Rescuer', set: 'Wilds Unknown', rarity: 'Enchanted', targetPrice: null, purchasePrice: null, marketPrice: null, owned: false },
  { name: 'Lilo & Stitch, Fun-Loving Friends', set: 'Attack of the Vine!', rarity: 'Iconic', targetPrice: null, purchasePrice: 4750.0, marketPrice: 5000.0, owned: true, grade: 'PSA 10.0 GEM - MT' },
  { name: 'Belle & Beast, Certain as the Sun', set: 'Attack of the Vine!', rarity: 'Iconic', targetPrice: null, purchasePrice: 5000.0, marketPrice: 5500.0, owned: true, grade: 'PSA 10.0 GEM - MT' },
  { name: 'Mike Wazowski, Heroic Climber', set: 'Attack of the Vine!', rarity: 'Enchanted', targetPrice: null, purchasePrice: 808.0, marketPrice: null, owned: true, grade: 'PSA 10.0 GEM - MT' },
  { name: 'Pocahontas & Meeko, Adventurous Friends', set: 'Attack of the Vine!', rarity: 'Enchanted', targetPrice: null, purchasePrice: null, marketPrice: null, owned: false },
  { name: 'Woody & Buzz Lightyear, Best Buddies', set: 'Attack of the Vine!', rarity: 'Enchanted', targetPrice: null, purchasePrice: 1350.0, marketPrice: 4900.0, owned: true, grade: 'PSA 10.0 GEM - MT' },
  { name: 'Sulley & Boo, Scare Buddies', set: 'Attack of the Vine!', rarity: 'Enchanted', targetPrice: null, purchasePrice: 900.0, marketPrice: 3500.0, owned: true, grade: 'PSA 10.0 GEM - MT' },
  { name: 'The Madrigal Family, Every Generation', set: 'Attack of the Vine!', rarity: 'Enchanted', targetPrice: null, purchasePrice: 270.0, marketPrice: 270.0, owned: true, grade: 'PSA 10.0 GEM - MT' },
  { name: 'Merida, Wisp Conjurer', set: 'Attack of the Vine!', rarity: 'Enchanted', targetPrice: null, purchasePrice: null, marketPrice: null, owned: false },
  { name: 'Aladdin & Genie, Mischievous Pals', set: 'Attack of the Vine!', rarity: 'Enchanted', targetPrice: null, purchasePrice: 600.0, marketPrice: 600.0, owned: true, grade: 'PSA 10.0 GEM - MT' },
  { name: 'Peter Pan & Tinker Bell, Fast Friends', set: 'Attack of the Vine!', rarity: 'Enchanted', targetPrice: null, purchasePrice: 2039.0, marketPrice: null, owned: true, grade: 'PSA 10.0 GEM - MT' },
  { name: 'Winnie the Pooh & Piglet, Hunny Mages', set: 'Attack of the Vine!', rarity: 'Enchanted', targetPrice: null, purchasePrice: 8000.0, marketPrice: 8500.0, owned: true, grade: 'PSA 10.0 GEM - MT' },
  { name: 'Maleficent & Diablo, Evil Incarnate', set: 'Attack of the Vine!', rarity: 'Enchanted', targetPrice: null, purchasePrice: 495.0, marketPrice: 495.0, owned: true, grade: 'PSA 10.0 GEM - MT' },
  { name: 'Tod & Copper, Best of Friends', set: 'Attack of the Vine!', rarity: 'Enchanted', targetPrice: null, purchasePrice: 450.0, marketPrice: 450.0, owned: true, grade: 'PSA 10.0 GEM - MT' },
  { name: 'Carl Fredricksen & Russell, Intrepid Explorers', set: 'Attack of the Vine!', rarity: 'Enchanted', targetPrice: null, purchasePrice: 390.0, marketPrice: 390.0, owned: true, grade: 'PSA 10.0 GEM - MT' },
  { name: 'Mickey Mouse & Minnie Mouse, Adventuring Duo', set: 'Attack of the Vine!', rarity: 'Enchanted', targetPrice: null, purchasePrice: 1129.0, marketPrice: null, owned: true, grade: 'PSA 10.0 GEM - MT' },
  { name: 'Rapunzel & Flynn Rider, Unlikely Pair', set: 'Attack of the Vine!', rarity: 'Enchanted', targetPrice: null, purchasePrice: 600.0, marketPrice: 600.0, owned: true, grade: 'PSA 10.0 GEM - MT' },
  { name: 'Meilin Lee, Popular Red Panda', set: 'Attack of the Vine!', rarity: 'Enchanted', targetPrice: null, purchasePrice: null, marketPrice: null, owned: false },
  { name: 'Dash Parr & Violet Parr, Super Siblings', set: 'Attack of the Vine!', rarity: 'Enchanted', targetPrice: null, purchasePrice: 375.0, marketPrice: 375.0, owned: true, grade: 'PSA 10.0 GEM - MT' },
  { name: "Darkwing Duck & Launchpad, St. Canard's Finest", set: 'Attack of the Vine!', rarity: 'Enchanted', targetPrice: null, purchasePrice: 435.0, marketPrice: 435.0, owned: true, grade: 'PSA 10.0 GEM - MT' },
  { name: 'Scar, Created by the Vine', set: 'Attack of the Vine!', rarity: 'Enchanted', targetPrice: null, purchasePrice: 480.0, marketPrice: 3400.0, owned: true, grade: 'PSA 10.0 GEM - MT' },
  { name: 'Mickey Mouse, Brave Little Tailor', set: 'D23 Expo Promo Set - 2022', rarity: 'Promo', targetPrice: null, purchasePrice: null, marketPrice: null, owned: false },
  { name: 'Stitch, Rock Star', set: 'D23 Expo Promo Set - 2022', rarity: 'Promo', targetPrice: null, purchasePrice: null, marketPrice: null, owned: false },
  { name: 'Elsa, Snow Queen', set: 'D23 Expo Promo Set - 2022', rarity: 'Promo', targetPrice: null, purchasePrice: null, marketPrice: null, owned: false },
  { name: 'Cruella de Vil, Miserable As Usual', set: 'D23 Expo Promo Set - 2022', rarity: 'Promo', targetPrice: null, purchasePrice: null, marketPrice: null, owned: false },
  { name: 'Maleficent, Monstrous Dragon', set: 'D23 Expo Promo Set - 2022', rarity: 'Promo', targetPrice: null, purchasePrice: null, marketPrice: null, owned: false },
  { name: 'Robin Hood, Unrivaled Archer', set: 'D23 Expo Promo Set - 2022', rarity: 'Promo', targetPrice: null, purchasePrice: null, marketPrice: null, owned: false },
  { name: 'Captain Hook, Fanciful Duelist', set: 'D23 Expo Promo Set - 2022', rarity: 'Promo', targetPrice: null, purchasePrice: null, marketPrice: null, owned: false },
  { name: 'Mickey Mouse (Disney100)', set: 'Disney100 Promos - 2023', rarity: 'Promo', targetPrice: null, purchasePrice: null, marketPrice: null, owned: false },
  { name: 'Elsa (Disney100)', set: 'Disney100 Promos - 2023', rarity: 'Promo', targetPrice: null, purchasePrice: null, marketPrice: null, owned: false },
  { name: 'Genie, Powers Unleashed', set: 'Disney100 Promos - 2023', rarity: 'Promo', targetPrice: null, purchasePrice: null, marketPrice: null, owned: false },
  { name: 'Stitch (Disney100)', set: 'Disney100 Promos - 2023', rarity: 'Promo', targetPrice: null, purchasePrice: null, marketPrice: null, owned: false },
  { name: 'Maleficent, Uninvited', set: 'Disney100 Promos - 2023', rarity: 'Promo', targetPrice: null, purchasePrice: null, marketPrice: null, owned: false },
  { name: 'Maui, Demigod', set: 'Disney100 Promos - 2023', rarity: 'Promo', targetPrice: null, purchasePrice: null, marketPrice: null, owned: false },
  { name: 'Mickey Mouse, Playful Sorcerer', set: 'D23 Collection - 2024', rarity: 'Promo', targetPrice: null, purchasePrice: 1000.0, marketPrice: 1131.28, owned: true, grade: 'PSA 10.0 GEM - MT' },
  { name: 'Mickey Mouse, Brave Little Tailor (Extended Art)', set: 'D23 Collection - 2024', rarity: 'Promo', targetPrice: null, purchasePrice: 776.65, marketPrice: 942.98, owned: true, grade: 'PSA 10.0 GEM - MT' },
  { name: 'Cinderella, Stouthearted', set: 'D23 Collection - 2024', rarity: 'Promo', targetPrice: null, purchasePrice: 273.94, marketPrice: 268.0, owned: true, grade: 'PSA 10.0 GEM - MT' },
  { name: 'Ursula, Deceiver', set: 'D23 Collection - 2024', rarity: 'Promo', targetPrice: null, purchasePrice: 172.29, marketPrice: 127.44, owned: true, grade: 'PSA 10.0 GEM - MT' },
  { name: 'Bruno Madrigal, Undetected Uncle', set: 'D23 Collection - 2024', rarity: 'Promo', targetPrice: null, purchasePrice: 193.0, marketPrice: 94.0, owned: true, grade: 'PSA 10.0 GEM - MT' },
  { name: 'Vanellope von Schweetz, Sugar Rush Princess (D23)', set: 'D23 Collection - 2024', rarity: 'Promo', targetPrice: null, purchasePrice: 213.17, marketPrice: 151.94, owned: true, grade: 'PSA 10.0 GEM - MT' },
  { name: 'Oswald, The Lucky Rabbit', set: 'D23 Collection - 2024', rarity: 'Promo', targetPrice: null, purchasePrice: 294.84, marketPrice: 276.47, owned: true, grade: 'PSA 10.0 GEM - MT' },
  { name: 'Mickey Mouse, Pirate Captain', set: 'Disney Cruise Promos - 2025', rarity: 'Promo', targetPrice: null, purchasePrice: null, marketPrice: null, owned: false },
  { name: 'Mickey Mouse, Warm Welcome', set: 'Disney Cruise Promos - 2025', rarity: 'Promo', targetPrice: null, purchasePrice: null, marketPrice: null, owned: false },
  { name: 'Goofy, Expert Shipwright', set: 'Disney Cruise Promos - 2025', rarity: 'Promo', targetPrice: null, purchasePrice: null, marketPrice: null, owned: false },
  { name: 'Donald Duck, Buccaneer', set: 'Disney Cruise Promos - 2025', rarity: 'Promo', targetPrice: null, purchasePrice: null, marketPrice: null, owned: false },
  { name: 'Daisy Duck, Pirate Captain (Disney Cruise)', set: 'Disney Cruise Promos - 2025', rarity: 'Promo', targetPrice: null, purchasePrice: null, marketPrice: null, owned: false },
  { name: 'Minnie Mouse, Pirate Lookout', set: 'Disney Cruise Promos - 2025', rarity: 'Promo', targetPrice: null, purchasePrice: null, marketPrice: null, owned: false },
  { name: 'Ariel, Spectacular Singer', set: "Curator's Collection: Heroines Edition - 2026", rarity: 'Promo', targetPrice: null, purchasePrice: 67.0, marketPrice: 158.25, owned: true, grade: 'Ungraded' },
  { name: 'Elsa, Trusted Sister', set: "Curator's Collection: Heroines Edition - 2026", rarity: 'Promo', targetPrice: null, purchasePrice: 67.0, marketPrice: 102.16, owned: true, grade: 'Ungraded' },
  { name: 'Jasmine, Royal Seafarer', set: "Curator's Collection: Heroines Edition - 2026", rarity: 'Promo', targetPrice: null, purchasePrice: 67.0, marketPrice: 88.91, owned: true, grade: 'Ungraded' },
  { name: 'Mulan, Elite Archer', set: "Curator's Collection: Heroines Edition - 2026", rarity: 'Promo', targetPrice: null, purchasePrice: 67.0, marketPrice: 80.9, owned: true, grade: 'Ungraded' },
  { name: 'Anna, Trusting Sister', set: "Curator's Collection: Heroines Edition - 2026", rarity: 'Promo', targetPrice: null, purchasePrice: 67.0, marketPrice: 73.12, owned: true, grade: 'Ungraded' },
  { name: 'Tinker Bell, Giant Fairy', set: "Curator's Collection: Heroines Edition - 2026", rarity: 'Promo', targetPrice: null, purchasePrice: 67.0, marketPrice: 81.9, owned: true, grade: 'Ungraded' },
  { name: 'Angel, Siren Singer', set: 'D23 Collection - 2026', rarity: 'Promo', targetPrice: null, purchasePrice: null, marketPrice: null, owned: false },
  { name: 'Pocahontas, Following the Wind', set: 'D23 Collection - 2026', rarity: 'Promo', targetPrice: null, purchasePrice: null, marketPrice: null, owned: false },
  { name: 'Mushu, Stealthy Dragon', set: 'D23 Collection - 2026', rarity: 'Promo', targetPrice: null, purchasePrice: null, marketPrice: null, owned: false },
  { name: 'Hector Rivera, Gone to Pieces', set: 'D23 Collection - 2026', rarity: 'Promo', targetPrice: null, purchasePrice: null, marketPrice: null, owned: false },
  { name: 'Judy Hopps, Uncovering Clues', set: 'D23 Collection - 2026', rarity: 'Promo', targetPrice: null, purchasePrice: null, marketPrice: null, owned: false },
  { name: 'Mr. Incredible, Taking Out the Trash', set: 'D23 Collection - 2026', rarity: 'Promo', targetPrice: null, purchasePrice: null, marketPrice: null, owned: false },
  { name: 'Stitch, Rock Star (2024)', set: 'Championship Promo Cards', rarity: 'Promo', targetPrice: null, purchasePrice: null, marketPrice: null, owned: false },
  { name: 'Ursula, Sea Witch Queen (2024)', set: 'Championship Promo Cards', rarity: 'Promo', targetPrice: null, purchasePrice: null, marketPrice: null, owned: false },
  { name: 'Mirabel Madrigal, Family Gatherer (2024)', set: 'Championship Promo Cards', rarity: 'Promo', targetPrice: null, purchasePrice: null, marketPrice: null, owned: false },
  { name: 'Scar, Heartless Hunter (2024)', set: 'Championship Promo Cards', rarity: 'Promo', targetPrice: null, purchasePrice: null, marketPrice: null, owned: false },
  { name: 'Jafar, High Sultan of Lorcana (2025)', set: 'Championship Promo Cards', rarity: 'Promo', targetPrice: null, purchasePrice: null, marketPrice: null, owned: false },
  { name: 'Maleficent, Monstrous Dragon (2025)', set: 'Championship Promo Cards', rarity: 'Promo', targetPrice: null, purchasePrice: null, marketPrice: null, owned: false },
  { name: 'A Whole New World (2025)', set: 'Championship Promo Cards', rarity: 'Promo', targetPrice: null, purchasePrice: null, marketPrice: null, owned: false },
  { name: 'Tinker Bell, Snowflake Collector (Store Championship - 2026)', set: 'Championship Promo Cards', rarity: 'Promo', targetPrice: null, purchasePrice: null, marketPrice: null, owned: false },
  { name: 'Woody, Jungle Guide (2026)', set: 'Championship Promo Cards', rarity: 'Promo', targetPrice: null, purchasePrice: null, marketPrice: null, owned: false },
];

let lorcanaSearchTerm = '';

function lorcanaKeyFor(name) {
  return (name || '').trim().toLowerCase();
}

function buildLorcanaCard(item) {
  const key = lorcanaKeyFor(item.name);
  const isOwned = !!item.owned;
  const photoSrc = LORCANA_PERMANENT_PHOTOS[key];

  const card = document.createElement('article');
  card.className = 'card-slab';
  if (isOwned) card.classList.add('in-stock');

  if (photoSrc) {
    const art = document.createElement('div');
    art.className = 'card-art';
    const img = document.createElement('img');
    img.src = photoSrc;
    img.alt = item.name || '';
    img.style.cssText = 'width:100%;height:100%;object-fit:cover;';
    art.appendChild(img);
    card.appendChild(art);
  }

  const label = document.createElement('div');
  label.className = 'card-slab-label';
  label.style.cssText = 'display:flex; justify-content:space-between; align-items:center;';
  const raritySpan = document.createElement('span');
  raritySpan.textContent = item.rarity || '';
  raritySpan.style.cssText = item.rarity === 'Iconic'
    ? 'color:var(--cobalt); font-weight:700;'
    : item.rarity === 'Epic'
    ? 'color:#ff8c1a; font-weight:700;'
    : 'color:var(--citrus); font-weight:700;';
  label.appendChild(raritySpan);

  const statusBadge = document.createElement('span');
  statusBadge.textContent = isOwned ? 'Own' : 'Still looking';
  statusBadge.style.cssText = `font-family:var(--mono); font-weight:700; font-size:0.8rem; text-transform:uppercase; letter-spacing:0.04em; color:${isOwned ? 'var(--mint)' : 'var(--citrus)'};`;
  label.appendChild(statusBadge);

  card.appendChild(label);

  const body = document.createElement('div');
  body.className = 'card-body';

  const h3 = document.createElement('h3');
  h3.textContent = item.name || 'Untitled';
  body.appendChild(h3);

  const setLine = document.createElement('p');
  setLine.textContent = item.set || '';
  setLine.style.cssText = 'font-family:var(--mono); font-size:0.78rem; color:var(--ink-faint); margin-bottom:14px;';
  body.appendChild(setLine);

  function formatPrice(v) {
    return (v === null || v === undefined) ? '—' : '$' + Number(v).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  }
  function buildPriceCol(label, value, isLast) {
    const col = document.createElement('div');
    col.style.cssText = `flex:1; min-width:0; text-align:center; padding:6px 4px;${isLast ? '' : ' border-right:1px solid var(--line);'}`;
    const lbl = document.createElement('div');
    lbl.textContent = label;
    lbl.style.cssText = 'font-family:var(--mono); font-size:0.56rem; text-transform:uppercase; letter-spacing:0.03em; color:var(--ink-faint); margin-bottom:3px;';
    const val = document.createElement('div');
    val.textContent = formatPrice(value);
    val.style.cssText = `font-family:var(--mono); font-size:0.68rem; font-weight:700; white-space:nowrap; overflow:hidden; text-overflow:ellipsis; color:${value === null || value === undefined ? 'var(--ink-faint)' : 'var(--ink)'};`;
    col.appendChild(lbl);
    col.appendChild(val);
    return col;
  }

  const priceRow = document.createElement('div');
  priceRow.style.cssText = 'display:flex; align-items:stretch; margin-top:14px; background:var(--paper); border:1px solid var(--line); border-radius:6px; overflow:hidden;';
  priceRow.appendChild(buildPriceCol('Target', item.targetPrice, false));
  priceRow.appendChild(buildPriceCol('Purchase', item.purchasePrice, false));
  priceRow.appendChild(buildPriceCol('Market', item.marketPrice, true));
  body.appendChild(priceRow);

  card.appendChild(body);
  return card;
}

function buildLorcanaSetBanner(setName) {
  const key = setName.trim().toLowerCase();
  const photoSrc = LORCANA_SET_PHOTOS[key];
  const hasInventoryEntry = Object.prototype.hasOwnProperty.call(LORCANA_SET_INVENTORY, key);
  const inventory = LORCANA_SET_INVENTORY[key] || { boosterBoxes: 0, cases: 0 };
  const isPromoSet = inventory.promoSets !== undefined;
  const hasStock = isPromoSet ? inventory.promoSets > 0 : (inventory.boosterBoxes > 0 || inventory.cases > 0);

  const banner = document.createElement('div');
  banner.className = 'lorcana-set-banner';
  banner.style.cssText = 'grid-column: 1 / -1; display:flex; align-items:center; flex-wrap:wrap; gap:16px; margin:28px 0 6px; padding:14px 16px; border-radius:14px; border:4px solid var(--mint); background:rgba(76,175,88,0.08);';

  if (photoSrc) {
    const img = document.createElement('img');
    img.src = photoSrc;
    img.alt = setName;
    img.style.cssText = 'width:64px; height:64px; object-fit:contain; border-radius:8px;';
    banner.appendChild(img);
  }

  const h2 = document.createElement('h2');
  const setNum = LORCANA_SET_NUMBERS[key];
  h2.textContent = setNum ? `${setName} - Set ${setNum}` : setName;
  h2.style.cssText = 'font-family:var(--display); font-size:1.3rem; margin:0; margin-right:auto;';
  banner.appendChild(h2);

  banner.appendChild(buildLorcanaRarityBadges(setName));

  function buildQtyDisplay(labelText, qty) {
    const wrap = document.createElement('div');
    wrap.style.cssText = 'display:flex; align-items:center; gap:6px;';

    const lbl = document.createElement('span');
    lbl.textContent = labelText;
    lbl.style.cssText = 'font-family:var(--mono); font-size:0.72rem; color:var(--ink-faint); text-transform:uppercase; letter-spacing:0.04em;';
    wrap.appendChild(lbl);

    const value = document.createElement('span');
    value.textContent = String(qty);
    value.style.cssText = `font-family:var(--mono); font-weight:700; font-size:0.9rem; color:${qty > 0 ? 'var(--mint)' : 'var(--ink-faint)'};`;
    wrap.appendChild(value);

    return wrap;
  }

  if (isPromoSet) {
    banner.appendChild(buildQtyDisplay('Sealed Promo Sets:', inventory.promoSets));
  } else if (hasInventoryEntry) {
    banner.appendChild(buildQtyDisplay('Booster Boxes:', inventory.boosterBoxes));
    banner.appendChild(buildQtyDisplay('Cases:', inventory.cases));
  }

  return banner;
}

function renderLorcanaGrid() {
  const grid = document.getElementById('lorcana-grid');
  const count = document.getElementById('lorcana-count');
  if (!grid || !count) return;

  const term = lorcanaSearchTerm.trim().toLowerCase();
  const notPurchased = LORCANA_ITEMS.filter(i => !i.owned);
  const visible = term
    ? notPurchased.filter(i =>
        (i.name || '').toLowerCase().includes(term) ||
        (i.set || '').toLowerCase().includes(term))
    : notPurchased;

  count.textContent = visible.length + (visible.length === 1 ? ' card' : ' cards');
  grid.innerHTML = '';

  if (!visible.length && term) {
    const empty = document.createElement('p');
    empty.style.color = 'var(--ink-faint)';
    empty.textContent = 'No cards match your search.';
    grid.appendChild(empty);
    return;
  }

  // Within each set, push Epic-rarity cards to after all other rarities
  // (Iconic/Enchanted/Promo/etc.), without disturbing set order itself.
  const sorted = [];
  let i = 0;
  while (i < visible.length) {
    const setName = visible[i].set;
    const group = [];
    while (i < visible.length && visible[i].set === setName) {
      group.push(visible[i]);
      i++;
    }
    const nonEpic = group.filter(c => c.rarity !== 'Epic');
    const epic = group.filter(c => c.rarity === 'Epic');
    sorted.push(...nonEpic, ...epic);
  }

  let lastSet = null;
  sorted.forEach(item => {
    if (item.set !== lastSet) {
      grid.appendChild(buildLorcanaSetBanner(item.set));
      lastSet = item.set;
    }
    grid.appendChild(buildLorcanaCard(item));
  });

  // Also show sealed-only sets (no individual cards tracked yet) as long as
  // there's no active search filtering the list.
  if (!term) {
    const shownKeys = new Set(sorted.map(item => item.set.trim().toLowerCase()));
    Object.keys(LORCANA_SET_INVENTORY).forEach(key => {
      if (shownKeys.has(key)) return;
      const inv = LORCANA_SET_INVENTORY[key];
      const hasStock = (inv.boosterBoxes || 0) > 0 || (inv.cases || 0) > 0 || (inv.promoSets || 0) > 0;
      if (!hasStock) return;
      const display = LORCANA_SET_DISPLAY_NAMES[key] || key;
      grid.appendChild(buildLorcanaSetBanner(display));
      const note = document.createElement('p');
      note.style.cssText = 'grid-column: 1 / -1; color:var(--ink-faint); font-family:var(--mono); font-size:0.82rem; margin-top:-8px;';
      note.textContent = 'No individual chase cards tracked yet for this sealed set.';
      grid.appendChild(note);
    });
  }
}

function renderLorcanaRarityLegend() {
  const mount = document.getElementById('lorcana-rarity-legend');
  if (!mount) return;

  const legendItems = [
    { key: 'iconic', label: 'Iconic', desc: 'Rarest chase tier — 2 per set since Fabled', color: 'var(--cobalt)' },
    { key: 'enchanted', label: 'Enchanted', desc: 'Foil chase cards in every set', color: 'var(--citrus)' },
    { key: 'promo', label: 'Promo', desc: 'D23, Disney100 & Cruise exclusives', color: 'var(--ink-dim)' },
  ];

  const panel = document.createElement('div');
  panel.style.cssText = 'display:flex; flex-wrap:wrap; gap:22px; align-items:center; padding:16px 20px; border:1px solid var(--line); border-radius:14px; background:linear-gradient(135deg, rgba(255,209,0,0.06), rgba(255,77,46,0.05)); margin-bottom:8px;';

  const title = document.createElement('span');
  title.textContent = 'Rarity Guide';
  title.style.cssText = 'font-family:var(--display); font-size:0.95rem; font-weight:700; margin-right:6px;';
  panel.appendChild(title);

  legendItems.forEach(item => {
    const row = document.createElement('div');
    row.style.cssText = 'display:flex; align-items:center; gap:8px;';

    const icon = document.createElement('img');
    icon.src = LORCANA_RARITY_ICONS[item.key];
    icon.alt = item.label;
    icon.style.cssText = 'width:26px; height:26px; object-fit:contain;';
    row.appendChild(icon);

    const textWrap = document.createElement('div');
    textWrap.style.cssText = 'display:flex; flex-direction:column; line-height:1.25;';

    const label = document.createElement('span');
    label.textContent = item.label;
    label.style.cssText = `font-family:var(--mono); font-size:0.78rem; font-weight:700; color:${item.color};`;
    textWrap.appendChild(label);

    const desc = document.createElement('span');
    desc.textContent = item.desc;
    desc.style.cssText = 'font-family:var(--mono); font-size:0.66rem; color:var(--ink-faint);';
    textWrap.appendChild(desc);

    row.appendChild(textWrap);
    panel.appendChild(row);
  });

  mount.innerHTML = '';
  mount.appendChild(panel);
}

document.addEventListener('DOMContentLoaded', () => {
  renderLorcanaRarityLegend();
  renderLorcanaGrid();

  const search = document.getElementById('lorcana-search');
  if (search) {
    search.addEventListener('input', () => {
      lorcanaSearchTerm = search.value;
      renderLorcanaGrid();
    });
  }
});
