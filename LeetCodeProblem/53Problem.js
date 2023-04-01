var maxSubArray = function (nums) {
  const ht = {};
  if (nums.length === 1) {
    return nums[0];
  }
  for (let i of nums) {
    ht[i] = ht[i] + 1 || 1;
  }
  let newArray = [];
  let minArray = [];
  for (let i in ht) {
    if (Number(i) > 0) {
      newArray.push(Number(i));
    } else {
      minArray.push(Number(i));
    }
  }
  newArray.push(Math.max(...minArray));
  const sum = newArray.reduce((ps, cs) => {
    if (ps + cs <= 0) {
      if (ps > 0) return ps;
      else return cs;
    }
    return ps + cs;
  }, 0);
  return sum;
};
