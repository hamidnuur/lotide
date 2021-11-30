
const middle = function(array) {
  let mid = []
  let len = array.length
  if (len < 3) {
    return mid;
  } else if (len % 2 === 0) {
    mid.push(array[len/2 - 1])
    mid.push(array[len/2])
    return mid;
  } else if (len % 2 === 1) {
    mid.push(array[parseInt(len/2)])
    return mid;
  }
}

module.exports = middle;