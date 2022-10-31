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
  let number = Number(readline("Enter the number: "));

  let al = 0;
  let gas = 0;
  let de = 0;
  while (number >= 0) {
    number = Number(readline("Enter the number: "));
    if (number === 4) {
      break;
    } else if (number === 1) {
      al = al + 1;
    } else if (number === 2) {
      gas = gas + 1;
    } else if (number === 3) {
      de = de + 1;
    } else {
    }
  }
  print("MUITO OBRIGADO");
  print(`Alcool: ${al}`);
  print(`Gasolina: ${gas}`);
  print(`Diesel: ${de}`);
}
