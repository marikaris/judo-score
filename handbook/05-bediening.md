# 05 — Handleiding voor een toernooidag

Stap-voor-stap, van de auto tot de laatste partij. Print deze pagina uit voor aan de tafel.

## 1. Meenemen

- Laptop of computer met een opgeladen batterij. Het scorebord werkt zonder internet, maar wel met
  stroom: een stekker is dus handig.
- Een **fysiek toetsenbord**. Het scorebord is gemaakt om te bedienen met toetsen, niet met een
  touchscreen of muis.
- HDMI-kabel en de stekker voor het scherm.
- Het scherm of de beamer waarop de stand te zien is.

## 2. Starten

1. Sluit het scherm aan en zet de browser op **volledig scherm** (F11 in de meeste browsers).
2. Ga in de adresbalk naar <https://yuseigachi-score.netlify.app>.
3. Is er geen internet? Open dan de lokale versie op de laptop (zie [06-techniek.md](06-techniek.md),
   *Zelf starten*).
4. Zet het toetsenbord voor de tabelhouder neer.

## 3. Vóór de eerste partij

Open **Settings** en loop dit na:

- **Mat:** staat hier de juiste mat, bijvoorbeeld `Mat 1`?
- **Welcome message:** staat hier de naam van de club of het toernooi?
- **Bout name:** `Ronde`, of de poule die wordt judoëd?
- **Max time:** klopt de speeltijd voor deze leeftijd? Met `+ 1 min` en `- 1 min` erachter. Zie
  [04-regels-jeugd.md](04-regels-jeugd.md), *Welke instellingen bij welke leeftijd*.
- **Age group / timer strategy**: bij een officiële wedstrijd altijd het keuzerondje **13-**, dan telt
  de klok af.
- **Add yuko** en **Hide shido**: zoals de club dat wil voor deze dag.
- Klik dan op **Save**: de instellingen worden overgenomen en het scorebord komt terug in beeld.

Deze waarden worden **niet** onthouden als de pagina opnieuw opent. Alleen de keuze aftellen of
oplopen blijft bewaard. Zet ze dus aan het begin van elke toernooidag, en opnieuw na een pauze of
een F5.

## 4. Tijdens een partij

1. Zet de namen van de twee judoka's bij **Player 1** en **Player 2** in de instellingen.
2. Controleer welke speler bovenaan staat: boven = speler 1, onder = speler 2.
3. Druk op **Hajime** (of `Tab`, of `Control`) zodra de scheidsrechter *Hajime* roept. Het knopje wordt
   dan rood en heet **Matte**; nogmaals indrukken stopt de klok.
4. Score bij de kreten van de scheidsrechter:

   | score | speler 1 (boven) | speler 2 (onder) |
   | --- | --- | --- |
   | ippon | `A` | `J` |
   | waza-ari | `S` | `K` |
   | yuko | `D` | `L` |
   | shido | knopje op het scherm | knopje op het scherm |

5. Houdgreep: klik op **Osaekomi** (of druk op `Shift`) vanaf *Osaekomi*; de houdtijdklok start en het
   knopje wordt **Toketa**. Klik nog eens (of druk nog eens op `Shift`) bij *Toketa*, dan stopt hij.
   Elke beëindigde houdgreep verschijnt in het lijstje onder de klok. Een ippon na 20 seconden, een
   waza-ari na 10 seconden of een yuko na 5 seconden zet je zelf met de toetsen.
6. Bij een ippon stopt de klok vanzelf (standaard). Fout gemaakt? Haal de score er meteen af met
   `Z` / `X` / `C` (speler 1) of `M` / `,` / `.` (speler 2).
7. Is de tijd op en staat het nog gelijk? Druk op **Golden score** (of `G`) voor de verlenging. Het
   ronde-nummer blijft hetzelfde; dat hoort zo.
8. Is de partij klaar? Druk op **Reset all** (of `R`) en zet de namen van de volgende twee judoka's
   neer. Nu loopt het ronde-nummer op.

## 5. Pauze

- Druk op **Break** als het scherm leeg moet zijn: alleen de matnaam op zwart.
- Druk nog eens, dan heet de knop **Resume**, en verschijnt de stand weer.
- Na een pauze: kijk de instellingen nog een keer na, zeker na een stroomstoring of een opnieuw
  geladen pagina.

## 6. Iets fout?

| situatie | wat je doet |
| --- | --- |
| verkeerde score erbij | dezelfde score eraf halen met de min-toets (`Z`, `X`, `C`, `M`, `,`, `.`) of met `−` op het scherm |
| ippon was een fout | ippon eraf (`Z` of `M`); de klok hoort weer te lopen, dus start opnieuw met `Tab` |
| twee waza-ari werden automatisch één ippon | staat nu zo; er wordt gewerkt aan een reparatie waarbij één waza-ari terugkomt als je de ippon eraf haalt |
| derde shido gaf de tegenstander een ippon | haal de shido eraf; de ippon van de tegenstander moet je nu zelf ook eraf halen. Ook hier is een reparatie onderweg |
| klok per ongeluk gestart | **Reset timer** (`T`): alleen de klok terug, cijfers blijven staan |
| namen staan verkeerd | bij de instellingen, velden `Player 1 name:` en `Player 2 name:`. De keuzerondjes op het scherm wisselen niets |
| tekst te klein op het scherm | bij de instellingen **Font scale** groter maken met `+` |
| bord staat vol en de partij is voorbij | **Reset all** (`R`) |
| de pagina doet raar | laad de pagina opnieuw (F5). Alle instellingen staan dan weer op de standaardwaarden |

## 7. Per ongeluk toetsen ingedrukt

De toetsen zijn bedoeld om niets te doen zolang de instellingen of de helppagina openstaan, zodat je
dan gewoon kunt typen. In de live versie lukt dat nog niet altijd: een scoretoets kan daar alsnog
doorgeven. Veiligste werkwijze: klik eerst **Close** in de balk bovenaan en scoren doe je daarna.

## 8. Na afloop

- Er wordt niets bewaard: geen uitslagen, geen houdgrepen. Wil je uitslagen terug, noteer ze in Excel
  of maak een issue aan (zie [07-roadmap.md](07-roadmap.md)).
- Maak van de finale een foto van het bord, handig voor de club-website.

## 9. Wie helpt?

- Technische problemen of vragen over het programma: de ontwikkelaars van de club
  (zie [01-product.md](01-product.md)).
- Iets gevonden dat niet klopt? Maak een *issue* aan op
  <https://github.com/marikaris/judo-score> met: welke dag, welk scherm, welke toets je indrukte en
  wat er gebeurde.
- Wil je een **ander woord op het scherm**? Schrijf in gewone woorden wat er moet staan, in een issue of
  in dit handboek; de ontwikkelaar zet het in de taalbestanden. Zie [06-techniek.md](06-techniek.md),
  *Teksten in het programma*.
