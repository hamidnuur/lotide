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

const letterPositions = function(sentence) {
  const results = {};
  // logic to update results here
  for (var i = 0; i < sentence.length; i++) {
    let current = sentence.charAt(i);
    if (results[current]) {
      results[current].push(i);
    } else {
      results[current] = [i];
    }
  }
  delete results[" "];
  return results;
};


assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions("eeeee").e, [0, 1, 2, 3, 4]);
assertArraysEqual(letterPositions("lighthouse in the house").h, [3, 5, 15, 18]);