import { getTimer, prepend, convertSecondsToMinutes, sanitizeNumber } from './utils'
import { expect, test, describe, jest } from '@jest/globals'

describe('utils', () => {
  describe('getTimer', () => {
    jest.useFakeTimers()

    test('it should call callback every 1000ms', () => {
      const callback = jest.fn()
      getTimer(callback)

      expect(callback).not.toBeCalled()

      jest.advanceTimersByTime(1000)
      expect(callback).toHaveBeenCalledTimes(1)

      jest.advanceTimersByTime(2000)
      expect(callback).toHaveBeenCalledTimes(3)
    })

    test('it should return an interval id', () => {
      const callback = jest.fn()
      const timer = getTimer(callback)
      expect(timer).toBeDefined()
      clearInterval(timer)
    })
  })

  describe('prepend', () => {
    test('it should add element at the beginning', () => {
      const array = [1, 2, 3]
      const result = prepend(0, array)
      expect(result).toEqual([0, 1, 2, 3])
    })

    test('it should not mutate the original array', () => {
      const array = [1, 2, 3]
      const result = prepend(0, array)
      expect(array).toEqual([1, 2, 3])
      expect(result).not.toBe(array)
    })
  })

  describe('sanitizeNumber', () => {
    test('it should fall back for an emptied number input', () => {
      expect(sanitizeNumber('', 120, 1, 3600)).toBe(120)
    })

    test('it should fall back for a non-numeric value', () => {
      expect(sanitizeNumber('abc', 3, 1, 9)).toBe(3)
    })

    test('it should parse numeric strings', () => {
      expect(sanitizeNumber('90', 120, 1, 3600)).toBe(90)
    })

    test('it should clamp negative values to the minimum', () => {
      expect(sanitizeNumber(-60, 120, 1, 3600)).toBe(1)
    })

    test('it should clamp values above the maximum', () => {
      expect(sanitizeNumber(9999, 120, 1, 3600)).toBe(3600)
    })

    test('it should keep a valid value', () => {
      expect(sanitizeNumber(2, 1, 0.5, 2)).toBe(2)
    })
  })

  describe('convertSecondsToMinutes', () => {
    test('it should format time correctly for single digits', () => {
      expect(convertSecondsToMinutes(65)).toBe('01:05')
    })

    test('it should format time correctly for zero', () => {
      expect(convertSecondsToMinutes(0)).toBe('00:00')
    })

    test('it should format time correctly for 59 seconds', () => {
      expect(convertSecondsToMinutes(59)).toBe('00:59')
    })

    test('it should format time correctly for 60 seconds', () => {
      expect(convertSecondsToMinutes(60)).toBe('01:00')
    })

    test('it should format time correctly for more than 10 minutes', () => {
      expect(convertSecondsToMinutes(665)).toBe('11:05')
    })
  })
})
