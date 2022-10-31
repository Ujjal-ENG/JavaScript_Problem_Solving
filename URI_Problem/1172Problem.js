"use strict";

const ps = require('prompt-sync');
const prompt = ps();

var values = [];
var i = 0;
while (i < 10) {
  var input = prompt('Enter the value: ');
  values.push(input);
  i++;
}

for (i = 0; i < 10; i++){
  if ((values[i] === null) || values[i] < 0) {
    values[i] = 1;
  } 
  console.log(`X[${i}] = ${values[i]}`)
}
