class Solution {
  getPairsCount(arr, k) {
    const ht = {};
    for (let i in arr) {
      ht[arr[i]] = ht[arr[i]] + 1 || 1;
    }

  const newArr = ht.reduce((prev, curr) => {
      if (prev + curr === k) {
        return true;
      }
    });
    console.log(ht);
  }
}

const sol = new Solution();

sol.getPairsCount([1, 5, 7, 1], 6);
