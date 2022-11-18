"use strict";
// values taken from user by using vs code
// const ps = require("prompt-sync");
// const prompt = ps();

process.stdin.resume();
process.stdin.setEncoding("utf-8");

function print(x) {
  console.log(x);
}
let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});
process.stdin.on("end", () => {
  inputString = inputString.split("\n");
  main();
});
function readline() {
  return inputString[currentLine++];
}

// ********** Code Start **********

function main() {
  let x = parseFloat(readline("Enter the number: ")).toFixed(4);
  for (let i = 0; i < 100; i++) {
    if (i === 0) {
      print(`N[${i}] = ${x}`);
    } else {
      let div = x / 2;
      print(`N[${i}] = ${div.toFixed(4)}`);
      x = div;
    }
  }
}
