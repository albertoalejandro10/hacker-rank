function birthdayCakeCandles (candles) {
  candles = candles.sort((a, b) => a - b).reverse()
  const max = candles.filter(number => number === candles[0])
  console.log(max.length)
}

const candles = [3, 2, 1, 3]
birthdayCakeCandles(candles)
