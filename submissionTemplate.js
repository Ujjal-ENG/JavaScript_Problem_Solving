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

  let num1 = Number(readline("Enter number 1: "));
  let num2 = Number(readline("Enter number 2: "));
  let sum = 0;
  for (let i = num1; i <= num2; i++) {
    if (i % 13 !== 0) {
      sum += i;
    }
  }
  print(sum);
}
