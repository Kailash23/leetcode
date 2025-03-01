// https://leetcode.com/problems/palindrome-number/description/

// Time Complexity: O(n), where n is the number of digits in the number.
// We iterate through the number once to reverse it.

// Space Complexity: O(1), as we are using a constant amount of extra space for the reverseNum variable.

export function isPalindrome(x: number): boolean {
  let originalNum = x;
  let reverseNum = 0;

  while (x > 0) {
    const rem = x % 10;
    x = Math.floor(x / 10);
    reverseNum = reverseNum * 10 + rem;
  }

  return reverseNum === originalNum;
}

// Other's
export function isPalindrome2(x: number): boolean {
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
}

// Example 1:
// Input: x = 123
// Output: false

// Example 2:
// Input: x = 121
// Output: true
