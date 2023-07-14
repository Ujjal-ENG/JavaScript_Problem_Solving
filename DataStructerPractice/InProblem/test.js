const arr = [1, 2, 3, 4, 5, 6, 7];
const reversedArray = arr.toReversed();
// console.log(reversedArray);
// console.log(arr);

const cars = [
  {
    type: "Volvo",
    year: 2016,
  },
  {
    type: "Saab",
    year: 2001,
  },
  {
    type: "BMW",
    year: 2010
  }
]

const sortedJson = cars.sort((a, b) => {
  const x = a.type.toLowerCase()
  const y = b.type.toLowerCase()
  if (x < y) {
    return 1
  } else if (x > y) {
    return -1
  } else {
    return 0
  }
})
console.log(sortedJson)