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
  let size = Number(readline("Enter the size: "));
  let arr = [];
  for (let j = 0; j < size; j++) {
    let numbers = Number(readline("Number: "));
    arr.push(numbers);
  }
  let mul2 = 0;
  let mul3 = 0;
  let mul4 = 0;
  let mul5 = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      mul2++;
    }
    if (arr[i] % 3 == 0) {
      mul3++;
    }
    if (arr[i] % 4 == 0) {
      mul4++;
    }
    if (arr[i] % 5 == 0) {
      mul5++;
    }
  }
  print(`${mul2} Multiplo(s) de 2`);
  print(`${mul3} Multiplo(s) de 3`);
  print(`${mul4} Multiplo(s) de 4`);
  print(`${mul5} Multiplo(s) de 5`);
}
