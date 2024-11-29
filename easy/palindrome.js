// https://leetcode.com/problems/palindrome-number/description/

// Mine
var isPalindrome = function (x) {
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
var isPalindrome = function (x) {
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
