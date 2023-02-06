function countZeros(binary_num) {
  //Write your code here
  //Don't forget to return
  let count = 0;
  let newNum = binary_num + "";
  for (let i of newNum) {
    if (i.includes("0")) {
      count++;
    }
  }
  return count;
}

console.log(countZeros(10101));
