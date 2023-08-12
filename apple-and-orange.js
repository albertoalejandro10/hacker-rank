/*
 * Complete the 'countApplesAndOranges' function below.
 *
 * The function accepts following parameters:
 *  1. INTEGER s
 *  2. INTEGER t
 *  3. INTEGER a
 *  4. INTEGER b
 *  5. INTEGER_ARRAY apples
 *  6. INTEGER_ARRAY oranges
 */

function countApplesAndOranges (s, t, a, b, apples, oranges) {
  const applesOnLand = apples
    .map(apple => a + apple)
    .filter(apple => apple >= s && apple <= t)

  const orangesOnLand = oranges
    .map(orange => b + orange)
    .filter(orange => orange >= s && orange <= t)

  console.log(applesOnLand.length)
  console.log(orangesOnLand.length)
}

const startingPoint = 7
const endingPoint = 10
const appleTree = 4
const orangeTree = 12
const apples = [2, 3, -4]
const orange = [3, -2, -4]

countApplesAndOranges(startingPoint, endingPoint, appleTree, orangeTree, apples, orange)
