// const ps = require("prompt-sync");
// const prompt = ps();

// // let numbers = [];
// // for (let i = 0; i < 4; i++) {
// //   let num = Number(prompt("Enter the value: "));
// //   numbers.push(num);
// // }
// // let sum = 0;
// // for (let j = 0; j < numbers.length; j++) {
// //   sum = sum + numbers[j]
// // }

// let n1 = Number(prompt());
// let n2 = Number(prompt());
// let n3 = Number(prompt());
// let n4 = Number(prompt());

// let res = n1 + n2 + n3 + n4 - 3;

// console.log(res+'\n');

const readline = require("readline");

var input = readline.createInterface({
  input: process.stdin,
});

const userInput = [];

input.on("line", (values) => {
  userInput.push(values);
});

input.on("close", () => {
  console.log(addvalues(userInput));
});

const addvalues = (data) => {
  var sum = 0;
  var num = data[0].split(" ");
  for (let i = 0; i < num.length; i++) {
    num[i] = parseInt(num[i]);
    sum += num[i];
  }
  return sum;
};
