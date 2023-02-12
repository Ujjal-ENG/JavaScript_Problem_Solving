function countUniqueValues(nums) {
  const ht = {};

  for (let i of nums) {
    ht[i] = ht[i] + 1 || 1;
  }
  let count = 0;
  for (let i in ht) {
    count++;
  }
  return count;
}

console.log(countUniqueValues([]));
