function barChartFuntion(arrs){
  for(let i of arrs){
    console.log(makeStar(i));
  }
}
function makeStar(num){
  let star = "";
  for(let i = 0; i < num; i++){
    star += "*";
  }
  return star;
}

barChartFuntion([4,3,2,0,5,3])  