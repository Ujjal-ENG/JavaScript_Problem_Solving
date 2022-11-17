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
  let size = Number(readline("Enter the Size of the loop"));

  let i = 0;
  const subject = [];
  while (i < size) {
    let array = readline(`Enter the subject ${i + 1}: `);
    i = i + 1;
    subject.push(array);
  }

  for (let i = 0; i < subject.length; i++) {
    if (subject[i] === "Ciencia da Computacao") {
      print("Ciencia da Computacao" + "\n");
      break;
    } else {
      print("Ciencia da Computacao" + "\n");
      break;
    }
  }
}
