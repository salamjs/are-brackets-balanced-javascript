function areBracketsBalanced(str) {
  const start = "{[(";
  const end = "}])";
  const map = {
    "}": "{",
    ")": "(",
    "]": "[",
  };
  const stack = [];

  for(let i = 0; i < str.length; i++) {
    const char = str[i];

    if (start.includes(char)) {
      stack.push(char);
      continue;
    }

    if (stack.length === 0) return false;

    if (end.includes(char)) {
      const last = stack.pop();
      if (map[char] !== last) return false;
      continue;
    }
  }

  return !stack.length;
}

console.log(
  areBracketsBalanced("[{()}]")
); // -> true
console.log(
  areBracketsBalanced("(50)(")
); // -> false
