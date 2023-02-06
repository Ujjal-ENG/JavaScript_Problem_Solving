function secondLargest(numbers) {
  //Write your code here
  //Don't forget to return
  let max = numbers[0];
  let seondMax = numbers[1];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i];
      numbers.pop(i);
    }
  }
  return seondMax;
}

console.log(secondLargest([10, 33, 5, 99, 6]));
