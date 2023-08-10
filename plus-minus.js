function plusMinus (arr) {
  const length = arr.length
  const counts = [0, 0, 0] // [positive, negative, zero]

  for (let i = 0; i < length; i++) {
    if (arr[i] > 0) {
      counts[0] += 1
    } else if (arr[i] < 0) {
      counts[1] += 1
    } else {
      counts[2] += 1
    }
  }

  const ratios = counts.map(count => (count / length).toFixed(6))
  console.log(ratios.join('\n'))
}

const arr = [1, 1, 0, -1, -1]

plusMinus(arr)
