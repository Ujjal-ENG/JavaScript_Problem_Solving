function fibonacci(n) {
  let a=0,b=1;
  for(let i=0; i<n.length; i++) {
    let c = a + b;
    a = b;
    b = c;
    console.log(a,b,c);
  }
}

const arrays = [1,2,3,4,5];
console.log(fibonacci(arrays));