/*
 * Complete the 'migratoryBirds' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function migratoryBirds (arr) {
  const object = {}
  let biggestValue = -1
  let biggestKey = -1

  for (let i = 0; i < arr.length; i++) {
    if (object[arr[i]]) {
      object[arr[i]] += 1
    } else {
      object[arr[i]] = 1
    }
  }
  Object.keys(object).forEach(key => {
    const value = object[key]
    if (value > biggestValue) {
      biggestValue = value
      biggestKey = key
    }
  })

  return biggestKey
}

const arr = [1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4]
console.log(migratoryBirds(arr))
