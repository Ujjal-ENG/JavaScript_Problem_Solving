const ps = require("prompt-sync");
const prompt = ps();

var values = [1000];

var sizeSelect = Number(prompt("Provide your desire array size: "));

for (var i = 0; i < sizeSelect; i++) {
  var input = Number(prompt());
  values[i] = input;
}
var min = values[0];
for (var j = 0; j < values.length; j++) {
  // console.log(min)
  if (values[j] < min) {
    min = values[j];
    var positon = j;
  }
}
console.log(`Menor valor: ${min}\nPosicao: ${positon}`);
