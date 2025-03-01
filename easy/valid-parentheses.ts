// https://leetcode.com/problems/valid-parentheses

export function isValid(str: string): boolean {
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

// Time Complexity: O(n) where n is the length of the input string
// We traverse the string once, with O(1) stack operations

// Space Complexity: O(n)
// In the worst case (e.g., all opening brackets), we store all characters in the stack

// Example:
// Input: str = "()[]{}"
// Output: true
// Explanation: All brackets are properly closed in the correct order
