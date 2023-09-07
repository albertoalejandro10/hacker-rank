/*
 * Complete the 'dayOfProgrammer' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts INTEGER year as parameter.
 */

function dayOfProgrammer (year) {
  // Julian Calendar
  if (year === 1918) {
    return '26.09.' + year
  }
  if (year >= 1700 && year <= 1917) {
    if (year % 4 === 0) {
      // console.log('It is divisible by 4, so it is a leap year.')
      return '12.09.' + year
    } else {
      // console.log('It is not a leap year')
      return '13.09.' + year
    }
  } else if (year >= 1919) {
    if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
      // console.log('It is a leap year')
      return '12.09.' + year
    } else {
      return '13.09.' + year
    }
  }
}

const year = 2016
dayOfProgrammer(year)
