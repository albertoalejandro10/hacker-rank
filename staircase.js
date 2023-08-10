function staircase (n) {
  const numeral = '#'
  for (let i = 1; i <= n; i++) {
    console.log(' '.repeat(n - i) + numeral.repeat(i) + numeral.repeat(i - 1))
  }
  for (let i = 1; i <= n; i++) {
    console.log(' '.repeat(i) + numeral.repeat(Math.max(n - i, 0)) + numeral.repeat(Math.max(n - i - 1, 0)))
  }
}

staircase(6)
