const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(str) {

  const results = {};

  for (var i = 0; i < str.length; i++) {
    let current = str.charAt(i);
    if (results[current]) {
      results[current] += 1;
    } else {
      results[current] = 1;
    }
  }
  delete results[" "];
  return results;
}

let x = countLetters("lighthouse in the house");

assertEqual(x["l"], 1);
assertEqual(x["i"], 2);
assertEqual(x["g"], 1);
assertEqual(x["h"], 4);
assertEqual(x["t"], 2);
assertEqual(x["o"], 2);
assertEqual(x["u"], 2);
assertEqual(x["s"], 2);
assertEqual(x["e"], 3);
assertEqual(x["n"], 1);

