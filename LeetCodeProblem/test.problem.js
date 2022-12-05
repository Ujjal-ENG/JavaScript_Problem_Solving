var singleNumber = function (nums) {
  const ht = {};

  for (let num of nums) {
    console.log(ht[num] = ht[num] + 1 || 1);
  }

  for (let key in ht) {
    if (ht[key] === 1) {
      console.log(key);
    }
  }
};
singleNumber([2,2,1,1])