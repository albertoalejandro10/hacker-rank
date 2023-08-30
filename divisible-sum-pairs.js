/*
 * Complete the 'divisibleSumPairs' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER k
 *  3. INTEGER_ARRAY ar
 */

function divisibleSumPairs (n, k, ar) {
  let count = 0
  for (let i = 0; i < n; i++) {
    for (let y = i + 1; y < n; y++) {
      if ((ar[i] + ar[y]) % k === 0) {
        count++
      }
    }
  }
  return count
}

const n = 6
const k = 3
const ar = [1, 3, 2, 6, 1, 2]
console.log(divisibleSumPairs(n, k, ar))
