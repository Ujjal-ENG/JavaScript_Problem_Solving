function pattern1(n){
  for(let col=1; col<=n;col++){
    for(let row=1;row<=col;row++){
      console.log('*')
    }
    console.log("\n");
  }
}

pattern1(5)