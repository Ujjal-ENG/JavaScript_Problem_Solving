// var removeElement = function (nums, val) {
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] === val) {
//       nums[i] = "_";
//     }
//   }
//   nums.sort();

//   for (let i = 0; i < nums.length; i++) {
//     nums.pop("_")
//   }

//   return nums;
// };

var removeElement = function (nums, val) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === val) {
      nums.splice(i, 1)
      i--
    }
  }
  return nums
}

console.log(removeElement([3, 2, 2, 3], 3));
