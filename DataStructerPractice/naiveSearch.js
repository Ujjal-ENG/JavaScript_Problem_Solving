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
  const newStr = tarStr.join("");
  const newStrRev = tarStr.sort().join("");
  const newArra = [];
  for (let i = 0; i < strings.length; i++) {
    for (let j = 0; j < newStr.length; j++) {
      if (newStr[j] !== strings[i + j] && newStrRev[j] !== strings[i + j]) {
        break;
      }
      if (j === newStr.length - 1 || j === newStrRev.length - 1) {
        count++;
        newArra.push([i, j][0]);
      }
    }
  }
  return newArra;
}

console.log(naiveSearch("barfoothefoobarman", ["bar","foo","the"]));
