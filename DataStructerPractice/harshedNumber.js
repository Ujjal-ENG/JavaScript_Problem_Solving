var sumOfTheDigitsOfHarshadNumber = function(x) {
    let sum = 0;
    const exitNum = x;
    while (x !== 0) {
        sum += x % 10;
        x = Math.floor(x / 10);
    }
    if(exitNum%sum===0){
        return sum;
    }
    return -1;
};
console.log(sumOfTheDigitsOfHarshadNumber(18)) //output: -1