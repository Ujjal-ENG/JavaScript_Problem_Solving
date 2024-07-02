var addSpaces = function(s, spaces) {
  let result = "";
  let spacesSet = new Set(spaces);
    for (var i = 0; i < s.length; i++){
      if (spacesSet.has(i)){
        result += " ";
      }
      result+=(s[i]);
    }
    return result;
};

console.log(addSpaces("icodeinpython",  [1,5,7,9]));