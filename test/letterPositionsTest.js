const assertArraysEqual = require('../assertArraysEqual');
const letterPositions = require('../letterPositions');

assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions("eeeee").e, [0, 1, 2, 3, 4]);
assertArraysEqual(letterPositions("lighthouse in the house").h, [3, 5, 15, 18]);