function miniMaxSum (arr) {
  const ascendingArray = [...arr].sort((a, b) => a - b)
  const descendingArray = [...ascendingArray].reverse()

  ascendingArray.pop()
  descendingArray.pop()
  const min = ascendingArray.reduce((a, b) => a + b, 0)
  const max = descendingArray.reduce((a, b) => a + b, 0)

  console.log(max)
  console.log(min)
}

const arr = [3, 1, 5, 9, 7]
miniMaxSum(arr)
