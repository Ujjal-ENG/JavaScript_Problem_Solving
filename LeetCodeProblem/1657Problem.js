var closeStrings = function (word1, word2) {
  let c1 = word1.length;
  let c2 = word2.length;
  if (c1 === c2) {
    return true
  }
  return false
};
closeStrings("abc", "bca");
