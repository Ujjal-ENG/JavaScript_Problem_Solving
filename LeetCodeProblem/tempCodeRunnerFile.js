var myAtoi = function (s) {
  const ht = [];
  let newS = s.trim();
  for (let i of newS) {
    if (i > 0 && i <= 9) {
      ht.push(i);
    }
  }
  return String(ht).split(",").join("");
};