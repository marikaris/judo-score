import { describe, expect, test } from '@jest/globals'
import { getStartTime, tickMatchTime } from './matchTimerLogic'

describe('matchTimerLogic', () => {
  describe('getStartTime', () => {
    test('countdown starts at maxTime', () => {
      expect(getStartTime(true, 120)).toBe(120)
    })

    test('count up starts at 0', () => {
      expect(getStartTime(false, 120)).toBe(0)
    })
  })

  describe('tickMatchTime', () => {
    test('countdown decrements until 0', () => {
      expect(tickMatchTime(3, true)).toEqual({ nextTimeInSeconds: 2, shouldStop: false })
      expect(tickMatchTime(1, true)).toEqual({ nextTimeInSeconds: 0, shouldStop: false })
    })

    test('countdown signals stop at 0 and stays at 0', () => {
      expect(tickMatchTime(0, true)).toEqual({ nextTimeInSeconds: 0, shouldStop: true })
    })

    test('count up increments and never signals stop', () => {
      expect(tickMatchTime(0, false)).toEqual({ nextTimeInSeconds: 1, shouldStop: false })
      expect(tickMatchTime(119, false)).toEqual({ nextTimeInSeconds: 120, shouldStop: false })
      expect(tickMatchTime(120, false)).toEqual({ nextTimeInSeconds: 121, shouldStop: false })
    })
  })
})
