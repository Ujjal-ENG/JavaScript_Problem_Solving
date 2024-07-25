function binarySearch(arrs, value) {
   let min = 0;
   let max = arrs.length - 1;

  // while (min <= max) {
  //   let middle = Math.floor((min + max) / 2);

  //   let currentEl = arrs[middle];

  //   if (currentEl < value) {
  //     min = middle + 1;
  //   } else if (currentEl > value) {
  //     max = middle - 1;
  //   } else {
  //     return middle;
  //   }
  // }
  // return -1;

  let left = 0;
  let right = arrs.length - 1;

  while (left <= right) {
    let middle = Math.floor((left + right) / 2);

    let currentEl = arrs[middle];

    if (currentEl > value) {
      right = middle - 1;
    } else if (currentEl < value) {
      left = middle + 1;
    } else {
      return middle;
    }
  }
  return -1;
}

console.log(binarySearch([1, 2, 3, 4, 5, 6, 8], 9));
