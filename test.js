function findDuplicates(nums){
    const ht = {};
    for(let num of nums){
        ht[num] = ht
    }
}

console.log(findDuplicates([1, 2, 3, 4, 5, 2, 3])); // [2, 3]