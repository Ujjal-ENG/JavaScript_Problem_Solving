var search = function (nums, target) {
  let findIdx = [];
  if (nums.includes(target)) {
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] === target) {
        findIdx.push(i);
      }
    }
    return findIdx;
  }
  return [-1, -1];
};
console.log(search([5, 7, 7, 8, 8, 10], 6));
