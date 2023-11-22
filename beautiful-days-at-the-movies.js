/*
 * Complete the 'beautifulDays' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER i
 *  2. INTEGER j
 *  3. INTEGER k
 */

function beautifulDays (i, j, k) {
  // Write your code here
  const diff = j - i
  let arr = Array.from({ length: diff + 1 })
  arr = arr.map((_, iterator) => i + iterator)

  const results = []
  for (const iterator of arr) {
    const result = (Math.abs(iterator - reverseInt(iterator))) / k
    if (Number.isInteger(result)) {
      results.push(result)
    }
  }
  return results.length
}

function reverseInt (n) {
  return parseInt(n.toString().split('').reverse().join('')) * Math.sign(n)
}

const i = 20 // The starting day number
// Days to go to the beautiful day 20-21-22-23
const j = 23 // The ending day number
const k = 6 // the divisor

console.log(beautifulDays(i, j, k))
