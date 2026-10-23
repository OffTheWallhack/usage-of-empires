# Usage of Empires – GAME.md

> Tento súbor je **pamäť hry**. Claude ho číta na začiatku každého nového chatu.
> Píšeme jednoduchou rečou. Keď niečo rozhodneme, zapíše sa to sem. Keď niečo zahodíme, presunie sa to do „Odložené".
> Posledná úprava: 2026-10-14

---

## 1. O čom je táto hra (jednou vetou)

Malá postavička na trávnatej ploche, z ktorej postupne vyrastie živý svet. Či z toho bude bojovka, builder, stratégia alebo všetko naraz, **zatiaľ nerozhodujeme** — zistíme to hraním.

Hra je zbierka toho najlepšieho z mojich herných nápadov (Fire in the Hole, civ builder / The Living Civilization, Habit Tycoon, Rush B, Usage of Empires, Digital Aquarium, Industrial Block Party, PM hra, Questwave). Nie všetko sa do nej dostane. Tento súbor je **zásobník**, z ktorého berieme po jednej veci.

---

## 2. Ako pracujeme (pravidlá pre mňa aj pre Clauda)

1. **Jeden krok = jedna vec.** Žiadne veľké prompty. Krok musí byť hotový a otestovaný, kým ideme ďalej.
2. **Po každom kroku:** hra sa dá spustiť, Claude spraví commit a aktualizuje stav v sekcii 7 (Plán krokov).
3. **Nápady počas práce** idú do sekcie 6 (Zásobník), nie do aktuálneho kroku.
4. **Čísla na jednom mieste.** Rýchlosť, veľkosti, farby, časy → súbor `config.js`, aby som ich vedel meniť sám bez programovania.
5. **Kód v malých súboroch** (svet, postava, ovládanie, kamera…), aby sa dal neskôr pridať boj aj stavanie bez prepisovania všetkého.
6. **Herná logika oddelená od kreslenia.** Vďaka tomu môžeme neskôr zmeniť grafiku alebo pridať online bez prestavby (z Rush B).
7. **Keď sa pokazí,** vrátime sa o commit späť, nie opravujeme naslepo.
8. **Nový chat** = Claude si najprv prečíta GAME.md a pokračuje od posledného hotového kroku.

---

## 3. Piliere (čo musí platiť vždy)

Toto sa opakuje skoro vo všetkých mojich hrách, takže je to jadro:

- **Dáva zmysel 1 minúta aj 2 hodiny.** Krátke nahliadnutie musí potešiť, dlhá session musí mať hĺbku. *(civ builder, Fire in the Hole)*
- **Svet žije aj bezo mňa.** Keď hru zavriem, veci bežia ďalej (pomalšie). Po návrate vidím, čo sa stalo. Žiadny trest za neprítomnosť. *(civ builder, FITH, akvárium)*
- **Dá sa na ňu len pozerať.** Ako akvárium — nechám ju bežať popri práci. *(civ builder, Digital Aquarium)*
- **Cozy aj akcia.** Bezpečný, teplý domov + temná, nebezpečná divočina. *(FITH: Happyland vs. Dark & Gritty)*
- **„Ty kokos, na toto mysleli."** Veľa drobných easter eggov a živých detailov. *(FITH, Rush B)*
- **Žiadne pay-to-win.** Nič sa nekupuje za výhodu. Nanajvýš kozmetika. *(všetky hry)*
- **Učí bez textu.** Nová mechanika = jedna nová vec naraz, nie tutoriál s odsekmi. *(Usage of Empires, shapez)*

---

## 4. Vzhľad a pocit (smer, nie rozhodnutie)

- **Pohľad:** ✅ **izometrický 2D**, žiadne 3D. Musí byť vyladený do detailu.
- **Ručne robené:** ✅ každý strom, kameň aj budova sa kreslí pixel po pixeli, žiadne generované obrázky ani hotové balíčky. Dizajn mám pod kontrolou ja.
- **Animácie:** malé a ručné (strom sa pohne o pixel, kryštál sa zaiskrí, motýľ, tiene mrakov).
- **Štýl:** pixel art s hrubými obrysmi alebo bohaté farby ako RollerCoaster Tycoon 2. Cozy miniatúra, ale pre 30-ročného chlapa, nie „girly". *(Habit Tycoon, FITH)*
- **Dva svety farieb:** domov = teplé, svetlé farby; divočina = tmavé, špinavé, s žiariacimi akcentmi.
- **Svetlo:** zlatá hodina, dlhé mäkké tiene. *(The Living Civilization)*
- **Chodníky sa vyšľapú samé** tam, kde postavy chodia najviac. *(The Living Civilization)*
- **Platforma:** web (hrá sa v prehliadači), funguje na PC aj na mobile.

---

## 5. Jadro, ktoré budujeme ako prvé

To, čo potrebuje **akýkoľvek** smer hry (bojovka, builder aj stratégia):

- Trávnatá plocha (mapa)
- Postavička, ktorá sa hýbe
- Ovládanie (klávesnica + dotyk na mobile)
- Kamera (sleduje postavu, zoom)
- Objekty vo svete (strom, kameň) a jednoduchá interakcia s nimi
- Čas (deň / noc)
- Uloženie hry

Až keď toto funguje, vyberáme prvú „vrstvu" zo zásobníka.

---

## 6. Zásobník mechaník (vyber si, keď je jadro hotové)

Legenda: 💡 nápad · 🔨 rozrobené · ✅ v hre · ⏸ odložené
V zátvorke je, z ktorého projektu nápad pochádza.

### A. Zber a remeslá (cozy)
- 💡 Rúbanie dreva, ťažba, rybolov, farmárčenie, zber v lese, varenie *(FITH)*
- 💡 Nástroje v úrovniach: kamenná → železná → oceľová sekera = lepšie suroviny *(FITH)*
- 💡 Majstrovstvo remesla: hardcore hráč dotiahne remeslo do vzácnych vecí (napr. vzácne rastliny) *(FITH)*
- 💡 Večná kvetinka / stromček, ktorý zasadím a ostane tam navždy *(FITH)*
- 💡 Žiadna stamina — voľný flow; v noci len jemná únava *(FITH)*

### B. Stavanie a mesto
- 💡 Voľné ukladanie budov na mriežku so zachytávaním, „späť" do 5 sekúnd *(Habit Tycoon, UoE)*
- 💡 Vlastný domček na prispôsobenie; spánok v posteli dá ráno „rested" buff *(FITH)*
- 💡 Územie sa zväčšuje prácou: vyrúbem les, zasypem jazero, odpálim skalu *(FITH)*
- 💡 Štvrte: podobné budovy pri sebe dajú malý bonus *(FITH)*
- 💡 Budovy a stromy rastú podľa toho, ako sa mi darí (návyky, práca, projekty) *(Habit Tycoon, PM hra)* — možný „režim navyše", nie jadro

### C. Automatizácia a toky
- 💡 Najprv robím ručne, neskôr to robí pomocník alebo pás *(FITH)*
- 💡 Viditeľné toky surovín — vidím, kto čo kam nesie *(UoE, shapez)*
- 💡 Doprava sa vyvíja: nosenie → chodníky → kone → vozy → vlaky → pásy *(FITH)*
- 💡 Mestský sklad + „daň" (koľko % ide do spoločného) *(FITH)*
- 💡 **Vrany:** keď je sklad plný, prebytky rozkradnú, ale prinesú vzácnu cetku *(FITH)* ⭐ obľúbené
- 💡 Továreň v krabici: navrhnem malú továreň 5×5 a uložím ako jeden blok *(FITH)*
- 💡 Zvieratko s nakreslenou trasou zbiera veci *(FITH)*

### D. Obyvatelia, postavy a príbeh
- 💡 Dve úrovne obyvateľov: anonymná masa v číslach + ~30 menovaných postáv s kronikou *(civ builder)*
- 💡 Postavy s vlastnými questami a vtipným lore (kováč, ktorý hovorí o mečoch ako o deťoch; krčmár s tajomstvom; vedkyňa, čo všetko pokazí a tým niečo vynájde; vyjednávajúca vrana) *(FITH)*
- 💡 **Keeper of the Fire** — starý mlčanlivý správca ohňa, ktorý hovorí za osadu a dáva dilemy („Ochránime starý strom?") *(FITH + The Living Civilization)*
- 💡 Prví spoločníci: **Huntress** (hlučná, bláznivá lovkyňa) a pet **Kiwi** *(FITH)*
- 💡 Nepriame ovládanie: neviem ľuďom rozkazovať, len označím miesto / dám prioritu, a oni sa rozhodnú sami *(The Living Civilization, akvárium)*
- 💡 Pomocníci robia remeslo, aj keď som offline *(FITH)*
- 💡 „Kým si bol preč" — denník udalostí po návrate *(The Living Civilization)*

### E. Boj a výpravy
- 💡 Hack & slash: plynulé kombá, šťavnatý pocit (Castle Crashers) *(FITH)*
- 💡 Dungeony treba najprv nájsť v divočine; po 2 výhrach sa odomkne portál z mesta *(FITH)*
- 💡 Smrť: zbrane si nechám, ale batoh s lootom ostane na mieste a musím si prísť *(FITH)*
- 💡 Bezpečná zóna — domov a mesto sú vždy chránené *(FITH)*
- 💡 Bossovia + návrat z výpravy, keď sa ľudia v meste obzrú *(FITH)*

### F. Stratégia a epochy
- 💡 Epochy: Age of Fire → Horses → Wagons → Steam → Belts → … (plán ~45) *(FITH)*
- 💡 Prechod do epochy cez veľkú spoločnú stavbu *(FITH)*
- 💡 **Pálenie:** stará epocha zhorí, oheň v strede sa zväčší, presťahujem sa vyššie. Najprv oslava, potom smútok. Niekto dobrovoľne ostane *(FITH)* ⭐ silný moment
- 💡 Svet ako terasovitý kráter — každá epocha je o poschodie vyššie a väčšia *(FITH)*
- 💡 Spálená pustatina s planetárnym uhlím a archeológiou *(FITH)*
- 💡 Výzva bez nepriateľov: zdroje, spokojnosť ľudí, príroda, rozhodnutia s dlhými následkami *(civ builder)*
- 💡 RTS vrstva: zber, armáda v skupinách, ťahanie trás prstom ako v Mini Metro *(UoE)*
- 💡 Burst: vedome prestreliť limit a potom chvíľu spomaliť — „kedy ísť naplno" ako rozhodnutie *(UoE)*

### G. Svet žije sám
- 💡 Offline progres sa spomaľuje: po dni 50 %, po týždni 25 %, nikdy nie menej *(civ builder)*
- 💡 Mikro-udalosti: stádo diviakov poškodí pás v divočine, vrany odpočívajú na páse a splašia sa, postava pri ohni v AFK si začne opekať *(FITH)*
- 💡 Tajomstvá: symboly „Witness" na skalách, prázdna stolička pri ohni priláka nočných návštevníkov, posvätný starý strom *(The Living Civilization)*
- 💡 Režim akvárium: hra beží na celej obrazovke, len sa pozerám *(akvárium, civ builder)*
- 💡 Neskôr: AI agent ako obyvateľ sveta *(Digital Aquarium)*

### H. Minihry a spoločné veci (neskôr)
- 💡 Krčma: šípky, poker, **auto-battler** (moje Hearthstone Battlegrounds) s petmi a artefaktmi z výprav *(FITH + Rush B)*
- 💡 Mestské súťaže: najväčšia ryba, varenie, drevorubačský duel, preteky vozov *(FITH)*
- 💡 Denná výzva: rovnaká mapa / úloha pre všetkých v ten deň, rebríček ako Wordle *(Rush B, UoE, Questwave)*
- 💡 15-sekundový zostrih najlepšieho momentu na zdieľanie (IG Reels) *(Rush B, Industrial Block Party)*
- 💡 Zbierky: album, múzeum, mounty, pety podľa epoch *(FITH)*
- 💡 Co-op 1–5 hráčov *(FITH)* — až po singleplayer

---

## 7. Plán krokov (aktuálny)

Malé kroky. Každý sa dá otestovať do pár minút.

| # | Krok | Stav |
|---|------|------|
| 0 | Repo, prázdna stránka, deploy na link | 💡 |
| 1 | Trávnatá plocha 40×40 + dub, ložisko (kameň/železo/zlato/kryštál), krík s bobuľami, pole 3×3 — test štýlu | ✅ štýl schválený, ešte doladíme |
| 2 | Samostatná postava (Osadník) s vlastnou hlavou: chodí okolo objektov, sedí pod dubom, zbiera bobule, kontroluje pole, obzerá kryštál, bublinky s ikonkami | 🔨 čaká na feedback |
| 2a | Osadník prerobený do starodávneho štýlu (ľanová tunika, povraz, onuce, brada) | ✅ |
| 2c | Okraje sveta: rieka na dvoch predných stranách (breh, trstina, trblietanie), hustý les na dvoch zadných; 4 druhy stromov: dub, smrek, breza, jabloň | 🔨 čaká na feedback |
| 2d | Breh, voda a les zarovnané presne na mriežku (hĺbka vody po políčkach) | ✅ |
| 3 | Hlavná budova 4×4 podľa AoE2 Town Center: vzadu hrázdený dom na drevených nohách s krížovou šindľovou strechou, komínom, oknami so svetlom, erbmi a schodmi; po bokoch dva otvorené prístrešky; vpredu otvorený dvor so záhradkou, bednami, sudmi, kolesom a popínavkami | 🔨 čaká na feedback |
| 3b | Hlavná budova zväčšená na 6×6 (rovnaká výška), viac vecí na dvore | ✅ |
| 4 | **Dev World**: mapa slúži ako výstavka všetkého. Tlačidlo VECI = katalóg s preletom kamery, MENÁ = menovky nad vecami | 🔨 |
| 4a | Domčeky 2×2: zrubová chalupa, hrázdený domček, kamenná chalupa — každý v otočení A (dvere vľavo, štít vpravo) aj B (dvere vpravo, štít vľavo) | 🔨 čaká na feedback |
| 4b | Farmy 3×3 v štýle AoE: zeleninové pole, zlaté pšeničné pole (pokosené riadky, snopy, vlní sa vo vetre), čerstvo zasiate pole so strašiakom a vranami | 🔨 čaká na feedback |
| 4c | Ohnisko 1×1 (kamene, oheň, lavice z polien, dym) | 🔨 čaká na feedback |
| 5a | Sklad 4×6: stodola na kamennom sokli, dvojkrídlové dvere, senník s kladkou, prístrešok s kameňom, rudou, bednami, sudmi; vozík | 🔨 čaká na feedback |
| 5b | Plot zo samostatných dielikov na hranách políčok (rovný kus + bránka). Kurín 3×3 (6 sliepok, kurín na nožičkách) a ovčín 3×3 (4 ovečky, válov) hneď vedľa. Ľudia cez plot neprejdú, cez bránku áno | 🔨 čaká na feedback |
| 5c | Keeper of the Fire: starý dedko, pleš, dlhá biela brada, červené rúcho, palica so žeravým uhlíkom. Cez deň sa prechádza, v noci sedí pri ohni a obchádza fakle | 🔨 čaká na feedback |
| 5d | Deň a noc: herné hodiny (1 deň = 6 min pri ×1), súmrak, noc, svitanie; tlačidlá NOC/DEŇ a ×1/×5/×20. Fakle (7 ks) cez deň zhasnuté, v noci horia; okná svietia; svätojánske mušky; osadník v noci spí v domčeku, zvieratá spia | 🔨 čaká na feedback |
| 5e | Cestičky: každé políčko trávy počíta kroky → ušliapaná tráva → cestička → udupaná cesta (8/25/60/120 krokov). Ľudia uprednostňujú vychodené cesty, nepoužívané pomaly zarastajú. Ukladá sa v prehliadači | 🔨 beží, treba čas |
| 2b | Druhá postava, ktorú ovládam ja | 💡 ďalší krok |
| 3 | Pohyb (klávesnica) | 💡 |
| 4 | Pohyb na mobile (dotyk / joystick) | 💡 |
| 5 | Kamera sleduje postavu + zoom | 💡 |
| 6 | Pár stromov a kameňov, postava cez ne neprejde | 💡 |
| 7 | Prvá interakcia: zoťať strom → drevo v inventári | 💡 |
| 8 | Deň a noc | 💡 |
| 9 | Uloženie hry | 💡 |
| — | **Rozcestie:** vyberieme prvú vrstvu zo zásobníka (A–H) | |

---

## 8. Otvorené otázky

- ❓ Názov hry
- ❓ Je hlavný hrdina „ja" (vlastná postavička), alebo boh/záhradník, ktorý len usmerňuje? (FITH = postavička, Living Civilization = boh.) Možno oboje: postavička + osada okolo nej.
- ❓ Téma: fantasy pravek → budúcnosť (FITH), alebo niečo iné?

---

## 9. Odložené (zámerne nie v tejto hre)

- Usage limity a AI paródia — patrí do *Usage of Empires*
- CS 1.6 téma, emoji vizuál — patrí do *Rush B* (auto-battler môže prísť ako minihra, ale bez CS)
- Päťročný endgame a server na 1 rok — možno neskôr, nie teraz
- PvP — hra je PvE
- Zarábanie — nerieši sa, kým hra nie je zábavná

---

## 10. Technika

Zámerne krátke. Doplníme pri kroku 0.

- Repo na GitHube (účet OffTheWallhack), deploy na Vercel → každá zmena = nový link na otestovanie
- Engine: ✅ **Phaser 3 + TypeScript** (2D, web, myš + klávesnica + dotyk). Rust ani Godot nie — pomalšie na vibe kódovanie.
- Pixel art sa kreslí v kóde (malé mriežky farieb) → dá sa ladiť pixel po pixeli
- Prvý test štýlu beží ako náhľad (artifact); do repa ide pri kroku 0
- Súbory: `GAME.md` (tento), `CLAUDE.md` (pravidlá pre Clauda), `config.js` (čísla na ladenie)

---

## Changelog
- **2026-10-15** — sklad, ohrady zo samostatných dielikov plotu, zvieratá, Keeper of the Fire, deň a noc s fakľami, vyšliapavané cestičky. Pravidlo: ploty ležia na hranách políčok, nie na políčkach.
- **2026-10-15 (noc)** — nový nočný režim: tmavšia noc, svetelná mapa (každé svetlo je samostatná pixelová škvrna, nie oranžové kruhy), svetlá v oknách domov, žiara z dverí, plamene fakieľ, tábor a palica Keepera. Súmrak je teplý.
- **2026-10-15 (veľký svet)** — mapa 80 × 80, osada ostala v rohu. Terén má výšky (úroveň = 8 px): svah ide po jednej úrovni, od 2 úrovní je to útes (nepriechodný). Rieka z hôr k moru, prírodný kamenný most (oblúk), veľký kopec s chodníkom, skalnou plošinou a útesom, južný kopec, pahorok, lesíky a osamelé stromy. Jaskyňa (vchod do skaly, 2 fakle) je pripravená na neskorší dungeon. Osadník občas zájde k mostu, jaskyni a na kopec. Noc je svetlejšia.
- **2026-10-14** — mapa je odteraz Dev World: každá nová vec (budova, strom, zviera, postava) sa najprv ukáže tu a pribudne do katalógu VECI. Z neho neskôr postavíme hrateľný svet.
- **2026-10-14** — pravidlo mriežky: všetko v svete (voda, breh, les, budovy) leží presne na políčkach. Nič nesmie hranicou prechádzať cez polovicu políčka.
- **2026-10-14** — prvá budova: Hlavná budova (vzor AoE2 Town Center), 4×4 políčka.
- **2026-10-14** — svet ohraničený riekou a lesom, 4 druhy stromov, osadník v dobovom oblečení. Pravidlo: postavy a oblečenie vždy starodávne, nič moderné.
- **2026-10-14** — pridaný Osadník: samostatná postava s výberom činností (váhy a dĺžky v NPC_CFG, dajú sa meniť).
- **2026-10-14** — rozhodnuté: izometrické 2D, ručne robený pixel art, Phaser. Hotový prvý test štýlu (plocha + 4 objekty).
- **2026-10-14** — prvá verzia. Zozbierané mechaniky zo všetkých mojich herných projektov, nastavený spôsob práce po malých krokoch.
- **2026-10-15 (krok 6 – ťažba a UI)** — prvá herná mechanika. Suroviny: drevo, kameň, železo, zlato, jedlo (ukladá sa v localStorage `devworld-game-v1`). Klepni na strom / rudu / krík → „Ťažiť“ (plávajúce tlačidlo pri objekte na desktope, veľké tlačidlo v karte na telefóne). Úloha ide do frontu, voľný osadník ju vezme, vyťaží, odnesie do skladu. Strom po zoťatí nechá peň a dorastie (strom 2 dni, ruda 3, krík 1 deň hry). Traja osadníci: Osadník, Hana, Jano. UI: horná lišta surovín, karta aktuálnej úlohy, spodný dock (Ťažba, Osadníci, Úlohy, Stavať – zamknuté), panely osadníkov a úloh, toasty. Úlohy: 10 dreva, 5 kameňa, 8 bobúľ, 3 železa, 40 dreva, 2 zlata. Na úzkej/dotykovej obrazovke je rozloženie pre telefón.
- **2026-10-15 (krok 7 – hráč a UI na šírku)** — hráš za Keepera of the Fire (prvá postava). Ovládanie ako v Diablo Immortal: PC = WASD/šípky (Shift = beh, E = akcia, pravý klik = choď tam); dotyk = plávajúci joystick v ľavej polovici obrazovky + veľké tlačidlo Akcia a Beh vpravo. Kliknutím/ťuknutím na ktorúkoľvek postavu ju prevezmeš (aj tlačidlo v karte, dá sa aj pustiť). Kamera ju sleduje; ťahanie ju odpojí, STRED ju vráti. Akcia: strom/ruda/krík v dosahu ~2 políčka (označí sa rámik) → hráč sám ťaží a suroviny idú rovno do skladu; pri ohnisku „Priložiť“. Kolízie: voda, les, polia, objekty, ploty, útesy. UI: ozubené koliesko → veľkosť UI 50–140 %, panel úloh a vývojárske tlačidlá sa dajú skryť, celá obrazovka. Na nízkej obrazovke (telefón na šírku) je rozloženie kompaktné (dock hore vpravo, karta hore vľavo); na výšku sa ukáže „Otoč telefón“. Nastavenia v localStorage `devworld-ui`.
- **2026-10-15 (krok 8 – ostré pixely, útoky)** — Ostré pixely (variant A): hra sa kreslí v plnom rozlíšení displeja (aj retina/mobil), priblíženie len po celých krokoch (1 pixel kresby = 1, 2, 3… pixelov displeja), pod 1× sa zmenšuje hladko; kamera stojí presne na pixeli; pinch zoom skáče po krokoch. Čistá kresba (variant C): tráva v plochách s trsmi stebiel, hlina s kamienkami, piesok bez šumu (starú trávu ukáže `#oldgrass` v adrese). Keeper je rýchlejší (chôdza 2,8, beh 4,4 políčka/s). Dva útoky: Úder palicou (Space / veľké tlačidlo, dá sa držať, auto-mierenie na najbližší cieľ do 2 políčok) a Ohnivá guľa (Q / tlačidlo Oheň, odpočet 3 s, letí ~7 políčok, výbuch so svetlom a poškodením okolo). Cvičisko: 3 slamené panáky pri dedine (30 životov, záblesk a zatrasenie pri zásahu, čísla poškodenia, po rozbití sa za 8 s opravia). Ďalej v pláne: nepriatelia (vlci v noci, jaskyňa), život a energia Keepera, levely, prečistenie stromov/ciest/striech, zvuky.
- **2026-10-15 (krok 9 – mesto / hrdina)** — Na mobile rozhoduje orientácia. Na výšku = pohľad na mesto: bez joysticku a útokov, postavy chodia samé, ťuk na postavu ju len vyberie; hore lišta surovín, pod ňou čas a úloha, dole menu (Ťažba, Osadníci, Úlohy, Stavať), karta nad menu. Na šírku = hrdina: prevezme sa Keeper (alebo posledná ovládaná postava), joystick vľavo, útoky vpravo, všetky panely malé na okrajoch (suroviny a čas vľavo hore, menu ako ikony vpravo hore). Hláška „Otoč telefón“ je preč. Na dotyku sa skryli +/− (zoom prstami) a dlhé texty.
- **2026-10-15 (krok 10 – cesty, nosič, drevorubač)** — Smer hry: budovanie mesta. Stavať je odomknuté. **Cesta** (zadarmo): ťaháš prstom po políčkach, ťuk na cestu ju zmaže; je to trasa, po ktorej ide výroba. Nosič s fúrikom chodí iba po ceste, a kade chodí, vyšliape sa hlinená cesta (vytýčené kolíky zmiznú, keď sa vyšliape). **Drevorubač** (2 × 2, 8 dreva): položíš plán (zelený/červený náhľad), nosič Ondro privezie drevo zo skladu po ceste, voľný osadník chatu postaví. Hotový drevorubač seká stromy do 7 políčok od chaty a kladie drevo pred chatu (max 12), nosič ho vozí do skladu. Budova bez cesty do skladu nič nedostane ani nedodá. Nové úlohy: Postav drevorubača, Dovez fúrikom 20 dreva. Cesty a budovy sa ukladajú. Na výšku: menu a pod ním suroviny dole cez celú šírku. Nové ikony: šikmé poleno, 3 kamene, ingot, mince, jahoda.

## Krok 11 – pokoj, čistý svet
- Osadníci sa len tak prechádzajú (rýchlosť ×0.5), pri práci/nosení ×0.8, pri poplachu (env.alarm, zatiaľ nikdy) bežia ×1.9. Hráč s Keeperom je rýchly ako predtým.
- Hlina okolo haly, skladu a domov preč (ostáva len pri kurínoch a vchode do jaskyne).
- Nové ložiská: kameň (4 pri (30,46), 3 pri (54,44)), zlato (3 pri (70,36), 4 pri (69,64)). Zlaté sú žlté, dávajú 2 zlata + 1 kameň; kamenné 4 kamene.
- Návrh (čaká na schválenie): obrazovka Úspechy s kategóriami + menu Dekorácie + zbierka v skrýši pod halou.

## Krok 11b – bez ručných ciest
- Cesty sa už nestavajú (tlačidlo skryté, hnedé bodky preč). Nosič chodí po zemi a cestičky sa vychodia samy (WEAR). Test: chata → drevo → nosič → sklad prebehol bez ciest.
- Karta stromu menšia (bez dlhého textu), tlačidlo Ťažiť nižšie na dotyku.
- Nápad: kurzor mriežky vždy v strede obrazovky (zatiaľ neurobené). Fakle/ploty/dekorácie sa budú dať presúvať, budovy sa stavajú zo surovín.

## Krok 12 – popup menu, režim, hrany, game feel
- Označenie (strom, ruda, krík, budova, postava, políčko) otvorí malé popup menu pri veci (nie spodné okno). Tlačidlo pre stromy/rudu/kríky: „Označiť na výrub/ťažbu/zber pre osadníkov“ (zruší sa „Zrušiť označenie“). Klik na text rozbalí popis.
- Tlačidlo MESTO / HRDINA (pri STRED) prepína režim, pamätá sa. Orientácia ho už nemení.
- Zvýšené bloky: svetlá hrana hore a tmavá čiara dole, aby bol útes vidieť aj zďaleka.
- Game feel (aj pri osadníkoch): úder = strom sa trasie + triesky + listy, pri páde padá strom a lietajú polená; ruda/krík majú vlastné triesky.
- Ložiská (dep…) sa dajú označiť.

## Krok 12b
- Zadné hrany zvýšených blokov majú tmavý obrys (oddelené od pozadia).
- Popup pre strom/rudu/krík/zlato: len jedno tlačidlo (označiť na výrub/ťažbu/zber), bez textu.
- Fakle sa dajú presúvať (Presunúť → ťuk na voľné políčko, pamätá sa). Ložiská, kríky a stromy sa nepresúvajú.
- Poznámky z Gemini (cb4b55fe-attachment.txt) len prečítané, nič z nich nie je implementované – plánujeme spolu.

## Krok 13 – Duch osady, most, úspechy, skrýša, kino
- Duch osady (✦ v hornom paneli, ťuk = rozpis): fakle, ohnisko, vystavené veci, plné police (+5), chaty (+2), most (+5). Bonus = min(30, duch) %: osadníci pracujú rýchlejšie, chodia o polovicu bonusu rýchlejšie.
- Susedské bonusy budov: zatiaľ nie (odložené).
- Most je rozbitý (2 políčka v strede). Oprava za 30 kameňa + 20 dreva (ťuk na most). Až potom sa dá na druhý breh, k ložiskám a do jaskyne.
- Autoloot: suroviny pri ručnej ťažbe priletia k postave. Vibrácie: úder, oheň, pád stromu, stavba, nález, úspech.
- Úlohy → celá obrazovka „Úlohy a úspechy“: úlohy + 11 úspechov (I/II/III) v kategóriách Drevo, Ťažba, Farmárčenie, Budovanie, Zberateľ + Rybolov/Varenie/Dungeon ako „čoskoro“.
- Skrýša pod halou (ťuk na halu → Zísť do skrýše): 4 police × 4 veci (les, kameň, lúka, zlato). Nález 14 % pri ťažbe, „Vystaviť“, plná polica = odmena.
- KINO tlačidlo: celé UI zmizne, kamera sa pomaly prechádza, ťuk = späť.
- Odložené: jaskyňa s nepriateľmi, klany, multiplayer.

## Krok 13b
- Popup tlačidlá sú len ikonky: sekera (strom), krompáč (ruda/zlato), košík (krík), červený krížik (zrušiť označenie), šípky (presunúť fakľu). Text je len ako tooltip.
- Zadné hrany blokov sú svetlé ako predné (tráva svetlozelená, skala svetlosivá), žiadny tmavý tieň.
- Plán (nezačaté): angličtina na konci naraz; skrýša ako skutočná pivnica pod halou s NPC; loadout Keepera s menej slotmi.

## Krok 14 – pivnica pod halou, menší popup, ťahanie fakieľ
- Popup pri strome/rude/kríku: malé okrúhle tlačidlo s ikonkou hneď vedľa veci. Keď vec zmizne z obrazovky (scroll), výber sa zruší.
- Fakľa sa presúva ťahaním prstom (zelená = dá sa, červená = nedá). V režime hrdinu len keď neovládaš postavu.
- Pivnica (skrýša): hala → „Zísť do skrýše“ → samostatná scéna: kamenné steny, drevená podlaha, 4 police (les, kameň vľavo; lúka, zlato vpravo), fakle, schody. Strážca skrýše (NPC): ťuk = reč, „Vystaviť nové“ položí nálezy na police (s animáciou), odmena za plnú policu ostáva. Keeper chodí ťukom po podlahe. „Zoznam vecí“ = stará obrazovka, „Hore do dediny“ = späť.
- Kôpky surovín pri budovách: zatiaľ nie (nie je nutné).
- Ďalej: jaskyňa + loadout (4 sloty: zbraň, telo, prívesok, prsteň). Angličtina na koniec.

## Krok 15 – jaskyňa, výbava, dielňa
- Jaskyňa (po oprave mosta): ťuk na vchod → ikonka schodov → samostatná tmavá scéna 9×9. Svetlo len okolo Keepera. 5 slizov + 2 kamenné chrobáky idú po tebe.
- Ovládanie v jaskyni: ťuk/držanie = choď tam, WASD; Úder (Space) okolo seba, Oheň (Q) mieri sám na najbližšiu príšeru. Srdiečka hore, zásah = blik + vibrácia.
- Korisť z príšer (kameň, železo, niekedy zlato) sama letí ku Keeperovi. Po vyčistení truhla: vzácna vec (70 %) alebo 3 železa + 2 zlata, 50 % nález do skrýše.
- Smrť = späť do dediny, nič sa nestratí. Von: tlačidlo alebo schody vľavo.
- Výbava (tlačidlo VÝBAVA vpravo, aj v jaskyni): 4 sloty zbraň/telo/prívesok/prsteň. Veci: Palica strážcu (štart), Dubová palica (úder +1), Fénixova palica (každá 3. guľa ×3, len z truhly), Kožená vesta (+3 život), Kamenná zbroj (+6, pomalší), Uhlíkový amulet (oheň rýchlejšie), Prsteň vlka (+20 % rýchlosť, platí aj v dedine), Prsteň svetlonosa (ďalej vidíš, väčší magnet, len z truhly).
- Dielňa (v okne Výbava) = míňanie surovín: vesta 12 jedla + 5 dreva, dubová palica 15 dreva + 1 železo, zbroj 25 kameňa + 4 železa, amulet 10 kameňa + 2 zlata, prsteň vlka 2 železa + 3 zlata.
- Úspechy: Dungeon (Do tmy, Lovec slizov, Poklad), Výbava (Remeselník).

## Krok 16 – Keeper na koni, nové budovy (len vzhľad)
- Keeper of the Fire jazdí na starom čiernom koni s červenými látkami (pokrývka so zlatým lemom, hrudná látka, vejúca šerpa, uzda). Kôň má chôdzu (4 snímky), mihá chvostom a uchom. Chodí rýchlejšie (rýchlosť 1,4). V pivnici a jaskyni je Keeper stále pešo.
- 7 nových budôv, zatiaľ bez mechaniky (ťuk = popis a výber políčok):
  - Stajňa 3×2 (slamená strecha, dve stojiská, čierna hlava koňa, seno, válov) pri ohnisku
  - Kováčňa 3×2 (kameň, šindeľ, vysoký komín s dymom, žiariaca výheň, kovadlina)
  - Veterný mlyn 3×3 (kužeľová veža, otáčajúce sa lopatky) pri rieke
  - Strážna veža 2×2 (kameň, drevená ochodza, zástava s plameňom, svetlo na vrchu)
  - Sýpka 2×2 na kamenných hríboch so schodíkmi
  - Krčma U Ohňa 4×4 v tvare L (kamenné prízemie, hrazdené poschodie, štít s krígľom, komín s dymom)
  - Studňa 1×1 so strieškou a vedrom
- Okná svietia v noci, budovy blokujú políčka (osadníci ich obchádzajú). Sú aj v katalógu budov.
- Nápady na ďalšie: pekáreň, rybárska chata, svätyňa ohňa, kameňolom, trhovisko, mólo.

## Krok 17 – dekorácie, nový font okienka
- Okienko pri ťuknutí: nadpis fontom VT323, riadok „Farma 3×3" skrytý. Tiene nových budov bez čiernej čiary.
- Stavať → Dekorácie: 4 skupiny po 3 veci (1×1 políčko), stavajú sa zo surovín na voľnom políčku v strede obrazovky.
  - Zástavy: Vlajka plameňa, Modrá zástava, Prápor s vlajočkami (4–5 dreva)
  - Záhradka: Kvetináč (2 dreva), Záhon kvetov (5), Orezaný krík (3)
  - Pamätníky: Mohyla (6 kameňa), Kamenný stĺp s runou (12 kameňa), Socha Filipa Čaňa (easter egg, kamenný kamarát v košeli a s kravatou; 10 kameňa + 1 zlato)
  - Posedenie a svetlo: Lavička (6 dreva), Stôl so stoličkami (10), Miska ohňa (4 kameňa + 1 železo, v noci svieti)
- Presun: najprv ťukni (vybrať), potom potiahni prstom, aby sa nepresúvala omylom pri posúvaní mapy (zelená = dá sa, červená = nedá). Ťuk = červený krížik, zbúrať vráti polovicu surovín.
- Každá dekorácia dáva +1 Duch osady, najviac +12. Uloženie v prehliadači ('devworld-decor').

## Krok 18 – budovy zo surovín, fázy stavby, výroba
- Stavať → Budovy: Studňa, Stajňa, Sýpka, Kováčňa, Strážna veža, Krčma, Veterný mlyn a nový Lom (3×3, stupňovitý kameň so žeriavom). Na začiatku žiadna nestojí, všetko sa stavia.
- Cena sa platí hneď zo skladu (sklad zatiaľ bez limitu). Ťukneš miesto (zelený/červený duch budovy), ťukneš ešte raz alebo Postaviť.
- Voľný osadník príde a stavia. Budova rastie po fázach (základy → 3 fázy s lešením → hotová); stav sa riadi tým, ako ďaleko je osadník v práci. Po dokončení sa zapnú okná, dym a lopatky mlyna.
- Zbúrať: vyber budovu → „Zbúrať · vrátiš všetky suroviny" (aj zo stavby, aj čo čaká na výrobu).
- Výroba: Mlyn +1 jedlo za 40 s, Lom +1 kameň za 30 s. Nosič Ondro vozí hotové veci do skladu, cestičky sa vychodia samy. Osadníci a Keeper chodia budovy pozerať.
- Beží aj keď nehráš: po návrate sa dopočíta (najviac 8 hodín) a ukáže „Kým si bol preč, dedina vyrobila…". Neskôr to prevezme server.
- Duch osady: Budovy (podľa typu, najviac +16). Uloženie 'devworld-bld'.
- Pozor: staré pevné budovy (stajňa, mlyn…) zmizli z mapy, treba ich postaviť.

## Krok 19 – tiene, zámok presunu, viac obyvateľov, mesto
- Tiene budov bez čierneho obrysu (hlavná budova, domčeky, sklad); sklad dostal vlastný tieň. Obrys sa už nikdy nekreslí okolo polopriehľadného tieňa.
- Zámok: fakľu aj dekoráciu najprv vyberieš, ťukneš na zámok (odomkne sa na 10 s, potom sa sama zamkne) a až potom ju potiahneš. Omylom pri posúvaní mapy sa už nehýbu.
- Obyvatelia: 14 osadníkov (bolo 3). V každom z 6 domov býva 2 až 4, každý má meno a vlastný vzhľad (6 farebných variantov). Spia vo svojom dome.
- Spoločný oheň: ráno 6:00 až 9:00 sa stretávajú pri ohni (stoja a rozprávajú), večer 18:00 až 21:30 tam sedia, potom idú spať. Oheň = táborák pri domoch (10,31).
- Mesto: pri prvom spustení sa postaví usporiadané mesto okolo ohňa (krčma, studňa, stajňa, sýpka, kováčňa, veža, mlyn) s medzerami medzi budovami. Ďalšie stavaj cez Stavať → Budovy.

## Krok 20 – kôň zo všetkých strán, nové rozloženie mesta
- Keeper na koni sa otáča po 45° (8 smerov): šikmo k divákovi, šikmo preč, bokom vľavo/vpravo, hore, dole. Nové kresby koňa a jazdca v pohľade 3/4 (dole a hore), bok ostal. Ľavé smery sa zrkadlia.
- Nové rozloženie: ohnisko je v strede námestia (21,27). Domčeky sú v oblúku okolo neho, krčma a stajňa na juhu, studňa pri námestí, kováčňa a sýpka na východe, mlyn a veža pri rieke. Polia sú pri ohrade na severovýchode (zeleninové, pšenica, čerstvo zasiate).
- Fakle sú nanovo okolo námestia. Staré uloženie fakieľ, cestičiek a budov sa pre nové rozloženie vymazalo (nové kľúče 'devworld-torches2', 'devworld-wear-v3', 'devworld-bld2').

## Krok 21 – test na mobile, jednoduché ovládanie palcom
Hru som prešiel s dotykom na telefóne (na výšku aj na šírku): ťukanie, posun, dva prsty, stavba, dekorácie, jaskyňa, skrýša, prevzatie postavy.
- Režim Ťažba je preč. Ťukneš na strom, rudu alebo krík a pri ňom je ikonka (sekera, krompáč, košík). Ťukneš na ňu a osadník ide ťažiť.
- Ťuk na budovu = jej menu (popis, výroba). Ťuk na postavu = jej karta. V režime hrdina sa postava už neprevezme omylom, je na to tlačidlo „Ovládať túto postavu" (a „Vrátiť sa ku Keeperovi").
- Stavať = jedno okno: budovy (aj drevorubač) a pod nimi dekorácie. Čo nemáš z čoho postaviť, je šedé.
- Zbúrať treba potvrdiť druhým ťuknutím do 3 s (tlačidlo zčervená).
- Otvorené okno (Osadníci, Stavať) sa zavrie ťuknutím do mapy.
- Opravy: dva prsty na ľavej polovici už nespustia chôdzu, ale zoom. Malé veci (lavička, fakľa) majú pri ťuknutí prednosť pred veľkou budovou za nimi. Malé menu pri veci sa už neprekrýva s vecou (inak potiahnutie prstom spravilo ťuk). Akcia je šedá, keď nie je čo robiť. Tlačidlá vpravo hore sa v režime hrdina už nezrežú (VÝBAVA).
- Stavba: od začiatku vidno základy (hlina, kamene, kolíky). Budova sa nedá postaviť na políčko, kde práve stojí postava.
- Cvičisko s panákmi sa presunulo z dediny na lúku na západe.

## Krok 21.1 – hlavná budova a presun kapusty
- Hlavná budova viac ako Town Center z AoE2: namiesto drevených nôh má kamenný sokel z tesaných kvádrov s klenutými okienkami a drevený veniec. Schody k dverám sú kamenné a kreslia sa v správnom poradí (predtým z nich bola hnedá škvrna).
- Kapusty a výhonky sa presunuli spolu so zeleninovým poľom (33,9). Predtým zostali na starom mieste pred hlavnou budovou.
- Ukážkové veci (dub, smrek, breza, jabloň, ruda, krík) sú preč z námestia, mimo domov. Cvičisko s panákmi je na lúke pri poliach (východ).

## Krok 22 – poistka (nevidno ju, chráni hru)
- Kód má sekcie s jasnými nadpismi: SVETY A ULOŽENIE · SVET (LAYOUT) · BUDOVY · KRESBY · POSTAVY · HRA · POPULÁCIA A JEDLO · UI · ŠTART. Na začiatku súboru je obsah. Pri úprave sa číta len jedna sekcia (šetrí usage).
- Všetky súradnice mesta sú v sekcii SVET (LAYOUT), aj plán budov Dev World (SEED_PLAN). Kapusta je viazaná na pole, aby sa už nestalo, že ostane na starom mieste.
- Uloženie má číslo verzie (SAVE_VER). Keď sa zmení formát, starý save sa prevedie a nezmaže.
- Regresný test (regress.py): spustí úvod, Dev World aj Novú hru, postaví chalupu, pretočí večery a skontroluje chyby. Spúšťa sa po každom kroku.

## Krok 23 – úvodná obrazovka a Nová hra
- Úvodná obrazovka „Keeper of the Fire": Nová hra (alebo Pokračovať), Dev World, Nastavenia.
- Nastavenia: Slabý počítač (kreslí v menšom rozlíšení, napr. pre starý iMac) a Zmazať Novú hru (treba ťuknúť 2×).
- Nová hra = samostatný svet s vlastným uložením (kľúče 'nw-…'). Začiatok: hlavná budova, sklad, ohnisko, 2 fakle, 3 osadníci + Keeper + nosič. Štart: 40 dreva, 10 kameňa, 12 jedla. Domy, polia, ohrady ani budovy tam nie sú, všetko sa stavia.
- Tlačidlo MENU vpravo hore uloží hru a vráti sa na úvod.
- Nové budovy (aj v Dev World): Chalupa 2×2 (20 dreva, 3 postele) a Pole 3×3 (10 dreva, rodí jedlo).

## Krok 24 – jedlo a rast osadníkov
- Každý večer o 20:00 zje každý osadník 1 jedlo.
- Keď je jedla dosť a v chalupe je voľná posteľ, po 2 dňoch príde nový osadník (s menom, býva v chalupe).
- Keď jedlo chýba: ľudia sú hladní a chodia pomalšie (jedlo v lište zčervená). Nikto neodchádza ani neumiera.
- V lište hore pribudlo 👤 ľudia / postele.
- Nápad na neskôr: prepustený osadník sa po rokoch v hre vráti zmenený, s príbehmi a vecami, a pýta si vlastný domček.

## Krok 24.1 – ložiská pri osade
- Blízko osady (v oboch svetoch) sú nové ložiská: 4× kameň (+4 kameňa), 2× železo (+2 železa, +1 kameň) a 4 kríky s bobuľami (jedlo). Staré vzdialené ložiská za riekou ostali.
- Zoznam je v sekcii SVET ako NEAR_RES, ľahko sa pridá ďalšie.

## Krok 25 – večera pri ohni, ranný Red Bull, loading
- Večer (od 16:30): každý osadník ide do skladu po jedlo (ikonka mäsa), odnesie ho k ohňu a opeká ho (čupí pri ohni). Potom si sadne na lavičku alebo k ohňu, je a kecá. Spať ide až po 22:00.
- Pri ohni sú 4 lavičky (na voľných miestach okolo ohniska).
- Ráno za svitania (od 5:30) prídu k ohňu, sadnú si a pijú ranný Red Bull (modro-strieborná plechovka, je free ❤). Logo nie je nakreslené, je to všeobecná plechovka.
- Na večeru a jedlo chodia trochu rýchlejšie.
- Loading pri vstupe do sveta: 0 až 100 % za ~3 s, potom skočí na 142 % so zatrasením a hláškou „OVER USAGE! Developer vypil všetok Red Bull". Počítadlo sa rozbehne, až keď je svet naozaj načítaný.

## Krok 25.1 – ľadový mrazák
- Pri ohni stojí mrazák: drevená truhlica obalená ľadom, s cencúľmi. Osadníci si večer berú jedlo odtiaľto, nie zo vzdialeného skladu.
- Keeper of the Fire ovláda aj druhý element, ľad. Cez deň (keď ho neovládaš ty) chodí k mrazáku a mrazí jedlo: nad hlavou má vločku a z truhlice letia modré ľadové iskry. Občas sa z mrazáka zaiskrí aj sám od seba.

## Krok 26 – Usage of Empires
- Hra sa volá Usage of Empires (názov v prehliadači, na úvode aj pri loadingu). Keeper of the Fire ostáva menom postavy.
- Úvodná obrazovka má Robertovo logo (štít s ohňom, sekerou a fakľou, stuha „Start a new world!"). Logo sa jemne vznáša. Je vložené priamo v hre (zmenšené na 420 px, priehľadné pozadie).

## Krok 27 – osadníci pracujú sami (Nová hra)
- Cez deň (9:00 – 16:30) si voľní osadníci sami vyberú prácu podľa toho, čoho je v osade najmenej: Zberač (bobule, jablone), Drevorubač (stromy), Kameník (kameň). Idú k najbližšiemu stromu/ložisku/kríku, vyťažia a odnesú do skladu.
- Ručné označovanie (sekera, krompáč, košík) stále funguje a má prednosť.
- Ráno pri ohni, večera a spánok ostávajú, roly ich neprerušia. V Dev World sa automatika nezapína (výstavka).
- Sklad nemá limit.
- Oprava: v Stavať sa Chalupa a Drevorubač pliesli (obe mali rovnaký kľúč). Oprava aj chýbajúceho obrázka Drevorubača v Novej hre.

## Krok 28 – veky (ako Empire Earth)
- 3 veky: Pravek → Doba kamenná → Doba železná. Ďalšie veky (až po futuristický svet) prídu vo veľkých updatoch.
- Pravek: Chalupa, Studňa. Doba kamenná: Pole, Sýpka, Stajňa, Veterný mlyn, Krčma. Doba železná: Lom, Kováčňa, Strážna veža. Zamknuté budovy sú v Stavať šedé so zámkom.
- Do Doby kamennej: 6 osadníkov, 2 chalupy, 80 dreva, 40 jedla. Do Doby železnej: 10 osadníkov, 2 polia, 150 dreva, 100 kameňa, 80 jedla.
- Tlačidlo veku hore pri hodinách otvorí panel Veky (čo chýba, zelené = splnené). Postup = veľký nápis „NOVÝ VEK", fanfára a zatrasenie.
- Dev World je rovno v Dobe železnej (všetko odomknuté).

## Krok 29 – zvuky
- Všetky zvuky sú generované v hre (žiadne súbory): sekanie, ťukanie krompáča, šuchot kríkov, dostavaná budova, nový osadník, fanfára veku.
- Atmosféra: praskanie ohňa (keď si pri ňom), cez deň vtáky, v noci cvrčky.
- Tlačidlo ZVUK / TICHO vpravo hore (pamätá si to).

## Krok 30 – hladký štýl (redesign variant 1)
- Úvod → Nastavenia → „Hladký štýl (menej pixelov, farby ako v AoE)". Zapína sa pri vstupe do sveta.
- Čo robí: kresby sa pri priblížení vyhladia (nie ostré pixely), čierne obrysy sú nahradené mäkkými polopriehľadnými, farby sú teplejšie a trochu vyblednuté (ako AoE2), okraje obrazovky jemne stmavnú.
- Pri zapnutom „Slabý počítač" sa farebný filter vypne (šetrí výkon), vyhladenie ostane.
- Ak to nebude stačiť: ďalej variant 2 (maľovaný terén) + 3 (UI v štýle AoE), potom prípadne 4 (detailnejšie budovy).

## Krok 31 – AoE štýl: maľovaný terén a UI ako v AoE2
- Prepínač v Nastaveniach sa volá „AoE štýl" a zapína všetko naraz: hladké kresby (Krok 30) + maľovaný terén + UI.
- Maľovaný terén: zem sa jemne rozmaže (prechody tráva/hlina/voda splývajú, hrany políčok nevidno), cez ňu sú veľké svetlejšie, tmavšie a hnedasté škvrny, ťahy štetcom a drobné stebielka. Robí sa raz pri štarte (žiadna záťaž počas hry).
- UI ako AoE2: tmavé drevo s zlatým lemom, pätkové písmo Cinzel, zlaté nadpisy s tieňom, suroviny vľavo hore, tlačidlá ako vyrezávané drevo.
- Bez prepínača ostáva pôvodný pixelový vzhľad.

## Krok 32 – revízia hry (pohľad seniora) a mierka
Opravy:
- Bubliny nad hlavou (noty, mäso, Red Bull…) už nelietajú zdola. Pri dlhých bublinách sa výskok počítal zo zostávajúceho času, takže štartovala stovky pixelov pod postavou. Teraz len krátko vyskočí pri objavení.
- Výkon v noci: svetlá (76 lámp a okien) sa kreslili každý snímok v plnom rozlíšení, v noci hra padala ~5× (príčina sekania na starom iMacu). Teraz sa svetelná vrstva kreslí v nižšom rozlíšení a len každý 3. snímok, ak sa nehýbe kamera. V teste noc 3 → 10 fps (deň 16).
- Herný čas sa ukladá (deň a hodina), predtým sa po každom načítaní vrátil na Deň 1, 9:30.
- Autosave každých 20 s a pri zavretí / prepnutí aplikácie.
- Automatická práca dáva prednosť jedlu, keď ho je málo (predtým ľudia len sekali drevo a jedlo dochádzalo).
- Na mobile sa hodiny nelámu do 3 riadkov, sú v jednom riadku nad tlačidlami.
Mierka (1. kolo, osadník ≈ 18 px ≈ 1,75 m):
- Komíny domov sú pri hrebeni strechy a trčia len kúsok nad ňu (predtým stáli vzadu a vyzerali vyššie ako dom). Drevený komín menší.
- Kováčňa: komín z ~31 px na ~15 px. Krčma a hlavná budova: komíny nižšie, dym presunutý.
- Studňa: z výšky dvojposchodového domu (42 px) na výšku človeka (~21 px), menší múrik a strieška.
- Lavička: sedadlo vo výške kolien, operadlo nižšie.
- Mrazák: nízka truhlica (predtým vyšší ako človek).

## Krok 33 – menšie a realistickejšie postavy
- Všetky postavy (osadníci, Keeper na koni, nosič, drevorubači) sú na 75 % veľkosti. Budovy pôsobia väčšie, ako v AoE. Tiene a bubliny sú prispôsobené.
- Oblečenie má realistickejšie, zemité farby (menej sýte, tmavšie), pokožka ostala.

## Krok 34 – grafické nastavenia (smer AoE2) a ostré tiene postáv
- Nové: ⚙ → Grafika (zapína sa hneď, pamätá si to):
  - Zrno (šum ako na filme) – zap.
  - Ostré textúry (doostrenie) – zap.
  - Teplé svetlo – vyp.
  - 256 farieb (AoE2 z roku 1999: obmedzená paleta + rozptyl bodiek) – vyp.
  - Farba podľa dennej doby (ráno do zlata, obed neutrálne, večer do oranžova) – zap.
  - Tiene mrakov (pomaly prechádzajú cez mapu) – zap.
  - Ranná hmla a prach (5:00–9:30) – zap.
  - Žiara svetiel v noci (bloom, len v noci) – vyp.
  - Stmavené okraje – vyp.
- Všetky filtre obrazovky sú v jednom shaderi na grafickej karte (lacné aj na slabom PC). Pri „Slabý počítač" sa hmla a žiara vypnú.
- Postavy majú ostrý tieň v tvare siluety, ktorý padá vľavo dole (ako v AoE2). V noci sa skryje.
- Vzorka cieľového štýlu: aoe_vzorka.html (drevený sklad, malé postavy, jazdci, ostré tiene, zrnitá tráva). Prekresľovanie samotných kresieb do tohto štýlu ide v ďalších krokoch.

## Krok 34.1 – loading a nastavenia
- Loading je viditeľný hneď po otvorení stránky (zakryje „zaseknutú" čiernu obrazovku pri načítavaní). Je jednoduchší: názov, percentá, pás. Kým sa svet načítava, ide pomaly do 70 %, potom rýchlo dobehne na 100 % a zmizne. Easter egg 142 % je preč.
- Žiara svetiel sa zapína len v noci (cez deň obraz nemení).
- Nastavenia na mobile: menší panel nad spodnými tlačidlami, s krížikom na zavretie.

## Krok 35 – prekreslenie 1/4: postavy a kôň (štýl AoE2)
- Všetci osadníci, drevorubači, nosič a Keeper na koni sú nakreslení nanovo: hladké tvary namiesto pixelov, 4× väčšie rozlíšenie, zmenšené na hru (ako predrenderované sprity v AoE2).
- Osadník: realistické proporcie (hlava ~1/7 výšky), tunika s prechodom farby (svetlo sprava ako v AoE), opasok, záhyby, ruky, nohy s onucami a topánkami, vlasy, brada / bez brady, oči (žmurkanie). Pózy: státie, chôdza (4 snímky, kývajú sa ruky), sedenie, kľačanie pri práci (2 snímky).
- Keeper na koni: čierny kôň s hrivou, chvostom a nohami v kĺboch (chôdza v 4 snímkach), červený čaprak so zlatým lemom, Keeper v červenom rúchu s bielymi vlasmi a bradou, palica so žeravým koncom. Pohľady: bok, šikmo k nám, šikmo od nás.
- Jemný tmavý okraj okolo postáv (čitateľné aj malé, bez čiernych pixelových obrysov).
- Tiene: cez deň len ostrý tieň siluety vľavo dole, starý okrúhly tieň pod nohami sa ukazuje len v noci (žiadne dvojité tiene).
- Ďalej: 2/4 stromy a zem, 3/4 hlavná budova a domy, 4/4 ostatné budovy a dekorácie.

## Krok 35.1 – späť na pixely
- Postavy a kôň sú znova pixelové (pôvodné kresby). Realistický „HD" štýl z Kroku 35 je schovaný (nie je v ponuke), dá sa neskôr dokončiť ako samostatný grafický mód.
- Nové v ⚙ → Grafika: „Postavy 2× jemnejšie pixely (po reštarte)" – každý pixel postavy sa rozdelí na 4 a šikmé hrany sa zjemnia (Scale2x). Základ pre 2× mód aj pre ďalšie časti hry (budovy, stromy, zem).
- Ostré tiene siluety vľavo dole ostávajú aj pri pixelových postavách.

## Krok 36 – AI sprity (AoE2 vzhľad): hlavná budova, chalúpka, sklad
- Nová sekcia SPRITY (pred BUDOVY): SPR_B64 (3 pixelizované PNG ako base64), sprLoad() (načíta pred štartom hry), sprPack() (priestor + ostrý tieň slnko hore vpravo, 1 tieň na budovu), hutSpr().
- Hlavná budova (6×6) = World.hallSpr(): sprite, 3 fakle, 2 ohne, 5 okien, 2 komíny s dymom. Stará makeTownCenter zostala ako záloha (použije sa, ak sprite chýba).
- Sklad (4×6) = sprite sklad s kopami; chalupa (BLD_ART.hut) = sprite, okná cez deň tmavé, v noci svietia.
- Postup výroby sprite: vystrihnutie z bieleho pozadia, zmenšenie, spoločná paleta 40 farieb, 1 px obrys (skripty /tmp/claude-0/spr/pipe.py, nie sú súčasť hry).
- Ďalšie na rad: úrovne naplnenia skladu (drevo/krabice/vrecia ako samostatné kopy), stromy, farma s plotom.

## Krok 36.1 – bez dvojitého obrysu, zjednotené farby
- Z nových spritov zmizol môj extra 1 px čierny obrys (AI kresba má vlastný).
- Staré kresby (Pix): obrys je teraz tmavší odtieň susednej farby, nie čierny; farby o ~20 % menej sýte a o chlp tmavšie (PALFIX), aby ladili so sprity.
- Trávu (maľovaný terén) zatiaľ nemením, je stále výrazne zelená.

## Krok 37 – zem ako v AoE2
- Tráva prefarbená do olivovej (menej sýta, teplejšia), náhodné fľaky blata a tmavého machu.
- Štrkové cesty medzi hlavnou budovou, skladom, ohniskom, domčekmi a farmami (GRAVEL v sekcii SVET, len vzhľad, neblokujú chodenie).
- Maľované ťahy trávy (hladký štýl) v olivových tónoch.
- Ďalej: rozloženie bližšie k nádvoriu (krok 2), jesenný les z obrázkov (krok 3).

## Krok 38 – stromy z AI obrázkov
- 18 nových spritov (spoločná paleta 48 farieb): 4 duby, 6 ihličnanov, 4 jesenné stromy, 3 suché stromy, peň.
- Každý strom v lese si podľa polohy vyberie variant (TREE_V, treeVar): dub → duby, smrek → ihličnany, breza → jesenné; ~4 % sú suché stromy. Jabloň zostáva stará (má jablká).
- Vietor: variant B má korunu posunutú o 1 px. Po vyrúbaní ostane nový peň.

## Krok 39 – budovy z AI obrázkov (2. dávka)
- Nové sprity: krčma, kováčňa (slamená), studňa, stajňa, sýpka, strážna veža, mlyn + lopatky, zrub drevorubača. Zosvetlené (gama) a o chlp teplejšie, aby ladili s hlavnou budovou; paleta 48 farieb.
- bldSpr(kind) + BLD_SPR (svetlá, dym, os lopatiek v pixeloch spritu); bldTex použije sprite, ak existuje, inak starú kresbu. Lopatky mlyna = sprite otáčaný v 4 snímkach.
- Domčeky v Dev World: zrubový štýl = zrub drevorubača, hrazdený a kamenný = chalúpka (otočenie B zrkadlovo).
- Zostáva po starom: lom, pole, kurín, chata drevorubača v Novej hre, jablone, kríky, ploty, postavy.

## Krok 39.1 – čisté výrezy a lepšie tiene
- Biele fľaky preč: väčšie biele plochy vnútri obrysu (medzi stĺpmi, pod prístreškom, pri balkóne) sú teraz priehľadné; drobné svetlé pixely stmavené. Prerobené všetky budovy (hlavná budova, chalúpka, sklad aj 2. dávka).
- Tieň budov: silnejší (alfa .4), dlhší smerom vľavo dole (slnko vpravo hore), jemne zmäkčený + tmavá kontaktná plocha pod celým pôdorysom, aby budova „sedela“ na zemi.

## Krok 40 – tmavšia zem, balvany, podrast
- Tráva ešte tmavšia a menej sýta (podľa trávovej dlaždice z Gemini).
- Ložiská kameňa/železa/zlata = balvan zo spritu (fitSpr drží staré body ukotvenia), vyťažené = kôpka kameňov.
- Podrast: ~340 kríkov, papradí, suchej trávy, kameňov a polien rozhádzaných po tráve (hustejšie pri lese), len vzhľad.

## Krok 41 – postavy z AI obrázkov
- Nový režim postáv CHAR_MODE 'spr' (predvolený, keď sú sprity): osadník (3/4 spredu a zozadu, 3 snímky chôdze, sekanie sekerou, sedenie), osadníčka (beard: false → žena), Keeper na koni (kôň zo spritu + horná časť Keepera).
- Plátno 32×96 / 92×160 s rovnakým zlomkom ukotvenia ako staré postavy, HD 2 → nič iné v hre sa nemenilo.
- Farba oblečenia podľa palety osadníka (jemný nádych tuniky), aby sa dali rozlíšiť.
- Zostáva po starom: Keeper v jaskyni, lavičky, ohnisko, mrazák, fakle, ploty.

## Krok 42 – postavy kreslené ručne v jednotnom štýle
- AI postavy zrušené (boli malé, nečitateľné, kôň cúval). Nová drawChar2 (32×48, HD 2): realistické proporcie, malá okrúhla hlava, 3 tóny na materiál, svetlo sprava zhora, tlmené farby, výberový obrys. Muž s bradou/fúzmi, žena so šatkou, sukňou a zásterou. Chôdza 4 snímky, práca so sekerou (2 snímky), sedenie.
- CHAR_SC .75 → .85 (lepšie vidno). Osadníci chodia rýchlejšie (voľno .5 → .72, práca .9 → 1.15).
- Keeper na koni: pôvodná kresba, o chlp menšia a tlmenejšia (muteRider).
- Drevo všetkých starých kresieb (lavičky, ohnisko, fakle, ploty, vozíky…) prefarbené na zvetrané šedohnedé ako na spritoch (WOOD_FIX v palFix).
- Starý vzhľad postáv sa dá zapnúť cez dw-gfx {oldpx:true}.

## Krok 42.1 – postavy v pixeloch sveta
- Postavy boli jemnejšie ako zvyšok sveta (2 pixely postavy na 1 pixel sveta). Teraz lowChar: detailná kresba 32×48 sa zmenší na 16×24 (priemer 2×2), HD 1 a CHAR_SC 1 → 1 pixel postavy = 1 pixel budovy/stromu, rovnaké „rozpixlovanie“ ako sprity.
- Keeper na koni rovnako v 1× mierke, zmenšený s vyhladením a tlmený.

## Krok 43 – jednotné rozlíšenie všetkých spritov
- Meranie ostrosti (priemerný rozdiel susedných pixelov): 1. dávka budov ~18–20, 2. dávka ~11–15 (pôsobila „rozmazane“, ako nižšie rozlíšenie), stromy ~10–14.
- Všetky sprity (budovy, stromy, podrast, balvany) prešli rovnakým spracovaním: doostrenie na spoločný cieľ (budovy ~17,5, stromy ~15), zjednotený jas budov a JEDNA spoločná paleta 64 farieb (skript /tmp/claude-0/spr/norm.py).

## Krok 44 – drobnosti z AI obrázkov
- Nové sprity (prešli jednotným spracovaním norm.py): kurín, válov so senom, lavička z polena, ohnisko s kruhom kameňov, truhla s ľadom (mrazák), lom so žeriavom (budova Lom), fakľa (kôš bez plameňa – plameň pridáva hra len v noci, TORCH_FY), fúrik s drevom (nosič), ložisko zlata (oreGold, nd.tex pri dorastaní).
- Ohnisko: maľovaný oheň + jemne menší animovaný plameň navrchu.
- Nepoužité: plot a bránka (nie sú v uhle 2:1, nesedeli by na hrany políčok), jaskyňa a most (sú súčasťou terénu, treba ich robiť spolu s terénom).

## Krok 45 – tmavá voda ako v AoE2
- Voda prefarbená z jasnej tyrkysovej na tmavú modrozelenú (5 hĺbok), pena pri brehu sivozelená, trblietanie slabšie.
- Piesok, okraj sveta (trávnatý lem, hlina, kamene) stlmené do zemitých tónov.

## Krok 46 – útulná osada, polia a drobnosti z AI, Keeper v pixeloch
- Rozloženie Dev World: domčeky v kruhu okolo dláždeného nádvoria s ohňom (22,24) a studňou; krčma, sýpka, kováčňa južne, stajňa západne, veža a mlyn (pri rieke) východne. CAMPFIRE pre Novú hru ostáva (21,27).
- Prechod uložených hier: budovy zo starého seedu (SEED_OLD) sa pri prvom načítaní presunú na nové miesta (seed3), vlastné stavby hráča ostanú. Fakle nové pozície (devworld-torches3). Domov obyvateľov = políčko pred ich domom.
- Na miestach budov osady nevyrastú osamelé stromy (RESERVED).
- Nové sprity: jabloň s jablkami (TREE_V.apple), krík s bobuľami / bez bobúľ, pšeničné pole (aj budova Pole, bez tieňa – flat), zasiate pole so strašiakom, zeleninové pole, kopa sena, drevo, debny s vrecami, sudy (DEV_PROPS – 8 drobností po osade).
- Keeper na koni: realistická kresba zmenšená 4× na pixely sveta (pixDown) – rovnaký štýl ako budovy.
- Ovce, sliepky, cvičné figuríny stlmené (muteC). Jasnozelené okraje vyvýšených políčok (aj pri moste) stmavené.
- Nepoužité: druhá studňa (máme), mólo (zatiaľ nie je kam dať).

## Krok 47 – kino režim ako film
- Namiesto jedného kolísania tam a späť sa striedajú náhodné zábery (nikdy 2× rovnaký typ po sebe): prelet medzi dvoma miestami (11–16 s), sledovanie náhodnej postavy (9–15 s), detail budovy s jemným pohybom (7–10 s), celok osady z diaľky (10–14 s).
- Pohyb je plynulý: kamera sa v kine nezaokrúhľuje na celé pixely (cam.roundPixels = false), pohyb s plynulým rozbehom a dobehom.
- Priblíženie sa mení len pri strihu (stmievačka), počas záberu ostáva celé číslo → pixely sú ostré. Blízky ďalší záber = plynulý presun bez strihu.

## Krok 48 – upratané UI
- Pravý stĺpec: z 9 tlačidiel (MENU, ZVUK, ⚙, STRED, MESTO, KINO, VÝBAVA, +, −) ostali 3 na mobile: ☰ Menu, ◎ kamera späť, Mesto/Hrdina (+ a − len na počítači).
- Nový panel Menu (☰): rýchle dlaždice Kino, Výbava, Zvuk, Deň/Noc, Celá obrazovka, Hlavné menu; potom Zobrazenie (veľkosť ovládania, panel úloh, vývojárske tlačidlá) a zbaliteľná sekcia „Grafika a efekty“. Kino/Výbava/Celá obrazovka panel zatvoria.
- Horný štítok: čas, rýchlosť, Duch, Vek v jednom riadku (NOC prešla do Menu).
- Spodný panel (mesto) nižší, ikona a počet vedľa textu.
- Hrdina na výšku: suroviny v jednom pruhu hore, úlohy pod časom, ovládanie a Osadníci/Úlohy/Stavať v jednom stĺpci vpravo (nič sa neprekrýva).
- Menu na širokej obrazovke = panel vpravo (380 px), na mobile cez celú šírku hore.

## Krok 49 – jedno slnko, pokojná zem
- Slnko pre celú hru: zľava hore (tak ho nakreslila väčšina budov z Gemini). Všetky sprity osvetlené sprava (hlavná budova, stromy, kurín, seno, debny, ložiská, polia, ohnisko, mrazák, fakle…) sú zrkadlovo otočené (norm.py meria jas ľavej a pravej strany). Svetlá hlavnej budovy zrkadlené.
- Tiene všetkého smerujú doprava dole: budovy (sprPack), postavy (uhol -52), stromy, balvany, kríky, drobnosti – vrhaný tieň zo siluety (castSh/shTex) namiesto starých okrúhlych fľakov. Náhodné zrkadlenie drobností a podrastu zrušené.
- Budovy zjednotené: rovnaký kontrast a sýtosť (medián všetkých).
- Zem: preč tmavé machové a blatové fľaky (pliesli sa s tieňmi), menej veľkých škvŕn, slabšie tiene mrakov. Štrk už len ako námestie okolo ohniska (PLAZA). Blato pred vchodmi (hlavná budova, sklad, ohrady, stajňa, kováčňa, mlyn, sýpka, krčma, lom). Cestičky medzi domami si ľudia vyšliapu sami.

## Krok 50 – rovnaká ostrosť, zem bez pruhov
- Ostrosť sa meria nezávisle od kontrastu (|laplace| / rozptyl jasu). Predtým budovy 1,13 (chalúpka – rozmazaná) až 2,48 (zrub – ostrý). Teraz všetko na medián skupiny (budovy ~1,55, rozptyl 1,48–1,65): rozmazané sa doostria, príliš ostré sa jemne rozmažú. Stromy a drobnosti tiež každá skupina na svoj medián (norm.py).
- Zrušené tiene oblakov (staré podlhovasté pixelové aj nové mäkké) – aj pre staré uloženia. Ťahy štetcom na tráve menšie a okrúhlejšie.

## Krok 50.1 – kratšie tiene
- Tiene budov a stromov boli príliš dlhé a ploché (vyzerali ako pruhy na zemi). Teraz sú asi o polovicu kratšie, mäkšie a slabšie.

## Krok 50.2 – preč všetky pruhy na zemi
- Zrušené úplne: tiene oblakov (oboje) a ranná hmla (podlhovasté fľaky), aj zo starých uložení a z nastavení. Veľké škvrny v tráve ešte slabšie.

## Krok 50.3 – bez vrhaných tieňov
- Tmavé pásy pod budovami boli vrhané tiene budov. Zrušené: budovy majú len mäkký tmavší fľak priamo pod pôdorysom, stromy a kamene len malý tieň pri päte.

## Krok 51 – farebné zjednotenie (cozy/melancholické)
- Tráva prerobená: menej sýta, tmavšia, teplá olivovo-hnedá (už nie rozprávková zelená). Ťahy štetcom a stebielka v rovnakých tónoch.
- Osadníci teplejší (viac červenej a žltej, menej modrej).
- Pod budovami a okolo nich (~0,6 políčka) štrk alebo blato podľa typu: hlavná budova, lom, mlyn, veža, studňa = štrk; stajňa, sýpka = blato; sklad, domčeky, kováčňa, krčma, chalupy = mix. Štrk celkovo teplejší a tmavší, aby ladil s budovami.
- Poučenie: //-komentár v strede jednoriadkového kódu zakomentoval zvyšok riadku (hra nenaštartovala) – opravené, pravidlo platí.

## Krok 52 – okraj lesa a brehu
- Okraj lesa sa rozpadá: na okraji lesa redšie stromy (45 %→90 % hlbšie), pred lesom viac osamelých stromov (až 3,5 políčka von, čím bližšie, tým hustejšie).
- Zem pod lesom plynulo tmavne podľa spojitej vzdialenosti (forestD na úrovni pixelu), nie po políčkach.
- Breh: tráva zarastá do piesku nepravidelne, zubatý okraj po políčkach zmizol. Rozhranie voda/piesok zatiaľ po políčkach.

## Krok 53 – verzie a zmeny na úvode a loadingu
- Dole na loading obrazovke aj na úvodnej obrazovke je zbalený zoznam „Verzie a zmeny“ (najnovšia hore, ku každej verzii max. 4 body).
- Kým je zoznam otvorený, loading nezmizne (svet čaká, kým ho zatvoríš).
- Zoznam sa generuje z GAME.md skriptom clog.py pri každom kroku.

## Krok 54 – rieka, jaskyňa, skaly (AI sprity)
- Nové sprity: vchod do jaskyne s drevenými podperami (na mieste starého), skalné bralá pri okraji lesa (7 ks), 34 machových kameňov na brehu, trstina, mólo s loďkou pri rieke pod mlynom.
- Skaly, plošina pri jaskyni a most stlmené do tmavosivej, bez jasnozeleného machu.
- Nepoužité zatiaľ: kamenný most z listu (most má mechaniku opravy, prerobím ho zvlášť).

## Krok 54.1 – jaskyňa späť
- Sprite jaskyne z AI odstránený (nesedel do útesu), ostal pôvodný vchod v skale.

## Krok 55 – breh, kopce, zlato
- Rozhranie voda/piesok nepravidelné (šum v pixeloch), už nie čisté zuby po políčkach.
- Svahy kopcov: tlmenejšia hlina a tráva na hrane, svetlé lemy na zadných hranách vyvýšených políčok stmavené (už nesvietia ako čiary).
- Ložiská zlata menej žiarivé (sýtosť a jas dole).

## Krok 56 – bojové techniky Keepera (podľa videa)
- Rozbor videa (arthurmunozanimation, 3 triedy): ťažká kosa = otočka 360° + dopad na zem; ľadové kopije = skok zhora s dopadom + výpad; bojovník = úhyb kotúľom a rozrážanie zeme. Z toho 5 pohybov Keepera, rovnaké v Dev World (figuríny) aj v jaskyni (príšery).
- Úder ťuk = 3-kombo: Sek, Sek, KOSA (otočka 360°, zasiahne všetko okolo, väčšie dmg). Okno komba 0,8 s.
- Úder podrž (0,4 s, tlačidlo bliká, Keeper sa rozžiari) a pusti = DRVIVÝ ÚDER: dopad palicou pred seba, praskliny, otras obrazovky, veľké dmg, príšery odhodí a omráči.
- Oheň ťuk = ohnivá guľa (ako doteraz). Oheň podrž a pusti = OHNIVÝ DOPAD: Keeper vyskočí a dopadne na najbližšieho nepriateľa (do 5 políčok), kruh ohňa, otras, dmg okolo. CD 4 s.
- ÚHYB (nové tlačidlo namiesto Beh; Shift ťuk; v jaskyni Shift): rýchly úskok v smere pohybu, tieňové kópie za ním, chvíľu nezraniteľný. CD 0,9 s.
- Beh: joystick na doraz (>86 %) alebo Shift podržaný. Nad tlačidlami sa na chvíľu ukáže názov pohybu (Sek / Kosa / Drvivý úder / Ohnivý dopad / Úhyb).
- Príšery v jaskyni majú odhodenie (knockback) podľa sily úderu; po drvivom údere a dopade sú 1,2 s / 0,8 s omráčené.
- Čísla v MOVES (sekcia BOJ) – ľahko sa ladia. Pripravené pre dungeon: nepriatelia s telegrafovaným útokom, na ktorý sa dá reagovať úhybom.

## Krok 57 – dungeon s poschodiami a Strážca hlbín
- Jaskyňa = dungeon s poschodiami. Po vyčistení poschodia sa objavia schody hlbšie (vpravo); životy sa prenášajú. Hore vľavo / tlačidlo Von = návrat do dediny. Ukladá sa najhlbšie poschodie (WORLD.deep), na obrazovke „Poschodie N · najhlbšie X“.
- Poschodia 1–4: 1 slizy+chrobáky, 2 + kostlivci, 3 + šaman a truhla, 4 viac kostlivcov a šamanov. Poschodie 5 = BOSS (+ truhla). Potom cyklus pokračuje ťažšie (+50 % životov, viac príšer, šaman strieľa 3 strely).
- Kostlivec s mečom: priblíži sa, NAPRIAHNE sa (červený výsek 0,55 s), potom výpad. Dá sa uhnúť alebo prerušiť drvivým úderom (omráči).
- Šaman: drží odstup, kúzli (fialový kruh), strieľa strely. Na neho ohnivý dopad.
- STRÁŽCA HLBÍN (70 životov, pruh hore): opakuje 3 naučiteľné útoky, každý s výkrikom a varovaním:
  · DUPOT! – červená elipsa okolo neho 1 s → dopad (uteč z elipsy / úhyb).
  · NÁPOR! – červená čiara k hráčovi 0,85 s → rozbeh; keď narazí do steny, je 1,8 s OMRÁČENÝ (modrý) a berie dvojnásobné poškodenie.
  · KRUH DUŠÍ! – kruh svetiel → 10 striel do všetkých strán (prekĺzni medzerou / úhyb).
  · Pod 50 % životov vyvolá 2 kostlivcov („Vstaňte!“).
- Odmeny: kostlivci železo, šamani zlato, boss 6 železa + 5 zlata, truhla po bossovi vždy nález do skrýše + suroviny + výbava. Úspech „bosses“.
- Varovania útokov sú nad tmou, vidno ich vždy.

## Krok 58 – obnova mosta, prístav a krajšia rieka
- Most je prvá veľká stavba na obnovu, v 3 etapách (ťukni na most → tlačidlo etapy). Každú etapu postaví voľný osadník:
  1. Lešenie – 20 dreva: drevené lešenie s kladkou okolo prepadnutého stredu.
  2. Kamenný oblúk – 30 kameňa, 10 dreva: most je priechodný (ložiská a jaskyňa za riekou), na koncoch svietia lampáše.
  3. Prístav – 25 dreva, 15 kameňa, 4 železa: mólo, žeriav, bedne a sudy, lampáš, priviazaná loďka a rybárska loďka, ktorá sa plaví po rieke. Rybár prinesie každé ráno 4 ryby (jedlo).
- Nový obrázok mosta (dva kamenné oblúky) v 3 podobách: ruina so zrúteným stredom a troskami vo vode, lešenie, opravený most s novými kameňmi v strede.
- Rieka a more: breh je plynulá krivka namiesto schodíkov po políčkach, hĺbka plynule tmavne, pri brehu svetlá pena a mokrý piesok, vo vode jemné prúdy. Mriežka, výšky a chodenie ostali po políčkach.
- Starý save s opraveným mostom pokračuje od etapy Prístav. Nový úspech „Prístavník“, prístav dáva body do skrýše.

## Krok 59 – menu, klikanie a tlačidlá ako v AoE2
- Hlavné menu: tlačidlá Nová hra, Dev World a Nastavenia sú vycentrované a majú väčšie písmo.
- Ťuknutie na obyčajný terén (tráva, cestička, piesok, voda, kopec) už neotvára žiadne okno.
- Budovy majú malý panel priamo nad budovou ako v AoE2: názov a štvorcové tlačidlá (Zbúrať, Skrýša, Vstúpiť, Etapa mosta, Info). Popis sa ukáže až po ťuknutí na Info.
- Veľké balvany sa dajú označiť a vyťažiť. Je to veľké ložisko kameňa so 6 ťažbami a po čase dorastie.
- Sklad má pôdorys 6 × 4 v smere budovy, takže obrázok, mriežka a tieň už sedia na sebe (v Novej hre aj v Dev World).
- Tráva je tmavšia a tlmenejšia, s veľkými škvrnami, aby lepšie sedela k melancholickej nálade sveta.

## Krok 60 – zvuková krajina
- Celý zvuk je prerobený. Stále je všetko generované v hre (žiadne súbory). Zvuk je priestorový: každé miesto počuť z tej strany, kde je na obrazovke (stereo), zblízka jasne, z diaľky tlmene a s ozvenou.
  · Priblížené: hneď počuješ to jedno miesto a jeho rytmus – kováčňa klepe kladivom, mlyn vŕzga a šuštia mu krídla, pri studni rinčí reťaz a špľachne vedro, v stajni fŕka kôň, ovce bečia, sliepky kotkodákajú, v krčme štrngajú poháre a večer sa tam smejú, na veži pleská zástava, pri rieke šumí voda a špľachne ryba, v lese sa občas ozve vták. Oheň hučí potichu a praskne len občas.
  · Stred: celá dedina naraz, každé miesto tichšie.
  · Oddialené: tichý vzduch a jemná vrava dediny z diaľky, žiadny hukot.
- Príroda: vtáky len občas (štebot, trilkovanie, drozd, vrana, ráno kukučka). V noci sova, cvrčky v dávkach a žaby pri vode. Pri mori čajky. Vietor prichádza v nárazoch a rozhýbe aj lístie a mlyn.
- Plánovač púšťa zvuky po jednom s prestávkami, najviac dva naraz, ten istý zdroj sa neopakuje hneď. Nikdy nejde všetko naraz.
- Zvon na hlavnej budove o 7:00, 12:00 a 18:00. Ráno zakikiríka kohút. V noci občas zabreše pes.
- Jaskyňa a pivnica majú vlastnú atmosféru: dutý vietor, hlbina, kvapkanie, občas hrmot. Boj má zvuky: švih, otočka, zásah, drvivý úder, ohnivá guľa, ohnivý dopad, úhyb, zranenie, smrť príšery, rev bossa, strely, truhla, schody.
- V menu je posuvník Hlasitosť (pamätá sa). Zvuk sa stlmí, keď hra nie je na obrazovke.
- Hudba (3 skladby na výber) príde v ďalšom kroku.

## Krok 61 – profesie osadníkov a nové menu Osadníci
- Každý osadník má profesiu: Voľný, Drevorubač, Kameník, Zberač alebo Baník. Profesia platí natrvalo (uloží sa), osadník ju cez pracovný deň (8:30–17:00) sám robí: drevorubač rúbe najbližšie stromy, kameník láme kameň (aj veľké balvany), zberač zbiera bobule a jablká, baník ťaží železo a zlato (za mostom až po oprave).
- Voľní: v Novej hre pomáhajú tam, kde čoho je najmenej; v Dev World žijú bežný deň.
- Menu Osadníci (prerobené): hore prehľad profesií s počtom a tlačidlami − / + (ako rozdelenie robotníkov v AoE2), pod tým zoznam ľudí – ťuknutím na meno skočíš na osadníka, ťuknutím na profesiu ju zmeníš (5 tlačidiel). Stáli obyvatelia (Keeper, nosič, drevorubač z chaty) sú zvlášť.
- Karta osadníka ukazuje jeho profesiu.
- Plán budov (dohodnuté): budovy ako v AoE2 = odkladisko + jednorazové vylepšenia natrvalo. Sklad zvýši kapacitu surovín (suroviny nebudú neobmedzené). Sýpka sa spojí s mlynom. Studňa bude dekorácia. Strážna veža bude chrániť pred zriedkavými útokmi príšer z jaskyne a dungeonov.

## Krok 62 – kapacita skladu, odkladiská a premenovanie osadníkov
- Suroviny už nie sú neobmedzené. Zmestí sa: hlavná budova 60 + sklad (I: 100, II: 250, III: 500) z každej suroviny. Jedlo navyše +60 za každý mlyn. Pod číslom suroviny je tenký pruh, ako je sklad plný; plný sklad je červený a hra raz za čas upozorní.
- Sklad sa dá rozšíriť v jeho paneli (Rozšíriť): II za 40 dreva a 20 kameňa, III za 80 dreva, 60 kameňa a 5 železa.
- Odkladiská ako v AoE2: osadník nesie suroviny na najbližšie miesto – sklad a hlavná budova berú všetko, mlyn jedlo, lom kameň a rudu, chata drevorubača drevo. Kam budovu postavíš, rozhoduje o tom, ako rýchlo sa pracuje.
- Sýpka je spojená s mlynom (mlyn má sýpku, sýpka sa už nestavia; staré sýpky fungujú ako mlyn).
- Panel budovy má riadok, na čo je dobrá (napr. „odkladisko jedla · +60 miesta na jedlo“).
- Osadníka sa dá premenovať: Osadníci → ťukni na jeho profesiu → napíš meno → Premenovať. Meno sa uloží.

## Krok 63 – vylepšenia v budovách (ako v AoE2)
- Budovy majú vylepšenia: kúpiš raz v paneli budovy a platia natrvalo (uloží sa). Hotové vylepšenie má zelenú fajku. Info v paneli vypíše, čo ktoré robí.
  · Hlavná budova: Fúrik (50 dreva, 40 jedla) – z každej cesty +1 surovina. Tkáčstvo (60 jedla, 40 dreva) – osadníci chodia o 15 % rýchlejšie.
  · Chata drevorubača: Lepšia sekera (40 dreva, 20 kameňa) – stromy o 25 % rýchlejšie. Píla (90 dreva, 40 kameňa, 3 železa) – z každého stromu +1 drevo.
  · Lom: Kamenárstvo (50 dreva, 30 kameňa) – kameň o 25 % rýchlejšie. Šachta (80 dreva, 80 kameňa, 2 železa) – z rudy +1 železo/zlato, v kameni častejšie železo.
  · Mlyn: Konský záprah (60 dreva, 50 jedla) – polia a mlyn o 30 % rýchlejšie. Striedanie plodín (100 dreva, 80 jedla, 2 železa) – zberači +2 jedla z cesty.
  · Kováčňa: Kovaný meč (4 železa, 20 dreva) – Keeper +1 poškodenie v jaskyni. Krúžková zbroj (6 železa, 20 kameňa) – Keeper +4 životy.
  · Stajňa: Ťažné kone (60 jedla, 40 dreva) – nosič Ondro o 40 % rýchlejší.
- Panel budovy: najprv hlavná akcia, potom vylepšenia, Info a Zbúrať na konci.

## Krok 64 – nájazdy, obchodná loď a nekonečná hra
- Hra nemá koniec ani víťazstvo. Svet ostáva navždy (uložený), bossovia sú stále silnejší.
- Nájazdy: po oprave mosta raz za 4–7 dní v noci (21:30–23:30) vyliezu z jaskyne príšery (sliz, chrobák, kostlivec) a idú k skladu. Keď tam dôjdu, ukradnú kus jedla, dreva a zlata. Zastaviť ich môžu strážne veže (strieľajú šípy do 9 políčok) a Keeper (údery, ohnivá guľa). Kostlivec občas nechá železo. S každým dňom je ich viac a sú silnejšie. Úspech „Obranca dediny“.
- Obchodná loď: po dokončení prístavu pripláva každý tretí deň (8:00–18:00). Ťukni na prístav: predať drevo, kameň alebo jedlo za zlato, kúpiť železo alebo jedlo. Každý obchod najviac 3× za návštevu. Keď loď nie je, panel ukáže, kedy príde. Úspech „Kupec“.
- Nekoneční bossovia: každé 5. poschodie je boss a každý ďalší je oveľa silnejší (životy ×1,9 za cyklus, viac poškodenia, rýchlejší, iná farba): Strážca hlbín, Pán kostí, Kráľ mŕtvych, Prastarý z hlbín, Hladný tieň, Ten, čo nespí… a potom II, III… Neskôr sú prakticky nezabiteľní – rekord je, kam sa dostaneš.
- Míľniky osady (v Úlohách): oprav most, prístav, Doba kamenná, Doba železná, poraz bossa na 10. poschodí, Div sveta. Pod nimi rekordy: najhlbšie poschodie, porazení bossovia, najsilnejší porazený, odrazené nájazdy. Karta úloh hore ukazuje ďalší míľnik.
- Div sveta „Plameň predkov“ (3×3, 300 dreva, 250 kameňa, 60 zlata, 20 železa, stavia sa dlho): obrovský obelisk s večným ohňom. Odomkne sa v Dobe železnej po porážke bossa na 10. poschodí. Je to najväčšia stavba, hra po nej pokračuje.

## Krok 65 – UI v štýle AoE2
- Horná lišta ako v AoE2: kamenný pás na celú šírku so surovinami (ikona, číslo, pod ním tenký pruh naplnenia skladu) a vedľa deň a čas, rýchlosť, vek a duch osady. Na mobile na výšku dva riadky, na šírku jeden.
- Pod lištou úzky riadok „▸ ďalší míľnik“ s počtom úloh – ťuknutím otvoríš Úlohy a úspechy. Veľká karta úloh je preč.
- Spodný panel ako v AoE2: drevený pás na celú šírku so štyrmi tlačidlami Osadníci, Stavať, Úlohy a Menu (ikony s popisom, zlatý rám keď je otvorené). Suroviny už nie sú dole.
- Pravý stĺpec má len dve tlačidlá: kamera späť (terč) a prepínač Hrdina/Mesto s ikonou. Všetky tlačidlá v hre majú rovnaký vyrezávaný drevený štýl so zlatým lemom.
- Panely (Osadníci, Stavať, Menu, hlásenia) majú rovnaký drevený rám a pixelové písmo nadpisov. Režim hrdinu: spodný panel sa zmení na stĺpec ikon vpravo, aby nezavadzal joysticku.
- V jaskyni sa horná lišta skryje; miestnosť je na mobile v strede obrazovky (predtým bola v rohu).

## Krok 66 – nahrávky lesa, rieky, zvona a rána
- Do hry pribudli štyri nahrávky (zmenšené, aby hra ostala jeden súbor): les, rieka, kostolný zvon a ranný motív.
- Les a rieka hrajú ako plynulé slučky bez švu, veľmi potichu v pozadí. Prelínajú sa pomaly (1–2 s), takže pri prechádzaní kamerou nič necvaká ani sa neprepína. Rieku počuť, len keď si pri nej; les, keď si pri lese. Z výšky ostane len jemný vánok a slabý náznak lesa.
- Zvon na hlavnej budove (7:00, 12:00, 18:00) je teraz skutočný kostolný zvon. Ráno o 6:00 zaznie krátky ranný motív.
- Jaskyňa má stále vlastnú atmosféru, ktorá sa načíta len v nej.
- Horná lišta na mobile: druhý riadok (deň a čas vľavo, rýchlosť, vek a duch vpravo) je zarovnaný na celú šírku.

## Krok 67 – ďalšie nahrávky, pokojnejšia kamera, auto aim
- Nové nahrávky (zmenšené slučky bez švu): oheň, vrava ľudí, temná atmosféra dungeonu a hudba bossa.
  · Oheň je oveľa tichší a počuť ho len pri ohnisku (starý syntetický oheň a praskanie sú preč).
  · Vrava ľudí: pri krčme, pri hlavnej budove cez deň a večer pri ohni; z výšky jemne celé mesto naraz.
  · Dungeon: temná atmosféra hrá len v jaskyni (v pivnici veľmi potichu), v dedine sa nenačíta.
  · Hudba bossa hrá len kým boss žije, potom pomaly stíchne.
- Obrazovka sa pri útokoch už skoro netrasie (otrasy znížené na zlomok, pri vlastných útokoch len jemný náznak).
- Nočná tma má okraj navyše, takže pri rýchlom behu alebo pohybe kamery už na bokoch nevidno deň.
- Auto aim: Keeper sa pri údere a drvivom údere sám otočí k najbližšiemu nepriateľovi (príšery z nájazdu majú prednosť pred panákmi). Keď je cieľ do ~4,5 políčka, Keeper k nemu urobí rýchly výpad a hneď udrie. Funguje v dedine aj v jaskyni (tam výpad sleduje pohybujúcu sa príšeru). Úder má o niečo väčší dosah.

## Krok 68 – čistejšie okná, len jedno naraz
- Naraz je otvorené len jedno okno: keď otvoríš Osadníkov, Stavať, Menu alebo ťukneš na budovu, ostatné sa samé zavrú. Ťuknutie na mapu zavrie otvorené okno (aj Menu).
- Pri stavaní sa okno budovy aj zoznam Stavať zavrú a ostane len úzka lišta „ťukni, kam postaviť“ hore pod míľnikom (predtým sa na mobile roztiahla cez celú obrazovku).
- Okná, panely a tlačidlá sú plné (nepriesvitné), mapa už cez ne nepresvitá. Menu a lišta stavania majú rovnaké drevené tlačidlá ako zvyšok hry a sú vždy nad bočným stĺpcom.
- Chata drevorubača v Novej hre má správny obrázok (predtým sa namiesto nej ukázal čierny štvorec).
- Nastavenie „Panel úloh v rohu“ sa volá „Riadok s míľnikom hore“.

## Krok 69 – oprava „zaseknutej“ mapy a jasnejšie chýbajúce suroviny
- Oprava: niekedy si hra myslela, že na obrazovke ostal ležať prst (napr. po ťuknutí na tlačidlo v okne). Potom ťahanie jedným prstom mapu nepresúvalo, ale približovalo a oddiaľovalo. Hra teraz sama počíta skutočné prsty na obrazovke a „zabudnutý“ dotyk zahodí – jeden prst vždy posúva mapu, dva prsty približujú.
- Keď na niečo nemáš suroviny (etapa mosta, budova, vylepšenie, sklad, obchod), hláška presne napíše, čo chýba, napr. „Chýba ešte: 12 kameňa (cena: 30 kameňa · 10 dreva)“.
- Pripomienka cien mosta: Lešenie 20 dreva · Kamenný oblúk 30 kameňa + 10 dreva · Prístav 25 dreva + 15 kameňa + 4 železa.

## Krok 70 – hlásenia vľavo hore, na šírku bez spodnej lišty, krajšie ovládanie
- Hlásenia (úspechy, noví osadníci, nájazdy…) sú malé a kompaktné vľavo hore pod míľnikom, najviac 4 naraz, a ostanú dlhšie (6,5 s), aby sa dali prečítať. Prídu a odídu plynulo zboku.
- Na mobile na šírku: spodný panel zmizne a jeho štyri tlačidlá (Osadníci, Stavať, Úlohy, Menu) sú malé ikony vpravo v hornej lište – ako menu v AoE2. Dole je voľno pre mapu, joystick a útoky. Okná (Osadníci, Stavať…) sa na šírku otvárajú vpravo, mapa ostane vidieť.
- Ovládanie hrdinu v štýle hry: okrúhle drevené tlačidlá so zlatým lemom (Úder väčší so zlatým, Oheň s ohnivým lemom), bez klávesových skratiek na mobile. Joystick je bronzový kruh s tmavým podkladom.
- Opravené prepočty výšky lišty pri zmenšenom UI (riadok s míľnikom sa už neschová pod lištu). Počty na tlačidlách dole sú v malom odznaku, neprekrývajú text.

## Krok 71 – úvod pre nového hráča + hra na GitHub Pages
- Nová hra začína krátkym návodom (7 krokov) v drevenom okienku dole: Osadníci → pridaj drevorubača → Stavať → postav chatu drevorubača pri lese → ťukni na hlavnú budovu (vylepšenia) → riadok s míľnikom. Každý krok čaká, kým to naozaj urobíš, a tlačidlo, na ktoré treba ťuknúť, zlato bliká. Dá sa kedykoľvek preskočiť; v Menu je tlačidlo Návod na zopakovanie.
- Hra žije aj mimo Claude na GitHub Pages: https://offthewallhack.github.io/usage-of-empires/ (repozitár OffTheWallhack/usage-of-empires). Každý nový krok sa nahrá aj tam.

## Krok 72 – hra pre hráčov: deň ×1, vyššie ceny, plynulejší mobil, ikona na plochu
- Nová hra beží vždy normálnou rýchlosťou ×1. Tlačidlá rýchlosti a preskočenia noci sú len v Dev World (na testovanie).
- Keďže sa v hre nedá zomrieť, postup je dlhší: v Novej hre stojí všetko oveľa viac.
  · Budovy ×3 (napr. chata 60 dreva, krčma 90 dreva + 50 kameňa, píla 225 dreva + 100 kameňa + 8 železa), div ×1,5 (450 dreva, 375 kameňa, 90 zlata, 30 železa).
  · Vylepšenia ×2,5, sklady ×2 (Sklad II 80 dreva + 40 kameňa, Sklad III 160 dreva + 120 kameňa + 10 železa), veky ×2, dekorácie ×2.
  · Most ×3: Lešenie 60 dreva · Kamenný oblúk 90 kameňa + 30 dreva · Prístav 75 dreva + 45 kameňa + 12 železa.
  · Chata drevorubača na začiatku potrebuje 24 dreva.
  · Dev World má staré (lacné) ceny.
- Mobil: hra sa kreslí najviac v dvojnásobnom rozlíšení (predtým až trojnásobnom) – menej záťaže, plynulejší chod a menej zahrievania, obraz stále ostrý.
- Ikona na plochu: keď si stránku na GitHub Pages uložíš na plochu telefónu (Safari: Zdieľať → Pridať na plochu, Chrome: ⋮ → Pridať na plochu / Inštalovať), má ikonu s logom hry a názov „Empires“. Na Androide sa otvára na celú obrazovku ako aplikácia.

## Krok 73 – oprava okna staveniska + chodníky pod všetkými
- Oprava: okno rozostavanej budovy (napr. chata drevorubača – staveniško) sa už nenaťahuje cez pol obrazovky. Je malé a stojí nad stavbou so šípkou, ako okná ostatných budov. Rovnako všetky ostatné jednoduché okná (osadník, staveniská…).
- Hláška pri položení chaty drevorubača ukazuje správnu cenu (24 dreva).
- Chodníky sa vychodia pod všetkými – osadníci, drevorubači, nosič aj Hrdina. Nosič s fúrikom ušliape len o trochu viac (2×, predtým 3×), takže chodník nevznikne len za fúrikom.
- Cestička rastie pomaly a postupne (4 štádiá: 6 / 18 / 45 / 100 krokov) a keď tadiaľ nikto nechodí, pomaly zarastie.
- Ľudia si radšej vyberajú už trochu ušliapanú trávu (aj skôr, než je vidno prvé štádium), takže sa chôdza zbieha do pár prirodzených chodníkov tam, kade naozaj často chodia.
- Nové farby: tmavšia hnedá hlina, v strede vychodeného chodníka ešte tmavšia, sem-tam kamienok, okraj je suchá olivová tráva (predtým svetlá oranžová hlina a jasne zelený lem).

## Krok 74 – menej pamäte a záťaže (proti zasekávaniu na mobile)
- Hľadanie príčiny: samotná logika hry (osadníci, cesty, úlohy) zaberie len okolo 1 ms za snímku, takže zasekávanie robí najmä pamäť a grafika. Hra mala v pamäti ~70 MB zvukov a ~80 MB obrázkov mapy, čo je na telefóne veľa.
- Zvuky: nahrávky sa načítajú po jednej s pauzou (predtým všetky naraz po prvom ťuknutí). Ukladajú sa mono a v nižšej kvalite (zvuky okolia sú aj tak tlmené). Hudba bossa ostáva stereo. Spolu ~14 MB namiesto ~70 MB.
- Temná atmosféra dungeonu a hudba bossa sa načítajú až pri prvom vstupe pod zem.
- Slučky, ktoré práve nie je počuť (vietor, rieka, cvrčky, jaskyňa…), sa po chvíli ticha úplne odpoja a telefón ich nepočíta. Keď majú znova hrať, samy sa pripoja.
- Cestičky: predtým sa pri každej zmene posielal do grafiky obrázok celej mapy (13 MB). Teraz je mapa cestičiek rozdelená na malé dlaždice a posiela sa len tá, ktorá sa zmenila, najviac 2× za sekundu.
- Trblietanie vody je len vo výreze s riekou, nie cez celú mapu. Mriežka sa vytvorí až keď ju zapneš.
- Grafika mapy zaberá ~52 MB namiesto ~83 MB.
- Poistka: ak telefón hre vezme grafiku (obraz by zamrzol) a do 4 s ju nevráti, hra sa sama uloží a znova načíta.
- Návod: „Ukážem ti v pár krokoch“ (predtým nesprávne „v 5 krokoch“, krokov je 7).
- Kontrola celej hry: nájazd, obchodná loď, vylepšenia, návod, profesie, dungeon s bossom a truhlou – bez chýb.

## Krok 75 – oprava zamŕzania, záloha sveta, hra bez internetu, hudba, nový most
- **Oprava zamŕzania:** hra po pár sekundách zamrzla kvôli chybe z Kroku 73. Hľadanie cesty pri chodníkoch počítalo s desatinnými číslami, ktoré sa pri ukladaní nepatrne zaokrúhľovali. Osadník potom skúšal tú istú cestu stále dookola (až 1,9 milióna krokov namiesto pár tisíc). Teraz sa počíta len s celými číslami. Test: 16 herných dní bez jediného zaseknutia.
- **Záloha sveta** (Menu → Záloha sveta):
  · „Uložiť zálohu“ vytvorí súbor (napr. `usage-of-empires-svet-den5-2026-10-20.json`). Na telefóne sa otvorí ponuka zdieľania – dá sa uložiť do Súborov alebo poslať kamarátovi. Na počítači sa stiahne.
  · „Nahrať zálohu“ – vyberieš súbor, hra ukáže, z ktorého dňa je, a po ťuknutí na „Naozaj nahrať“ ním nahradí terajší svet.
  · Záloha z Novej hry sa dá nahrať aj do Dev World a naopak.
- **Hra z plochy aj bez internetu** (GitHub Pages): po prvom otvorení sa hra uloží do telefónu. Potom sa otvorí aj bez internetu. Keď internet je, vždy sa načíta najnovšia verzia.
- **Hudba, ktorá prekvapí** (ako v Minecrafte): prvá pesnička príde po 3–6 minútach hrania, ďalšie zriedka, raz za 10–20 minút. Cez deň hrá dedinská pesnička, v noci jedna z dvoch nočných. Po porazení bossa zahrá víťazná pieseň. V jaskyni dedinská hudba jemne stíchne. V Menu je tlačidlo Hudba / Bez hudby. Hudba sa sťahuje až keď má hrať, takže nespomaľuje načítanie. V Claude artefakte hrať nemusí, na GitHub stránke áno.
- **Nový most z Gemini** (hotová verzia, od opravy oblúka ďalej): kamenný most s tromi oblúkmi, schodmi na oboch brehoch, zábradlím a brečtanom. Rozpadnutý most a most s lešením zatiaľ zostávajú staré, kým nepošleš nové.
- **Vyváženie začiatku:** voľní osadníci v Novej hre teraz zbierajú, kým nie je sklad skoro plný (predtým prestali pri ~100 dreve a ~50 kameni, čo pri nových cenách nestačilo). Simulácia so 4 osadníkmi bez zásahu hráča: ~16 dreva a ~15 kameňa za herný deň (6 minút). Lešenie na moste je tak reálne okolo 2. dňa, kamenný oblúk okolo 5. dňa, s chatou drevorubača a viac ľuďmi skôr.

## Krok 76 – hra pripravená na betu + všetky štádiá nového mosta
- **Most:** rozpadnutý most a most s lešením sú teraz z tej istej grafiky ako nový hotový most z Gemini. Pri rozpadnutom chýba stred s oblúkom a v rieke ležia kamene. Pri lešení je cez dieru drevená lávka na stĺpoch so zábradlím. Všetky tri štádiá na seba sedia.
- **Čo je nové:** po aktualizácii hry sa hráčovi, ktorý už hral, raz ukáže okno so zmenami z posledných verzií. Nový hráč ho nevidí, začína návodom. V Menu je tlačidlo „Čo je nové“ na zopakovanie.
- **Nahlásiť chybu** (Menu): pripraví text s verziou hry, svetom, dňom v hre, telefónom, rozlíšením, plynulosťou a poslednými chybami, ktoré hra zachytila. Na telefóne sa otvorí ponuka zdieľania (správa, mail, IG…), inde sa text skopíruje alebo ukáže na skopírovanie.
- **Hlavné menu → „Hra na mobile · beta“:** krátky návod, ako hru pridať na plochu (iPhone aj Android), že ide aj bez internetu, ako si zálohovať svet a ako nahlásiť chybu.
- README na GitHube prepísané pre hráčov (ako hrať na mobile, beta, záloha, chyby).

## Krok 77 – oprava horného a spodného panelu na malých telefónoch
- Spodný panel na výšku: číselný odznak (počet osadníkov, úloh) sa už nezobrazuje v strede tlačidla cez názov („Osadníci“, „Úlohy“), ale v jeho pravom hornom rohu.
- Horná lišta na šírku (do šírky 820 px, napr. iPhone SE a menšie Androidy): písmo a tlačidlá sú o niečo menšie a bunka s počtom ľudí je širšia, takže „4/4“ ani „15/15“ sa už neodrezávajú. Skúšané na 667×375 a 740×360 v Novej hre aj v Dev World (aj s trojcifernými surovinami).
- Prejdené rozlíšenia: 667×375, 740×360, 844×390, 932×430 na šírku a 360×640, 375×667, 390×844, 430×932 na výšku. Inde sa nič neorezáva.

## Krok 78 – Rozcestie pod Prastarým stromom (prvý minisvet mimo dediny)
- **Východ z dediny:** na západnom okraji lesa je nová lesná cesta s drevenou bránou a lampášom. Vedie od dediny na rozcestie. Hrdina (Keeper) prejde bránou pešo a hra ho prenesie na rozcestie. Späť sa vráti tou istou cestou a postaví sa za bránu v dedine.
- **Prastarý strom:** obrovský starý strom s dutinou, v ktorej slabo svieti. Jeho koruna vyčnieva nad lesom nad bránou, takže ho vidno aj z dediny. Neskôr z neho môže byť nehybná postava, ktorá pamätá históriu dediny.
- **Rozcestie:** malá čistina v lese s rozcestníkom v strede, štyri cesty, jazierko a lístie padajúce z koruny. Zodpovedá dennému aj nočnému času: v noci je tma a lampy pri ceste domov svietia.
- **Tri cesty sú zatiaľ zatarasené:** spadnutý kmeň, balvany a ohrada. Keď sa k nim hrdina priblíži, hra povie, že sa tadiaľ zatiaľ nedá. Na rozcestníku sú obrázky (hora, vlna, veža), ktoré neskôr môžu ukazovať na ďalšie minisvety. Otvorená je len cesta domov, označená domčekom.
- **Ovládanie:** ako v jaskyni (ťuknutie alebo držanie prsta, šípky, WASD). Hore je tlačidlo „Späť do dediny“.
- Svet sa tým začína deliť na malé časti: dedina, jaskyňa a rozcestie. Do uloženia hry sa pridalo len počítadlo návštev a poznámka, že hrdina strom už videl.
- **Rovnaký vzhľad ako dedina:** les na okraji rozcestia je z tých istých stromov (dub, smrek, jeseň) ako vo svete dediny. Kamene, kmene, debny, sudy, kríky, papraď, trstina a fakle sú tiež pôvodné obrázky z dediny. Tráva má rovnakú farbu. Cesty sú prirodzene zarastené a zátarasy sú z vecí, ktoré poznáš z dediny. Čistina je väčšia (13×13 políčok), aby bolo medzi stromami miesto.
- **Vlastná grafika len pre tri veci:** Prastarý strom, brána a rozcestník sú kreslené kódom v palete dediny. Sú pripravené ako PNG na prípadné prekreslenie cez Gemini.
- Skúšané: vstup a návrat v Novej hre aj v Dev World, deň aj noc, na výšku aj na šírku, regresné testy a dungeon prešli bez chýb.

- **Prastarý strom z Gemini** – tvoj render som vystrihol a previedol do rovnakého pixelového štýlu ako ostatné sprity (rovnaká paleta, ostrosť). Stojí na rázcestí a jeho korunu vidno aj nad bránou v dedine.
- **Tunel (vľavo hore)** – tvoj obrázok tunela je tiež v pixelovom štýle a stojí na ľavej hornej ceste. Cesta je zatiaľ zatarasená kmeňmi, takže sa tadiaľ nedá ísť.
- **Jaskyňa (vpravo hore)** – tvoj obrázok jaskyne je v pixelovom štýle na pravej hornej ceste rázcestia (oproti tunelu). Cesta k nej je zatiaľ zavalená balvanmi.
- **Zmena mapy rázcestia** – cesta do dediny teraz vedie vľavo dole (obyčajná poľná cesta). Vpravo dole je jazero (neskôr oceán) so skleneným tunelom do mesta pod vodou. Tunel je rozbitý a plný vody, treba k nemu neskôr sací stroj. Ukazovateľ na rázcestí je prehodený podľa toho.
- **Rázcestie je väčšie a vzdušnejšie** – mapa 16×16 (pôvodne 13×13), strom je ďalej od rohu, jaskyňa a tunel sú zasunuté hlbšie do steny, jazero je ďalej od rázcestníka. Viac kríkov a tráv.
- **Vodný tunel nakreslený od nuly** – vlastný pixel-art (sklenená trubica s kamennými oblúkmi, riasy vo vnútri, jeden oblúk a kus skla rozbité, odpadnuté kamene a pena). Ide z brehu do jazera.
- **Vodný tunel kontrastnejší** – tmavý obrys, ostrejšie tiene a svetlé odlesky na skle, hrubšia textúra kameňa, sýtejšie riasy, aby ladil s ostatnými spritmi.
- **Oprava: joystick na rázcestí** – na dotykovom zariadení hra brala dotyk ako „choď k miestu dotyku“, preto hrdina vždy šiel späť k ceste domov (palec je dole vľavo). Teraz je tam rovnaký joystick ako v dedine. Myš funguje ďalej klikom.
- **Zoom sa pamätá medzi obrazovkami** – rázcestie už nie je "oddialené na celú mapu"; použije rovnaký zoom, aký máš v dedine (ten istý, pri ktorom sú sprity rovnako veľké). Zoom sa dá meniť aj na rázcestí (štípnutie, koliesko, +/−) a po návrate do dediny ostane taký istý.
- **Zosúladenie rázcestia** – všetky dovezené sprity (strom, jaskyňa, tunel, vodný tunel) prešli jedným spoločným sfarbením podľa palety dediny (rovnaký jas, nižšia sýtosť). Strom je zrkadlovo, aby mal svetlo sprava zhora ako ostatné sprity. Jaskyňa má nerovný spodný okraj (nie rovný rez). Pod jaskyňou, tunelom a vodným tunelom sú tiene, cesty sú dotiahnuté až k ústiam s vyšliapaným miestom, kmene ležia krížom cez cestu, kopa balvanov pred jaskyňou je väčšia, rázcestník je o štvrtinu väčší a jazero o niečo tmavšie.
- **Rázcestník ukazuje k východom** – štyri tabule sú nakreslené v izometrii a každá smeruje presne k svojej ceste: hore vľavo tunel (hora), hore vpravo jaskyňa (oblúk), dole vpravo voda (vlnky), dole vľavo domov (zlatá, domček).
- **Rázcestník vymazaný** – zakrýval strom. V strede je namiesto neho malé ohnisko pútnikov s lavičkou a kmeňom; oheň horí a v noci svieti do okolia. Pri ňom hra napíše, že tri cesty sú zatarasené a zatiaľ vedie len cesta domov.

## Krok 79 – Ladenie na počítači (myš, okná, písmo) + väčšia skrýša

- **Zoom, joystick a rázcestie** – rázcestie používa rovnaký zoom ako dedina (pamätá sa medzi obrazovkami), má dotykový joystick; ohnisko pútnikov namiesto rázcestníka.
- **Počítač (myš + široká obrazovka):** okná „Čo je nové“, „Skrýša“ a ďalšie celoobrazovkové panely sú teraz okno v strede s väčším písmom (nie na celú obrazovku). Vľavo hore je **zoznam úloh v štýle questov** (míľnik + 4 otvorené úlohy s počtom), namiesto celoširokého pásika. Tlačidlá hrdinu (Úhyb · Oheň · Akcia · Úder) sú dole v strede ako **hotbar** s klávesmi (Shift · Q · E · Space). Myš pri okraji obrazovky posúva mapu (ako v AoE). V režime hrdinu **ľavý klik na voľnú zem = choď tam** (pravý klik funguje ako doteraz), aj keď nad políčkom trčí strecha budovy.
- **Verzia hry** („Nová hra · Krok 79 · mapa 80 × 80“) už nie je vľavo hore, je dole v Menu.
- **Čísla** – pixelové písmo malo nečitateľné číslice (7 ako 1, 9 ako 8, 6 ako 8). Číslice sú teraz z vlastného malého pixelového písma s jasnými tvarmi; písmená ostali. Terminálové písmo (VT323) je všade o 10 % väčšie.
- **Grafika a efekty** – v nastaveniach ostali len 4 voľby: Ostré textúry, Zrno, Stmavené okraje, Žiara svetiel v noci. Východzie je **iba Ostré textúry** (zrno robilo vlnu cez obraz a brzdilo grafiku); staré uloženia sa prepnú na nové východzie.
- **Deň : noc = 5 : 1** – cez deň (5–20 h) bežia hodiny 3× pomalšie, noc ostala ako bola. Jeden herný deň trvá cca 13,5 minúty (predtým 6).
- **Drevorubači** – les je priechodný (osadníci chodia medzi stromy, len hlboký les na okraji sveta nie), takže sa dostanú k ďalším stromom; hľadajú ďalej a berú len stromy s voľným susedným políčkom. Nasekané drevo nesú **pred chatu drevorubača** (odtiaľ ho fúrik vezie do skladu); keď je pred chatou plno (12), idú do skladu/haly.
- **Kríky a tráva** – podrast (kríky, papraď, trsy) je prifarbený k tráve, už nevyzerá ako sivé kamene.
- **Skrýša pod halou je väčšia a honosnejšia** – 9×9 (predtým 6×6), kamenná dlažba, veľký karmínový koberec so zlatým lemom, piliere, zástavy, luster so sviečkami, 4 fakle, truhlice, sudy a debny. **Schody vľavo dole vedú von** – stačí k nim prísť (tlačidlo Hore ostáva). Chodí sa klikom, klávesmi WASD/šípkami aj joystickom.
- Nepodarilo sa mi zopakovať: osadníci sa po zmene profesie v noci „objavia pri ohnisku“ – v teste ostali v posteliach. Ak sa to stane znova, napíš, o koľkej (hodina v hre) a či spali.
- **Úsporný režim pre slabý počítač** – prepínač je na úvodnej obrazovke aj v Menu (obnoví stránku). Hra sa kreslí v nižšom rozlíšení (1×), bez celoobrazovkového shadera (ostré textúry, zrno, farba dňa), bez vinety, bez padajúceho lístia, svetlá v noci sa prekresľujú zriedkavejšie a prehliadač dostane pokyn použiť výkonnú grafiku. V Menu pri verzii hry je vidno aktuálne fps.

## Krok 80 – väčšie ovládanie na počítači a čitateľné ceny stavieb
- Na počítači (okno širšie ako 900 px) je ovládanie predvolene o 50 % väčšie: horná lišta so surovinami, ikonky, tlačidlá aj okná. Kto mal staré predvolené nastavenie 100 %, dostane 150 % raz; potom si to vie zmeniť v Menu → Nastavenia (posuvník ide teraz do 200 %).
- Cena stavby je pri budove čitateľná: tlačidlo v okne budovy sa rozšírilo a cena je väčším písmom (napr. „Kamenný oblúk – 30 kameňa · 10 dreva“). Platí aj na mobile.
- Na počítači sa pri otvorenej karte budovy už pod zoznamom úloh neukazuje duplicitný pás s úlohou.
- Posuvník „Veľkosť ovládania“ ide teraz 50–200 %. Prejdené: 1440×800 a 1280×720, režim Hrdina aj Mesto, obnova mosta (etapa 1 aj 2), mobil na šírku sa nezmenil.
- **Hudba (bardcore)** – 5 nových pesničiek v `music/` (prekódované na 112 kb/s, spolu 19 MB, hra ich sťahuje z GitHub Pages, nie sú v HTML). Každá začne potichu a pomaly zosilnie, dohrá do konca: *Dancing in the Moonlight* pri otvorení hry (po prvom ťuknutí, 20 s nábeh); *Paranoid*, *Thunderstruck* a *Killing in the Name* v dungeone (náhodne, 8 s nábeh, ďalšia o 1–2,5 min, pri bossovi stíchne a hrá bossova hudba, po odchode z jaskyne doznie); *Nothing Else Matters* občas v noci (v nočnom výbere s pôvodnými nočnými, 25 s nábeh). Tlačidlo Hudba/Bez hudby a hlasitosť platia aj na ne.
- **Smrť v dungeone** – po smrti hra zamrzla (jaskyňa sa zastavila uprostred snímku a dedina sa už neobnovila). Opravené: po páde sa jaskyňa vypne čisto a dedina beží ďalej.
- **Ovládanie myšou ako v AoE / Dote** – v režime Hrdina na počítači: ľavý aj pravý klik na zem = choď tam; **držanie pravého tlačidla** = hrdina ide za kurzorom, kým ho držíš.
- **Úvodné menu v štýle Hearthstone Battlegrounds** – tmavá krčma so svetlom sviečok, veľká drevená tabuľa so zlatým lemom, vľavo logo a karta hráča (Keeper of the Fire: deň, vek osady, Duch osady, úlohy – z uloženej hry), vpravo veľké zlaté tlačidlo Hrať/Pokračovať, Dev World a tri okrúhle ikony (Nastavenia, Pomoc, Verzie). Na mobile je to v jednom stĺpci.
- **Menu – oprava vzhľadu (mobil)** – menu bolo príliš vysoké a pôsobilo ako formulár. Teraz: menšie logo, karta hráča je tmavá lišta so 4 okienkami (Deň, Vek, Duch, Úlohy), kompaktné tlačidlá, všetko sa zmestí na jednu obrazovku bez rolovania. Nastavenia, Pomoc a Verzie sa otvárajú ako **okno nad menu** so zatváracím tlačidlom (už nerozťahujú stránku), prepínače namiesto zaškrtávacích políčok; pod menu už nie je čierny pás.

## Krok 81 – skoro finálna beta: myš ako v AoE, pracovníci v budovách, nové budovy
- **Ovládanie myšou na počítači (ako AoE)** – ľavý klik = vybrať osadníka, ťahaním sa vyberie viac (zelený rámik); pravý klik s vybratými = rozkaz (strom/ruda/krík = ťaž, hala/jaskyňa = vojsť, zem = ísť, budova = pracovať tam). Bez vybratého otvorí pravý klik menu ako v starom Windowse (strom: Zoťať strom, budova: jej akcie vrátane Zbúrať, osadník: povolanie…). Stredné tlačidlo = posun mapy, Esc = zrušiť. Rozkazy myšou majú prednosť pred prácou a postojom v budove.
- **Dekorácie na počítači** – po výbere sa ozdoba drží na kurzore (zelená = sem sa dá, červená = nie), položíš ju kliknutím; pravý klik/Esc zruší, Shift = viac kusov.
- **Menej UI** – postup do ďalšej doby je teraz v karte hlavnej budovy („Ďalšia doba“ s cenou a tým, čo chýba); hore ostal len malý žltý otáznik s počtom úloh (ťuk = zoznam). Nad miestom ďalšieho cieľa (most, prístav, hala, jaskyňa) poskakuje malý žltý ?.
- **Pracovníci v budovách** – každá výrobná budova má 1–2 miesta. Voľní osadníci sa sami priradia (najviac 60 % ľudí) a cez deň (8:30–17:00) pracujú pri vchode budovy. Bez pracovníka vyrába budova len 60 %. V karte budovy „Pracovník +“ / „Uvoľniť“, alebo vyber osadníka a pravý klik na budovu. Zmena povolania pracovníka z budovy uvoľní.
- **8 nových budov (placeholdery – farebné boxy s písmenami, grafika neskôr)** – Rybárska chata, Pekáreň, Pílnica, Trhovisko (Doba kamenná); Kasárne, Železná baňa, Svätyňa, Knižnica (Doba železná). Každá má cenu, výrobu alebo bonus a 1–2 vylepšenia (11 nových vylepšení).
- **Viac kam míňať suroviny** – sklad ide až na úroveň V (800 a 1200 miesta), nové vylepšenia (aj „Počítanie zásob“ v hale), 10 nových dekorácií (placeholdery 1×1), strop ducha od dekorácií 30 a od budov 40.

## Krok 82 – ekonomika bez slepých uličiek, nové reťazce, Údolie, objednávky a udalosti
- **Kontrola logiky dediny** – opravené: voľní osadníci predtým nikdy neťažili železo ani zlato (teraz si vyberú, čo chýba, a ak sa nedá, skúsia inú surovinu); železa bolo pred mostom málo (+2 náleziská, 30 % šanca zo bohatého kameňa); zlato bolo len za mostom, ale Trhovisko ho stálo (Pivovar teraz mení jedlo na zlato); offline dobiehanie produkcie prepísané podľa nových reťazcov; ceny výbavy ×2 v Novej hre; zlý text pri povolaní.
- **Nové suroviny** (4): dosky, náradie, látka, kryštál. Reťazce: Pílnica (2 drevo → 1 doska), Kováčska dielňa (železo + doska → náradie), Tkáčovňa (2 jedlo → látka), Pivovar (4 jedlo → zlato). Kryštál je z Údolia.
- **11 nových budov** (placeholdery): Rybárska chata, Pekáreň, Pílnica, Trhovisko, Tkáčovňa, Pivovar (Doba kamenná); Kasárne, Železná baňa, Svätyňa, Knižnica, Observatórium (Doba železná).
- **15+ nových technológií**, nové obchody, úlohy q9–q12, odznaky (objednávky, dosky, náradie, látka, kryštál, údolie).
- **Výroba sa zastaví, keď chýba vstup** – budova ukáže „čaká na surovinu“, nič sa nestráca.
- **Údolie** – nový svet (wireframe 22×22: kryštalická lúka, ľanové polia, zrúcaniny, jazero). Odomyká sa na rázcestí v Dobe železnej: 40 dosiek, 4 náradie, 100 dreva. Kryštály, ľan a truhlice sa po čase obnovia.
- **Objednávky** (Hala → Objednávky, od Doby kamennej): vždy 4 otvorené, obchodníci chcú tovar za zlato (niekedy kryštál), množstvo je vždy menšie ako sklad. Hra sa tak dá hrať aj po dohraní.
- **Udalosti** – čítajú sa zo súboru `events.json` na GitHub Pages (raz za 2 týždne pridám nový záznam: názov, text, od–do, cieľ, odmena), hráči nemusia nič aktualizovať.
- Testované: regresia OK, dungeon OK, panel Objednávky (PC aj mobil), pás nových surovín.

## Krok 83 – označenie, zvitok doby, Duch dediny (zatiaľ len lokálne, nepublikované)
- **Označenie** – žltý rámik bol pri strome, kameni, kríku, fakli a dekorácii o políčko vedľa (doprava a dole). Predmety stoja nohami v rohu políčka, rámik bol v strede. Rámik je teraz pod predmetom, aj pri príkaze „choď ťažiť“.
- **Úlohy (míľniky)** – pod názvom je malý text, kde kliknúť: „Oprava mosta má tri fázy. Klikni na starý most…“, „Prístav je posledná, tretia fáza…“, pri dobách „ťukni na hlavnú budovu, keď sa nad ňou objaví zvitok“.
- **Zvitok novej doby** – keď je splnený počet osadníkov a budov (suroviny ešte nemusia byť), osadníci „nájdu zvitok“: nad hlavnou budovou sa objaví malý zvitok a prvý klik na budovu otvorí veľký zvitok (mini cinematic: lúče, veľká rímska číslica I/II/III, každá doba má svoju farbu – zelená, zlatá, modrá; zoznam čo chýba; tlačidlo „Postúpiť do doby“). Po postupe druhá obrazovka „Nová doba“ s číslicou a novými budovami. Zvitok sa dá otvoriť aj z karty hlavnej budovy („Zvitok doby“).
- **Odznaky** – medaily s rímskymi číslicami (bronz I, striebro II, zlato III), farebný ľavý pásik podľa stupňa; rovnaký štýl ako zvitok doby.
- **Duch dediny** – každý večer po jedle (cca 20:00, ak nikto nehladuje) sa pri ohni zjaví zelený fluorescenčný duch: lieta okolo ohňa, svieti do tmy nazeleno, ľudia sa naňho pozerajú s „?“. Prihovorí sa (titulky dole): zdravím, ďakujem že uchovávate svetlo (a zdobíte dedinu), udeľujem požehnanie (zajtra práca o 10 % rýchlejšie), a keď je nájdený zvitok, pripomenie, že môžete postúpiť do ďalšej doby a všetko sa dozviete v hlavnej budove. Potom sa rozplynie v iskrách. Kamera sa k ohňu sama presunie (nie v režime Hrdina). Hudba: Robova pesnička `music/halloween.mp3` (114 BPM) ide od začiatku, keď sa duch pomaly vynára (4 s); pri odchode skočí na drop (88,4 s), duch 4 s rýchlo krúži a stúpa, potom vystrelí hore a zmizne v iskrách; prvá osmička dropu (16,8 s) dohrá a stíchne. Tvar ducha podľa Robovho náčrtu (vysoký, zaoblený vrch, bodkové oči, rovné ústa, vlnitý spodok). Hala už nežiari, ostal len malý zvitok nad ňou.
- Pripravené: scénka s prdom pri ohni (ľudia sa obzerajú, strih na Keepera, drop s hudbou, boj v jaskyni, kôň, blesk, prd, kamera odzoomuje, smiech, všetci utekajú) – bude ďalší krok.
- **Nové chaty a farmár** – Baníkova, Kamenárska a Zberačova chata plus Pole: po dostavaní príde nový osadník s touto prácou (ako pri drevorubačovi).
- **Nový layout ovládania** – spodná lišta (Osadníci, Stavať, Úlohy, Menu) je vždy dole, aj v režime hrdina; hrdina len otvorí joystick a údery nad lištou. Na šírku je lišta malá v strede dole a horná lišta užšia v strede (mimo zaoblených rohov). Na výšku horná lišta rovnaká.
- **Úlohy vľavo hore** – malý zoznam (ďalší cieľ + 3 úlohy, drobné písmo), ťuk otvorí všetky úlohy; vpravo dole ostáva tlačidlo Úlohy. Preč je kruh s bodkou (stred kamery).
- **Drobnosti UI** – veľkosť ovládania na mobile predvolene 120 % (na šírku 100 %), tlačidlá vpravo väčšie, suroviny bez prázdneho miesta, šírky panelov pri zväčšení opravené (pivnica), tenká čiara dole zakrytá.
- Stav: nepublikované ani nepushnuté (hráč testuje Krok 82).

## Krok 84 – základné suroviny hneď od začiatku
- **Odomykanie budov** – Pole, Zberačova chata, Kamenárska a Baníkova chata, Lom, Pila, Tkáč, Rybárska chata, Mlyn, Studňa a Sýpka sa dajú stavať už v Praveku. Obmedzuje ich len cena (napr. Lom chce železo a dosky, ktoré sa musia najprv vyťažiť a vyrobiť).
- **Doba kamenná** odomyká Krčmu, Trh, Pekáreň, Pivovar, Stajňu, Kováčňu a Železnú baňu; **Doba železná** Strážnu vežu, Kasárne, Knižnicu, Svätyňu, Observatórium a Div sveta.
- Pri hlade pri večeri hra radí postaviť Pole alebo Zberačovu chatu.

## Krok 85 – nové pixelové písmo
- **BoldPixels** (YukiPixels, CC BY-SA 4.0) nahradilo rozmazané digitálne písmo (VT323 a „UoE Digits“). Je vložené priamo v hre (4 KB, slovenské znaky), nič sa nesťahuje.
- Veľkosti sú len 16 px (malé) a 32 px (nadpisy), prepočítané podľa zväčšenia ovládania, aby bol text ostrý pri každom nastavení. Rovnaké písmo majú aj nápisy v pivnici a čísla škody.
- Meno autora je v Menu dole (podmienka licencie). Písmo je uložené aj na Google Drive (priečinok Fonty).


## Krok 86 – angličtina
- **Jazyk SK / EN** – v Menu (a na úvodnej obrazovke) je tlačidlo „English“ / „Slovenčina“. Hra sa po prepnutí načíta znova, svet ostáva.
- Prvýkrát sa jazyk vyberie podľa prehliadača (slovenčina a čeština = SK, ostatné = EN). Voľba sa pamätá.
- Preklad beží za behu: slovník asi 1 800 textov + vzory pre vety s číslami a menami. Slovenčina ostáva pôvodná, kód hry sa nemenil.
- Udalosti v events.json môžu mať aj `title_en` a `text_en`. Pri premenovaní vecí (Excel s názvami) treba doplniť aj anglický názov do slovníka (i18n/en.json).

## Krok 87 – výber postavy
- **4 postavy** namiesto jedného Keepera: **Starec / The Elder** (červené rúcho, ohnivá palica, čierny kôň), **Rytier / The Knight** (brnenie, meč a štít, biely bojový kôň), **Lovec / The Hunter** (zelený plášť, luk, sivý vlk) a **Barbar / The Barbarian** (rohatá prilba, sekera, hnedý medveď).
- Výber sa ukáže pri začatí Novej hry. Neskôr ho zmeníš v Menu → Postava (hra sa načíta znova, svet ostáva). Hra ostáva rovnaká, líši sa vzhľad a dopravný miláčik.
- Meno Keepera sa v textoch mení na meno vybranej postavy (aj v skloňovaní, napr. „Ovládaš Starca“).
- Postava je nakreslená dvakrát: na zvieraťati (dedina, rázcestie, údolie) aj pešo (pivnica, jaskyňa).

## Krok 88 – finále Ducha dediny
- **Scénka po rozlúčke ducha:** duch sa rozplynie, ľudia pri ohni sa obzerajú s „?“. Strih na hrdinu zblízka (kdekoľvek je), na drop pesničky idú rýchle zábery na celú obrazovku (boj v jaskyni, cval na zvierati, tvár hrdinu), blesk – a hrdina si prdne: zelený oblak ako duch. Kamera odzoomuje, všetci sa smejú („ha“) a utekajú od smradu, hrdina sa tvári nevinne. Počas finále je ovládanie skryté (ako v kine); zvuky: prd, smiech, vibrácie na drop.
- Hudba: pri rozlúčke skočí 2 takty pred drop (nábeh), drop sedí na strih do záberov; prvá osmička dohrá a stíchne.
- **Kamera vždy k duchu:** keď príde duch, kamera sa presunie k ohňu aj v režime Hrdina a aj v Kino režime (hra ti hrdinu nevezme, len ho kamera chvíľu nesleduje). Po scénke sa vráti k hrdinovi. V pivnici a jaskyni dedina stojí, duch počká, kým sa vrátiš.
- **Tajné tlačidlo 👻** vedľa Dev Worldu na úvodnej obrazovke: Dev World, kde scénka s duchom príde sama – 5 s po štarte a potom vždy 25 s po skončení (adresa `#w=dev&duch`).

## Krok 89 – finále Ducha dediny prerobené
- **Strih riadi hudba:** pesnička sa po rozlúčke zasekne ako páska, kamera pomaly nabieha na hrdinu (2 takty), na drop idú zábery presne na doby a po 4 taktoch prd.
- **Zábery sú nové a hýbu sa:** švih a rozprsknutie slizu, kostra sa rozsype, boss, cval so súmrakom, tvár hrdinu, titulok s menom hrdinu. Všetko ostré pixely.
- **Prd:** zelený oblak v tvare ducha, hudba na 1 takt stíchne a naskočí späť presne na takt. Smiech, kamera sa odťahuje a všetci utekajú.
- Drop nastavený presne (88,15 s). Ak hudba nehrá alebo sa zasekne, scénka ide ďalej podľa hodín hry.

## Krok 90 – popup, joystick v jaskyni, nový vstup do dungeonu
- **Popup okno pri budove:** stála šírka (pri posune sa už nezužuje, len sa posunie, aby ostalo na obrazovke), pri bežnom priblížení je menšie a príjemné.
- Popup sa pri priblížení ešte zmenší, pri oddialení ostáva malé a nerastie.
- **Jaskyňa na mobile:** plávajúci joystick (ťukni kdekoľvek, palec sa stane joystickom), už ťa nič netiahne späť k východu. Myš ostáva: klik = choď tam.
- **Honosný vstup do dungeonu:** kamenný portál s oblúkom, lebkou, zástavami, schodmi a dvoma ohnivými pilierami; vnútro oblúka je výrez z jaskyne (JPEG).

## Krok 91 – ×5 a ×20 v Novej hre, cieľové úlohy, oprava pádu pri nájazde
- **×5 a ×20 aj v Novej hre:** tlačidlo rýchlosti času (×1 → ×5 → ×20) hore vedľa dňa, na testovanie.
- **Cieľové úlohy „čo robiť ďalej“:** 21 míľnikov od prvého drevorubača po Div sveta s návodom, cenou a tým, čo chýba, plus 15 nových úloh. Nový cieľ hra oznámi.
- **Oprava: hra zamrzla, keď príšera z nájazdu došla k skladu.** Nová poistka: chyba v scéne už hru nezastaví. Otáznik ukazuje aj na sklad.
- **Výroba šetrí suroviny:** pílnica, kováčňa, tkáčovňa… sama oddychujú, keď je v sklade dosť tovaru, a majú tlačidlo Pozastaviť výrobu.

## Krok 92 – Duch dediny príde iba raz, titulky, rýchlosť sa odomyká prdom
- **Duch príde len raz**, prvú noc novej hry. Počas scénky beží čas vždy ×1 a osadníci ostanú pri ohni.
- **Titulky vo finále:** temné hlášky, „Ready?“, prečo duch prišiel, čo si zjedol, prd a „Fúúj! Smrdí to!“.
- **Smrad smrti 💨 odomkne ×5 a ×20:** v Novej hre je tlačidlo rýchlosti skryté, kým scénka s prdom neskončí. Staré uloženia sú odomknuté.

## Krok 93 – okno budovy pred stavaním, kompaktná horná lišta
- **Okno budovy:** ťuk na budovu v Stavať otvorí detail: obrázok, popis, čo robí, cena s „máš / treba“ a čo chýba. Stavať až tam.
- **Postup stavania:** Stavať v okne → vyber miesto na mape → potvrď. Zamknuté budovy sa dajú tiež prečítať (s dôvodom zámku).
- **Horná lišta:** dosky, náradie, látka a kryštály majú vlastný kompaktný riadok v lište (už neplávajú cez hru) a veľké čísla sa zmenšia.

## Krok 94 – nové okno budov, tlačidlo doby, drobné opravy
- **Okno budov:** všetky budovy majú jedno prehľadné okno dole: popis, akcie, vylepšenia s cenami (máš / treba), zbúrať až nakoniec. Mapa sa posunie nad okno.
- **Doby:** hlavná budova ukazuje ďalšiu dobu s riadkami podmienok a lištami. Zvitok má rovnaké riadky. Hore je tlačidlo doby, svieti keď je zvitok pripravený.
- **Telefón:** keď odídeš z hry, pozastaví sa; po návrate sa zobudí (dlhšie preč: Pokračovať). Stavanie len veľkým tlačidlom, dvojklik nezoomuje ani nezbúra.
- **Hra:** píla nezje všetko drevo (rezerva), hudba je tichšia a hrá od hlavnej budovy, 46 úloh a ikony pri úspechoch, horná lišta v jednom riadku.

## Krok 95 – Hlavná cesta: 5 kapitol
- **Hlavná cesta:** ciele sú zoradené do 5 kapitol (Prvá iskra, Dedina ožíva, Cez rozbitý most, Kov a hradby, Plameň predkov). Karta úloh ukazuje kapitolu a cieľ s ★.
- **Kapitola hotová:** príde karta s odmenou (suroviny) a čo je ďalej. Odznak Pútnik za kapitoly. Nové ciele: prvý boss (5. poschodie) a Strážna veža.
- **Voľné ciele:** objednávky, bossovia, poschodia, ďalšie budovy a Duch osady sú v Úlohách zvlášť. Nevedú hráča, ale dajú sa plniť kedykoľvek.
- **Pripomienka:** keď sa 5 minút nič nepohne na Hlavnej ceste, hra potichu pripomenie aktuálny cieľ.

## Krok 96 – nové osady: osadníci sa sami rozrastajú
- **Prieskumník:** keď má dedina dobu kamennú a 7 ľudí, jeden sa vyberie ďaleko a nájde rovnú lúku pri surovinách. Zabodne vlajku, ty ťukneš a rozhodneš: Založiť (60 dreva, 30 jedla), Neskôr, Zahodiť.
- **Osada rastie sama:** po založení vznikne Skladisko a presťahujú sa 2 ľudia. Každých 10 h reálneho času (aj keď nehráš) pribudne budova: chalupy, dielňa podľa okolia (ruda, kameň, kríky, ryby, les), studňa, pole. Až 8 stavieb, 3 osady.
- **Ľudia medzi osadami:** obyvatelia pracujú v okolí a nosia tovar do dediny, dedinčania chodia na návštevy. Kade chodia, vyšliape sa cesta. V chalupách osady sa rodia noví ľudia.
- **Voľný cieľ „Založ novú osadu“, odznak Zakladateľ.** Ťuk na Skladisko ukáže osadu, počet stavieb, ľudí a kedy pribudne ďalšia budova.

## Krok 97 – dungeon: zóny, výklenky, oltáre, skratka
- **Zóny po 5 poschodiach:** Slizové jaskyne, Kostnica (viac kostlivcov), Žeravé hlbiny (rýchlejšie príšery), Ľadová priepasť (pomalšie, tvrdšie), Prázdnota (šamani). Každá má vlastnú farbu siene aj príšer.
- **Tvary poschodí:** sieň, sieň s výklenkom, sieň s komorou, rozvetvená. Vo výklenku býva svietiaci Oltár predkov (+4 životy, raz), v komore občas truhla navyše. Bossovia majú čistú arénu.
- **Skratka:** po porazení bossa sa pri vchode do jaskyne objaví tlačidlo Skratka – začneš od ďalšej zóny (6., 11., 16. poschodie…).
- **Trofeje:** každý prvý porazený boss zdvihne Ducha osady o 3 ✦ (do 15). Odznak Požehnaný za oltáre. Správy v jaskyni už neprekrývajú tlačidlo Von.

## Krok 98 – Krypta predkov: tajný dungeon pod Divom sveta
- **Vstup:** keď dostaviaš Plameň predkov, pod ním sa otvoria schody. Ťuk na Div sveta → Krypta predkov (a po bossovi Skratka od 6. poschodia).
- **Plameň a ohniská:** nesieš plameň, ktorý pomaly dohára (lišta vpravo hore). Kým horí, duchovia ti neublížia a dostávajú dvojnásobok. Dotyk ohniska ho zapáli a plameň doplní. Schody sa otvoria, až keď horia všetky ohniská a komora je prázdna.
- **Nepriatelia:** duchovia (rýchli, priesvitní, púšťajú kryštály), kamenní strážcovia (pomalí, tvrdí), na 5. poschodí Prastarý strážca (ďalej Kráľ predkov, Zabudnutý). Modro-zlatý vzhľad.
- **Odmeny:** z truhly po bossovi Amulet predkov (život +2, plameň horí dlhšie) a Palica strážcu krypty (úder +1, modrá guľa proti duchom). Ciele a odznaky Nosič plameňa, Duchobijca.
