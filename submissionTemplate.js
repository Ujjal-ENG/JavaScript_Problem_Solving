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
  let myinputarr = [];
  let size = Number(readline("Enter the arrar SIze: "));

  for (var a = 0; a < size; a++) {
    myinputarr[a] = Number(readline("Enter array Element " + (a + 1)));
  }
  const evenArray = myinputarr.filter((arrs) => {
    console.log("\n");

    return arrs % 2 === 0;
  });
  evenArray.sort((a, b) => a - b);
  const oddArray = myinputarr.filter((arrs) => {
    console.log("\n");
    return arrs % 2 !== 0;
  });
  oddArray.sort((a, b) => b - a);
  print(`${evenArray},${oddArray}`);
}
