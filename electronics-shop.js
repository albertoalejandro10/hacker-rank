/*
 * Complete the getMoneySpent function below.
 */
function getMoneySpent (keyboards, drives, b) {
  let max = -1

  for (let i = 0; i < keyboards.length; i++) {
    for (let j = 0; j < drives.length; j++) {
      const sum = keyboards[i] + drives[j]

      if (sum <= b) {
        max = Math.max(max, sum)
      }
    }
  }

  return max
}

const b = 60
const keyboards = [40, 50, 60]
const drives = [5, 8, 12]
console.log(getMoneySpent(keyboards, drives, b))
