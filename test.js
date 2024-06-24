function positionInverse(nums){
    let count = 0;
    let position =[];
    let mod;
   while(nums > 0){
    mod = (nums/10).toString().slice(-1);
    nums = Math.floor(nums / 10);
    position.push([mod, count+1]);
    count++;
   }
return {count: count, position: position};
}

console.log(positionInverse(21453));

//output: 23154
// P d = a
// 3 1 = 4
// 5 2 = 5
// 4 3 = 1
// 1 4 = 3
// 2 5 = 2