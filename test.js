function fibonacci(n) {
  let a = 0, b = 1,c;
  if(n <= 1) return n;
  for (let i = 0; i < n; i++) {
    a = b;
    b = c;
    c = a + b;
  }
  return a;
}

console.log(fibonacci(15));