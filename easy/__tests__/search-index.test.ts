import { searchInsert } from "../search-index";

describe("searchInsert", () => {
  it("should return the index when the target is found", () => {
    expect(searchInsert([1, 3, 5, 6], 5)).toBe(2);
    expect(searchInsert([1, 3, 5, 6], 1)).toBe(0);
    expect(searchInsert([1, 3, 5, 6], 6)).toBe(3);
  });

  it("should return the index where the target should be inserted", () => {
    expect(searchInsert([1, 3, 5, 6], 2)).toBe(1);
    expect(searchInsert([1, 3, 5, 6], 7)).toBe(4);
    expect(searchInsert([1, 3, 5, 6], 0)).toBe(0);
  });

  it("should return the length of the array if the target is greater than all elements", () => {
    expect(searchInsert([], 1)).toBe(0);
    expect(searchInsert([1, 2, 3], 4)).toBe(3);
  });

  // New test case: one-element array
  it("should handle one-element array", () => {
    expect(searchInsert([2], 2)).toBe(0);
    expect(searchInsert([2], 1)).toBe(0);
    expect(searchInsert([2], 3)).toBe(1);
  });
});
