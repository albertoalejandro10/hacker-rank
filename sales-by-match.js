/*
 * Complete the 'sockMerchant' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER_ARRAY ar
 */

function sockMerchant (n, arr) {
  ar.sort()
  let result = 0
  const pairs = []
  let currentGroup = []

  for (let i = 0; i < n; i++) {
    if (currentGroup.length === 0) {
      currentGroup.push(ar[i])
    } else if (ar[i] === currentGroup[currentGroup.length - 1] && currentGroup.length < 2) {
      currentGroup.push(ar[i])
    } else {
      pairs.push(currentGroup)
      currentGroup = [ar[i]]
    }

    if (i === n - 1) {
      pairs.push(currentGroup)
    }
  }

  for (const pair of pairs) {
    if (pair.length === 2) {
      result += 1
    }
  }
  return result
}

const n = 7
const ar = [1, 2, 1, 2, 1, 3, 2]
sockMerchant(n, ar)
