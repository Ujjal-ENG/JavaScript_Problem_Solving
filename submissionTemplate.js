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
  let x = Number(readline("Enter the Size of the item"));
  for (let i = 0; i < 1000; i++) {
    print(`N[${i}] = ${i % x}`);
  }
}
