var longestConsecutive = function (nums) {
  let newNum = nums.sort((a, b) => a - b);

  newNum = newNum.filter((x, i) => newNum.indexOf(x) === i);
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    if (newNum[0] === 0) {
      if (i === newNum[i]) {
        count++;
      }
    } else {
      if (i + 1 === newNum[i]) {
        count++;
      }
    }
  }

  return count;
};
console.log(longestConsecutive([100, 4, 200, 1, 3, 2]));
