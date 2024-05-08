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
