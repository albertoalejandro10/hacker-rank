/*
 * Complete the 'breakingRecords' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY scores as parameter.
 */

function breakingRecords (scores) {
  let bestScore = scores[0]
  let worstScore = scores[0]
  let bestCount = 0
  let worstCount = 0

  for (let i = 1; i < scores.length; i++) {
    if (scores[i] > bestScore) {
      bestScore = scores[i]
      bestCount++
    } else if (scores[i] < worstScore) {
      worstScore = scores[i]
      worstCount++
    }
  }

  return [bestCount, worstCount]
}

const scores = [10, 5, 20, 20, 4, 5, 2, 25, 1]
console.log(breakingRecords(scores))
