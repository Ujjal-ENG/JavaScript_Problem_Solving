const ps = require('prompt-sync');
const prompt = ps();

var values = [];
var size = prompt();
for (var i = 0; i < size; i++){
  var input = prompt();
  values[i] = input;
}
for (let j of values){
  console.log(values[j]);
}