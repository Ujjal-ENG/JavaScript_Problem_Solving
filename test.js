function setCounter(init){
  let currentValue = init;
   return {
    increment: function(){
     currentValue = currentValue + 1;
     return currentValue;
   },
   decrement: function(){
      currentValue = currentValue - 1;
   return currentValue;
  },
  reset: function(){
    currentValue = init
    return currentValue;
  }
  }
}

 const count = setCounter(5);
 console.log(count.increment());
 console.log(count.reset());
 console.log(count.decrement());
 console.log(count.increment());
 console.log(count.reset());