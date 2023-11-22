/*
 * Complete the 'viralAdvertising' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER n as parameter.
 */

function viralAdvertising (n) {
  let shared = 5
  let liked = 2
  let accumulative = 2
  for (let i = 1; i < n; i++) {
    shared = Math.floor(shared / 2) * 3
    liked = shared / 2
    accumulative += Math.floor(liked)
  }
  return accumulative
}

const n = 50
console.log(viralAdvertising(n))
