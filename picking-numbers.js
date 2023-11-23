/*
 * Complete the 'pickingNumbers' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY a as parameter.
 */

function pickingNumbers (a) {
  const map = Array(100).fill(0)
  for (let i = 0; i < a.length; i++) {
    map[a[i]]++
  }
  let max = 0
  for (let i = 1; i < map.length; i++) {
    if (map[i] + map[i - 1] > max) {
      max = map[i] + map[i - 1]
    }
  }
  return max
}

const arr = [4, 6, 5, 3, 3, 1]
console.log(pickingNumbers(arr))
