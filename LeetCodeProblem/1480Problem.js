var runningSum = function (array) {
  let sum = 0;
  let temp = [];
  for (let i = 0; i < array.length; i++) {
    temp = array[i];
    sum += temp;
    temp = sum;
  }
  return temp;
};
runningSum([3, 1, 2, 10, 1]);
