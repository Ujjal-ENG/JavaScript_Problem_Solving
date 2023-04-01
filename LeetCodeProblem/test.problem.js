var maxSubArray = function (nums) {
  const ht = {};
  if (nums.length === 1) {
    return 1;
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
  const sum = newArray.reduce((ps, cs) => ps + cs, 0);
  return sum;
};

console.log(maxSubArray([5, 4, -1, 7, 8]));
