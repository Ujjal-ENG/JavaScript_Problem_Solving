var moveZeroes = function (array) {
  let zeroItem = [];
  let otherNum = [];
  let NewArr = array.filter((item) => {
    if (item > 0) {
      otherNum.push(item);
    }
    if (item === 0) {
      zeroItem.push(item);
    }
  });
  let newItem = [];
  newItem = "[" + otherNum + "," + zeroItem + "]";
  return newItem;
};

console.log(moveZeroes([0, 1, 0, 3, 12]));
