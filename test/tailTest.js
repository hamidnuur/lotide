const assertArraysEqual = require('../assertArraysEqual');
const tail = require('../tail');

//tail(1,2,3);
assertArraysEqual(tail([1, 2, 3]), [2, 3]);