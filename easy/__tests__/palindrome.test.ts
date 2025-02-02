import { isPalindrome, isPalindrome2 } from "../palindrome";

describe("isPalindrome", () => {
  it("should identify palindrome numbers", () => {
    expect(isPalindrome(121)).toBe(true);
    expect(isPalindrome(12321)).toBe(true);
    expect(isPalindrome(0)).toBe(true);
  });

  it("should identify non-palindrome numbers", () => {
    expect(isPalindrome(-121)).toBe(false);
    expect(isPalindrome(10)).toBe(false);
    expect(isPalindrome(123)).toBe(false);
  });
});

describe("isPalindrome2 (Optimized)", () => {
  it("should identify palindrome numbers", () => {
    expect(isPalindrome2(121)).toBe(true);
    expect(isPalindrome2(12321)).toBe(true);
    expect(isPalindrome2(0)).toBe(true);
  });

  it("should identify non-palindrome numbers", () => {
    expect(isPalindrome2(-121)).toBe(false);
    expect(isPalindrome2(10)).toBe(false);
    expect(isPalindrome2(123)).toBe(false);
  });

  it("should handle edge cases", () => {
    expect(isPalindrome2(1000021)).toBe(false);
    expect(isPalindrome2(11)).toBe(true);
    expect(isPalindrome2(1)).toBe(true);
  });
});

// New additional tests for multi-digit numbers
describe("Additional Palindrome tests", () => {
  it("should work for multiple-digit numbers", () => {
    expect(isPalindrome(1001)).toBe(true);
    expect(isPalindrome(100)).toBe(false);
    expect(isPalindrome2(1001)).toBe(true);
    expect(isPalindrome2(100)).toBe(false);
  });
});
