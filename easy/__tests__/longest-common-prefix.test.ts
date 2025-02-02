import { longestCommonPrefix } from "../longest-common-prefix";

describe("longestCommonPrefix", () => {
  it("should find common prefix in similar words", () => {
    expect(longestCommonPrefix(["flower", "flow", "flight"])).toBe("fl");
  });

  it("should return empty string when no common prefix exists", () => {
    expect(longestCommonPrefix(["dog", "racecar", "car"])).toBe("");
  });

  it("should handle words with long common prefix", () => {
    expect(
      longestCommonPrefix(["interspecies", "interstellar", "interstate"])
    ).toBe("inters");
  });

  it("should handle identical words", () => {
    expect(longestCommonPrefix(["throne", "throne"])).toBe("throne");
  });

  it("should handle empty array and single characters", () => {
    expect(longestCommonPrefix([""])).toBe("");
    expect(longestCommonPrefix(["a"])).toBe("a");
    expect(longestCommonPrefix(["", "b"])).toBe("");
  });

  // New test case: one of the strings is empty
  it("should return empty when one of the strings is empty", () => {
    expect(longestCommonPrefix(["abc", "", "abd"])).toBe("");
  });
});
