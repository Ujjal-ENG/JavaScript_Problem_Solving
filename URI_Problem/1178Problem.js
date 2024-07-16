const ps = require("prompt-sync");
const prompt = ps();
let x = parseFloat(prompt("Enter the number: ")).toFixed(4);

for (let i = 0; i < 100; i++) {
  if (i === 0) {
    console.log(`N[${i}] = ${x}`);
  } else {
    let div = x / 2;
    console.log(`N[${i}] = ${div.toFixed(4)}`);
    x = div;
  }
}
