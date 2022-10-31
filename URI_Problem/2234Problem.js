const ps = require('prompt-sync');
const prompt = ps();

var consumedHotDogs = Number(prompt());
var numberOfParticipants = Number(prompt());

const result = consumedHotDogs / numberOfParticipants;
console.log(result.toFixed(2));