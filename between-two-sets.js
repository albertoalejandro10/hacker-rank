/*
 * Complete the 'getTotalX' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY a
 *  2. INTEGER_ARRAY b
 */

function getTotalX (a, b) {
  let count = 0
  for (let i = 1; i <= Math.min(...b); i++) {
    if (areAllFactors(i, a) && isFactorOfAll(i, b)) {
      count++
    }
  }
  return count
}

function isFactorOfAll (num, arr) {
  return arr.every(element => element % num === 0)
}

function areAllFactors (num, arr) {
  return arr.every(element => num % element === 0)
}

const a = [2, 6]
const b = [24, 36]
console.log(getTotalX(a, b))
