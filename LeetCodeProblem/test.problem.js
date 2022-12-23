var plusOne = function (digits) {
  let arr = digits
    .toString()
    .split(",")
    .join("")
    .charAt(digits.length - 1);
  const res = Number(arr) + 1 + "";
  if (res.length !== 1) {
    let newNum = parseInt(res);
    console.log(newNum);
  } else {
    console.log("kop");
  }
};
console.log(plusOne([9]));
