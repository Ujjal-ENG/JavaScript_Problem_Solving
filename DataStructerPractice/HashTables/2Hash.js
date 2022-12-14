class Solution {
  getPairsCount(arr, k) {
    const comArray = arr.concat(k)
    const ht = {};
    for (let i in comArray) {
      ht[comArray[i]] = ht[[i]]
    }

    for (let i in ht) {
      console.log(i)
    }
    
  }

}

const sol = new Solution();

sol.getPairsCount([1, 5, 7, 1], [1,2,3]);
