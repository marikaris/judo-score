export const DEFAULT_GOLDEN_SCORE_TIME_SECONDS = 60

export function toggleGoldenScoreMaximumTime(
  currentlyGoldenScore: boolean,
  maxTimeSeconds: number,
  goldenScoreTimeSeconds: number = DEFAULT_GOLDEN_SCORE_TIME_SECONDS
): { goldenScore: boolean; maximumTimeSeconds: number } {
  const goldenScore = !currentlyGoldenScore
  return {
    goldenScore,
    maximumTimeSeconds: goldenScore ? goldenScoreTimeSeconds : maxTimeSeconds
  }
}
