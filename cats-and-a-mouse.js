// Complete the catAndMouse function below.
function catAndMouse (x, y, z) {
  const catToMouseA = Math.abs(z - x)
  const catToMouseB = Math.abs(z - y)
  if (catToMouseA < catToMouseB) {
    return 'Cat A'
  } else if (catToMouseA > catToMouseB) {
    return 'Cat B'
  } else {
    return 'Mouse C'
  }
}

// CAT A position
const x = 2
// CAT B position
const y = 5
// Mouse position
const z = 4
console.log(catAndMouse(x, y, z))
