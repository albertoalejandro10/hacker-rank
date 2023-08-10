function diagonalDifference (arr) {
  let left = 0
  let right = 0
  const length = arr.length

  for (let i = 0; i < length; i++) {
    left += arr[i][i]
    right += arr[i][length - i - 1]
  }

  return Math.abs(left - right)
}

const matrix = [
  [11, 2, 4],
  [4, 5, 6],
  [10, 8, -6]
]

console.log(diagonalDifference(matrix))
