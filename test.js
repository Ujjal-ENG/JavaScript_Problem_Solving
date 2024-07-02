var addSpaces = function(s, spaces) {
  let result = [];
    for (var i = 0; i < s.length; i++){
      if (spaces.includes(i)){
        result.push(" ");
      }
      result.push(s[i]);
    }
    return result.join("");
};

console.log(addSpaces("icodeinpython",  [1,5,7,9]));