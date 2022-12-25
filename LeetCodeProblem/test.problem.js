var combinationSum = function (candidates, target) {
  let sum = candidates.reduce((prev, curr) => {
    if ((prev + curr) === target) {
      return prev + curr;
    }
  }, 0);

  return sum;
};
console.log(combinationSum([2, 3, 6, 7], 7));
