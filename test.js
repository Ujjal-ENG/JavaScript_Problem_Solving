function isPrime(num) {
    if(typeof num === undefined) return false;
    if(num <= 1) return false;
    for(let i = 2; i <= Math.sqrt(num); i++) {
        if(num % i === 0) return false;
    }
    return true;
}

function extractNums(nums) {
    const result = [];
    for(let i = 0; i < nums.length; i++) {
       if(isPrime(nums[i])) {
         result.push(nums[i]+ "is a prime number");
       }
       else {
         result.push(nums[i]+ "is not a prime number");
       }
    }
    return result;
}

const arrays = [5,7,2,11,3,18,25,24,23]
console.log(extractNums(arrays));