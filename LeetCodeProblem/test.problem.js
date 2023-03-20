var countPrimes = function (n) {
  let primes = new Map();
  for (let i = 2; i <= n; i++) {
    primes.set(i, true);
  }
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (primes.get(i)) {
      for (let j = i * i; j <= n; j += i) {
        primes.set(j, false);
      }
    }
  }
  let result = [];
  for (let [key, value] of primes) {
    if (value) {
      result.push(key);
    }
  }
  return result;
};

console.log(countPrimes(10));
