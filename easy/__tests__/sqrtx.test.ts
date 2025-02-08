import { mySqrt } from "../sqrtx";

describe("mySqrt", () => {
  it("should handle perfect squares", () => {
    expect(mySqrt(0)).toBe(0);
    expect(mySqrt(1)).toBe(1);
    expect(mySqrt(4)).toBe(2);
    expect(mySqrt(9)).toBe(3);
    expect(mySqrt(16)).toBe(4);
    expect(mySqrt(25)).toBe(5);
  });

  it("should handle non-perfect squares", () => {
    expect(mySqrt(2)).toBe(1); // √2 ≈ 1.414
    expect(mySqrt(3)).toBe(1); // √3 ≈ 1.732
    expect(mySqrt(8)).toBe(2); // √8 ≈ 2.828
    expect(mySqrt(15)).toBe(3); // √15 ≈ 3.873
  });

  it("should handle large numbers", () => {
    expect(mySqrt(100)).toBe(10);
    expect(mySqrt(999)).toBe(31); // √999 ≈ 31.606
    expect(mySqrt(10000)).toBe(100);
  });

  it("should handle edge cases", () => {
    expect(mySqrt(2147483647)).toBe(46340); // Max int
    expect(mySqrt(Math.pow(2, 31) - 1)).toBe(46340);
  });
});
