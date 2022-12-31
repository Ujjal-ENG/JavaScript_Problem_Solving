var permute = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    for (j = i; j < nums.length; j++) {
      console.log((nums[[i][j]] = nums[[j][i]]));
    }
  }
};

console.log(permute([1, 2, 3]));
