function kopaArray(arr,size) {
  let result  = [];
 for(let i=0;i<=arr.length;i++) {
   result.push(arr.slice(size));
 }
 return result;
}

console.log(kopaArray([1,2,3,4,5],6));