var isPowerOfTwo = function (n) {
  let temp = n;
  let mathPow;
  for (let i = 0; i < temp; i++) {
    mathPow = Math.pow(2, i);
    if (mathPow === n) {
      return true;
    }
  }
  return false
};

console.log(isPowerOfTwo(3));
