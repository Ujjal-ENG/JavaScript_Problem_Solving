var maxSubArray = function (nums) {
  let maxNumber = nums[0];
  let temp = 0;

  for (let i = 0; i < nums.length; i++) {
    temp += nums[i];

    if (temp > maxNumber) {
      maxNumber = temp;
    }
    if (temp < 0) {
      temp = 0;
    }
  }
  return maxNumber;
};
