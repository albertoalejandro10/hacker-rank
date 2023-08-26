/*
 * Complete the 'birthday' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY s
 *  2. INTEGER d
 *  3. INTEGER m
 */

function birthday (squares, d, m) {
  let result = 0
  let sum = 0

  // Check if there are enough squares
  if (squares.length < m) {
    return result
  }

  // Calculate the sum of the first m squares
  for (let i = 0; i < m; i++) {
    sum += squares[i]
  }

  // If the sum equals d, increment the result
  if (sum === d) {
    result++
  }

  // For each next square, update the sum and check if it equals d
  for (let i = m; i < squares.length; i++) {
    sum = sum - squares[i - m] + squares[i]
    if (sum === d) {
      result++
    }
  }

  return result
}

const s = [1, 2, 1, 3, 2]
const d = 3
const m = 2
console.log(birthday(s, d, m))
