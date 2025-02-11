import { strStr } from "../find-the-index-of-the-first-occurrence-in-a-string";

describe("strStr", () => {
  it("should find basic substring occurrences", () => {
    expect(strStr("hello", "ll")).toBe(2);
    expect(strStr("aaaaa", "bba")).toBe(-1);
    expect(strStr("sadbutsad", "sad")).toBe(0);
  });

  it("should handle empty strings", () => {
    expect(strStr("", "")).toBe(0);
    expect(strStr("hello", "")).toBe(0);
    expect(strStr("", "a")).toBe(-1);
  });

  it("should handle single character searches", () => {
    expect(strStr("hello", "h")).toBe(0);
    expect(strStr("hello", "o")).toBe(4);
    expect(strStr("hello", "x")).toBe(-1);
  });

  it("should handle overlapping patterns", () => {
    expect(strStr("aaa", "aa")).toBe(0);
    expect(strStr("mississippi", "issi")).toBe(1);
    expect(strStr("babab", "bab")).toBe(0);
  });

  it("should handle full string matches", () => {
    expect(strStr("hello", "hello")).toBe(0);
    expect(strStr("a", "a")).toBe(0);
    expect(strStr("abc", "abc")).toBe(0);
  });

  it("should handle cases where needle is longer than haystack", () => {
    expect(strStr("hi", "hello")).toBe(-1);
    expect(strStr("a", "ab")).toBe(-1);
  });

  it("should handle repeated characters", () => {
    expect(strStr("aaaaa", "aaa")).toBe(0);
    expect(strStr("mississippi", "sipp")).toBe(6);
  });
});
