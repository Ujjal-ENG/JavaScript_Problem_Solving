var rotatedDigits = function(n) {
    const numberSet = new Set(['2','5','6','9']);
    let count=0;
    for(let i=1;i<=n;i++){
        if(numberSet.has(i.toString())){
            count++;
        }
    }
    return count;
};

console.log(rotatedDigits(857));