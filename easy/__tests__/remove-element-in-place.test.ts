import { removeElement } from "../remove-element-in-place";

describe("removeElement", () => {
  it("should remove all instances of val", () => {
    const nums = [3, 2, 2, 3];
    const val = 3;
    const k = removeElement(nums, val);
    expect(k).toBe(2);
    expect(nums.slice(0, k).sort()).toEqual([2, 2]);
  });

  it("should handle multiple occurrences", () => {
    const nums = [0, 1, 2, 2, 3, 0, 4, 2];
    const val = 2;
    const k = removeElement(nums, val);
    expect(k).toBe(5);
    expect(nums.slice(0, k).sort()).toEqual([0, 0, 1, 3, 4]);
  });

  it("should handle empty array", () => {
    const nums: number[] = [];
    const val = 1;
    const k = removeElement(nums, val);
    expect(k).toBe(0);
    expect(nums.slice(0, k)).toEqual([]);
  });

  it("should handle array with no matches", () => {
    const nums = [1, 2, 3, 4];
    const val = 5;
    const k = removeElement(nums, val);
    expect(k).toBe(4);
    expect(nums.slice(0, k).sort()).toEqual([1, 2, 3, 4]);
  });
});
