import { describe, expect, test } from '@jest/globals'
import {
  DEFAULT_GOLDEN_SCORE_TIME_SECONDS,
  toggleGoldenScoreMaximumTime
} from './goldenScore'

describe('goldenScore', () => {
  test('enabling golden score switches maximum time to default golden-score time', () => {
    expect(toggleGoldenScoreMaximumTime(false, 120)).toEqual({
      goldenScore: true,
      maximumTimeSeconds: DEFAULT_GOLDEN_SCORE_TIME_SECONDS
    })
  })

  test('disabling golden score restores maximum time to configured maxTime', () => {
    expect(toggleGoldenScoreMaximumTime(true, 120)).toEqual({
      goldenScore: false,
      maximumTimeSeconds: 120
    })
  })

  test('golden score time can be customized', () => {
    expect(toggleGoldenScoreMaximumTime(false, 120, 90)).toEqual({
      goldenScore: true,
      maximumTimeSeconds: 90
    })
  })
})
