
// You should implement your task here.

module.exports = function towelSort(matrix) {
  let i = 0
  let myMatrix = matrix
  if (matrix == false || matrix == undefined) {
    return []
  }
  while (i < matrix.length) {
    if (i % 2 !== 0) {
      myMatrix[i] = myMatrix[i].reverse()
      i++
    } else {
      i++
    }
  }
  return myMatrix.flat(Infinity) || []
}
