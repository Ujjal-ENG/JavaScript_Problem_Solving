// Const arr  = [1, 5, 9, 14, 5, 22, 48, 25, 22, 20, 9, 13];
// How to find out the largest elements from this array?
 const arr  = [1, 5, 9, 14, 5, 22, 48, 25, 22, 20, 9, 13];
function LargetNum(arr) {
  let num = Math.max(...arr)
  return arr
}

console.log(LargetNum(arr))