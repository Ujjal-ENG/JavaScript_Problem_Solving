const solution = (letter) => {
  //Write Your solution Here
  //dont forget to return
  let newLet = letter.toLowerCase();
  if (
    newLet == "a" ||
    newLet == "e" ||
    newLet == "i" ||
    newLet == "o" ||
    newLet == "u"
  ) {
    return "VOWEL";
  }
  return "CONSONANT";
};

console.log(solution("k"));
