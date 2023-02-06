function findLeapYear(arrOfYears) {
  //write your code here
  //don't forget to write return
  let learpYear = [];

  for (let i of arrOfYears) {
    if ((i % 4 == 0 && i % 100 != 0) || i % 400 == 0) {
      learpYear.push(i);
    }
  }
  return learpYear;
}

console.log(findLeapYear([2023, 2024, 2025, 2028, 2030]));
