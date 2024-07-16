const ps = require("prompt-sync");
const prompt = ps();
// let myinputarr = [4, 32, 34, 543, 3456, 654, 567, 87, 6789, 98];
let myinputarr = [];
let size = Number(prompt("Enter the arrar SIze: "));

for (var a = 0; a < size; a++) {
  myinputarr[a] = Number(prompt("Enter array Element " + (a + 1)));
}
const evenArray = myinputarr.filter((arrs) => {
  return arrs % 2 === 0;
});
evenArray.sort((a, b) => a - b);
const oddArray = myinputarr.filter((arrs) => {
  return arrs % 2 !== 0;
});
oddArray.sort((a, b) => b - a);
console.log(`${evenArray},${oddArray}`);
