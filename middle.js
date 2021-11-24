const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (var i = 0; i < arr1.length; ++i) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
};

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

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

assertArraysEqual(middle([1]), [])
assertArraysEqual(middle([1, 2]), [])

assertArraysEqual(middle([1, 2, 3]), [2])
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3])

assertArraysEqual(middle([1, 2, 3, 4]), [2, 3])
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4])


