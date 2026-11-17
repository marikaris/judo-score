# Use Vue I18n for interface localization

The scoreboard supports English and Dutch interface copy through Vue I18n, with TypeScript message catalogues. The
active locale is an operator preference: use a persisted explicit choice when present, otherwise normalize the browser
locale to `nl` or fall back to `en`; changing it updates interface copy without changing match state or operator-entered
configuration. Japanese judo terms remain unchanged, while locale-owned defaults are translated only before an operator
replaces them.
