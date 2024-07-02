var createCounter = function(init) {
  let counter = init;
    return {
      increment: function (){
       counter = counter +1;
        return counter;
      },
      reset: function (){
        counter = init;
        return counter;
      },
      decrement: function() {
        counter = counter -1;
        return counter;
      }
    }
};

const counter = createCounter(5);
console.log(counter.increment()); // 6
console.log(counter.reset()); // 5
console.log(counter.decrement()); // 4