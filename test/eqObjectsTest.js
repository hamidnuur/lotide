const assertObjectsEqual = require('../assertObjectsEqual')

assertObjectsEqual({ a: '1', b: 2 }, { b: 2, a: '1' });
assertObjectsEqual({ a: "1", b: "2" }, { b: "2", a: "1" });
assertObjectsEqual({ a: "1", b: "2" }, { a: "1", b: "2", c: "3" });
assertObjectsEqual({ c: "1", d: ["2", 3] }, { d: ["2", 3], c: "1" });
assertObjectsEqual({ c: "1", d: ["2", 3] }, { c: "1", d: ["2", 3, 4] });