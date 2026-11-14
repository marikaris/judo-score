# 02 — Hoe het scorebord werkt

Dit document beschrijft alles wat je op het scherm ziet en wat elke knop en elke toets doet.
De namen op het scherm zijn nu nog Engels; er wordt aan een Nederlandse versie gewerkt.
Werkt iets op de website anders dan hier staat, dan is een reparatie nog niet overgenomen;
meld het, dan zorgt de ontwikkelaar ervoor (zie [07-roadmap.md](07-roadmap.md)).

## 1. Het scherm

```
┌────────────────────────────────────────────────────────────────────────────┐
│ balk boven: mat │ clubnaam │ ronde + nummer    Help · Settings · Break     │
├────────────────────────────────────────────────────────────────────────────┤
│ speler 1 (boven, wit): naam │ ippon │ waza-ari │ yuko │ shido              │
├────────────────────────────────────────────────────────────────────────────┤
│ speler 2 (onder, rood): naam │ ippon │ waza-ari │ yuko │ shido             │
├────────────────────────────────────────────────────────────────────────────┤
│ Reset timer · Reset all · Golden score │ klok │ houdtijd + lijstje │ namen │
└────────────────────────────────────────────────────────────────────────────┘
```

- Speler 1 staat bovenaan, speler 2 onderaan.
- De balk bovenaan is zwart met witte tekst.
- De helppagina en de instellingen **vervangen** het midden van het scherm: er is dan alleen nog
  de balk bovenaan.
- Tijdens **Break** is het hele scherm zwart met alleen de matnaam in hele grote letters.

## 2. Wat je per speler ziet

| kolom | wat erin staat |
| --- | --- |
| naam | de naam van de judoka, in te stellen bij de instellingen |
| ippon | meestal 0 of 1; hiermee is de partij voorbij |
| waza-ari | je ziet hier maar één waza-ari: de tweede telt meteen als ippon |
| yuko | optioneel, altijd uit te zetten. Yuko's tellen niet op tot een waza-ari en beslissen niet wie er wint |
| shido | 0 tot het ingesteld maximum (standaard 3), uit te zetten |

Bij elke waarde staat een **+** en een **−**. Een score gaat nooit onder de 0.
De shido-knopjes staan in een rijtje, één knopje per straf.

## 3. De wedstrijdklok

De grote tijd, geschreven als `mm:ss`.

| knop | toets | wat hij doet |
| --- | --- | --- |
| **Hajime** / **Matte** | `Tab` of `Control` | start en stop de klok. Het knopje verandert van groen (*Hajime*) naar rood (*Matte*) |
| **Reset timer** | `T` | alleen de klok terug naar het begin. Cijfers en ronde-nummer blijven staan |
| **Golden score** | `G` | verlenging aan of uit (zie hieronder) |
| **Reset all** | `R` | alles leeg: cijfers, beide klokken, houdgrepenlijstje, golden score uit. Het ronde-nummer loopt op |

Je kunt ook op de grote tijd zelf klikken om te starten of te stoppen.

De klok loopt op twee manieren, te kiezen bij de instellingen:

- **13- (aftellen)**: begint bij de maximale tijd (standaard 120 seconden), loopt naar 00:00 en stopt
  dan vanzelf.
- **13+ (oplopen)**: begint bij 00:00 en loopt door tot je hem zelf stopt.

Bij een officiële wedstrijd wordt er altijd afgeteld. Deze keuze is het enige dat onthouden blijft
als je de pagina opnieuw opent.

## 4. Golden score

| knop | toets | wat hij doet |
| --- | --- | --- |
| **Golden score** | `G` | nogmaals indrukken zet de verlenging uit |

- De wedstrijdklok begint opnieuw, nu met 60 seconden (standaard).
- De tijd krijgt een gele markering.
- **Dezelfde partij**: cijfers, shido's en het ronde-nummer blijven zoals ze zijn. Druk dus geen
  **Reset all** bij golden score.
- De verlenging is nu altijd 60 seconden. De regels kennen geen tijdslimiet voor senioren: druk
  **Golden score** nog eens, of laat de klok doorlopen, en houd de echte tijd bij. Zie
  [03-regels-senioren.md](03-regels-senioren.md).

## 5. De houdtijdklok (osaekomi)

| knop | toets | wat hij doet |
| --- | --- | --- |
| **Osaekomi** / **Toketa** | `Shift` | knop onder de klok, start en stop de houdtijdklok. Met `Shift` kan ook: de toets doet precies hetzelfde als op die knop klikken |
| rond pijltje naast `History:` | - | het lijstje met eerdere houdgrepen leegmaken |

- De klok telt seconden op en wordt rood als de ingestelde maximale houdtijd (standaard 20 seconden)
  voorbij is.
- Elke beëindigde houdgreep komt in het lijstje onder de klok te staan, tot je op dat pijltje drukt
  of op **Reset all**.
- Het scorebord telt de houdtijd, maar telt **niet** de score: een ippon na 20 seconden, een waza-ari
  na 10 seconden of een yuko na 5 seconden zet je zelf met de toetsen.
- Een houdgreep van minder dan 5 seconden geeft niets; je drukt Osaekomi en Toketa, en het lijstje
  laat die tijd zien.

## 6. Knoppen rechtsboven

| knop | wat hij doet |
| --- | --- |
| **Help** / **Close** | helppagina: wat dit project is, de twee klokmethodes en alle toetsen |
| **Settings** / **Close** | instellingen (zie hieronder) |
| **Break** / **Resume** | pauze: alleen de matnaam op een zwart scherm. De stand blijft onveranderd |

## 7. Alle toetsen

Eén toetsenbord aan de tafel bedient alles. De toetsen van speler 1 liggen onder je linkerhand,
die van speler 2 onder je rechterhand.

**Optellen (score erbij)**

| score | speler 1 (boven) | speler 2 (onder) |
| --- | --- | --- |
| ippon | `A` | `J` |
| waza-ari | `S` | `K` |
| yuko | `D` | `L` |

**Aftrekken (score eraf)**

| score | speler 1 (boven) | speler 2 (onder) |
| --- | --- | --- |
| ippon | `Z` | `M` |
| waza-ari | `X` | `,` (komma) |
| yuko | `C` | `.` (punt) |

**Klok en overig**

| actie | toets |
| --- | --- |
| wedstrijdklok starten of stoppen | `Tab` of `Control` |
| tijd terugzetten | `T` |
| alles resetten (volgende partij) | `R` |
| golden score | `G` |
| houdgreep starten of stoppen | `Shift` (zelfde als klikken op de knop *Osaekomi* / *Toketa*, zie §5) |

De shido's hebben geen toets: die zet je met de knopjes op het scherm.
De toetsen zijn bedoeld om niets te doen zolang de instellingen of de helppagina open zijn, zodat je
in de tekstvelden kunt typen. In de live versie lukt dat nog niet altijd: het kan gebeuren dat er een
score bij komt terwijl je typt. Die reparatie is onderweg (zie [07-roadmap.md](07-roadmap.md)).

**Let op met een Franse of Belgische toetsenindeling (AZERTY).** Het programma kijkt naar de *letter*
die de toets geeft, niet naar de plek op het toetsenbord. Op een AZERTY-toetsenbord liggen A, Z, Q en W
dus anders: de toetsen van speler 1 vind je daar op een andere plek. Zet bij twijfel even vast welke
letters de toetsen geven, of gebruik een toetsenbord met de gewone indeling (QWERTY). De tabel en het
plaatje in het programma gaan namelijk van die gewone indeling uit.

## 8. De instellingen

De velden staan onder elkaar. Links de naam zoals hij nu op het scherm staat, rechts wat het
betekent.

| veld op het scherm | wat het betekent |
| --- | --- |
| `Mat:` | naam van deze mat, bijvoorbeeld `Mat 1` |
| `Bout name:` | naam van de reeks, bijvoorbeeld `Ronde` of `Poule A` |
| `Welcome message:` | tekst in de balk bovenaan, meestal de clubnaam |
| `Font scale:` | tekstgrootte van 0,5 tot 2,0, met `+` en `-` ernaast |
| vinkje `Add yuko` | yuko-kolom tonen of verbergen (standaard aan) |
| vinkje `Hide shido` | shido-kolom verbergen |
| `Max number of shido's:` | hoeveel straffen voordat een speler verliest, standaard 3. Dit veld is grijs zolang shido's verstopt zijn |
| `Player 1 name:` / `Player 2 name:` | namen van de twee judoka's |
| `Max time:` | lengte van de partij in seconden, standaard 120, met `+ 1 min` en `- 1 min` ernaast |
| `Max pin time:` | lengte van de houdtijd in seconden, standaard 20 |
| vinkje `Ippon stops time` | bij een ippon meteen de wedstrijdklok stoppen (standaard aan) |
| `Age group / timer strategy` | de keuze uit `13- (count down from max time)` en `13+ (count up from 0 until stopped)` |
| **Save** | alles overnemen en het midden van het scherm weer laten zien |

Er is **geen Cancel-knop**. Wil je niets overnemen, klik dan **Close** in de balk bovenaan: de
oude instellingen blijven dan staan. Met **Save** neem je alles over.

Het ronde-nummer loopt alleen op bij **Reset all**.

## 9. Wat er onthouden wordt

Alleen de keuze tussen aftellen en oplopen blijft bewaard als de pagina opnieuw geladen wordt.
Alle andere instellingen beginnen de volgende keer weer met de standaardwaarden.
Er wordt niets van de partijen bewaard: geen uitslagen, geen houdgrepen.

## 10. Eén ding dat op het scherm staat maar nu niets doet

- De **keuzerondjes met de spelersnamen** rechtsonder: die zijn bedoeld om aan te geven welke speler
  de houdgreep houdt. Ze doen op dit moment niets; het houdtijdlijstje toont alleen de seconden.
  Zeg bij een houdgreep dus erbij welke speler houdt.

## 11. Begrippen

Zo schrijven we het overal in deze handleiding en, zodra de Nederlandse versie er is, in het programma:

| wij schrijven | niet | betekenis |
| --- | --- | --- |
| ippon, waza-ari, yuko, shido | volle punt, halve ippon, strafpunt | de scores, in een zin klein geschreven |
| waza-ari-awasete-ippon | twee halve ippons | twee waza-ari zijn één ippon |
| osaekomi, houdgreep | pin | de houdgreep op de grond |
| houdtijd | houdtimer, pintijd | de klok die bij een houdgreep loopt |
| toketa | "ontsnap" | de scheidsrechter maakt de houdgreep los |
| hajime, mate, matte | start, stop | de kreten van de scheidsrechter |
| golden score | gouden score | de verlenging na een gelijk einde |
| hantei | jurybeslissing | de scheidsrechters wijzen de winnaar aan |
| hansoku-make | diskwalificatie | zoveel straffen of zo'n zware overtreding dat je verliest |
| judoka | judospeler | de persoon die judo beoefent |
| mat, tatami | vloer | het judo-vlak |
| ronde, partij | game, potje | één wedstrijd tussen twee judoka's |
