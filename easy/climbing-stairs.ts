// https://leetcode.com/problems/climbing-stairs/

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
