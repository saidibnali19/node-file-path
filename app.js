const path = require("path");

const example = "test.txt";

console.log(path.dirname(example));
console.log(path.basename(example));
console.log(path.extname(example));
console.log(path.basename(example, path.extname(example)));
