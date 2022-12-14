const checkBrac = (s) => {
  let store = [];
  store = s;
  for (let i = 0; i < store.length; i++) {
    if (
      store[i] === "(" ||
      store[i] === ")" ||
      store[i] === "{" ||
      store[i] === "}" ||
      store[i] === "[" ||
      store[i] === "]"
    ) {
     return true
    }
    return false
  }
};

console.log(checkBrac("a+(b*c)-2-a"));
