/*
 * Complete the 'designerPdfViewer' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY h
 *  2. STRING word
 */

function designerPdfViewer (h, word) {
  const letters = 'abcdefghijklmnopqrstuvwxyz'.split('')
  const arr = h.map((element, index) => {
    return {
      letter: letters[index],
      number: element
    }
  })
  // console.log(arr)

  const words = word.split('')
  const result = words.map(element => {
    return arr.filter(x => x.letter === element)
  })
  const numbers = result.map(element => {
    return element[0].number
  })

  const maxNumber = Math.max.apply(Math, numbers)
  return maxNumber * word.length
}

const h = [1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 7]
const word = 'zaba'
console.log(designerPdfViewer(h, word))
