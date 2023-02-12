// function same(arr1, arr2) {
//   arr1.sort((a, b) => a - b);
//   arr2.sort((a, b) => a - b);

//   for (let i = 0; i < arr1.length; i++) {
//     if (arr1.length === arr2.length) {
//       if (arr1[i] ** 2 === arr2[i]) {
//         return true;
//       }
//       return false;
//     } else {
//       return false;
//     }
//   }
//   return false;
// }

// function same(arr1, arr2) {
//   if (arr1.length !== arr2.length) {
//     return false;
//   }
//   for (let i = 0; i < arr1.length; i++) {
//     let correntIndex = arr2.indexOf(arr1[i] ** 2);
//     if (correntIndex === -1) {
//       return false;
//     }
//     console.log(arr2);
//     arr2.splice(correntIndex, 1);
//   }
//   return true;
// }

// function same(arr1, arr2) {
//   if (arr1.length === arr2.length) {
//     for (let i of arr1) {
//       let currentIndex = arr2.indexOf(i ** 2);
//       if (currentIndex === -1) {
//         return false;
//       }
//       console.log(arr2);
//       arr2.splice(currentIndex, 1);
//     }
//     return true;
//   }

//   return false;
// }

function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  const freq1 = {};

  const freq2 = {};

  for (let i of arr1) {
    freq1[i] = freq1[i] || 1;
  }

  for (let j of arr2) {
    freq2[j] = freq2[j] || 1;
  }

  for (let key in freq1) {
    if (!(key ** 2 in freq2)) {
      return false;
    }
    if (freq2[key ** 2] !== freq1[key]) {
      return false;
    }
  }
  console.log(freq1);
  console.log(freq2);
  return true;
}

console.log(same([2, 1, 4, 2], [9, 4, 1, 4]));
