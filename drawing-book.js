/*
 * Complete the 'pageCount' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER p
 */

function pageCount (n, p) {
  const fromStart = Math.floor(p / 2)
  const fromEnd = Math.floor(n / 2) - fromStart
  return Math.min(fromStart, fromEnd)
}

const n = 7 // The number of pages in the book
const p = 3 // the page number to turn to
console.log(pageCount(n, p))
