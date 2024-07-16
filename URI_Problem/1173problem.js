"use strict";

const ps = require("prompt-sync");
const prompt = ps();

var input = prompt("Give the value: ");
var values = [];
for (var i = 0; i < 10; i++) {
  values[0] = Number(input);
  values[i + 1] = 2 * values[i];

  console.log(`N[${i}] = ${values[i]}`);
}
