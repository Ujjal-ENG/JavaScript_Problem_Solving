const totalCost = (products) => {
  let total = 0;
  for (i of products) {
    total += i.price;
  }
  return total;
};

console.log(
  totalCost([
    { name: "Samsung M33", price: 10000 },
    { name: "Samsung Charger", price: 500 },
    { name: "Haveit Speakers", price: 2500 },
  ])
);
