var addBinary = function (a, b) {
  const num1 = Number(parseInt(a, 2).toString(10));
  const num2 = Number(parseInt(b, 2).toString(10));
  const res = num1 + num2;
  return parseInt(res, 10).toString(2);
};
console.log(addBinary("11", "1"));
