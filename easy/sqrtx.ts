// https://leetcode.com/problems/sqrtx/
export function mySqrt(number: number): number {
  if (number === 0) {
    return 0;
  }

  if (number === 1) {
    return 1;
  }

  let lowerBound = 0,
    upperBound = number;

  while (lowerBound < upperBound) {
    let midPoint = Math.floor((lowerBound + upperBound) / 2);

    if (lowerBound === midPoint || midPoint * midPoint === number) {
      return midPoint;
    } else if (midPoint * midPoint > number) {
      upperBound = midPoint;
    } else {
      lowerBound = midPoint;
    }
  }

  return lowerBound;
}

// Time Complexity: O(log n) where n is the input number
// We use binary search, halving the search space in each iteration

// Space Complexity: O(1)
// We only use a fixed number of variables regardless of input size

// Example:
// Input: number = 8
// Output: 2
// Explanation: The square root of 8 is 2.82..., and since we return the truncated integer, 2 is returned
