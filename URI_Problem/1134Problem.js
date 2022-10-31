const ps = require("prompt-sync");
const prompt = ps();

let number = Number(prompt("Enter the number: "));

let al = 0;
let gas = 0;
let de = 0;
while (number >= 0) {
  number = Number(prompt("Enter the number: "));
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
console.log('MUITO OBRIGADO');
console.log(`Alcool: ${al}`);
console.log(`Gasolina: ${gas}`);
console.log(`Diesel: ${de}`);
