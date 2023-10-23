/*
 * Complete the 'hurdleRace' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER k
 *  2. INTEGER_ARRAY height
 */

function hurdleRace (k, height) {
  const tallestHeight = Math.max(...height)
  let magicPotions = 0
  if (tallestHeight > k) {
    magicPotions = tallestHeight - k
  }
  return magicPotions
}

const k = 7
const height = [2, 5, 4, 5, 2]
console.log(hurdleRace(k, height))
