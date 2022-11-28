var isAnagram = function (s, t) {
  const firstSort = s.split("").sort().join("");
  const secondSort = t.split("").sort().join("");
  return firstSort === secondSort
};

const res = isAnagram("rat","car")
console.log(res)