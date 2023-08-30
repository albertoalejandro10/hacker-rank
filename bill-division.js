/*
 * Complete the 'bonAppetit' function below.
 *
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY bill
 *  2. INTEGER k
 *  3. INTEGER b
 */

function bonAppetit (bill, k, b) {
  bill.splice(k, 1)
  const correctPay = (bill.reduce((a, b) => a + b, 0)) / 2
  if (correctPay === b) {
    return console.log('Bon Appetit')
  }
  console.log(b - correctPay)
}

const bill = [2, 4, 6]
const k = 2
const b = 3
bonAppetit(bill, k, b)
