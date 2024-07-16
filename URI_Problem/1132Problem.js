const ps = require("prompt-sync");
const prompt = ps();

let num1 = Number(prompt("Enter number 1: "));
let num2 = Number(prompt("Enter number 2: "));
let sum = 0;
for (let i = num1; i <= num2; i++) {
  if (i % 13 !== 0) {
    sum += i;
  }
}
console.log(sum);
