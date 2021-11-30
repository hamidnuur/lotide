const head   = require('./head');
const tail   = require('./tail');
const middle = require('./middle');
const eqArrays = require('./eqArrays');
const eqObjects = require('./eqObjects');
const countLetters = require('./countLetters');
const countOnly = require('./countOnly');
const findKey = require('./findKey');
const findKeyByValue = require('./findKeyByValue');
const letterPositions = require('./letterPositions');
const map = require('./map')
const takeUntil = require('./takeUntil')
const without = require('./without')
const assertObjectsEqual = require('./assertObjectsEqual');
const assertArraysEqual = require('./assertArraysEqual');
const assertEqual = require('./assertEqual');

module.exports = {
  head:   head,
  tail:   tail,
  middle: middle,
  eqArrays: eqArrays,
  eqObjects: eqObjects,
  countLetters: countLetters,
  countOnly: countOnly,
  findKey: findKey,
  findKeyByValue: findKeyByValue,
  letterPositions: letterPositions,
  map: map,
  takeUntil: takeUntil,
  without: without,
  assertObjectsEqual: assertObjectsEqual,
  assertArraysEqual: assertArraysEqual,
  assertEqual: assertEqual,
};