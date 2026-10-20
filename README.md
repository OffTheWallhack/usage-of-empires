# Usage of Empires (beta)

Pixelová izometrická budovateľská hra v štýle Age of Empires II – osada pri ohni, profesie osadníkov, vylepšenia budov, obnova mosta a prístavu, nájazdy príšer a nekonečný dungeon pod jaskyňou.

**Hraj:** https://offthewallhack.github.io/usage-of-empires/

## Na mobile
- **iPhone:** otvor hru v Safari → Zdieľať → Pridať na plochu.
- **Android:** otvor hru v Chrome → ⋮ → Pridať na plochu / Inštalovať aplikáciu.
- Keď hru raz otvoríš z plochy, ide aj bez internetu (hudba len s internetom).

## Beta
- Hra sa stále vyvíja, svet ti po aktualizácii ostáva. Novinky: Menu → Čo je nové.
- **Záloha sveta:** Menu → Uložiť zálohu (súbor .json – odlož si ho alebo pošli kamarátovi), Nahrať zálohu ho vráti.
- **Chyba?** Menu → Nahlásiť chybu a pošli text autorovi.

## Technicky
- Celá hra je jeden súbor `index.html` (Phaser 3, grafika a zvuky vnútri), hudba v `music/`, offline cez `sw.js`.
- Postup sa ukladá v prehliadači (localStorage) – hra nemá koniec, svet ostáva.
- Zoznam zmien: [GAME.md](GAME.md)
