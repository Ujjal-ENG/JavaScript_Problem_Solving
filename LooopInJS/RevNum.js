const revNum = (num) => {
  if (num < 0) return -1 * rev(num);
  const rev = (num + "").split("").reverse().join("");
  return rev;
};

const res = revNum(-321);
console.log(res);
