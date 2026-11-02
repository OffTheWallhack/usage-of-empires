# Prompty pre Gemini – budovy osady (17 kusov)

Hra Usage of Empires. Teraz sú tieto budovy len farebné placeholdery. Keď pošleš hotové obrázky, vystrihnem ich, spixelizujem do štýlu hry a vložím namiesto placeholderov.

## Čo nahrať do Gemini (pri každom hárku)
1. `sablona_1.png` (alebo `sablona_2.png`) – nákres rozloženia. Modrý kosoštvorec = pôdorys budovy, prerušovaná sivá kocka = najvyššia možná výška, oranžový obdĺžnik = kde sú dvere, číslo = ktorá budova to je.
2. `styl_referencia.png` – budovy, ktoré už v hre sú (krčma, kováčstvo, chalupa, sýpka, stajňa, veža, mlyn, sklad). Podľa nich má Gemini chytiť farby a náladu.
3. Text promptu nižšie (celý hárok: úvod + zoznam budov).

Gemini sa niekedy zmýli a vykreslí aj modrý kosoštvorec alebo číslo. Vtedy napíš: „Regenerate without the blue diamonds, dashed boxes, numbers and orange marks. Pure white background only." Ak je hárok zlepený, pýtaj len 4–5 budov naraz (rovnaký prompt, vymaž zo zoznamu ostatné).

Mierka v hre: jedno políčko = 32×16 px. Hotová budova má v hre šírku (w+d)×16 px, takže 2×2 je ~64 px široká a 4×3 ~112 px. Preto ich netreba kresliť detailne, dôležité sú čitateľná silueta, strecha a farba.

---

## Úvod (rovnaký pre oba hárky)

```
You get two images. Image 1 is a LAYOUT TEMPLATE (grid of numbered cells). Image 2 is a STYLE REFERENCE showing buildings that already exist in my game.

TASK: Create ONE image with exactly the same size and same grid as the layout template. In every numbered cell draw ONE isometric medieval village building, as listed below. All buildings belong to the same small settlement and must look like they were made by the same artist, matching the style reference.

LAYOUT RULES (very important):
- Same camera as the template: classic 2:1 isometric view (like Age of Empires 2), seen from above-front. The left wall faces lower-left, the right wall faces lower-right.
- The blue diamond in each cell is the building's footprint on the ground. The building's base must sit exactly on that diamond (same width, same 2:1 proportions), centred in its cell.
- The dashed grey box is the maximum height. The roof must stay inside it. Small things like a chimney, flag or lantern may stick out a little.
- The orange rectangle marks the door. Put the main door or the main opening on the lower-left wall, at that place.
- Do NOT draw the blue diamond, dashed box, numbers, orange marks or any grid lines. Do not copy anything from the template into the final image.
- Pure white background (#FFFFFF) behind every building. No ground, no grass, no cast shadow, no text, no labels, no people, no animals.
- Every building fully inside its own cell, nothing touching the cell edge.

STYLE:
- Dark, muted, weathered medieval palette: dark brown timber, grey fieldstone, aged thatch and dark wooden shingles, lots of brown and grey, small muted accents only. Same mood as the style reference.
- Detailed hand-painted game sprite with a clean readable silhouette and a thin dark outline. Strong texture on roofs, wood and stone.
- Light comes from the upper left: left faces lit, right faces in shade.
- Each building must be easy to recognise by its function at a small size.

BUILDINGS:
```

---

## Hárok 1 (nahraj `sablona_1.png`) – 10 budov

```
1. Settlement depot (2x2 footprint, low): the heart of a new village. Open-fronted timber storehouse with a heavy plank-and-shingle lean-to roof, stacked wooden crates, grain sacks, barrels and a small hand cart beside it. Rough and practical.
2. Miner's hut (2x2): small stone-and-timber hut with a dark slate roof. Pickaxes and shovels leaning on the wall, a small wooden ore cart with grey-blue ore chunks, a timber-framed little mine-door. Lantern by the door.
3. Stonecutter's hut (2x2): low hut with a mossy turf-and-slate roof. Neat stacks of cut stone blocks and slabs around it, a hammer and chisels on a work bench, a small wooden A-frame hoist.
4. Gatherer's hut (2x2): tiny cosy wooden hut with a green-tinged mossy thatched roof. Baskets of red berries and apples by the door, bundles of dried herbs hanging from the eaves, a small crate of apples.
5. Fishing hut (2x2): weathered plank hut on a few short wooden stilts, fishing nets drying on poles, a rack of hanging fish, barrels of fish, a small rowing boat leaning against the wall. No water.
6. Sawmill (3x3): big open timber shed on thick posts with a shingle roof. Inside a large two-man saw on a saw frame, logs on trestles, tall stacks of fresh planks and a pile of round logs outside. Sawdust.
7. Outpost / waystation (2x2): small simple waystation, a sturdy lean-to with stacked crates and sacks under the roof, a signal lantern on a pole, a little flag, a handcart. Looks like a small cousin of the depot (1), but more open and lighter.
8. Bakery (3x2): stone-and-timber house with a big round brick bread oven built onto the side, a chimney with a little smoke, a wooden counter outside with bread loaves, flour sacks, a wheat sheaf. Warm orange glow from the oven opening.
9. Weaver's workshop (3x2): timber-framed house with an open side porch showing a big wooden loom, bolts of muted blue, purple and dull red cloth hanging on a drying frame, bundles of flax, a spinning wheel.
10. Market (3x3): open-air market with three small wooden stalls under canvas awnings in muted ochre, faded red and cream, crates of goods, a balance scale, barrels, a small coin chest and a hanging sign. Flat and wide, no big building.
```

## Hárok 2 (nahraj `sablona_2.png`) – 7 budov

```
1. Brewery (3x3): tall timber building with a stone base and a dark shingle roof, a chimney with smoke, a big copper brewing kettle visible under a side lean-to, many barrels stacked outside, hop plants climbing poles.
2. Barracks (4x3, long): long timber-and-stone drill hall with a low heavy roof, a muted red banner, a weapon rack with spears and swords, round shields on the wall, a wooden training dummy and a short palisade fence piece at the side.
3. Iron mine (3x3): a rocky stone mound with a timber-framed mine shaft entrance, rails with an ore cart, a wooden winch headframe with a pulley and rope, piles of dark ore and a little forge smoke. The mound is part of the building.
4. Shrine (2x2, tall and narrow): small stone shrine of the ancestors with a steep pointed slate roof, a carved niche with a stone figure, candles, a wreath of dried flowers, carved runes, a small bell on top, a muted violet cloth hanging by the door. Calm and quiet.
5. Library (3x3, two storeys): stone-and-timber scriptorium with arched windows, bookshelves and scrolls visible, a small gable tower, a dark slate roof with a muted green banner, stacks of books and scrolls by the door.
6. Observatory (3x3, very tall): round stone tower with a wooden half-open dome roof and a long brass telescope sticking out, a small balcony, star and moon symbols carved or painted on the wall, a dark navy cloth banner, a narrow door at the base.
7. Bank (3x3): heavy stone vault-like building with a dark slate roof, a very strong iron-banded door, barred small windows, a golden coin emblem over the door, strongboxes and a small guard post beside it. Solid, fortified, rich but still weathered.
```

---

## Doplnok
- Socha Emy Kozinovej je už v hre nakreslená kódom, nepotrebuje obrázok.
- Keď budú obrázky hotové, pošli mi celé hárky (nepotrebuješ ich strihať). Ja ich rozrežem podľa mriežky.
