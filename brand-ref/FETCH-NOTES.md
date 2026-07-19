# Bilješke o dohvatu asseta

**Datum:** 2026-07-19
**Ciljni URL:** https://www.mcdonalds.com/hr/hr-hr.html

## Status dohvata

Izravni dohvat HTML-a, CSS-a i slika s `www.mcdonalds.com` i `mcdonalds.hr` **nije bio moguć**:

1. `curl` (i s browser user-agentom) — mrežna politika ovog okruženja blokira domenu na proxy razini (403 na CONNECT).
2. Vanjski fetch (WebFetch, izvan kontejnera) — McDonald's poslužitelji iza Akamai bot zaštite vraćaju 403 Forbidden za sve automatizirane zahtjeve.
3. Wayback Machine (`archive.org`) — također blokiran mrežnom politikom okruženja.

## Zamjenski pristup

- **Brand boje i tipografija:** McDonald'sov globalni brand sustav ("Feel-Good Design", Turner Duckworth 2018/2019) javno je dokumentiran — boje i font su standardizirani globalno, pa vrijede i za hrvatski web.
- **Sadržaj, copy i činjenice:** prikupljeno web pretragom iz hrvatskih izvora (Index, Lider, Story) i indeksiranih stranica mcdonalds.com/hr i mcdonalds.hr.
- **Logo (zlatni lukovi):** nije skinut s weba — rekonstruiran proceduralno kao SVG u `arches.svg`. // PLACEHOLDER — u produkciji zamijeniti službenim SVG-om.

## Assets u ovom folderu

| Datoteka | Opis |
|---|---|
| `arches.svg` | Proceduralna rekonstrukcija zlatnih lukova (Arches Gold #FFBC0D) |
