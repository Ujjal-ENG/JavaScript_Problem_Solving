var divide = function (dividend, divisor) {
  if (divisor === -1) {
    let res = Math.trunc(dividend / divisor);
    return res - 1;
  }
  return Math.trunc(dividend / divisor);
};
console.log(divide(-2147483648, -1));
