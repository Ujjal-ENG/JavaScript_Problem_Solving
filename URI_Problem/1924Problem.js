const ps = require("prompt-sync");
const prompt = ps();

let size = Number(prompt("Enter the Size of the loop"));

let i = 0;
let subject = new Array();
while (i < size) {
  let array = prompt(`Enter the subject ${i + 1}: `);
  i = i + 1;
  subject.push(array);
}

for (let i = 0; i < subject.length; i++) {
  if (subject[i] === "Ciencia da Computacao") {
    console.log("Ciencia da Computacao" + "\n");
    break;
  } else {
    console.log("Ciencia da Computacao" + "\n");
    break;
  }
}
