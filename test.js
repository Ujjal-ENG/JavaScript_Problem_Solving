function primeFactorization(n) {
    let factors = [];
    for (let div = 2; div <= n; div++) {
        while (n % div === 0) {
            factors.push(div);
            n /= div;
        }
    }
    return factors;
}
console.log(primeFactorization(18)) // output: [2, 3, 3]);