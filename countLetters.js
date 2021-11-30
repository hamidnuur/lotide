const assertEqual = require('./assertEqual');


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

module.exports = countLetters
