const firstRecurr = (arrays) => {

  //This is very unefficent solution because of time complexity is N^2
  // for (let i = 0; i < arrays.length; i++) {
  //   for (let j = i + 1; j < arrays.length; j++) {
  //     if (arrays[i] === arrays[j]) {
  //       return arrays[i];
  //     }
  //   }
  // }
  // return undefined;
};

console.log(firstRecurr([2, 5, 1, 2, 3, 5, 1, 2, 4]));
