function same(arr1, arr2) {
  arr1.sort((a, b) => a - b);
  arr2.sort((a, b) => a - b);

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] ** 2 === arr2[i]) {
      return true;
    }
    return false;
  }
  return false;
}

console.log(same([4, 2, 3], [9, 1, 4]));
