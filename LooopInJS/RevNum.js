const revNum = (num) => {
  const rev = (num + "").split("").reverse().join("");
  return rev;
};

const res = revNum(-321);
console.log(res);
