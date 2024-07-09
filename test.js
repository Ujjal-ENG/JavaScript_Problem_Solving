var findWordsContaining = function(words, x) {
    let result = [];
    for(let [word,ins] of words) {
      if(word.includes(x)) result.push(ins[0]);
    }
    return result;
};

console.log(findWordsContaining(["abc","bcd","aaaa","cbc"],"a"));