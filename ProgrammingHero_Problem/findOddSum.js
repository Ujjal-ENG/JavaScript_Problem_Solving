function findOddSum(arrOfNumbers) {
  //write your code here
  //don't forget to write return
  let sum = 0;
  for (i of arrOfNumbers) {
    if (i % 2 == 1) {
      sum += i;
    }
  }
  return sum > 0 ? sum : 0;
}

console.log(findOddSum([5, 7, 8, 10, 45, 30]));
