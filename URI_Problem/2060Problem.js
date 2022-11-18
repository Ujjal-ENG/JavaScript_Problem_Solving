const ps = require("prompt-sync");
const prompt = ps();

let size = Number(prompt("Enter the size: "));
let arr = [];
for (let j = 0; j < size; j++) {
  let numbers = Number(prompt("Number: "));
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
console.log(`${mul2} Multiplo(s) de 2`);
console.log(`${mul3} Multiplo(s) de 3`);
console.log(`${mul4} Multiplo(s) de 4`);
console.log(`${mul5} Multiplo(s) de 5`);
