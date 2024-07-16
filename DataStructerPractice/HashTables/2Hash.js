class Solution {
  getPairsCount(arr, k) {
    const ht = {};
    for (let i in arr) {
      ht[arr[i]] = true;
    }

    for (let j in k) {
      if (ht[k[j]]) {
        console.log("true");
      }
      console.log("false");
    }
  }
}

const sol = new Solution();

sol.getPairsCount([1, 5, 7, 1], [1, 2, 3]);
