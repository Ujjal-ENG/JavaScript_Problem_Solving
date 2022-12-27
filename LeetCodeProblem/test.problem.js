var firstMissingPositive = function (nums) {
  let newArray = nums.sort((a, b) => b - a);
  let maxNum = nums[0];
  const ht = {};
  let newNum = 1;
  for (let i = 0; i <= maxNum; i++) {
    ht[i] = ht[i];
  }
  for (let i of nums) {
    ht[i] = ht[i] || 1;
  }

  for (let i in ht) {
    if (ht[i] === undefined) {
      if (Number(i) === 1) {
        return 1;
      }
    } else {
      return maxNum + 1;
    }
  }
};
console.log(firstMissingPositive([3,4,-1,1]));
