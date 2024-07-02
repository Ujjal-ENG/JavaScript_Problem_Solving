var scoreOfString = function(s) {
  let result = 0;
  for (let i = 0; i < s.length; i++) {
    if( s.charCodeAt(i) !== NaN && s.charCodeAt(i+1)){
      result += Math.abs(s.charCodeAt(i) - s.charCodeAt(i+1));
    }
}
  return result;
};

console.log(scoreOfString('hello')); // 57  