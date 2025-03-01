// https://leetcode.com/problems/climbing-stairs/

// Time Complexity: O(n), where n is the number of steps. We iterate through the loop n-2 times.
// Space Complexity: O(1), as we are using a constant amount of space for the variables prev1, prev2, and current.

export function climbStairs(n: number): number {
  if (n === 1) {
    return 1;
  }

  if (n === 2) {
    return 2;
  }

  let prev1 = 1,
    prev2 = 2;

  for (let i = 2; i < n; i++) {
    let current = prev1 + prev2;
    prev1 = prev2;
    prev2 = current;
  }

  return prev2;
}

// Example 1:
// Input: n = 2
// Output: 2

// Example 2:
// Input: n = 5
// Output: 8
