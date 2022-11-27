const ps = require("prompt-sync");
const prompt = ps();

let n = prompt("Enter the value of N: ");
n = Number.parseInt(n);

let i = 0;
while (i in n) {
  console.log(i);
  i++;
}
