// https://leetcode.com/problems/palindrome-number/description/

// Mine
var isPalindrome = function (x: number): boolean {
  let originalNum = x;
  let reverseNum = 0;

  while (x > 0) {
    const rem = x % 10;
    x = Math.floor(x / 10);
    reverseNum = reverseNum * 10 + rem;
  }

  return reverseNum === originalNum;
};

// Other's
var isPalindrome2 = function (x: number): boolean {
  // Negative numbers and numbers ending with 0 (except 0 itself) cannot be palindromes
  if (x < 0 || (x % 10 === 0 && x !== 0)) return false;

  let reverseNum = 0;

  // Only reverse half of the number to save computations
  while (x > reverseNum) {
    reverseNum = reverseNum * 10 + (x % 10);
    x = Math.floor(x / 10);
  }

  // Check if the original number is equal to the reversed half
  return x === reverseNum || x === Math.floor(reverseNum / 10);
};

// Test cases
function runPalindromeTests(): void {
  const testCases = [
    { input: 121, expected: true },
    { input: -121, expected: false },
    { input: 10, expected: false },
    { input: 12321, expected: true },
    { input: 0, expected: true },
  ];

  console.log("\nTesting isPalindrome (Mine):");
  testCases.forEach((test, index) => {
    const result = isPalindrome(test.input);
    console.log(`Test Case ${index + 1}:`);
    console.log(`Input: ${test.input}`);
    console.log(`Expected: ${test.expected}`);
    console.log(`Output: ${result}`);
    console.log(`Result: ${result === test.expected ? "PASS" : "FAIL"}`);
    console.log("---");
  });

  console.log("\nTesting isPalindrome2 (Optimized):");
  testCases.forEach((test, index) => {
    const result = isPalindrome2(test.input);
    console.log(`Test Case ${index + 1}:`);
    console.log(`Input: ${test.input}`);
    console.log(`Expected: ${test.expected}`);
    console.log(`Output: ${result}`);
    console.log(`Result: ${result === test.expected ? "PASS" : "FAIL"}`);
    console.log("---");
  });
}

runPalindromeTests();
