var isIsomorphic = function (s, t) {
  const ht = {};

  if (s === t) {
    return true
  }
  for (let i of s) {
    ht[i] = ht[i] + 1 || 1;
  }
  for (let j of t) {
    ht[j] = ht[j] + 1 || 1;
  }
  let count = 0;
  for (let i in ht) {
    if (ht[i] > 1) {
      count++;
    }
  }
  if (count === 1) {
    return false;
  }
  return true;
};
console.log(isIsomorphic("a", "a"));
