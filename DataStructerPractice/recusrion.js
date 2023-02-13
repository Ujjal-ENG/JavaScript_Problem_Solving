// function countingNumber(num) {
//   if (num === 0) return console.log("All done");

//   console.log(num);
//   num--;
//   countingNumber(num);
// }

// console.log(countingNumber(7));

function sumRange(num) {
  if (num === 1) return 1;
  return num + sumRange(num - 1);
}

console.log(sumRange(4));
