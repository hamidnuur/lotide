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

const without = function(source, itemsToRemove){
  let array = []
  for (var i = 0; i < source.length; ++i) {
      if (source[i] !== itemsToRemove[i]) {
        array.push(source[i]);
      }
    }
  return array;
};

//console.log(without([1, 2, 3], [1])) // => [2, 3]
//console.log(without(["1", "2", "3"], [1, 2, "3"])) // => ["1", "2"]

//const words = ["hello", "world", "lighthouse"];
//without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
//assertArraysEqual(words, ["hello", "world", "lighthouse"]);

assertArraysEqual(without([1, 2, 3], [1]), [2,3])
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"])
assertArraysEqual(without([3, 2, 1], [1, 2, 3]), [])