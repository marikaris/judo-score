# 07 — Wat er komt en welke keuzes open staan

Deze lijst is het startpunt voor nieuwe *issues* op GitHub. De volgorde is zoals het team het
besproken heeft (maart-oktober 2026). Niets hier is beloofd; de club beslist. Kapotte dingen houd je
buiten dit document: die meld je als issue, dan blijft hier alleen het werk dat nog vóór ons ligt.

## 1. Grootste wens: een pouleprogramma

Bas wil het oude programmaatje voor lotingen en poules vervangen door een fatsoenlijk
pouleprogramma voor judotoernooien.

- Het wordt een **los programma**, niet ingebouwd in het scorebord. Mariska wilde het eerst in het
  scorebord, maar is meegegaan in: apart is overzichtelijker.
- Het scorebord moet er wel mee kunnen **samenwerken**: poules en partijen doorgeven, uitslagen
  terugkrijgen.
- Eerste stap: opschrijven wat het programma moet kunnen, een schets maken, en vastleggen waar het
  scorebord ophoudt. Mariska maakt daar de wensenlijst en de issues van.
- De club test op dit moment een extern pouleprogramma voor scholen. Werkt dat goed, dan wordt de
  nood kleiner, maar een eigen programma blijft op de tafel.

## 2. Bij poules hoort bewaren: een backend

Zodra poules en uitslagen erbij komen, is opslag nodig:

- op zijn minst ergens bestanden opslaan, het liefst een database.
- Een programmeertaal om in te bouwen: Python, Go of TypeScript/Node (Java te zwaar).
- Het moet goedkoop en licht blijven, en Bas moet het zelf kunnen draaien.

## 3. Nederlands en Engels in het programma

Er is een *pull request* die alle teksten in het programma vertaalbaar maakt:

- de taal wordt automatisch gekozen uit de browserinstelling, en is zelf te wisselen;
- woorden die je zelf intikt (spelernamen, mat, welkomstbericht) worden **niet** vertaald: dat is
  invoer, geen programmatekst;
- de Nederlandse woorden zelf moeten nog nagekeken worden. Daar staat een woordlijst voor in
  [02-werking.md](02-werking.md), *Begrippen*;
- de werkwijze voor woorden op het scherm: de product owner of tabelhouder schrijft de gewenste tekst in
  gewone zinnen (issue of handboek), de ontwikkelaar zet hem in de taalbestanden. Staat in
  [06-techniek.md](06-techniek.md), *Teksten in het programma*. De club hoeft geen taalbestand open te
  maken.

Voor de vertaalwerkzaamheden heeft Netlify een recente Node-versie nodig. Mariska kijkt na wat er
nodig is en zet dat in Netlify.

## 4. Werken zonder internet, en een losse app

- Het scorebord werkt nu al zonder internet. Vincent werkt aan een **installeerbare versie** (bij
  voorbeeld op de Mac): een app zonder browser.
- Iemand moet dat op Windows uittesten (Robin heeft een Windows-laptop).
- Er wordt gekeken naar een vaste ontwikkel-omgeving (*devcontainer*), omdat de verschillende versies
  van Node en Vite bij de ontwikkelaars al tot problemen hebben geleid.

## 5. Toernooi-CMS (project van Jowan)

- Jowan (docent ICT) **verkent** een **CMS voor judotoernooien**, misschien met een betaallink, voort
  bordurende op de `judoshaiai`-omgeving.
- Het moet met het scorebord samenwerken; hij deelt een concreet plan met het team.
- Verwant document: de wensenlijst van Bas (*"Mijn wensen judo en ICT"*).

## 6. Dingen die met de spelregels te maken hebben

Uit [03-regels-senioren.md](03-regels-senioren.md) en [04-regels-jeugd.md](04-regels-jeugd.md):

| wens | waarom |
| --- | --- |
| een **gelijk** (hiki wake) kunnen tonen | bij kinderen onder 9 eindigt een partij soms gelijk; nu moet het bord met de hand gewist worden |
| een **hantei**-aanduiding | na een korte verlenging wijzen de scheidsrechters de winnaar aan; het bord laat dat nu niet zien |
| golden score **zonder tijdslimiet** | senioren spelen golden score tot de eerste score; nu staat er altijd 60 seconden op |
| **10 en 5 seconden** bij de houdtijdklok | 20 s is ippon, 10-19 s waza-ari, 5-9 s yuko; nu telt de klok maar één grens en zet je de score zelf |
| winst na drie shido's als **hansoku-make** in plaats van ippon | zo tonen echte wedstrijdschermen het; het scorebord geeft nu een ippon. Beslissing: voorlopig ippon houden en het opschrijven, omdat de meeste lokale toernooien dat zo doen |
| de toetsen op een **AZERTY-toetsenbord** liggen anders | het programma kijkt naar de letter die een toets geeft; op AZERTY liggen de clusters van speler 1 en 2 fysiek anders dan het plaatje in de helppagina laat zien. Optie: op de plek van de toets gaan werken, of een AZERTY-plaatje maken |
| de **keuzerondjes** bij de namen doen niets | ze moeten laten zien welke speler de houdgreep houdt |

## 7. Gebruik en bediening

- **Kioskmodus**: altijd 1920×1080 als basis, geschaald naar elk scherm, met zwarte balken ernaast.
  Is gemaakt, maar moet nog bekeken en doorgezet worden. Zie [01-product.md](01-product.md).
- **Tekstgrootte** 0,5 tot 2,0 is er; heel grote letters op een klein scherm lopen nog over.
- **Staand of liggend scherm**: er is een beginnende tak `feat/orientation`, nog niet af.
- **Uitslagen in het geschiedenislijstje tonen** (issue #14): nu staan er alleen seconden.
- **Componenttests**: er zijn alleen tests voor de rekenregels. Het team is overeengekomen tests voor
  de schermen alsnog te maken.

## 8. Onderhoud

- De automatische controles lopen op Node 18, 20 en 22. Node 18 is oud; nieuwe versies van de
  bouwwerktuigen werken er niet meer op. Komt de eerste grote versiesprong binnen, verander dan eerst de
  Node-keuzes in de workflow, en daarna de versies.
- Yarn alleen. Geen `package-lock.json` ernaast zetten.
- Versies van Node, Vite en de rest actueel houden: verouderde versies zijn een terugkerende pijn.
- Nu is elke commit op `main` meteen een release. Als het team groeit, komen er misschien echte
  releases en milestones.

## 9. Open vragen

1. Pouleprogramma: eigen ding maken, of meeliften op het schoolpouleprogramma dat de club test?
2. Welke taal en welke hosting voor de backend: eigen Docker of beheerd?
3. Moeten meer instellingen bewaard blijven (nu alleen de klokkeuze)?
4. Een vaste release-procedure als er meer medewerkers komen?
5. Hoe ver gaat het CMS van Jowan, en waar raakt het het scorebord?

## 10. Clubdingen

- Netlify: de Node-versie voor de vertalingen. Mariska.
- Adres van de club op Google: verhuisd van het Bewegingscentrum naar de **Brinkhof** (wordt
  bijgewerkt, oktober 2026).
- Het scorebord draait op weekendtoernooien: nieuwe functies moeten vóór een toernooiweekend
  stabiel zijn, niet erna.

## 11. Een wens of een bug melden?

Maak een issue aan op <https://github.com/marikaris/judo-score>. Zet erin:

- wat je verwachtte en wat er gebeurde;
- welke dag, welke mat, welke instellingen, welke toets je indrukte;
- bij voorkeur een foto van het scherm.

Eén bug of één wens per issue. Bij voorkeur één *pull request* per issue, dan blijft duidelijk
waarom iets veranderd is.
