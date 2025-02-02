import { twoSum } from "../two-sum";

describe("twoSum", () => {
  it("should find two numbers that add up to target", () => {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
  });

  it("should work with non-sequential indices", () => {
    expect(twoSum([3, 2, 4], 6)).toEqual([1, 2]);
  });

  it("should work with duplicate numbers", () => {
    expect(twoSum([3, 3], 6)).toEqual([0, 1]);
  });

  // New test case: handling negative numbers
  it("should work with negative numbers", () => {
    expect(twoSum([-3, 4, 3, 90], 1)).toEqual([0, 1]);
  });
});
