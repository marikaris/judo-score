import { calculateKioskScale } from './kioskScale'
import { expect, test, describe } from '@jest/globals'

describe('kioskScale', () => {
  test('it should return 1 for an exact base-resolution viewport', () => {
    expect(calculateKioskScale(1920, 1080, 1920, 1080)).toBe(1)
  })

  test('it should letterbox by width when the viewport is relatively narrower', () => {
    expect(calculateKioskScale(960, 1080, 1920, 1080)).toBeCloseTo(0.5)
  })

  test('it should letterbox by height when the viewport is relatively shorter', () => {
    expect(calculateKioskScale(1920, 540, 1920, 1080)).toBeCloseTo(0.5)
  })

  test('it should upscale on larger displays', () => {
    expect(calculateKioskScale(3840, 2160, 1920, 1080)).toBe(2)
  })

  test('it should use the limiting (smaller) ratio for off-aspect viewports', () => {
    // 1366x768 (16:9 laptop): width limits
    expect(calculateKioskScale(1366, 768, 1920, 1080)).toBeCloseTo(1366 / 1920)
  })

  test('it should support custom base resolutions', () => {
    expect(calculateKioskScale(800, 600, 1600, 1200)).toBeCloseTo(0.5)
  })
})
