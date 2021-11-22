const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function(arr) {
  return arr.slice(1);
};

tail(1,2,3);
assertEqual(1, 1);
