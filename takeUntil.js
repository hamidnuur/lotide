const takeUntil = function(array, callback) {
  let result = []
  for (element of array) {
    if (callback(element)) {
      return result;
    } else result.push(element);
  }
  return result;
}

module.exports = takeUntil;