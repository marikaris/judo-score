/**
 * Calculates the uniform scale factor needed to fit a fixed base resolution
 * (e.g. 1920x1080) into the current viewport, letterboxing on the wider axis.
 */
export function calculateKioskScale(
  viewportWidth: number,
  viewportHeight: number,
  baseWidth: number,
  baseHeight: number
): number {
  return Math.min(viewportWidth / baseWidth, viewportHeight / baseHeight)
}
