// function mergeSort(arr1, arr2) {
//   let results = [];

//   let i = 0;
//   let j = 0;

//   while (i < arr1.length && j < arr2.length) {
//     if (arr2[j] > arr1[i]) {
//       results.push(arr1[i]);
//       i++;
//     } else {
//       results.push(arr2[j]);
//       j++;
//     }
//   }
//   while (i < arr1.length) {
//     results.push(arr1[i]);
//     i++;
//   }
//   while (j < arr2.length) {
//     results.push(arr2[j]);
//     j++;
//   }
//   return results;
// }

function mergeSort(left, right) {
  let i = 0;
  let j = 0;
  let results = [];
  // let mid = Math.trunc(arrs.length / 2);
  // let left = arrs.slice(0, mid);
  // let right = arrs.slice(mid, arrs.length);

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      results.push(left[i]);
      i++;
    } else {
      results.push(right[j]);
      j++;
    }
  }

  while (i < left.length) {
    results.push(left[i]);
    i++;
  }
  while (j < right.length) {
    results.push(right[j]);
    j++;
  }
  return results;
}

function mergeSortRecuring(arr) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);

  let left = mergeSortRecuring(arr.slice(0, mid));
  let right = mergeSortRecuring(arr.slice(mid, arr.length));

  return mergeSort(left, right);
}

console.log(mergeSort([8, 10, 50, 2, 14, 99, 100]));
