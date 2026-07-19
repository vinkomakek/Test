# CONCEPT.md — "Od želje do zalogaja"

Cinematic scroll-driven demo za McDonald's Hrvatska, fokus: **digitalno naručivanje**.

---

## 1. Središnja transformacija

**Scroll sastavlja i isporučuje tvoju narudžbu — od prazne želje do tople vrećice u ruci — jer brend prodaje najkraći put od gladi do zalogaja.**

Prije → poslije: prazan ekran i glad → plaćena narudžba koja te čeka. Posjetitelj scrollom *prođe* kroz cijeli digitalni tok naručivanja (otvori aplikaciju → složi burger → plati bodovima → izaberi preuzimanje → hrana stiže) i doživi koliko je koraka malo — to je prodajni argument koji nijedan statični banner ne može prenijeti.

## 2. Kandidat mehanike

### A) Scroll-build: "Složi svoj burger" ⭐ preporuka
Scrollom se Big Mac gradi sloj po sloj (pecivo → meso → sir → salata → umak → vrh peciva), a svaki sloj "pada" na svoje mjesto kao stavka dodana u košaricu u aplikaciji. Paralelno s burgerom raste i stvarni UI aplikacije: bodovi se zbrajaju, cijena se ispisuje, gumb "Naruči" se puni zlatnom bojom.

- **Za:** izravno prevodi *dodavanje u košaricu* u fizički užitak slaganja hrane — mehanika izvire iz samog proizvoda (burger JE slojevit) i iz usluge (aplikacija JE slaganje narudžbe). Konkurencija to ne može kopirati bez da kopira Big Mac.
- **Protiv:** zahtijeva discipliniran vizual da ne sklizne u gimmick — rješivo proceduralnim SVG slojevima u "Archery" stilu.

### B) Scroll-morph: lukovi postaju put
Zlatni "M" se scrollom razmata u vijugavu zlatnu liniju — put narudžbe od telefona, kroz kuhinju, do McDrive prozora — i na kraju se ponovno savija u "M" na vrećici.

- **Za:** elegantno, jako brendirano (Archery princip), lijepa metafora puta.
- **Protiv:** metafora je apstraktna — posjetitelj *gleda* put, ali ga ne *doživljava*; ne prenosi ključni argument (malo koraka, bodovi, preuzimanje gdje želiš).

### C) Scrub-sekvenca: dan uz aplikaciju
Image-sequence scrub kroz jedan dan korisnika: jutarnja kava naručena iz tramvaja, ručak na kiosku, večernji McDelivery.

- **Za:** pokriva sve usluge, emotivno ("trenuci").
- **Protiv:** traži fotografiju/video koji nemamo (sve bi bilo placeholder), linearna je "kaša" bez taktilnih koraka — upravo ono što metodologija zabranjuje.

**Preporuka: A (scroll-build burgera + rastući UI narudžbe).** Jedina mehanika gdje posjetitelj transformaciju izvodi sam: njegov scroll JE prst koji slaže narudžbu. Svaka faza ima prirodnu snap točku (sloj sjeda na mjesto = stavka u košarici), copy nosi činjenice (75 bodova za 1 €, 4 načina preuzimanja), a CTA ("Preuzmi aplikaciju") logično zaključuje: upravo si vidio koliko je lako — sad to napravi zaista.

## 3. Scenarij po fazama (7 faza)

Globalna scena: tamna pozadina `#1D1D1B`, u sredini "pozornica" na kojoj se gradi burger, uz rub diskretna traka narudžbe (stavke, bodovi, cijena) koja raste sa scrollom. Scrub: 1, snap na granice faza.

| # | Faza | Vizualno | Copy (stvarni) | Prijelaz |
|---|---|---|---|---|
| 0 | **Hero — glad** | Prazna tamna scena, samo uvećani, izrezani zlatni lukovi (Archery crop) dišu u pozadini; dolje indikator scrolla. | **"Gladan si. Skrolaj."** + podnaslov: "Od želje do zalogaja — bez čekanja u redu." | Lukovi se skupljaju u ikonu aplikacije koja "klikom" otvara pozornicu. Pin + scrub. |
| 1 | **Otvaranje aplikacije** | Ikona se rastvara u okvir telefona; na pozornicu sklizne donje pecivo. Traka narudžbe se pojavljuje: "1 stavka". | **"Otvori. Poželi. Naruči."** + "Sve što vidiš, složit ćeš scrollom — točno ovako radi i aplikacija." | Snap; pecivo lagano poskoči (`back.out`). |
| 2 | **Slaganje — meso i sir** | Meso pada s blagim squashom, sir sklizne i "otopi" kutove (SVG morph). Bodovi u traci: +150. | **"Svaki zalogaj počinje izborom."** + "Big Mac, McChicken ili nešto novo — 49 restorana u 18 gradova radi po istoj narudžbi." | Scrub, stagger padanja slojeva. |
| 3 | **Slaganje — svježe** | Salata konfetima leprša na mjesto, luk i umak (zlatna kap!) padaju; gornje pecivo zatvara burger uz suptilan "puf" čestica. | **"Složeno. Kao da si u kuhinji."** + "Tvoja narudžba ide ravno na ekran kuhinje — bez papirića, bez pogreške." | Snap; burger cijeli, lagano se zarotira kao 2.5D prikaz. |
| 4 | **Bodovi i plaćanje** | Burger se smanji u karticu u traci narudžbe; brojčanik bodova vrti se do iznosa; gumb "Plati" se puni zlatnom. | **"1 € = 75 bodova. Svaki put."** + "Bodove mijenjaš za kavu, krumpiriće ili cijeli McMenu — vjernost se ovdje broji." | Brojčanik scrubba sa scrollom (taktilno!). |
| 5 | **Preuzimanje gdje želiš** | Četiri ikone se redaju vodoravno: stol / pult / McDrive / parking; scroll "vozi" vrećicu s lukovima od jedne do druge (na mobitelu: native swipe). | **"Za stolom. Na pultu. Na McDriveu."** + "Ili ti je donesemo — McDelivery vozi i kad pada kiša." | Vrećica se zaustavi na McDriveu, prozor se otvori. |
| 6 | **CTA — vrećica u ruci** | Vrećica u prvom planu, iz nje viri topli odsjaj; pozadina se ugrije u zlatnu; svi elementi trake narudžbe slože se u ikonu aplikacije + QR/badge dugmad. | **"Trideset godina. Jedan scroll."** + "Od Jurišićeve 1996. do tvojeg džepa danas — preuzmi aplikaciju i naruči prvi obrok." CTA gumbi: **"Preuzmi aplikaciju"** (primarni), "Pogledaj ponudu" (sekundarni). | Kraj; footer s izvorima činjenica. |

Snap točke: kraj faza 1, 3, 4, 6. Tekst ulazi stagger po riječima (0.15–0.3 s, `power4.out`).

## 4. Vizualni smjer

- **Podloga:** tamna `#1D1D1B` (cinematic, službeno dopuštena u Archery sustavu) — zlatna `#FFBC0D` na njoj svijetli kao neon; crvena `#DA291C` samo kao mikro-akcent (umak, notifikacije bodova).
- **Burger i UI:** sve proceduralno SVG — plošni, sočni oblici s blagim gradijentima, nikakav foto-realizam (nemamo licencirane fotke; plošni stil je ionako bliži današnjem McDonald's ilustrativnom jeziku). `// PLACEHOLDER` komentari gdje bi produkcija ubacila prave assete.
- **Tipografija:** Figtree 300/400/700 (zamjena za Speedee); naslovi Bold, velika veličina, kratki.
- **Lukovi:** koriste se izrezani i uvećani kao pozadinski element (crop preko ruba ekrana), nikad razvučeni ni prebojani.
- **Reduced motion:** statične "kartice" istih 7 faza, sav copy i CTA dostupni.

---
**⛔ Kontrolna točka 2 — čekam potvrdu prije pisanja koda.**
