function reverseNumber(nums){
const reverseNumber = nums.toString().split('').reverse().join('');

return Number(reverseNumber);

}

console.log(reverseNumber(657843687));
