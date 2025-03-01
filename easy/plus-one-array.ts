// https://leetcode.com/problems/plus-one/

export function plusOne(digits: number[]): number[] {
  let needsCarryOver = false;

  for (
    let currentIndex = digits.length - 1;
    currentIndex >= 0;
    currentIndex--
  ) {
    if (digits[currentIndex] === 9) {
      digits[currentIndex] = 0;
      needsCarryOver = true;
    } else {
      digits[currentIndex] = digits[currentIndex] + 1;
      needsCarryOver = false;
      break;
    }
  }

  if (needsCarryOver) {
    return [1, ...digits];
  }

  return digits;
}

// Time Complexity: O(n) where n is the length of the digits array
// In the worst case, we need to iterate through all digits (e.g., [9,9,9])

// Space Complexity: O(1) for the normal case as we modify the input array in-place
// In the edge case where we need to add a new digit at the beginning,
// it becomes O(n) due to creating a new array with the spread operator

// Example:
// Input: [1,2,3]
// Output: [1,2,4]
// Explanation: The array represents the integer 123, incrementing by one gives 124.
