var mostFrequent = function (nums, key) {
  for (let i = 0; i < nums.length; i++) {
    if (i === key) {
      return nums[i];
    }
  }
  return nums[nums.length - 1];
};

console.log(mostFrequent([1, 1000, 2], 1000));
