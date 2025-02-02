import { removeDuplicates } from "../remove-duplicates";

describe("removeDuplicates", () => {
  it("should remove duplicates from sorted array", () => {
    const nums = [1, 1, 2];
    const k = removeDuplicates(nums);
    expect(k).toBe(2);
    expect(nums.slice(0, k)).toEqual([1, 2]);
  });

  it("should handle array with multiple duplicates", () => {
    const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
    const k = removeDuplicates(nums);
    expect(k).toBe(5);
    expect(nums.slice(0, k)).toEqual([0, 1, 2, 3, 4]);
  });

  it("should handle array with no duplicates", () => {
    const nums = [1, 2, 3];
    const k = removeDuplicates(nums);
    expect(k).toBe(3);
    expect(nums.slice(0, k)).toEqual([1, 2, 3]);
  });

  it("should handle empty array", () => {
    const nums: number[] = [];
    const k = removeDuplicates(nums);
    expect(k).toBe(0);
    expect(nums.slice(0, k)).toEqual([]);
  });

  // New test case: one-element array
  it("should handle one element array", () => {
    const nums = [5];
    const k = removeDuplicates(nums);
    expect(k).toBe(1);
    expect(nums.slice(0, k)).toEqual([5]);
  });
});
