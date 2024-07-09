var findWordsContaining = function(words, x) {
    let result = [];
    for(let word of words) {
      if(word.includes(x)) result.push(word[0]);
    }
    return result;
};

console.log(findWordsContaining(["abc","bcd","aaaa","cbc"],"a"));