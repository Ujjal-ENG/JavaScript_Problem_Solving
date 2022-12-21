var removeDuplicates = function (nums) {
  let newArr = nums;
  newArr = [...new Set(nums)];
  return newArr
};

console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
