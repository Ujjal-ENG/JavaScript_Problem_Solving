var digitCount = function (nums) {
  const ht = {};
  for (let i of nums) {
    ht[i] = ht[i] + 1 || 1;
  }
  for (i in ht) {
    if (ht[0] >=1) {
      return false;
    }
  }
  return true;
};
console.log(digitCount("0"));
