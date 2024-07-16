const ps = require("prompt-sync");
const prompt = ps();
var values = [];
for (let i = 0; i <= 19; i++){
  var input = prompt("Index: "+i+" ekhn valu de: ");
  values[i] = input;
}
for (let j = values.length; j >= 0; j--){
  console.log(values[j]);
}