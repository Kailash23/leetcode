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

// Test cases
function runParenthesesTests(): void {
  const testCases = [
    { input: "()", expected: true },
    { input: "()[]{}", expected: true },
    { input: "(]", expected: false },
    { input: "([)]", expected: false },
    { input: "{[]}", expected: true },
    { input: "", expected: true },
    { input: "((", expected: false },
    { input: "){", expected: false },
  ];

  testCases.forEach((test, index) => {
    const result = isValid(test.input);
    console.log(`Test Case ${index + 1}:`);
    console.log(`Input: "${test.input}"`);
    console.log(`Expected: ${test.expected}`);
    console.log(`Output: ${result}`);
    console.log(`Result: ${result === test.expected ? "PASS" : "FAIL"}`);
    console.log("---");
  });
}

runParenthesesTests();
