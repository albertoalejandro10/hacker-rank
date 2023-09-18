/*
 * Complete the 'countingValleys' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER steps
 *  2. STRING path
 */

function countingValleys (steps, path) {
  let level = 0
  let valleys = 0

  for (let i = 0; i < steps; i++) {
    if (path[i] === 'D') {
      level--
    } else if (path[i] === 'U') {
      if (++level === 0) {
        valleys++
      }
    }
  }
  return valleys
}

const steps = 12
const path = 'DDUUDDUDUUUD'
countingValleys(steps, path)
