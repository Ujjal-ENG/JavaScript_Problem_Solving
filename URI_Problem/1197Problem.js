const ps = require('prompt-sync');
const prompt = ps();
var a;
var b ;
while ((a = Number(prompt()))&& (b = Number(prompt()))){
console.log((a * b) * 2);
}

