var searchInsert = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      return i;
    }
    let temp = target;
    if (nums[i] > temp) {
      nums[i] = temp;
      return i;
    }
  }
};

console.log(searchInsert([1, 3, 5, 7], 6));
