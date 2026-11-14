export function getTimer(countCallback: Function) {
  return setInterval(() => {
    countCallback()
  }, 1000)
}

export function prepend(value: any, array: Array<any>) {
  const newArray = array.slice()
  newArray.unshift(value)
  return newArray
}

function pad(val: number) {
  const valString = val + ''
  if (valString.length < 2) {
    return '0' + valString
  } else {
    return valString
  }
}

export function convertSecondsToMinutes(timeInSeconds: number) {
  const seconds = pad(timeInSeconds % 60)
  const minutes = pad(parseInt(String(timeInSeconds / 60)))
  return minutes + ':' + seconds
}

/**
 * Turns a form value into a number within [min, max].
 * Falls back to `fallback` for empty or invalid values: an emptied
 * number input yields '' instead of a number.
 */
export function sanitizeNumber(
  value: unknown,
  fallback: number,
  min: number,
  max: number
): number {
  const num = typeof value === 'number' ? value : parseFloat(String(value))
  if (Number.isNaN(num)) {
    return fallback
  }
  return Math.min(Math.max(num, min), max)
}
