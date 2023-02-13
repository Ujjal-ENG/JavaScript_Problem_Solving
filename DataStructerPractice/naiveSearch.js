function naiveSearch(strings, tarStr) {
  // let count = 0;
  // for (let i = 0; i < strings.length; i++) {
  //   for (let j = 0; j < tarStr.length; j++) {
  //     console.log(tarStr[j], strings[i + j]);
  //     if (tarStr[j] !== strings[i + j]) {
  //       console.log("break");
  //       break;
  //     }
  //     if (j === tarStr.length - 1) {
  //       count++;
  //     }
  //   }
  // }
  // return count;

  let count = 0;
  for (let i = 0; i < strings.length; i++) {
    for (let j = 0; j < tarStr.length; j++) {
      console.log(tarStr[j], strings[i + j]);
      if (tarStr[j] !== strings[i + j]) {
        console.log("break");
        break;
      }
      if (j === tarStr.length - 1) {
        count++;
      }
    }
  }
  return count;
}

console.log(naiveSearch("bbbbb", "b"));
