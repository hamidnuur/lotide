const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};
const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (var i = 0; i < arr1.length; ++i) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
};


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
/*
const eqObjects = function(object1, object2) {
  var size1 = Object.keys(object1).length;
  var size2 = Object.keys(object2).length;
  if (size1 !== size2) {
    return false;
  }
  for (const property in object1) {
    for (const property2 in object2) {
    if ((Array.isArray(object1[property])) && (Array.isArray(object2[property]))) {
      if (eqArrays(object1[property], object2[property])) {
        return false;
      }
    }
    else if (object1[property] !== object2[property]) {
      return false;
    } 
    if (property !== property) {
      return false;
    }
    }
  return true;
  }
};
*/
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(eqObjects(ab, ba)); // => true

const abc = { a: "1", b: "2", c: "3" };
console.log(eqObjects(ab, abc)); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(eqObjects(cd, dc)); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(eqObjects(cd, cd2)); // => false