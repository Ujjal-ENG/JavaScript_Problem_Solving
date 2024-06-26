function primeFactorization(n) {
    let factors = [];
    for (let i = 2; i <= n; i++) {
        while (n % i === 0) {
            factors.push(i);
            n /= i;
        }
    }
    return factors;
}
console.log(primeFactorization(18)) // output: [2, 3, 3]);