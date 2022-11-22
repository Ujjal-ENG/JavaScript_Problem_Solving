const ps = require("prompt-sync");
const prompt = ps();
var digits = [];
var digits1 = [];
let num = 78954;
let num2 = [7895478954789547895447895478954n];
while (num2 > 0) {
  digits.push(num2 % 10);
  num2 = Math.trunc(num2 / 10);
  digits1.push(num % 10);
  num = Math.trunc(num / 10);
}
digits.reverse();
var count = 0;
for (let i = 0; i < digits.length; i++){
  if (num[i] === digits[i]) {
    count++;
  }
}
console.log(count);
