# 01 — Wat dit scorebord is

## 1. Het korte verhaal

Het **judo-scorebord** is een eenvoudige website die de stand van een judowedstrijd op een groot
scherm of tv bij de mat laat zien: twee namen, de cijfers (ippon, waza-ari, yuko, shido), de
wedstrijdklok, de houdtijdklok en de informatie eromheen (mat, ronde, clubnaam). Iedereen bij de
mat ziet in één oogopslag hoe het gaat.

Het programma is gemaakt voor en door judovereniging **Yuseigachi Norg**. *Yuseigachi* is een
judoterm: je wint op voordeel wanneer je tegenstander twee shido's krijgt. Mariska (hoofdontwikkelaar),
twee Vincents (DevOps en engineering), Robin (student) en Jowan (docent ICT) schrijven de code; Bas,
trainer en tabelhouder van de club, schrijft op wat er nodig is en bedient het bord bij de mat.

Daarvoor werd gewerkt met een oud computerprogramma en een Excel-bestand met uitslagen.
Dit scorebord vervangt dat: live scoren bij de mat, zonder gedoe.

- Demo (gratis hosting): <https://yuseigachi-score.netlify.app>
- Broncode: <https://github.com/marikaris/judo-score>
- Vrij te gebruiken onder de MIT-licentie

## 2. Voor wie het gemaakt is

| Wie | Wat die persoon doet | Wat die persoon nodig heeft |
| --- | --- | --- |
| **Tabelhouder** (bijvoorbeeld Bas) | bedient het scorebord bij de mat | snel scoren met het toetsenbord, grote leesbare cijfers, makkelijk resetten tussen twee partijen, zonder opleiding |
| **Judoka's en publiek** | kijken mee | grote letters, duidelijke klok, meteen zien of er golden score loopt |
| **Ontwikkelaars van de club** | houden het programma gaande | een eenvoudige techniek, makkelijk zelf starten op de eigen computer, makkelijk publiceren, samenwerken op GitHub |

## 3. Waar en hoe het draait

- In een gewone webbrowser op een laptop of computer, aangesloten op een scherm of beamer bij de mat.
- **Lokaal op de computer van de tabelhouder.** Het programma heeft geen server en geen internet
  nodig om te werken.
- Het scorebord is ontworpen voor **vast 1920×1080-beeld op volledig scherm**, zonder scrollen. De
  automatische schaal naar elk scherm (kioskgebruik, met zwarte balken ernaast) is gemaakt maar draait
  nog niet: die wordt nog bekeken. Tot die tijd is de instelling **Font scale** (0,5 tot 2,0) de manier
  om de letters groter of kleiner te maken. Zie [07-roadmap.md](07-roadmap.md).
- Eén fysiek toetsenbord bedient het hele scorebord (zie [02-werking.md](02-werking.md)).
- Een losse, te installeren versie zonder browser is in ontwikkeling
  (zie [07-roadmap.md](07-roadmap.md)).

## 4. Wat het scorebord kan

### 4.1 Stand tonen

- Twee spelerspanelen onder elkaar (boven = speler 1, onder = speler 2).
- Per speler: de naam en de kolommen **ippon**, **waza-ari**, **yuko** (die je weg kunt zetten) en
  **shido** (die je weg kunt zetten).
- Cijfers te veranderen met de +/−-knoppen op het scherm, met muisklik, of met het toetsenbord.
- Een score gaat nooit onder de 0.

### 4.2 Scoreerregels

- Twee waza-ari voor dezelfde speler worden automatisch één ippon: de waza-ari-teller gaat terug
  naar 0 en de ippon-teller gaat naar 1 (*waza-ari-awasete-ippon*).
- Een ippon beëindigt de partij: de wedstrijdklok stopt, als die instelling aanstaat. Er staat geen
  extra "gewonnen" op het scherm: de ippon zélf is de winst.
- Het ingesteld maximum aantal shido's (standaard 3) betekent: die speler verliest en de
  tegenstander wint. Op dit scorebord verschijnt die winst als één ippon voor de winnaar. Waarom
  wij dat zo doen en hoe de regel echt is, staat in [03-regels-senioren.md](03-regels-senioren.md).
- Een yuko is alleen een aantekening en heeft geen invloed op de winnaar; de kolom is helemaal uit
  te zetten.
- De shido-kolom is uit te zetten en het maximumaantal is in te stellen.

### 4.3 Klokken

- **Wedstrijdklok** met in te stellen duur (standaard 120 seconden), getoond als `mm:ss`.
- Twee manieren van lopen, te kiezen bij de instellingen en onthouden tot de volgende keer:
  - **13- (aftellen)**: begint bij de maximale tijd, loopt naar 00:00 en stopt dan.
  - **13+ (oplopen)**: begint bij 00:00 en loopt door tot je hem zelf stopt.
- **Houdtijdklok** voor de osaekomi: telt op tot de ingestelde duur (standaard 20 seconden). Elke
  beëindigde houdgreep komt in een klein lijstje onder de klok; dat lijstje is leeg te maken.
- **Golden score**: een knop (of de G-toets) zet een verlenging van 60 seconden (standaard) aan,
  zet de klok terug en markeert de tijd met een gele balk.
- Beide klokken starten en stoppen met toetsen of knoppen: *Hajime* / *Matte* (of `Tab`, `Control`)
  voor de wedstrijdklok, *Osaekomi* / *Toketa* (of `Shift`) voor de houdtijd.

### 4.4 Partijen beheren

- **Reset timer**: alleen de wedstrijdklok terug, bijvoorbeeld als er per ongeluk gestart was.
  Het ronde-nummer blijft gelijk.
- **Reset all**: alle cijfers van beide spelers weg, beide klokken terug, het houdgrepenlijstje leeg
  en golden score uit. Dit is de knop voor de volgende partij; alleen hiermee loopt het
  ronde-nummer op.
- **Break** (pauze): het scorebord wordt vervangen door alleen de matnaam in hele grote letters.
  De knop heet **Resume** als de pauze voorbij is. De stand blijft tijdens de pauze onveranderd.

### 4.5 Instellingen

- Matnaam, naam van de ronde en welkomstbericht zijn aan te passen.
- Namen van speler 1 en speler 2 zijn aan te passen.
- Maximale wedstrijdtijd en maximale houdtijd zijn aan te passen.
- "Bij ippon stopt de tijd" (standaard aan).
- Yuko tonen of verbergen (standaard aan).
- Shido's verbergen, en het maximaal aantal (standaard 3).
- Tekstgrootte van 0,5 tot 2,0, voor leesbaarheid op een groot scherm.
- De keuze aftellen of oplopen blijft bewaard, ook als de pagina opnieuw geladen wordt.

### 4.6 Hulp in het programma

- Een helppagina met informatie over het project, de twee klokmethodes en alle toetsen, inclusief
  een afbeelding van de toetsenindeling.

## 5. Wat het scorebord moet blijven

| eis | wat dat betekent |
| --- | --- |
| Lichtgewicht | gewone website, geen server, geen database, gratis te hosten |
| Offline te gebruiken | geen externe dienst nodig tijdens een wedstrijd |
| Leesbaar op afstand | grote letters, hoog contrast |
| Snel | klok en cijfers reageren meteen, zonder netwerkvertraging |
| Overal te gebruiken | elke moderne browser op Windows, macOS en Linux |
| Onderhoudbaar | nette, geteste code, zodat de club zelf iets kan aanpassen |
| Makkelijk te plaatsen | één bouwopdracht levert een statische website op; er is ook een Docker-image |

## 6. Bewust buiten bereik

- Poules en lotingen maken: komt als **los programma**, zie [07-roadmap.md](07-roadmap.md).
- Uitslagen bewaren of exporteren: er is bewust geen database.
- Meerdere matten met één scorebord, of schermen die gesynchroniseerd lopen.
- Inloggen, gebruikers, rechten.
- Inschrijvingen of betalingen: dat is een ander project, de toernooi-CMS.
