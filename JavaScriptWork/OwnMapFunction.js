const array = [2, 4, 5, 6, 8];

const area = (radius) => {
  return Math.PI * radius * radius;
};

const calculate = (array, logic) => {
  let output = [];
  for (let i = 0; i < array.length; i++) {
    output.push(logic(array[i]));
  }
  return output;
};

console.log(calculate(array, area));
console.log(array.map(area));
