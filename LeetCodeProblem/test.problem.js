var mergeKLists = function (list) {
  let takeArray = list.flat().sort((a, b) => a - b);
  return takeArray;
};
console.log(
  mergeKLists([
    [1, 4, 5],
    [1, 3, 4],
    [2, 6],
  ])
);
