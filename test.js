function positionInverse(nums){
    let numbers = nums.toString();
    let resultNum = [];
    for(let i =0;i<numbers.length;i++){
        resultNum[i] = numbers[numbers.length - 1 - i];
    }
    return resultNum.join('');
}

console.log(positionInverse(657843687));
