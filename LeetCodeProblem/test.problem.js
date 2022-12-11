var isValid = function (s) {
  const stack = [];
  const pair = {
    "[": "]",
    "{": "}",
    "(": ")",
  };
  const isPaired = (a, b) => pair[a] === b;

  for (c of s) {
    if (isPaired(stack[stack.length - 1], c)) {
      stack.pop();
    } else {
      stack.push(c);
    }
  }
  return stack.length === 0;
};

console.log(isValid("(){}}{"));
