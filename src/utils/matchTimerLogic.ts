export function getStartTime(isCountdown: boolean, maxTime: number): number {
  return isCountdown ? maxTime : 0
}

export function tickMatchTime(
  timeInSeconds: number,
  isCountdown: boolean
): { nextTimeInSeconds: number; shouldStop: boolean } {
  if (isCountdown) {
    if (timeInSeconds !== 0) {
      return { nextTimeInSeconds: timeInSeconds - 1, shouldStop: false }
    }
    return { nextTimeInSeconds: 0, shouldStop: true }
  }

  return { nextTimeInSeconds: timeInSeconds + 1, shouldStop: false }
}
