# 06 — Hoe het programma in elkaar zit

Dit document is voor iemand die het programma aanpast of zelf start. Je hoeft geen programmeur te
zijn om de rest van het handboek te lezen.

## 1. De techniek in het kort

| waarvoor | waar we het mee maken |
| --- | --- |
| het programma zelf | Vue 3 (een raamwerk voor webpagina's), TypeScript |
| bouwen | Vite |
| opmaak | Bootstrap 5, met Sass |
| testen | Jest (voor de kale rekenregels) |
| spelfouten in code vinden | ESLint en Prettier |
| pakketjes ophalen | Yarn (niet npm) |
| automatisch controleren | GitHub Actions, bij elke *pull request* |
| online zetten | Netlify (gratis), of een eigen server met nginx of Docker |

Er is **geen server en geen database**: het resultaat is een statische website. Alles wat op het
scherm staat, verdwijnt als je de pagina ververst.

Node (de omgeving waarmee gebouwd wordt) bij voorkeur **20 of nieuwer**. De automatische
controles lopen op Node 18, 20 en 22.

## 2. Zelf starten op je eigen computer

Vereist: Node 20 of nieuwer, en Git.

```bash
git clone git@github.com:marikaris/judo-score.git
cd judo-score
yarn install
yarn dev
```

Daarna verschijnt het scorebord op het adres dat in de terminal staat
(meestal <http://localhost:5173>).

`yarn install` heeft geen internet nodig voor de pakketjes zelf: de repository bevat de nodige
bestanden in `.yarn/cache`. Yarn aan de praat krijgen kan met `corepack enable`; op sommige
computers werkt `npx --yes yarn@1.22.22 install` als `yarn` ontbreekt.

## 3. Bouwen, testen en controleren

| opdracht | wat hij doet |
| --- | --- |
| `yarn build` | maakt de website; de uitkomst komt in de map `docs/` |
| `yarn test` | de tests van de rekenregels (klok, golden score) |
| `yarn type-check` | controleert de TypeScript-types |
| `yarn lint` | zoekt slordigheden in de code |
| `yarn format` | maakt de code in `src/` netjes |

Twee dingen om te weten:

- De build-output gaat naar **`docs/`**, en die map staat **in** de repository. Elke bouw overschrijft
  dus de maps met de live website. Daarom is die map moeilijk te overzien in een *pull request*.
  De handleiding die je nu leest, staat bewust in een andere map (`handbook/`).
- `yarn lint` loopt over `docs/` heen en geeft dan duizenden fouten. Gebruik
  `npx eslint src` om alleen de echte code te controleren.

## 4. De onderdelen

Alles staat in `src/`:

| bestand | wat het is |
| --- | --- |
| `components/ScoreBoard.vue` | het hele scherm; hier wonen de cijfers, de instellingen en het ronde-nummer |
| `components/TopBanner.vue` | balk bovenaan: mat, welkomstbericht, ronde + nummer, en de knoppen Help / Settings / Break |
| `components/JudoPlayer.vue` | één speler: naam, ippon, waza-ari, yuko, shido, en de toetsen |
| `components/ScoreCounter.vue` | één cijfer met + en - |
| `components/TimeBanner.vue` | balk onderaan: de knoppen, de wedstrijdklok, de houdtijdklok, de namen |
| `components/MatchTimer.vue` | de wedstrijdklok (aftellen of oplopen) |
| `components/PinningTimer.vue` | de houdtijdklok en het lijstje houdgrepen |
| `components/BoardSettings.vue` | het instellingenformulier en alle standaardwaarden |
| `components/HelpPage.vue` | de helppagina |
| `components/BreakPage.vue` | het pauzescherm |
| `utils/` | de kale rekenregels, apart getest |

De standaardwaarden (120 seconden, 20 seconden houdtijd, 3 shido's, tekstgrootte 1, `Mat 1`,
`Ronde`, `Yuseigachi Norg`) staan in `components/BoardSettings.vue`.

## 5. Werken samen op GitHub

1. Maak een *issue* aan voor iets dat kapot is of een wens.
2. Maak voor elk issue een eigen tak met de naam `fix/#nummer-korte-omschrijving`.
3. Open een *pull request* (PR) naar `main`. Bij elke PR lopen de automatische controles: installeren,
   bouwen en testen op Node 18, 20 en 22.
4. Een ander leest de PR en zet hem door. Één bug per PR, dan blijft het overzichtelijk.
5. Voor teksten in deze handleiding: dezelfde weg, of gewoon het potloodje op GitHub. Voor woorden **op
   het scherm** geldt §9: de product owner schrijft de gewenste tekst, de ontwikkelaar zet hem in de
   taalbestanden.

## 6. Online zetten

**Netlify** (de demo op <https://yuseigachi-score.netlify.app>):

- buildopdracht `yarn build`, uitvoermap `docs`.
- Er staat geen configuratiebestand in de repository; de instellingen staan in Netlify zelf.
- Elke PR krijgt een *deploy preview*, een proefversie op een tijdelijk adres.

**Docker** (een eigen server):

```bash
docker build -t judo-score -f docker/Dockerfile .
docker run -p 8080:80 judo-score
```

Of met `docker compose -f docker/docker-compose.yml up --build`. Daarna werkt het scorebord op
<http://localhost:8080>.

Let op: de helppagina gebruikt het losse plaatje `docs/assets/KeyboardLayoutConfig.svg`. De map
`docs/` is dus niet alleen bouw-output, maar ook **bouw-input**. Zet `docs` niet in `.dockerignore`
en verwijder de map niet uit de repository, anders faalt de build.

## 7. Bekende technische punten

| punt | wat er aan de hand is |
| --- | --- |
| `docs/` in de repository | bouw-output die bij elke bouw verandert; ook nodig voor één plaatje. Moeilijk leesbaar in PR's |
| dode markup in `BoardSettings.vue` | onderaan het bestand staat een uitgecomment stukje *Color picker* met Engelse tekst. Geen probleem voor het scherm, maar wel verwarrend; weghalen |
| AZERTY-toetsenborden | de sneltoetsen kijken naar de *letter* die een toets geeft (`e.key`), behalve `Tab`. Op een AZERTY-toetsenbord liggen de clusters van speler 1 en 2 dus fysiek anders dan het toetsenplaatje in het programma laat zien. Optie: overstappen op de plek van de toets (`e.code`), of een AZERTY-plaatje maken |
| keuzerondjes bij de namen | doen niets; ze moesten aangeven welke speler de houdgreep houdt |
| Node 18 in de controles | Node 18 is oud; nieuwe versies van de bouwwerktuigen werken er niet meer op |
| npm-lockfile | dit project gebruikt Yarn. Een `package-lock.json` ernaast veroorzaakt ruis; niet doen |
| Electron (een los te installeren versie) | er is een PR voor; die pakt tegelijk grote versiesprongen op. Zie [07-roadmap.md](07-roadmap.md) |
| Nederlandse versie | er is een PR die de teksten in het programma vertaalbaar maakt; de Nederlandse tekst zelf is nog niet overal klaar. De standaardteksten (mat, ronde, spelernamen) lopen nog niet door die taalbestanden |
| taalbestanden | de teksten staan nu in één TypeScript-bestand met zeer lange regels (soms wel 1800 tekens). Uitgesplitst naar één JSON-bestand per taal, één tekst per regel, maakt zo'n wijziging veel leesbaarder in een pull request. Werk voor de ontwikkelaars; zie §9 |

## 8. Veiligheid

- Er draait niets op een server en er worden geen persoonsgegevens bewaard: namen van judoka's staan
  alleen in de browser en verdwijnen bij het verversen.
- Er zijn geen wachtwoorden of sleutels in dit project. Niets geheimen hoort in deze repository, ook
  niet in een bestand dat je later verwijdert.
- De site gebruikt geen externe diensten, dus een wedstrijd gaat door zonder internet.

## 9. Teksten in het programma: wie bepaalt de woorden

De woorden die op het scherm staan, staan in **taalbestanden** van het programma: één bestand per taal,
met per regel één tekst. Die bestanden zijn werk voor de ontwikkelaars, niet voor de product owner of
de tabel: wie een andere tekst wil, hoeft geen taalbestand open te maken.

1. De **product owner of tabelhouder schrijft wat er moet staan**, in gewone zinnen: in een issue op
   GitHub, of in de markdown van dit handboek. "De knop moet *Alles wissen* heten, niet *Alles
   resetten*."
2. Een **ontwikkelaar** zet die tekst op de juiste plek in de taalbestanden en maakt er een pull request
   van.
3. Een automatische test controleert dat het Engels en het Nederlands **evenveel tekstjes** hebben, dus
   er kan nichts vergeten raken. Wie een tekst wijzigt, hoeft niet beide talen te onderhouden.
4. De vaste woordkeuze — *ippon*, *waza-ari*, *osaekomi*, *shido*, geen "pin" en geen "strafpunt" — staat
   in dit handboek, bij [02-werking.md](02-werking.md) *Begrippen*. Die lijst mag de club zelf
   aanvullen; de ontwikkelaar past hem daarna in de taalbestanden toe.

Kort gezegd: **proza voor de club, taalbestanden voor de ontwikkelaars.**

## 10. Waar pas je iets aan?

- Een regel, een instelling of een tekst in het handboek: pas het markdownbestand in `handbook/` aan
  en maak een issue aan, dan weet de ontwikkelaar dat het programma ook mee moet.
- Een getal of standaardwaarde in het programma: `components/BoardSettings.vue`.
- Een toets: `components/JudoPlayer.vue` (scores) of `components/TimeBanner.vue` (klok en golden score).
- Rekenregels: `src/utils/`, met de test ernaast in `*.test.ts`.
