var maxSubArray = function (nums) {
  let currentSum = nums[0];
  let maxSum = nums[0];
  if (nums.length === 1) {
    return nums[0];
  }
  for (let i = 0; i < nums.length; i++) {
    currentSum = Math.max(currentSum + nums[i], nums[i]);
    maxSum = Math.max(maxSum, currentSum);
  }
  return maxSum;
};

console.log(maxSubArray([8, -19, 5, -4, 20]));
