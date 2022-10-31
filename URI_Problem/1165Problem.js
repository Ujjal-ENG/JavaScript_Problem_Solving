const ps = require("prompt-sync");
const prompt = ps();

var values = [100];
var arraySize = Number(prompt());
for (var i = 1; i <= arraySize; i++) {
  var input = Number(prompt());
  values[i] = input;

}
var isPrime = true;
for (var j = 2; j < input; j++) {
  if (values[i] % j === 0) {
    isPrime = false;
  }
  else {
    if (isPrime) {
      console.log(`${input} eh primo\n`);
    } else {
      console.log(`${input} nao eh primo\n`);
    }
  }

}
