var maxProduct = function (nums) {
  let max = nums[0];
  let prevMax = nums[0];
  let prevMin = nums[0];

  for (let i = 0; i < nums.length; i++) {
    const option = [nums[i], nums[i] * prevMax, nums[i] * prevMin];
    console.log(option);
    prevMax = Math.max(...option);
    prevMin = Math.min(...option);

    max = Math.max(max, prevMax);
  }
  return max;
};

console.log(maxProduct([2, 3, -2, 4]));
