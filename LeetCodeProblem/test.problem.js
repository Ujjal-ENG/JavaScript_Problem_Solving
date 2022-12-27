var myAtoi = function (s) {
  const ht = [];
  let newS = s.trim();
  for (let i of newS) {
    if ((i > 0 && i <= 9) || i === "+" || i === "-" || i === "*" || i === "/") {
      ht.push(i);
    }
  }
  return String(ht).split(",").join("");
};
console.log(myAtoi("-42"));
