function generateTheZero(number) {
    let generateNumber = 1;
    for(let i=1;i<=number;i++){
        generateNumber+="0";
    }
    return Number(generateNumber)
}

function rotateNumber(number, direction) {
    if(number === 0) return 0;
    if(String(number).length === direction) return number;
  const zero = generateTheZero(direction);
  const [firstPart,rest] = String(number/zero).split('.');
  return Number(`${rest}${firstPart}`);
}


console.log(rotateNumber(12345, 5)); // Output: 54123