const assertEqual = require('./assertEqual')


const eqObjects = function(object1, object2) {
  var keys1 = Object.keys(object1);
  var keys2 = Object.keys(object2);
  if (keys1.length !== keys2.length) {
    return false;
  }
  for (const item of keys1) {
    if (Array.isArray(object1[item]) && Array.isArray(object2[item])) {
      if (!(eqArrays(object1[item], object2[item]))) {
        return false;
      }
    } else if (object1[item] !== object2[item]) {
      return false;
    }
  }
  return true;
};

module.exports = eqObjects;