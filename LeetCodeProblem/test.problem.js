var trailingZeroes = function (n) {
  let fact = 1;
  for (let i = 1; i <= n; i++) {
    fact *= i;
  }
  let takenRes = fact + "";
  let values = [];
  if (takenRes.includes(0)) {
    for (let i = 0; i < takenRes.length; i++) {
      if (takenRes[i] === "0") {
        values.push(i);
      }
    }
  }
  console.log(values.lastIndexOf("0"));
  return 0;
};

console.log(trailingZeroes(10));
