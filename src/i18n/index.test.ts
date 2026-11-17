import { describe, expect, test } from '@jest/globals'
import {
  detectBrowserLocale,
  getLocalePreference,
  localeForPreference,
  messages,
  normalizeLocale
} from './index'

function messageKeys(messages: Record<string, unknown>, prefix = ''): string[] {
  return Object.entries(messages).flatMap(([key, value]) => {
    const path = prefix ? `${prefix}.${key}` : key
    return typeof value === 'object' && value !== null
      ? messageKeys(value as Record<string, unknown>, path)
      : [path]
  })
}

describe('locale selection', () => {
  test('normalizes Dutch browser locales and falls back to English', () => {
    expect(normalizeLocale('nl-NL')).toBe('nl')
    expect(normalizeLocale('NL-be')).toBe('nl')
    expect(normalizeLocale('de-DE')).toBe('en')
    expect(normalizeLocale(undefined)).toBe('en')
  })

  test('uses the first browser language for automatic selection', () => {
    expect(detectBrowserLocale(['nl-BE', 'en-US'])).toBe('nl')
    expect(detectBrowserLocale(['fr-FR', 'nl-NL'])).toBe('en')
    expect(localeForPreference('en', ['nl-NL'])).toBe('en')
    expect(localeForPreference('auto', ['nl-NL'])).toBe('nl')
  })

  test('only accepts explicit supported locale preferences from storage', () => {
    const storage = { getItem: () => 'nl' } as unknown as Storage
    expect(getLocalePreference(storage)).toBe('nl')
    expect(getLocalePreference({ getItem: () => 'de' } as unknown as Storage)).toBe('auto')
  })
})

test('English and Dutch catalogues expose the same message keys', () => {
  expect(messageKeys(messages.en).sort()).toEqual(messageKeys(messages.nl).sort())
})
