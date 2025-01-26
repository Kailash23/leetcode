// https://leetcode.com/problems/valid-parentheses

function isValid(str: string): boolean {
  const arr: string[] = [];

  for (let i = 0; i < str.length; i++) {
    if (arr.length === 0) {
      arr.push(str[i]);
    } else if (arr[arr.length - 1] === "(" && str[i] === ")") {
      arr.pop();
    } else if (arr[arr.length - 1] === "{" && str[i] === "}") {
      arr.pop();
    } else if (arr[arr.length - 1] === "[" && str[i] === "]") {
      arr.pop();
    } else {
      arr.push(str[i]);
    }
  }

  return arr.length === 0;
}
