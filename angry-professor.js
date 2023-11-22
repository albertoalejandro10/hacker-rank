/*
 * Complete the 'angryProfessor' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. INTEGER k
 *  2. INTEGER_ARRAY a
 */

function angryProfessor (k, a) {
  const negatives = a.filter(element => element <= 0)
  if (negatives.length >= k) {
    return 'NO'
  } else {
    return 'YES'
  }
}

const k = 3
const a = [-1, -3, 4, 2]
console.log(angryProfessor(k, a))
