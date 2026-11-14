# Handboek judo-scorebord

Dit is de uitleg over het scorebord, in het Nederlands, voor iedereen die meewerkt:
de club, de tabel, de scheidsrechter, de trainers en de ontwikkelaars.

Er is geen kennis van programmeren voor nodig. Je leest hier wat het scorebord doet,
hoe je het bedient en welke spelregels we volgen.

## De documenten

| Document | Voor wie | Wat erin staat |
| --- | --- | --- |
| [01-product.md](01-product.md) | club, trainers | Wat het scorebord is, voor wie het gemaakt is en wat het niet doet |
| [02-werking.md](02-werking.md) | iedereen die het bedient | Alle knoppen, instellingen, toetsen en wat ze doen |
| [03-regels-senioren.md](03-regels-senioren.md) | tabel, scheidsrechter | De spelregels zoals die voor senioren gelden (IJF) |
| [04-regels-jeugd.md](04-regels-jeugd.md) | tabel, trainers | Afwijkende regels voor kinderen (JBN/DJB) |
| [05-bediening.md](05-bediening.md) | tabelhouder aan de mat | Stap-voor-stap handleiding voor een toernooidag |
| [06-techniek.md](06-techniek.md) | ontwikkelaars | Hoe het programma in elkaar zit, hoe je iets aanpast en test |
| [07-roadmap.md](07-roadmap.md) | iedereen | Wat er gaat komen en welke keuzes er open staan |

## Werken aan deze teksten

- Deze bestanden staan in de map `handbook/` in de repository. Je mag ze gewoon aanpassen.
- Open een bestand op GitHub, klik het potloodje, maak je wijzigingen en beschrijf in één zin wat je
  wijzigde. GitHub slaat dat op als *commit* op een eigen tak en vraagt dan om een *pull request*;
  een ontwikkelaar zet het daarna door. Zo blijft elke tekstwijziging navolgbaar.
- Tekst in deze map is gewoon markdown: `#` is een kop, `-` is een lijstje, `|` maakt een tabel.
  Meer uitleg: <https://www.markdownguide.org/basic-syntax/>.
- Wil je een regel of instelling veranderen? Pas de tekst aan **én** maak een issue aan op
  GitHub, dan weet de ontwikkelaar dat het programma ook aangepast moet worden.
- Twijfel je over markdown of lukt het opslaan niet? Schrijf je wijziging in een issue, in gewone
  woorden. Een ontwikkelaar zet hem in deze map.

## Woordkeuze (blijf consistent)

We schrijven in het Nederlands, maar de judoterms blijven zoals ze zijn:
*ippon*, *waza-ari*, *yuko*, *shido*, *osaekomi*, *hansoku-make*, *golden score*, *hantei*,
*toketa*, *hajime*, *mate*. In een zin schrijven we die klein: "de tweede waza-ari telde als ippon".
Verdere woordkeuzes staan in [02-werking.md](02-werking.md) onder *Begrippen*.

## Twee dingen die vaak verward worden

- **Deze map (`handbook/`)** = de teksten die je mag lezen en aanpassen.
- **De map `docs/`** in de repository = de gegenereerde website van het scorebord
  (de versie op <https://yuseigachi-score.netlify.app>). Die map wordt bij elke bouw opnieuw
  gemaakt; aanpassen heeft geen zin. Alleen het losse plaatje `docs/assets/KeyboardLayoutConfig.svg`
  (de toetsenindeling op de helppagina) is handgemaakt en moet je met rust laten.
