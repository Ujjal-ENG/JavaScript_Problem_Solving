function mergeSort(arr1, arr2) {
  const array = [...arr1, ...arr2];
  return array.sort((a, b) => a - b);
}

console.log(mergeSort([0, 3, 4, 31], [4, 6, 30]));
