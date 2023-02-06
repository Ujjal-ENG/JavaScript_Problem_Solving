function checkTriangle(side1, side2, side3) {
  //write your code here
  //don't forget to write return
  if (side1 === side2 && side1 === side3 && side2 === side3) {
    return "No";
  }
  return "Yes";
}

console.log(checkTriangle(9, 8, 9));
