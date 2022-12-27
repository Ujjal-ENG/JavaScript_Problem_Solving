var firstMissingPositive = function (nums) {
  let newArray = nums.sort((a, b) => b - a);
  let maxNum = nums[0];
  const ht = {};
  const ht2 = {};
  for (let i = 0; i <= maxNum; i++) {
    ht[i] = ht[i];
  }
  for (let i of nums) {
    ht[i] = ht[i] || 1;
  }
  let newArray2 = [];

  if (nums.includes(-1)) {
    for (let i of nums) {
      if (i > -1) newArray2.push(i);
    }

    for (let i = 0; i <= maxNum; i++) {
      ht2[i] = ht2[i];
    }
    for (let i of newArray2) {
      ht2[i] = ht2[i] || 1;
    }

    for (let i in ht2) {
      if (ht[i] === undefined) {
        if (Number(i) === 0) {
          continue;
        }
        return i;
      }
    }
  } else {
    for (let i in ht) {
      if (ht[i] === undefined) {
        if (Number(i) === 0) {
          continue;
        }
        return Number(i);
      } else {
        return maxNum + 1;
      }
    }
  }
};
console.log(firstMissingPositive([3, 4, -1, 1]));
