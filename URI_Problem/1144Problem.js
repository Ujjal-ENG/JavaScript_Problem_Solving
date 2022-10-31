var number = 1001;

if (number >= 1 || number <= 1000) {
  for (var i = 1; i <= number; i++) {
    console.log(`${i} ${Math.pow(i, 2)} ${Math.pow(i, 3)}`);
    console.log(`${i} ${Math.pow(i, 2) + 1} ${Math.pow(i, 3) + 1}`);
  }
} else {
  console.log('Number Is Exits the limit!!!');
}
