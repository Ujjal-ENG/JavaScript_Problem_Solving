var findMin = function (nums) {
  return nums.sort().slice(0, 1).join("");
};
console.log(findMin([3, 4, 5, 1, 2]));
