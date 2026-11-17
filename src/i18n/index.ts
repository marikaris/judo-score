import { createI18n } from 'vue-i18n'

export const LOCALE_STORAGE_KEY = 'judo-score:locale'
export const supportedLocales = ['en', 'nl'] as const

export type SupportedLocale = (typeof supportedLocales)[number]
export type LocalePreference = SupportedLocale | 'auto'

export const messages = {
  en: {
    defaults: {
      mat: 'Mat 1',
      boutName: 'Round',
      playerOne: 'Player 1',
      playerTwo: 'Player 2',
      welcomeMessage: 'Yuseigachi Norg'
    },
    navigation: { close: 'Close', help: 'Help', settings: 'Settings', break: 'Break', resume: 'Resume' },
    settings: {
      title: 'Settings', general: 'General', language: 'Language', automatic: 'Automatic (browser language)',
      english: 'English', dutch: 'Nederlands', mat: 'Mat', boutName: 'Bout name', welcomeMessage: 'Welcome message',
      fontScale: 'Font scale', score: 'Score', addYuko: 'Add yuko', hideShido: 'Hide shido', maxShidos: 'Maximum number of shidos',
      players: 'Players', playerOne: 'Player 1 name', playerTwo: 'Player 2 name', time: 'Time', maxTime: 'Maximum time',
      minutes: 'min', maxPinTime: 'Maximum pin time', seconds: 'sec', ipponStopsTime: 'Ippon stops time',
      timerStrategy: 'Age group / timer strategy', countdown: '13- (count down from maximum time)', countup: '13+ (count up from 0 until stopped)', save: 'Save'
    },
    timer: { resetTimer: 'Reset timer', resetAll: 'Reset all', goldenScore: 'Golden score', controls: 'Timer controls', playerSelector: 'Player selector', history: 'History' },
    help: {
      about: 'About', intro: 'This tool was created by', under: 'under', licenceDescription: 'It is free to use as a scoreboard for judo competitions, without any warranty. The developer is not responsible for any bugs. If you encounter an issue, please submit it on the', issuePage: 'GitHub issue page', source: 'Source code can be found on',
      timerModes: 'Timer modes (age groups)', timerModeDescription: 'In Settings → Time you can select the timer strategy. This setting is stored and remains the same until you change it again.', countdownDescription: 'counts down from the configured maximum time to 00:00 and stops.', countupDescription: 'counts up from 00:00 until you stop the timer.', keyBindings: 'Key bindings', keyBindingsDescription: 'To make the tool easier to use, several keys are bound to functions. See the table below for all available key bindings:', key: 'Key', function: 'Function', runTimer: 'Run timer', runPinTimer: 'Run pin timer', refreshAll: 'Refresh all', refreshTimers: 'Refresh timers', keyboardLayout: 'Keyboard layout for player key bindings', scoringKeyboard: 'Add/subtract scoring (keyboard)', scoringKeyboardDescription: 'Each player has dedicated keys for increasing (+) and decreasing (−) their scores. These keys mirror the +/− buttons on the scoreboard and follow the rules below.', playerOne: 'Player 1', playerTwo: 'Player 2', result: 'Result', scoringRules: 'Scoring rules for additions and subtractions', scoreCannotBeNegative: 'Scores cannot go below 0. Subtracting at 0 has no effect.', twoWazaAri: 'Two Waza-ari automatically convert to one Ippon (the Waza-ari counter resets to 0 and the Ippon counter increases by 1).', ipponWins: 'When a player receives an Ippon, they immediately win the match. If the setting “Ippon stops time” is enabled, the match timer is stopped automatically.', yukoDisabled: 'Yuko can be disabled in Settings. When disabled, Yuko values are hidden and related key bindings are ignored.', onScreenControls: 'You can also use the on-screen + / − buttons to change each score.'
    }
  },
  nl: {
    defaults: {
      mat: 'Mat 1',
      boutName: 'Ronde',
      playerOne: 'Speler 1',
      playerTwo: 'Speler 2',
      welcomeMessage: 'Yuseigachi Norg'
    },
    navigation: { close: 'Sluiten', help: 'Help', settings: 'Instellingen', break: 'Pauze', resume: 'Hervatten' },
    settings: {
      title: 'Instellingen', general: 'Algemeen', language: 'Taal', automatic: 'Automatisch (browsertaal)',
      english: 'English', dutch: 'Nederlands', mat: 'Mat', boutName: 'Rondenaam', welcomeMessage: 'Welkomstbericht',
      fontScale: 'Tekstgrootte', score: 'Score', addYuko: 'Yuko toevoegen', hideShido: 'Shido verbergen', maxShidos: 'Maximumaantal shido’s',
      players: 'Spelers', playerOne: 'Naam speler 1', playerTwo: 'Naam speler 2', time: 'Tijd', maxTime: 'Maximumtijd',
      minutes: 'min', maxPinTime: 'Maximale houdtijd', seconds: 'sec', ipponStopsTime: 'Ippon stopt de tijd',
      timerStrategy: 'Leeftijdsgroep / timerstrategie', countdown: '13- (aftellen vanaf maximumtijd)', countup: '13+ (optellen vanaf 0 tot gestopt)', save: 'Opslaan'
    },
    timer: { resetTimer: 'Timer resetten', resetAll: 'Alles resetten', goldenScore: 'Golden score', controls: 'Timerbediening', playerSelector: 'Spelerkiezer', history: 'Geschiedenis' },
    help: {
      about: 'Over', intro: 'Deze tool is gemaakt door', under: 'onder de', licenceDescription: 'Hij is gratis te gebruiken als scorebord voor judowedstrijden, zonder enige garantie. De ontwikkelaar is niet verantwoordelijk voor bugs. Meld een probleem op de', issuePage: 'GitHub-pagina voor problemen', source: 'De broncode staat op',
      timerModes: 'Timermodi (leeftijdsgroepen)', timerModeDescription: 'In Instellingen → Tijd kun je de timerstrategie kiezen. Deze instelling wordt opgeslagen en blijft gelijk totdat je hem wijzigt.', countdownDescription: 'telt af vanaf de ingestelde maximumtijd tot 00:00 en stopt.', countupDescription: 'telt op vanaf 00:00 totdat je de timer stopt.', keyBindings: 'Sneltoetsen', keyBindingsDescription: 'Om de tool makkelijker te gebruiken, zijn verschillende toetsen aan functies gekoppeld. Zie de tabel hieronder voor alle sneltoetsen:', key: 'Toets', function: 'Functie', runTimer: 'Timer starten', runPinTimer: 'Houdtimer starten', refreshAll: 'Alles resetten', refreshTimers: 'Timers resetten', keyboardLayout: 'Toetsenbordindeling voor sneltoetsen van spelers', scoringKeyboard: 'Score toevoegen/aftrekken (toetsenbord)', scoringKeyboardDescription: 'Elke speler heeft eigen toetsen om scores te verhogen (+) en te verlagen (−). Deze toetsen werken hetzelfde als de +/−-knoppen op het scorebord en volgen de regels hieronder.', playerOne: 'Speler 1', playerTwo: 'Speler 2', result: 'Resultaat', scoringRules: 'Regels voor score toevoegen en aftrekken', scoreCannotBeNegative: 'Scores kunnen niet lager dan 0 worden. Aftrekken bij 0 heeft geen effect.', twoWazaAri: 'Twee Waza-ari worden automatisch één Ippon (de Waza-ari-teller wordt 0 en de Ippon-teller neemt met 1 toe).', ipponWins: 'Wanneer een speler een Ippon krijgt, wint die speler onmiddellijk de wedstrijd. Als “Ippon stopt de tijd” is ingeschakeld, stopt de wedstrijdtimer automatisch.', yukoDisabled: 'Yuko kan worden uitgeschakeld in Instellingen. Dan worden Yuko-waarden verborgen en worden gerelateerde sneltoetsen genegeerd.', onScreenControls: 'Je kunt ook de + / −-knoppen op het scherm gebruiken om elke score te wijzigen.'
    }
  }
} as const

export function normalizeLocale(locale: string | undefined): SupportedLocale {
  return locale?.toLowerCase().startsWith('nl') ? 'nl' : 'en'
}

export function detectBrowserLocale(languages: readonly string[] | undefined = typeof navigator === 'undefined' ? undefined : navigator.languages): SupportedLocale {
  return normalizeLocale(languages?.[0])
}

export function getLocalePreference(storage: Storage | undefined = typeof window === 'undefined' ? undefined : window.localStorage): LocalePreference {
  const stored = storage?.getItem(LOCALE_STORAGE_KEY)
  return stored === 'en' || stored === 'nl' ? stored : 'auto'
}

export function localeForPreference(preference: LocalePreference, languages?: readonly string[]): SupportedLocale {
  return preference === 'auto' ? detectBrowserLocale(languages) : preference
}

const initialLocale = localeForPreference(getLocalePreference())

export const i18n = createI18n({
  legacy: true,
  globalInjection: true,
  locale: initialLocale,
  fallbackLocale: 'en',
  messages
})

if (typeof document !== 'undefined') {
  document.documentElement.lang = initialLocale
}

export function setLocalePreference(preference: LocalePreference) {
  if (preference === 'auto') {
    window.localStorage.removeItem(LOCALE_STORAGE_KEY)
  } else {
    window.localStorage.setItem(LOCALE_STORAGE_KEY, preference)
  }
  i18n.global.locale = localeForPreference(preference)
  if (typeof document !== 'undefined') {
    document.documentElement.lang = i18n.global.locale
  }
}
