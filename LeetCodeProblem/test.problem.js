var isPowerOfFour = function (n) {
  while (n > 1) {
    n /= 3;
  }

  return n === 1;
};

console.log(isPowerOfFour(27));
