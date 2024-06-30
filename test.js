function convertDtBNumber(number,base){
  let result = [];
  while(number>0){
    result.push(number%base);
    number = Math.floor(number/base);
  }
  return result.reverse().join('');
}

console.log(convertDtBNumber(634,8));