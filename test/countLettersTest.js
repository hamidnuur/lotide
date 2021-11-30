const assertEqual = require('../assertEqual')
const countLetters = require('../countLetters')

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
