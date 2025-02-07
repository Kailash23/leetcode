import { climbStairs } from "../climbing-stairs";

describe("climbStairs", () => {
  it("should handle base cases", () => {
    expect(climbStairs(1)).toBe(1);
    expect(climbStairs(2)).toBe(2);
  });

  it("should calculate correct number of ways for small stairs", () => {
    expect(climbStairs(3)).toBe(3); // [1,1,1], [1,2], [2,1]
    expect(climbStairs(4)).toBe(5); // [1,1,1,1], [1,1,2], [1,2,1], [2,1,1], [2,2]
  });

  it("should handle medium size stairs", () => {
    expect(climbStairs(5)).toBe(8);
    expect(climbStairs(6)).toBe(13);
    expect(climbStairs(7)).toBe(21);
  });

  it("should calculate large stairs efficiently", () => {
    expect(climbStairs(10)).toBe(89);
    expect(climbStairs(20)).toBe(10946);
  });

  it("should follow Fibonacci sequence pattern", () => {
    // Testing that n-th number is sum of previous two numbers
    const n = 8;
    const nMinus1 = climbStairs(n - 1);
    const nMinus2 = climbStairs(n - 2);
    expect(climbStairs(n)).toBe(nMinus1 + nMinus2);
  });
});
