import { plusOne } from "../plus-one-array";

describe("plusOne", () => {
  it("should handle regular cases", () => {
    expect(plusOne([1, 2, 3])).toEqual([1, 2, 4]);
    expect(plusOne([4, 3, 2, 1])).toEqual([4, 3, 2, 2]);
    expect(plusOne([1, 0, 0])).toEqual([1, 0, 1]);
  });

  it("should handle numbers ending in 9", () => {
    expect(plusOne([1, 2, 9])).toEqual([1, 3, 0]);
    expect(plusOne([9, 9])).toEqual([1, 0, 0]);
    expect(plusOne([9])).toEqual([1, 0]);
    expect(plusOne([2, 9, 9])).toEqual([3, 0, 0]);
  });

  it("should handle edge cases", () => {
    expect(plusOne([0])).toEqual([1]);
    expect(plusOne([9, 9, 9, 9])).toEqual([1, 0, 0, 0, 0]);
    expect(plusOne([8, 9, 9, 9])).toEqual([9, 0, 0, 0]);
    expect(plusOne([1, 9, 9, 9])).toEqual([2, 0, 0, 0]);
  });

  it("should handle single digit cases", () => {
    expect(plusOne([1])).toEqual([2]);
    expect(plusOne([9])).toEqual([1, 0]);
    expect(plusOne([5])).toEqual([6]);
  });

  it("should handle sequences of nines", () => {
    expect(plusOne([9, 9, 9])).toEqual([1, 0, 0, 0]);
    expect(plusOne([9, 9, 9, 9, 9])).toEqual([1, 0, 0, 0, 0, 0]);
    expect(plusOne([1, 9, 9])).toEqual([2, 0, 0]);
  });

  it("should handle numbers with trailing zeros", () => {
    expect(plusOne([1, 0])).toEqual([1, 1]);
    expect(plusOne([9, 0])).toEqual([9, 1]);
    expect(plusOne([1, 0, 0, 0])).toEqual([1, 0, 0, 1]);
  });
});
