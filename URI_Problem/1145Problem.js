"use strict";

const ps = require("prompt-sync");
const prompt = ps();

let values = [];
var i = 0;
while (true) {
  let a = prompt("Provide the value ");
  if (a < 0) {
    break;
  } else {
    Number(values.push(a));
    var length = values.length;
  }
}
var sum = 0;
for (var i = 0; i < values.length; i++) {
  sum = Number(values[i]) + sum;
  var average = sum / length;
}

console.log(average.toFixed(2));
