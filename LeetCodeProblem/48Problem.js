const ps = require("prompt-sync");
const prompt = ps();

let rows = 3;
let cols = 2;
let Array2d = new Array(rows);
for (let i = 0; i < rows; i++) {
  Array2d[i] = new Array(cols);
}

for (let i = 0; i < rows; i++) {
  for (let j = 0; j < cols; j++) {
    Array2d[i][j] = Number(prompt(`${i} , ${j} = `));
  }
}
console.log("\n");

for (let i = 0; i < rows; i++) {
  for (let j = 0; j < cols; j++) {
    console.log(Array2d[i] + "+" + Array2d[j]);
  }
}
