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


module.exports = letterPositions;